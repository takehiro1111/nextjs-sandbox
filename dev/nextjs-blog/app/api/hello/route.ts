import { NextResponse } from "next/server"

export async function route() {
  return NextResponse.json ([
    {id: 1, 'name': '山田'},
    {id: 2, 'name': '田中'},
  ])
}
