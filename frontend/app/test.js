"use client"

import { useState } from "react"
import "./test.css"

export default function TestApp({users, rand_number}){
    // console.log(users)
  
    return(
        <div
        class="flex flex-row space-x-5"
        >
            {
                users.map((user, id) => (    
                    <div
                    key={id}
                    class="w-34 text-center p-4  flex flex-col text-2xl border space-y-3 mt-4"
                    >
                        <p>{user.name}</p>
                        <p>{user.age}</p>
                        <p>{id}</p>

                    </div>
                ))
            }
        </div>
    )
}