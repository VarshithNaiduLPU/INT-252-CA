import React from 'react'

export default function Page() {
    let arr1 = [
        {
            title : "title1",
            author : "author1",
            genre : "genre1",
            rating : 0.0
        },
        {
            title : "title2",
            author : "bauthor2",
            genre : "Fiction",

            rating : 4.5
        },
    ]
    let arr2 = [
        {
            title : "title3",
            author : "author3",
            genre : "Fiction",
            rating : 3.5
        },
        {
            title : "title4",
            author : "author4",
            genre : "Action",
            rating : 2.0
        },
    ]

    function mergeArrays(){
        arr2.map((book) => {
            arr1.push(book);
        })
    }


    let fictionArr = [];
    function fictionalBooks(){

        arr1.map((book) => {
            if(book.genre === "Fiction"){
                fictionArr.push(book);
            }
        })
    }

    function increaseRating(){
        fictionArr.map((book, index) => {
            fictionArr[index].rating += 0.5;
        })
    }

    let avg;
    function avgRating(){
        let total = 0;
        let count = 0;
        fictionArr.map((book) => {
            total += book.rating;
            count += 1;
        })
        avg = total / count;
    }

    let bookGT45;
    function bookGT45F(){

        fictionArr.map((book) => {
            if(book.rating > 4.5){
                bookGT45 = book;
                return;
            }
        })
    }

    function sortArray(){
        fictionArr.sort((book1, book2) => {
            if(book1.author < book2.author){
                return -1;
            }
            if(book1.author > book2.author){
                return 1;
            }
            return 0;
        })
    }

    let allGT3 = true;

    function checkRating() {
        fictionArr.map((book) => {
            if (!(book.rating > 3)) {
                allGT3 = false;
                return;
            }
        });
    }

    return (
        <div>
            <h1>Merging two arrays:</h1>
            <ul>
                {mergeArrays()}
                {arr1.map((book, index) => (
                    <li key={index}>{book.title} - {book.author} - {book.genre} - {book.rating}</li>
                ))}
            </ul>

            <h1>Only Fiction Books:</h1>
            <ul>
                {fictionalBooks()}
                {fictionArr.map((book, index) => (
                    <li key={index}>{book.title} - {book.author} - {book.genre} - {book.rating}</li>
                ))}
            </ul>

            <h1>Increased 0.5:</h1>
            <ul>
                {increaseRating()}
                {fictionArr.map((book, index) => {
                    book.rating += 0.5;
                    return <li key={index}>{book.title} - {book.author} - {book.genre} - {book.rating}</li>
                })}
            </ul>

            <h1>Average:</h1>
            {avgRating()}
            <p>{avg}</p>

            <h1>First book greater than 4.5:</h1>
            {bookGT45F()}
            <p>{bookGT45 ? `${bookGT45.title} - ${bookGT45.author} - ${bookGT45.genre} - ${bookGT45.rating}` : "No book found"}</p>

            <h1>Sorted Array:</h1>
            <ul>
                {sortArray()}
                {fictionArr.map((book, index) => (
                    <li key={index}>{book.title} - {book.author} - {book.genre} - {book.rating}</li>
                ))}
            </ul>

            <h1>Are all the elements in Fiction books greater than 3:</h1>
            {checkRating()}
            <p>{allGT3 ? "Yes" : "No"}</p>
        </div>
    )
}
