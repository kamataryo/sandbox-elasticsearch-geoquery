(async () => {
  const client = new Elasticsearch.Client();
  const result = await client
    .search({
      index: "index-name",
      body: {
        sort: [
          {
            _geo_distance: {
              point: [136.07666015625, 34.492975402501536],
              order: "asc",
            },
          },
        ],
      },
    })
    .catch((error) => console.error(error));
  console.log(JSON.stringify(result.body.hits, null, 2));
})();
