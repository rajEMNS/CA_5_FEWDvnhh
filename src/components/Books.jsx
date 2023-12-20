import React from 'react'

function Books({ search, data }) {

    const SearchedBooks = data.filter(book => {
        return book.title.toLowerCase().includes(search.toLowerCase())
    })
    return (
        <div className='books'>
            {SearchedBooks.map(book => (
                <div key={book.id} className='bookInfo'>
                    <div>
                        <img src={book.imageLinks.thumbnail} alt="Book Image" className='bookImg' />
                    </div>
                    <h2>{book.title}</h2>
                    <div className='rating'>
                        <div>
                            {book.averageRating ? book.averageRating : '4.0 '} ⭐
                        </div>
                        <div className='free'>
                            Free
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Books