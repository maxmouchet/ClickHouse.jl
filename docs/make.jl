Base.eval(:(have_color = true))

using Documenter
using Glob

using ClickHouse

makedocs(
    sitename="ClickHouse.jl",
    pages = [
        "index.md",
        "_index.md"
    ]
)

deploydocs(
    repo = "github.com/maxmouchet/ClickHouse.jl.git",
)
