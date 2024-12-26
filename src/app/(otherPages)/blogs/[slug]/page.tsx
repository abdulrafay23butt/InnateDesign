"use client";
import { useParams } from "next/navigation";
import Blog from "@/components/Blog";
import React from "react";

const BlogPage = () => {
    const { slug } = useParams<{ slug: string }>(); // Access the dynamic slug from the URL
    
    // Convert slug to a number
    const id = parseInt(slug, 10); // Convert slug to an integer (base 10)

    // Optionally, handle the case where conversion fails
    if (isNaN(id)) {
        console.error("The slug is not a valid number");
        return <div>Invalid slug</div>;
    }

    console.log("params", id); // Check the converted number
    return (
        <div className="bg-gradient-to-r to-[#141E4C] via-[#00000040] from-[#0f1015] py-20">
            {/* Pass the numeric id as a prop */}
            <Blog id={id} />
        </div>
    );
};

export default BlogPage;
