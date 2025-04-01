import React from "react";
import BookCard from "../books/BookCard";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { useFetchAllBooksQuery } from "../../redux/features/books/booksApi";

// Array of categories
const categories = [
  "Chose a genre",
  "Business",
  "Fiction",
  "Horror",
  "Adventure",
];

// TopSellers component
const TopSellers = () => {

  // State for selected category
  const [selectedCategory, setSelectedCategory] = React.useState("Chose a genre");

  const { data: books = [] } = useFetchAllBooksQuery();


  // Filter books based on selected category
  const filteredBooks =
    selectedCategory === "Chose a genre"
      ? books
      : books.filter(
        (book) => book.category === selectedCategory.toLocaleLowerCase()
      );

  return (
    <div className="py-10 px-4 md:px-12">
      <h2 className="text-3xl font-semibold mb-6">Top Sellers</h2>
      {/* Dropdown for categories */}
      <div className="mb-8 flex items-center">
        <select
          name="category"
          id="category"
          className="px-4 py-2 border bg-[#eaeaea] border-gray-300 rounded-md focus:outline-none"
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>

      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        navigation={true}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 2,
            spaceBetween: 50,
          },
          1180: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        {filteredBooks.length > 0 &&
          filteredBooks.map((book) => (
            <SwiperSlide key={book._id}>
              <BookCard book={book} />
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
};

export default TopSellers;
