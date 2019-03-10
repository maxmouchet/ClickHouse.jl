# Home

*([View project on GitHub](https://github.com/maxmouchet/ClickHouse.jl))*

## Getting Started

The package can be installed with the Julia package manager.
From the Julia REPL, type `]` to enter the Pkg REPL mode and run:

```
pkg> registry add https://github.com/maxmouchet/JuliaRegistry.git
pkg> add ClickHouse
```

```julia
using ClickHouse
client = ClickHouseClient("http://localhost:8123")

table_sql = """
CREATE TABLE clickhouse_jl_test (
    a UInt32,
    b Float64)
ENGINE MergeTree()
ORDER BY a
"""

query(client, table_sql)
query(client, "INSERT INTO clickhouse_jl_test (a, b) VALUES (1, 3.14) (2, 1.61)")

query(client, "SELECT * FROM clickhouse_jl_test")
# df = 2×2 DataFrames.DataFrame
# │ Row │ a      │ b        │
# │     │ Int64⍰ │ Float64⍰ │
# ├─────┼────────┼──────────┤
# │ 1   │ 1      │ 3.14     │
# │ 2   │ 2      │ 1.61     │

query(client, "DROP TABLE clickhouse_jl_test")
```