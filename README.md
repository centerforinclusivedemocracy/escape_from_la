# leaflet-map-example
A simple leaflet map example from my blog at https://opengislab.com/

The actual blog post that accompanies this is here: https://opengislab.com/blog/2018/2/4/creating-simple-leaflet-web-map

Demo site: https://stephsaephan.github.io/leaflet-map-example/

For the demo web map all of the data layers are turned off by default with exception of a basemap. I also included OSM 2.5D builidngs to the map as well. You may have to zoom in/out at different scales to see some of the map layers. For example, the 2.5D buildings will only display when shown at scale of about 1000ft - if you zoom out before 1000ft it will not display.

#### Data processing:
To process precinct and vote center voting data for LA county and output data as geojsons to be used in leaflet map, run process_data.py, edited with your personal file locations filled in for the following variables:

- precincts_shape (str): File location for precincts shapefile.
- registered_voters (str): File location for registered voter data (filename: "1- Count of registered voters by precinct.csv").
- voters (str): File location for registered voter data (filename: "2- Count of votes cast (broken out by VBM and in-person ballots) by precinct.csv").
- votecenter_shape (str): File location for vote centers shapefile.
- votecenter_voters (str): File location for vote centers voting data (filename: "3- Count of in-person ballots cast for each vote center with VBM return method_LA.csv")
- output_loc (str): Directory location for output geojson file.
