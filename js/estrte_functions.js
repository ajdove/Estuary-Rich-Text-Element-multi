const estrte_number_of_table_row_options = 18;
const estrte_number_of_table_column_options = 8;
const estrte_table_padding_options = 4;
const estrte_cell_spacing_options = 4;
const estrte_border_options = 4;
const estrte_default_text_color = "75, 75,75";
const estrte_default_background_color = "255, 255, 255";
const estrte_default_font = "Arial";
const estrte_default_font_size = "16";
const estrte_animation_dur = 148;
const estrte_emoji_categories = ["symbols", "faces", "people", "animals", "nature", "activity", "objects", "food", "travel"];

    let table_html = '<div class="table_spec_form" id="#placeholder#table_spec_form"><div class="spec_features_head">Table Properties<span class="close_window" title="Close" inputmode="none" unselectable="on" onclick="close_select_features_div(#placeholder#)"><img src="/est_rte_multi/images/close_menu.png" alt="" /></span></div>';
            table_html += '<div class="table_spec_row"><div class="table_spec_caption"><label>Heading</label></div><div class="table_spec_input"><input type="text" name="table_caption" id="#placeholder#table_caption" /></div></div>';
            table_html += '<div class="table_spec_row"><div class="table_spec_caption"><label>Rows</label></div><div class="table_spec_input"><select name="no_of_rows_select" id="#placeholder#no_of_rows_select"></select></div></div>';
            table_html += '<div class="table_spec_row"><div class="table_spec_caption"><label>Columns</label></div><div class="table_spec_input"><select name="no_of_columns_select" id="#placeholder#no_of_columns_select"></select></div></div>';
            table_html += '<div class="table_spec_row"><div class="table_spec_caption"><label>Border</label></div><div class="table_spec_input"><select name="border_select" id="#placeholder#border_select"></select></div></div>';
            table_html += '<div class="table_spec_row"><div class="table_spec_caption"><label>Cell Spacing</label></div><div class="table_spec_input"><select name="cellspacing_select" id="#placeholder#cellspacing_select"></select></div></div>';
            table_html += '<div class="table_spec_row"><div class="table_spec_caption"><label>Cell Padding</label></div><div class="table_spec_input"><select name="cellpadding_select" id="#placeholder#cellpadding_select"></select></div></div>';
            table_html += '<div class="table_spec_row"><div class="table_spec_caption"><label>Headers</label></div><div class="table_spec_input"><select name="select_headers" id="#placeholder#select_headers"><option value="">None</option><option value="firstRow">First Row</option><option value="firstColumn">First Column</option><option value="both">Both</option></select></div></div>';
            table_html += '<div class="table_spec_row"><div class="table_spec_caption"><label id="#placeholder#addTableButton" unselectable="on" onclick="add_table(#placeholder#)">Add</label></div></div></div>';

let link_html = '<div class="table_spec_form" id="#placeholder#link_spec_form"><div class="spec_features_head">Add Link<span class="close_window" title="Close" inputmode="none" unselectable="on" onclick="close_select_features_div(#placeholder#, 1000)"><img src="/est_rte_multi/images/close_menu.png" alt="" /></span></div>';
link_html += '<div class="table_spec_row"><div class="table_spec_caption"><label>Text</label></div><div class="table_spec_input"><input type="text" name="link_text" id="#placeholder#link_text" /></div></div>';
link_html += '<div class="table_spec_row"><div class="table_spec_caption"><label>URL</label></div><div class="table_spec_input"><input type="text" name="link_url" id="#placeholder#link_url" /></div></div>';
link_html += '<div class="table_spec_row"><div class="table_spec_caption"><div class="table_spec_input"><label id="#placeholder#addTableButton" unselectable="on" onclick="add_link(#placeholder#)">Add</label></div></div></div></div>';

/*  Styles included  */
const estrte_styles = ['font-family', 'font-size', 'font-weight', 'font-style', 'color'];
/* formats */
const estrte_formats = ['font-weight', 'font-style', 'text-decoration'];
/* Fonts in dropdown select */
const estrte_fonts = ["Arial", "Verdana", "Helvetica", "Tahoma", "Trebuchet MS", "Times New Roman", "Georgia", "Garamond", "Courier New", "Brush Script MT"];
/* Font sizes in dropdown select */
const estrte_font_sizes = ["10", "12", "14", "16", "18", "20", "22", "24", "26", "28", "30", "32", "36", "42", "48", "60", "72", "84", "96", "108", "126", "144", "168", "192", "216", "238", "260", "288"];
const estrte_rgb_colors = ["255, 0, 0", "255, 118, 0", "255, 255, 0", "0, 255, 0", "0, 0, 255", "238, 130, 238", "255, 255, 255", "125, 125, 125"];
const estrte_lower_rgb_colors = [ "125, 0, 0", "155, 78, 0", "155, 155, 0", "0, 125, 0", "0, 0, 125", "106, 90, 205", "180, 180, 180", "0, 0, 0"];
const xestrte_emojis = ['&#128512;', '&#128525;', '&#128151;'];
const estrte_special_chars = ['e\u02e3', '\u2720', '\u2724', '\u00A2', '\u20AC', '\u00A5', '\u20B9', '\u20A8', '\u20B1', '\u20A9', '\u0E3F', '\u20AB', '\u20AA', '\u2022', '\u25E6', '\u2219', '\u2023', '\u2043', '\u00B0', '\u221E', '\u00A9', '\u00AE', '\u2117', '\u2122', '\u2120', '\u25E0', '\u25E1', '\u2591', '\u2592', '\u2593', '\u2702', '\u03B1', '\u03B2', '\u03B3', '\u03B4', '\u03B5', '\u03B6', '\u03B7', '\u03B8', '\u03B9', '\u03BA', '\u03BB', '\u03BC', '\u03BD', '\u03BE', '\u03BF', '\u03C0', '\u03C1', '\u03C3', '\u03C4', '\u03C5', '\u03C6', '\u03C7', '\u03C8', '\u03C9', '\u0391', '\u0392', '\u0393', '\u0394', '\u0395', '\u0396', '\u0397', '\u0398', '\u0399', '\u039A', '\u039B', '\u039C', '\u039D', '\u039E', '\u039F', '\u03A0', '\u03A1', '\u03A3', '\u03A4', '\u03A5', '\u03A6', '\u03A7', '\u03A8', '\u03A9', '\u27BD', '\u27BE', 'U+1F3FC', '\u27BF', '\u27BB', '\u27BA', '\u27B9', '\u27B3', '\u27B2', '\u27B0', '\u27B6', '\u27B7'];
//if line below can be commented out - the styles iof the containing web page will be applied;
let estrte_input_fields = document.getElementsByClassName("estrte_input_field");
for(let i = 0; i < estrte_input_fields.length; i++){
estrte_input_fields[i].style = "font-family:" + estrte_default_font + ";font-size:" + estrte_default_font_size + "px;color:rgb(" + estrte_default_text_color + ");background-color:rgb(" + estrte_default_background_color + ");";
}
let estrte_input_conts = document.getElementsByClassName("estrte_inputcont");
for(let i = 0; i < estrte_input_conts.length; i++){
estrte_input_conts[i].style = "background-color:rgb(" + estrte_default_background_color + ");";
}
let estrte_content_wrappers = document.getElementsByClassName("estrte_content_wrapper");
for(let i = 0; i < estrte_content_wrappers.length; i++){
estrte_content_wrappers[i].style = "background-color:rgb(" + estrte_default_background_color + ");";
}
const estrte_inoutFieldWidth = "100%";
const estrte_inoutFieldHeight = "284px";
  const estrte_emojis = [
        {
         emoji: "👍",  category: "general", title: "Thumbs Up"
        },
        {
         emoji: "🙂",  category: "general", title: "Smiling"
        },
        {
         emoji: "👍",  category: "symbols", title: "Thumbs Up"
        },
        {
          emoji: "👎", category: "symbols", title: "Thumbs Down"
        },
        {
          emoji: "💪️", category: "symbols", title: "Muscles"
        },
        {
          emoji: "👈️", category: "symbols", title: "Pointing Right"
        },
        {
          emoji: "👉️", category: "symbols", title: "Pointing Left"
        },
        {
          emoji: "👆", category: "symbols", title: "Pointing Left"
        },
        {
          emoji: "🖕️", category: "symbols", title: "Finger Up"
        },
        {
          emoji: "👇", category: "symbols", title: "Finger Down"
        },
        {
          emoji: "🖐️", category: "symbols", title: "Wave"
        },
        {
          emoji: "👊", category: "symbols", title: "Fist"
        },
        {
          emoji: "🖐️", category: "symbols", title: ""
        },
        {
          emoji: "👏️", category: "symbols", title: "Clap Hands"
        },
        {
          emoji: "👋", category: "symbols", title: ""
        },
        {
          emoji: "📣", category: "symbols", title: ""
        },
        {
          emoji: "👄", category: "symbols", title: "Red Lips"
        },
        {
          emoji: "♨️", category: "symbols", title: ""
        },
        {
          emoji: "🎵️", category: "symbols", title: "Music"
        },
        {
          emoji: "🎶️", category: "symbols", title: "Music"
        },
        {
          emoji: "💤️", category: "symbols", title: ""
        },
        {
          emoji: "👀️", category: "symbols", title: "Big Eyes"
        },
        {
          emoji: "☢️", category: "symbols", title: ""
        },
        {
          emoji: "💅️", category: "symbols", title: ""
        },
        {
          emoji: "🤝️", category: "symbols", title: ""
        },
        {
          emoji: "👂", category: "symbols", title: ""
        },
        {
          emoji: "📢", category: "symbols", title: ""
        },
        {
          emoji: "❤️", category: "symbols", title: ""
        },
        {
          emoji: "😲️",  category: "faces", title: ""
        },
        {
         emoji: "😂", category: "faces", title: "Laughing"
        },
        {
         emoji: "😡",  category: "faces", title: ""
        },
        {
         emoji: "🤩",  category: "faces", title: ""
        },
        {
          emoji: "🤣️",  category: "faces", title: "Rolling With Laughter"
        },
        {
          emoji: "😎",  category: "faces", title: "Sunglasses"
        },
        {
         emoji: "🤑",  category: "faces", title: ""
        },
        {
         emoji: "😇",  category: "faces", title: "Halo"
        },
        {
          emoji: "🤥",  category: "faces", title: ""
        },
        {
          emoji: "🤪",  category: "faces", title: ""
        },
        {
         emoji: "😊",  category: "faces", title: "Happy"
        },
        {
         emoji: "😡",  category: "faces", title: ""
        },
        {
          emoji: "🤐",  category: "faces", title: ""
        },
        {
          emoji: "😴",  category: "faces", title: ""
        },
        {
          emoji: "🤑",  category: "faces", title: ""
        },
        {
          emoji: "🙄",  category: "faces", title: ""
        },
        {
          emoji: "😘",  category: "faces", title: ""
        },
        {
          emoji: "😖",  category: "faces", title: ""
        },
        {
          emoji: "😭",  category: "faces", title: ""
        },
        {
          emoji: "😓",  category: "faces", title: ""
        },
        {
          emoji: "😱",  category: "faces", title: ""
        },
        {
          emoji: "🤪",  category: "faces", title: ""
        },
        {
          emoji: "🤒",  category: "faces", title: ""
        },
        {
          emoji: "😒",  category: "faces", title: ""
        },
        {
          emoji: "😩",  category: "faces", title: ""
        },
        {
          emoji: "😳",  category: "faces", title: ""
        },
        {
         emoji: "🐝",  category: "nature", title: "Wasp"
        },
        {
          emoji: "🐮",  category: "nature", title: ""
        },
        {
          emoji: "🦋",  category: "nature", title: "Butterfly"
        },
        {
         emoji: "🦉",  category: "nature", title: "Owl"
        },
        {
         emoji: "🐞",  category: "nature", title: "Ladybird"
        },
        {
          emoji: "🌳",  category: "nature", title: "Oak Leaf"
        },
        {
         emoji: "🌎",  category: "nature", title: "The World"
        },
        {
         emoji: "🌈",  category: "nature", title: "Rainbow"
        },
        {
         emoji: "🌤",  category: "nature", title: ""
        },
        {
          emoji: "🌻",  category: "nature", title: "Sunflower"
        },
        {
         emoji: "🥀",  category: "nature", title: ""
        },
        {
         emoji: "🌹",  category: "nature", title: ""
        },
        {
         emoji: "☘️",  category: "nature", title: ""
        },
        {
          emoji: "🌿",  category: "nature", title: ""
        },
        {
          emoji: "🦔",  category: "nature", title: ""
        },
        {
         emoji: "🐳",  category: "nature", title: ""
        },
        {
         emoji: "🦜",  category: "nature", title: ""
        },
        {
         emoji: "🐺",  category: "nature", title: ""
        },
        {
          emoji: "🦢",  category: "nature", title: ""
        },
        {
          emoji: "🦆",  category: "nature", title: ""
        },
        {
         emoji: "🐔",  category: "nature", title: ""
        },
        {
          emoji: "🦅",  category: "nature", title: ""
        },
        {
          emoji: "🐥",  category: "nature", title: ""
        },
        {
         emoji: "🕊",  category: "nature", title: ""
        },
        {
         emoji: "🦃",  category: "nature", title: ""
        },
        {
         emoji: "☄",  category: "nature", title: ""
        },
        {
         emoji: "☃",  category: "nature", title: ""
        },
        {
         emoji: "💧",  category: "nature", title: ""
        },
        {
         emoji: "🎋",  category: "nature", title: ""
        },
        {
         emoji: "✨",  category: "nature", title: ""
        },
        {
         emoji: "🌠",  category: "nature", title: ""
        },
        {
          emoji: "🌦",  category: "animals", title: ""
        },
        {
          emoji: "🦛",  category: "animals", title: ""
        },
        {
          emoji: "🐼",  category: "animals", title: ""
        },
        {
          emoji: "🦄",  category: "animals", title: ""
        },
        {
          emoji: "🐧",  category: "animals", title: ""
        },
        {
          emoji: "🐳",  category: "animals", title: ""
        },
        {
          emoji: "🐪",  category: "animals", title: ""
        },
        {
          emoji: "🐫",  category: "animals", title: ""
        },
        {
         emoji: "🐰",  category: "animals", title: ""
        },
        {
          emoji: "🐬",  category: "animals", title: ""
        },
        {
          emoji: "🐋",  category: "animals", title: ""
        },
        {
          emoji: "🐟",  category: "animals", title: ""
        },
        {
          emoji: "🐠",  category: "animals", title: ""
        },
        {
          emoji: "🦈",  category: "animals", title: ""
        },
        {
          emoji: "🐢",  category: "animals", title: ""
        },
        {
          emoji: "🦀",  category: "animals", title: ""
        },
        {
          emoji: "🦐",  category: "animals", title: ""
        },
        {
          emoji: "🦚",  category: "animals", title: ""
        },
        {
          emoji: "🐴",  category: "animals", title: ""
        },
        {
         emoji: "🐿",  category: "animals", title: ""
        },
        {
         emoji: "🦌",  category: "animals", title: ""
        },
        {
         emoji: "🐏️",  category: "animals", title: ""
        },
        {
          emoji: "🐑",  category: "animals", title: ""
        },
        {
          emoji: "🦈",  category: "animals", title: ""
        },
        {
         emoji: "🏄",  category: "activity", title: ""
        },
        {
         emoji: "🏇",  category: "activity", title: ""
        },
        {
         emoji: "🏌",  category: "activity", title: ""
        },
        {
         emoji: "🚣",  category: "activity", title: ""
        },
        {
         emoji: "🏊",  category: "activity", title: ""
        },
        {
         emoji: "⛹",  category: "activity", title: ""
        },
        {
         emoji: "🏋",  category: "activity", title: ""
        },
        {
         emoji: "🚴",  category: "activity", title: ""
        },
        {
         emoji: "🚵",  category: "activity", title: ""
        },
        {
         emoji: "🤸",  category: "activity", title: ""
        },
        {
         emoji: "🤼",  category: "activity", title: ""
        },
        {
         emoji: "🤹",  category: "activity", title: ""
        },
        {
         emoji: "🎪",  category: "activity", title: ""
        },
        {
         emoji: "🎗",  category: "activity", title: ""
        },
        {
         emoji: "🎫",  category: "activity", title: ""
        },
        {
         emoji: "🎖",  category: "activity", title: ""
        },
        {
         emoji: "🏆",  category: "activity", title: ""
        },
        {
         emoji: "🏅",  category: "activity", title: ""
        },
        {
         emoji: "🥇",  category: "activity", title: ""
        },
        {
         emoji: "⚽",  category: "activity", title: ""
        },
        {
         emoji: "⚾",  category: "activity", title: ""
        },
        {
         emoji: "🏀",  category: "activity", title: ""
        },
        {
         emoji: "🏈",  category: "activity", title: ""
        },
        {
         emoji: "🏉",  category: "activity", title: ""
        },
        {
         emoji: "🎾",  category: "activity", title: ""
        },
        {
         emoji: "🎳",  category: "activity", title: ""
        },
        {
         emoji: "🏏",  category: "activity", title: ""
        },
        {
         emoji: "🏑",  category: "activity", title: ""
        },
        {
         emoji: "🏒",  category: "activity", title: ""
        },
        {
         emoji: "🏓",  category: "activity", title: ""
        },
        {
         emoji: "🏸",  category: "activity", title: ""
        },
        {
         emoji: "🥊",  category: "activity", title: ""
        },
        {
         emoji: "⛳",  category: "activity", title: ""
        },
        {
         emoji: "⛸",  category: "activity", title: ""
        },
        {
         emoji: "🎣",  category: "activity", title: ""
        },
        {
         emoji: "🎽",  category: "activity", title: ""
        },
        {
         emoji: "🎿",  category: "activity", title: ""
        },
        {
         emoji: "🛷",  category: "activity", title: ""
        },
        {
         emoji: "🥌",  category: "activity", title: ""
        },
        {
         emoji: "🎯",  category: "activity", title: ""
        },
        {
         emoji: "🎱",  category: "activity", title: ""
        },
        {
         emoji: "🎮",  category: "activity", title: ""
        },
        {
         emoji: "🎲",  category: "activity", title: ""
        },
        {
         emoji: "🎨",  category: "activity", title: ""
        },
        {
         emoji: "🎼",  category: "activity", title: ""
        },
        {
         emoji: "🎤",  category: "activity", title: ""
        },
        {
         emoji: "🎧",  category: "activity", title: ""
        },
        {
         emoji: "🎷",  category: "activity", title: ""
        },
        {
         emoji: "🎸",  category: "activity", title: ""
        },
        {
         emoji: "🎹",  category: "activity", title: ""
        },
        {
         emoji: "🎺",  category: "activity", title: ""
        },
        {
         emoji: "🎻",  category: "activity", title: ""
        },
        {
         emoji: "🥁",  category: "activity", title: ""
        },
        {
         emoji: "🎬",  category: "activity", title: ""
        },
        {
         emoji: "🏹",  category: "activity", title: ""
        },
        {
         emoji: "💎",  category: "objects", title: ""
        },
        {
         emoji: "👓",  category: "objects", title: ""
        },
        {
         emoji: "🕶",  category: "objects", title: ""
        },
        {
         emoji: "👔",  category: "objects", title: ""
        },
        {
         emoji: "👕",  category: "objects", title: ""
        },
        {
         emoji: "🧣",  category: "objects", title: ""
        },
        {
         emoji: "👗",  category: "objects", title: ""
        },
        {
         emoji: "👘",  category: "objects", title: ""
        },
        {
         emoji: "👛",  category: "objects", title: ""
        },
        {
         emoji: "👜",  category: "objects", title: ""
        },
        {
         emoji: "🎒",  category: "objects", title: ""
        },
        {
         emoji: "👟",  category: "objects", title: ""
        },
        {
         emoji: "👠",  category: "objects", title: ""
        },
        {
         emoji: "👡",  category: "objects", title: ""
        },
        {
         emoji: "👢",  category: "objects", title: ""
        },
        {
         emoji: "👑",  category: "objects", title: ""
        },
        {
         emoji: "👒",  category: "objects", title: ""
        },
        {
         emoji: "🎩",  category: "objects", title: ""
        },
        {
         emoji: "🎓",  category: "objects", title: ""
        },
        {
         emoji: "⛑",  category: "objects", title: ""
        },
        {
         emoji: "💄",  category: "objects", title: ""
        },
        {
         emoji: "💍",  category: "objects", title: ""
        },
        {
         emoji: "🌂",  category: "objects", title: ""
        },
        {
         emoji: "☂",  category: "objects", title: ""
        },
        {
         emoji: "💼",  category: "objects", title: ""
        },
        {
         emoji: "🚦",  category: "objects", title: ""
        },
        {
         emoji: "🚧",  category: "objects", title: ""
        },
        {
         emoji: "⚓",  category: "objects", title: ""
        },
        {
         emoji: "🛍",  category: "objects", title: ""
        },
        {
         emoji: "🏺",  category: "objects", title: ""
        },
        {
         emoji: "🗺",  category: "objects", title: ""
        },
        {
         emoji: "💈",  category: "objects", title: ""
        },
        {
         emoji: "🛢",  category: "objects", title: ""
        },
        {
         emoji: "🛎",  category: "objects", title: ""
        },
        {
         emoji: "⌛",  category: "objects", title: ""
        },
        {
         emoji: "⌚",  category: "objects", title: ""
        },
        {
         emoji: "⏰",  category: "objects", title: ""
        },
        {
         emoji: "⏱",  category: "objects", title: ""
        },
        {
         emoji: "🕰",  category: "objects", title: ""
        },
        {
         emoji: "🌡",  category: "objects", title: ""
        },
        {
         emoji: "🎈",  category: "objects", title: ""
        },
        {
         emoji: "🎉",  category: "objects", title: ""
        },
        {
         emoji: "🎊",  category: "objects", title: ""
        },
        {
         emoji: "🎐",  category: "objects", title: ""
        },
        {
         emoji: "🎀",  category: "objects", title: ""
        },
        {
         emoji: "🎁",  category: "objects", title: ""
        },
        {
         emoji: "🕹",  category: "objects", title: ""
        },
        {
         emoji: "🖼",  category: "objects", title: ""
        },
        {
         emoji: "🎙",  category: "objects", title: ""
        },
        {
         emoji: "📱",  category: "objects", title: ""
        },
        {
         emoji: "☎",  category: "objects", title: ""
        },
        {
         emoji: "📞",  category: "objects", title: ""
        },
        {
         emoji: "🔋",  category: "objects", title: ""
        },
        {
         emoji: "🔌",  category: "objects", title: ""
        },
        {
         emoji: "💻",  category: "objects", title: ""
        },
        {
         emoji: "🖥",  category: "objects", title: ""
        },
        {
         emoji: "🖱",  category: "objects", title: ""
        },
        {
         emoji: "📷",  category: "objects", title: ""
        },
        {
         emoji: "📹",  category: "objects", title: ""
        },
        {
         emoji: "🔍",  category: "objects", title: ""
        },
        {
         emoji: "🕯",  category: "objects", title: ""
        },
        {
         emoji: "💡",  category: "objects", title: ""
        },
        {
         emoji: "✉",  category: "objects", title: ""
        },
        {
         emoji: "📧",  category: "objects", title: ""
        },
        {
         emoji: "📫",  category: "objects", title: ""
        },
        {
         emoji: "📬",  category: "objects", title: ""
        },
        {
         emoji: "📮",  category: "objects", title: ""
        },
        {
         emoji: "🗳",  category: "objects", title: ""
        },
        {
         emoji: "✒",  category: "objects", title: ""
        },
        {
         emoji: "🖌",  category: "objects", title: ""
        },
        {
         emoji: "🖍",  category: "objects", title: ""
        },
        {
         emoji: "📝",  category: "objects", title: ""
        },
        {
         emoji: "📅",  category: "objects", title: ""
        },
        {
         emoji: "🗓",  category: "objects", title: ""
        },
        {
         emoji: "📈",  category: "objects", title: ""
        },
        {
         emoji: "📉",  category: "objects", title: ""
        },
        {
         emoji: "📊",  category: "objects", title: ""
        },
        {
         emoji: "📋",  category: "objects", title: ""
        },
        {
         emoji: "📌",  category: "objects", title: ""
        },
        {
         emoji: "📍",  category: "objects", title: ""
        },
        {
         emoji: "📎",  category: "objects", title: ""
        },
        {
         emoji: "🖇",  category: "objects", title: ""
        },
        {
         emoji: "📏",  category: "objects", title: ""
        },
        {
         emoji: "📐",  category: "objects", title: ""
        },
        {
         emoji: "✂",  category: "objects", title: ""
        },
        {
         emoji: "🔒",  category: "objects", title: ""
        },
        {
         emoji: "🔓",  category: "objects", title: ""
        },
        {
         emoji: "🔐",  category: "objects", title: ""
        },
        {
         emoji: "🔑",  category: "objects", title: ""
        },
        {
         emoji: "🔨",  category: "objects", title: ""
        },
        {
         emoji: "⛏",  category: "objects", title: ""
        },
        {
         emoji: "⚒",  category: "objects", title: ""
        },
        {
         emoji: "🛠",  category: "objects", title: ""
        },
        {
         emoji: "🗡",  category: "objects", title: ""
        },
        {
         emoji: "⚔",  category: "objects", title: ""
        },
        {
         emoji: "🔫",  category: "objects", title: ""
        },
        {
         emoji: "🛡",  category: "objects", title: ""
        },
        {
         emoji: "🔧",  category: "objects", title: ""
        },
        {
         emoji: "🔩",  category: "objects", title: ""
        },
        {
         emoji: "⚙",  category: "objects", title: ""
        },
        {
         emoji: "🗜",  category: "objects", title: ""
        },
        {
         emoji: "⚖",  category: "objects", title: ""
        },
        {
         emoji: "🔗",  category: "objects", title: ""
        },
        {
         emoji: "⛓",  category: "objects", title: ""
        },
        {
         emoji: "⚗",  category: "objects", title: ""
        },
        {
         emoji: "🔬",  category: "objects", title: ""
        },
        {
         emoji: "🔭",  category: "objects", title: ""
        },
        {
         emoji: "📡",  category: "objects", title: ""
        },
        {
         emoji: "💉",  category: "objects", title: ""
        },
        {
         emoji: "💊",  category: "objects", title: ""
        },
        {
         emoji: "🚪",  category: "objects", title: ""
        },
        {
         emoji: "🛋",  category: "objects", title: ""
        },
        {
         emoji: "🚿",  category: "objects", title: ""
        },
        {
         emoji: "🛁",  category: "objects", title: ""
        },
        {
         emoji: "💘",  category: "objects", title: ""
        },
        {
         emoji: "❤",  category: "objects", title: ""
        },
        {
         emoji: "💔",  category: "objects", title: ""
        },
        {
         emoji: "💕",  category: "objects", title: ""
        },
        {
         emoji: "💖",  category: "objects", title: ""
        },
        {
         emoji: "💜",  category: "objects", title: ""
        },
        {
         emoji: "💞",  category: "objects", title: ""
        },
        {
         emoji: "❣",  category: "objects", title: ""
        },
        {
         emoji: "💦",  category: "objects", title: ""
        },
        {
         emoji: "💨",  category: "objects", title: ""
        },
        {
         emoji: "💫",  category: "objects", title: ""
        },
        {
         emoji: "🏁",  category: "objects", title: ""
        },
        {
         emoji: "🚩",  category: "objects", title: ""
        },
        {
         emoji: "🎌",  category: "objects", title: ""
        },
        {
         emoji: "🏴",  category: "objects", title: ""
        },
        {
         emoji: "🍳",  category: "food", title: ""
        },
        {
         emoji: "🧀",  category: "food", title: ""
        },
        {
         emoji: "🥚",  category: "food", title: ""
        },
        {
         emoji: "🥞",  category: "food", title: ""
        },
        {
         emoji: "🍞",  category: "food", title: ""
        },
        {
         emoji: "🥐",  category: "food", title: ""
        },
        {
         emoji: "🥯",  category: "food", title: ""
        },
        {
         emoji: "🥖",  category: "food", title: ""
        },
        {
         emoji: "🥨",  category: "food", title: ""
        },
        {
         emoji: "🍔",  category: "food", title: ""
        },
        {
         emoji: "🍟",  category: "food", title: ""
        },
        {
         emoji: "🌭",  category: "food", title: ""
        },
        {
         emoji: "🍕",  category: "food", title: ""
        },
        {
         emoji: "🥪",  category: "food", title: ""
        },
        {
         emoji: "🌮",  category: "food", title: ""
        },
        {
         emoji: "🌯",  category: "food", title: ""
        },
        {
         emoji: "🍝",  category: "food", title: ""
        },
        {
         emoji: "🍛",  category: "food", title: ""
        },
        {
         emoji: "🥘",  category: "food", title: ""
        },
        {
         emoji: "🍲",  category: "food", title: ""
        },
        {
         emoji: "🍤",  category: "food", title: ""
        },
        {
         emoji: "🥗",  category: "food", title: ""
        },
        {
         emoji: "🥫",  category: "food", title: ""
        },
        {
         emoji: "🥓",  category: "food", title: ""
        },
        {
         emoji: "🍖",  category: "food", title: ""
        },
        {
         emoji: "🥢",  category: "food", title: ""
        },
        {
         emoji: "🥡",  category: "food", title: ""
        },
        {
         emoji: "🍚",  category: "food", title: ""
        },
        {
         emoji: "🍜",  category: "food", title: ""
        },
        {
         emoji: "🥠",  category: "food", title: ""
        },
        {
         emoji: "🥮",  category: "food", title: ""
        },
        {
         emoji: "🍘",  category: "food", title: ""
        },
        {
         emoji: "🍙",  category: "food", title: ""
        },
        {
         emoji: "🍣",  category: "food", title: ""
        },
        {
         emoji: "🍥",  category: "food", title: ""
        },
        {
         emoji: "🍱",  category: "food", title: ""
        },
        {
         emoji: "🍡",  category: "food", title: ""
        },
        {
         emoji: "🍢",  category: "food", title: ""
        },
        {
         emoji: "🍇",  category: "food", title: ""
        },
        {
         emoji: "🍑",  category: "food", title: ""
        },
        {
         emoji: "🍒",  category: "food", title: ""
        },
        {
         emoji: "🍓",  category: "food", title: ""
        },
        {
         emoji: "🥝",  category: "food", title: ""
        },
        {
         emoji: "🍉",  category: "food", title: ""
        },
        {
         emoji: "🍈",  category: "food", title: ""
        },
        {
         emoji: "🍊",  category: "food", title: ""
        },
        {
         emoji: "🍋",  category: "food", title: ""
        },
        {
         emoji: "🍌",  category: "food", title: ""
        },
        {
         emoji: "🍍",  category: "food", title: ""
        },
        {
         emoji: "🥭",  category: "food", title: ""
        },
        {
         emoji: "🥥",  category: "food", title: ""
        },
        {
         emoji: "🍎",  category: "food", title: ""
        },
        {
         emoji: "🍏",  category: "food", title: ""
        },
        {
         emoji: "🌽",  category: "food", title: ""
        },
        {
         emoji: "🍐",  category: "food", title: ""
        },
        {
         emoji: "🥬",  category: "food", title: ""
        },
        {
         emoji: "🥦",  category: "food", title: ""
        },
        {
         emoji: "🍄",  category: "food", title: ""
        },
        {
         emoji: "🍅",  category: "food", title: ""
        },
        {
         emoji: "🥕",  category: "food", title: ""
        },
        {
         emoji: "🌶",  category: "food", title: ""
        },
        {
         emoji: "🍆",  category: "food", title: ""
        },
        {
         emoji: "🥒",  category: "food", title: ""
        },
        {
         emoji: "🍳",  category: "food", title: ""
        },
        {
         emoji: "🥔",  category: "food", title: ""
        },
        {
         emoji: "🍠",  category: "food", title: ""
        },
        {
         emoji: "🥜",  category: "food", title: ""
        },
        {
         emoji: "🍰",  category: "food", title: ""
        },
        {
         emoji: "🎂",  category: "food", title: ""
        },
        {
         emoji: "🧁",  category: "food", title: ""
        },
        {
         emoji: "🥧",  category: "food", title: ""
        },
        {
         emoji: "🍩",  category: "food", title: ""
        },
        {
         emoji: "🍪",  category: "food", title: ""
        },
        {
         emoji: "🍿",  category: "food", title: ""
        },
        {
         emoji: "🍮",  category: "food", title: ""
        },
        {
         emoji: "🍯",  category: "food", title: ""
        },
        {
         emoji: "🍦",  category: "food", title: ""
        },
        {
         emoji: "🍨",  category: "food", title: ""
        },
        {
         emoji: "🍧",  category: "food", title: ""
        },
        {
         emoji: "🍫",  category: "food", title: ""
        },
        {
         emoji: "🍬",  category: "food", title: ""
        },
        {
         emoji: "🍭",  category: "food", title: ""
        },
        {
         emoji: "🍺",  category: "food", title: ""
        },
        {
         emoji: "🍻",  category: "food", title: ""
        },
        {
         emoji: "🥂",  category: "food", title: ""
        },
        {
         emoji: "🍷",  category: "food", title: ""
        },
        {
         emoji: "🍸",  category: "food", title: ""
        },
        {
         emoji: "🍹",  category: "food", title: ""
        },
        {
         emoji: "🍶",  category: "food", title: ""
        },
        {
         emoji: "🥃",  category: "food", title: ""
        },
        {
         emoji: "🍳",  category: "food", title: ""
        },
        {
         emoji: "☕",  category: "food", title: ""
        },
        {
         emoji: "🍵",  category: "food", title: ""
        },
        {
         emoji: "🥛",  category: "food", title: ""
        },
        {
         emoji: "🍼",  category: "food", title: ""
        },
        {
         emoji: "🥤",  category: "food", title: ""
        },
        {
         emoji: "🍴",  category: "food", title: ""
        },
        {
         emoji: "🍽",  category: "food", title: ""
        },
        {
         emoji: "🥣",  category: "food", title: ""
        },
        {
         emoji: "🥄",  category: "food", title: ""
        },
        {
         emoji: "🧂",  category: "food", title: ""
        },
        {
         emoji: "👦",  category: "people", title: ""
        },
        {
         emoji: "👶",  category: "people", title: ""
        },
        {
         emoji: "👧",  category: "people", title: ""
        },
        {
         emoji: "👨",  category: "people", title: ""
        },
        {
         emoji: "👩",  category: "people", title: ""
        },
        {
         emoji: "👴",  category: "people", title: ""
        },
        {
         emoji: "👵",  category: "people", title: ""
        },
        {
         emoji: "👮",  category: "people", title: ""
        },
        {
         emoji: "🕵",  category: "people", title: ""
        },
        {
         emoji: "💂",  category: "people", title: ""
        },
        {
         emoji: "👷",  category: "people", title: ""
        },
        {
         emoji: "🤴",  category: "people", title: ""
        },
        {
         emoji: "👸",  category: "people", title: ""
        },
        {
         emoji: "👳",  category: "people", title: ""
        },
        {
         emoji: "👲",  category: "people", title: ""
        },
        {
         emoji: "🧕",  category: "people", title: ""
        },
        {
         emoji: "🧔",  category: "people", title: ""
        },
        {
         emoji: "👱",  category: "people", title: ""
        },
        {
         emoji: "🤵",  category: "people", title: ""
        },
        {
         emoji: "👰",  category: "people", title: ""
        },
        {
         emoji: "🤰",  category: "people", title: ""
        },
        {
         emoji: "🤱",  category: "people", title: ""
        },
        {
         emoji: "👼",  category: "people", title: ""
        },
        {
         emoji: "🎅",  category: "people", title: ""
        },
        {
         emoji: "🤶",  category: "people", title: ""
        },
        {
         emoji: "🙍",  category: "people", title: ""
        },
        {
         emoji: "🙎",  category: "people", title: ""
        },
        {
         emoji: "🙅",  category: "people", title: ""
        },
        {
         emoji: "💁",  category: "people", title: ""
        },
        {
         emoji: "🙋",  category: "people", title: ""
        },
        {
         emoji: "🙇",  category: "people", title: ""
        },
        {
         emoji: "🤦",  category: "people", title: ""
        },
        {
         emoji: "🤷",  category: "people", title: ""
        },
        {
         emoji: "💆",  category: "people", title: ""
        },
        {
         emoji: "💇",  category: "people", title: ""
        },
        {
         emoji: "🚶",  category: "people", title: ""
        },
        {
         emoji: "🏃",  category: "people", title: ""
        },
        {
         emoji: "💃",  category: "people", title: ""
        },
        {
         emoji: "🕺",  category: "people", title: ""
        },
        {
         emoji: "👯",  category: "people", title: ""
        },
        {
         emoji: "🕴",  category: "people", title: ""
        },
        {
         emoji: "🗣",  category: "people", title: ""
        },
        {
         emoji: "👤",  category: "people", title: ""
        },
        {
         emoji: "👥",  category: "people", title: ""
        },
        {
         emoji: "👫",  category: "people", title: ""
        },
        {
         emoji: "💏",  category: "people", title: ""
        },
        {
         emoji: "💑",  category: "people", title: ""
        },
        {
         emoji: "👪",  category: "people", title: ""
        },
        {
         emoji: "🏎",  category: "travel", title: ""
        },
        {
         emoji: "🏍",  category: "travel", title: ""
        },
        {
         emoji: "🗾",  category: "travel", title: ""
        },
        {
         emoji: "🏔",  category: "travel", title: ""
        },
        {
         emoji: "⛰",  category: "travel", title: ""
        },
        {
         emoji: "🌋",  category: "travel", title: ""
        },
        {
         emoji: "🗻",  category: "travel", title: ""
        },
        {
         emoji: "🏕",  category: "travel", title: ""
        },
        {
         emoji: "🏜",  category: "travel", title: ""
        },
        {
         emoji: "🏝",  category: "travel", title: ""
        },
        {
         emoji: "🏞",  category: "travel", title: ""
        },
        {
         emoji: "🏟",  category: "travel", title: ""
        },
        {
         emoji: "🏛",  category: "travel", title: ""
        },
        {
         emoji: "🏗",  category: "travel", title: ""
        },
        {
         emoji: "🏘",  category: "travel", title: ""
        },
        {
         emoji: "🏠",  category: "travel", title: ""
        },
        {
         emoji: "🏡",  category: "travel", title: ""
        },
        {
         emoji: "🏢",  category: "travel", title: ""
        },
        {
         emoji: "🏣",  category: "travel", title: ""
        },
        {
         emoji: "🏤",  category: "travel", title: ""
        },
        {
         emoji: "🏥",  category: "travel", title: ""
        },
        {
         emoji: "🏦",  category: "travel", title: ""
        },
        {
         emoji: "🏨",  category: "travel", title: ""
        },
        {
         emoji: "🏩",  category: "travel", title: ""
        },
        {
         emoji: "🏪",  category: "travel", title: ""
        },
        {
         emoji: "🏫",  category: "travel", title: ""
        },
        {
         emoji: "🏬",  category: "travel", title: ""
        },
        {
         emoji: "🏭",  category: "travel", title: ""
        },
        {
         emoji: "🏯",  category: "travel", title: ""
        },
        {
         emoji: "🏰",  category: "travel", title: ""
        },
        {
         emoji: "💒",  category: "travel", title: ""
        },
        {
         emoji: "🗼",  category: "travel", title: ""
        },
        {
         emoji: "🗽",  category: "travel", title: ""
        },
        {
         emoji: "⛪",  category: "travel", title: ""
        },
        {
         emoji: "🕌",  category: "travel", title: ""
        },
        {
         emoji: "🕍",  category: "travel", title: ""
        },
        {
         emoji: "⛩",  category: "travel", title: ""
        },
        {
         emoji: "🕋",  category: "travel", title: ""
        },
        {
         emoji: "⛲",  category: "travel", title: ""
        },
        {
         emoji: "⛺",  category: "travel", title: ""
        },
        {
         emoji: "🌁",  category: "travel", title: ""
        },
        {
         emoji: "🌃",  category: "travel", title: ""
        },
        {
         emoji: "🏙",  category: "travel", title: ""
        },
        {
         emoji: "🌄",  category: "travel", title: ""
        },
        {
         emoji: "🌅",  category: "travel", title: ""
        },
        {
         emoji: "🌆",  category: "travel", title: ""
        },
        {
         emoji: "🌇",  category: "travel", title: ""
        },
        {
         emoji: "🌉",  category: "travel", title: ""
        },
        {
         emoji: "🌌",  category: "travel", title: ""
        },
        {
         emoji: "🎠",  category: "travel", title: ""
        },
        {
         emoji: "🎡",  category: "travel", title: ""
        },
        {
         emoji: "🎢",  category: "travel", title: ""
        },
        {
         emoji: "🚂",  category: "travel", title: ""
        },
        {
         emoji: "🚃",  category: "travel", title: ""
        },
        {
         emoji: "🚄",  category: "travel", title: ""
        },
        {
         emoji: "🚅",  category: "travel", title: ""
        },
        {
         emoji: "🚆",  category: "travel", title: ""
        },
        {
         emoji: "🚇",  category: "travel", title: ""
        },
        {
         emoji: "🚈",  category: "travel", title: ""
        },
        {
         emoji: "🚉",  category: "travel", title: ""
        },
        {
         emoji: "🚊",  category: "travel", title: ""
        },
        {
         emoji: "🚝",  category: "travel", title: ""
        },
        {
         emoji: "🚞",  category: "travel", title: ""
        },
        {
         emoji: "🚋",  category: "travel", title: ""
        },
        {
         emoji: "🚌",  category: "travel", title: ""
        },
        {
         emoji: "🚍",  category: "travel", title: ""
        },
        {
         emoji: "🚎",  category: "travel", title: ""
        },
        {
         emoji: "🚐",  category: "travel", title: ""
        },
        {
         emoji: "🚑",  category: "travel", title: ""
        },
        {
         emoji: "🚒",  category: "travel", title: ""
        },
        {
         emoji: "🚓",  category: "travel", title: ""
        },
        {
         emoji: "🚔",  category: "travel", title: ""
        },
        {
         emoji: "🚕",  category: "travel", title: ""
        },
        {
         emoji: "🚖",  category: "travel", title: ""
        },
        {
         emoji: "🚗",  category: "travel", title: ""
        },
        {
         emoji: "🚘",  category: "travel", title: ""
        },
        {
         emoji: "🚚",  category: "travel", title: ""
        },
        {
         emoji: "🚛",  category: "travel", title: ""
        },
        {
         emoji: "🚜",  category: "travel", title: ""
        },
        {
         emoji: "🚲",  category: "travel", title: ""
        },
        {
         emoji: "🛴",  category: "travel", title: ""
        },
        {
         emoji: "🛵",  category: "travel", title: ""
        },
        {
         emoji: "🚏",  category: "travel", title: ""
        },
        {
         emoji: "🛤",  category: "travel", title: ""
        },
        {
         emoji: "⛽",  category: "travel", title: ""
        },
        {
         emoji: "🚨",  category: "travel", title: ""
        },
        {
         emoji: "⛵",  category: "travel", title: ""
        },
        {
         emoji: "🚤",  category: "travel", title: ""
        },
        {
         emoji: "🛳",  category: "travel", title: ""
        },
        {
         emoji: "⛴",  category: "travel", title: ""
        },
        {
         emoji: "🛥",  category: "travel", title: ""
        },
        {
         emoji: "🚢",  category: "travel", title: ""
        },
        {
         emoji: "✈",  category: "travel", title: ""
        },
        {
         emoji: "🛩",  category: "travel", title: ""
        },
        {
         emoji: "🛫",  category: "travel", title: ""
        },
        {
         emoji: "🛬",  category: "travel", title: ""
        },
        {
         emoji: "💺",  category: "travel", title: ""
        },
        {
         emoji: "🚁",  category: "travel", title: ""
        },
        {
         emoji: "🚟",  category: "travel", title: ""
        },
        {
         emoji: "🚠",  category: "travel", title: ""
        },
        {
         emoji: "🚡",  category: "travel", title: ""
        },
        {
         emoji: "🛰",  category: "travel", title: ""
        },
        {
         emoji: "🚀",  category: "travel", title: ""
        },
        {
         emoji: "🛸",  category: "travel", title: ""
        },
        {
         emoji: "⛱",  category: "travel", title: ""
        },
        {
         emoji: "🎆",  category: "travel", title: ""
        },
        {
         emoji: "🎇",  category: "travel", title: ""
        },
        {
         emoji: "🎑",  category: "travel", title: ""
        },
        {
         emoji: "🗿",  category: "travel", title: ""
        },
        {
         emoji: "🛂",  category: "travel", title: ""
        },
        {
         emoji: "🛃",  category: "travel", title: ""
        },
        {
         emoji: "🛄",  category: "travel", title: ""
        },
        {
         emoji: "🛅",  category: "travel", title: ""
        }
     ];
/* DO NOT MAKE ANY EDITS BELOW THIS LINE */

let toHTML = true;
let estrte_fragments_log = [];
let estrte_undo_log = [];
let new_log = {};
let estrte_newStyle = "none";
let estrte_clearedNew = "no";
let style_added = false;
let estrte_colorSelected = 'no';
let estrte_action = "";
let tempColorCounter = 0;
let newSoFar = "";
let formatOn = '';
let estrte_prevAdd = 'no';
let currentActive;
let table_spec_active = false;
let link_spec_active = false;
let estrte_color_editing = false;
let pic_counter_master;
let currentCursorPos;

// test functions

function slideDown(pic_counter, value){
    target = document.getElementById(pic_counter + "estrte_select_features_div");
    target.style.removeProperty('display');
    let display = window.getComputedStyle(target).display;
    let toolbar = document.getElementById(pic_counter + "estrte_toolbar");
    let targetWidth = window.getComputedStyle(toolbar).width;
  if (display === 'none')
      display = 'block';

    target.style.height = 0;
    target.style.display = display;
    let height = target.offsetHeight;
    target.style.position = "relative";  // can be changed to absolue if 
  //  target.style.width = targetWidth;
    target.style.width = '100%';
    target.style.transitionProperty = 'height, margin, padding';
    target.style.transitionDuration = estrte_animation_dur + 'ms';
    target.style.overflow = 'hidden';
    target.style.height = value;
    target.style.paddingTop = 0;
    target.style.paddingBottom = 0;
    target.style.marginTop = 0;
    target.style.marginBottom = 0;
    target.offsetHeight;
    target.style.boxSizing = 'border-box';
 //   target.style.height = height + 'px';
    target.style.removeProperty('padding-top');
    target.style.removeProperty('padding-bottom');
    target.style.removeProperty('margin-top');
    target.style.removeProperty('margin-bottom');
    window.setTimeout( () => {
    target.style.height = 'auto';
  //    target.style.removeProperty('height');
      target.style.removeProperty('overflow');
      target.style.removeProperty('transition-duration');
      target.style.removeProperty('transition-property');
    }, estrte_animation_dur);
  }

function getCaretPosition(ctrl) {
    // IE < 9 Support 
    if (document.selection) {
        ctrl.focus();
        var range = document.selection.createRange();
        var rangelen = range.text.length;
        range.moveStart('character', -ctrl.value.length);
        var start = range.text.length - rangelen;
        return {
            'start': start,
            'end': start + rangelen
        };
    } // IE >=9 and other browsers
    else if (ctrl.selectionStart || ctrl.selectionStart =='0'){
        return {
         //   'start': ctrl.selectionStart,
         //   'end': ctrl.selectionEnd
            'start': ctrl.innerHTML.length,
            'end': ctrl.innerHTML.length
        };
    } else {
        return {
        //    'start': 0,
        //    'end': 0
            'start': ctrl.innerHTML.length,
            'end': ctrl.innerHTML.length
        };
    }
}

function setCaretPosition(ctrl, start, end) {
    // IE >= 9 and other browsers
    if (ctrl.setSelectionRange) {
        ctrl.focus();
        ctrl.setSelectionRange(start, end);
    }
    // IE < 9 
    else if (ctrl.createTextRange) {
        var range = ctrl.createTextRange();
        range.collapse(true);
        range.moveEnd('character', end);
        range.moveStart('character', start);
        range.select();
    }
}          
function estrte_show_select_special_characters_div(pic_counter){
   event.preventDefault();
    estrte_color_editing = false;
//document.getElementById(pic_counter + "estrte_select_features_div").style.display = "block";
let thisTarget = document.getElementById(pic_counter + "estrte_select_features_div");
slideDown(pic_counter, "520px");
document.getElementById(pic_counter + "estrte_select_features_div").innerHTML = '<div class="table_spec_form" id="#placeholder#spec_chars_list"><div class="spec_features_head" id="table_spec_heading">Special Chars<span class="close_window" title="Close" inputmode="none" unselectable="on" onclick="close_select_features_div(\'#placeholder#\',)"><img src="/est_rte_multi/images/close_menu.png" alt="" /></span></div><div class="estrte_special_charsInput" id="#placeholder#estrte_special_chars"></div></div>';
let this_special_select_html = document.getElementById(pic_counter + "estrte_select_features_div").innerHTML;
while(this_special_select_html.indexOf('#placeholder#') != -1){
      this_special_select_html = this_special_select_html.replace('#placeholder#', pic_counter);
	}
document.getElementById(pic_counter + "estrte_select_features_div").innerHTML = this_special_select_html;
estrte_special_chars.forEach((specialChar) => {
       document.getElementById(pic_counter + "estrte_special_chars").appendChild(generateSpecialcharIcon(specialChar, pic_counter));
		});
        document.getElementById(pic_counter + "estrte_input_field").addEventListener("click", function () {
            close_select_features_div(pic_counter);
        });
}

function estrte_show_select_estrte_emojis_div(pic_counter){
   event.preventDefault();
let estrte_emojis_list_html = '<div id="#placeholder#estrte_emojis_list" class="table_spec_form"><div class="spec_features_head" id="table_spec_heading">Emojis<span class="close_window" title="Close" inputmode="none" unselectable="on" onclick="close_select_features_div(\'#placeholder#\')"><img src="/est_rte_multi/images/close_menu.png" alt="" /></span></div><div class="estrte_emojis_category" id="#placeholder#emojisgeneral" inputmode="none" unselectable="on"><div class="estrte_emojis_category_show" class="emojis_showgeneral" id="#placeholder#emojis_showgeneral"></div></div>';
for (let i = 0; i < estrte_emoji_categories.length; i++){
      var category = estrte_emoji_categories[i];
      estrte_emojis_list_html += '<div class="estrte_emojis_category" id="#placeholder#emojis'+ category + '" inputmode="none" unselectable="on"><label>' + category + '&nbsp;</label><div class="estrte_emojis_category_show" id="#placeholder#emojis_show'+ category + '"></div></div>';
        document.getElementById(pic_counter + "estrte_input_field").addEventListener("click", function () {
            close_select_features_div(pic_counter);
        });
}
estrte_emojis_list_html += '</div>';
   let this_estrte_emojis_list_html = estrte_emojis_list_html;
while(this_estrte_emojis_list_html.indexOf('#placeholder#') != -1){
this_estrte_emojis_list_html = this_estrte_emojis_list_html.replace('#placeholder#', pic_counter);
}
document.getElementById(pic_counter + "estrte_select_features_div").innerHTML = this_estrte_emojis_list_html;
let thisTarget = document.getElementById(pic_counter + "estrte_select_features_div");
slideDown(pic_counter, "520px");
estrte_emojis.forEach((emoji) => {
	var category = emoji.category;
	if(category == "general"){
document.getElementById(pic_counter + "emojis_showgeneral").appendChild(generateEmojiIcon(emoji.emoji, emoji.title, pic_counter));
	}else{
  document.getElementById(pic_counter + "emojis_show" + category).appendChild(generateEmojiIcon(emoji.emoji, emoji.title, pic_counter));
            }
        
    });
estrte_color_editing = false;
}

function insertAfter(newNode, existingNode) {
    existingNode.parentNode.insertBefore(newNode, existingNode.nextSibling);
}

	  function pasteHtmlAtCaret(html, pic_counter) {
	  	let existingHTML;
	  	let newInputText;
	  	let newHTML;
	  	let new_log;
        let date = new Date();
        let unix =  pic_counter.toString() +  Math.round(+date / 1000);
        let estrte_input_field = document.getElementById(pic_counter + "estrte_input_field");
	if(estrte_fragments_log.length > 0){
       existingHTML = estrte_fragments_log[0].post_edit;
	}else{
       existingHTML =  document.getElementById(pic_counter +"estrte_content_wrapper").innerHTML;
	}
    let sel, range;
        if (window.getSelection) {
          // IE9 + and non-IE
          sel = window.getSelection();
          
          if (sel.getRangeAt && sel.rangeCount) {
            range = sel.getRangeAt(0);
            range.deleteContents();
            let el = document.createElement("div");
            el.innerHTML = html;
            el.id = unix;
            el.className = "inserted_div";
            let docFrag = document.createDocumentFragment();
           let node = el;
             let lastNode = docFrag.appendChild(node);
            range.insertNode(docFrag);
              range = range.cloneRange();
              range.setStartAfter(lastNode);
              range.collapse(true);
              sel.removeAllRanges();
              sel.addRange(range);
          }
        } else if (document.selection && document.selection.type != "Control") {
          // IE < 9
          document.selection.createRange().pasteHTML(html);
        }  
        estrte_input_field.focus();
  newHTML = document.getElementById(pic_counter + "estrte_content_wrapper").innerHTML;
    new_log = {"pre_edit": existingHTML, "post_edit": newHTML, "type_of_edit": "text"};
	estrte_fragments_log.unshift(new_log);
 	document.getElementById(pic_counter + "estrte_undo").style.display = "inline-block";
 	document.getElementById(pic_counter + "estrte_undo").innerHTML = "Undo";
	newInputText = document.getElementById(pic_counter + "estrte_content_wrapper").innerHTML; 
	document.getElementById(pic_counter + "estrte_content").value = estrte_sanitise_input_content(newInputText, pic_counter);
	return;
      }

function addTableToDiv(event) {
        let estrte_input_field = document.getElementById(pic_counter + "estrte_input_field");
        estrte_input_field.focus();
       let table_html = document.getElementById("table_html_hidden").value;
        pasteHtmlAtCaret(table_html, pic_counter);
      }
function generateEmojiIcon(emoji, title, pic_counter) {
        pic_counter = pic_counter;
        let date = new Date();
        let unix =  pic_counter.toString() +  Math.round(+date / 1000);
        input = document.createElement("input");
        input.type = "button";
        input.id = unix;
        input.value = emoji;
        input.title = title;
        input.innerText = {emoji};//caption on button
        input.addEventListener("click", function(){
        let estrte_input_field = document.getElementById(pic_counter + "estrte_input_field");
        pasteHtmlAtCaret(emoji, pic_counter);
        close_select_features_div(pic_counter);
        });
        return input;
}
function generateSpecialcharIcon(specChar, pic_counter) {
                    const date = new Date();
const unix =  pic_counter.toString() +  Math.round(+date / 1000);
        let input = document.createElement("input");
        input.type = "button";
        input.id = unix;
        input.value = specChar;
        input.innerText = specChar;//caption on button
        input.addEventListener("click", function(){
        let estrte_input_field = document.getElementById(pic_counter + "estrte_input_field");
    //    estrte_input_field.focus();
        pasteHtmlAtCaret(`${specChar}`, pic_counter);
        close_select_features_div(pic_counter);
        });
        return input;
      }


function setDocMode(pic_counter, toSource) {
       let doc = document.getElementById(pic_counter + "estrte_input_field");
        let content;
     //   if (toSource) {
        if (toHTML) {
          content = document.createTextNode(doc.innerHTML);
          doc.innerHTML = "";
          const pre = document.createElement("pre");
          doc.contentEditable = false;
          pre.id = "sourceText";
          pre.contentEditable = true;
          pre.appendChild(content);
          doc.appendChild(pre);
          document.execCommand("defaultParagraphSeparator", false, "div");
          toHTML = false;
        } else {
          if (document.all) {
            doc.innerHTML = doc.innerText;
          } else {
            content = document.createRange();
            content.selectNodeContents(doc.firstChild);
            doc.innerHTML = content.toString();
          }
          doc.contentEditable = true;
          toHTML = true;
        }
        doc.focus();
      }
      
function estrte_sanitise_input_content(inputHtmlRaw, pic_counter){
  let map = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#039;'
  };
let inputHtml = inputHtmlRaw.replace(pic_counter + 'estrte_input_field', 'pref');
inputHtml = inputHtml.replace(/[&<>"']/g, function(m) { return map[m]; });
inputHtml = inputHtml.replace(/name=&quot;estrte_input_field&quot;/g, '');  
inputHtml = inputHtml.replace(/id=&quot;estrte_input_field&quot;/g, '');  
inputHtml = inputHtml.replace(/id=&quot;estrte_content_wrapper&quot;/g, '');  
inputHtml = inputHtml.replace(/name=&quot;estrte_content_wrapper&quot;/g, '');
inputHtml = inputHtml.replace(/contenteditable=&quot;true&quot;/g, '');
inputHtml = inputHtml.replace(/contenteditable=&quot;false&quot;/g, '');
  return inputHtml;
}

function estrte_remove_placeholder(){
	let existingHTML;
	let newHTML;
	let elList = document.getElementsByTagName("*");
	for(let i = 0; i < elList.length; i++){
		if(elList[i].innerHTML == '<span class="est_placeholder">-</span>'){
		let thisParentElementId = elList[i].id;
existingHTML = document.getElementById(thisParentElementId).innerHTML;
newHTML = existingHTML.replace('<span class="est_placeholder">-</span>', '');
document.getElementById(thisParentElementId).innerHTML = newHTML;
document.getElementById(thisParentElementId).removeEventListener("keydown", estrte_remove_placeholder, true);
document.getElementById(thisParentElementId).removeEventListener("touchstart", estrte_remove_placeholder, true);
document.getElementById(thisParentElementId).removeEventListener("click", estrte_remove_placeholder, true);
return;
		}
	}
	//document.getElementById(thisParentElementId).focus();
}
function estrte_set_current_style(pic_counter, styleToAdd, newValue){
document.getElementById(pic_counter + "estrte_input_field").style.styleToAdd = newValue;
}
function estrte_add_style(pic_counter, styleToAdd, newValue){
estrte_remove_placeholder();
    estrte_color_editing = false;
  let estrte_prevDelete = 'no';
  let selectedText;
  let parentElementId;
  let parentElementTagName;
  let parentInnerHTML;
  let origInputText;
  let newInputText;
  let range;
    estrte_prevAdd = 'no';
    document.getElementById(pic_counter + 'estrte_docFrag').innerHTML = "";
    window.styleToAdd = styleToAdd;
	window.newValue = newValue;
	if(estrte_fragments_log.length > 0){
       origInputText = estrte_fragments_log[0].post_edit;
	}else{
       origInputText = document.getElementById(pic_counter + "estrte_content_wrapper").innerHTML;
	}
    const date = new Date();
const unix =  pic_counter.toString() +  Math.round(+date / 1000);
	          if(window.getSelection){
	           selectedText = window.getSelection();
	            if(selectedText.anchorNode == null){
	            	let selectionNull = true;
	            } else{
     parentElementId =  window.getSelection().anchorNode.parentElement.id;
     parentElementTagName =  window.getSelection().anchorNode.parentElement.tagName;
     parentInnerHTML = window.getSelection().anchorNode.parentElement.innerHTML;
		}
			}else if (document.getSelection) {
			selectedText = document.getSelection();
	            if(selectedText.anchorNode == null){
	            	let selectionNull = true;
	            }  else{
        parentElementId =  document.getSelection().anchorNode.parentElement.id;
        parentElementTagName =  document.getSelection().anchorNode.parentElement.tagName;
        parentInnerHTML = document.getSelection().anchorNode.parentElement.innerHTML;
		}
			}else if (document.selection){
			selectedText = document.selection();
	            if(selectedText.anchorNode == null){
	            	let selectionNull = true;
	            } else{ 
        parentElementId =  document.selection().anchorNode.parentElement.id;
        parentElementTagName =  document.selection().anchorNode.parentElement.tagName;
        parentInnerHTML = document.getSelection().anchorNode.parentElement.innerHTML;
		}
	}
   if((parentElementId != undefined) && (parentElementId.indexOf(pic_counter)!= -1)){
let selectedTextString = selectedText.toString();
let selectedTextOuterHTML = selectedText.innerHTML;
let existingSegment = selectedTextString;
  let regExp = new RegExp(' ', 'g');
	            if (window.getSelection){
	           range = window.getSelection().getRangeAt(0);    
			}else if (document.getSelection) {
			range = document.getSelection().getRangeAt(0);
			}else if (document.selection){
			range = document.selection().getRangeAt(0);
			}
    if(selectedText == ''){
			let sel = window.getSelection();
          if (sel.getRangeAt && sel.rangeCount) {
           range = sel.getRangeAt(0);
            range.deleteContents();
           let el = document.createElement("div");
            el.innerHTML = '';
            el.id = unix;
            el.className = "inserted_div";
            el.style = styleToAdd + ":" + newValue + ";";
            el.tabindex = "1";
            el.addEventListener("click", {stopPropagation: true});
      //      let input_field_element = document.getElementById(pic_counter + "estrte_input_field");
            let docFrag = document.createDocumentFragment();
         //   docFrag = input_field_element.createDocumentFragment();
           let node = el;
             let lastNode = docFrag.appendChild(node);
            range.insertNode(docFrag);
            range = range.cloneRange();
              range.setStartAfter(lastNode);
              range.collapse(true);
              sel.removeAllRanges();
              sel.addRange(range);
document.getElementById(pic_counter + "estrte_input_field").contentEditable = false;
  let inserted_divs = document.getElementById(pic_counter + "estrte_input_field").getElementsByClassName("inserted_div");
         let inserted_divsLength = inserted_divs.length;
        for(let i = 0; i < inserted_divsLength; i++){
           inserted_divs[i].contentEditable = false;
        inserted_divs[i].addEventListener("click", function(){inserted_divs[i].contentEditable = true});
        }
        document.getElementById(pic_counter + "estrte_input_field").addEventListener("click", function(){document.getElementById(pic_counter + "estrte_input_field").contentEditable = true});
document.getElementById(unix).contentEditable = true;
let elementToFocus = document.getElementById(unix);
setTimeout(function(){elementToFocus.focus();}, 200);
            style_added = true;
          }else{
          }
			}else{
   let newNode = document.createElement('div');
                   newNode.setAttribute("class", "inserted_div");
                   newNode.setAttribute("id", unix);
                   newNode.setAttribute("style", styleToAdd + ":" + newValue + ";");
                   newNode.appendChild(range.extractContents()); 
                   range.insertNode(newNode);         
                    
    	let segmentToEdit = document.getElementById(unix).innerHTML;
        let regExp = new RegExp(styleToAdd, 'g');
    let newSegmentToEdit = segmentToEdit.replace(regExp, 'styleToAdd');  
     regExp = new RegExp(/styleToAdd\:[a-zA_Z0-9]*\;/, 'g');
     newSegmentToEdit = newSegmentToEdit.replace(regExp, '');  
     regExp = new RegExp(/style=""/, 'g');
     newSegmentToEdit = newSegmentToEdit.replace(regExp, '');  
	 document.getElementById(unix).innerHTML = newSegmentToEdit;
	}
	newInputText = document.getElementById(pic_counter + "estrte_content_wrapper").innerHTML;
new_log = {"pre_edit": origInputText, "post_edit": newInputText, "type_of_edit": "Edit"}; 
	estrte_fragments_log.unshift(new_log);
	console.log(estrte_fragments_log);
           document.getElementById(pic_counter + "estrte_content").value = estrte_sanitise_input_content(document.getElementById(pic_counter + "estrte_content_wrapper").innerHTML, pic_counter);
			document.getElementById(pic_counter + "estrte_fontsSelect").value = "";
			document.getElementById(pic_counter + "estrte_fontSizeSelect").value = "";
 	document.getElementById(pic_counter + "estrte_undo").style.display = "inline-block";
 	document.getElementById(pic_counter + "estrte_undo").innerHTML = "Undo";
	
	        if (window.getSelection){
	            range = window.getSelection().removeAllRanges();   	
			}else if (document.getSelection) {
				range = document.getSelection().removeAllRanges();
			}else if (document.selection){
				range = document.selection().removeAllRanges();
			}
		let number_of_edits = estrte_fragments_log.length;
   }else{
  document.getElementById(pic_counter + "estrte_input_field").contentEditable = true;
  document.getElementById(pic_counter + "estrte_input_field").focus();
   }
 }
function estrte_format(pic_counter, styleToAdd){
estrte_remove_placeholder();
    estrte_color_editing = false;
  let existingHTML;
  let estrte_prevDelete = 'no';
  let selectedText;
  let origInputText;
  let newInputText;
  let range;
  let parentInnerHTML;
  let parentOuterHTML;
  let newValue;
  let parentElementTagName;
  let parentElementId;
  let anchorNode;
  let parentStyle;
  	estrte_prevAdd = 'no';
    document.getElementById(pic_counter + 'estrte_docFrag').innerHTML = "";
    window.styleToAdd = styleToAdd;
	window.newValue = "";
	if(estrte_fragments_log.length > 0){
       origInputText = estrte_fragments_log[0].post_edit;
	}else{
       origInputText = document.getElementById(pic_counter + "estrte_content_wrapper").innerHTML;
	}
                    const date = new Date();
const unix =  pic_counter.toString() +  Math.round(+date / 1000);
	        if (window.getSelection){
	           selectedText = window.getSelection();
	            if(selectedText.anchorNode == null){
	            	let selectionNull = true;
	            } else{
	 anchorNode = window.getSelection().anchorNode.parentElement;
     parentElementId = window.getSelection().anchorNode.parentElement.id;
     parentElementTagName =  window.getSelection().anchorNode.parentElement.tagName;
     parentInnerHTML = window.getSelection().anchorNode.parentElement.innerHTML;
     parentOuterHTML = window.getSelection().anchorNode.parentElement.outerHTML;
     parentStyle = window.getSelection().anchorNode.parentElement.style;
		}
			}else if (document.getSelection) {
				selectedText = document.getSelection();
	            if(selectedText.anchorNode == null){
	            	let selectionNull = true;
	            }  else{
	    anchorNode = document.getSelection().anchorNode.parentElement;
        parentElementId =  document.getSelection().anchorNode.parentElement.id;
       parentElementTagName =  document.getSelection().anchorNode.parentElement.tagName;
        parentInnerHTML = document.getSelection().anchorNode.parentElement.innerHTML;
     parentOuterHTML = document.getSelection().anchorNode.parentElement.outerHTML;
     parentStyle = document.getSelection().anchorNode.parentElement.style;
		}
			}else if (document.selection){
				selectedText = document.selection();
	            if(selectedText.anchorNode == null){
	            	let selectionNull = true;
	            } else{
	    anchorNode = document.selection().anchorNode.parentElement;
        parentElementId =  document.selection().anchorNode.parentElement.id;
        parentElementTagName =  document.selection().anchorNode.parentElement.tagName;
        parentInnerHTML = document.selection().anchorNode.parentElement.innerHTML;
     parentOuterHTML = document.selection().anchorNode.parentElement.outerHTML;
     parentStyle = document.selection().anchorNode.parentElement.style;
		}
	}
   if((parentElementId != undefined) && (parentElementId.indexOf(pic_counter)!= -1)){
let selectedTextString = selectedText.toString();
let selectedTextOuterHTML = selectedText.outerHTML;
let existingSegment = selectedTextString;
  let regExp = new RegExp(' ', 'g');
	            if (window.getSelection){
	            range = window.getSelection().getRangeAt(0);    
			}else if (document.getSelection) {
				range = document.getSelection().getRangeAt(0);
			}else if (document.selection){
				range = document.selection().getRangeAt(0);
			}
			let existingFormat = 'style="' + styleToAdd +':' + newValue + ';"';
				if(parentOuterHTML.indexOf(existingFormat) != -1){
				}
			if(selectedText == ''){
document.getElementById(pic_counter + "estrte_input_field").contentEditable = false;
  let inserted_divs = document.getElementById(pic_counter + "estrte_input_field").getElementsByClassName("inserted_div");
         let inserted_divsLength = inserted_divs.length;
        for (let i = 0; i < inserted_divsLength; i++){
        	inserted_divs[i].contentEditable = false;
        	inserted_divs[i].addEventListener("click", function(){inserted_divs[i].contentEditable = true});
        	inserted_divs[i].addEventListener("mousedown", function(){inserted_divs[i].contentEditable = true});
        	inserted_divs[i].addEventListener("touchstart", function(){inserted_divs[i].contentEditable = true});
        }
document.getElementById(pic_counter + "estrte_input_field").addEventListener("click", function(){document.getElementById(pic_counter + "estrte_input_field").contentEditable = true});
document.getElementById(pic_counter + "estrte_input_field").addEventListener("mousedown", function(){document.getElementById(pic_counter + "estrte_input_field").contentEditable = true});
document.getElementById(pic_counter + "estrte_input_field").addEventListener("touchstart", function(){document.getElementById(pic_counter + "estrte_input_field").contentEditable = true});
        let already = false;
			let sel = window.getSelection();
            	let initialFocus = unix;
          if(sel.getRangeAt && sel.rangeCount) {
            if(parentElementTagName.toLowerCase() != styleToAdd){
          let thisResult = ancestor(document.getElementById(parentElementId), styleToAdd);
        		if(thisResult == null){
				            range = sel.getRangeAt(0);
            range.deleteContents();
           let el = document.createElement(styleToAdd);
            el.innerHTML = '';
            el.id = unix;
            el.className = "inserted_div";
            el.addEventListener("click", {stopPropagation: true});
            el.addEventListener("mousedown", {stopPropagation: true});
            el.addEventListener("touchstart", {stopPropagation: true});
            let docFrag = document.createDocumentFragment();
           let node = el;
             let lastNode = docFrag.appendChild(node);
            range.insertNode(docFrag);
              range = range.cloneRange();
              range.setStartAfter(lastNode);
              range.collapse(true);
              sel.removeAllRanges();
document.getElementById(pic_counter + "format" + styleToAdd).style.fontWeight = "bold";
			}else{
				let thisNextElementChild = thisResult;
				let thisFirstElementChildTagName = thisResult.firstElementChild.tagName;
				let thisFirstElementChildStyle = thisResult.firstElementChild.style.cssText;
		            range = sel.getRangeAt(0);
            range.deleteContents();
           let el = document.createElement(thisFirstElementChildTagName);
            el.innerHTML = '';
            el.id = unix;
            el.style = thisFirstElementChildStyle;
            el.className = "inserted_div";
            el.addEventListener("click", {stopPropagation: true});
            el.addEventListener("mousedown", {stopPropagation: true});
            el.addEventListener("touchstart", {stopPropagation: true});
            let docFrag = document.createDocumentFragment();
           let node = el;
             let lastNode = docFrag.appendChild(node);
    insertAfter(node, document.getElementById(thisResult.id));
            let childCounter = 1;
            do{
            let firstElementChildTagName = thisNextElementChild.firstElementChild.tagName;
            let firstElementChildStyle = thisNextElementChild.firstElementChild.style.cssText;
            thisNextElementChild = thisNextElementChild.firstElementChild;
           let childEl = document.createElement(firstElementChildTagName);
            childEl.innerHTML = '';
            childEl.id = unix + childCounter.toString();
            initialFocus = unix + childCounter.toString();
            childEl.style = firstElementChildStyle;
            childEl.className = "inserted_div";
            let docFrag = document.createDocumentFragment();
           let childNode = childEl;
              lastNode = docFrag.appendChild(childNode);
       //       document.getElementById(pic_counter + unix + childCounter - 1).appendChild(childNode);
       if(document.getElementById(unix + (childCounter - 1).toString()) != null){
              document.getElementById(unix + (childCounter - 1).toString()).appendChild(childNode);
						}
			//  thisNextElementChild = thisNextElementChild.firstElementChild;
              childCounter ++;
            }
            while(thisNextElementChild.firstElementChild != null);
              range = range.cloneRange();
              range.setStartAfter(lastNode);
              range.collapse(true);
              sel.removeAllRanges();
document.getElementById(pic_counter + "format" + styleToAdd). style.fontWeight ="normal";
              }
			}else{
		let thisResult = document.getElementById(parentElementId);
           let el = document.createElement("div");
            el.innerHTML = '';
            el.id = unix;
            el.className = "inserted_div";
            let docFrag = document.createDocumentFragment();  
           let node = el;
             let lastNode = docFrag.appendChild(node);
    insertAfter(node, document.getElementById(parentElementId));
              let childCounter = 1;
            while(thisResult.firstElementChild != null){
            let thisFirstElementChild = thisResult.firstElementChild;
            let firstElementChildTagName = thisFirstElementChild.firstElementChild.tagName;
            let firstElementChildStyle = thisFirstElementChild.firstElementChild.style.cssText;
            thisFirstElementChild = thisFirstElementChild.firstElementChild;
           let childEl = document.createElement(firstElementChildTagName);
            childEl.innerHTML = '';
            childEl.id = unix + childCounter;
            if(childEl.id != null){
            let initialFocus = childEl.id;
					}
            childEl.style = firstElementChildStyle;
            childEl.className = "inserted_div";
            let docFrag = document.createDocumentFragment();
           let childNode = childEl;
              lastNode = docFrag.appendChild(childNode);
              document.getElementById(pic_counter + unix + childCounter - 1).appendChild(childNode);
              childCounter ++;
            }
document.getElementById(pic_counter + "format" + styleToAdd).style.fontWeight = "normal";
			}
		}
            sel.addRange(range);
            style_added = true;
            if(document.getElementById(initialFocus) != null){
document.getElementById(initialFocus).contentEditable = true;
setTimeout(function(){document.getElementById(initialFocus).focus();}, 200);
		}else{
document.getElementById(unix).contentEditable = true;
setTimeout(function(){document.getElementById(unix).focus();}, 200);
		}
    }else{
	if(parentElementTagName.toLowerCase() != styleToAdd.toLowerCase()){
   let newNode = document.createElement(styleToAdd);
                   newNode.setAttribute("class", "inserted_div");
                   newNode.setAttribute("id", unix);
                   newNode.appendChild(range.extractContents()); 
                   range.insertNode(newNode);         
    newInputText = document.getElementById(pic_counter + "estrte_content_wrapper").innerHTML; 
    	let segmentToEdit = document.getElementById(unix).innerHTML;
        let regExp = new RegExp(styleToAdd, 'g');
    let newSegmentToEdit = segmentToEdit.replace(regExp, 'styleToAdd');  
     regExp = new RegExp(/styleToAdd\:[a-zA_Z0-9]*\;/, 'g');
     newSegmentToEdit = newSegmentToEdit.replace(regExp, '');  
     regExp = new RegExp(/style=""/, 'g');
     newSegmentToEdit = newSegmentToEdit.replace(regExp, '');  
	 document.getElementById(unix).innerHTML = newSegmentToEdit;
			document.getElementById(pic_counter + "estrte_fontsSelect").value = "";
			document.getElementById(pic_counter + "estrte_fontSizeSelect").value = "";
	newInputText = document.getElementById(pic_counter + "estrte_content_wrapper").innerHTML; 
		}else{
		let toReplace = parentOuterHTML;
		let replaceWith = document.getElementById(parentElementId).innerHTML;
		newInputText = document.getElementById(pic_counter + "estrte_content_wrapper").innerHTML.replace(toReplace, replaceWith);
		}
	}
	newInputText = document.getElementById(pic_counter + "estrte_content_wrapper").innerHTML;
           document.getElementById(pic_counter + "estrte_content").value = estrte_sanitise_input_content(newInputText, pic_counter); 
new_log = {"pre_edit": origInputText, "post_edit": newInputText, "type_of_edit": "Edit"}; 
	estrte_fragments_log.unshift(new_log);
	console.log(estrte_fragments_log);
 	document.getElementById(pic_counter + "estrte_undo").style.display = "inline-block";
 	document.getElementById(pic_counter + "estrte_undo").innerHTML = "Undo";
	
	        if (window.getSelection){
	            range = window.getSelection().removeAllRanges();   	
			}else if (document.getSelection) {
				range = document.getSelection().removeAllRanges();
			}else if (document.selection){
				range = document.selection().removeAllRanges();
			}
			
		let number_of_edits = estrte_fragments_log.length;
			
		existingHTML = document.getElementById(pic_counter + "estrte_input_field").innerHTML;
   }else{
  document.getElementById(pic_counter + "estrte_input_field").focus();
   }
 }
 
function estrte_setColor(pic_counter, todo){
  let estrte_prevDelete = 'no';
  let estrte_prevAdd = 'no';
  let selectedText;
  let origInputText;
  let newInputText;
  let newDivColor;
  let parentElementId;
  let parentElementTagName;
  let parentInnerHTML;
  let range;
  let unix;
  let newColor;
  let red;
  let green;
  let blue;
  let inserted_divs = [];
  let inserted_divsLength = [];
  let elementsArray = [];
  let newRangecont;
 	red = document.getElementById(pic_counter + "redComp").value;
 	green = document.getElementById(pic_counter + "greenComp").value;
 	blue = document.getElementById(pic_counter + "blueComp").value;
     if(estrte_action == "set_background"){
     	estrte_setBackgroundColor();
     }else{
  	if(todo == 'shade'){
  		let tempRed;
  		let tempGreen;
  		let tempBlue;
    if(document.getElementById(pic_counter + "tempRed").value != 'u'){
    	tempRed = document.getElementById(pic_counter + "tempRed").value;
    }else{
    	tempRed = document.getElementById(pic_counter + "redComp").value;
    }
    if(document.getElementById(pic_counter + "tempGreen").value != 'u'){
    tempGreen = document.getElementById(pic_counter + "tempGreen").value;
    }else{
    	tempGreen = document.getElementById(pic_counter + "greenComp").value;
    }
    if(document.getElementById(pic_counter + "tempBlue").value != 'u'){
    	tempBlue = document.getElementById(pic_counter + "tempBlue").value;
    }else{
    	tempBlue = document.getElementById(pic_counter + "blueComp").value;
    }
 		console.log(tempRed + " - " + tempGreen + " - " + tempBlue);
      let shade = document.getElementById(pic_counter + "shadeComp").value / 50;
  	document.getElementById(pic_counter + "tempRed").value = tempRed;
 	document.getElementById(pic_counter + "tempGreen").value = tempGreen;
 	document.getElementById(pic_counter + "tempBlue").value = tempBlue;
 	if(shade <= 1){
red = tempRed * shade;
green = tempGreen * shade;
blue = tempBlue * shade; 
	}else{
red = 255 -((225 - tempRed) * (2 - shade));
green = 255 -((225 - tempGreen) * (2 - shade));
blue = 255 -((225 - tempBlue) * (2 - shade)); 
 		}
 		console.log(shade + " - " + tempRed + " - " + tempGreen + " - " + tempBlue);
  	}else{
    document.getElementById(pic_counter + "tempRed").value = "u";
 	document.getElementById(pic_counter + "tempGreen").value = "u";
 	document.getElementById(pic_counter + "tempBlue").value = "u";
  	}
 	document.getElementById(pic_counter + "redComp").value = red;
 	document.getElementById(pic_counter + "greenComp").value = green;
 	document.getElementById(pic_counter + "blueComp").value = blue;
 	newColor = "rgb(" + red + ", " + green + ", " + blue + ")";
 	document.getElementById(pic_counter + "estrte_color_monitor").style.backgroundColor = newColor;
     
    document.getElementById(pic_counter + 'estrte_docFrag').innerHTML = "";
	if(estrte_fragments_log.length > 0){
       origInputText = estrte_fragments_log[0].post_edit;
	}else{
       origInputText = document.getElementById(pic_counter + "estrte_content_wrapper").innerHTML;
	}
                    let date = new Date();
unix =  pic_counter.toString() + Math.round(+date / 1000) + Math.floor(Math.random() * 1000);
if(estrte_colorSelected == 'no'){
	        if (window.getSelection){
	            selectedText = window.getSelection();
	            if(selectedText.anchorNode == null){
	            	let selectionNull = true;
	            } else{
     parentElementId =  window.getSelection().anchorNode.parentElement.id;
     parentElementTagName =  window.getSelection().anchorNode.parentElement.tagName;
     parentInnerHTML = window.getSelection().anchorNode.parentElement.innerHTML;
		}
			}else if (document.getSelection) {
				selectedText = document.getSelection();
	            if(selectedText.anchorNode == null){
	            	let selectionNull = true;
	            }else{
        parentElementId =  document.getSelection().anchorNode.parentElement.id;
        parentElementTagName =  document.getSelection().anchorNode.parentElement.tagName;
        parentInnerHTML = document.getSelection().anchorNode.parentElement.innerHTML;
		}
			}else if (document.selection){
				selectedText = document.selection();
	            if(selectedText.anchorNode == null){
	            	let selectionNull = true;
	            } else{ 
        parentElementId =  document.selection().anchorNode.parentElement.id;
        parentElementTagName =  document.selection().anchorNode.parentElement.tagName;
        parentInnerHTML = document.selection().anchorNode.parentElement.innerHTML;
		}
	}
let selectedTextString = selectedText.toString();
let selectedTextOuterHTML = selectedText.innerHTML;
let existingSegment = selectedTextString;
  let regExp = new RegExp(' ', 'g');
			
			if(selectedText == ''){
document.getElementById(pic_counter + "estrte_input_field").contentEditable = false;
  inserted_divs = document.getElementById(pic_counter + "estrte_input_field").getElementsByClassName("inserted_div");
         inserted_divsLength = inserted_divs.length;
        for (let i = 0; i < inserted_divsLength; i++){
        	inserted_divs[i].contentEditable = false;
        	inserted_divs[i].addEventListener("click", function(){inserted_divs[i].contentEditable = true});
        	inserted_divs[i].addEventListener("mousedown", function(){inserted_divs[i].contentEditable = true});
        	inserted_divs[i].addEventListener("touchstart", function(){inserted_divs[i].contentEditable = true});
        }
document.getElementById(pic_counter + "estrte_input_field").addEventListener("click", function(){document.getElementById(pic_counter + "estrte_input_field").contentEditable = true});
				if(estrte_color_editing){
				document.getElementById(estrte_color_editing).style.color = newColor;
				}else{
			let sel = window.getSelection();
          if (sel.getRangeAt && sel.rangeCount) {
document.getElementById(pic_counter + "estrte_input_field").contentEditable = false;
  inserted_divs = document.getElementById(pic_counter + "estrte_input_field").getElementsByClassName("inserted_div");
         inserted_divsLength = inserted_divs.length;
        for (let i = 0; i < inserted_divsLength; i++){
        	inserted_divs[i].contentEditable = false;
        	inserted_divs[i].addEventListener("click", function(){inserted_divs[i].contentEditable = true});
        	inserted_divs[i].addEventListener("mousedown", function(){inserted_divs[i].contentEditable = true});
        	inserted_divs[i].addEventListener("touchstart", function(){inserted_divs[i].contentEditable = true});
        }
   if((parentElementId == undefined) || (parentElementId.indexOf(pic_counter) == -1)){
  inserted_divs = document.getElementById(pic_counter + "estrte_input_field").getElementsByClassName("inserted_div");
         inserted_divsLength = inserted_divs.length;
        newRangecont = elementsArray[elementsArray.length - 1];
          elementsArray = [pic_counter + "estrte_input_field"];
        for(let i = 0; i < inserted_divsLength; i++){
            elementsArray.push(inserted_divs[i].id);
					}
         range = document.createRange();
        range.setStart(document.getElementById(elementsArray[elementsArray.length - 1]), document.getElementById(elementsArray[elementsArray.length - 1]).length - 1);
			}else{
            range = sel.getRangeAt(0);
            }
            range.deleteContents();
           let el = document.createElement("div");
            el.innerHTML = '';
            el.innerHTML = '<span class="est_placeholder">-</span>';
            el.id = unix;
            el.className = "inserted_div";
            el.style = "color:" + newColor + ";";
            el.tabindex = "1";
            el.addEventListener("click", {stopPropagation: true});
            el.addEventListener("mousedown", {stopPropagation: true});
            el.addEventListener("touchstart", {stopPropagation: true});
            let docFrag = document.createDocumentFragment();
            let node = el;
             let lastNode = docFrag.appendChild(node);
            range.insertNode(docFrag);
              range = range.cloneRange();
              range.setStartAfter(lastNode);
              range.collapse(true);
              sel.removeAllRanges();
              sel.addRange(range);
document.getElementById(unix).addEventListener("keydown", estrte_remove_placeholder, true);
document.getElementById(unix).addEventListener("touchstart", estrte_remove_placeholder, true);
document.getElementById(pic_counter + "estrte_input_field").addEventListener("click", function(){document.getElementById(pic_counter + "estrte_input_field").contentEditable = true});
document.getElementById(pic_counter + "estrte_input_field").addEventListener("mousedown", function(){document.getElementById(pic_counter + "estrte_input_field").contentEditable = true});
document.getElementById(pic_counter + "estrte_input_field").addEventListener("touchstart", function(){document.getElementById(pic_counter + "estrte_input_field").contentEditable = true});
            style_added = true;
}
				}
  inserted_divs = document.getElementById(pic_counter + "estrte_input_field").getElementsByClassName("inserted_div");
    inserted_divsLength = inserted_divs.length;
        elementsArray = [pic_counter + "estrte_input_field"];
        for(let i = 0; i < inserted_divsLength; i++){
            elementsArray.push(inserted_divs[i].id);
					}
    estrte_to_focus = elementsArray[elementsArray.length - 1];
document.getElementById(estrte_to_focus).contentEditable = true;
setTimeout(function(){
document.getElementById(estrte_to_focus).focus();
estrte_color_editing = estrte_to_focus;}, 200);
			}else{ // if text is selected
	            if (window.getSelection){
	            range = window.getSelection().getRangeAt(0);    	
			}else if (document.getSelection) {
				range = document.getSelection().getRangeAt(0);
			}else if (document.selection){
				range = document.selection().getRangeAt(0);
			}
	
   let newNode = document.createElement('div');
                    newNode.setAttribute("class", "inserted_div");
                    newNode.setAttribute("id", unix);
                    newNode.setAttribute("style", "color:" + newColor + ";");
                   newNode.appendChild(range.extractContents()); 
                   range.insertNode(newNode);         
                   
    newInputText = document.getElementById(pic_counter + "estrte_content_wrapper").innerHTML; 
    	let segmentToEdit = document.getElementById(unix).innerHTML;
        let regExp = new RegExp(/rgb\((\d{1,3})\, (\d{1,3})\, (\d{1,3})\)/, 'g');
    let newSegmentToEdit = segmentToEdit.replace(regExp, '');  
     regExp = new RegExp(/color\:\;/, 'g');
     newSegmentToEdit = newSegmentToEdit.replace(regExp, '');  
     regExp = new RegExp(/style=""/, 'g');
     newSegmentToEdit = newSegmentToEdit.replace(regExp, '');  
	 document.getElementById(unix).innerHTML = newSegmentToEdit;
   }
	newInputText = document.getElementById(pic_counter + "estrte_content_wrapper").innerHTML;
           document.getElementById(pic_counter + "estrte_content").value = estrte_sanitise_input_content(newInputText, pic_counter);
new_log = {"pre_edit": origInputText, "post_edit": newInputText, "type_of_edit": "Edit"}; 
	estrte_fragments_log.unshift(new_log);
	console.log(estrte_fragments_log);
 	document.getElementById(pic_counter + "estrte_undo").style.display = "inline-block";
 	document.getElementById(pic_counter + "estrte_undo").innerHTML = "Undo";
	let pre_edit_value = estrte_fragments_log[0].pre_edit;
	let post_edit_value = estrte_fragments_log[0].post_edit;
	
	        if (window.getSelection){
	            range = window.getSelection().removeAllRanges();
			}else if (document.getSelection) {
				range = document.getSelection().removeAllRanges();
			}else if (document.selection){
				range = document.selection().removeAllRanges();
			}
			
		let number_of_edits = estrte_fragments_log.length;
			
		let existingHTML = document.getElementById(pic_counter + "estrte_content_wrapper").innerHTML;
			document.getElementById(pic_counter + "estrte_fontsSelect").value = "";
			document.getElementById(pic_counter + "estrte_fontSizeSelect").value = "";
		   let newDivColor = newSoFar;
	}else{ 
    let regExp = new RegExp(/rgb\((\d{1,3})\, (\d{1,3})\, (\d{1,3})\)/, 'g');
    let newEditedDivColor = newDivColor.replace(regExp, newColor);  	
    let newNewInputText = newInputText.replace(newDivColor, newEditedDivColor); 
           document.getElementById(pic_counter + "estrte_content_wrapper").innerHTML = newInputText;
           document.getElementById(pic_counter + "estrte_content").value = estrte_sanitise_input_content(document.getElementById(pic_counter + "estrte_content_wrapper").innerHTML, pic_counter);
	estrte_fragments_log[0].post_edit = newEditedDivColor;
}  
}
}
 function estrte_add_paragraph(pic_counter){
  let selectedText;
  let origInputText;
  let newInputText;
  let newDivColor;
  let existingHTML;
  let parentElementId;
  let parentElementTagName;
  let parentInnerHTML;
  let parentOuterHTML;
  let selectionNull;
  let inserted_elements;
  let first_layer_inserted_elements;
  let range;
  let inserted_divs
  let docFrag;
    estrte_color_editing = false;
    let insertAfterElement;
 	    document.getElementById(pic_counter + 'estrte_docFrag').innerHTML = "";
	if(estrte_fragments_log.length > 0){
       origInputText = estrte_fragments_log[0].post_edit;
	}else{
       origInputText = document.getElementById(pic_counter + "estrte_content_wrapper").innerHTML;
	}
                    const date = new Date();
const unix =  pic_counter.toString() +  Math.round(+date / 1000);
	        if (window.getSelection){
	            selectedText = window.getSelection();  
	            if(selectedText.anchorNode == null){
	            	let selectionNull = true;
	            } else{
     parentElementId =  window.getSelection().anchorNode.parentElement.id;
     parentElementTagName =  window.getSelection().anchorNode.parentElement.tagName;
     parentInnerHTML = window.getSelection().anchorNode.parentElement.innerHTML;
     parentOuterHTML = window.getSelection().anchorNode.parentElement.outerHTML;
		}
			}else if (document.getSelection) {
				selectedText = document.getSelection();
	            if(selectedText.anchorNode == null){
	            	selectionNull = true;
	            }  else{
        parentElementId =  document.getSelection().anchorNode.parentElement.id;
        parentElementTagName =  document.getSelection().anchorNode.parentElement.tagName;
        parentInnerHTML = document.getSelection().anchorNode.parentElement.innerHTML;
     parentOuterHTML = document.getSelection().anchorNode.parentElement.outerHTML;
		}
			}else if (document.selection){
				selectedText = document.selection();
	            if(selectedText.anchorNode == null){
	            	selectionNull = true;
	            } else{ 
        parentElementId =  document.selection().anchorNode.parentElement.id;
        parentElementTagName =  document.selection().anchorNode.parentElement.tagName;
        parentInnerHTML = document.selection().anchorNode.parentElement.innerHTML;
        parentOuterHTML = document.selection().anchorNode.parentElement.outerHTML;
		}
	}
  if(parentElementId.indexOf(pic_counter)!= -1){
let selectedTextString = selectedText.toString();
let selectedTextOuterHTML = selectedText.outerHTML;
let existingSegment = selectedTextString;
  let regExp = new RegExp(' ', 'g');
	            if (window.getSelection){
	            range = window.getSelection().getRangeAt(0);    
			}else if (document.getSelection) {
				range = document.getSelection().getRangeAt(0);
			}else if (document.selection){
				range = document.selection().getRangeAt(0);
			}
			if(selectedText == ''){
			let sel = window.getSelection();
          if (sel.getRangeAt && sel.rangeCount) {
            range = sel.getRangeAt(0);
            range.deleteContents();
document.getElementById(pic_counter + "estrte_input_field").contentEditable = false;
   inserted_divs = document.getElementById(pic_counter + "estrte_input_field").getElementsByClassName("inserted_div");
          let inserted_divsLength = inserted_divs.length;
        for (let i = 0; i < inserted_divsLength; i++){
        	inserted_divs[i].contentEditable = false;
            inserted_divs[i].addEventListener("click", function(){inserted_divs[i].contentEditable = true});
        }  
      document.getElementById(pic_counter + "estrte_input_field").addEventListener("click", function(){document.getElementById(pic_counter + "estrte_input_field").contentEditable = true});  
         
         inserted_elements = document.getElementById(pic_counter + "estrte_input_field").getElementsByClassName("inserted_div");
         first_layer_inserted_elements = new Array();
            for(let i=0; i < inserted_elements.length; i++){
         		first_layer_inserted_elements.unshift(inserted_elements[i]);
         		if(inserted_elements[i].parentElement.id == pic_counter + "estrte_input_field"){
         			insertAfterElement = inserted_elements[i];
         		}
         }
            let el = document.createElement("p");
            el.id = unix;
            el.className = "inserted_div";
            el.addEventListener("click", {stopPropagation: true});
            el.innerHTML = '<span class="est_placeholder">-</span>';
            el.innerHTML = '';
            docFrag = document.createDocumentFragment();
            let node = el;
             let lastNode = docFrag.appendChild(node);
        if(first_layer_inserted_elements.length > 0){
    insertAfter(node, insertAfterElement);
			}else{
        
            range.insertNode(docFrag);
			}
document.getElementById(unix).addEventListener("keydown", estrte_remove_placeholder, true);
document.getElementById(unix).addEventListener("touchstart", estrte_remove_placeholder, true);
document.getElementById(unix).contentEditable = true;
setTimeout(function(){document.getElementById(unix).focus();}, 200);
          }
          }else{
    let newNode = document.createElement('p');
                   newNode.setAttribute("id", unix);
                   newNode.appendChild(range.extractContents()); 
                   range.insertNode(newNode);
                   
    let newInputText = document.getElementById(pic_counter + "estrte_content_wrapper").innerHTML; 
    	let segmentToEdit = document.getElementById(unix).innerHTML;
			document.getElementById(pic_counter + "estrte_fontsSelect").value = "";
			document.getElementById(pic_counter + "estrte_fontSizeSelect").value = "";
	newInputText = document.getElementById(pic_counter + "estrte_content_wrapper").innerHTML;
//document.getElementById(pic_counter + "estrte_content_wrapper").innerHTML = newInputText;
           document.getElementById(pic_counter + "estrte_content").value = estrte_sanitise_input_content(newInputText, pic_counter); 
new_log = {"pre_edit": origInputText, "post_edit": newInputText, "type_of_edit": "Edit"}; 
	estrte_fragments_log.unshift(new_log);
 	document.getElementById(pic_counter + "estrte_undo").style.display = "inline-block";
 	document.getElementById(pic_counter + "estrte_undo").innerHTML = "Undo";
	let pre_edit_value = estrte_fragments_log[0].pre_edit;
	let post_edit_value = estrte_fragments_log[0].post_edit;
	}
	
	        if (window.getSelection){
	            range = window.getSelection().removeAllRanges();   	
			}else if (document.getSelection) {
				range = document.getSelection().removeAllRanges();
			}else if (document.selection){
				range = document.selection().removeAllRanges();
			}
			
		let number_of_edits = estrte_fragments_log.length;
			
		existingHTML = document.getElementById(pic_counter + "estrte_input_field").innerHTML;
			}else{
  document.getElementById(pic_counter + "estrte_input_field").focus();
   }
}
 
function estrte_undo(pic_counter){
    estrte_color_editing = false;
	let editFrom = estrte_fragments_log[0].post_edit;
	let editTo = estrte_fragments_log[0].pre_edit;
           document.getElementById(pic_counter + "estrte_content_wrapper").innerHTML = editTo;
           document.getElementById(pic_counter + "estrte_content").value = estrte_sanitise_input_content(document.getElementById(pic_counter + "estrte_content_wrapper").innerHTML, pic_counter);
 estrte_fragments_log.shift();
 if(estrte_fragments_log.length == 0){
 	document.getElementById(pic_counter + "estrte_undo").style.display = "none";
 }else{
document.getElementById(pic_counter + "estrte_undo").style.display = "inline-block";
document.getElementById(pic_counter + "estrte_undo").innerHTML = "Undo";
	}
let new_undo_log = {"pre_edit": editFrom, "post_edit": editTo, "type_of_edit": "Edit"}; 
	estrte_undo_log.unshift(new_undo_log);
	let redoLength = estrte_undo_log.length;
 if(estrte_undo_log.length == 0){
 	document.getElementById(pic_counter + "estrte_redo").style.display = "none";
 }else{
 	document.getElementById(pic_counter + "estrte_redo").innerHTML = "Redo ";
 	document.getElementById(pic_counter + "estrte_redo").style.display = "inline-block";
	}
}
function estrte_redo(pic_counter){
    estrte_color_editing = false;
	 let editTo = estrte_undo_log[0].post_edit;
	let editFrom = estrte_undo_log[0].pre_edit;
           document.getElementById(pic_counter + "estrte_content_wrapper").innerHTML = editFrom;
           document.getElementById(pic_counter + "estrte_content").value = estrte_sanitise_input_content(document.getElementById(pic_counter + "estrte_content_wrapper").innerHTML, pic_counter) 
 estrte_undo_log.shift();
 if(estrte_undo_log.length == 0){
 	document.getElementById(pic_counter + "estrte_redo").style.display = "none";
 }else{
 	document.getElementById(pic_counter + "estrte_redo").innerHTML = "Redo";
 	document.getElementById(pic_counter + "estrte_redo").style.display = "inline-block";
	}	
new_log = {"pre_edit": editTo, "post_edit": editFrom, "type_of_edit": "Edit"}; 
estrte_fragments_log.unshift(new_log);
 if(estrte_fragments_log.length == 0){
 	document.getElementById(pic_counter + "estrte_undo").style.display = "none";
 }else{ 
 	document.getElementById(pic_counter + "estrte_undo").style.display = "inline-block";
 	document.getElementById(pic_counter + "estrte_undo").innerHTML = "Undo";
	}
        document.getElementById(pic_counter + "estrte_input_field").addEventListener("click", document.getElementById(pic_counter + "estrte_input_field").focus());
			let existingHTML = document.getElementById(pic_counter + "estrte_content_wrapper").innerHTML;
	        let tempAfterDelete = document.getElementById(pic_counter + "estrte_content_wrapper").innerHTML;
}

function add_table(pic_counter){
  let selectedText;
  let origInputText;
  let newInputText;
  let newDivColor;
  let range;
    estrte_color_editing = false;
    let insertAfterElement = '';
	if(estrte_fragments_log.length > 0){
       origInputText = estrte_fragments_log[0].post_edit;
	}else{
       origInputText = document.getElementById(pic_counter + "estrte_content_wrapper").innerHTML;
	}
	
    const date = new Date();
let unix =  pic_counter.toString() +  Math.round(+date / 1000);
	let no_of_rows = parseInt(document.getElementById(pic_counter + "no_of_rows_select").value);
	let no_of_columns = parseInt(document.getElementById(pic_counter + "no_of_columns_select").value);
	let table_caption = document.getElementById(pic_counter + "table_caption").value;
	let table_headings = document.getElementById(pic_counter + "select_headers").value;
	let border = document.getElementById(pic_counter + "border_select").value;
	let cellspacing = document.getElementById(pic_counter + "cellspacing_select").value;
	let cellpadding = document.getElementById(pic_counter + "cellpadding_select").value;
	let rows_loop_start = 1;
	let first_row = "";
	let el;
    let table_html = '<table class="input_table" style="overflow-x:auto;border:' + border + ';cellspacing=' + cellspacing + ';cellpadding=' + cellpadding + ';"><tbody><div class="table_header" id="#placeholder#table_header' + unix + '">' + table_caption + '</div>';
	if((table_headings == "firstRow") || (table_headings == "both")){
		rows_loop_start++;
		table_html += '<tr>';
	for (let j = 1; j <= no_of_columns; j++) {
			table_html += '<th></th>';
		}
		table_html += '</tr>';
	}
	for (let i = rows_loop_start; i <= no_of_rows; i++) {
		table_html += '<tr>';
	for (let j = 1; j <= no_of_columns; j++) {
		if((j == 1) && ((table_headings == "firstColumn") || (table_headings == "both"))){
			table_html += '<th></th>';
		}else{
			table_html += '<td></td>';
		}
		}
		table_html += '</tr>';
	}
		table_html += '</tbody></table>';
document.getElementById(pic_counter + "estrte_input_field").contentEditable = false;
  let inserted_divs = document.getElementById(pic_counter + "estrte_input_field").getElementsByClassName("inserted_div");
         let inserted_divsLength = inserted_divs.length;
        for(let i = 0; i < inserted_divsLength; i++){
        inserted_divs[i].contentEditable = false;
        inserted_divs[i].addEventListener("click", function(){inserted_divs[i].contentEditable = true});
        }
    document.getElementById(pic_counter + "estrte_input_field").addEventListener("click", function(){document.getElementById(pic_counter + "estrte_input_field").contentEditable = true});
   let this_table_html = table_html;
while(this_table_html.indexOf('#placeholder#') != -1){
this_table_html = this_table_html.replace('#placeholder#', pic_counter);
}

   inserted_divs = document.getElementById(pic_counter + "estrte_input_field").getElementsByClassName("inserted_div");
   let first_layer_inserted_elements = new Array();
           inserted_divsLength = inserted_divs.length;
          if(inserted_divsLength == 0){
          	if(document.getElementById(pic_counter + "estrte_input_field").children.length > 0){
             insertAfterElement = document.getElementById(pic_counter + "estrte_input_field").firstChild;
          	}
          }else{
        for(let i = 0; i < inserted_divsLength; i++){
                  insertAfterElement = inserted_divs[i];
                  first_layer_inserted_elements.unshift(inserted_divs[i]);
        }  
        }

            el = document.createElement("div");
            el.innerHTML = this_table_html;
            el.id = unix;
            el.className = "inserted_div";
            el.addEventListener("click", {stopPropagation: true});
           let node = el;
            if(insertAfterElement == ''){
            document.getElementById(pic_counter + "estrte_input_field").appendChild(node);
            }else{
    insertAfter(node, insertAfterElement);
	}
    
	let cellWidth = getComputedStyle(document.getElementsByTagName("td")[0]).getPropertyValue('width');
	cellWidth = cellWidth.substring(0, cellWidth.indexOf("px"));
	document.getElementById(pic_counter + "table_header" + unix).style.width = (cellWidth * no_of_columns) + "px";

    inserted_divs = document.getElementById(pic_counter + "estrte_input_field").getElementsByClassName("inserted_div");
        first_layer_inserted_elements = new Array();
          inserted_divsLength = inserted_divs.length;
         			 insertAfterElement = inserted_divs[inserted_divsLength - 1];
         			 let styledElement = inserted_divs[inserted_divsLength - 2];

            el = document.createElement("div");
            el.id = unix + "b";
            el.className = "inserted_div";
            el.innerHTML = '<span class="est_placeholder">-</span>';
            el.addEventListener("click", {stopPropagation: true});
            if(styledElement){
			el.style = styledElement.style.cssText;
	}
            node = el;
    insertAfter(node, insertAfterElement);
document.getElementById(unix + "b").addEventListener("keydown", estrte_remove_placeholder, true);
document.getElementById(unix + "b").contentEditable = true;
setTimeout(function(){document.getElementById(unix + "b").focus();}, 200);

			document.getElementById(pic_counter + "estrte_fontsSelect").value = "";
			document.getElementById(pic_counter + "estrte_fontSizeSelect").value = "";
	newInputText = document.getElementById(pic_counter + "estrte_content_wrapper").innerHTML;
           document.getElementById(pic_counter + "estrte_content").value = estrte_sanitise_input_content(newInputText, pic_counter);
new_log = {"pre_edit": origInputText, "post_edit": newInputText, "type_of_edit": "Edit"}; 
	estrte_fragments_log.unshift(new_log);
 	document.getElementById(pic_counter + "estrte_undo").style.display = "inline-block";
 	document.getElementById(pic_counter + "estrte_undo").innerHTML = "Undo";
 	table_spec_active = false;
 	estrte_show_table_spec_div(pic_counter);
 	close_select_features_div(pic_counter);
}
function add_link(pic_counter){
  let selectedText;
  let origInputText;
  let newInputText;
  let newDivColor;
  let range;
  let styledElement
    estrte_color_editing = false;
    let insertAfterElement = '';
    let date = new Date();
let unix =  pic_counter.toString() +  Math.round(+date / 1000);
	if(estrte_fragments_log.length > 0){
       origInputText = estrte_fragments_log[0].post_edit;
	}else{
       origInputText = document.getElementById(pic_counter + "estrte_content_wrapper").innerHTML;
	}
	let link_text = document.getElementById(pic_counter + "link_text").value;
	let link_url = document.getElementById(pic_counter + "link_url").value;
let link_html = '<a href=' + link_url + '>' + link_text + '</a>';
    
    
document.getElementById(pic_counter + "estrte_input_field").contentEditable = false;
  let inserted_divs = document.getElementById(pic_counter + "estrte_input_field").getElementsByClassName("inserted_div");
         let inserted_divsLength = inserted_divs.length;
        for(let i = 0; i < inserted_divsLength; i++){
        inserted_divs[i].contentEditable = false;
        inserted_divs[i].addEventListener("click", function(){inserted_divs[i].contentEditable = true});
        }
    document.getElementById(pic_counter + "estrte_input_field").addEventListener("click", function(){document.getElementById(pic_counter + "estrte_input_field").contentEditable = true});
    
   inserted_divs = document.getElementById(pic_counter + "estrte_input_field").getElementsByClassName("inserted_div");
   let first_layer_inserted_elements = new Array();
         inserted_divsLength = inserted_divs.length;
          if(inserted_divsLength == 0){
          	if(document.getElementById(pic_counter + "estrte_input_field").children.length > 0){
             insertAfterElement = document.getElementById(pic_counter + "estrte_input_field").firstChild;
          	}
          }else{
        for(let i = 0; i < inserted_divsLength; i++){
                  insertAfterElement = inserted_divs[i];
                  first_layer_inserted_elements.unshift(inserted_divs[i]);
        }  
	}

           let el = document.createElement("div");
            el.innerHTML = link_html;
            el.id = unix;
            el.className = "inserted_div";
           let node = el;
            if(insertAfterElement == ''){
            document.getElementById(pic_counter + "estrte_input_field").appendChild(node);
            }else{
    insertAfter(node, insertAfterElement);
	}
    
   inserted_divs = document.getElementById(pic_counter + "estrte_input_field").getElementsByClassName("inserted_div");
      first_layer_inserted_elements = new Array();
          inserted_divsLength = inserted_divs.length;
         			 insertAfterElement = inserted_divs[inserted_divsLength - 1];
         			 styledElement = inserted_divs[inserted_divsLength - 2];

           el = document.createElement("div");
            el.id = unix + "c";
            el.className = "inserted_div";
            el.innerHTML = '<span class="est_placeholder">-</span>';
            el.addEventListener("click", {stopPropagation: true});
//document.getElementById(unix + "c").addEventListener("keydown", estrte_remove_placeholder, true);
            if(styledElement){
			el.style = styledElement.style.cssText;
	}
            node = el;
    insertAfter(node, insertAfterElement);
document.getElementById(unix + "c").contentEditable = true;
document.getElementById(unix + "c").addEventListener("keydown", estrte_remove_placeholder, true);
setTimeout(function(){document.getElementById(unix + "c").focus();}, 200);

			document.getElementById(pic_counter + "estrte_fontsSelect").value = "";
			document.getElementById(pic_counter + "estrte_fontSizeSelect").value = "";
	newInputText = document.getElementById(pic_counter + "estrte_content_wrapper").innerHTML;
           document.getElementById(pic_counter + "estrte_content").value = estrte_sanitise_input_content(newInputText, pic_counter);
new_log = {"pre_edit": origInputText, "post_edit": newInputText, "type_of_edit": "Edit"}; 
	estrte_fragments_log.unshift(new_log);
 	document.getElementById(pic_counter + "estrte_undo").style.display = "inline-block";
 	document.getElementById(pic_counter + "estrte_undo").innerHTML = "Undo";
 	link_spec_active = false;
 	estrte_show_select_link_div(pic_counter);
      close_select_features_div(pic_counter);
}
function  estrte_show_select_color_div(pic_counter){
	getCaretPosition(document.getElementById(pic_counter + "estrte_input_field"));
    estrte_color_editing = false;
var estrte_textColor = getComputedStyle(document.getElementById(pic_counter + "estrte_color_monitor")).getPropertyValue('--text-color');
var estrte_textColorArray = estrte_textColor.substring(estrte_textColor.indexOf('(') + 1, estrte_textColor.indexOf(')')).split(",");
let estrte_select_colour_div_html = '<div class="table_spec_form" id="#placeholder#color_select_form" style="position:relative;" contenteditable="false"  unselectable="on" inputmode="none"><div id="#placeholder#table_spec_heading" class="spec_features_head" contenteditable="false"  unselectable="on" inputmode="none">Colours<span class="close_window" title="Close" inputmode="none" unselectable="on" contentEditable = false inputmode="none" onclick="close_select_features_div(' + pic_counter + ')"><img src="/est_rte_multi/images/close_menu.png" alt="" /></span></div>';
estrte_select_colour_div_html +='<div class="estrte_color_pallette" id="#placeholder#estrte_color_pallette" contenteditable="false" unselectable="on" inputmode="none">';
estrte_select_colour_div_html += '<div class="estrte_colorRowCont"><div class="estrte_setColorRow" id="#placeholder#estrte_setColorRow" contenteditable="false"  unselectable="on" inputmode="none"></div>';
estrte_select_colour_div_html += '<div class="estrte_lowerSetColorRow" class="estrte_lowerSetColorRow" id="#placeholder#estrte_lowerSetColorRow" contenteditable="false"  unselectable="on" inputmode="none"></div>';
estrte_select_colour_div_html += '</div>';
estrte_select_colour_div_html += '<div class="estrte_slidecontainer" contentEditable = false><label for="redComp" class="estrte_colorLabel" unselectable="on" inputmode="none" contentEditable = false>Red</label><input type="range" class="estrte_toolbar_slider" min="0" max="255" value="';
estrte_select_colour_div_html += estrte_textColorArray[0];
estrte_select_colour_div_html += '" step=1 class="slider" name="redComp" id="#placeholder#redComp" contenteditable="false" unselectable="on" inputmode="none" onchange="estrte_setColor(#placeholder#, \'red\')">';
estrte_select_colour_div_html += '<label for="greenComp" class="estrte_colorLabel" inputmode="none" contentEditable = false>Green</label><input type="range" class="estrte_toolbar_slider" min="0" max="255" value="'
estrte_select_colour_div_html += estrte_textColorArray[1];
estrte_select_colour_div_html += '" step=1 class="slider" name="greenComp" id="#placeholder#greenComp" contenteditable="false"  unselectable="on" inputmode="none" onchange="estrte_setColor(#placeholder#, \'green\')">';
estrte_select_colour_div_html += '<label for="blueComp" class="estrte_colorLabel" inputmode="none" contentEditable = false>Blue</label><input type="range" class="estrte_toolbar_slider" min="0" max="255" value="';
estrte_select_colour_div_html += estrte_textColorArray[2];
estrte_select_colour_div_html += '" step=1 class="slider" name="blueComp" id="#placeholder#blueComp" contenteditable="false"  unselectable="on" inputmode="none" onchange="estrte_setColor(#placeholder#, \'blue\')">';
estrte_select_colour_div_html += '<label for="shadeComp" class="estrte_colorLabel" inputmode="none" contentEditable = false>Shade</label><input type="range" class="estrte_toolbar_slider" min="0" max="100" value="50" step=1 class="slider" name="shadeComp" id="#placeholder#shadeComp" contenteditable="false"  unselectable="on" inputmode="none" onchange="estrte_setColor(#placeholder#, \'shade\')">';
estrte_select_colour_div_html += '<input type="hidden" name="tempRed" id="#placeholder#tempRed" value="u" /><input type="hidden" name="tempGreen" id="#placeholder#tempGreen" value="u" /><input type="hidden" name="tempBlue" id="#placeholder#tempBlue" value="u" />';
estrte_select_colour_div_html += '</div>';
estrte_select_colour_div_html += '</div>';
estrte_select_colour_div_html += '<div class="estrte_colorPickerDivLower" id="#placeholder#estrte_colorPickerDivLower"><label class="estrte_setTextColorLabel" id="#placeholder#estrte_setTextColorLabelColor" onclick="estrte_setColor(\'color\')">Set Color</label>';
estrte_select_colour_div_html += '<label class="estrte_setTextColorLabel" id="#placeholder#estrte_setTextColorLabelBgColor" onclick="estrte_setBackgroundColor(#placeholder#)">Set Background</label></div></div>';
while(estrte_select_colour_div_html.indexOf('#placeholder#') != -1){
estrte_select_colour_div_html = estrte_select_colour_div_html.replace('#placeholder#', pic_counter);
}
document.getElementById(pic_counter + "estrte_select_features_div").innerHTML = estrte_select_colour_div_html;
let thisTarget = document.getElementById(pic_counter + "estrte_select_features_div");
slideDown(pic_counter, "520px");

        estrte_populate_colour_div(pic_counter, '');
 }
function estrte_populate_colour_div(pic_counter, holder){
    estrte_color_editing = false;
    let thisId;
    document.getElementById(pic_counter + "estrte_setColorRow" + holder).innerHTML = '';
    document.getElementById(pic_counter + "estrte_lowerSetColorRow" + holder).innerHTML = '';
    for (let i = 0; i < estrte_rgb_colors.length; i++) {
                    let unix =  pic_counter.toString() +  new Date().valueOf();
                    thisId = unix + (Math.random() * 10000);
  document.getElementById(pic_counter + "estrte_setColorRow" + holder).innerHTML += '<div class="estrte_setColorUnit"><label id=' + thisId + ' class="estrte_setSetColorLabel" style="color:rgb(' + estrte_rgb_colors[i] + ');background-color:rgb(' + estrte_rgb_colors[i] + ');" unselectable="on" inputmode="none" readonly="readonly" onmousedown="estrte_setSetColor(' + pic_counter + ', '+ estrte_rgb_colors[i] + ', 10)" ontouchstart="estrte_setSetColor(' + pic_counter + ', '+ estrte_rgb_colors[i] + ', 10)">C</label></div>';
  if(estrte_rgb_colors[i] == "255, 255, 255"){
  	document.getElementById(thisId).style.border = 'solid 0.1px #8b8b8b';
  	document.getElementById(pic_counter + "estrte_color_monitor").style.border = 'solid 0.3px #8b8b8b';
  }else{
  	document.getElementById(pic_counter + "estrte_color_monitor").style.border = "0";
  }
}
for (let i = 0; i < estrte_lower_rgb_colors.length; i++) {
                    let unix =  pic_counter.toString() +  new Date().valueOf();
                    thisId = unix + (Math.random() * 10000);
  document.getElementById(pic_counter + "estrte_lowerSetColorRow" + holder).innerHTML += '<div class="estrte_setColorUnit"><label id=' + thisId + ' class="estrte_setSetColorLabel" style="color:rgb(' + estrte_lower_rgb_colors[i] + ');background-color:rgb(' + estrte_lower_rgb_colors[i] + ');" unselectable="on" inputmode="none" readonly="readonly" onmousedown="estrte_setSetColor(' + pic_counter + ', ' + estrte_lower_rgb_colors[i] + ', 10)" ontouchstart="estrte_setSetColor(' + pic_counter + ', ' + estrte_lower_rgb_colors[i] + ', 10)">C</label></div>';
}
}
function estrte_show_table_spec_div(pic_counter){
   let this_table_html = table_html;
while(this_table_html.indexOf('#placeholder#') != -1){
this_table_html = this_table_html.replace('#placeholder#', pic_counter);
}
document.getElementById(pic_counter + "estrte_select_features_div").innerHTML = this_table_html;
for (let i = 1; i <= estrte_number_of_table_row_options; i++) {
  document.getElementById(pic_counter + "no_of_rows_select").innerHTML += '<option value="' + i + '">' + i + "</option>";
}
for (let i = 1; i <= estrte_border_options; i++) {
  document.getElementById(pic_counter + "border_select").innerHTML += '<option value="' + i + '">' + i + "</option>";
}
for (let i = 1; i <= estrte_table_padding_options; i++) {
  document.getElementById(pic_counter + "cellpadding_select").innerHTML += '<option value="' + i + '">' + i + "</option>";
}
for (let i = 1; i <= estrte_cell_spacing_options; i++) {
  document.getElementById(pic_counter + "cellspacing_select").innerHTML += '<option value="' + i + '">' + i + "</option>";
}
for (let i = 1; i <= estrte_number_of_table_column_options; i++) {
  document.getElementById(pic_counter + "no_of_columns_select").innerHTML += '<option value="' + i + '">' + i + "</option>";
}
let thisTarget = document.getElementById(pic_counter + "estrte_select_features_div");
slideDown(pic_counter, "520px");
}
function estrte_show_select_link_div(pic_counter){
   let this_link_html = link_html;
while(this_link_html.indexOf('#placeholder#') != -1){
this_link_html = this_link_html.replace('#placeholder#', pic_counter);
}
	    document.getElementById(pic_counter + "estrte_select_features_div").innerHTML = this_link_html;
let thisTarget = document.getElementById(pic_counter + "estrte_select_features_div");
slideDown(pic_counter, "380px");
}

 function estrte_setShade(pic_counter){
 	let redValue;
 	let greenValue;
 	let blueValue;
 	let newRedValue;
 	let newGreenValue;
 	let newBlueValue;
 	let newColor;
    let shade = document.getElementById(pic_counter + "shadeComp").value / 50;
    if(document.getElementById(pic_counter + "tempRed").value != ''){
    	redValue = document.getElementById(pic_counter + "tempRed").value;
    }else{
    	redValue = document.getElementById(pic_counter + "redComp").value;
    }
    if(document.getElementById(pic_counter + "tempGreen").value != ''){
    	greenValue = document.getElementById(pic_counter + "tempGreen").value;
    }else{
    	greenValue = document.getElementById(pic_counter + "greenComp").value;
    }
    if(document.getElementById(pic_counter + "tempBlue").value != ''){
    	blueValue = document.getElementById(pic_counter + "tempBlue").value;
    }else{
    	blueValue = document.getElementById(pic_counter + "blueComp").value;
    }
  	document.getElementById(pic_counter + "tempRed").value = redValue;
 	document.getElementById(pic_counter + "tempGreen").value = greenValue;
 	document.getElementById(pic_counter + "tempBlue").value = blueValue; 
 	if(shade <= 1){
 newRedValue = redValue * shade;
 newGreenValue = greenValue * shade;
 newBlueValue = blueValue * shade; 
	}else{
 newRedValue = 255 -((225 - redValue) * (2 - shade));
 newGreenValue = 255 -((225 - greenValue) * (2 - shade));
 newBlueValue = 255 -((225 - blueValue) * (2 - shade)); 
 		}
 	document.getElementById(pic_counter + "redComp").value = newRedValue;
 	document.getElementById(pic_counter + "greenComp").value = newGreenValue;
 	document.getElementById(pic_counter + "blueComp").value = newBlueValue;
 	newColor = "rgb(" + newRedValue + ", " + newGreenValue + ", " + newBlueValue + ")";
	document.getElementById(pic_counter + "estrte_color_monitor").style.backgroundColor = newColor;
           document.getElementById(pic_counter + "estrte_content").value = estrte_sanitise_input_content(document.getElementById(pic_counter + "estrte_content_wrapper").innerHTML, pic_counter);
     if(estrte_action == "set_background"){
  document.getElementById(pic_counter + "estrte_input_field").style.backgroundColor = newColor;
     } else {
    estrte_setColor(pic_counter, 'shade');
      }
 }
 
 function estrte_setBackgroundColor(pic_counter){
 	let origInputText;
 	let newInputText;
 	if(estrte_fragments_log.length > 0){
       origInputText = estrte_fragments_log[0].post_edit;
	}else{
       origInputText = document.getElementById(pic_counter + "estrte_content_wrapper").innerHTML;
	}
  	let red = document.getElementById(pic_counter + "redComp").value;
 	let green = document.getElementById(pic_counter + "greenComp").value;
 	let blue = document.getElementById(pic_counter + "blueComp").value;
 	let newRedValue;
 	let newGreenValue;
 	let newBlueValue;
 	let shade = document.getElementById(pic_counter + "shadeComp").value;
 	let preColor = document.getElementById(pic_counter + "estrte_input_field").style.backgroundColor;
 	let newColor = "rgb(" + red + ", " + green + ", " + blue + ")";
 	document.getElementById(pic_counter + "tempRed").value = red;
 	document.getElementById(pic_counter + "tempGreen").value = green;
 	document.getElementById(pic_counter + "tempBlue").value = blue;
 	document.getElementById(pic_counter + "shadeComp").value = shade;
 	document.getElementById(pic_counter + "estrte_input_field").style.backgroundColor = document.getElementById(pic_counter + "estrte_color_monitor").style.backgroundColor;
 	document.getElementById(pic_counter + "estrte_input_cont").style.backgroundColor = document.getElementById(pic_counter + "estrte_color_monitor").style.backgroundColor;
 	document.getElementById(pic_counter + "estrte_content_wrapper").style.backgroundColor = document.getElementById(pic_counter + "estrte_color_monitor").style.backgroundColor;
 	newInputText = document.getElementById(pic_counter + "estrte_content_wrapper").innerHTML;
    document.getElementById(pic_counter + "estrte_content").value = estrte_sanitise_input_content(document.getElementById(pic_counter + "estrte_content_wrapper").innerHTML, pic_counter);
    new_log = {"pre_edit": origInputText, "post_edit": newInputText, "type_of_edit": "Background Edit"};
	estrte_fragments_log.unshift(new_log);
 	document.getElementById(pic_counter + "estrte_undo").style.display = "inline-block";
 	document.getElementById(pic_counter + "estrte_undo").innerHTML = "Undo";
 }
 
 function estrte_setSetColor(pic_counter, red, green, blue, alpha){ 
 	let newColor;
  	document.getElementById(pic_counter + "redComp").value = red;
 	document.getElementById(pic_counter + "greenComp").value = green;
 	document.getElementById(pic_counter + "blueComp").value = blue;
 	newColor = "rgb(" + red + ", " + green + ", " + blue + ")";
  	document.getElementById(pic_counter + "tempRed").value = red;
 	document.getElementById(pic_counter + "tempGreen").value = green;
 	document.getElementById(pic_counter + "tempBlue").value = blue;
 	document.getElementById(pic_counter + "estrte_color_monitor").style.backgroundColor = newColor;
 	document.getElementById(pic_counter + "shadeComp").value = 50;
    estrte_setContentColor(pic_counter);
}
function estrte_setContentColor(pic_counter){
 	let red = document.getElementById(pic_counter + "redComp").value;
 	let green = document.getElementById(pic_counter + "greenComp").value;
 	let blue = document.getElementById(pic_counter + "blueComp").value;
 	let newColor = "rgb(" + red + ", " + green + ", " + blue + ")";
 	document.getElementById(pic_counter + "tempRed").value = red;
 	document.getElementById(pic_counter + "tempGreen").value = green;
 	document.getElementById(pic_counter + "tempBlue").value = blue;
 	document.getElementById(pic_counter + "shadeComp").value = 50;
 	estrte_setColor(pic_counter, 'color');
 }
 function estrte_setContentShade(pic_counter)
 {
 	let redValue;
 	let greenValue;
 	let blueValue;
 	let newRedValue;
 	let newGreenValue;
 	let newBlueValue;
    let shade;
    let newColor;
    shade = document.getElementById(pic_counter + "shadeComp").value / 100;
        if(document.getElementById(pic_counter + "tempRed").value != ''){
    	redValue = document.getElementById(pic_counter + "tempRed").value;
    }else{
    	redValue = document.getElementById(pic_counter + "redComp").value;
    }
    if(document.getElementById(pic_counter + "tempGreen").value != ''){
    	greenValue = document.getElementById(pic_counter + "tempGreen").value;
    }else{
    	greenValue = document.getElementById(pic_counter + "greenComp").value;
    }
    if(document.getElementById(pic_counter + "tempBlue").value != ''){
    	blueValue = document.getElementById(pic_counter + "tempBlue").value;
    }else{
    	blueValue = document.getElementById(pic_counter + "blueComp").value;
    }
	document.getElementById(pic_counter + "tempRed").value = redValue;
 	document.getElementById(pic_counter + "tempGreen").value = greenValue;
 	document.getElementById(pic_counter + "tempBlue").value = blueValue; 
 newRedValue = redValue * shade;
 newGreenValue = greenValue * shade;
 newBlueValue = blueValue * shade;
  	document.getElementById(pic_counter + "redComp").value = newRedValue;
 	document.getElementById(pic_counter + "greenComp").value = newGreenValue;
 	document.getElementById(pic_counter + "blueComp").value = newBlueValue;
 	newColor = "rgb(" + newRedValue + ", " + newGreenValue + ", " + newBlueValue + ")";
 	estrte_add_style(pic_counter, 'color', newColor);
 }
function close_select_features_div(pic_counter){
let target = document.getElementById(pic_counter + "estrte_select_features_div");
target.style.height = "400px";;
target.style.transitionProperty = 'height, margin, padding'; /* [1.1] */
target.style.transitionDuration = estrte_animation_dur + 'ms'; /* [1.2] */
target.style.boxSizing = 'border-box'; /* [2] */
target.style.height = target.offsetHeight + 'px'; /* [3] */
target.style.height = 0; /* [4] */
target.style.paddingTop = 0; /* [5.1] */
target.style.paddingBottom = 0; /* [5.2] */
target.style.marginTop = 0; /* [6.1] */
target.style.marginBottom = 0; /* [7.2] */
target.style.overflow = 'hidden'; /* [7] */
window.setTimeout( () => {
  target.style.display = 'none'; /* [8] */
  target.style.removeProperty('height'); /* [9] */
  target.style.removeProperty('padding-top');  /* [10.1] */ 
  target.style.removeProperty('padding-bottom');  /* [10.2] */ 
  target.style.removeProperty('margin-top');  /* [11.1] */ 
  target.style.removeProperty('margin-bottom');  /* [11.2] */ 
  target.style.removeProperty('overflow');  /* [12] */ 
  target.style.removeProperty('transition-duration');  /* [13.1] */ 
  target.style.removeProperty('transition-property');  /* [13.2] */ 
}, estrte_animation_dur);
}
 function ancestor(node, match){
  if(!node)
  {
    return null;
  }
  else if(!node.nodeType || typeof(match) != 'string')
  {
    return node;
  }
  if((match = match.split('.')).length === 1)
  {
    match.push(null);
  }
  else if(!match[0])
  {
    match[0] = null;
  }
  do
  {
    if
    (
      (
        !match[0]
        ||
        match[0].toLowerCase() == node.nodeName.toLowerCase())
      &&
      (
        !match[1]
        ||
        new RegExp('( |^)(' + match[1] + ')( |$)').test(node.className)
      )
    )
    {
      break;
    }
  }
  while(node = node.parentNode);

  return node;
}

estrte_input_fields = document.getElementsByClassName("estrte_input_field");
        for(let i = 0; i < estrte_input_fields.length; i++){
           estrte_input_fields[i].addEventListener("keyup", (function(event){
this_pic_counter = event.target.id.substring(0, 4);
let existingHTML;
let newInputText;
let newHTML;
let new_log;
    estrte_color_editing = false;
		if(event.target.innerHTML.indexOf('<div class="table_spec_form">') == -1){
if(this_pic_counter == ''){
this_pic_counter = pic_counter_master;
}else{
	pic_counter_master = this_pic_counter;
}
if(estrte_fragments_log.length > 0){
       existingHTML = estrte_fragments_log[0].post_edit;
	}else{
       existingHTML = '';
	}
    newHTML = document.getElementById(this_pic_counter + "estrte_content_wrapper").innerHTML;
    new_log = {"pre_edit": existingHTML, "post_edit": newHTML, "type_of_edit": "edit"};
	estrte_fragments_log.unshift(new_log);
 	document.getElementById(this_pic_counter + "estrte_undo").style.display = "inline-block";
 	document.getElementById(this_pic_counter + "estrte_undo").innerHTML = "Undo";
	newInputText = document.getElementById(this_pic_counter + "estrte_content_wrapper").innerHTML;
	document.getElementById(this_pic_counter + "estrte_content").value = estrte_sanitise_input_content(newInputText, this_pic_counter); 
  if(document.activeElement.id == null){
  }
  if(document.activeElement.id == ""){
}
	}else{
	}
}));
        }

document.addEventListener("keydown", (function(event){
this_pic_counter = event.target.id.substring(0, 1);
    estrte_color_editing = false;
  if(document.activeElement.id == null){
  }
	}));

let estrte_fontSizeSelectInputs = document.getElementsByClassName("estrte_fontSizeSelectInput");
for(let i = 0; i < estrte_fontSizeSelectInputs.length; i++){
for(let j = 0; j < estrte_font_sizes.length; j++) {
  estrte_fontSizeSelectInputs[i].innerHTML += '<option value="' + estrte_font_sizes[j] + 'px">' + estrte_font_sizes[j] + "</option>";
}
}
let estrte_fontsSelectInputs = document.getElementsByClassName("estrte_fontsSelectInput");
for(let i = 0; i < estrte_fontsSelectInputs.length; i++){
for (let j = 0; j < estrte_fonts.length; j++) {
  estrte_fontsSelectInputs[i].innerHTML += '<option value="' + estrte_fonts[j] + '">' + estrte_fonts[j] + "</option>";
}
}
//function estrte_show_select_features_div(pic_counter){
//}
for(let i = 0; i < estrte_input_fields.length; i++){
estrte_input_fields[i].focus;
}

