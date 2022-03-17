import React from 'react'
import Navegador from './Navbar/index'
import Greet from './Greet/index'
import Categories from './Categories/index'
import Tarjetas from './Container/index'

function Home(){
    const [products, setProducts] = React.useState([])
    const [categories, setCategories] = React.useState([])
    const [loading, setLoading] = React.useState('')

    React.useEffect(() => {
        console.log('se dispara el useEffect')

        function getProducts() {
            setProducts([])
            fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(json=>setProducts(json))
            .then(() =>  setLoading(''))
        }

        getProducts()
        setLoading('loading')
    }, [])

    React.useEffect(() => {

        async function getCategories() {
          const resp = await fetch('https://fakestoreapi.com/products/categories').then(resp => resp.json())
          console.log("🚀 ~ file: index.js ~ line 33 ~ getCategories ~ resp", resp)
          setCategories(resp)
        }

        getCategories()
    }, [])

    return (
        <div>
            <Navegador />
            <Greet />
            <Categories categories={categories} />
            <Tarjetas products={products} />
        </div>

    )
}

export default Home;
