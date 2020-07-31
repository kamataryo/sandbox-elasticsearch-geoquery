(async () => {
  const client = new Elasticsearch.Client();
  const result = await client
    .search({
      index: "index-name",
      body: {
        query: {
          bool: {
            must: {
              match_all: {},
            },
            filter: {
              geo_shape: {
                geometry: {
                  shape: {
                    type: "envelope",
                    coordinates: [
                      [134.9395751953125, 35.27253175660236],
                      [136.07666015625, 34.492975402501536],
                    ],
                  },
                  relation: "within",
                },
              },
            },
          },
        },
      },
    })
    .catch((error) => console.error(error));
  console.log(JSON.stringify(result.body.hits, null, 2));
})();
