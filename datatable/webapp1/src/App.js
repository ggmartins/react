import React from 'react';
//import logo from './logo.svg';
import './App.css';
//TODO: TypeScript
import IconSearch from '@material-ui/icons/Search';
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
//import TableHead from '@material-ui/core/TableHead';
import Paper from '@material-ui/core/Paper';
//import LinkIcon from '@material-ui/icons/Link';
import SvgIcon from '@material-ui/core/SvgIcon';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';

import Button from '@material-ui/core/Button';
import DataTable from 'react-data-table-component';
import CopyToClipboard from 'react-copy-to-clipboard';
import ModalImage from 'react-modal-image';
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import parse from 'html-react-parser';
import traverse from 'react-traverse';
import styled from 'styled-components';
import data from './Datasets.js';
import { TableHead } from '@material-ui/core';

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

/*const CardInfoStyle = styled.div`
  padding: 16px;
  display: flex;
  flex-direction: row;
  justify-content: left;
  width: 100%;
  margin: 0;
`;*/

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

class Expansion extends React.Component {
  constructor(props) {
    super(props);
    this.data = props.data;
    this.snackBarHandle = props.snackBarHandle.bind(this);
    this.moreInfoHandle = props.moreInfoHandle.bind(this);
  }

  card1Style =  {
    maxWidth: 350,
    minWidth: 300,
    margin: 0,
  };
  
  card2Style = {
    fontSize: "14px !important",
    marginLeft: 10,
    width: '100%'
  };
  
  cardInfoStyle = {
    fontSize: "14px !important",
    textAlign: 'left',
  };

  render () {
    return (
      <ExpansionStyle>
        <Card style={this.card1Style}>
          <CardContent>
              <ModalImage
                small={this.data.images[0]}
                large={this.data.images[0]}
                hideDownload={true}
                hideZoom={true}
              />
          </CardContent>
          <CardContent style={this.cardInfoStyle}>
            <b>Name:</b> <i>{this.data.title}</i> <br />
            <b>Description:</b> <i>{this.data.description}</i> <br />
            <b>Key Words: </b> <i>{this.data.keywords}</i>
          </CardContent>
        </Card>
        {/*<Card style={this.card2Style}>
          <CardContent>
            <CardInfoStyle>*/}
              <div>
                <TableContainer style={this.card2Style} component={Paper}> {/*component={Paper}*/}
                  <Table style={this.cardInfoStyle} size="small">
                    {/*size="small" aria-label="a dense table"*/}
                    {/*<TableHead>
                    <TableRow>  
                        <TableCell style={{ backgroundColor: 'lightgray'}}>
                          <b>Information</b>
                        </TableCell>
                      </TableRow>
                    </TableHead>*/}
                    <TableBody>
                      <TableRow>  
                          <TableCell> {/*component="th" scope="row" */}
                            <CardInfoLink>
                              <CopyToClipboard
                                onCopy={(e)=>this.snackBarHandle(e)}
                                text={this.data.refurls.primary[0].url}>
                                <WeblinkIcon 
                                  style={{ marginRight: '3px', marginTop: '3px' }}
                                  /*onClick={()=>{alert('test')}}*/
                                />
                              </CopyToClipboard>
                              <a href={this.data.refurls.primary[0].url}>
                                  {this.data.refurls.primary[0].url}
                              </a>
                            </CardInfoLink>
                          </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>
                        <CardInfoLink>
                          <CopyToClipboard
                                onCopy={(e)=>this.snackBarHandle(e)}
                                text={this.data.sampledataurl}>
                                <WeblinkIcon 
                                  style={{ marginRight: '3px' , marginTop: '3px' }}
                                  /*onClick={()=>{alert('test')}}*/
                                />
                          </CopyToClipboard>
                          <a href={this.data.sampledataurl}><i>{this.data.sampledataurl}</i></a>
                          <span style={{marginLeft: '6px'}}></span>(Data Sample)
                          </CardInfoLink>
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>
                          <b>Size:</b> <i>{this.data.compressedsize},<span> </span>
                          {this.data.uncompressedsize}</i> (uncompressed),<span> </span>
                          <b>Formats:</b> <i>{this.data.formats}</i>.
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>
                          <b>Interval:</b> <i>From {this.data.datestart} to {this.data.dateend}
                          {this.data.dateapprox?' (approximately)':''}.</i>
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>
                          <b>Contact:</b> <i>{this.data.contact}</i>
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell> {/*style={{border: '1px solid black'}}*/}
                          <Button variant="contained" onClick={() => this.moreInfoHandle(this.data.refurls)}>More Info</Button>
                        </TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </TableContainer>
                {/*<Modal
                  open={this.open}
                  onClose={this.onCloseModal} 
                >
                <div>dssdfsf</div>
                </Modal>*/}
              </div>
            {/*</CardInfoStyle>
          </CardContent>
        </Card>*/}
      </ExpansionStyle>
    );//return
  }//render
}//Expansion

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



class RefURLs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isFetching : false,
      urls : props.urls,
      tags : [],
      upds : [],
      r:'',
    };
  }

  componentDidMount() {
    console.log("componentDidMount")
    this.initUrls(this.props.urls)
    //console.log("componentDidMount: " + this.state.tags + " ***")
    /*try{
      fetch("http://localhost:3000/test/")
          .then(response => response.text())
          .then(r=> {
              this.setState({r: r})
          })
          .catch(e => console.log(e))
    } catch(error) {console.log(error)}*/
  }

  static getDerivedStateFromProps(props, state) {
    console.log('getDerivedStateFromProps')
    return state
  } 

  componentWillUnmount() {
    console.log("componentWillUnmount")
  }
  componentDidUpdate () {
    console.log("componentDidUpdate")
  }

  extractMetaTags = (node, d) => traverse(node, {
    DOMElement(path) {  
      if(path.node.type === 'meta') {
        if (path.node.props.property !== undefined) {
          d[path.node.props.property] = path.node.props.content
        }
      }
      path.traverseChildren()
    }
  })
  
  fetchTags(rec) {
    console.log("fetchTags")
    try{
      fetch(rec.url, {mode: 'cors'}) //, {headers: {mode: 'no-cors'} }
        .then(response => response.text())
        .then(result => parse(result))
        .then(result => {
          var dict = {}
          dict[rec.url] = { rec: rec }
          this.extractMetaTags(result, dict[rec.url])
          return dict
        }).then((d)=>{
          console.log(d)
          this.setState({tags: this.state.tags.concat(d)})
        }).catch(e => {
          console.log(e);  
        });    
    } catch(error) { console.log(error) }
  }

  //TODO: this assumes cors enabled / Access-Control-Allow-Origin: *
  async initUrls(urls){
    console.log("initUrls")
    this.state.urls.primary.forEach((rec) => { //foreach record
      //console.log(rec)
      this.fetchTags(rec)  
    });

    if (this.state.urls.secondary !== undefined) {
        this.state.urls.secondary.forEach((rec) => {
        console.log(rec)
        this.fetchTags(rec)
      });
    }
  }

  getTableScrollHead(i, title, k) {
    return (
      <TableHead key={("h_"+k+"_"+i)} style={{backgroundColor: "lightgray"}}>
        <TableRow key={("h_"+k)+"_"+i}>
            <TableCell key={("h_"+k+"_"+i)}>
            {title}
            </TableCell>          
        </TableRow>                        
      </TableHead>
    );
  }
  
  getTableScrollRow(i, j, e1, isImage) {
    //<Img src={e1} sty le={{maxWidth: 500}}></Img> //TODO magic style numbers
    return (
      <TableRow key={("r_"+j+"_"+i)}>
        <TableCell key={("r_"+j+"_"+i)}>
             {isImage?(()=>{
               return (
                <img src={e1} alt={e1} style={{maxWidth: 500}} crossOrigin={''} />
               )
             })():e1}
        </TableCell>
      </TableRow>
    );
  }

  getTableScrollBody(i, o) {
    var tags_og = ['og:title', 'og:description', 'og:url', 'og:image']
    var tags_tt = ['twitter:title', 'twitter:description', 'twitter:url', 'twitter:image']
    return (
      <TableBody key={("b"+i)}> 
        {(()=>{ 
          //console.log(o)
          var tags
          if (typeof o['og:url'] === "string")
            tags=tags_og
          else if (typeof o['twitter:url'] === "string")
            tags=tags_tt
          else
            tags=null

          if (o.rec.metatags === 'auto') {
            if (tags) {
              return Object.entries(o).map((e, j) => {
                //console.log(e[0])
                if (tags.includes(e[0]) && typeof e[1] === 'string') {
                  //console.log(e[1])
                  return this.getTableScrollRow(i, j, e[1], e[0].includes("image"))
                }
                return null
              })  
            } else {
              //TBD
            }
          } else if ( (o.rec.metatags === 'yes')||
                      (o.rec.metatags === 'enable')) {

          } else {

          }
        })()}
      </TableBody>
    );
  }
  //Object.entries(o).map((e) => {console.log(e); })

  render () {
    //{/*<div>{JSON.stringify(this.state.tags)}</div>*/}
    //https://stackoverflow.com/questions/35136836/react-component-render-is-called-multiple-times-when-pushing-new-url
    return (
         <div>
            {
              this.state.tags.map((tag, i) => {
              var o = tag[Object.keys(tag)[0]]
              return(
                  <TableContainer 
                    component={Paper}
                    key={("hb"+i)}
                    style={{ maxWidth: 560, marginTop: 20, marginBottom: 5 }}
                  > 
                    <Table size="small" key={("hb_"+o.rec.url+"_"+i)}>
                      {this.getTableScrollHead(i, o.rec.note, o.rec.url)}
                      {this.getTableScrollBody(i, o)}
                    </Table>
                  </TableContainer>
                );
              })
            }
         </div>
    )
  }
}


function App() {
  const [refurls, setRefURLs] = React.useState('');
  const [openModalImage, setOpenModalImage] = React.useState(false);
  const [openModalInfo, setOpenModalInfo] = React.useState(false);
  const [filterText, setFilterText] = React.useState('');
  const filteredData = data.filter( i => i.title && (
                                         i.title.includes(filterText) ||
                                         i.shortdesc.includes(filterText) ||
                                         i.keywords.includes(filterText)
                                        )
                                  );

  //const myRef = React.useRef()

  const handleClick = () => {
    setOpenModalImage(true);
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpenModalImage(false);
  };

  function openModal(refurls) {
    setRefURLs(refurls)
    setOpenModalInfo(true);
  }
 
  function closeModalInfo(){
    setOpenModalInfo(false);
  }

  const moreInfoStyles = {
    content : {
      //top                   : '50%',
      //left                  : '50%',
      //right                 : 'auto',
      //bottom                : 'auto',
      //marginRight           : '-50%',
      //transform             : 'translate(-50%, -50%)'
      //marginRight           : '-50%',
      //maxWidth: "120px",
    }
  };

  return (
    <div className="App">
      <Snackbar
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        open={openModalImage}
        autoHideDuration={6000}
        onClose={handleClose}
        message="URL Copied."
        action={
          <React.Fragment>
            <IconButton size="small" aria-label="close" color="inherit" onClick={handleClose}>
              <CloseIcon fontSize="small" />
            </IconButton>
          </React.Fragment>
        }
      />
      <DataTable
        title="Datasets"
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
        expandableRowsComponent={<Expansion 
            snackBarHandle={handleClick}
            moreInfoHandle={openModal} 
          />}
      />
      <Modal
        open={openModalInfo}
        onClose={closeModalInfo}
        style={moreInfoStyles}
        //contentLabel="More Information"
        center
      >
        <RefURLs urls={refurls} />
        <Button variant="contained" onClick={closeModalInfo}>Close</Button>
      </Modal>
    </div>
  );
}

export default App;
