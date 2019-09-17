import style from "./Pagination.module.css";
import React from "react";

const Pagination = ({usersTotalCount, usersCountOnPage, currentPage, onPageChanged}) => {

    let pagesCount = Math.ceil(usersTotalCount / usersCountOnPage);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    return <div className={style.pagination}>
        {pages.map(p =>
            <span className={currentPage === p && style.selectedPage}
                  onClick={() => {
                      onPageChanged(p)
                  }}
            >{p}</span>
        )}
    </div>
};

export default Pagination;