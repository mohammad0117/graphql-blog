import { useMutation } from "@apollo/client";
import { Button, Grid, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { SEND_COMMENT } from "../../../graphql/mutations";

function CommentForm({ slug }) {
  const [name, SetName] = useState("");
  const [email, setEmail] = useState("");
  const [text, setText] = useState("");

  const [sendComment, { loading, data, errors, reset }] = useMutation(SEND_COMMENT, { variables: { name, email, text, slug } });
  console.log(data);
  const sendHandler = () => {
    SetName("");
    setEmail("");
    setText("");
    if (name && email && text) {
      sendComment();
    } else {
      toast.warn("تمام فیلدها را پر کنید", { position: "top-center" });
    }
  };

  if (data) {
    toast.success("کامنت ارسال شد و منتظر تایید میباشد", { position: "top-center" });
    reset();
  }

  return (
    <Grid container style={{ boxShadow: "rgba(0,0,0,0.1) 0 4px 12px ", borderRadius: 4, py: 1, mt: 5 }}>
      <Grid item xs={12} m={2}>
        <Typography component="p" variant="h6" fontWeight={700} color="primary">
          فرم ارسال کامنت
        </Typography>
      </Grid>
      <Grid item xs={12} m={2}>
        <TextField label="نام کاربری" variant="outlined" sx={{ width: "100%" }} value={name} onChange={(e) => SetName(e.target.value)} />
      </Grid>
      <Grid item xs={12} m={2}>
        <TextField label="ایمیل" variant="outlined" sx={{ width: "100%" }} value={email} onChange={(e) => setEmail(e.target.value)} />
      </Grid>
      <Grid item xs={12} m={2}>
        <TextField label="متن کامنت" variant="outlined" sx={{ width: "100%" }} value={text} onChange={(e) => setText(e.target.value)} multiline minRows={4} />
      </Grid>
      <Grid item xs={12} m={2}>
        {loading ? (
          <Button variant="contained" disabled>
            در حال ارسال
          </Button>
        ) : (
          <Button variant="contained" onClick={sendHandler}>
            ارسال
          </Button>
        )}
        <ToastContainer />
      </Grid>
    </Grid>
  );
}

export default CommentForm;
