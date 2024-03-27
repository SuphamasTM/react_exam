import React from "react";
import { Card, CardContent, Typography, CardMedia } from "@mui/material";

const CardProfile = ({ profile }) => {
  return (
    <Card
      sx={{
        alignItems: "center",
        display: "flex",
        width: 298,
        height: 95,
        margin: "16px",
        marginTop: "24px",
        padding: "8px",
        justifyContent: "center",
        ":hover": {
          boxShadow: 8, // theme.shadows[20]
        },
      }}
    >
      <CardContent
        sx={{
          flex: "1",
        }}
      >
        <Typography variant="h6" component="div">
          {profile.name}
        </Typography>
        <br></br>
        <Typography variant="body2" color="text.secondary">
          {profile.address}
        </Typography>
      </CardContent>
      <CardMedia
        component="img"
        sx={{
          width: "72px",
          height: "72px",
          borderRadius: "50%",
          marginRight: "16px",
        }}
        src={profile.avatar}
        alt="Profile Avatar"
      />
    </Card>
  );
};

export default CardProfile;
