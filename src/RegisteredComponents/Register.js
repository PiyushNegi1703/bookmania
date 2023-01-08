import { useEffect, useState } from "react";
import axios from "axios";
import RegisterNav from "./RegisterNav";
import Footer from "../MainComponents/Footer";


export default function Main() {
    const [status, setStatus] = useState('')
    let display = 'none'
    const [items, setItems] = useState([])
    const [q, setQ] = useState(items)

    useEffect(() => {
        axios.get('https://api.nytimes.com/svc/books/v3/lists/current/mass-market-paperback.json?api-key=giL0Yvg8zrzhF87NfwNGT2AgZsKfp58D')
            .then((resp) => {
                setStatus(resp.data)
                setItems(resp.data.results.books)
            })
    }, [])


    const data = Object.values(items)

    const searchParam = Object.keys(Object.assign({}, ...data))


    const search = () => {
        return(
            data.filter(book => {
                return(searchParam.some(param => 
                    book[param].toString().includes(q)
                ))
            })
        )
    }

    if(status.status !== 'OK'){
        return <div style={{textAlign : 'center', fontSize : '2em'}}>Loading...</div>
    }

    else{
        if(search().length === 0){
            display = 'block'
        }
        return(
            <>
            <RegisterNav q={q} setChange={e => setQ(e.target.value)} />

            <div id="notFound" style={{display : display, marginTop :'15vh', fontSize : '5em', textAlign : 'center'}}>Book Not Found</div>

            <div id="books">
                {search(data).map(item => {
                    return(
                        <div>
                            <img src={item.book_image} alt='' />
                            <h3>{item.title}</h3>
                            <h5>{item.author}</h5>
                        </div>
                    )
                })}
            </div>

            <Footer />
            </>
        )
    }
}