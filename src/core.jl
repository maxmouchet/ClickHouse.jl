struct ClickHouseClient
    url::URI
end

ClickHouseClient(url::AbstractString) = ClickHouseClient(URI(url))

# ClickHouseClient()

# TODO: Auth, database, ...
# TODO: Error and exceptions handling

function query(client::ClickHouseClient, query_str)
    query_str = strip(query_str, [';'])
    query_str = "$(query_str) FORMAT CSVWithNames"
    response = HTTP.post(string(client.url), [], query_str)
    resp_str = String(response.body)
    # TODO: Check status code
    CSV.read(IOBuffer(resp_str))
end
