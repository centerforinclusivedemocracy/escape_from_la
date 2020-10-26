# leaflet-map-example

Some formatting notes: 

Demo site: https://stephsaephan.github.io/leaflet-map-example/

For the demo web map all of the data layers are turned off by default with exception of a basemap. I also included OSM 2.5D builidngs to the map as well. You may have to zoom in/out at different scales to see some of the map layers. For example, the 2.5D buildings will only display when shown at scale of about 1000ft - if you zoom out before 1000ft it will not display.

#### Data processing:
To process precinct level voting data for LA county and output data as a geojson to be used in leaflet map, run precincts_data_processing.py with the following arguments:

- precincts_shape (str): File location for precincts shapefile.
- registered_voters (str): File location for registered voter data (filename: "1- Count of registered voters by precinct.csv").
- voters (str): File location for registered voter data (filename: "2- Count of votes cast (broken out by VBM and in-person ballots) by precinct.csv").
- output_loc (str): Directory location for output geojson file.
- round_coords (bool): True or False for whether to round precinct polygon coordinates to reduce file size (default True).
- places (int): Number of decimal places to round precinct polygon coordinates to, as an integer (default 6 at .01m accuracy).

`python process_precincts(precincts_shape, registered_voters, voters, output_loc)`
