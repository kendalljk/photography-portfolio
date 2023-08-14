import React, { useState, useEffect } from "react";
import Link from "next/link";

export default function Galleries(albums) {
  return (
      <section className="gallery-display">
          <div className="">
              {albums.map((album) => (
                  <div key={album.id} className="album-item">
                      <img
                          src={`https://live.staticflickr.com/${album.server}/${album.primary}_${album.secret}_c.jpg`}
                          alt={album.title._content}
                      />
                      <Link href={`/galleries/${album.id}`}>
                          <h4 className="album-title">
                              {album.title._content}
                          </h4>
                      </Link>
                  </div>
              ))}
          </div>
      </section>
  );
}
