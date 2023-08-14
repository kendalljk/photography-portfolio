export default function Album() {



    const fetchAlbums = async () => {
        try {
            const response = await fetch(`/api/albums`);
            const data = await response.json();
            console.log("Galleries albums", data);
            setAlbums(data);
        } catch (err: any) {
            setError(err?.toString() || "An error occurred");
        }
    };
    console.log("Albums", albums);

    useEffect(() => {
        fetchAlbums();
    }, []);


  return (

  )
}