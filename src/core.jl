struct ClickHouseClient
    url::URI
end

ClickHouseClient(url::AbstractString) = ClickHouseClient(URI(url))

# ClickHouseClient()

# TODO: Auth, database, ...
# TODO: Error and exceptions handling

function query(client::ClickHouseClient, query_str)
    query_str = strip(query_str)
    query_str = strip(query_str, [';'])

    if !startswith(query_str, "INSERT INTO")
        query_str = "$(query_str) FORMAT CSVWithNames"
    end

    @debug query_str

    response = HTTP.post(string(client.url), [], query_str)
    resp_str = String(response.body)
    # TODO: Check status code

    @debug response

    CSV.read(IOBuffer(resp_str))
end
