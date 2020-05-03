import React from 'react';
//import logo from './logo.svg';
import './App.css';

import IconSearch from '@material-ui/icons/Search';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
//import Typography from '@material-ui/core/Typography';
//import useMediaQuery from '@material-ui/core/useMediaQuery';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import Paper from '@material-ui/core/Paper';
//import LinkIcon from '@material-ui/icons/Link';
import SvgIcon from '@material-ui/core/SvgIcon';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';

import Button from '@material-ui/core/Button';
import DataTable from 'react-data-table-component';
import CopyToClipboard from 'react-copy-to-clipboard';
import styled from 'styled-components';
import data from './Datasets.js';

const columns = [
  {
    name: 'Title',
    selector: 'title',
    sortable: true,
    maxWidth: '200px',
  },
  {
    name: 'Description',
    selector: 'shortdesc',
    sortable: true,
  },
  {
    name: 'Start',
    selector: 'datestart',
    sortable: true,
    maxWidth: '10px',
  },
  {
    name: 'End',
    selector: 'dateend',
    sortable: true,
    maxWidth: '10px',
  },
  {
    name: 'Size',
    selector: 'compressedsize',
    sortable: true,
    maxWidth: '10px',
  },
  {
    name: 'Key Words',
    selector: 'keywords',
    sortable: true,
    minWidth: '500px',
  }

];

const paginationOptions = { rowsPerPage: 20 };

/*const ClearButton = styled(Button)`
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
  height: 34px;
  width: 32px;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color = #333;
  text-transform: lowercase;
`;*/

const ExpansionStyle = styled.div`
  padding: 16px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin: 0;

  p {
    font-size: 16px;
    font-weight: 700;
    word-break: break-all;
  }
`;

const CardInfoStyle = styled.div`
  padding: 16px;
  display: flex;
  flex-direction: row;
  justify-content: left;
  width: 100%;
  margin: 0;
`;

function WeblinkIcon(props) {
  return (
    <SvgIcon {...props}>
      <path d={"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3"+
      " 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09"+
      "C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1"+
      "c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83."+
      "42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 "+
      "13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"} />
    </SvgIcon>
  );
}

const CardInfoLink = styled.div`
  display: flex;
  vertical-align: middle,
`;
//  display: flex;
//  vertical-align: middle,

/*const SimpleMediaQuery = ({}) => {
  const matches = useMediaQuery('(min-width:600px)');
  return <span>{`(min-width:600px) matches: ${matches}`}</span>;
}*/

//const Expansion = ({ data }) => { 



class Expansion extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open : false,
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.setOpen = this.setOpen.bind(this);
  }

  card1Style =  {
    maxWidth: 350,
    minWidth: 300,
    margin: 0,
  };
  
  card2Style = {
    marginLeft: 10,
    width: '100%'
  };
  
  cardInfoStyle = {
    fontSize: 14,
    textAlign: 'left',
  };

  setOpen (b) {
    this.state.open = b;
  }

  handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    this.setOpen(false);
  };

  handleClick = (e) => {
    this.setOpen(true);
    //alert("here2");
    //e.preventDefault()
  };

  render () {
    return (
      <ExpansionStyle>
        <Snackbar
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
          }}
          open={this.state.open}
          autoHideDuration={6000}
          onClose={this.handleClose}
          message="URL Copied."
          action={
            <React.Fragment>
              <IconButton size="small" aria-label="close" color="inherit" onClick={this.handleClose}>
                <CloseIcon fontSize="small" />
              </IconButton>
            </React.Fragment>
          }
        />
        <Card style={this.card1Style}>
          <CardContent>
            <img 
              width="100%"
              src="http://projectbismark.net.s3-website.us-east-2.amazonaws.com/poster20191017.jpg"
              alt="http://projectbismark.net.s3-website.us-east-2.amazonaws.com/poster20191017.jpg"
            /><br />
          </CardContent>
          <CardContent style={this.cardInfoStyle}>
            <b>Name:</b> {data.title} <br />
            <b>Description:</b> {data.description} <br />
            <b>Key Words: {data.keywords} </b>
          </CardContent>
        </Card>
        <Card style={this.card2Style}>
          <CardContent>
            <CardInfoStyle>
              <div>
                <TableContainer component={Paper}>
                  <Table style={this.cardInfoStyle} size="small" aria-label="a dense table" >{/*size="small" aria-label="a dense table"*/}
                    <TableHead>
                    <TableRow>  
                        <TableCell>
                          Primary Location:
                        </TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                    <TableCell > {/*component="th" scope="row" */}
                      <CardInfoLink>
                        <CopyToClipboard
                          onCopy={(e)=>this.handleClick(e)}
                          text={"http://projectbismark.net.s3-website.us-east-2.amazonaws.com/#"}>
                          <WeblinkIcon 
                            style={{ marginRight: '3px', marginTop: '3px' }}
                            /*onClick={()=>{alert('test')}}*/
                          />
                        </CopyToClipboard>
                        <a href="http://projectbismark.net.s3-website.us-east-2.amazonaws.com/#">
                            http://projectbismark.net.s3-website.us-east-2.amazonaws.com/#
                        </a>
                      </CardInfoLink>
                    </TableCell>
                        
                    </TableBody>
                  </Table>
                </TableContainer>
              </div>
            </CardInfoStyle>
          </CardContent>
        </Card>
      </ExpansionStyle>
    );//return
  }//render
}//Expansion

/*
<SampleStyle>
<p>
  {data.title}
</p>
</SampleStyle>
*/

const FilterField = ({ filterText, onFilter, onClear }) => (
  <>
      <TextField 
        id="outlined-basic"
        //label="Search"
        variant="outlined"
        size="small"
        style={{ margin: '5px' }}
        placeholder="Search"
        value={filterText}
        onChange={onFilter}
      />
      <IconSearch style={{ margin: '5px' }} color="action" />
      <Button 
        type="reset"
        variant="contained"
        onClick={onClear}
      >
          Clear
      </Button>
  </>
);

function App() {
  const [filterText, setFilterText] = React.useState('');

  const filteredData = data.filter( i => i.title && (
                                         i.title.includes(filterText) ||
                                         i.shortdesc.includes(filterText) ||
                                         i.keywords.includes(filterText)
                                        )
                                  );

  return (
    <div className="App">

      <DataTable
        title="Movie List"
        columns={columns}
        data={filteredData}
        defaultSortField="title"
        selectableRows={false}
        selectableRowsNoSelectAll={false}
        selectableRowsHighlight={true}
        selectableRowsVisibleOnly={false}
        expandableRows={true}
        expandOnRowClicked={true}
        highlightOnHover={true}
        striped={true}
        pointerOnHover={false}
        dense={true}
        noTableHead={false}
        persistTableHead={false}
        //progressPending={loading}
        noHeader={true}
        subHeader={true}
        subHeaderComponent={
          (
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <FilterField 
                onFilter={e => setFilterText(e.target.value)}
                onClear={() => setFilterText("")}
                filterText={filterText} 
              />
            </div>
          )
        }
        subHeaderAlign={'center'}
        fixedHeader={false}
        pagination={true}
        paginationComponentOptions={paginationOptions}
        //fixedHeaderScrollHeight="300px"
        //direction={directionValue}
        expandableRowsComponent={<Expansion />}
      />
    </div>
  );
}

export default App;
