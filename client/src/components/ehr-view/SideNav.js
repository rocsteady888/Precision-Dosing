import React from "react";

import List from "@material-ui/core/List";
import Button from "@material-ui/core/Button";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import InputAdornment from "@material-ui/core/InputAdornment";
import FormControl from "@material-ui/core/FormControl";
import Divider from "@material-ui/core/Divider";
import Search from "@material-ui/icons/Search";

export default function SideNav() {

  return (
    <React.Fragment>
      <List
        style={{
          marginTop: "100px",
        }}
      >
        <ListItem>
          <FormControl>
            <InputLabel htmlFor="input-with-icon-adornment">
              Patient Search
            </InputLabel>
            <Input
              id="input-with-icon-adornment"
              startAdornment={
                <InputAdornment position="start">
                  <Search />
                </InputAdornment>
              }
            />
          </FormControl>
        </ListItem>
        <ListItem>
          <ListItemText secondary="This information was last updated 05/19/2019 at 2:47am" />
          <Button color="primary">Update</Button>
        </ListItem>
        <ListItem button>
          <ListItemText primary={"Snapshot"} />
        </ListItem>
        <ListItem button>
          <ListItemText primary={"Chart Review"} />
        </ListItem>
        <ListItem button>
          <ListItemText primary={"Flowcharts"} />
        </ListItem>
        <ListItem button>
          <ListItemText primary={"Results Review"} />
        </ListItem>
        <Divider style={{
          marginTop: "15px",
        }}/>
        <ListItem button>
          <ListItemText primary={"Medications"} />
        </ListItem>
        <ListItem button>
          <ListItemText primary={"Immunizations"} />
        </ListItem>
        <Divider style={{
          marginTop: "15px",
        }}/>
      </List>
    </React.Fragment>
  );
}
