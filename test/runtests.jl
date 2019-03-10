using Test
using Logging
using ClickHouse

global_logger(SimpleLogger(stdout, Logging.Debug))

@testset "Client" begin
    client = ClickHouseClient("http://localhost:8123")
    query(client, "CREATE TABLE clickhouse_jl_test (a UInt32, b Float64) ENGINE MergeTree() ORDER BY a")
    query(client, "INSERT INTO clickhouse_jl_test (a, b) VALUES (1, 1.0) (2, 2.0)")
    df = query(client, "SELECT * FROM clickhouse_jl_test")
    @test size(df) == (2, 2)
    query(client, "DROP TABLE clickhouse_jl_test")
end
