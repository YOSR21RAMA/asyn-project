// ex1
const attente=()=> new Promise((resolve)=>setTimeout(resolve,2000))
var tab = [2,4,8,9,6]
var affiche=async(t)=>{
    for (let i = 0; i < t.length; i++) {
         console.log(t[i])
         await attente()        
    }
}
  affiche(tab)


// ex2
 const awaitCall=()=> fetch('https://jsonplaceholder.typicode.com/users').then((res)=> res.json()).then((json)=>console.log(json)).catch((err)).catch((err)=>console.log(err))


 awaitCall()


//  ex3
const awaitCall=async()=>{
    try {
        const re = await fetch('https://jsonplaceholder.typicode.com/users')
        const data = await res.json
        console.log(data)

        
    } catch (error) {
        console.log(error)

        
    }
    awaitCall()
}

// ex4
const attente=()=> new Promise((resolve)=>setTimeout(resolve, 2000))
const fun1=async()=>{
    await attente()
    console.log('this is function 1')

}

const fun2=async()=>{
    await attente()
    console.log('this is function 2')

}

const fun3=async()=>{
    await attente()
    console.log('this is function 3')

}

const chainedAsyncFunctions=async()=>{
    await fun1()
    await fun2()
    await fun3()

}
chainedAsyncFunctions()


// ex5
const conso1=async()=>{
    const res = await fetch('https://jsonplaceholder.typicode.com/users/10')
    const data = await res.json
    return data
}

const conso2=async()=>{
    const res = await fetch('https://jsonplaceholder.typicode.com/users/1')
    const data = await res.json
    return data
}

const concurrentReauests=async()=>{
    const tab = await Promise.all([conso1(),conso2()])

    for (let i = 0; i < tab.length; i++) {
console.log(tab[i].name)        
    }
}

concurrentReauests()

// ex6
var tapApi = [
    "https://jsonplaceholder.typicode.com/users/2",
    "https://jsonplaceholder.typicode.com/users/7",

]

const consoApi=async(url)=>{
    const re = await fetch(url)
    const data = await res.json
    return data
}

const parallelCalls=async()=>{
    var apis = tabApi.map((el,i,t)=>consoApi(el))

    const tab = await Promise.all(apis)

    for (let i = 0 < tab.lengt++) {
     console.console.log(tab[i].name)

        
    }
}


parallelCalls()