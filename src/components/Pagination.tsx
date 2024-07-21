import React from 'react';

interface PaginationProps {
    moviesPerPage: number;
    totalMovies: number;
    paginate: (pageNumber: string) => void;
    currentPage: number;
}

const Pagination: React.FC<PaginationProps> = ({ moviesPerPage, totalMovies, paginate, currentPage }) => {
    const pageNumbers: number[] = [];
    const maxPagesToShow = 5;

    const totalPages = Math.ceil(totalMovies / moviesPerPage);

    for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
    }

    const renderPageNumbers = () => {
        if (totalPages <= maxPagesToShow) {
            return pageNumbers.map((number) => (
                <li key={number} className={`${number === currentPage ? 'text-[#0ea5e9]' : ''}`}>
                    <button onClick={() => paginate(number.toString())}>
                        {number}
                    </button>
                </li>
            ));
        }

        const startPage = Math.max(1, currentPage - 2);
        const endPage = Math.min(totalPages, currentPage + 2);
        const pages: number[] = [];

        for (let i = startPage; i <= endPage; i++) {
            pages.push(i);
        }

        if (startPage > 2) {
            pages.unshift(1, -1);
        } else if (startPage === 2) {
            pages.unshift(1);
        }

        if (endPage < totalPages - 1) {
            pages.push(-1, totalPages);
        } else if (endPage === totalPages - 1) {
            pages.push(totalPages);
        }

        return pages.map((number) => {
            if (number === -1) {
                return <li key={number}><span>...</span></li>;
            }
            return (
                <li key={number} className={`${number === currentPage ? 'text-[#0ea5e9]' : ''}`}>
                    <button onClick={() => paginate(number.toString())}>
                        {number}
                    </button>
                </li>
            );
        });
    };

    return (
        <nav>
            <ul className="flex gap-6 justify-center mt-6">
                {currentPage > 1 && (
                    <li>
                        <button onClick={() => paginate((currentPage - 1).toString())} className="page-link">
                            Previous
                        </button>
                    </li>
                )}
                {renderPageNumbers()}
                {currentPage < totalPages && (
                    <li>
                        <button onClick={() => paginate((currentPage + 1).toString())} className="page-link">
                            Next
                        </button>
                    </li>
                )}
            </ul>
        </nav>
    );
};

export default Pagination;
