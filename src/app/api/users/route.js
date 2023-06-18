export async function GET(request) {

    //GET request for api/users
    // retrieve users from database or any other source

    const users = [
        {id: 1, name: "John"},
        {id: 2, name: "Suicy"},
        {id: 3, name: "Lental"},
        {id: 4, name: "Jave"},
        {id: 5, name: "Xavi"},
        {id: 6, name: "Ram"},
        {id: 7, name: "Tej"},
        {id: 8, name: "Bheem"},
        {id: 9, name: "Yogi"},
        {id: 10, name: "Satya"},
        {id: 11, name: "Hari"},
        {id: 12, name: "Om"},
        {id: 13, name: "Namaste"},
    
    ]
    return new Response(JSON.stringify(users))
}





export async function PUT(request) {
    return new Response("Hello, NextJ!. put")
}

export async function PATCH(request) {
    return new Response("Hello, NextJ! patch")
}

export async function HEAD(request) {
    return new Response("Hello, NextJ! head")
}

export async function POST(request) {
    return new Response("Hello, NextJ! post")
}

export async function DELETE(request) {
    return new Response("Hello, NextJ! delete")
}
