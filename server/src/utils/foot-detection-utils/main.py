import sys
from skimage.io import imread
import os
import pandas as pd
from utils import *
import json

# Define shoe size charts
shoe_size_chart = {
    "Women": {
        "US": [6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11],
        "EU": ["36-37", 37, "37-38", 38, "38-39", 39, "39-40", 40, "40-41", 41, "41-42"],
        "UK": [4, 4.5, 5, 5.5, 6, 6.5, 7, 7.5, 8, 8.5, 9],
        "Foot Length (cm)": [22.5, 23, 23.5, 23.8, 24, 24.6, 25, 25.4, 25.9, 26.2, 26.7]
    },
    "Men": {
        "US": [7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12, 13],
        "EU": [40, "40-41", 41, "41-42", 42, "42-43", 43, "43-44", 44, "44-45", 45, 46],
        "UK": [6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 12],
        "Foot Length (cm)": [24.4, 24.8, 25.2, 25.7, 26, 26.5, 26.8, 27.3, 27.8, 28.3, 28.6, 29.4]
    }
}

# Convert shoe size charts to DataFrames
women_shoe_chart = pd.DataFrame(shoe_size_chart["Women"])
men_shoe_chart = pd.DataFrame(shoe_size_chart["Men"])

# Function to find shoe size based on foot length and gender
def find_shoe_size(foot_length, gender="Women"):
    if gender == "Women":
        chart = women_shoe_chart
    elif gender == "Men":
        chart = men_shoe_chart
    else:
        raise ValueError("Gender must be 'Women' or 'Men'")
    
    # Find the closest foot length match
    closest_match = chart.iloc[(chart['Foot Length (cm)'] - foot_length).abs().argsort()[:1]]
    return closest_match[['US', 'EU', 'UK', 'Foot Length (cm)']]

def main():
    ImgName = sys.argv[1]
    fullImgPath = './public/images/foot-uploads/' + ImgName
    gender = sys.argv[2] if len(sys.argv) > 2 else "Women"  # Default to "Women" if gender not specified
    oimg = imread(fullImgPath)

    preprocessedOimg = preprocess(oimg)
    clusteredImg = kMeans_cluster(preprocessedOimg)
    edgedImg = edgeDetection(clusteredImg)

    boundRect, contours, contours_poly, img = getBoundingBox(edgedImg)
    croppedImg, pcropedImg = cropOrig(boundRect[1], clusteredImg)
    newImg = overlayImage(croppedImg, pcropedImg)
    fedged = edgeDetection(newImg)
    fboundRect, fcnt, fcntpoly, fimg = getBoundingBox(fedged)

    # Calculate the foot size
    foot_length = calcFeetSize(pcropedImg, fboundRect) / 10
    # Find the shoe size
    shoe_size = find_shoe_size(foot_length, gender)
    
    # Output the foot length and shoe sizes in JSON format
    shoe_size_info = shoe_size.to_dict(orient='records')[0]  # Convert to dictionary and extract the first record
    shoe_size_info["foot_length"] = foot_length  # Add the foot length to the result

    print(json.dumps(shoe_size_info))  # This will print only the JSON data

if __name__ == '__main__':
    main()
