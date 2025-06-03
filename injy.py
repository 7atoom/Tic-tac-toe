import pandas as pd
import matplotlib.pyplot as plt

# Load the dataset (replace 'dataset.csv' with your actual dataset file)
data = pd.read_csv('dataset.csv')

# Filter the dataset for Bedford city
bedford_data = data[data['City'] == 'Bedford']

# Ensure the dataset contains necessary columns (e.g., 'Date' and 'Precipitation')
if 'Date' in bedford_data.columns and 'Precipitation' in bedford_data.columns:
    # Convert the 'Date' column to datetime format for proper plotting
    bedford_data['Date'] = pd.to_datetime(bedford_data['Date'])

    # Sort the data by date
    bedford_data = bedford_data.sort_values(by='Date')

    # Plot the data
    plt.figure(figsize=(10, 6))
    plt.plot(bedford_data['Date'], bedford_data['Precipitation'], marker='o', linestyle='-', color='b')

    # Add labels and title
    plt.xlabel('Date')
    plt.ylabel('Precipitation (mm)')
    plt.title('Precipitation Levels Over Time in Bedford')

    # Rotate x-axis labels for better readability
    plt.xticks(rotation=45)

    # Show the plot
    plt.tight_layout()
    plt.show()
else:
    print("The dataset must contain 'Date' and 'Precipitation' columns.")