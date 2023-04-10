import React from 'react';
import { Link } from 'react-router-dom';

export default function PostCard({ post }) {
    return (
        <div className="card mt-3">
            <div className="row g-0">
                <div className="col-md-4">
                <img className="card-img-top" src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/1ecfea4e-abf3-4027-8b44-770c87b566fc/d54r6iw-6b8dee4a-8cc7-4a9f-967e-5c2d5afe814c.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzFlY2ZlYTRlLWFiZjMtNDAyNy04YjQ0LTc3MGM4N2I1NjZmY1wvZDU0cjZpdy02YjhkZWU0YS04Y2M3LTRhOWYtOTY3ZS01YzJkNWFmZTgxNGMuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.-FpEXHC0fTBEe1OnHSAZgKGGG0BmFSmAwOSdq0t2qn0" alt="random" style={{ width: "300px", height: "200px" }}/>
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h6 className="card-subtitle text-muted">{ post.date_created }</h6>
                        <h5 className="card-title">{ post.title }</h5>
                        <h6 className="card-subtitle">Author: { post.author.username }</h6>
                        <p className="card-text">{ post.content }</p>
                        <Link className='btn btn-primary mx-2 btn-sm' to={`/posts/${post.id}`}>Expand</Link>
                        <Link className='btn btn-primary mx-2 btn-sm' to={`/posts/${post.id}`}>Edit</Link>
                        <Link className='btn btn-primary mx-2 btm-sm' to={`/posts/${post.id}`}>Snap</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
