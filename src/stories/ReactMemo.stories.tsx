import React, {useCallback, useMemo} from "react";
import {useState} from "react";

export default {
    title: 'ReactMemo demo'
}


export const Example1 = () => {

    const [a, setA] = useState<number>(5)
    const [b, setB] = useState<number>(5)
    let resultA = 1;
    let resultB = 1;

    resultA = useMemo(() => {
        let tempResultA = 1
        for (let i = 1; i <= a; i++) {
            let fake = 0;
            while (fake < 10000000) {
                fake++
                const fakeValue = Math.random()
            }
            tempResultA *= i
        }
        return tempResultA
    }, [a])


    for (let i = 1; i <= b; i++) {
        resultB *= i
    }

    return <>
        <input value={a} onChange={(e) => {
            setA(Number(e.currentTarget.value))
        }}/>
        <input value={b} onChange={(e) => {
            setB(Number(e.currentTarget.value))
        }}/>
        <hr/>
        <div>Result for a:{resultA}</div>
        <div>Result for b:{resultB}</div>
    </>
}


const Users = (props: { users: string[] }) => {
    return <div>
        {
            props.users.map((u, index) => <div key={index}>{u}</div>)
        }
    </div>
}
const UsersMemo = React.memo(Users)


export const HelpForReactMemo = () => {

    const [counter, setCounter] = useState(0)
    const [users, setUsers] = useState(['Dimych', 'Valera', 'Artem'])

    const newArray = useMemo(() => {
        return users.filter(u => u.toLowerCase().indexOf("a") > -1)
    }, [users])

    return <>
        <button onClick={() => {
            setCounter(counter + 1)
        }
        }>+
        </button>
        {counter}
        <UsersMemo users={newArray}/>
    </>
}


export const LikeUseCallback = () => {

    const [counter, setCounter] = useState(0)
    const [books, setBooks] = useState(['React', 'JS', 'CSS'])

    const addBook = useCallback (() => {
        const newBooks = [...books, 'Angular' + new Date().getTime()]
        setBooks(newBooks)
    },[])

    const newArray = useMemo(() => {
        return books.filter(u => u.toLowerCase().indexOf("a") > -1)
    }, [books])

    return <>
        <button onClick={() => {
            setCounter(counter + 1)
        }
        }>+
        </button>
        {counter}
        <BooksMemo books={newArray} addBook={addBook}/>
    </>
}


type BooksPropsType = {
    books: Array<string>
    addBook: () => void
}
const Books = (props: BooksPropsType) => {
    return <div>
        <button onClick={() => props.addBook()}>addBook</button>
        {
            props.books.map((book, index) => <div key={index}>{book}</div>)
        }
    </div>
}
const BooksMemo = React.memo(Books)

