import React from "react";
import { useEffect, useState } from "react";

export default function Pagination({query}) {
    
    const [page, setpage] = useState(1);
    const [pages, setpages] = useState('');

    // setpage(query.page)
    // setpages(query.total_pages)

return (
    <>
    {query &&     <div>
        
        <span>Страница:{query.page}</span>

    <span>Страниц: {query.total_pages}</span>
     </div>}
     </>
)
}
