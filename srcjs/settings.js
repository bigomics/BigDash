import 'shiny';
import { isMobile } from './utils';

export const handleSettings = () => {
  moveSettings();

  let $container = $('#settings-container')
    .find('.settings-content');

  if(!isMobile()){
    // check if lock is unlocked and run mouse events
    
      // show settings tab on desktop with click behavior
    $('#settings-container').mouseover(function(){
      settingsExpand();
      $container.show();
      $('.tab-settings').show();
    }).mouseout(function(){
      settingsCollapse();
      $container.hide();
      $('.tab-settings').hide();
    })
  }else if(isMobile){
    // hide settings tab on mobile
      $('.tab-settings').removeClass('d-none');
      $('#settings-container').hide();
      $('#tab-settings').hide();
      return;
  };
  
  
  $('#settings-lock').toggleClass("settings-unlocked settings-locked");
}
const settingsExpand = () => {
  //change settings sidebar css upon expanding
  $('#settings-container').removeClass('settings-collapsed');
  $('#settings-container').addClass('settings-expanded');
  //change icon css style for expanded position
  $('.settings-lock').removeClass('settings-lock-collapsed');
  $('.settings-lock').addClass('settings-lock-expanded');
  $('.settings').addClass('p-2');
  //$('.settings').toggleClass('p-2');
  toggleCollapseLabel();
  //toggleCollapseContent();
}

const settingsCollapse = () => {
  $('#settings-container').removeClass('settings-expanded');
  $('#settings-container').addClass('settings-collapsed');
  
  //change icon css style for expanded position
  $('.settings-lock').removeClass('settings-lock-expanded');
  $('.settings-lock').addClass('settings-lock-collapsed');
  $('.settings').removeClass('p-2');
  //not sure what this does
  //$('.settings').toggleClass('p-2');
  toggleCollapseLabel();
  //toggleCollapseContent();
}

// const toggleCollapseContent = () => {
//   let $container = $('#settings-container')
//     .find('.settings-content');

//   if(isExpanded()) {
//     $container.show();
//     return
//   }

//   $container.hide();
// }

const toggleCollapseLabel = () => {
  let css = {
    'transform': 'none',
    'margin-top': 0,
  };
  let cssIcon = {
    'float': 'right',
    'position': 'relative',
    'top': 'inherit',
    'right': 'inherit',
    'transform': 'rotate(0deg)',
  }

  //$('#settings-content').toggle();

  if(!isExpanded()) {
    css = {
      'transform': 'rotate(-90deg)',
      'margin-top': '3rem',
    };
    cssIcon = {
      'position': 'absolute',
      'top': '0.1rem',
      'right': '4.5rem',
      'transform': 'rotate(-90deg)',
    }
  }

  $('#settings-container')
    .find('.settings-label')
    .css(css);

  $('#settings-container')
    .find('.settings-icon')
    .css(cssIcon);
}

const isExpanded = () => {
  return $('#settings-container').hasClass('settings-expanded');
}

// $(function(){
//   setTimeout(() => {
//     $('.settings-').trigger('click');
//   }, 50);
// });


const moveSettings = () => {
  // if(isMobile()){
  //   $('.tab-settings').removeClass('d-none');
  //   $('#settings-container').hide();
  //   return;
  // }

  $('.big-tab')
    .each((index, el) => {
      let settings = $(el)
        .find('.tab-settings')
        .first();

      $(settings).data('target', $(el).data('name'));
      $(settings).appendTo('#settings-content');
    });
}
