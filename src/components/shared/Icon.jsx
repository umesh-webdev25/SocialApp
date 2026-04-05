export function Icon({ name, className = '', filled = false }) {
  const icons = {
    home: 'home',
    search: 'search',
    explore: 'explore',
    movie: 'movie',
    chat: 'chat',
    chat_bubble: 'chat_bubble',
    favorite: 'favorite',
    favorite_border: 'favorite_border',
    add_box: 'add_box',
    add_circle: 'add_circle',
    settings: 'settings',
    person: 'person',
    notifications: 'notifications',
    mail: 'mail',
    send: 'send',
    lock: 'lock',
    visibility: 'visibility',
    analytics: 'analytics',
    group: 'group',
    dashboard: 'dashboard',
    history: 'history',
    auto_awesome_motion: 'auto_awesome_motion',
    photo_library: 'photo_library',
    camera_alt: 'camera_alt',
    location_on: 'location_on',
    person_add: 'person_add',
    sentiment_satisfied: 'sentiment_satisfied',
    edit_square: 'edit_square',
    call: 'call',
    videocam: 'videocam',
    info: 'info',
    image: 'image',
    mic: 'mic',
    grid_on: 'grid_on',
    bookmark: 'bookmark',
    more_horiz: 'more_horiz',
    story: 'story',
    lock_outline: 'lock_outline',
    edit: 'edit',
    verified_user: 'verified_user',
    help_outline: 'help_outline',
    add: 'add',
    chevron_right: 'chevron_right',
    expand_more: 'expand_more',
    layers: 'layers',
    movie_filter: 'movie_filter',
    play_circle: 'play_circle',
    play_arrow: 'play_arrow',
    shopping_bag: 'shopping_bag',
    star: 'star',
    mood: 'mood',
    photo_camera: 'photo_camera',
    palette: 'palette',
    account_circle: 'account_circle',
    chat_bubble_outline: 'chat_bubble_outline',
  };

  return (
    <span 
      className={`material-symbols-outlined ${className}`}
      style={{ fontVariationSettings: filled ? "'FILL' 1, 'wght' 400, 'GRAD' 0, 'opsz' 24" : "'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24" }}
    >
      {icons[name] || name}
    </span>
  );
}
