import React from 'react';
import Navbarlinks from './navbarlinks.jsx';

const Layout = ({content = () => null }) => (
  <div>
    <div className="navbar navbar-default navbar-fixed-top" role="navigation">
      <div className="container-fluid">
        <div className="container">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle" data-toggle="collapse"
              data-target=".navbar-responsive-collapse">
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <i className="navbar-brand glyphicon glyphicon-asterisk"></i>
          </div>
          <div className="navbar-collapse collapse navbar-responsive-collapse">
            <Navbarlinks/>
            <ul className="nav navbar-nav navbar-right">
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div id="content">
      <div className="container">
        {content()}
      </div>
    </div>
    <div className="container">
      <div className="row">
        <div id="footer">
          <div className="col-xs-10">
            <p>&copy; KennelMate 2016</p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Layout;

/*
          <div className="col-xs-2 text-right">
            <button className="btn btn-info scrollToTop">To Top</button>
          </div>
      <script>
        $(document).on('click.nav','.navbar-collapse.in',function(e) {
          if( $(e.target).is('a') || $(e.target).is('button')) {
            if ($('.navbar-toggle').is(':visible')) {
              $(this).collapse('hide');
            }
          }
        });
        $(document).ready(function(){
          //Check to see if the window is top if not then display button
          $(window).scroll(function(){
            if ($(this).scrollTop() > 100) {
            	$('.scrollToTop').fadeIn();
            } else {
            	$('.scrollToTop').hide();
            }
          });
        
          //Click event to scroll to top
          $('.scrollToTop').click(function(){
            $('html, body').animate({scrollTop : 0},800);
              return false;
          });
        });
      </script>
*/