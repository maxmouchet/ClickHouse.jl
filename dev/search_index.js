var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Home",
    "title": "Home",
    "category": "page",
    "text": ""
},

{
    "location": "#Home-1",
    "page": "Home",
    "title": "Home",
    "category": "section",
    "text": "(View project on GitHub)"
},

{
    "location": "#Getting-Started-1",
    "page": "Home",
    "title": "Getting Started",
    "category": "section",
    "text": "The package can be installed with the Julia package manager. From the Julia REPL, type ] to enter the Pkg REPL mode and run:pkg> registry add https://github.com/maxmouchet/JuliaRegistry.git\npkg> add ClickHouseusing ClickHouse\nclient = ClickHouseClient(\"http://localhost:8123\")\n\ntable_sql = \"\"\"\nCREATE TABLE clickhouse_jl_test (\n    a UInt32,\n    b Float64)\nENGINE MergeTree()\nORDER BY a\n\"\"\"\n\nquery(client, table_sql)\nquery(client, \"INSERT INTO clickhouse_jl_test (a, b) VALUES (1, 3.14) (2, 1.61)\")\n\nquery(client, \"SELECT * FROM clickhouse_jl_test\")\n# df = 2×2 DataFrames.DataFrame\n# │ Row │ a      │ b        │\n# │     │ Int64⍰ │ Float64⍰ │\n# ├─────┼────────┼──────────┤\n# │ 1   │ 1      │ 3.14     │\n# │ 2   │ 2      │ 1.61     │\n\nquery(client, \"DROP TABLE clickhouse_jl_test\")"
},

{
    "location": "client/#",
    "page": "Client",
    "title": "Client",
    "category": "page",
    "text": ""
},

{
    "location": "client/#ClickHouse.ClickHouseClient",
    "page": "Client",
    "title": "ClickHouse.ClickHouseClient",
    "category": "type",
    "text": "ClickHouseClient(url::AbstractString; params...)\n\nExample\n\nclient = ClickHouseClient(\"http://localhost:8123\")\nclient = ClickHouseClient(\"http://localhost:8123\", user=\"...\", password=\"...\")\n\n\n\n\n\n"
},

{
    "location": "client/#Client-1",
    "page": "Client",
    "title": "Client",
    "category": "section",
    "text": "ClickHouseClient"
},

{
    "location": "_index/#",
    "page": "Index",
    "title": "Index",
    "category": "page",
    "text": ""
},

{
    "location": "_index/#Index-1",
    "page": "Index",
    "title": "Index",
    "category": "section",
    "text": ""
},

]}
