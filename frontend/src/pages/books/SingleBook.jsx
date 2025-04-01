import React from 'react'
import { useFetchBookByIdQuery } from '../../redux/features/books/booksApi'
import { useParams } from 'react-router'
import { getImgUrl } from '../../utils/getImgUrl'
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/features/cart/cartSlice";
import { MdAddShoppingCart } from "react-icons/md";

const SingleBook = () => {

  const dispatch = useDispatch();

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };

  const { id } = useParams();
  const { data: book, isLoading, isError } = useFetchBookByIdQuery(id);

  if (isLoading) {
    return <div className='text-center'>Loading...</div>
  }
  if (isError) {
    return <div className='text-center'>Error loading book details</div>
  }
  if (!book) {
    return <div className='text-center'>Book not found</div>
  }


  return (
    <div className='max-w-lg shadow-md p-5 rounded-md mx-auto my-10'>
      <h1 className='text-2xl font-bold mb-6'>{book.title}</h1>
      <div>
        <img
          src={`${getImgUrl(book.coverImage)}`}
          alt={book.title}
          className='mb-8'
        />
        <div className='mb-4'>
          <p className='text-gray-700 mb-2'><strong>Author: </strong>{book.author || 'Admin'}</p>
          <p className='text-gray-700 mb-4'>Published: <strong>{new Date(book?.createdAt).toLocaleDateString()}</strong></p>
          <p className='text-gray-700 mb-4 capitalize'><strong>Category: </strong>{book?.category}</p>
          <p className='text-gray-700'><strong>Description: </strong>{book.description}</p>
        </div>
        <button
          onClick={() => handleAddToCart(book)}
          className="btn-primary px-6 space-x-1 flex items-center gap-1"
        >
          <MdAddShoppingCart className="size-6" />
          <span>Add to Cart</span>
        </button>
      </div>
    </div>
  )
}

export default SingleBook