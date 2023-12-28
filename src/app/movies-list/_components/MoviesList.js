"use client"
import React from 'react';
import { Typography, Box, Card, CardMedia, CardContent } from '@mui/material';
import LogoutIcon from '@mui/icons-material/Logout';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { useRouter } from 'next/navigation';


const movieData = [
  { id: 1, title: 'Movie 1', year: 2021, imageUrl: '/movie1.png' },
  { id: 2, title: 'Movie 2', year: 2022, imageUrl: '/Group2.png' },
  { id: 3, title: 'Movie 3', year: 2023, imageUrl: '/Group2.png' },
  { id: 4, title: 'Movie 4', year: 2023, imageUrl: '/Group3.png' },
  { id: 5, title: 'Movie 5', year: 2023, imageUrl: '/movie1.png' },
  { id: 6, title: 'Movie 6', year: 2023, imageUrl: '/Group2.png' },
  { id: 7, title: 'Movie 7', year: 2023, imageUrl: '/Group2.png' },
  { id: 8, title: 'Movie 8', year: 2023, imageUrl: '/Group3.png' },
];

function MoviesList() {
  const router = useRouter();

  const handleIconClick = () => {
    router.push('/create-movie');
  };
  const handleLogout = () => {
    router.push('/');
  };
  return (
    <Box sx={{ backgroundColor: "#093545", height: "100%", display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <Box sx={{ display: "flex", justifyContent: "space-between", width: '100%', padding: '10px' }}>
        <Box sx={{ display: "flex", gap: 2, margin: 10 }}>
          <Typography sx={{ fontSize: "48px", color: "#FFFFFF" }}>My movies</Typography>
          <AddCircleOutlineIcon sx={{ color: "#FFFFFF", mt: 3, fontSize: "28px", cursor: "pointer" }}
            onClick={handleIconClick}
          />
        </Box>
        <Box sx={{ display: "flex", gap: 2, margin: 10 }}>
          <Typography sx={{ fontSize: "16px", color: "#FFFFFF", fontWeight: 700, mt: 3.2 }}>Logout</Typography>
          <LogoutIcon sx={{ color: "#FFFFFF", mt: 3, fontSize: "28px", cursor : "pointer"}} onClick={handleLogout}
          />
        </Box>
      </Box>
      <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '20px', padding: '20px' }}>
        {movieData.map((movie) => (
          <Card key={movie.id} sx={{ maxWidth: 300, backgroundColor: "#092C39", borderRadius: "12px", margin: '10px' }}>
            <CardMedia
              component="img"
              alt={movie.title}
              height="auto"
              width="100%"
              src={movie.imageUrl}
              sx={{
                objectFit: 'cover',
                borderTopLeftRadius: '12px',
                borderTopRightRadius: '12px',
              }}
            />
            <CardContent>
              <Typography sx={{ fontSize: "20px", fontWeight: 500, color: "white" }}>
                {movie.title}
              </Typography>
              <Typography sx={{ fontSize: "14px", fontWeight: 400, color: "white" }}>
                {movie.year}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </Box>
    </Box>
  );
}

export default MoviesList;
