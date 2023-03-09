window.chesscom = window.chesscom || {}, window.chesscom.routes = window.chesscom.routes || {}, Object.assign(window.chesscom.routes, {
		web_computer_callback_load_game: {
			tokens: [
				["variable", "/", "\\d+", "id"],
				["text", "/computer/callback/game"]
			],
			defaults: {
				subdomain: "www"
			},
			requirements: {
				id: "\\d+",
				subdomain: "www|schach|ru|uk|ajedrez|fr|scacchi|sakk|schaken|szachy"
			},
			hosttokens: [
				["text", ".chess-dev.com"],
				["variable", "", "www|schach|ru|uk|ajedrez|fr|scacchi|sakk|schaken|szachy", "subdomain"]
			],
			methods: [],
			schemes: ["https"]
		},
		web_callback_load_game_live_data: {
			tokens: [
				["variable", "/", "[^/]++", "id"],
				["text", "/callback/live/game"]
			],
			defaults: {
				subdomain: "www"
			},
			requirements: {
				subdomain: "www|schach|ru|uk|ajedrez|fr|scacchi|sakk|schaken|szachy"
			},
			hosttokens: [
				["text", ".chess-dev.com"],
				["variable", "", "www|schach|ru|uk|ajedrez|fr|scacchi|sakk|schaken|szachy", "subdomain"]
			],
			methods: [],
			schemes: ["https"]
		},
		web_content_callback_headline: {
			tokens: [
				["variable", "/", "[^/]++", "contentId"],
				["variable", "/", "[^/]++", "contentType"],
				["text", "/callback/content"]
			],
			defaults: {
				subdomain: "www"
			},
			requirements: {
				subdomain: "www|schach|ru|uk|ajedrez|fr|scacchi|sakk|schaken|szachy"
			},
			hosttokens: [
				["text", ".chess-dev.com"],
				["variable", "", "www|schach|ru|uk|ajedrez|fr|scacchi|sakk|schaken|szachy", "subdomain"]
			],
			methods: [],
			schemes: ["https"]
		},
		web_content_callback_comments_sync: {
			tokens: [
				["variable", "/", "[^/]++", "id"],
				["variable", "/", "[^/]++", "type"],
				["text", "/callback/content/comment-sync"]
			],
			defaults: {
				subdomain: "www"
			},
			requirements: {
				subdomain: "www|schach|ru|uk|ajedrez|fr|scacchi|sakk|schaken|szachy"
			},
			hosttokens: [
				["text", ".chess-dev.com"],
				["variable", "", "www|schach|ru|uk|ajedrez|fr|scacchi|sakk|schaken|szachy", "subdomain"]
			],
			methods: [],
			schemes: ["https"]
		},
		web_member_titled_players: {
			tokens: [
				["text", "/members/titled-players"]
			],
			defaults: {
				subdomain: "www"
			},
			requirements: {
				subdomain: "www|schach|ru|uk|ajedrez|fr|scacchi|sakk|schaken|szachy"
			},
			hosttokens: [
				["text", ".chess-dev.com"],
				["variable", "", "www|schach|ru|uk|ajedrez|fr|scacchi|sakk|schaken|szachy", "subdomain"]
			],
			methods: [],
			schemes: ["https"]
		},
		i18n_web_member_titled_players: {
			tokens: [
				["text", "/members/titled-players"],
				["variable", "/", "es|fr|de|pl|ru|sv|el|pt|it|zh|ja|ko|nl|hy|bg|hr|cs|da|fi|hu|lt|no|ro|sk|sl|tr|uk|af|ar|az|be|bs|et|fa|gl|he|hi|id|is|ka|lv|ms|pt-BR|sq|sr|vi|zh-HK|zh-TW|fil|nl-BE|bn|tk|uz|ca|ur|--locale--", "_locale"]
			],
			defaults: {
				subdomain: "www",
				_locale: ""
			},
			requirements: {
				subdomain: "www|schach|ru|uk|ajedrez|fr|scacchi|sakk|schaken|szachy",
				_locale: "es|fr|de|pl|ru|sv|el|pt|it|zh|ja|ko|nl|hy|bg|hr|cs|da|fi|hu|lt|no|ro|sk|sl|tr|uk|af|ar|az|be|bs|et|fa|gl|he|hi|id|is|ka|lv|ms|pt-BR|sq|sr|vi|zh-HK|zh-TW|fil|nl-BE|bn|tk|uz|ca|ur|--locale--"
			},
			hosttokens: [
				["text", ".chess-dev.com"],
				["variable", "", "www|schach|ru|uk|ajedrez|fr|scacchi|sakk|schaken|szachy", "subdomain"]
			],
			methods: [],
			schemes: ["https"]
		},
		web_membership: {
			tokens: [
				["text", "/membership"]
			],
			defaults: {
				subdomain: "www"
			},
			requirements: {
				subdomain: "www|schach|ru|uk|ajedrez|fr|scacchi|sakk|schaken|szachy"
			},
			hosttokens: [
				["text", ".chess-dev.com"],
				["variable", "", "www|schach|ru|uk|ajedrez|fr|scacchi|sakk|schaken|szachy", "subdomain"]
			],
			methods: [],
			schemes: ["https"]
		},
		i18n_web_membership: {
			tokens: [
				["text", "/membership"],
				["variable", "/", "es|fr|de|pl|ru|sv|el|pt|it|zh|ja|ko|nl|hy|bg|hr|cs|da|fi|hu|lt|no|ro|sk|sl|tr|uk|af|ar|az|be|bs|et|fa|gl|he|hi|id|is|ka|lv|ms|pt-BR|sq|sr|vi|zh-HK|zh-TW|fil|nl-BE|bn|tk|uz|ca|ur|--locale--", "_locale"]
			],
			defaults: {
				subdomain: "www",
				_locale: ""
			},
			requirements: {
				subdomain: "www|schach|ru|uk|ajedrez|fr|scacchi|sakk|schaken|szachy",
				_locale: "es|fr|de|pl|ru|sv|el|pt|it|zh|ja|ko|nl|hy|bg|hr|cs|da|fi|hu|lt|no|ro|sk|sl|tr|uk|af|ar|az|be|bs|et|fa|gl|he|hi|id|is|ka|lv|ms|pt-BR|sq|sr|vi|zh-HK|zh-TW|fil|nl-BE|bn|tk|uz|ca|ur|--locale--"
			},
			hosttokens: [
				["text", ".chess-dev.com"],
				["variable", "", "www|schach|ru|uk|ajedrez|fr|scacchi|sakk|schaken|szachy", "subdomain"]
			],
			methods: [],
			schemes: ["https"]
		},
		web_security_register: {
			tokens: [
				["text", "/register"]
			],
			defaults: {
				subdomain: "www"
			},
			requirements: {
				subdomain: "www|schach|ru|uk|ajedrez|fr|scacchi|sakk|schaken|szachy"
			},
			hosttokens: [
				["text", ".chess-dev.com"],
				["variable", "", "www|schach|ru|uk|ajedrez|fr|scacchi|sakk|schaken|szachy", "subdomain"]
			],
			methods: ["GET"],
			schemes: ["https"]
		},
		i18n_web_security_register: {
			tokens: [
				["text", "/register"],
				["variable", "/", "es|fr|de|pl|ru|sv|el|pt|it|zh|ja|ko|nl|hy|bg|hr|cs|da|fi|hu|lt|no|ro|sk|sl|tr|uk|af|ar|az|be|bs|et|fa|gl|he|hi|id|is|ka|lv|ms|pt-BR|sq|sr|vi|zh-HK|zh-TW|fil|nl-BE|bn|tk|uz|ca|ur|--locale--", "_locale"]
			],
			defaults: {
				subdomain: "www",
				_locale: ""
			},
			requirements: {
				subdomain: "www|schach|ru|uk|ajedrez|fr|scacchi|sakk|schaken|szachy",
				_locale: "es|fr|de|pl|ru|sv|el|pt|it|zh|ja|ko|nl|hy|bg|hr|cs|da|fi|hu|lt|no|ro|sk|sl|tr|uk|af|ar|az|be|bs|et|fa|gl|he|hi|id|is|ka|lv|ms|pt-BR|sq|sr|vi|zh-HK|zh-TW|fil|nl-BE|bn|tk|uz|ca|ur|--locale--"
			},
			hosttokens: [
				["text", ".chess-dev.com"],
				["variable", "", "www|schach|ru|uk|ajedrez|fr|scacchi|sakk|schaken|szachy", "subdomain"]
			],
			methods: ["GET"],
			schemes: ["https"]
		},
		web_security_login_and_go: {
			tokens: [
				["text", "/login_and_go"]
			],
			defaults: {
				subdomain: "www"
			},
			requirements: {
				subdomain: "www|schach|ru|uk|ajedrez|fr|scacchi|sakk|schaken|szachy"
			},
			hosttokens: [
				["text", ".chess-dev.com"],
				["variable", "", "www|schach|ru|uk|ajedrez|fr|scacchi|sakk|schaken|szachy", "subdomain"]
			],
			methods: [],
			schemes: ["https"]
		},
		i18n_web_security_login_and_go: {
			tokens: [
				["text", "/login_and_go"],
				["variable", "/", "es|fr|de|pl|ru|sv|el|pt|it|zh|ja|ko|nl|hy|bg|hr|cs|da|fi|hu|lt|no|ro|sk|sl|tr|uk|af|ar|az|be|bs|et|fa|gl|he|hi|id|is|ka|lv|ms|pt-BR|sq|sr|vi|zh-HK|zh-TW|fil|nl-BE|bn|tk|uz|ca|ur|--locale--", "_locale"]
			],
			defaults: {
				subdomain: "www",
				_locale: ""
			},
			requirements: {
				subdomain: "www|schach|ru|uk|ajedrez|fr|scacchi|sakk|schaken|szachy",
				_locale: "es|fr|de|pl|ru|sv|el|pt|it|zh|ja|ko|nl|hy|bg|hr|cs|da|fi|hu|lt|no|ro|sk|sl|tr|uk|af|ar|az|be|bs|et|fa|gl|he|hi|id|is|ka|lv|ms|pt-BR|sq|sr|vi|zh-HK|zh-TW|fil|nl-BE|bn|tk|uz|ca|ur|--locale--"
			},
			hosttokens: [
				["text", ".chess-dev.com"],
				["variable", "", "www|schach|ru|uk|ajedrez|fr|scacchi|sakk|schaken|szachy", "subdomain"]
			],
			methods: [],
			schemes: ["https"]
		},
		web_search: {
			tokens: [
				["text", "/search"]
			],
			defaults: {
				subdomain: "www"
			},
			requirements: {
				subdomain: "www|schach|ru|uk|ajedrez|fr|scacchi|sakk|schaken|szachy"
			},
			hosttokens: [
				["text", ".chess-dev.com"],
				["variable", "", "www|schach|ru|uk|ajedrez|fr|scacchi|sakk|schaken|szachy", "subdomain"]
			],
			methods: [],
			schemes: ["https"]
		},
		i18n_web_search: {
			tokens: [
				["text", "/search"],
				["variable", "/", "es|fr|de|pl|ru|sv|el|pt|it|zh|ja|ko|nl|hy|bg|hr|cs|da|fi|hu|lt|no|ro|sk|sl|tr|uk|af|ar|az|be|bs|et|fa|gl|he|hi|id|is|ka|lv|ms|pt-BR|sq|sr|vi|zh-HK|zh-TW|fil|nl-BE|bn|tk|uz|ca|ur|--locale--", "_locale"]
			],
			defaults: {
				subdomain: "www",
				_locale: ""
			},
			requirements: {
				subdomain: "www|schach|ru|uk|ajedrez|fr|scacchi|sakk|schaken|szachy",
				_locale: "es|fr|de|pl|ru|sv|el|pt|it|zh|ja|ko|nl|hy|bg|hr|cs|da|fi|hu|lt|no|ro|sk|sl|tr|uk|af|ar|az|be|bs|et|fa|gl|he|hi|id|is|ka|lv|ms|pt-BR|sq|sr|vi|zh-HK|zh-TW|fil|nl-BE|bn|tk|uz|ca|ur|--locale--"
			},
			hosttokens: [
				["text", ".chess-dev.com"],
				["variable", "", "www|schach|ru|uk|ajedrez|fr|scacchi|sakk|schaken|szachy", "subdomain"]
			],
			methods: [],
			schemes: ["https"]
		},
		web_themes_data_callback: {
			tokens: [
				["text", "/callback/themes/data"]
			],
			defaults: {
				subdomain: "www"
			},
			requirements: {
				subdomain: "www|schach|ru|uk|ajedrez|fr|scacchi|sakk|schaken|szachy"
			},
			hosttokens: [
				["text", ".chess-dev.com"],
				["variable", "", "www|schach|ru|uk|ajedrez|fr|scacchi|sakk|schaken|szachy", "subdomain"]
			],
			methods: ["GET"],
			schemes: ["https"]
		},
		web_user_game_settings_email_callback_animation_type: {
			tokens: [
				["text", "/callback/settings/user/email/animationType"]
			],
			defaults: {
				subdomain: "www"
			},
			requirements: {
				subdomain: "www|schach|ru|uk|ajedrez|fr|scacchi|sakk|schaken|szachy"
			},
			hosttokens: [
				["text", ".chess-dev.com"],
				["variable", "", "www|schach|ru|uk|ajedrez|fr|scacchi|sakk|schaken|szachy", "subdomain"]
			],
			methods: ["POST"],
			schemes: ["https"]
		},
		web_user_game_settings_email_callback_board_color: {
			tokens: [
				["text", "/callback/settings/user/email/boardColor"]
			],
			defaults: {
				subdomain: "www"
			},
			requirements: {
				subdomain: "www|schach|ru|uk|ajedrez|fr|scacchi|sakk|schaken|szachy"
			},
			hosttokens: [
				["text", ".chess-dev.com"],
				["variable", "", "www|schach|ru|uk|ajedrez|fr|scacchi|sakk|schaken|szachy", "subdomain"]
			],
			methods: ["POST"],
			schemes: ["https"]
		},
		web_user_game_settings_email_callback_coordinates: {
			tokens: [
				["text", "/callback/settings/user/email/coordinates"]
			],
			defaults: {
				subdomain: "www"
			},
			requirements: {
				subdomain: "www|schach|ru|uk|ajedrez|fr|scacchi|sakk|schaken|szachy"
			},
			hosttokens: [
				["text", ".chess-dev.com"],
				["variable", "", "www|schach|ru|uk|ajedrez|fr|scacchi|sakk|schaken|szachy", "subdomain"]
			],
			methods: ["POST"],
			schemes: ["https"]
		},
		web_user_game_settings_callback_dark_mode_toggle: {
			tokens: [
				["text", "/callback/settings/user/darkModeToggle"]
			],
			defaults: {
				subdomain: "www"
			},
			requirements: {
				subdomain: "www|schach|ru|uk|ajedrez|fr|scacchi|sakk|schaken|szachy"
			},
			hosttokens: [
				["text", ".chess-dev.com"],
				["variable", "", "www|schach|ru|uk|ajedrez|fr|scacchi|sakk|schaken|szachy", "subdomain"]
			],
			methods: ["POST"],
			schemes: ["https"]
		},
		web_user_game_settings_email_callback_show_legal_moves_toggle: {
			tokens: [
				["text", "/callback/settings/user/email/showLegalMovesToggle"]
			],
			defaults: {
				subdomain: "www"
			},
			requirements: {
				subdomain: "www|schach|ru|uk|ajedrez|fr|scacchi|sakk|schaken|szachy"
			},
			hosttokens: [
				["text", ".chess-dev.com"],
				["variable", "", "www|schach|ru|uk|ajedrez|fr|scacchi|sakk|schaken|szachy", "subdomain"]
			],
			methods: ["POST"],
			schemes: ["https"]
		},
		web_user_game_settings_email_callback_highlight_last_move_toggle: {
			tokens: [
				["text", "/callback/settings/user/email/highlightLastMoveToggle"]
			],
			defaults: {
				subdomain: "www"
			},
			requirements: {
				subdomain: "www|schach|ru|uk|ajedrez|fr|scacchi|sakk|schaken|szachy"
			},
			hosttokens: [
				["text", ".chess-dev.com"],
				["variable", "", "www|schach|ru|uk|ajedrez|fr|scacchi|sakk|schaken|szachy", "subdomain"]
			],
			methods: ["POST"],
			schemes: ["https"]
		},
		web_user_game_settings_email_callback_is_white_on_bottom_toggle: {
			tokens: [
				["text", "/callback/settings/user/email/isWhiteOnBottom"]
			],
			defaults: {
				subdomain: "www"
			},
			requirements: {
				subdomain: "www|schach|ru|uk|ajedrez|fr|scacchi|sakk|schaken|szachy"
			},
			hosttokens: [
				["text", ".chess-dev.com"],
				["variable", "", "www|schach|ru|uk|ajedrez|fr|scacchi|sakk|schaken|szachy", "subdomain"]
			],
			methods: ["POST"],
			schemes: ["https"]
		},
		web_user_game_settings_email_callback_move_list_display_type: {
			tokens: [
				["text", "/callback/settings/user/email/moveListDisplayType"]
			],
			defaults: {
				subdomain: "www"
			},
			requirements: {
				subdomain: "www|schach|ru|uk|ajedrez|fr|scacchi|sakk|schaken|szachy"
			},
			hosttokens: [
				["text", ".chess-dev.com"],
				["variable", "", "www|schach|ru|uk|ajedrez|fr|scacchi|sakk|schaken|szachy", "subdomain"]
			],
			methods: ["POST"],
			schemes: ["https"]
		},
		web_user_game_settings_email_callback_move_method: {
			tokens: [
				["text", "/callback/settings/user/email/moveMethod"]
			],
			defaults: {
				subdomain: "www"
			},
			requirements: {
				subdomain: "www|schach|ru|uk|ajedrez|fr|scacchi|sakk|schaken|szachy"
			},
			hosttokens: [
				["text", ".chess-dev.com"],
				["variable", "", "www|schach|ru|uk|ajedrez|fr|scacchi|sakk|schaken|szachy", "subdomain"]
			],
			methods: ["POST"],
			schemes: ["https"]
		},
		web_user_game_settings_email_callback_piece: {
			tokens: [
				["text", "/callback/settings/user/email/pieceStyle"]
			],
			defaults: {
				subdomain: "www"
			},
			requirements: {
				subdomain: "www|schach|ru|uk|ajedrez|fr|scacchi|sakk|schaken|szachy"
			},
			hosttokens: [
				["text", ".chess-dev.com"],
				["variable", "", "www|schach|ru|uk|ajedrez|fr|scacchi|sakk|schaken|szachy", "subdomain"]
			],
			methods: ["POST"],
			schemes: ["https"]
		},
		web_user_game_settings_email_callback_sound_toggle: {
			tokens: [
				["text", "/callback/settings/user/email/soundToggle"]
			],
			defaults: {
				subdomain: "www"
			},
			requirements: {
				subdomain: "www|schach|ru|uk|ajedrez|fr|scacchi|sakk|schaken|szachy"
			},
			hosttokens: [
				["text", ".chess-dev.com"],
				["variable", "", "www|schach|ru|uk|ajedrez|fr|scacchi|sakk|schaken|szachy", "subdomain"]
			],
			methods: ["POST"],
			schemes: ["https"]
		},
		web_user_game_settings_email_callback_show_timestamps: {
			tokens: [
				["text", "/callback/settings/user/email/showTimestamps"]
			],
			defaults: {
				subdomain: "www"
			},
			requirements: {
				subdomain: "www|schach|ru|uk|ajedrez|fr|scacchi|sakk|schaken|szachy"
			},
			hosttokens: [
				["text", ".chess-dev.com"],
				["variable", "", "www|schach|ru|uk|ajedrez|fr|scacchi|sakk|schaken|szachy", "subdomain"]
			],
			methods: ["POST"],
			schemes: ["https"]
		},
		web_user_game_settings_email_callback_sound_theme: {
			tokens: [
				["text", "/callback/settings/user/email/soundTheme"]
			],
			defaults: {
				subdomain: "www"
			},
			requirements: {
				subdomain: "www|schach|ru|uk|ajedrez|fr|scacchi|sakk|schaken|szachy"
			},
			hosttokens: [
				["text", ".chess-dev.com"],
				["variable", "", "www|schach|ru|uk|ajedrez|fr|scacchi|sakk|schaken|szachy", "subdomain"]
			],
			methods: ["POST"],
			schemes: ["https"]
		},
		web_user_callback_get_board_settings: {
			tokens: [
				["text", "/callback/board-settings"]
			],
			defaults: {
				subdomain: "www"
			},
			requirements: {
				subdomain: "www|schach|ru|uk|ajedrez|fr|scacchi|sakk|schaken|szachy"
			},
			hosttokens: [
				["text", ".chess-dev.com"],
				["variable", "", "www|schach|ru|uk|ajedrez|fr|scacchi|sakk|schaken|szachy", "subdomain"]
			],
			methods: [],
			schemes: ["https"]
		},
		web_2fa_login: {
			tokens: [
				["text", "/2fa"]
			],
			defaults: {
				subdomain: "www"
			},
			requirements: {
				subdomain: "www|schach|ru|uk|ajedrez|fr|scacchi|sakk|schaken|szachy"
			},
			hosttokens: [
				["text", ".chess-dev.com"],
				["variable", "", "www|schach|ru|uk|ajedrez|fr|scacchi|sakk|schaken|szachy", "subdomain"]
			],
			methods: [],
			schemes: ["https"]
		},
		i18n_web_2fa_login: {
			tokens: [
				["text", "/2fa"],
				["variable", "/", "es|fr|de|pl|ru|sv|el|pt|it|zh|ja|ko|nl|hy|bg|hr|cs|da|fi|hu|lt|no|ro|sk|sl|tr|uk|af|ar|az|be|bs|et|fa|gl|he|hi|id|is|ka|lv|ms|pt-BR|sq|sr|vi|zh-HK|zh-TW|fil|nl-BE|bn|tk|uz|ca|ur|--locale--", "_locale"]
			],
			defaults: {
				subdomain: "www",
				_locale: ""
			},
			requirements: {
				subdomain: "www|schach|ru|uk|ajedrez|fr|scacchi|sakk|schaken|szachy",
				_locale: "es|fr|de|pl|ru|sv|el|pt|it|zh|ja|ko|nl|hy|bg|hr|cs|da|fi|hu|lt|no|ro|sk|sl|tr|uk|af|ar|az|be|bs|et|fa|gl|he|hi|id|is|ka|lv|ms|pt-BR|sq|sr|vi|zh-HK|zh-TW|fil|nl-BE|bn|tk|uz|ca|ur|--locale--"
			},
			hosttokens: [
				["text", ".chess-dev.com"],
				["variable", "", "www|schach|ru|uk|ajedrez|fr|scacchi|sakk|schaken|szachy", "subdomain"]
			],
			methods: [],
			schemes: ["https"]
		},
		web_article_callback_list_authors: {
			tokens: [
				["text", "/callback/articles/authors"]
			],
			defaults: {
				subdomain: "www"
			},
			requirements: {
				subdomain: "www|schach|ru|uk|ajedrez|fr|scacchi|sakk|schaken|szachy"
			},
			hosttokens: [
				["text", ".chess-dev.com"],
				["variable", "", "www|schach|ru|uk|ajedrez|fr|scacchi|sakk|schaken|szachy", "subdomain"]
			],
			methods: [],
			schemes: ["https"]
		},
		web_article_callback_lock_coments: {
			tokens: [
				["variable", "/", "[^/]++", "id"],
				["text", "/callback/articles/lock-comments"]
			],
			defaults: {
				subdomain: "www"
			},
			requirements: {
				subdomain: "www|schach|ru|uk|ajedrez|fr|scacchi|sakk|schaken|szachy"
			},
			hosttokens: [
				["text", ".chess-dev.com"],
				["variable", "", "www|schach|ru|uk|ajedrez|fr|scacchi|sakk|schaken|szachy", "subdomain"]
			],
			methods: ["POST"],
			schemes: ["https"]
		},
		web_blog_callback_lock_coments: {
			tokens: [
				["variable", "/", "[^/]++", "id"],
				["text", "/callback/blog/lock-comments"]
			],
			defaults: {
				subdomain: "www"
			},
			requirements: {
				subdomain: "www|schach|ru|uk|ajedrez|fr|scacchi|sakk|schaken|szachy"
			},
			hosttokens: [
				["text", ".chess-dev.com"],
				["variable", "", "www|schach|ru|uk|ajedrez|fr|scacchi|sakk|schaken|szachy", "subdomain"]
			],
			methods: ["POST"],
			schemes: ["https"]
		},
		web_news_callback_lock_coments: {
			tokens: [
				["variable", "/", "[^/]++", "id"],
				["text", "/callback/news/lock-comments"]
			],
			defaults: {
				subdomain: "www"
			},
			requirements: {
				subdomain: "www|schach|ru|uk|ajedrez|fr|scacchi|sakk|schaken|szachy"
			},
			hosttokens: [
				["text", ".chess-dev.com"],
				["variable", "", "www|schach|ru|uk|ajedrez|fr|scacchi|sakk|schaken|szachy", "subdomain"]
			],
			methods: ["POST"],
			schemes: ["https"]
		},
		web_video_callback_lock_coments: {
			tokens: [
				["variable", "/", "[^/]++", "id"],
				["text", "/callback/video/lock-comments"]
			],
			defaults: {
				subdomain: "www"
			},
			requirements: {
				subdomain: "www|schach|ru|uk|ajedrez|fr|scacchi|sakk|schaken|szachy"
			},
			hosttokens: [
				["text", ".chess-dev.com"],
				["variable", "", "www|schach|ru|uk|ajedrez|fr|scacchi|sakk|schaken|szachy", "subdomain"]
			],
			methods: ["POST"],
			schemes: ["https"]
		},
		web_content_callback_feature_article: {
			tokens: [
				["variable", "/", "[^/]++", "id"],
				["text", "/callback/content/feature/article"]
			],
			defaults: {
				subdomain: "www"
			},
			requirements: {
				subdomain: "www|schach|ru|uk|ajedrez|fr|scacchi|sakk|schaken|szachy"
			},
			hosttokens: [
				["text", ".chess-dev.com"],
				["variable", "", "www|schach|ru|uk|ajedrez|fr|scacchi|sakk|schaken|szachy", "subdomain"]
			],
			methods: ["POST"],
			schemes: ["https"]
		},
		web_content_callback_feature_blog: {
			tokens: [
				["variable", "/", "[^/]++", "id"],
				["text", "/callback/content/feature/blog"]
			],
			defaults: {
				subdomain: "www"
			},
			requirements: {
				subdomain: "www|schach|ru|uk|ajedrez|fr|scacchi|sakk|schaken|szachy"
			},
			hosttokens: [
				["text", ".chess-dev.com"],
				["variable", "", "www|schach|ru|uk|ajedrez|fr|scacchi|sakk|schaken|szachy", "subdomain"]
			],
			methods: ["POST"],
			schemes: ["https"]
		},
		web_content_callback_feature_lesson_course: {
			tokens: [
				["variable", "/", "[^/]++", "id"],
				["text", "/callback/content/feature/lesson_course"]
			],
			defaults: {
				subdomain: "www"
			},
			requirements: {
				subdomain: "www|schach|ru|uk|ajedrez|fr|scacchi|sakk|schaken|szachy"
			},
			hosttokens: [
				["text", ".chess-dev.com"],
				["variable", "", "www|schach|ru|uk|ajedrez|fr|scacchi|sakk|schaken|szachy", "subdomain"]
			],
			methods: ["POST"],
			schemes: ["https"]
		},
		web_content_callback_feature_news: {
			tokens: [
				["variable", "/", "[^/]++", "id"],
				["text", "/callback/content/feature/news"]
			],
			defaults: {
				subdomain: "www"
			},
			requirements: {
				subdomain: "www|schach|ru|uk|ajedrez|fr|scacchi|sakk|schaken|szachy"
			},
			hosttokens: [
				["text", ".chess-dev.com"],
				["variable", "", "www|schach|ru|uk|ajedrez|fr|scacchi|sakk|schaken|szachy", "subdomain"]
			],
			methods: ["POST"],
			schemes: ["https"]
		},
		web_content_callback_feature_chess_video: {
			tokens: [
				["variable", "/", "[^/]++", "id"],
				["text", "/callback/content/feature/chess_video"]
			],
			defaults: {
				subdomain: "www"
			},
			requirements: {
				subdomain: "www|schach|ru|uk|ajedrez|fr|scacchi|sakk|schaken|szachy"
			},
			hosttokens: [
				["text", ".chess-dev.com"],
				["variable", "", "www|schach|ru|uk|ajedrez|fr|scacchi|sakk|schaken|szachy", "subdomain"]
			],
			methods: ["POST"],
			schemes: ["https"]
		},
		web_user_callback_set_content_language: {
			tokens: [
				["text", "/callback/user/content-language/set"]
			],
			defaults: {
				subdomain: "www"
			},
			requirements: {
				subdomain: "www|schach|ru|uk|ajedrez|fr|scacchi|sakk|schaken|szachy"
			},
			hosttokens: [
				["text", ".chess-dev.com"],
				["variable", "", "www|schach|ru|uk|ajedrez|fr|scacchi|sakk|schaken|szachy", "subdomain"]
			],
			methods: ["POST"],
			schemes: ["https"]
		},
		web_article_view: {
			tokens: [
				["variable", "/", "[^/]++", "url"],
				["text", "/article/view"]
			],
			defaults: {
				subdomain: "www"
			},
			requirements: {
				subdomain: "www|schach|ru|uk|ajedrez|fr|scacchi|sakk|schaken|szachy"
			},
			hosttokens: [
				["text", ".chess-dev.com"],
				["variable", "", "www|schach|ru|uk|ajedrez|fr|scacchi|sakk|schaken|szachy", "subdomain"]
			],
			methods: [],
			schemes: ["https"]
		},
		i18n_web_article_view: {
			tokens: [
				["variable", "/", "[^/]++", "url"],
				["text", "/article/view"],
				["variable", "/", "es|fr|de|pl|ru|sv|el|pt|it|zh|ja|ko|nl|hy|bg|hr|cs|da|fi|hu|lt|no|ro|sk|sl|tr|uk|af|ar|az|be|bs|et|fa|gl|he|hi|id|is|ka|lv|ms|pt-BR|sq|sr|vi|zh-HK|zh-TW|fil|nl-BE|bn|tk|uz|ca|ur|--locale--", "_locale"]
			],
			defaults: {
				subdomain: "www",
				_locale: ""
			},
			requirements: {
				subdomain: "www|schach|ru|uk|ajedrez|fr|scacchi|sakk|schaken|szachy",
				_locale: "es|fr|de|pl|ru|sv|el|pt|it|zh|ja|ko|nl|hy|bg|hr|cs|da|fi|hu|lt|no|ro|sk|sl|tr|uk|af|ar|az|be|bs|et|fa|gl|he|hi|id|is|ka|lv|ms|pt-BR|sq|sr|vi|zh-HK|zh-TW|fil|nl-BE|bn|tk|uz|ca|ur|--locale--"
			},
			hosttokens: [
				["text", ".chess-dev.com"],
				["variable", "", "www|schach|ru|uk|ajedrez|fr|scacchi|sakk|schaken|szachy", "subdomain"]
			],
			methods: [],
			schemes: ["https"]
		},
		web_survey_callback_vote: {
			tokens: [
				["variable", "/", "\\d+", "optionId"],
				["text", "/vote"],
				["variable", "/", "\\d+", "id"],
				["text", "/callback/survey"]
			],
			defaults: {
				subdomain: "www"
			},
			requirements: {
				id: "\\d+",
				optionId: "\\d+",
				subdomain: "www|schach|ru|uk|ajedrez|fr|scacchi|sakk|schaken|szachy"
			},
			hosttokens: [
				["text", ".chess-dev.com"],
				["variable", "", "www|schach|ru|uk|ajedrez|fr|scacchi|sakk|schaken|szachy", "subdomain"]
			],
			methods: ["POST"],
			schemes: ["https"]
		},
		web_team_match_view: {
			tokens: [
				["variable", "/", "\\d+", "match"],
				["text", "/club/matches"]
			],
			defaults: {
				subdomain: "www"
			},
			requirements: {
				match: "\\d+",
				subdomain: "www|schach|ru|uk|ajedrez|fr|scacchi|sakk|schaken|szachy"
			},
			hosttokens: [
				["text", ".chess-dev.com"],
				["variable", "", "www|schach|ru|uk|ajedrez|fr|scacchi|sakk|schaken|szachy", "subdomain"]
			],
			methods: [],
			schemes: ["https"]
		},
		i18n_web_team_match_view: {
			tokens: [
				["variable", "/", "\\d+", "match"],
				["text", "/club/matches"],
				["variable", "/", "es|fr|de|pl|ru|sv|el|pt|it|zh|ja|ko|nl|hy|bg|hr|cs|da|fi|hu|lt|no|ro|sk|sl|tr|uk|af|ar|az|be|bs|et|fa|gl|he|hi|id|is|ka|lv|ms|pt-BR|sq|sr|vi|zh-HK|zh-TW|fil|nl-BE|bn|tk|uz|ca|ur|--locale--", "_locale"]
			],
			defaults: {
				subdomain: "www",
				_locale: ""
			},
			requirements: {
				match: "\\d+",
				subdomain: "www|schach|ru|uk|ajedrez|fr|scacchi|sakk|schaken|szachy",
				_locale: "es|fr|de|pl|ru|sv|el|pt|it|zh|ja|ko|nl|hy|bg|hr|cs|da|fi|hu|lt|no|ro|sk|sl|tr|uk|af|ar|az|be|bs|et|fa|gl|he|hi|id|is|ka|lv|ms|pt-BR|sq|sr|vi|zh-HK|zh-TW|fil|nl-BE|bn|tk|uz|ca|ur|--locale--"
			},
			hosttokens: [
				["text", ".chess-dev.com"],
				["variable", "", "www|schach|ru|uk|ajedrez|fr|scacchi|sakk|schaken|szachy", "subdomain"]
			],
			methods: [],
			schemes: ["https"]
		},
		web_tournament_view: {
			tokens: [
				["variable", "/", "[^/]++", "url"],
				["text", "/tournament"]
			],
			defaults: {
				subdomain: "www"
			},
			requirements: {
				subdomain: "www|schach|ru|uk|ajedrez|fr|scacchi|sakk|schaken|szachy"
			},
			hosttokens: [
				["text", ".chess-dev.com"],
				["variable", "", "www|schach|ru|uk|ajedrez|fr|scacchi|sakk|schaken|szachy", "subdomain"]
			],
			methods: [],
			schemes: ["https"]
		},
		i18n_web_tournament_view: {
			tokens: [
				["variable", "/", "[^/]++", "url"],
				["text", "/tournament"],
				["variable", "/", "es|fr|de|pl|ru|sv|el|pt|it|zh|ja|ko|nl|hy|bg|hr|cs|da|fi|hu|lt|no|ro|sk|sl|tr|uk|af|ar|az|be|bs|et|fa|gl|he|hi|id|is|ka|lv|ms|pt-BR|sq|sr|vi|zh-HK|zh-TW|fil|nl-BE|bn|tk|uz|ca|ur|--locale--", "_locale"]
			],
			defaults: {
				subdomain: "www",
				_locale: ""
			},
			requirements: {
				subdomain: "www|schach|ru|uk|ajedrez|fr|scacchi|sakk|schaken|szachy",
				_locale: "es|fr|de|pl|ru|sv|el|pt|it|zh|ja|ko|nl|hy|bg|hr|cs|da|fi|hu|lt|no|ro|sk|sl|tr|uk|af|ar|az|be|bs|et|fa|gl|he|hi|id|is|ka|lv|ms|pt-BR|sq|sr|vi|zh-HK|zh-TW|fil|nl-BE|bn|tk|uz|ca|ur|--locale--"
			},
			hosttokens: [
				["text", ".chess-dev.com"],
				["variable", "", "www|schach|ru|uk|ajedrez|fr|scacchi|sakk|schaken|szachy", "subdomain"]
			],
			methods: [],
			schemes: ["https"]
		},
		web_member_view: {
			tokens: [
				["variable", "/", "[^/]++", "username"],
				["text", "/member"]
			],
			defaults: {
				subdomain: "www"
			},
			requirements: {
				subdomain: "www|schach|ru|uk|ajedrez|fr|scacchi|sakk|schaken|szachy"
			},
			hosttokens: [
				["text", ".chess-dev.com"],
				["variable", "", "www|schach|ru|uk|ajedrez|fr|scacchi|sakk|schaken|szachy", "subdomain"]
			],
			methods: [],
			schemes: ["https"]
		},
		i18n_web_member_view: {
			tokens: [
				["variable", "/", "[^/]++", "username"],
				["text", "/member"],
				["variable", "/", "es|fr|de|pl|ru|sv|el|pt|it|zh|ja|ko|nl|hy|bg|hr|cs|da|fi|hu|lt|no|ro|sk|sl|tr|uk|af|ar|az|be|bs|et|fa|gl|he|hi|id|is|ka|lv|ms|pt-BR|sq|sr|vi|zh-HK|zh-TW|fil|nl-BE|bn|tk|uz|ca|ur|--locale--", "_locale"]
			],
			defaults: {
				subdomain: "www",
				_locale: ""
			},
			requirements: {
				subdomain: "www|schach|ru|uk|ajedrez|fr|scacchi|sakk|schaken|szachy",
				_locale: "es|fr|de|pl|ru|sv|el|pt|it|zh|ja|ko|nl|hy|bg|hr|cs|da|fi|hu|lt|no|ro|sk|sl|tr|uk|af|ar|az|be|bs|et|fa|gl|he|hi|id|is|ka|lv|ms|pt-BR|sq|sr|vi|zh-HK|zh-TW|fil|nl-BE|bn|tk|uz|ca|ur|--locale--"
			},
			hosttokens: [
				["text", ".chess-dev.com"],
				["variable", "", "www|schach|ru|uk|ajedrez|fr|scacchi|sakk|schaken|szachy", "subdomain"]
			],
			methods: [],
			schemes: ["https"]
		},
		web_user_home: {
			tokens: [
				["text", "/home"]
			],
			defaults: {
				subdomain: "www"
			},
			requirements: {
				subdomain: "www|schach|ru|uk|ajedrez|fr|scacchi|sakk|schaken|szachy"
			},
			hosttokens: [
				["text", ".chess-dev.com"],
				["variable", "", "www|schach|ru|uk|ajedrez|fr|scacchi|sakk|schaken|szachy", "subdomain"]
			],
			methods: [],
			schemes: ["https"]
		},
		web_user_callback_report_user: {
			tokens: [
				["text", "/callback/report-user"]
			],
			defaults: {
				subdomain: "www"
			},
			requirements: {
				subdomain: "www|schach|ru|uk|ajedrez|fr|scacchi|sakk|schaken|szachy"
			},
			hosttokens: [
				["text", ".chess-dev.com"],
				["variable", "", "www|schach|ru|uk|ajedrez|fr|scacchi|sakk|schaken|szachy", "subdomain"]
			],
			methods: ["POST"],
			schemes: ["https"]
		},
		web_tv_callback_report: {
			tokens: [
				["variable", "/", "[^/]++", "video"],
				["variable", "/", "[^/]++", "reason"],
				["text", "/chess-tv/callback/report"]
			],
			defaults: {
				subdomain: "www"
			},
			requirements: {
				subdomain: "www|schach|ru|uk|ajedrez|fr|scacchi|sakk|schaken|szachy"
			},
			hosttokens: [
				["text", ".chess-dev.com"],
				["variable", "", "www|schach|ru|uk|ajedrez|fr|scacchi|sakk|schaken|szachy", "subdomain"]
			],
			methods: ["POST"],
			schemes: ["https"]
		},
		web_user_callback_popup: {
			tokens: [
				["variable", "/", "[^/]++", "username"],
				["text", "/callback/user/popup"]
			],
			defaults: {
				subdomain: "www"
			},
			requirements: {
				subdomain: "www|schach|ru|uk|ajedrez|fr|scacchi|sakk|schaken|szachy"
			},
			hosttokens: [
				["text", ".chess-dev.com"],
				["variable", "", "www|schach|ru|uk|ajedrez|fr|scacchi|sakk|schaken|szachy", "subdomain"]
			],
			methods: [],
			schemes: ["https"]
		},
		web_about: {
			tokens: [
				["text", "/about"]
			],
			defaults: {
				subdomain: "www"
			},
			requirements: {
				subdomain: "www|schach|ru|uk|ajedrez|fr|scacchi|sakk|schaken|szachy"
			},
			hosttokens: [
				["text", ".chess-dev.com"],
				["variable", "", "www|schach|ru|uk|ajedrez|fr|scacchi|sakk|schaken|szachy", "subdomain"]
			],
			methods: [],
			schemes: ["https"]
		},
		web_user_callback_username_search: {
			tokens: [
				["variable", "/", "[^/]++", "username"],
				["text", "/callback/user/search"]
			],
			defaults: {
				username: null,
				subdomain: "www"
			},
			requirements: {
				subdomain: "www|schach|ru|uk|ajedrez|fr|scacchi|sakk|schaken|szachy"
			},
			hosttokens: [
				["text", ".chess-dev.com"],
				["variable", "", "www|schach|ru|uk|ajedrez|fr|scacchi|sakk|schaken|szachy", "subdomain"]
			],
			methods: [],
			schemes: ["https"]
		},
		web_league_division: {
			tokens: [
				["variable", "/", "[\\w]{6,}", "division"],
				["variable", "/", "\\w+", "league"],
				["text", "/leagues"]
			],
			defaults: {
				subdomain: "www"
			},
			requirements: {
				league: "\\w+",
				division: "[\\w]{6,}",
				subdomain: "www|schach|ru|uk|ajedrez|fr|scacchi|sakk|schaken|szachy"
			},
			hosttokens: [
				["text", ".chess-dev.com"],
				["variable", "", "www|schach|ru|uk|ajedrez|fr|scacchi|sakk|schaken|szachy", "subdomain"]
			],
			methods: [],
			schemes: ["https"]
		},
		i18n_web_league_division: {
			tokens: [
				["variable", "/", "[\\w]{6,}", "division"],
				["variable", "/", "\\w+", "league"],
				["text", "/leagues"],
				["variable", "/", "es|fr|de|pl|ru|sv|el|pt|it|zh|ja|ko|nl|hy|bg|hr|cs|da|fi|hu|lt|no|ro|sk|sl|tr|uk|af|ar|az|be|bs|et|fa|gl|he|hi|id|is|ka|lv|ms|pt-BR|sq|sr|vi|zh-HK|zh-TW|fil|nl-BE|bn|tk|uz|ca|ur|--locale--", "_locale"]
			],
			defaults: {
				subdomain: "www",
				_locale: ""
			},
			requirements: {
				league: "\\w+",
				division: "[\\w]{6,}",
				subdomain: "www|schach|ru|uk|ajedrez|fr|scacchi|sakk|schaken|szachy",
				_locale: "es|fr|de|pl|ru|sv|el|pt|it|zh|ja|ko|nl|hy|bg|hr|cs|da|fi|hu|lt|no|ro|sk|sl|tr|uk|af|ar|az|be|bs|et|fa|gl|he|hi|id|is|ka|lv|ms|pt-BR|sq|sr|vi|zh-HK|zh-TW|fil|nl-BE|bn|tk|uz|ca|ur|--locale--"
			},
			hosttokens: [
				["text", ".chess-dev.com"],
				["variable", "", "www|schach|ru|uk|ajedrez|fr|scacchi|sakk|schaken|szachy", "subdomain"]
			],
			methods: [],
			schemes: ["https"]
		},
		web_stats: {
			tokens: [
				["variable", "/", "[^/]++", "username"],
				["text", "/stats"]
			],
			defaults: {
				username: null,
				subdomain: "www"
			},
			requirements: {
				subdomain: "www|schach|ru|uk|ajedrez|fr|scacchi|sakk|schaken|szachy"
			},
			hosttokens: [
				["text", ".chess-dev.com"],
				["variable", "", "www|schach|ru|uk|ajedrez|fr|scacchi|sakk|schaken|szachy", "subdomain"]
			],
			methods: [],
			schemes: ["https"]
		},
		i18n_web_stats: {
			tokens: [
				["variable", "/", "[^/]++", "username"],
				["text", "/stats"],
				["variable", "/", "es|fr|de|pl|ru|sv|el|pt|it|zh|ja|ko|nl|hy|bg|hr|cs|da|fi|hu|lt|no|ro|sk|sl|tr|uk|af|ar|az|be|bs|et|fa|gl|he|hi|id|is|ka|lv|ms|pt-BR|sq|sr|vi|zh-HK|zh-TW|fil|nl-BE|bn|tk|uz|ca|ur|--locale--", "_locale"]
			],
			defaults: {
				username: null,
				subdomain: "www",
				_locale: ""
			},
			requirements: {
				subdomain: "www|schach|ru|uk|ajedrez|fr|scacchi|sakk|schaken|szachy",
				_locale: "es|fr|de|pl|ru|sv|el|pt|it|zh|ja|ko|nl|hy|bg|hr|cs|da|fi|hu|lt|no|ro|sk|sl|tr|uk|af|ar|az|be|bs|et|fa|gl|he|hi|id|is|ka|lv|ms|pt-BR|sq|sr|vi|zh-HK|zh-TW|fil|nl-BE|bn|tk|uz|ca|ur|--locale--"
			},
			hosttokens: [
				["text", ".chess-dev.com"],
				["variable", "", "www|schach|ru|uk|ajedrez|fr|scacchi|sakk|schaken|szachy", "subdomain"]
			],
			methods: [],
			schemes: ["https"]
		},
		web_game_live: {
			tokens: [
				["variable", "/", "[^/]++", "id"],
				["text", "/game/live"]
			],
			defaults: {
				subdomain: "www"
			},
			requirements: {
				subdomain: "www|schach|ru|uk|ajedrez|fr|scacchi|sakk|schaken|szachy"
			},
			hosttokens: [
				["text", ".chess-dev.com"],
				["variable", "", "www|schach|ru|uk|ajedrez|fr|scacchi|sakk|schaken|szachy", "subdomain"]
			],
			methods: [],
			schemes: ["https"]
		},
		i18n_web_game_live: {
			tokens: [
				["variable", "/", "[^/]++", "id"],
				["text", "/game/live"],
				["variable", "/", "es|fr|de|pl|ru|sv|el|pt|it|zh|ja|ko|nl|hy|bg|hr|cs|da|fi|hu|lt|no|ro|sk|sl|tr|uk|af|ar|az|be|bs|et|fa|gl|he|hi|id|is|ka|lv|ms|pt-BR|sq|sr|vi|zh-HK|zh-TW|fil|nl-BE|bn|tk|uz|ca|ur|--locale--", "_locale"]
			],
			defaults: {
				subdomain: "www",
				_locale: ""
			},
			requirements: {
				subdomain: "www|schach|ru|uk|ajedrez|fr|scacchi|sakk|schaken|szachy",
				_locale: "es|fr|de|pl|ru|sv|el|pt|it|zh|ja|ko|nl|hy|bg|hr|cs|da|fi|hu|lt|no|ro|sk|sl|tr|uk|af|ar|az|be|bs|et|fa|gl|he|hi|id|is|ka|lv|ms|pt-BR|sq|sr|vi|zh-HK|zh-TW|fil|nl-BE|bn|tk|uz|ca|ur|--locale--"
			},
			hosttokens: [
				["text", ".chess-dev.com"],
				["variable", "", "www|schach|ru|uk|ajedrez|fr|scacchi|sakk|schaken|szachy", "subdomain"]
			],
			methods: [],
			schemes: ["https"]
		},
		web_game_rcn: {
			tokens: [
				["variable", "/", "[^/]++", "id"],
				["text", "/game/rcn"]
			],
			defaults: {
				subdomain: "www"
			},
			requirements: {
				subdomain: "www|schach|ru|uk|ajedrez|fr|scacchi|sakk|schaken|szachy"
			},
			hosttokens: [
				["text", ".chess-dev.com"],
				["variable", "", "www|schach|ru|uk|ajedrez|fr|scacchi|sakk|schaken|szachy", "subdomain"]
			],
			methods: [],
			schemes: ["https"]
		},
		i18n_web_game_rcn: {
			tokens: [
				["variable", "/", "[^/]++", "id"],
				["text", "/game/rcn"],
				["variable", "/", "es|fr|de|pl|ru|sv|el|pt|it|zh|ja|ko|nl|hy|bg|hr|cs|da|fi|hu|lt|no|ro|sk|sl|tr|uk|af|ar|az|be|bs|et|fa|gl|he|hi|id|is|ka|lv|ms|pt-BR|sq|sr|vi|zh-HK|zh-TW|fil|nl-BE|bn|tk|uz|ca|ur|--locale--", "_locale"]
			],
			defaults: {
				subdomain: "www",
				_locale: ""
			},
			requirements: {
				subdomain: "www|schach|ru|uk|ajedrez|fr|scacchi|sakk|schaken|szachy",
				_locale: "es|fr|de|pl|ru|sv|el|pt|it|zh|ja|ko|nl|hy|bg|hr|cs|da|fi|hu|lt|no|ro|sk|sl|tr|uk|af|ar|az|be|bs|et|fa|gl|he|hi|id|is|ka|lv|ms|pt-BR|sq|sr|vi|zh-HK|zh-TW|fil|nl-BE|bn|tk|uz|ca|ur|--locale--"
			},
			hosttokens: [
				["text", ".chess-dev.com"],
				["variable", "", "www|schach|ru|uk|ajedrez|fr|scacchi|sakk|schaken|szachy", "subdomain"]
			],
			methods: [],
			schemes: ["https"]
		},
		web_puzzles_mode_battle_view: {
			tokens: [
				["variable", "/", "[^/]++", "shortUuid"],
				["text", "/puzzles/battle"]
			],
			defaults: {
				subdomain: "www"
			},
			requirements: {
				subdomain: "www|schach|ru|uk|ajedrez|fr|scacchi|sakk|schaken|szachy"
			},
			hosttokens: [
				["text", ".chess-dev.com"],
				["variable", "", "www|schach|ru|uk|ajedrez|fr|scacchi|sakk|schaken|szachy", "subdomain"]
			],
			methods: [],
			schemes: ["https"]
		},
		i18n_web_puzzles_mode_battle_view: {
			tokens: [
				["variable", "/", "[^/]++", "shortUuid"],
				["text", "/puzzles/battle"],
				["variable", "/", "es|fr|de|pl|ru|sv|el|pt|it|zh|ja|ko|nl|hy|bg|hr|cs|da|fi|hu|lt|no|ro|sk|sl|tr|uk|af|ar|az|be|bs|et|fa|gl|he|hi|id|is|ka|lv|ms|pt-BR|sq|sr|vi|zh-HK|zh-TW|fil|nl-BE|bn|tk|uz|ca|ur|--locale--", "_locale"]
			],
			defaults: {
				subdomain: "www",
				_locale: ""
			},
			requirements: {
				subdomain: "www|schach|ru|uk|ajedrez|fr|scacchi|sakk|schaken|szachy",
				_locale: "es|fr|de|pl|ru|sv|el|pt|it|zh|ja|ko|nl|hy|bg|hr|cs|da|fi|hu|lt|no|ro|sk|sl|tr|uk|af|ar|az|be|bs|et|fa|gl|he|hi|id|is|ka|lv|ms|pt-BR|sq|sr|vi|zh-HK|zh-TW|fil|nl-BE|bn|tk|uz|ca|ur|--locale--"
			},
			hosttokens: [
				["text", ".chess-dev.com"],
				["variable", "", "www|schach|ru|uk|ajedrez|fr|scacchi|sakk|schaken|szachy", "subdomain"]
			],
			methods: [],
			schemes: ["https"]
		},
		web_club_callback_user_member_clubs: {
			tokens: [
				["text", "/callback/clubs/user/member"]
			],
			defaults: {
				subdomain: "www"
			},
			requirements: {
				subdomain: "www|schach|ru|uk|ajedrez|fr|scacchi|sakk|schaken|szachy"
			},
			hosttokens: [
				["text", ".chess-dev.com"],
				["variable", "", "www|schach|ru|uk|ajedrez|fr|scacchi|sakk|schaken|szachy", "subdomain"]
			],
			methods: ["GET"],
			schemes: ["https"]
		},
		web_club_callback_user_admin_clubs: {
			tokens: [
				["text", "/callback/clubs/user/admin"]
			],
			defaults: {
				subdomain: "www"
			},
			requirements: {
				subdomain: "www|schach|ru|uk|ajedrez|fr|scacchi|sakk|schaken|szachy"
			},
			hosttokens: [
				["text", ".chess-dev.com"],
				["variable", "", "www|schach|ru|uk|ajedrez|fr|scacchi|sakk|schaken|szachy", "subdomain"]
			],
			methods: ["GET"],
			schemes: ["https"]
		},
		web_alert_callback_alerts: {
			tokens: [
				["text", "/callback/alert/alerts"]
			],
			defaults: {
				subdomain: "www"
			},
			requirements: {
				subdomain: "www|schach|ru|uk|ajedrez|fr|scacchi|sakk|schaken|szachy"
			},
			hosttokens: [
				["text", ".chess-dev.com"],
				["variable", "", "www|schach|ru|uk|ajedrez|fr|scacchi|sakk|schaken|szachy", "subdomain"]
			],
			methods: [],
			schemes: ["https"]
		},
		web_game_seek_callback_user_seeks: {
			tokens: [
				["text", "/callback/game_seek/user-seeks"]
			],
			defaults: {
				subdomain: "www"
			},
			requirements: {
				subdomain: "www|schach|ru|uk|ajedrez|fr|scacchi|sakk|schaken|szachy"
			},
			hosttokens: [
				["text", ".chess-dev.com"],
				["variable", "", "www|schach|ru|uk|ajedrez|fr|scacchi|sakk|schaken|szachy", "subdomain"]
			],
			methods: [],
			schemes: ["https"]
		},
		web_analysis_game_callback_view_all: {
			tokens: [
				["text", "/all"],
				["variable", "/", "[^/]++", "gameId"],
				["variable", "/", "[^/]++", "type"],
				["text", "/callback/analysis/game"]
			],
			defaults: {
				subdomain: "www"
			},
			requirements: {
				subdomain: "www|schach|ru|uk|ajedrez|fr|scacchi|sakk|schaken|szachy"
			},
			hosttokens: [
				["text", ".chess-dev.com"],
				["variable", "", "www|schach|ru|uk|ajedrez|fr|scacchi|sakk|schaken|szachy", "subdomain"]
			],
			methods: ["GET"],
			schemes: ["https"]
		},
		web_game_callback_get_chat_messages: {
			tokens: [
				["text", "/chat-messages"],
				["variable", "/", "\\d+", "id"],
				["text", "/callback/game"]
			],
			defaults: {
				subdomain: "www"
			},
			requirements: {
				id: "\\d+",
				subdomain: "www|schach|ru|uk|ajedrez|fr|scacchi|sakk|schaken|szachy"
			},
			hosttokens: [
				["text", ".chess-dev.com"],
				["variable", "", "www|schach|ru|uk|ajedrez|fr|scacchi|sakk|schaken|szachy", "subdomain"]
			],
			methods: ["GET"],
			schemes: ["https"]
		},
		web_move_condition_callback_get: {
			tokens: [
				["variable", "/", "\\d+", "id"],
				["text", "/callback/move-conditions/game"]
			],
			defaults: {
				subdomain: "www"
			},
			requirements: {
				id: "\\d+",
				subdomain: "www|schach|ru|uk|ajedrez|fr|scacchi|sakk|schaken|szachy"
			},
			hosttokens: [
				["text", ".chess-dev.com"],
				["variable", "", "www|schach|ru|uk|ajedrez|fr|scacchi|sakk|schaken|szachy", "subdomain"]
			],
			methods: [],
			schemes: ["https"]
		},
		web_callback_load_next_game_archive: {
			tokens: [
				["text", "/next"],
				["variable", "/", "\\d+", "id"],
				["variable", "/", "daily|live", "location"],
				["text", "/callback/archive/game"]
			],
			defaults: {
				subdomain: "www"
			},
			requirements: {
				id: "\\d+",
				location: "daily|live",
				subdomain: "www|schach|ru|uk|ajedrez|fr|scacchi|sakk|schaken|szachy"
			},
			hosttokens: [
				["text", ".chess-dev.com"],
				["variable", "", "www|schach|ru|uk|ajedrez|fr|scacchi|sakk|schaken|szachy", "subdomain"]
			],
			methods: ["GET"],
			schemes: ["https"]
		},
		web_daily_callback_load_next_game: {
			tokens: [
				["text", "/next"],
				["variable", "/", "\\d+", "id"],
				["text", "/callback/daily/game"]
			],
			defaults: {
				subdomain: "www"
			},
			requirements: {
				id: "\\d+",
				subdomain: "www|schach|ru|uk|ajedrez|fr|scacchi|sakk|schaken|szachy"
			},
			hosttokens: [
				["text", ".chess-dev.com"],
				["variable", "", "www|schach|ru|uk|ajedrez|fr|scacchi|sakk|schaken|szachy", "subdomain"]
			],
			methods: [],
			schemes: ["https"]
		},
		web_callback_load_previous_game_archive: {
			tokens: [
				["text", "/previous"],
				["variable", "/", "\\d+", "id"],
				["variable", "/", "daily|live", "location"],
				["text", "/callback/archive/game"]
			],
			defaults: {
				subdomain: "www"
			},
			requirements: {
				id: "\\d+",
				location: "daily|live",
				subdomain: "www|schach|ru|uk|ajedrez|fr|scacchi|sakk|schaken|szachy"
			},
			hosttokens: [
				["text", ".chess-dev.com"],
				["variable", "", "www|schach|ru|uk|ajedrez|fr|scacchi|sakk|schaken|szachy", "subdomain"]
			],
			methods: ["GET"],
			schemes: ["https"]
		},
		web_daily_callback_load_previous_game: {
			tokens: [
				["text", "/previous"],
				["variable", "/", "\\d+", "id"],
				["text", "/callback/daily/game"]
			],
			defaults: {
				subdomain: "www"
			},
			requirements: {
				id: "\\d+",
				subdomain: "www|schach|ru|uk|ajedrez|fr|scacchi|sakk|schaken|szachy"
			},
			hosttokens: [
				["text", ".chess-dev.com"],
				["variable", "", "www|schach|ru|uk|ajedrez|fr|scacchi|sakk|schaken|szachy", "subdomain"]
			],
			methods: [],
			schemes: ["https"]
		},
		web_daily_callback_load_game: {
			tokens: [
				["variable", "/", "\\d+", "id"],
				["text", "/callback/daily/game"]
			],
			defaults: {
				subdomain: "www"
			},
			requirements: {
				id: "\\d+",
				subdomain: "www|schach|ru|uk|ajedrez|fr|scacchi|sakk|schaken|szachy"
			},
			hosttokens: [
				["text", ".chess-dev.com"],
				["variable", "", "www|schach|ru|uk|ajedrez|fr|scacchi|sakk|schaken|szachy", "subdomain"]
			],
			methods: [],
			schemes: ["https"]
		},
		web_tv_callback_schedule: {
			tokens: [
				["variable", "/", "[^/]++", "locale"],
				["text", "/chess-tv/callback/schedule"]
			],
			defaults: {
				locale: null,
				subdomain: "www"
			},
			requirements: {
				subdomain: "www|schach|ru|uk|ajedrez|fr|scacchi|sakk|schaken|szachy"
			},
			hosttokens: [
				["text", ".chess-dev.com"],
				["variable", "", "www|schach|ru|uk|ajedrez|fr|scacchi|sakk|schaken|szachy", "subdomain"]
			],
			methods: [],
			schemes: ["https"]
		},
		i18n_web_tv_callback_schedule: {
			tokens: [
				["variable", "/", "[^/]++", "locale"],
				["text", "/chess-tv/callback/schedule"],
				["variable", "/", "es|fr|de|pl|ru|sv|el|pt|it|zh|ja|ko|nl|hy|bg|hr|cs|da|fi|hu|lt|no|ro|sk|sl|tr|uk|af|ar|az|be|bs|et|fa|gl|he|hi|id|is|ka|lv|ms|pt-BR|sq|sr|vi|zh-HK|zh-TW|fil|nl-BE|bn|tk|uz|ca|ur|--locale--", "_locale"]
			],
			defaults: {
				locale: null,
				subdomain: "www",
				_locale: ""
			},
			requirements: {
				subdomain: "www|schach|ru|uk|ajedrez|fr|scacchi|sakk|schaken|szachy",
				_locale: "es|fr|de|pl|ru|sv|el|pt|it|zh|ja|ko|nl|hy|bg|hr|cs|da|fi|hu|lt|no|ro|sk|sl|tr|uk|af|ar|az|be|bs|et|fa|gl|he|hi|id|is|ka|lv|ms|pt-BR|sq|sr|vi|zh-HK|zh-TW|fil|nl-BE|bn|tk|uz|ca|ur|--locale--"
			},
			hosttokens: [
				["text", ".chess-dev.com"],
				["variable", "", "www|schach|ru|uk|ajedrez|fr|scacchi|sakk|schaken|szachy", "subdomain"]
			],
			methods: [],
			schemes: ["https"]
		},
		web_game_callback_shareable_chess_challenge: {
			tokens: [
				["text", "/callback/game/shareable/challenge"]
			],
			defaults: {
				subdomain: "www"
			},
			requirements: {
				subdomain: "www|schach|ru|uk|ajedrez|fr|scacchi|sakk|schaken|szachy"
			},
			hosttokens: [
				["text", ".chess-dev.com"],
				["variable", "", "www|schach|ru|uk|ajedrez|fr|scacchi|sakk|schaken|szachy", "subdomain"]
			],
			methods: ["POST"],
			schemes: ["https"]
		},
		web_game_seek_challenge: {
			tokens: [
				["variable", "/", "[^/]++", "shortUuid"],
				["text", "/challenge"]
			],
			defaults: {
				subdomain: "www"
			},
			requirements: {
				subdomain: "www|schach|ru|uk|ajedrez|fr|scacchi|sakk|schaken|szachy"
			},
			hosttokens: [
				["text", ".chess-dev.com"],
				["variable", "", "www|schach|ru|uk|ajedrez|fr|scacchi|sakk|schaken|szachy", "subdomain"]
			],
			methods: [],
			schemes: ["https"]
		},
		web_game_callback_daily_chess_challenge: {
			tokens: [
				["variable", "/", "[^/]++", "opponent"],
				["text", "/callback/game/daily/challenge"]
			],
			defaults: {
				subdomain: "www"
			},
			requirements: {
				subdomain: "www|schach|ru|uk|ajedrez|fr|scacchi|sakk|schaken|szachy"
			},
			hosttokens: [
				["text", ".chess-dev.com"],
				["variable", "", "www|schach|ru|uk|ajedrez|fr|scacchi|sakk|schaken|szachy", "subdomain"]
			],
			methods: ["POST"],
			schemes: ["https"]
		},
		web_game_callback_random_daily_chess_challenge: {
			tokens: [
				["text", "/callback/game/random/daily/challenge"]
			],
			defaults: {
				subdomain: "www"
			},
			requirements: {
				subdomain: "www|schach|ru|uk|ajedrez|fr|scacchi|sakk|schaken|szachy"
			},
			hosttokens: [
				["text", ".chess-dev.com"],
				["variable", "", "www|schach|ru|uk|ajedrez|fr|scacchi|sakk|schaken|szachy", "subdomain"]
			],
			methods: ["POST"],
			schemes: ["https"]
		},
		web_live_recent_time_control: {
			tokens: [
				["text", "/live/recent-time-control"]
			],
			defaults: {
				subdomain: "www"
			},
			requirements: {
				subdomain: "www|schach|ru|uk|ajedrez|fr|scacchi|sakk|schaken|szachy"
			},
			hosttokens: [
				["text", ".chess-dev.com"],
				["variable", "", "www|schach|ru|uk|ajedrez|fr|scacchi|sakk|schaken|szachy", "subdomain"]
			],
			methods: [],
			schemes: ["https"]
		},
		i18n_web_live_recent_time_control: {
			tokens: [
				["text", "/live/recent-time-control"],
				["variable", "/", "es|fr|de|pl|ru|sv|el|pt|it|zh|ja|ko|nl|hy|bg|hr|cs|da|fi|hu|lt|no|ro|sk|sl|tr|uk|af|ar|az|be|bs|et|fa|gl|he|hi|id|is|ka|lv|ms|pt-BR|sq|sr|vi|zh-HK|zh-TW|fil|nl-BE|bn|tk|uz|ca|ur|--locale--", "_locale"]
			],
			defaults: {
				subdomain: "www",
				_locale: ""
			},
			requirements: {
				subdomain: "www|schach|ru|uk|ajedrez|fr|scacchi|sakk|schaken|szachy",
				_locale: "es|fr|de|pl|ru|sv|el|pt|it|zh|ja|ko|nl|hy|bg|hr|cs|da|fi|hu|lt|no|ro|sk|sl|tr|uk|af|ar|az|be|bs|et|fa|gl|he|hi|id|is|ka|lv|ms|pt-BR|sq|sr|vi|zh-HK|zh-TW|fil|nl-BE|bn|tk|uz|ca|ur|--locale--"
			},
			hosttokens: [
				["text", ".chess-dev.com"],
				["variable", "", "www|schach|ru|uk|ajedrez|fr|scacchi|sakk|schaken|szachy", "subdomain"]
			],
			methods: [],
			schemes: ["https"]
		},
		pubapi_player_stats: {
			tokens: [
				["text", "/stats"],
				["variable", "/", "[^/]++", "username"],
				["text", "/pub/player"]
			],
			defaults: [],
			requirements: [],
			hosttokens: [
				["text", "api.chess-dev.com"]
			],
			methods: [],
			schemes: ["https"]
		},
		web_play_variant_chess960: {
			tokens: [
				["text", "/play/online/chess960"]
			],
			defaults: {
				subdomain: "www"
			},
			requirements: {
				subdomain: "www|schach|ru|uk|ajedrez|fr|scacchi|sakk|schaken|szachy"
			},
			hosttokens: [
				["text", ".chess-dev.com"],
				["variable", "", "www|schach|ru|uk|ajedrez|fr|scacchi|sakk|schaken|szachy", "subdomain"]
			],
			methods: [],
			schemes: ["https"]
		},
		i18n_web_play_variant_chess960: {
			tokens: [
				["text", "/play/online/chess960"],
				["variable", "/", "es|fr|de|pl|ru|sv|el|pt|it|zh|ja|ko|nl|hy|bg|hr|cs|da|fi|hu|lt|no|ro|sk|sl|tr|uk|af|ar|az|be|bs|et|fa|gl|he|hi|id|is|ka|lv|ms|pt-BR|sq|sr|vi|zh-HK|zh-TW|fil|nl-BE|bn|tk|uz|ca|ur|--locale--", "_locale"]
			],
			defaults: {
				subdomain: "www",
				_locale: ""
			},
			requirements: {
				subdomain: "www|schach|ru|uk|ajedrez|fr|scacchi|sakk|schaken|szachy",
				_locale: "es|fr|de|pl|ru|sv|el|pt|it|zh|ja|ko|nl|hy|bg|hr|cs|da|fi|hu|lt|no|ro|sk|sl|tr|uk|af|ar|az|be|bs|et|fa|gl|he|hi|id|is|ka|lv|ms|pt-BR|sq|sr|vi|zh-HK|zh-TW|fil|nl-BE|bn|tk|uz|ca|ur|--locale--"
			},
			hosttokens: [
				["text", ".chess-dev.com"],
				["variable", "", "www|schach|ru|uk|ajedrez|fr|scacchi|sakk|schaken|szachy", "subdomain"]
			],
			methods: [],
			schemes: ["https"]
		},
		web_play_variant_3_check: {
			tokens: [
				["text", "/play/online/3-check"]
			],
			defaults: {
				subdomain: "www"
			},
			requirements: {
				subdomain: "www|schach|ru|uk|ajedrez|fr|scacchi|sakk|schaken|szachy"
			},
			hosttokens: [
				["text", ".chess-dev.com"],
				["variable", "", "www|schach|ru|uk|ajedrez|fr|scacchi|sakk|schaken|szachy", "subdomain"]
			],
			methods: [],
			schemes: ["https"]
		},
		i18n_web_play_variant_3_check: {
			tokens: [
				["text", "/play/online/3-check"],
				["variable", "/", "es|fr|de|pl|ru|sv|el|pt|it|zh|ja|ko|nl|hy|bg|hr|cs|da|fi|hu|lt|no|ro|sk|sl|tr|uk|af|ar|az|be|bs|et|fa|gl|he|hi|id|is|ka|lv|ms|pt-BR|sq|sr|vi|zh-HK|zh-TW|fil|nl-BE|bn|tk|uz|ca|ur|--locale--", "_locale"]
			],
			defaults: {
				subdomain: "www",
				_locale: ""
			},
			requirements: {
				subdomain: "www|schach|ru|uk|ajedrez|fr|scacchi|sakk|schaken|szachy",
				_locale: "es|fr|de|pl|ru|sv|el|pt|it|zh|ja|ko|nl|hy|bg|hr|cs|da|fi|hu|lt|no|ro|sk|sl|tr|uk|af|ar|az|be|bs|et|fa|gl|he|hi|id|is|ka|lv|ms|pt-BR|sq|sr|vi|zh-HK|zh-TW|fil|nl-BE|bn|tk|uz|ca|ur|--locale--"
			},
			hosttokens: [
				["text", ".chess-dev.com"],
				["variable", "", "www|schach|ru|uk|ajedrez|fr|scacchi|sakk|schaken|szachy", "subdomain"]
			],
			methods: [],
			schemes: ["https"]
		},
		web_play_variant_king_of_the_hill: {
			tokens: [
				["text", "/play/online/king-of-the-hill"]
			],
			defaults: {
				subdomain: "www"
			},
			requirements: {
				subdomain: "www|schach|ru|uk|ajedrez|fr|scacchi|sakk|schaken|szachy"
			},
			hosttokens: [
				["text", ".chess-dev.com"],
				["variable", "", "www|schach|ru|uk|ajedrez|fr|scacchi|sakk|schaken|szachy", "subdomain"]
			],
			methods: [],
			schemes: ["https"]
		},
		i18n_web_play_variant_king_of_the_hill: {
			tokens: [
				["text", "/play/online/king-of-the-hill"],
				["variable", "/", "es|fr|de|pl|ru|sv|el|pt|it|zh|ja|ko|nl|hy|bg|hr|cs|da|fi|hu|lt|no|ro|sk|sl|tr|uk|af|ar|az|be|bs|et|fa|gl|he|hi|id|is|ka|lv|ms|pt-BR|sq|sr|vi|zh-HK|zh-TW|fil|nl-BE|bn|tk|uz|ca|ur|--locale--", "_locale"]
			],
			defaults: {
				subdomain: "www",
				_locale: ""
			},
			requirements: {
				subdomain: "www|schach|ru|uk|ajedrez|fr|scacchi|sakk|schaken|szachy",
				_locale: "es|fr|de|pl|ru|sv|el|pt|it|zh|ja|ko|nl|hy|bg|hr|cs|da|fi|hu|lt|no|ro|sk|sl|tr|uk|af|ar|az|be|bs|et|fa|gl|he|hi|id|is|ka|lv|ms|pt-BR|sq|sr|vi|zh-HK|zh-TW|fil|nl-BE|bn|tk|uz|ca|ur|--locale--"
			},
			hosttokens: [
				["text", ".chess-dev.com"],
				["variable", "", "www|schach|ru|uk|ajedrez|fr|scacchi|sakk|schaken|szachy", "subdomain"]
			],
			methods: [],
			schemes: ["https"]
		},
		web_play_variant_crazyhouse: {
			tokens: [
				["text", "/play/online/crazyhouse"]
			],
			defaults: {
				subdomain: "www"
			},
			requirements: {
				subdomain: "www|schach|ru|uk|ajedrez|fr|scacchi|sakk|schaken|szachy"
			},
			hosttokens: [
				["text", ".chess-dev.com"],
				["variable", "", "www|schach|ru|uk|ajedrez|fr|scacchi|sakk|schaken|szachy", "subdomain"]
			],
			methods: [],
			schemes: ["https"]
		},
		i18n_web_play_variant_crazyhouse: {
			tokens: [
				["text", "/play/online/crazyhouse"],
				["variable", "/", "es|fr|de|pl|ru|sv|el|pt|it|zh|ja|ko|nl|hy|bg|hr|cs|da|fi|hu|lt|no|ro|sk|sl|tr|uk|af|ar|az|be|bs|et|fa|gl|he|hi|id|is|ka|lv|ms|pt-BR|sq|sr|vi|zh-HK|zh-TW|fil|nl-BE|bn|tk|uz|ca|ur|--locale--", "_locale"]
			],
			defaults: {
				subdomain: "www",
				_locale: ""
			},
			requirements: {
				subdomain: "www|schach|ru|uk|ajedrez|fr|scacchi|sakk|schaken|szachy",
				_locale: "es|fr|de|pl|ru|sv|el|pt|it|zh|ja|ko|nl|hy|bg|hr|cs|da|fi|hu|lt|no|ro|sk|sl|tr|uk|af|ar|az|be|bs|et|fa|gl|he|hi|id|is|ka|lv|ms|pt-BR|sq|sr|vi|zh-HK|zh-TW|fil|nl-BE|bn|tk|uz|ca|ur|--locale--"
			},
			hosttokens: [
				["text", ".chess-dev.com"],
				["variable", "", "www|schach|ru|uk|ajedrez|fr|scacchi|sakk|schaken|szachy", "subdomain"]
			],
			methods: [],
			schemes: ["https"]
		},
		web_play_variant_doubles_bughouse: {
			tokens: [
				["text", "/play/online/doubles-bughouse"]
			],
			defaults: {
				subdomain: "www"
			},
			requirements: {
				subdomain: "www|schach|ru|uk|ajedrez|fr|scacchi|sakk|schaken|szachy"
			},
			hosttokens: [
				["text", ".chess-dev.com"],
				["variable", "", "www|schach|ru|uk|ajedrez|fr|scacchi|sakk|schaken|szachy", "subdomain"]
			],
			methods: [],
			schemes: ["https"]
		},
		i18n_web_play_variant_doubles_bughouse: {
			tokens: [
				["text", "/play/online/doubles-bughouse"],
				["variable", "/", "es|fr|de|pl|ru|sv|el|pt|it|zh|ja|ko|nl|hy|bg|hr|cs|da|fi|hu|lt|no|ro|sk|sl|tr|uk|af|ar|az|be|bs|et|fa|gl|he|hi|id|is|ka|lv|ms|pt-BR|sq|sr|vi|zh-HK|zh-TW|fil|nl-BE|bn|tk|uz|ca|ur|--locale--", "_locale"]
			],
			defaults: {
				subdomain: "www",
				_locale: ""
			},
			requirements: {
				subdomain: "www|schach|ru|uk|ajedrez|fr|scacchi|sakk|schaken|szachy",
				_locale: "es|fr|de|pl|ru|sv|el|pt|it|zh|ja|ko|nl|hy|bg|hr|cs|da|fi|hu|lt|no|ro|sk|sl|tr|uk|af|ar|az|be|bs|et|fa|gl|he|hi|id|is|ka|lv|ms|pt-BR|sq|sr|vi|zh-HK|zh-TW|fil|nl-BE|bn|tk|uz|ca|ur|--locale--"
			},
			hosttokens: [
				["text", ".chess-dev.com"],
				["variable", "", "www|schach|ru|uk|ajedrez|fr|scacchi|sakk|schaken|szachy", "subdomain"]
			],
			methods: [],
			schemes: ["https"]
		},
		web_user_callback_id_to_user_data: {
			tokens: [
				["text", "/callback/user/id-to-data"]
			],
			defaults: {
				subdomain: "www"
			},
			requirements: {
				subdomain: "www|schach|ru|uk|ajedrez|fr|scacchi|sakk|schaken|szachy"
			},
			hosttokens: [
				["text", ".chess-dev.com"],
				["variable", "", "www|schach|ru|uk|ajedrez|fr|scacchi|sakk|schaken|szachy", "subdomain"]
			],
			methods: [],
			schemes: ["https"]
		},
		web_live_game: {
			tokens: [
				["variable", "/", "[^/]++", "id"],
				["text", "/live/game"]
			],
			defaults: {
				subdomain: "www"
			},
			requirements: {
				subdomain: "www|schach|ru|uk|ajedrez|fr|scacchi|sakk|schaken|szachy"
			},
			hosttokens: [
				["text", ".chess-dev.com"],
				["variable", "", "www|schach|ru|uk|ajedrez|fr|scacchi|sakk|schaken|szachy", "subdomain"]
			],
			methods: [],
			schemes: ["https"]
		},
		i18n_web_live_game: {
			tokens: [
				["variable", "/", "[^/]++", "id"],
				["text", "/live/game"],
				["variable", "/", "es|fr|de|pl|ru|sv|el|pt|it|zh|ja|ko|nl|hy|bg|hr|cs|da|fi|hu|lt|no|ro|sk|sl|tr|uk|af|ar|az|be|bs|et|fa|gl|he|hi|id|is|ka|lv|ms|pt-BR|sq|sr|vi|zh-HK|zh-TW|fil|nl-BE|bn|tk|uz|ca|ur|--locale--", "_locale"]
			],
			defaults: {
				subdomain: "www",
				_locale: ""
			},
			requirements: {
				subdomain: "www|schach|ru|uk|ajedrez|fr|scacchi|sakk|schaken|szachy",
				_locale: "es|fr|de|pl|ru|sv|el|pt|it|zh|ja|ko|nl|hy|bg|hr|cs|da|fi|hu|lt|no|ro|sk|sl|tr|uk|af|ar|az|be|bs|et|fa|gl|he|hi|id|is|ka|lv|ms|pt-BR|sq|sr|vi|zh-HK|zh-TW|fil|nl-BE|bn|tk|uz|ca|ur|--locale--"
			},
			hosttokens: [
				["text", ".chess-dev.com"],
				["variable", "", "www|schach|ru|uk|ajedrez|fr|scacchi|sakk|schaken|szachy", "subdomain"]
			],
			methods: [],
			schemes: ["https"]
		},
		web_game_computer: {
			tokens: [
				["variable", "/", "[^/]++", "id"],
				["text", "/game/computer"]
			],
			defaults: {
				subdomain: "www"
			},
			requirements: {
				subdomain: "www|schach|ru|uk|ajedrez|fr|scacchi|sakk|schaken|szachy"
			},
			hosttokens: [
				["text", ".chess-dev.com"],
				["variable", "", "www|schach|ru|uk|ajedrez|fr|scacchi|sakk|schaken|szachy", "subdomain"]
			],
			methods: [],
			schemes: ["https"]
		},
		i18n_web_game_computer: {
			tokens: [
				["variable", "/", "[^/]++", "id"],
				["text", "/game/computer"],
				["variable", "/", "es|fr|de|pl|ru|sv|el|pt|it|zh|ja|ko|nl|hy|bg|hr|cs|da|fi|hu|lt|no|ro|sk|sl|tr|uk|af|ar|az|be|bs|et|fa|gl|he|hi|id|is|ka|lv|ms|pt-BR|sq|sr|vi|zh-HK|zh-TW|fil|nl-BE|bn|tk|uz|ca|ur|--locale--", "_locale"]
			],
			defaults: {
				subdomain: "www",
				_locale: ""
			},
			requirements: {
				subdomain: "www|schach|ru|uk|ajedrez|fr|scacchi|sakk|schaken|szachy",
				_locale: "es|fr|de|pl|ru|sv|el|pt|it|zh|ja|ko|nl|hy|bg|hr|cs|da|fi|hu|lt|no|ro|sk|sl|tr|uk|af|ar|az|be|bs|et|fa|gl|he|hi|id|is|ka|lv|ms|pt-BR|sq|sr|vi|zh-HK|zh-TW|fil|nl-BE|bn|tk|uz|ca|ur|--locale--"
			},
			hosttokens: [
				["text", ".chess-dev.com"],
				["variable", "", "www|schach|ru|uk|ajedrez|fr|scacchi|sakk|schaken|szachy", "subdomain"]
			],
			methods: [],
			schemes: ["https"]
		},
		web_play_create_tournament: {
			tokens: [
				["variable", "/", "[^/]++", "id"],
				["text", "/play/create-club-tournament"]
			],
			defaults: {
				subdomain: "www"
			},
			requirements: {
				subdomain: "www|schach|ru|uk|ajedrez|fr|scacchi|sakk|schaken|szachy"
			},
			hosttokens: [
				["text", ".chess-dev.com"],
				["variable", "", "www|schach|ru|uk|ajedrez|fr|scacchi|sakk|schaken|szachy", "subdomain"]
			],
			methods: [],
			schemes: ["https"]
		},
		i18n_web_play_create_tournament: {
			tokens: [
				["variable", "/", "[^/]++", "id"],
				["text", "/play/create-club-tournament"],
				["variable", "/", "es|fr|de|pl|ru|sv|el|pt|it|zh|ja|ko|nl|hy|bg|hr|cs|da|fi|hu|lt|no|ro|sk|sl|tr|uk|af|ar|az|be|bs|et|fa|gl|he|hi|id|is|ka|lv|ms|pt-BR|sq|sr|vi|zh-HK|zh-TW|fil|nl-BE|bn|tk|uz|ca|ur|--locale--", "_locale"]
			],
			defaults: {
				subdomain: "www",
				_locale: ""
			},
			requirements: {
				subdomain: "www|schach|ru|uk|ajedrez|fr|scacchi|sakk|schaken|szachy",
				_locale: "es|fr|de|pl|ru|sv|el|pt|it|zh|ja|ko|nl|hy|bg|hr|cs|da|fi|hu|lt|no|ro|sk|sl|tr|uk|af|ar|az|be|bs|et|fa|gl|he|hi|id|is|ka|lv|ms|pt-BR|sq|sr|vi|zh-HK|zh-TW|fil|nl-BE|bn|tk|uz|ca|ur|--locale--"
			},
			hosttokens: [
				["text", ".chess-dev.com"],
				["variable", "", "www|schach|ru|uk|ajedrez|fr|scacchi|sakk|schaken|szachy", "subdomain"]
			],
			methods: [],
			schemes: ["https"]
		},
		web_play_daily: {
			tokens: [
				["text", "/play/online/daily"]
			],
			defaults: {
				subdomain: "www"
			},
			requirements: {
				subdomain: "www|schach|ru|uk|ajedrez|fr|scacchi|sakk|schaken|szachy"
			},
			hosttokens: [
				["text", ".chess-dev.com"],
				["variable", "", "www|schach|ru|uk|ajedrez|fr|scacchi|sakk|schaken|szachy", "subdomain"]
			],
			methods: [],
			schemes: ["https"]
		},
		i18n_web_play_daily: {
			tokens: [
				["text", "/play/online/daily"],
				["variable", "/", "es|fr|de|pl|ru|sv|el|pt|it|zh|ja|ko|nl|hy|bg|hr|cs|da|fi|hu|lt|no|ro|sk|sl|tr|uk|af|ar|az|be|bs|et|fa|gl|he|hi|id|is|ka|lv|ms|pt-BR|sq|sr|vi|zh-HK|zh-TW|fil|nl-BE|bn|tk|uz|ca|ur|--locale--", "_locale"]
			],
			defaults: {
				subdomain: "www",
				_locale: ""
			},
			requirements: {
				subdomain: "www|schach|ru|uk|ajedrez|fr|scacchi|sakk|schaken|szachy",
				_locale: "es|fr|de|pl|ru|sv|el|pt|it|zh|ja|ko|nl|hy|bg|hr|cs|da|fi|hu|lt|no|ro|sk|sl|tr|uk|af|ar|az|be|bs|et|fa|gl|he|hi|id|is|ka|lv|ms|pt-BR|sq|sr|vi|zh-HK|zh-TW|fil|nl-BE|bn|tk|uz|ca|ur|--locale--"
			},
			hosttokens: [
				["text", ".chess-dev.com"],
				["variable", "", "www|schach|ru|uk|ajedrez|fr|scacchi|sakk|schaken|szachy", "subdomain"]
			],
			methods: [],
			schemes: ["https"]
		},
		web_game_daily: {
			tokens: [
				["variable", "/", "[^/]++", "id"],
				["text", "/game/daily"]
			],
			defaults: {
				subdomain: "www"
			},
			requirements: {
				subdomain: "www|schach|ru|uk|ajedrez|fr|scacchi|sakk|schaken|szachy"
			},
			hosttokens: [
				["text", ".chess-dev.com"],
				["variable", "", "www|schach|ru|uk|ajedrez|fr|scacchi|sakk|schaken|szachy", "subdomain"]
			],
			methods: [],
			schemes: ["https"]
		},
		i18n_web_game_daily: {
			tokens: [
				["variable", "/", "[^/]++", "id"],
				["text", "/game/daily"],
				["variable", "/", "es|fr|de|pl|ru|sv|el|pt|it|zh|ja|ko|nl|hy|bg|hr|cs|da|fi|hu|lt|no|ro|sk|sl|tr|uk|af|ar|az|be|bs|et|fa|gl|he|hi|id|is|ka|lv|ms|pt-BR|sq|sr|vi|zh-HK|zh-TW|fil|nl-BE|bn|tk|uz|ca|ur|--locale--", "_locale"]
			],
			defaults: {
				subdomain: "www",
				_locale: ""
			},
			requirements: {
				subdomain: "www|schach|ru|uk|ajedrez|fr|scacchi|sakk|schaken|szachy",
				_locale: "es|fr|de|pl|ru|sv|el|pt|it|zh|ja|ko|nl|hy|bg|hr|cs|da|fi|hu|lt|no|ro|sk|sl|tr|uk|af|ar|az|be|bs|et|fa|gl|he|hi|id|is|ka|lv|ms|pt-BR|sq|sr|vi|zh-HK|zh-TW|fil|nl-BE|bn|tk|uz|ca|ur|--locale--"
			},
			hosttokens: [
				["text", ".chess-dev.com"],
				["variable", "", "www|schach|ru|uk|ajedrez|fr|scacchi|sakk|schaken|szachy", "subdomain"]
			],
			methods: [],
			schemes: ["https"]
		},
		web_daily_seek: {
			tokens: [
				["variable", "/", "[^/]++", "id"],
				["text", "/daily/seek"]
			],
			defaults: {
				subdomain: "www"
			},
			requirements: {
				subdomain: "www|schach|ru|uk|ajedrez|fr|scacchi|sakk|schaken|szachy"
			},
			hosttokens: [
				["text", ".chess-dev.com"],
				["variable", "", "www|schach|ru|uk|ajedrez|fr|scacchi|sakk|schaken|szachy", "subdomain"]
			],
			methods: [],
			schemes: ["https"]
		},
		web_play_friend: {
			tokens: [
				["text", "/play/online/friend"]
			],
			defaults: {
				subdomain: "www"
			},
			requirements: {
				subdomain: "www|schach|ru|uk|ajedrez|fr|scacchi|sakk|schaken|szachy"
			},
			hosttokens: [
				["text", ".chess-dev.com"],
				["variable", "", "www|schach|ru|uk|ajedrez|fr|scacchi|sakk|schaken|szachy", "subdomain"]
			],
			methods: [],
			schemes: ["https"]
		},
		i18n_web_play_friend: {
			tokens: [
				["text", "/play/online/friend"],
				["variable", "/", "es|fr|de|pl|ru|sv|el|pt|it|zh|ja|ko|nl|hy|bg|hr|cs|da|fi|hu|lt|no|ro|sk|sl|tr|uk|af|ar|az|be|bs|et|fa|gl|he|hi|id|is|ka|lv|ms|pt-BR|sq|sr|vi|zh-HK|zh-TW|fil|nl-BE|bn|tk|uz|ca|ur|--locale--", "_locale"]
			],
			defaults: {
				subdomain: "www",
				_locale: ""
			},
			requirements: {
				subdomain: "www|schach|ru|uk|ajedrez|fr|scacchi|sakk|schaken|szachy",
				_locale: "es|fr|de|pl|ru|sv|el|pt|it|zh|ja|ko|nl|hy|bg|hr|cs|da|fi|hu|lt|no|ro|sk|sl|tr|uk|af|ar|az|be|bs|et|fa|gl|he|hi|id|is|ka|lv|ms|pt-BR|sq|sr|vi|zh-HK|zh-TW|fil|nl-BE|bn|tk|uz|ca|ur|--locale--"
			},
			hosttokens: [
				["text", ".chess-dev.com"],
				["variable", "", "www|schach|ru|uk|ajedrez|fr|scacchi|sakk|schaken|szachy", "subdomain"]
			],
			methods: [],
			schemes: ["https"]
		},
		web_play_live_arena: {
			tokens: [
				["variable", "/", "[^/]++", "id"],
				["text", "/play/arena"]
			],
			defaults: {
				subdomain: "www"
			},
			requirements: {
				subdomain: "www|schach|ru|uk|ajedrez|fr|scacchi|sakk|schaken|szachy"
			},
			hosttokens: [
				["text", ".chess-dev.com"],
				["variable", "", "www|schach|ru|uk|ajedrez|fr|scacchi|sakk|schaken|szachy", "subdomain"]
			],
			methods: [],
			schemes: ["https"]
		},
		i18n_web_play_live_arena: {
			tokens: [
				["variable", "/", "[^/]++", "id"],
				["text", "/play/arena"],
				["variable", "/", "es|fr|de|pl|ru|sv|el|pt|it|zh|ja|ko|nl|hy|bg|hr|cs|da|fi|hu|lt|no|ro|sk|sl|tr|uk|af|ar|az|be|bs|et|fa|gl|he|hi|id|is|ka|lv|ms|pt-BR|sq|sr|vi|zh-HK|zh-TW|fil|nl-BE|bn|tk|uz|ca|ur|--locale--", "_locale"]
			],
			defaults: {
				subdomain: "www",
				_locale: ""
			},
			requirements: {
				subdomain: "www|schach|ru|uk|ajedrez|fr|scacchi|sakk|schaken|szachy",
				_locale: "es|fr|de|pl|ru|sv|el|pt|it|zh|ja|ko|nl|hy|bg|hr|cs|da|fi|hu|lt|no|ro|sk|sl|tr|uk|af|ar|az|be|bs|et|fa|gl|he|hi|id|is|ka|lv|ms|pt-BR|sq|sr|vi|zh-HK|zh-TW|fil|nl-BE|bn|tk|uz|ca|ur|--locale--"
			},
			hosttokens: [
				["text", ".chess-dev.com"],
				["variable", "", "www|schach|ru|uk|ajedrez|fr|scacchi|sakk|schaken|szachy", "subdomain"]
			],
			methods: [],
			schemes: ["https"]
		},
		web_play_live_team_match: {
			tokens: [
				["variable", "/", "[^/]++", "id"],
				["text", "/play/match"]
			],
			defaults: {
				subdomain: "www"
			},
			requirements: {
				subdomain: "www|schach|ru|uk|ajedrez|fr|scacchi|sakk|schaken|szachy"
			},
			hosttokens: [
				["text", ".chess-dev.com"],
				["variable", "", "www|schach|ru|uk|ajedrez|fr|scacchi|sakk|schaken|szachy", "subdomain"]
			],
			methods: [],
			schemes: ["https"]
		},
		i18n_web_play_live_team_match: {
			tokens: [
				["variable", "/", "[^/]++", "id"],
				["text", "/play/match"],
				["variable", "/", "es|fr|de|pl|ru|sv|el|pt|it|zh|ja|ko|nl|hy|bg|hr|cs|da|fi|hu|lt|no|ro|sk|sl|tr|uk|af|ar|az|be|bs|et|fa|gl|he|hi|id|is|ka|lv|ms|pt-BR|sq|sr|vi|zh-HK|zh-TW|fil|nl-BE|bn|tk|uz|ca|ur|--locale--", "_locale"]
			],
			defaults: {
				subdomain: "www",
				_locale: ""
			},
			requirements: {
				subdomain: "www|schach|ru|uk|ajedrez|fr|scacchi|sakk|schaken|szachy",
				_locale: "es|fr|de|pl|ru|sv|el|pt|it|zh|ja|ko|nl|hy|bg|hr|cs|da|fi|hu|lt|no|ro|sk|sl|tr|uk|af|ar|az|be|bs|et|fa|gl|he|hi|id|is|ka|lv|ms|pt-BR|sq|sr|vi|zh-HK|zh-TW|fil|nl-BE|bn|tk|uz|ca|ur|--locale--"
			},
			hosttokens: [
				["text", ".chess-dev.com"],
				["variable", "", "www|schach|ru|uk|ajedrez|fr|scacchi|sakk|schaken|szachy", "subdomain"]
			],
			methods: [],
			schemes: ["https"]
		},
		web_play_live_tournament: {
			tokens: [
				["variable", "/", "[^/]++", "id"],
				["text", "/play/tournament"]
			],
			defaults: {
				subdomain: "www"
			},
			requirements: {
				subdomain: "www|schach|ru|uk|ajedrez|fr|scacchi|sakk|schaken|szachy"
			},
			hosttokens: [
				["text", ".chess-dev.com"],
				["variable", "", "www|schach|ru|uk|ajedrez|fr|scacchi|sakk|schaken|szachy", "subdomain"]
			],
			methods: [],
			schemes: ["https"]
		},
		i18n_web_play_live_tournament: {
			tokens: [
				["variable", "/", "[^/]++", "id"],
				["text", "/play/tournament"],
				["variable", "/", "es|fr|de|pl|ru|sv|el|pt|it|zh|ja|ko|nl|hy|bg|hr|cs|da|fi|hu|lt|no|ro|sk|sl|tr|uk|af|ar|az|be|bs|et|fa|gl|he|hi|id|is|ka|lv|ms|pt-BR|sq|sr|vi|zh-HK|zh-TW|fil|nl-BE|bn|tk|uz|ca|ur|--locale--", "_locale"]
			],
			defaults: {
				subdomain: "www",
				_locale: ""
			},
			requirements: {
				subdomain: "www|schach|ru|uk|ajedrez|fr|scacchi|sakk|schaken|szachy",
				_locale: "es|fr|de|pl|ru|sv|el|pt|it|zh|ja|ko|nl|hy|bg|hr|cs|da|fi|hu|lt|no|ro|sk|sl|tr|uk|af|ar|az|be|bs|et|fa|gl|he|hi|id|is|ka|lv|ms|pt-BR|sq|sr|vi|zh-HK|zh-TW|fil|nl-BE|bn|tk|uz|ca|ur|--locale--"
			},
			hosttokens: [
				["text", ".chess-dev.com"],
				["variable", "", "www|schach|ru|uk|ajedrez|fr|scacchi|sakk|schaken|szachy", "subdomain"]
			],
			methods: [],
			schemes: ["https"]
		},
		web_play_new: {
			tokens: [
				["text", "/play/online/new"]
			],
			defaults: {
				subdomain: "www"
			},
			requirements: {
				subdomain: "www|schach|ru|uk|ajedrez|fr|scacchi|sakk|schaken|szachy"
			},
			hosttokens: [
				["text", ".chess-dev.com"],
				["variable", "", "www|schach|ru|uk|ajedrez|fr|scacchi|sakk|schaken|szachy", "subdomain"]
			],
			methods: [],
			schemes: ["https"]
		},
		i18n_web_play_new: {
			tokens: [
				["text", "/play/online/new"],
				["variable", "/", "es|fr|de|pl|ru|sv|el|pt|it|zh|ja|ko|nl|hy|bg|hr|cs|da|fi|hu|lt|no|ro|sk|sl|tr|uk|af|ar|az|be|bs|et|fa|gl|he|hi|id|is|ka|lv|ms|pt-BR|sq|sr|vi|zh-HK|zh-TW|fil|nl-BE|bn|tk|uz|ca|ur|--locale--", "_locale"]
			],
			defaults: {
				subdomain: "www",
				_locale: ""
			},
			requirements: {
				subdomain: "www|schach|ru|uk|ajedrez|fr|scacchi|sakk|schaken|szachy",
				_locale: "es|fr|de|pl|ru|sv|el|pt|it|zh|ja|ko|nl|hy|bg|hr|cs|da|fi|hu|lt|no|ro|sk|sl|tr|uk|af|ar|az|be|bs|et|fa|gl|he|hi|id|is|ka|lv|ms|pt-BR|sq|sr|vi|zh-HK|zh-TW|fil|nl-BE|bn|tk|uz|ca|ur|--locale--"
			},
			hosttokens: [
				["text", ".chess-dev.com"],
				["variable", "", "www|schach|ru|uk|ajedrez|fr|scacchi|sakk|schaken|szachy", "subdomain"]
			],
			methods: [],
			schemes: ["https"]
		},
		web_play: {
			tokens: [
				["text", "/play/online"]
			],
			defaults: {
				subdomain: "www"
			},
			requirements: {
				subdomain: "www|schach|ru|uk|ajedrez|fr|scacchi|sakk|schaken|szachy"
			},
			hosttokens: [
				["text", ".chess-dev.com"],
				["variable", "", "www|schach|ru|uk|ajedrez|fr|scacchi|sakk|schaken|szachy", "subdomain"]
			],
			methods: [],
			schemes: ["https"]
		},
		i18n_web_play: {
			tokens: [
				["text", "/play/online"],
				["variable", "/", "es|fr|de|pl|ru|sv|el|pt|it|zh|ja|ko|nl|hy|bg|hr|cs|da|fi|hu|lt|no|ro|sk|sl|tr|uk|af|ar|az|be|bs|et|fa|gl|he|hi|id|is|ka|lv|ms|pt-BR|sq|sr|vi|zh-HK|zh-TW|fil|nl-BE|bn|tk|uz|ca|ur|--locale--", "_locale"]
			],
			defaults: {
				subdomain: "www",
				_locale: ""
			},
			requirements: {
				subdomain: "www|schach|ru|uk|ajedrez|fr|scacchi|sakk|schaken|szachy",
				_locale: "es|fr|de|pl|ru|sv|el|pt|it|zh|ja|ko|nl|hy|bg|hr|cs|da|fi|hu|lt|no|ro|sk|sl|tr|uk|af|ar|az|be|bs|et|fa|gl|he|hi|id|is|ka|lv|ms|pt-BR|sq|sr|vi|zh-HK|zh-TW|fil|nl-BE|bn|tk|uz|ca|ur|--locale--"
			},
			hosttokens: [
				["text", ".chess-dev.com"],
				["variable", "", "www|schach|ru|uk|ajedrez|fr|scacchi|sakk|schaken|szachy", "subdomain"]
			],
			methods: [],
			schemes: ["https"]
		},
		web_game_uuid: {
			tokens: [
				["variable", "/", "[^/]++", "id"],
				["text", "/game"]
			],
			defaults: {
				subdomain: "www"
			},
			requirements: {
				subdomain: "www|schach|ru|uk|ajedrez|fr|scacchi|sakk|schaken|szachy"
			},
			hosttokens: [
				["text", ".chess-dev.com"],
				["variable", "", "www|schach|ru|uk|ajedrez|fr|scacchi|sakk|schaken|szachy", "subdomain"]
			],
			methods: [],
			schemes: ["https"]
		},
		i18n_web_game_uuid: {
			tokens: [
				["variable", "/", "[^/]++", "id"],
				["text", "/game"],
				["variable", "/", "es|fr|de|pl|ru|sv|el|pt|it|zh|ja|ko|nl|hy|bg|hr|cs|da|fi|hu|lt|no|ro|sk|sl|tr|uk|af|ar|az|be|bs|et|fa|gl|he|hi|id|is|ka|lv|ms|pt-BR|sq|sr|vi|zh-HK|zh-TW|fil|nl-BE|bn|tk|uz|ca|ur|--locale--", "_locale"]
			],
			defaults: {
				subdomain: "www",
				_locale: ""
			},
			requirements: {
				subdomain: "www|schach|ru|uk|ajedrez|fr|scacchi|sakk|schaken|szachy",
				_locale: "es|fr|de|pl|ru|sv|el|pt|it|zh|ja|ko|nl|hy|bg|hr|cs|da|fi|hu|lt|no|ro|sk|sl|tr|uk|af|ar|az|be|bs|et|fa|gl|he|hi|id|is|ka|lv|ms|pt-BR|sq|sr|vi|zh-HK|zh-TW|fil|nl-BE|bn|tk|uz|ca|ur|--locale--"
			},
			hosttokens: [
				["text", ".chess-dev.com"],
				["variable", "", "www|schach|ru|uk|ajedrez|fr|scacchi|sakk|schaken|szachy", "subdomain"]
			],
			methods: [],
			schemes: ["https"]
		},
		web_play_settings: {
			tokens: [
				["text", "/play/online/settings"]
			],
			defaults: {
				subdomain: "www"
			},
			requirements: {
				subdomain: "www|schach|ru|uk|ajedrez|fr|scacchi|sakk|schaken|szachy"
			},
			hosttokens: [
				["text", ".chess-dev.com"],
				["variable", "", "www|schach|ru|uk|ajedrez|fr|scacchi|sakk|schaken|szachy", "subdomain"]
			],
			methods: [],
			schemes: ["https"]
		},
		i18n_web_play_settings: {
			tokens: [
				["text", "/play/online/settings"],
				["variable", "/", "es|fr|de|pl|ru|sv|el|pt|it|zh|ja|ko|nl|hy|bg|hr|cs|da|fi|hu|lt|no|ro|sk|sl|tr|uk|af|ar|az|be|bs|et|fa|gl|he|hi|id|is|ka|lv|ms|pt-BR|sq|sr|vi|zh-HK|zh-TW|fil|nl-BE|bn|tk|uz|ca|ur|--locale--", "_locale"]
			],
			defaults: {
				subdomain: "www",
				_locale: ""
			},
			requirements: {
				subdomain: "www|schach|ru|uk|ajedrez|fr|scacchi|sakk|schaken|szachy",
				_locale: "es|fr|de|pl|ru|sv|el|pt|it|zh|ja|ko|nl|hy|bg|hr|cs|da|fi|hu|lt|no|ro|sk|sl|tr|uk|af|ar|az|be|bs|et|fa|gl|he|hi|id|is|ka|lv|ms|pt-BR|sq|sr|vi|zh-HK|zh-TW|fil|nl-BE|bn|tk|uz|ca|ur|--locale--"
			},
			hosttokens: [
				["text", ".chess-dev.com"],
				["variable", "", "www|schach|ru|uk|ajedrez|fr|scacchi|sakk|schaken|szachy", "subdomain"]
			],
			methods: [],
			schemes: ["https"]
		},
		web_play_tournaments: {
			tokens: [
				["text", "/play/online/tournaments"]
			],
			defaults: {
				subdomain: "www"
			},
			requirements: {
				subdomain: "www|schach|ru|uk|ajedrez|fr|scacchi|sakk|schaken|szachy"
			},
			hosttokens: [
				["text", ".chess-dev.com"],
				["variable", "", "www|schach|ru|uk|ajedrez|fr|scacchi|sakk|schaken|szachy", "subdomain"]
			],
			methods: [],
			schemes: ["https"]
		},
		i18n_web_play_tournaments: {
			tokens: [
				["text", "/play/online/tournaments"],
				["variable", "/", "es|fr|de|pl|ru|sv|el|pt|it|zh|ja|ko|nl|hy|bg|hr|cs|da|fi|hu|lt|no|ro|sk|sl|tr|uk|af|ar|az|be|bs|et|fa|gl|he|hi|id|is|ka|lv|ms|pt-BR|sq|sr|vi|zh-HK|zh-TW|fil|nl-BE|bn|tk|uz|ca|ur|--locale--", "_locale"]
			],
			defaults: {
				subdomain: "www",
				_locale: ""
			},
			requirements: {
				subdomain: "www|schach|ru|uk|ajedrez|fr|scacchi|sakk|schaken|szachy",
				_locale: "es|fr|de|pl|ru|sv|el|pt|it|zh|ja|ko|nl|hy|bg|hr|cs|da|fi|hu|lt|no|ro|sk|sl|tr|uk|af|ar|az|be|bs|et|fa|gl|he|hi|id|is|ka|lv|ms|pt-BR|sq|sr|vi|zh-HK|zh-TW|fil|nl-BE|bn|tk|uz|ca|ur|--locale--"
			},
			hosttokens: [
				["text", ".chess-dev.com"],
				["variable", "", "www|schach|ru|uk|ajedrez|fr|scacchi|sakk|schaken|szachy", "subdomain"]
			],
			methods: [],
			schemes: ["https"]
		},
		web_play_settings_get_settings_callback: {
			tokens: [
				["text", "/callback/play/settings/get-settings"]
			],
			defaults: {
				subdomain: "www"
			},
			requirements: {
				subdomain: "www|schach|ru|uk|ajedrez|fr|scacchi|sakk|schaken|szachy"
			},
			hosttokens: [
				["text", ".chess-dev.com"],
				["variable", "", "www|schach|ru|uk|ajedrez|fr|scacchi|sakk|schaken|szachy", "subdomain"]
			],
			methods: [],
			schemes: ["https"]
		},
		web_play_settings_set_timestamps_callback: {
			tokens: [
				["variable", "/", "0|1|2", "showTimestamps"],
				["text", "/callback/play/settings/set-timestamps"]
			],
			defaults: {
				subdomain: "www"
			},
			requirements: {
				showTimestamps: "0|1|2",
				subdomain: "www|schach|ru|uk|ajedrez|fr|scacchi|sakk|schaken|szachy"
			},
			hosttokens: [
				["text", ".chess-dev.com"],
				["variable", "", "www|schach|ru|uk|ajedrez|fr|scacchi|sakk|schaken|szachy", "subdomain"]
			],
			methods: ["POST"],
			schemes: ["https"]
		},
		web_play_settings_auto_promote_callback: {
			tokens: [
				["variable", "/", "0|1", "autoPromote"],
				["text", "/callback/play/settings/auto-promote"]
			],
			defaults: {
				subdomain: "www"
			},
			requirements: {
				autoPromote: "0|1",
				subdomain: "www|schach|ru|uk|ajedrez|fr|scacchi|sakk|schaken|szachy"
			},
			hosttokens: [
				["text", ".chess-dev.com"],
				["variable", "", "www|schach|ru|uk|ajedrez|fr|scacchi|sakk|schaken|szachy", "subdomain"]
			],
			methods: ["POST"],
			schemes: ["https"]
		},
		web_play_settings_set_confirm_resign_callback: {
			tokens: [
				["variable", "/", "0|1", "confirmResign"],
				["text", "/callback/play/settings/set-confirm-resign"]
			],
			defaults: {
				subdomain: "www"
			},
			requirements: {
				confirmResign: "0|1",
				subdomain: "www|schach|ru|uk|ajedrez|fr|scacchi|sakk|schaken|szachy"
			},
			hosttokens: [
				["text", ".chess-dev.com"],
				["variable", "", "www|schach|ru|uk|ajedrez|fr|scacchi|sakk|schaken|szachy", "subdomain"]
			],
			methods: ["POST"],
			schemes: ["https"]
		},
		web_play_settings_auto_switch_callback: {
			tokens: [
				["variable", "/", "0|1", "autoSwitch"],
				["text", "/callback/play/settings/auto-switch"]
			],
			defaults: {
				subdomain: "www"
			},
			requirements: {
				autoSwitch: "0|1",
				subdomain: "www|schach|ru|uk|ajedrez|fr|scacchi|sakk|schaken|szachy"
			},
			hosttokens: [
				["text", ".chess-dev.com"],
				["variable", "", "www|schach|ru|uk|ajedrez|fr|scacchi|sakk|schaken|szachy", "subdomain"]
			],
			methods: ["POST"],
			schemes: ["https"]
		},
		web_play_settings_low_time_warning_callback: {
			tokens: [
				["variable", "/", "0|1", "lowTimeWarning"],
				["text", "/callback/play/settings/low-time-warning"]
			],
			defaults: {
				subdomain: "www"
			},
			requirements: {
				lowTimeWarning: "0|1",
				subdomain: "www|schach|ru|uk|ajedrez|fr|scacchi|sakk|schaken|szachy"
			},
			hosttokens: [
				["text", ".chess-dev.com"],
				["variable", "", "www|schach|ru|uk|ajedrez|fr|scacchi|sakk|schaken|szachy", "subdomain"]
			],
			methods: ["POST"],
			schemes: ["https"]
		},
		web_play_settings_premoves_callback: {
			tokens: [
				["variable", "/", "0|1", "premove"],
				["text", "/callback/play/settings/premoves"]
			],
			defaults: {
				subdomain: "www"
			},
			requirements: {
				premove: "0|1",
				subdomain: "www|schach|ru|uk|ajedrez|fr|scacchi|sakk|schaken|szachy"
			},
			hosttokens: [
				["text", ".chess-dev.com"],
				["variable", "", "www|schach|ru|uk|ajedrez|fr|scacchi|sakk|schaken|szachy", "subdomain"]
			],
			methods: ["POST"],
			schemes: ["https"]
		},
		web_play_settings_multi_games_callback: {
			tokens: [
				["variable", "/", "0|1", "multiGames"],
				["text", "/callback/play/settings/multi-games"]
			],
			defaults: {
				subdomain: "www"
			},
			requirements: {
				multiGames: "0|1",
				subdomain: "www|schach|ru|uk|ajedrez|fr|scacchi|sakk|schaken|szachy"
			},
			hosttokens: [
				["text", ".chess-dev.com"],
				["variable", "", "www|schach|ru|uk|ajedrez|fr|scacchi|sakk|schaken|szachy", "subdomain"]
			],
			methods: ["POST"],
			schemes: ["https"]
		},
		web_play_settings_set_auto_analysis_callback: {
			tokens: [
				["variable", "/", "0|1", "autoAnalysis"],
				["text", "/callback/play/settings/set-auto-analysis"]
			],
			defaults: {
				subdomain: "www"
			},
			requirements: {
				autoAnalysis: "0|1",
				subdomain: "www|schach|ru|uk|ajedrez|fr|scacchi|sakk|schaken|szachy"
			},
			hosttokens: [
				["text", ".chess-dev.com"],
				["variable", "", "www|schach|ru|uk|ajedrez|fr|scacchi|sakk|schaken|szachy", "subdomain"]
			],
			methods: ["POST"],
			schemes: ["https"]
		},
		web_play_settings_set_friend_exempt_callback: {
			tokens: [
				["variable", "/", "0|1", "friendExempt"],
				["text", "/callback/play/settings/set-friend-exempt"]
			],
			defaults: {
				subdomain: "www"
			},
			requirements: {
				friendExempt: "0|1",
				subdomain: "www|schach|ru|uk|ajedrez|fr|scacchi|sakk|schaken|szachy"
			},
			hosttokens: [
				["text", ".chess-dev.com"],
				["variable", "", "www|schach|ru|uk|ajedrez|fr|scacchi|sakk|schaken|szachy", "subdomain"]
			],
			methods: ["POST"],
			schemes: ["https"]
		},
		web_play_settings_set_allow_challenges_callback: {
			tokens: [
				["variable", "/", "0|1|2", "allowChallenges"],
				["text", "/callback/play/settings/set-allow-challenges"]
			],
			defaults: {
				subdomain: "www"
			},
			requirements: {
				allowChallenges: "0|1|2",
				subdomain: "www|schach|ru|uk|ajedrez|fr|scacchi|sakk|schaken|szachy"
			},
			hosttokens: [
				["text", ".chess-dev.com"],
				["variable", "", "www|schach|ru|uk|ajedrez|fr|scacchi|sakk|schaken|szachy", "subdomain"]
			],
			methods: ["POST"],
			schemes: ["https"]
		},
		web_play_settings_allow_offline_challenges_callback: {
			tokens: [
				["variable", "/", "0|1", "allowOfflineChallenges"],
				["text", "/callback/play/settings/allow-offline-challenges"]
			],
			defaults: {
				subdomain: "www"
			},
			requirements: {
				allowOfflineChallenges: "0|1",
				subdomain: "www|schach|ru|uk|ajedrez|fr|scacchi|sakk|schaken|szachy"
			},
			hosttokens: [
				["text", ".chess-dev.com"],
				["variable", "", "www|schach|ru|uk|ajedrez|fr|scacchi|sakk|schaken|szachy", "subdomain"]
			],
			methods: ["POST"],
			schemes: ["https"]
		},
		web_play_settings_set_always_use_focus_callback: {
			tokens: [
				["variable", "/", "0|1", "alwaysUseFocus"],
				["text", "/callback/play/settings/set-always-use-focus"]
			],
			defaults: {
				subdomain: "www"
			},
			requirements: {
				alwaysUseFocus: "0|1",
				subdomain: "www|schach|ru|uk|ajedrez|fr|scacchi|sakk|schaken|szachy"
			},
			hosttokens: [
				["text", ".chess-dev.com"],
				["variable", "", "www|schach|ru|uk|ajedrez|fr|scacchi|sakk|schaken|szachy", "subdomain"]
			],
			methods: ["POST"],
			schemes: ["https"]
		},
		web_play_settings_event_announcement_callback: {
			tokens: [
				["variable", "/", "\\d+", "eventAnnouncement"],
				["text", "/callback/play/settings/event-announcement"]
			],
			defaults: {
				subdomain: "www"
			},
			requirements: {
				eventAnnouncement: "\\d+",
				subdomain: "www|schach|ru|uk|ajedrez|fr|scacchi|sakk|schaken|szachy"
			},
			hosttokens: [
				["text", ".chess-dev.com"],
				["variable", "", "www|schach|ru|uk|ajedrez|fr|scacchi|sakk|schaken|szachy", "subdomain"]
			],
			methods: ["POST"],
			schemes: ["https"]
		},
		web_play_settings_challenge_alerts_callback: {
			tokens: [
				["variable", "/", "0|1|2", "challengePopupAlert"],
				["text", "/callback/play/settings/challenge-alerts"]
			],
			defaults: {
				subdomain: "www"
			},
			requirements: {
				challengePopupAlert: "0|1|2",
				subdomain: "www|schach|ru|uk|ajedrez|fr|scacchi|sakk|schaken|szachy"
			},
			hosttokens: [
				["text", ".chess-dev.com"],
				["variable", "", "www|schach|ru|uk|ajedrez|fr|scacchi|sakk|schaken|szachy", "subdomain"]
			],
			methods: ["POST"],
			schemes: ["https"]
		},
		web_play_settings_seek_min_rating_callback: {
			tokens: [
				["variable", "/", "-?\\d+", "seekMinRating"],
				["text", "/callback/play/settings/seek-min-rating"]
			],
			defaults: {
				subdomain: "www"
			},
			requirements: {
				seekMinRating: "-?\\d+",
				subdomain: "www|schach|ru|uk|ajedrez|fr|scacchi|sakk|schaken|szachy"
			},
			hosttokens: [
				["text", ".chess-dev.com"],
				["variable", "", "www|schach|ru|uk|ajedrez|fr|scacchi|sakk|schaken|szachy", "subdomain"]
			],
			methods: ["POST"],
			schemes: ["https"]
		},
		web_play_settings_seek_max_rating_callback: {
			tokens: [
				["variable", "/", "-?\\d+", "seekMaxRating"],
				["text", "/callback/play/settings/seek-max-rating"]
			],
			defaults: {
				subdomain: "www"
			},
			requirements: {
				seekMaxRating: "-?\\d+",
				subdomain: "www|schach|ru|uk|ajedrez|fr|scacchi|sakk|schaken|szachy"
			},
			hosttokens: [
				["text", ".chess-dev.com"],
				["variable", "", "www|schach|ru|uk|ajedrez|fr|scacchi|sakk|schaken|szachy", "subdomain"]
			],
			methods: ["POST"],
			schemes: ["https"]
		},
		web_play_settings_challenge_min_rating_callback: {
			tokens: [
				["variable", "/", "[^/]++", "challengeMinRating"],
				["text", "/callback/play/settings/challenge-min-rating"]
			],
			defaults: {
				subdomain: "www"
			},
			requirements: {
				subdomain: "www|schach|ru|uk|ajedrez|fr|scacchi|sakk|schaken|szachy"
			},
			hosttokens: [
				["text", ".chess-dev.com"],
				["variable", "", "www|schach|ru|uk|ajedrez|fr|scacchi|sakk|schaken|szachy", "subdomain"]
			],
			methods: ["POST"],
			schemes: ["https"]
		},
		web_play_settings_challenge_max_rating_callback: {
			tokens: [
				["variable", "/", "[^/]++", "challengeMaxRating"],
				["text", "/callback/play/settings/challenge-max-rating"]
			],
			defaults: {
				subdomain: "www"
			},
			requirements: {
				subdomain: "www|schach|ru|uk|ajedrez|fr|scacchi|sakk|schaken|szachy"
			},
			hosttokens: [
				["text", ".chess-dev.com"],
				["variable", "", "www|schach|ru|uk|ajedrez|fr|scacchi|sakk|schaken|szachy", "subdomain"]
			],
			methods: ["POST"],
			schemes: ["https"]
		},
		web_play_settings_seek_filter_rated_only_callback: {
			tokens: [
				["variable", "/", "0|1", "seekFilterRatedOnly"],
				["text", "/callback/play/settings/seek-filter-rated-only"]
			],
			defaults: {
				subdomain: "www"
			},
			requirements: {
				seekFilterRatedOnly: "0|1",
				subdomain: "www|schach|ru|uk|ajedrez|fr|scacchi|sakk|schaken|szachy"
			},
			hosttokens: [
				["text", ".chess-dev.com"],
				["variable", "", "www|schach|ru|uk|ajedrez|fr|scacchi|sakk|schaken|szachy", "subdomain"]
			],
			methods: ["POST"],
			schemes: ["https"]
		},
		web_play_settings_seek_filter_premium_only_callback: {
			tokens: [
				["variable", "/", "0|1", "seekFilterPremiumOnly"],
				["text", "/callback/play/settings/seek-filter-premium-only"]
			],
			defaults: {
				subdomain: "www"
			},
			requirements: {
				seekFilterPremiumOnly: "0|1",
				subdomain: "www|schach|ru|uk|ajedrez|fr|scacchi|sakk|schaken|szachy"
			},
			hosttokens: [
				["text", ".chess-dev.com"],
				["variable", "", "www|schach|ru|uk|ajedrez|fr|scacchi|sakk|schaken|szachy", "subdomain"]
			],
			methods: ["POST"],
			schemes: ["https"]
		},
		web_play_settings_seek_filter_hide_variant_callback: {
			tokens: [
				["variable", "/", "[^/]++", "seekFilterHideVariants"],
				["text", "/callback/play/settings/seek-filter-hide-variant"]
			],
			defaults: {
				subdomain: "www"
			},
			requirements: {
				subdomain: "www|schach|ru|uk|ajedrez|fr|scacchi|sakk|schaken|szachy"
			},
			hosttokens: [
				["text", ".chess-dev.com"],
				["variable", "", "www|schach|ru|uk|ajedrez|fr|scacchi|sakk|schaken|szachy", "subdomain"]
			],
			methods: ["POST"],
			schemes: ["https"]
		},
		web_play_settings_set_game_chat_callback: {
			tokens: [
				["variable", "/", "0|1|2", "gameChat"],
				["text", "/callback/play/settings/set-game-chat"]
			],
			defaults: {
				subdomain: "www"
			},
			requirements: {
				gameChat: "0|1|2",
				subdomain: "www|schach|ru|uk|ajedrez|fr|scacchi|sakk|schaken|szachy"
			},
			hosttokens: [
				["text", ".chess-dev.com"],
				["variable", "", "www|schach|ru|uk|ajedrez|fr|scacchi|sakk|schaken|szachy", "subdomain"]
			],
			methods: ["POST"],
			schemes: ["https"]
		},
		web_play_settings_seek_game_type_callback: {
			tokens: [
				["variable", "/", "[^/]++", "seekGameType"],
				["text", "/callback/play/settings/seek-game-type"]
			],
			defaults: {
				subdomain: "www"
			},
			requirements: {
				subdomain: "www|schach|ru|uk|ajedrez|fr|scacchi|sakk|schaken|szachy"
			},
			hosttokens: [
				["text", ".chess-dev.com"],
				["variable", "", "www|schach|ru|uk|ajedrez|fr|scacchi|sakk|schaken|szachy", "subdomain"]
			],
			methods: ["POST"],
			schemes: ["https"]
		},
		web_play_settings_seek_base_time_chess_callback: {
			tokens: [
				["variable", "/", "\\d+", "seekBaseTimeChess"],
				["text", "/callback/play/settings/seek-base-time-chess"]
			],
			defaults: {
				subdomain: "www"
			},
			requirements: {
				seekBaseTimeChess: "\\d+",
				subdomain: "www|schach|ru|uk|ajedrez|fr|scacchi|sakk|schaken|szachy"
			},
			hosttokens: [
				["text", ".chess-dev.com"],
				["variable", "", "www|schach|ru|uk|ajedrez|fr|scacchi|sakk|schaken|szachy", "subdomain"]
			],
			methods: ["POST"],
			schemes: ["https"]
		},
		web_play_settings_seek_increment_chess_callback: {
			tokens: [
				["variable", "/", "\\d+", "seekIncrementChess"],
				["text", "/callback/play/settings/seek-increment-chess"]
			],
			defaults: {
				subdomain: "www"
			},
			requirements: {
				seekIncrementChess: "\\d+",
				subdomain: "www|schach|ru|uk|ajedrez|fr|scacchi|sakk|schaken|szachy"
			},
			hosttokens: [
				["text", ".chess-dev.com"],
				["variable", "", "www|schach|ru|uk|ajedrez|fr|scacchi|sakk|schaken|szachy", "subdomain"]
			],
			methods: ["POST"],
			schemes: ["https"]
		},
		web_play_settings_seek_base_variants_time_callback: {
			tokens: [
				["variable", "/", "\\d+", "seekBaseTimeVariants"],
				["text", "/callback/play/settings/seek-base-time-variants"]
			],
			defaults: {
				subdomain: "www"
			},
			requirements: {
				seekBaseTimeVariants: "\\d+",
				subdomain: "www|schach|ru|uk|ajedrez|fr|scacchi|sakk|schaken|szachy"
			},
			hosttokens: [
				["text", ".chess-dev.com"],
				["variable", "", "www|schach|ru|uk|ajedrez|fr|scacchi|sakk|schaken|szachy", "subdomain"]
			],
			methods: ["POST"],
			schemes: ["https"]
		},
		web_play_settings_seek_increment_variants_callback: {
			tokens: [
				["variable", "/", "\\d+", "seekIncrementVariants"],
				["text", "/callback/play/settings/seek-increment-variants"]
			],
			defaults: {
				subdomain: "www"
			},
			requirements: {
				seekIncrementVariants: "\\d+",
				subdomain: "www|schach|ru|uk|ajedrez|fr|scacchi|sakk|schaken|szachy"
			},
			hosttokens: [
				["text", ".chess-dev.com"],
				["variable", "", "www|schach|ru|uk|ajedrez|fr|scacchi|sakk|schaken|szachy", "subdomain"]
			],
			methods: ["POST"],
			schemes: ["https"]
		},
		web_play_settings_evaluation_bar_callback: {
			tokens: [
				["variable", "/", "0|1", "evaluationBar"],
				["text", "/callback/play/settings/evaluation-bar"]
			],
			defaults: {
				subdomain: "www"
			},
			requirements: {
				evaluationBar: "0|1",
				subdomain: "www|schach|ru|uk|ajedrez|fr|scacchi|sakk|schaken|szachy"
			},
			hosttokens: [
				["text", ".chess-dev.com"],
				["variable", "", "www|schach|ru|uk|ajedrez|fr|scacchi|sakk|schaken|szachy", "subdomain"]
			],
			methods: ["POST"],
			schemes: ["https"]
		},
		web_play_settings_engine_evaluation_callback: {
			tokens: [
				["variable", "/", "0|1", "engineEvaluation"],
				["text", "/callback/play/settings/engine-evaluation"]
			],
			defaults: {
				subdomain: "www"
			},
			requirements: {
				engineEvaluation: "0|1",
				subdomain: "www|schach|ru|uk|ajedrez|fr|scacchi|sakk|schaken|szachy"
			},
			hosttokens: [
				["text", ".chess-dev.com"],
				["variable", "", "www|schach|ru|uk|ajedrez|fr|scacchi|sakk|schaken|szachy", "subdomain"]
			],
			methods: ["POST"],
			schemes: ["https"]
		},
		web_play_settings_set_after_moving_callback: {
			tokens: [
				["variable", "/", "my_games|stay|next_game", "postMoveAction"],
				["text", "/callback/play/settings/set-after-moving"]
			],
			defaults: {
				subdomain: "www"
			},
			requirements: {
				postMoveAction: "my_games|stay|next_game",
				subdomain: "www|schach|ru|uk|ajedrez|fr|scacchi|sakk|schaken|szachy"
			},
			hosttokens: [
				["text", ".chess-dev.com"],
				["variable", "", "www|schach|ru|uk|ajedrez|fr|scacchi|sakk|schaken|szachy", "subdomain"]
			],
			methods: ["POST"],
			schemes: ["https"]
		},
		web_play_settings_set_confirm_move_callback: {
			tokens: [
				["variable", "/", "0|1", "confirmMove"],
				["text", "/callback/play/settings/set-confirm-move"]
			],
			defaults: {
				subdomain: "www"
			},
			requirements: {
				confirmMove: "0|1",
				subdomain: "www|schach|ru|uk|ajedrez|fr|scacchi|sakk|schaken|szachy"
			},
			hosttokens: [
				["text", ".chess-dev.com"],
				["variable", "", "www|schach|ru|uk|ajedrez|fr|scacchi|sakk|schaken|szachy", "subdomain"]
			],
			methods: ["POST"],
			schemes: ["https"]
		},
		web_play_settings_set_max_game_count_callback: {
			tokens: [
				["variable", "/", "\\d+", "maxGameCount"],
				["text", "/callback/play/settings/set-max-game-count"]
			],
			defaults: {
				subdomain: "www"
			},
			requirements: {
				maxGameCount: "\\d+",
				subdomain: "www|schach|ru|uk|ajedrez|fr|scacchi|sakk|schaken|szachy"
			},
			hosttokens: [
				["text", ".chess-dev.com"],
				["variable", "", "www|schach|ru|uk|ajedrez|fr|scacchi|sakk|schaken|szachy", "subdomain"]
			],
			methods: ["POST"],
			schemes: ["https"]
		},
		web_play_settings_set_min_days_per_move_callback: {
			tokens: [
				["variable", "/", "\\d+", "minDaysPerMove"],
				["text", "/callback/play/settings/set-min-days-per-move"]
			],
			defaults: {
				subdomain: "www"
			},
			requirements: {
				minDaysPerMove: "\\d+",
				subdomain: "www|schach|ru|uk|ajedrez|fr|scacchi|sakk|schaken|szachy"
			},
			hosttokens: [
				["text", ".chess-dev.com"],
				["variable", "", "www|schach|ru|uk|ajedrez|fr|scacchi|sakk|schaken|szachy", "subdomain"]
			],
			methods: ["POST"],
			schemes: ["https"]
		},
		web_play_settings_set_max_days_per_move_callback: {
			tokens: [
				["variable", "/", "\\d+", "maxDaysPerMove"],
				["text", "/callback/play/settings/set-max-days-per-move"]
			],
			defaults: {
				subdomain: "www"
			},
			requirements: {
				maxDaysPerMove: "\\d+",
				subdomain: "www|schach|ru|uk|ajedrez|fr|scacchi|sakk|schaken|szachy"
			},
			hosttokens: [
				["text", ".chess-dev.com"],
				["variable", "", "www|schach|ru|uk|ajedrez|fr|scacchi|sakk|schaken|szachy", "subdomain"]
			],
			methods: ["POST"],
			schemes: ["https"]
		},
		web_play_settings_set_auto_win_on_time_callback: {
			tokens: [
				["variable", "/", "0|1", "autoWinOnTime"],
				["text", "/callback/play/settings/set-auto-win-on-time"]
			],
			defaults: {
				subdomain: "www"
			},
			requirements: {
				autoWinOnTime: "0|1",
				subdomain: "www|schach|ru|uk|ajedrez|fr|scacchi|sakk|schaken|szachy"
			},
			hosttokens: [
				["text", ".chess-dev.com"],
				["variable", "", "www|schach|ru|uk|ajedrez|fr|scacchi|sakk|schaken|szachy", "subdomain"]
			],
			methods: ["POST"],
			schemes: ["https"]
		},
		web_play_settings_seek_rated_callback: {
			tokens: [
				["variable", "/", "0|1", "seekRated"],
				["text", "/callback/play/settings/seek-rated"]
			],
			defaults: {
				subdomain: "www"
			},
			requirements: {
				seekRated: "0|1",
				subdomain: "www|schach|ru|uk|ajedrez|fr|scacchi|sakk|schaken|szachy"
			},
			hosttokens: [
				["text", ".chess-dev.com"],
				["variable", "", "www|schach|ru|uk|ajedrez|fr|scacchi|sakk|schaken|szachy", "subdomain"]
			],
			methods: ["POST"],
			schemes: ["https"]
		},
		web_play_settings_auto_top_callback: {
			tokens: [
				["variable", "/", "0|1", "autoTop"],
				["text", "/callback/play/settings/auto-top"]
			],
			defaults: {
				subdomain: "www"
			},
			requirements: {
				autoTop: "0|1",
				subdomain: "www|schach|ru|uk|ajedrez|fr|scacchi|sakk|schaken|szachy"
			},
			hosttokens: [
				["text", ".chess-dev.com"],
				["variable", "", "www|schach|ru|uk|ajedrez|fr|scacchi|sakk|schaken|szachy", "subdomain"]
			],
			methods: ["POST"],
			schemes: ["https"]
		},
		web_user_callback_lifetime_score: {
			tokens: [
				["variable", "/", "[^/]++", "opponent"],
				["variable", "/", "[^/]++", "user"],
				["text", "/callback/user/lifetime-score"]
			],
			defaults: {
				subdomain: "www"
			},
			requirements: {
				subdomain: "www|schach|ru|uk|ajedrez|fr|scacchi|sakk|schaken|szachy"
			},
			hosttokens: [
				["text", ".chess-dev.com"],
				["variable", "", "www|schach|ru|uk|ajedrez|fr|scacchi|sakk|schaken|szachy", "subdomain"]
			],
			methods: [],
			schemes: ["https"]
		},
		web_game_callback_ratings: {
			tokens: [
				["variable", "/", "[^/]++", "username"],
				["text", "/callback/game_seek/ratings"]
			],
			defaults: {
				username: null,
				subdomain: "www"
			},
			requirements: {
				subdomain: "www|schach|ru|uk|ajedrez|fr|scacchi|sakk|schaken|szachy"
			},
			hosttokens: [
				["text", ".chess-dev.com"],
				["variable", "", "www|schach|ru|uk|ajedrez|fr|scacchi|sakk|schaken|szachy", "subdomain"]
			],
			methods: ["GET"],
			schemes: ["https"]
		},
		web_blog_view: {
			tokens: [
				["variable", "/", ".+", "url"],
				["text", "/blog"]
			],
			defaults: {
				subdomain: "www"
			},
			requirements: {
				url: ".+",
				subdomain: "www|schach|ru|uk|ajedrez|fr|scacchi|sakk|schaken|szachy"
			},
			hosttokens: [
				["text", ".chess-dev.com"],
				["variable", "", "www|schach|ru|uk|ajedrez|fr|scacchi|sakk|schaken|szachy", "subdomain"]
			],
			methods: [],
			schemes: ["https"]
		},
		i18n_web_blog_view: {
			tokens: [
				["variable", "/", ".+", "url"],
				["text", "/blog"],
				["variable", "/", "es|fr|de|pl|ru|sv|el|pt|it|zh|ja|ko|nl|hy|bg|hr|cs|da|fi|hu|lt|no|ro|sk|sl|tr|uk|af|ar|az|be|bs|et|fa|gl|he|hi|id|is|ka|lv|ms|pt-BR|sq|sr|vi|zh-HK|zh-TW|fil|nl-BE|bn|tk|uz|ca|ur|--locale--", "_locale"]
			],
			defaults: {
				subdomain: "www",
				_locale: ""
			},
			requirements: {
				url: ".+",
				subdomain: "www|schach|ru|uk|ajedrez|fr|scacchi|sakk|schaken|szachy",
				_locale: "es|fr|de|pl|ru|sv|el|pt|it|zh|ja|ko|nl|hy|bg|hr|cs|da|fi|hu|lt|no|ro|sk|sl|tr|uk|af|ar|az|be|bs|et|fa|gl|he|hi|id|is|ka|lv|ms|pt-BR|sq|sr|vi|zh-HK|zh-TW|fil|nl-BE|bn|tk|uz|ca|ur|--locale--"
			},
			hosttokens: [
				["text", ".chess-dev.com"],
				["variable", "", "www|schach|ru|uk|ajedrez|fr|scacchi|sakk|schaken|szachy", "subdomain"]
			],
			methods: [],
			schemes: ["https"]
		},
		web_chess_variants: {
			tokens: [
				["variable", "/", ".+", "variant"],
				["text", "/variants"]
			],
			defaults: {
				variant: null,
				subdomain: "www"
			},
			requirements: {
				variant: ".+",
				subdomain: "www|schach|ru|uk|ajedrez|fr|scacchi|sakk|schaken|szachy"
			},
			hosttokens: [
				["text", ".chess-dev.com"],
				["variable", "", "www|schach|ru|uk|ajedrez|fr|scacchi|sakk|schaken|szachy", "subdomain"]
			],
			methods: ["GET"],
			schemes: ["https"]
		},
		i18n_web_chess_variants: {
			tokens: [
				["variable", "/", ".+", "variant"],
				["text", "/variants"],
				["variable", "/", "es|fr|de|pl|ru|sv|el|pt|it|zh|ja|ko|nl|hy|bg|hr|cs|da|fi|hu|lt|no|ro|sk|sl|tr|uk|af|ar|az|be|bs|et|fa|gl|he|hi|id|is|ka|lv|ms|pt-BR|sq|sr|vi|zh-HK|zh-TW|fil|nl-BE|bn|tk|uz|ca|ur|--locale--", "_locale"]
			],
			defaults: {
				variant: null,
				subdomain: "www",
				_locale: ""
			},
			requirements: {
				variant: ".+",
				subdomain: "www|schach|ru|uk|ajedrez|fr|scacchi|sakk|schaken|szachy",
				_locale: "es|fr|de|pl|ru|sv|el|pt|it|zh|ja|ko|nl|hy|bg|hr|cs|da|fi|hu|lt|no|ro|sk|sl|tr|uk|af|ar|az|be|bs|et|fa|gl|he|hi|id|is|ka|lv|ms|pt-BR|sq|sr|vi|zh-HK|zh-TW|fil|nl-BE|bn|tk|uz|ca|ur|--locale--"
			},
			hosttokens: [
				["text", ".chess-dev.com"],
				["variable", "", "www|schach|ru|uk|ajedrez|fr|scacchi|sakk|schaken|szachy", "subdomain"]
			],
			methods: ["GET"],
			schemes: ["https"]
		},
		web_classroom: {
			tokens: [
				["text", "/classroom"]
			],
			defaults: {
				subdomain: "www"
			},
			requirements: {
				subdomain: "www|schach|ru|uk|ajedrez|fr|scacchi|sakk|schaken|szachy"
			},
			hosttokens: [
				["text", ".chess-dev.com"],
				["variable", "", "www|schach|ru|uk|ajedrez|fr|scacchi|sakk|schaken|szachy", "subdomain"]
			],
			methods: [],
			schemes: ["https"]
		},
		i18n_web_classroom: {
			tokens: [
				["text", "/classroom"],
				["variable", "/", "es|fr|de|pl|ru|sv|el|pt|it|zh|ja|ko|nl|hy|bg|hr|cs|da|fi|hu|lt|no|ro|sk|sl|tr|uk|af|ar|az|be|bs|et|fa|gl|he|hi|id|is|ka|lv|ms|pt-BR|sq|sr|vi|zh-HK|zh-TW|fil|nl-BE|bn|tk|uz|ca|ur|--locale--", "_locale"]
			],
			defaults: {
				subdomain: "www",
				_locale: ""
			},
			requirements: {
				subdomain: "www|schach|ru|uk|ajedrez|fr|scacchi|sakk|schaken|szachy",
				_locale: "es|fr|de|pl|ru|sv|el|pt|it|zh|ja|ko|nl|hy|bg|hr|cs|da|fi|hu|lt|no|ro|sk|sl|tr|uk|af|ar|az|be|bs|et|fa|gl|he|hi|id|is|ka|lv|ms|pt-BR|sq|sr|vi|zh-HK|zh-TW|fil|nl-BE|bn|tk|uz|ca|ur|--locale--"
			},
			hosttokens: [
				["text", ".chess-dev.com"],
				["variable", "", "www|schach|ru|uk|ajedrez|fr|scacchi|sakk|schaken|szachy", "subdomain"]
			],
			methods: [],
			schemes: ["https"]
		},
		web_member_callback_block_member: {
			tokens: [
				["variable", "/", "[^/]++", "username"],
				["text", "/callback/member/block"]
			],
			defaults: {
				subdomain: "www"
			},
			requirements: {
				subdomain: "www|schach|ru|uk|ajedrez|fr|scacchi|sakk|schaken|szachy"
			},
			hosttokens: [
				["text", ".chess-dev.com"],
				["variable", "", "www|schach|ru|uk|ajedrez|fr|scacchi|sakk|schaken|szachy", "subdomain"]
			],
			methods: ["POST"],
			schemes: ["https"]
		},
		web_user_callback_delete_comment: {
			tokens: [
				["variable", "/", "\\d+", "id"],
				["text", "/callback/comment"]
			],
			defaults: {
				subdomain: "www"
			},
			requirements: {
				id: "\\d+",
				subdomain: "www|schach|ru|uk|ajedrez|fr|scacchi|sakk|schaken|szachy"
			},
			hosttokens: [
				["text", ".chess-dev.com"],
				["variable", "", "www|schach|ru|uk|ajedrez|fr|scacchi|sakk|schaken|szachy", "subdomain"]
			],
			methods: ["DELETE"],
			schemes: ["https"]
		},
		web_user_callback_get_available_flair: {
			tokens: [
				["variable", "/", "[^/]++", "username"],
				["text", "/callback/user/get-available-flair"]
			],
			defaults: {
				subdomain: "www"
			},
			requirements: {
				subdomain: "www|schach|ru|uk|ajedrez|fr|scacchi|sakk|schaken|szachy"
			},
			hosttokens: [
				["text", ".chess-dev.com"],
				["variable", "", "www|schach|ru|uk|ajedrez|fr|scacchi|sakk|schaken|szachy", "subdomain"]
			],
			methods: [],
			schemes: ["https"]
		},
		web_user_callback_load_notes: {
			tokens: [
				["text", "/callback/user/notes"]
			],
			defaults: {
				subdomain: "www"
			},
			requirements: {
				subdomain: "www|schach|ru|uk|ajedrez|fr|scacchi|sakk|schaken|szachy"
			},
			hosttokens: [
				["text", ".chess-dev.com"],
				["variable", "", "www|schach|ru|uk|ajedrez|fr|scacchi|sakk|schaken|szachy", "subdomain"]
			],
			methods: ["GET"],
			schemes: ["https"]
		},
		web_member_callback_mute_account: {
			tokens: [
				["variable", "/", "[^/]++", "user"],
				["text", "/callback/member/mute-account"]
			],
			defaults: {
				subdomain: "www"
			},
			requirements: {
				subdomain: "www|schach|ru|uk|ajedrez|fr|scacchi|sakk|schaken|szachy"
			},
			hosttokens: [
				["text", ".chess-dev.com"],
				["variable", "", "www|schach|ru|uk|ajedrez|fr|scacchi|sakk|schaken|szachy", "subdomain"]
			],
			methods: ["POST"],
			schemes: ["https"]
		},
		web_user_callback_post_note: {
			tokens: [
				["text", "/callback/user/note"]
			],
			defaults: {
				subdomain: "www"
			},
			requirements: {
				subdomain: "www|schach|ru|uk|ajedrez|fr|scacchi|sakk|schaken|szachy"
			},
			hosttokens: [
				["text", ".chess-dev.com"],
				["variable", "", "www|schach|ru|uk|ajedrez|fr|scacchi|sakk|schaken|szachy", "subdomain"]
			],
			methods: ["POST"],
			schemes: ["https"]
		},
		web_user_callback_set_flair: {
			tokens: [
				["text", "/callback/user/set-flair"]
			],
			defaults: {
				subdomain: "www"
			},
			requirements: {
				subdomain: "www|schach|ru|uk|ajedrez|fr|scacchi|sakk|schaken|szachy"
			},
			hosttokens: [
				["text", ".chess-dev.com"],
				["variable", "", "www|schach|ru|uk|ajedrez|fr|scacchi|sakk|schaken|szachy", "subdomain"]
			],
			methods: ["POST"],
			schemes: ["https"]
		},
		web_user_callback_set_status: {
			tokens: [
				["text", "/callback/user/set-status"]
			],
			defaults: {
				subdomain: "www"
			},
			requirements: {
				subdomain: "www|schach|ru|uk|ajedrez|fr|scacchi|sakk|schaken|szachy"
			},
			hosttokens: [
				["text", ".chess-dev.com"],
				["variable", "", "www|schach|ru|uk|ajedrez|fr|scacchi|sakk|schaken|szachy", "subdomain"]
			],
			methods: ["POST"],
			schemes: ["https"]
		},
		web_user_settings_edit: {
			tokens: [
				["text", "/settings"]
			],
			defaults: {
				subdomain: "www"
			},
			requirements: {
				subdomain: "www|schach|ru|uk|ajedrez|fr|scacchi|sakk|schaken|szachy"
			},
			hosttokens: [
				["text", ".chess-dev.com"],
				["variable", "", "www|schach|ru|uk|ajedrez|fr|scacchi|sakk|schaken|szachy", "subdomain"]
			],
			methods: [],
			schemes: ["https"]
		},
		web_policies_community: {
			tokens: [
				["text", "/legal/community"]
			],
			defaults: {
				subdomain: "www"
			},
			requirements: {
				subdomain: "www|schach|ru|uk|ajedrez|fr|scacchi|sakk|schaken|szachy"
			},
			hosttokens: [
				["text", ".chess-dev.com"],
				["variable", "", "www|schach|ru|uk|ajedrez|fr|scacchi|sakk|schaken|szachy", "subdomain"]
			],
			methods: [],
			schemes: ["https"]
		},
		i18n_web_policies_community: {
			tokens: [
				["text", "/legal/community"],
				["variable", "/", "es|fr|de|pl|ru|sv|el|pt|it|zh|ja|ko|nl|hy|bg|hr|cs|da|fi|hu|lt|no|ro|sk|sl|tr|uk|af|ar|az|be|bs|et|fa|gl|he|hi|id|is|ka|lv|ms|pt-BR|sq|sr|vi|zh-HK|zh-TW|fil|nl-BE|bn|tk|uz|ca|ur|--locale--", "_locale"]
			],
			defaults: {
				subdomain: "www",
				_locale: ""
			},
			requirements: {
				subdomain: "www|schach|ru|uk|ajedrez|fr|scacchi|sakk|schaken|szachy",
				_locale: "es|fr|de|pl|ru|sv|el|pt|it|zh|ja|ko|nl|hy|bg|hr|cs|da|fi|hu|lt|no|ro|sk|sl|tr|uk|af|ar|az|be|bs|et|fa|gl|he|hi|id|is|ka|lv|ms|pt-BR|sq|sr|vi|zh-HK|zh-TW|fil|nl-BE|bn|tk|uz|ca|ur|--locale--"
			},
			hosttokens: [
				["text", ".chess-dev.com"],
				["variable", "", "www|schach|ru|uk|ajedrez|fr|scacchi|sakk|schaken|szachy", "subdomain"]
			],
			methods: [],
			schemes: ["https"]
		},
		web_member_callback_disable: {
			tokens: [
				["variable", "/", "\\d+", "id"],
				["text", "/callback/members/disable"]
			],
			defaults: {
				subdomain: "www"
			},
			requirements: {
				id: "\\d+",
				subdomain: "www|schach|ru|uk|ajedrez|fr|scacchi|sakk|schaken|szachy"
			},
			hosttokens: [
				["text", ".chess-dev.com"],
				["variable", "", "www|schach|ru|uk|ajedrez|fr|scacchi|sakk|schaken|szachy", "subdomain"]
			],
			methods: ["DELETE"],
			schemes: ["https"]
		},
		web_member_enable: {
			tokens: [
				["variable", "/", "\\d+", "id"],
				["text", "/members/enable"]
			],
			defaults: {
				subdomain: "www"
			},
			requirements: {
				id: "\\d+",
				subdomain: "www|schach|ru|uk|ajedrez|fr|scacchi|sakk|schaken|szachy"
			},
			hosttokens: [
				["text", ".chess-dev.com"],
				["variable", "", "www|schach|ru|uk|ajedrez|fr|scacchi|sakk|schaken|szachy", "subdomain"]
			],
			methods: [],
			schemes: ["https"]
		},
		web_master_player_view: {
			tokens: [
				["variable", "/", ".+", "url"],
				["text", "/players"]
			],
			defaults: {
				subdomain: "www"
			},
			requirements: {
				url: ".+",
				subdomain: "www|schach|ru|uk|ajedrez|fr|scacchi|sakk|schaken|szachy"
			},
			hosttokens: [
				["text", ".chess-dev.com"],
				["variable", "", "www|schach|ru|uk|ajedrez|fr|scacchi|sakk|schaken|szachy", "subdomain"]
			],
			methods: ["GET"],
			schemes: ["https"]
		},
		i18n_web_master_player_view: {
			tokens: [
				["variable", "/", ".+", "url"],
				["text", "/players"],
				["variable", "/", "es|fr|de|pl|ru|sv|el|pt|it|zh|ja|ko|nl|hy|bg|hr|cs|da|fi|hu|lt|no|ro|sk|sl|tr|uk|af|ar|az|be|bs|et|fa|gl|he|hi|id|is|ka|lv|ms|pt-BR|sq|sr|vi|zh-HK|zh-TW|fil|nl-BE|bn|tk|uz|ca|ur|--locale--", "_locale"]
			],
			defaults: {
				subdomain: "www",
				_locale: ""
			},
			requirements: {
				url: ".+",
				subdomain: "www|schach|ru|uk|ajedrez|fr|scacchi|sakk|schaken|szachy",
				_locale: "es|fr|de|pl|ru|sv|el|pt|it|zh|ja|ko|nl|hy|bg|hr|cs|da|fi|hu|lt|no|ro|sk|sl|tr|uk|af|ar|az|be|bs|et|fa|gl|he|hi|id|is|ka|lv|ms|pt-BR|sq|sr|vi|zh-HK|zh-TW|fil|nl-BE|bn|tk|uz|ca|ur|--locale--"
			},
			hosttokens: [
				["text", ".chess-dev.com"],
				["variable", "", "www|schach|ru|uk|ajedrez|fr|scacchi|sakk|schaken|szachy", "subdomain"]
			],
			methods: ["GET"],
			schemes: ["https"]
		},
		web_member_mute: {
			tokens: [
				["variable", "/", "[^/]++", "username"],
				["text", "/member/mute"]
			],
			defaults: {
				subdomain: "www"
			},
			requirements: {
				subdomain: "www|schach|ru|uk|ajedrez|fr|scacchi|sakk|schaken|szachy"
			},
			hosttokens: [
				["text", ".chess-dev.com"],
				["variable", "", "www|schach|ru|uk|ajedrez|fr|scacchi|sakk|schaken|szachy", "subdomain"]
			],
			methods: ["POST"],
			schemes: ["https"]
		},
		web_member_callback_remove_avatar: {
			tokens: [
				["variable", "/", "[^/]++", "username"],
				["text", "/callback/member/remove_avatar"]
			],
			defaults: {
				subdomain: "www"
			},
			requirements: {
				subdomain: "www|schach|ru|uk|ajedrez|fr|scacchi|sakk|schaken|szachy"
			},
			hosttokens: [
				["text", ".chess-dev.com"],
				["variable", "", "www|schach|ru|uk|ajedrez|fr|scacchi|sakk|schaken|szachy", "subdomain"]
			],
			methods: ["DELETE"],
			schemes: ["https"]
		},
		web_user_callback_remove_user_custom_background: {
			tokens: [
				["variable", "/", "[^/]++", "user"],
				["text", "/callback/remove/user_custom_background"]
			],
			defaults: {
				subdomain: "www"
			},
			requirements: {
				subdomain: "www|schach|ru|uk|ajedrez|fr|scacchi|sakk|schaken|szachy"
			},
			hosttokens: [
				["text", ".chess-dev.com"],
				["variable", "", "www|schach|ru|uk|ajedrez|fr|scacchi|sakk|schaken|szachy", "subdomain"]
			],
			methods: [],
			schemes: ["https"]
		},
		web_member_reset_flair: {
			tokens: [
				["variable", "/", "[^/]++", "username"],
				["text", "/member/reset_flair"]
			],
			defaults: {
				subdomain: "www"
			},
			requirements: {
				subdomain: "www|schach|ru|uk|ajedrez|fr|scacchi|sakk|schaken|szachy"
			},
			hosttokens: [
				["text", ".chess-dev.com"],
				["variable", "", "www|schach|ru|uk|ajedrez|fr|scacchi|sakk|schaken|szachy", "subdomain"]
			],
			methods: ["POST"],
			schemes: ["https"]
		},
		web_member_unmute: {
			tokens: [
				["variable", "/", "[^/]++", "username"],
				["text", "/member/unmute"]
			],
			defaults: {
				subdomain: "www"
			},
			requirements: {
				subdomain: "www|schach|ru|uk|ajedrez|fr|scacchi|sakk|schaken|szachy"
			},
			hosttokens: [
				["text", ".chess-dev.com"],
				["variable", "", "www|schach|ru|uk|ajedrez|fr|scacchi|sakk|schaken|szachy", "subdomain"]
			],
			methods: [],
			schemes: ["https"]
		},
		web_user_callback_recent_opponents: {
			tokens: [
				["text", "/callback/recent/opponents"]
			],
			defaults: {
				subdomain: "www"
			},
			requirements: {
				subdomain: "www|schach|ru|uk|ajedrez|fr|scacchi|sakk|schaken|szachy"
			},
			hosttokens: [
				["text", ".chess-dev.com"],
				["variable", "", "www|schach|ru|uk|ajedrez|fr|scacchi|sakk|schaken|szachy", "subdomain"]
			],
			methods: [],
			schemes: ["https"]
		}
	})
		var Wn = {
				400: function(m, a, e) {
					var n = e(63966),
						t = e(30493),
						s = e(70913);
					a.Z = i => {
						const r = (0, s.i)(i);
						return r && (0, t.el)({
							type: n.V5.error,
							message: r
						}), Promise.reject(i)
					}
				},
				35889: function(m, a) {
					var e, n, t;
					(function(s, i) {
						var r = i();
						n = [], e = r.Routing, t = typeof e == "function" ? e.apply(a, n) : e, t !== void 0 && (m.exports = t)
					})(this, function() {
						"use strict";
						var s = Object.assign || function(l) {
								for (var p = 1; p < arguments.length; p++) {
									var h = arguments[p];
									for (var _ in h) Object.prototype.hasOwnProperty.call(h, _) && (l[_] = h[_])
								}
								return l
							},
							i = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(l) {
								return typeof l
							} : function(l) {
								return l && typeof Symbol == "function" && l.constructor === Symbol && l !== Symbol.prototype ? "symbol" : typeof l
							},
							r = function() {
								function l(p, h) {
									for (var _ = 0; _ < h.length; _++) {
										var b = h[_];
										b.enumerable = b.enumerable || !1, b.configurable = !0, "value" in b && (b.writable = !0), Object.defineProperty(p, b.key, b)
									}
								}
								return function(p, h, _) {
									return h && l(p.prototype, h), _ && l(p, _), p
								}
							}();

						function o(l, p) {
							if (!(l instanceof p)) throw new TypeError("Cannot call a class as a function")
						}
						var u = function() {
							function l(p, h) {
								o(this, l), this.context_ = p || {
									base_url: "",
									prefix: "",
									host: "",
									port: "",
									scheme: "",
									locale: ""
								}, this.setRoutes(h || {})
							}
							return r(l, [{
								key: "setRoutingData",
								value: function(h) {
									this.setBaseUrl(h.base_url), this.setRoutes(h.routes), "prefix" in h && this.setPrefix(h.prefix), "port" in h && this.setPort(h.port), "locale" in h && this.setLocale(h.locale), this.setHost(h.host), this.setScheme(h.scheme)
								}
							}, {
								key: "setRoutes",
								value: function(h) {
									this.routes_ = Object.freeze(h)
								}
							}, {
								key: "getRoutes",
								value: function() {
									return this.routes_
								}
							}, {
								key: "setBaseUrl",
								value: function(h) {
									this.context_.base_url = h
								}
							}, {
								key: "getBaseUrl",
								value: function() {
									return this.context_.base_url
								}
							}, {
								key: "setPrefix",
								value: function(h) {
									this.context_.prefix = h
								}
							}, {
								key: "setScheme",
								value: function(h) {
									this.context_.scheme = h
								}
							}, {
								key: "getScheme",
								value: function() {
									return this.context_.scheme
								}
							}, {
								key: "setHost",
								value: function(h) {
									this.context_.host = h
								}
							}, {
								key: "getHost",
								value: function() {
									return this.context_.host
								}
							}, {
								key: "setPort",
								value: function(h) {
									this.context_.port = h
								}
							}, {
								key: "getPort",
								value: function() {
									return this.context_.port
								}
							}, {
								key: "setLocale",
								value: function(h) {
									this.context_.locale = h
								}
							}, {
								key: "getLocale",
								value: function() {
									return this.context_.locale
								}
							}, {
								key: "buildQueryParams",
								value: function(h, _, b) {
									var g = this,
										v = void 0,
										E = new RegExp(/\[\]$/);
									if (_ instanceof Array) _.forEach(function(y, w) {
										E.test(h) ? b(h, y) : g.buildQueryParams(h + "[" + ((typeof y > "u" ? "undefined" : i(y)) === "object" ? w : "") + "]", y, b)
									});
									else if ((typeof _ > "u" ? "undefined" : i(_)) === "object")
										for (v in _) this.buildQueryParams(h + "[" + v + "]", _[v], b);
									else b(h, _)
								}
							}, {
								key: "getRoute",
								value: function(h) {
									var _ = this.context_.prefix + h,
										b = h + "." + this.context_.locale,
										g = this.context_.prefix + h + "." + this.context_.locale,
										v = [_, b, g, h];
									for (var E in v)
										if (v[E] in this.routes_) return this.routes_[v[E]];
									throw new Error('The route "' + h + '" does not exist.')
								}
							}, {
								key: "generate",
								value: function(h, _) {
									var b = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1,
										g = this.getRoute(h),
										v = _ || {},
										E = s({}, v),
										y = "",
										w = !0,
										P = "",
										k = typeof this.getPort() > "u" || this.getPort() === null ? "" : this.getPort();
									if (g.tokens.forEach(function(x) {
											if (x[0] === "text") {
												y = l.encodePathComponent(x[1]) + y, w = !1;
												return
											}
											if (x[0] === "variable") {
												var W = g.defaults && x[3] in g.defaults;
												if (w === !1 || !W || x[3] in v && v[x[3]] != g.defaults[x[3]]) {
													var z = void 0;
													if (x[3] in v) z = v[x[3]], delete E[x[3]];
													else if (W) z = g.defaults[x[3]];
													else {
														if (w) return;
														throw new Error('The route "' + h + '" requires the parameter "' + x[3] + '".')
													}
													var F = z === !0 || z === !1 || z === "";
													if (!F || !w) {
														var V = l.encodePathComponent(z);
														V === "null" && z === null && (V = ""), y = x[1] + V + y
													}
													w = !1
												} else W && x[3] in E && delete E[x[3]];
												return
											}
											throw new Error('The token type "' + x[0] + '" is not supported.')
										}), y === "" && (y = "/"), g.hosttokens.forEach(function(x) {
											var W = void 0;
											if (x[0] === "text") {
												P = x[1] + P;
												return
											}
											x[0] === "variable" && (x[3] in v ? (W = v[x[3]], delete E[x[3]]) : g.defaults && x[3] in g.defaults && (W = g.defaults[x[3]]), P = x[1] + W + P)
										}), y = this.context_.base_url + y, g.requirements && "_scheme" in g.requirements && this.getScheme() != g.requirements._scheme) {
										var O = P || this.getHost();
										y = g.requirements._scheme + "://" + O + (O.indexOf(":" + k) > -1 || k === "" ? "" : ":" + k) + y
									} else if (typeof g.schemes < "u" && typeof g.schemes[0] < "u" && this.getScheme() !== g.schemes[0]) {
										var T = P || this.getHost();
										y = g.schemes[0] + "://" + T + (T.indexOf(":" + k) > -1 || k === "" ? "" : ":" + k) + y
									} else P && this.getHost() !== P + (P.indexOf(":" + k) > -1 || k === "" ? "" : ":" + k) ? y = this.getScheme() + "://" + P + (P.indexOf(":" + k) > -1 || k === "" ? "" : ":" + k) + y : b === !0 && (y = this.getScheme() + "://" + this.getHost() + (this.getHost().indexOf(":" + k) > -1 || k === "" ? "" : ":" + k) + y);
									if (Object.keys(E).length > 0) {
										var C = void 0,
											D = [],
											L = function(W, z) {
												z = typeof z == "function" ? z() : z, z = z === null ? "" : z, D.push(l.encodeQueryComponent(W) + "=" + l.encodeQueryComponent(z))
											};
										for (C in E) this.buildQueryParams(C, E[C], L);
										y = y + "?" + D.join("&")
									}
									return y
								}
							}], [{
								key: "getInstance",
								value: function() {
									return c
								}
							}, {
								key: "setData",
								value: function(h) {
									var _ = l.getInstance();
									_.setRoutingData(h)
								}
							}, {
								key: "customEncodeURIComponent",
								value: function(h) {
									return encodeURIComponent(h).replace(/%2F/g, "/").replace(/%40/g, "@").replace(/%3A/g, ":").replace(/%21/g, "!").replace(/%3B/g, ";").replace(/%2C/g, ",").replace(/%2A/g, "*").replace(/\(/g, "%28").replace(/\)/g, "%29").replace(/'/g, "%27")
								}
							}, {
								key: "encodePathComponent",
								value: function(h) {
									return l.customEncodeURIComponent(h).replace(/%3D/g, "=").replace(/%2B/g, "+").replace(/%21/g, "!").replace(/%7C/g, "|")
								}
							}, {
								key: "encodeQueryComponent",
								value: function(h) {
									return l.customEncodeURIComponent(h).replace(/%3F/g, "?")
								}
							}]), l
						}();
						u.Route, u.Context;
						var c = new u;
						return {
							Router: u,
							Routing: c
						}
					})
				},
				28971: function(m, a, e) {
					e.d(a, {
						MD: function() {
							return i
						},
						bt: function() {
							return r
						},
						_O: function() {
							return o
						},
						fs: function() {
							return u
						}
					});
					var n = e(13290);
					const t = {
							top: "top",
							right: "right",
							bottom: "bottom",
							left: "left",
							bottomLeft: "bottom-left"
						},
						s = (c, l, p, h) => {
							function _(x, W) {
								return x.currentStyle ? x.currentStyle[W] : window.getComputedStyle ? window.getComputedStyle(x)[W] : x.style[W]
							}

							function b(x) {
								return (_(x, "position") || "static") === "static"
							}

							function g(x) {
								const W = document;
								let z = x.offsetParent || W;
								for (; z && z !== W && b(z);) z = z.offsetParent;
								return z || W
							}

							function v(x) {
								const W = x.getBoundingClientRect();
								return {
									width: W.width || x.offsetWidth,
									height: W.height || x.offsetHeight,
									top: W.top + (window.pageYOffset || document.documentElement.scrollTop),
									left: W.left + (window.pageXOffset || document.documentElement.scrollLeft)
								}
							}

							function E(x) {
								const W = v(x);
								let z = {
									top: 0,
									left: 0
								};
								const F = g(x);
								F !== document && (z = v(F), z.top += F.clientTop - F.scrollTop, z.left += F.clientLeft - F.scrollLeft);
								const V = x.getBoundingClientRect();
								return {
									width: V.width || x.offsetWidth,
									height: V.height || x.offsetHeight,
									top: W.top - z.top,
									left: W.left - z.left
								}
							}
							const y = p.split("-"),
								w = y[0],
								P = y[1] || "center";
							let k;
							const O = h ? v(c) : E(c),
								T = l.offsetWidth,
								C = l.offsetHeight,
								D = {
									center: () => O.left + O.width / 2 - T / 2,
									left: () => O.left,
									right: () => O.left + O.width
								},
								L = {
									center: () => O.top + O.height / 2 - C / 2,
									top: () => O.top,
									bottom: () => O.top + O.height
								};
							switch (w) {
								case t.right:
									k = {
										top: L[P](),
										left: D[w]()
									};
									break;
								case t.left:
									k = {
										top: L[P](),
										left: O.left - T
									};
									break;
								case t.bottom:
									k = {
										top: L[w](),
										left: D[P]()
									};
									break;
								case t.bottomLeft:
									k = {
										top: L[w](),
										left: O.left - T
									};
									break;
								default:
									k = {
										top: O.top - C,
										left: D[P]()
									};
									break
							}
							return k
						},
						i = (c, l = 220, p = 320) => {
							const h = {
									top: null,
									left: null,
									right: null,
									x: null,
									y: null
								},
								_ = 182,
								b = 310,
								g = 24,
								v = 28,
								E = g / 2,
								y = c.width / 2,
								w = window;
							let P = w.innerHeight - b;
							c.bottom + l > w.innerHeight && l > b && (P = w.innerHeight - l);
							const k = l > _ ? l : _,
								O = c.bottom + k < w.innerHeight,
								T = p - v - E,
								C = p - T,
								D = c.left + y + T < w.innerWidth;
							return O ? (h.top = c.bottom, h.y = t.bottom) : (h.top = P, h.y = t.top), D ? (h.left = c.left + y - C, h.right = window.innerWidth - c.right, h.x = t.right) : (h.left = c.left + y - T, h.right = window.innerWidth - c.right, h.x = t.left), h.top = Math.round(h.top), h.left = Math.round(h.left), h.right = Math.round(h.right), h
						},
						r = (c, l, p, h = 0) => {
							if (!c || !l) return null;
							const _ = c.getBoundingClientRect(),
								b = {},
								g = window.innerWidth - _.x,
								v = () => _.top - (l.clientHeight + h) > 0,
								E = () => _.bottom + l.clientHeight + h < window.innerHeight,
								y = () => _.left - (l.clientWidth + h) > 0,
								w = () => _.right + l.clientWidth + h < window.innerWidth;
							return p === t.top && v() || p === t.bottom && !E() ? (b.left = _.left - (l.clientWidth - _.width) / 2, b.rtlLeft = g - l.clientWidth / 2 - _.width / 2, b.top = _.top - l.clientHeight - h, b.placement = t.top) : p === t.bottom || p === t.top && !v() ? (b.left = _.left - (l.clientWidth - _.width) / 2, b.rtlLeft = g - l.clientWidth / 2 - _.width / 2, b.top = _.bottom + h, b.placement = t.bottom) : p === t.left && y() || p === t.right && !w() ? (b.left = _.left - l.clientWidth - h, b.rtlLeft = _.rtlLeft - l.clientWidth - h, b.top = _.top - (l.clientHeight - _.height) / 2, b.placement = t.left) : p === t.right || p === t.left && !y() ? (b.left = _.right + h, b.rtlLeft = _.rtlLeft + h, b.top = _.top - (l.clientHeight - _.height) / 2, b.placement = t.right) : p === t.bottomLeft && (b.left = _.right - _.width / 2 - l.clientWidth - h, b.rtlLeft = _.rtlLeft - l.clientWidth - h, b.top = _.bottom + h, b.placement = t.bottomLeft), {
								left: Math.round(b.left),
								placement: b.placement,
								rtlLeft: Math.round(b.rtlLeft),
								top: Math.round(b.top)
							}
						},
						o = (c, l, p, h = 0) => {
							if (!c || !l) return null;
							const _ = r(c, l, p, h);
							return (0, n.t)() ? l.style.transform = `translate(-${_.rtlLeft}px, ${_.top}px)` : l.style.transform = `translate(${_.left}px, ${_.top}px)`, l.classList.add(_.placement), l
						},
						u = c => c ? (c.style.transform = "translate(-100%, -100%)", c.classList.remove(t.left, t.right, t.bottom, t.top), c) : null
				},
				9664: function(m, a, e) {
					var n = {},
						t = e(70141),
						s = e(52553),
						i = e(50760),
						r = e(21820);
					const o = (0, s.VM)({
						emitter: r.z,
						events: [i.K.Open],
						loader: () => Promise.all([e.e(7952), e.e(7175)]).then(e.bind(e, 33274))
					});
					var u = e(32945),
						c = e(10616),
						l = e(23548),
						p = e(13248);
					const h = (0, s.VM)({
						triggers: [(0, s.$y)(p.U, [l.Y.BeforeSelectBoard]), (0, s.$y)(c.T, [u.t.Update])],
						loader: () => e.e(4656).then(e.bind(e, 81651))
					});
					var _ = e(10273),
						b = e(41885);
					const g = 50,
						v = {
							interval: g,
							timeout: g * 3
						};
					var E = e(98560),
						y = e(39852),
						w = e(47172);
					const P = (0, s.eI)({
						init() {
							window.addEventListener("focus", this.onWindowFocus), this.resetTimer()
						},
						resetTimer() {
							y.J.intervalCounter = 0, y.J.lastInterval = 0, y.J.tickTimeout && (clearTimeout(y.J.tickTimeout), y.J.tickTimeout = null), this.setTimeout(), this.setInterval()
						},
						setTimeout() {
							y.J.tickTimeout = setTimeout(this.onClockTimeout, v.timeout)
						},
						setInterval() {
							y.J.tickInterval && (clearInterval(y.J.tickInterval), y.J.tickInterval = null), y.J.tickInterval = setInterval(this.onClockInterval, v.interval, !1)
						},
						onWindowFocus() {
							this.resetTimer(), this.onClockInterval()
						},
						onClockTimeout() {
							y.J.lastInterval === y.J.intervalCounter ? this.resetTimer() : (this.setTimeout(), y.J.lastInterval = y.J.intervalCounter)
						},
						onClockInterval() {
							y.J.intervalCounter++;
							let f = Date.now();
							const d = y.J.clockNow;
							let M = f - d;
							y.J.clockNow = f;
							const B = M < 0 || M > 15e3;
							if (y.J.isPerfNowSupported) {
								const te = window.performance.now(),
									he = Math.round(te - y.J.clockPerfNow);
								y.J.clockPerfNow = te, B && (f = d + he, M = he)
							} else B && window.location.reload();
							const $ = M / 100;
							y.J.clocks.forEach(te => {
								this.updateClock(te, $)
							}), f - y.J.last1sec > 1e3 && (y.J.last1sec = f, y.J.currentTime.now1sec = f), f - y.J.last5sec > 5e3 && (y.J.last5sec = f, y.J.currentTime.now5sec = f, E.W.emit(b.d.Every5Sec)), f - y.J.last60sec > 6e4 && (y.J.last60sec = f, y.J.currentTime.now60sec = f)
						},
						updateClock(f, d) {
							f.isRunning && (f.shouldDelayOpponentClock() ? f.currentLags = f.getTickedLags(d) : f.currentClocks = f.getTickedClocks(d), f.hasLowTime(f.playerToMove) && (f.lowTime[f.playerToMove] = !0, f.playerIndex === f.playerToMove && E.W.emit(b.d.LowTime, {
								clock: f
							})), f.hasGotTimeout() && (f.timeout = !0, E.W.emit(b.d.Timeout, {
								clock: f
							}))), f.elements.forEach(M => {
								const B = M.playerIndex === f.playerToMove;
								if (M.playerToMove !== f.playerToMove && ((0, w.zv)(M.element, B), M.playerToMove = f.playerToMove), !f.isRunning) return;
								M.lowTime !== f.lowTime[f.playerToMove] && ((0, w.nG)(M.element, f.lowTime[f.playerToMove]), M.lowTime = f.lowTime[f.playerToMove]);
								const $ = (0, _.D)(f.getCurrentClock(M.playerIndex));
								if (B && M.clockText && $.split(".")[0] !== M.clockText.split(".")[0] && (M.iconDegree += 90, M.iconElement && (M.iconElement.style.transform = `rotate(${M.iconDegree}deg)`)), $ !== M.clockText && (M.element.innerHTML = $, M.clockText = $), M.barElement) {
									const te = f.getBarRemainder(M.playerIndex);
									te !== M.barRemainder && (M.barElement.style.width = `${te}%`)
								}
							})
						}
					});
					var k = e(20414),
						O = e(92450),
						T = e(89033),
						C = e(50462),
						D = e(7042),
						L = e(20208),
						x = e(67377),
						W = e(84826),
						z = e(33490),
						F = e(23185);
					const V = (0, s.VM)({
						triggers: [(0, s.$y)(F.s, [z.Q.LiveArena, z.Q.LiveTeamMatch, z.Q.LiveTournament, z.Q.Tournaments, z.Q.CreateTournament]), (0, s.$y)(C.u, [T.l.Open, T.l.OpenChallenge, T.l.Over]), (0, s.$y)(L.r, [D._.Open, D._.OpenChallenge]), (0, s.$y)(W.R, [x.h.Open, x.h.Bye, x.h.Over]), (0, s.$y)(O.c, [k.F.TournamentSubscribeFailure, k.F.ArenaSubscribeFailure])],
						loader: () => e.e(8661).then(e.bind(e, 20619))
					});
					var Z = e(18710),
						A = e(24984);
					const S = (0, s.VM)({
						triggers: [(0, s.$y)(A.n, [Z.W.Open]), (0, s.$y)(F.s, [z.Q.DailySeek])],
						loader: () => Promise.all([e.e(7952), e.e(465)]).then(e.bind(e, 34162))
					});
					var j = e(83084),
						J = e(62545);
					const _e = (0, s.VM)({
						triggers: [(0, s.$y)(J.i, [j.K.Open]), (0, s.$y)(F.s, [z.Q.DailyGame])],
						loader: () => Promise.all([e.e(7952), e.e(9202)]).then(e.bind(e, 85884))
					});
					var we = e(70368),
						G = e(16400),
						X = e(81654),
						re = e(61583),
						ge = e(90994);
					const ve = (0, s.VM)({
						triggers: [(0, s.$y)(X.x, [G.U.Open]), (0, s.$y)(ge.Z, [re.L.Open]), (0, s.$y)(J.i, [j.K.Open])],
						shouldLoad: () => (0, we.E)(),
						loader: () => e.e(3094).then(e.bind(e, 39634))
					});
					var We = e(4452),
						ie = e(81321),
						qe = e(57351),
						K = e(42752);
					async function U() {
						const f = ["notification", "tv", "featured", (0, K.o)()].join("/");
						try {
							await (0, ie.b)(f, () => {
								qe.Q.expire()
							})
						} catch {}
					}
					var N = e(35545);
					const q = (0, s.eI)({
						init() {
							(0, N.j)() && (0, We.q)() && U()
						}
					});
					var Y = e(89220),
						ue = e(16293);

					function fe() {
						return window.chesscom.features.includes("window_events_cheat_detection_data") && ((0, Y.w)() || (0, ue.O)())
					}
					const Te = (0, s.VM)({
						triggers: [(0, s.$y)(X.x, [G.U.Open], fe), (0, s.$y)(ge.Z, [re.L.Open], fe)],
						loader: () => e.e(5086).then(e.bind(e, 6823))
					});
					var Je = e(87995);
					const ae = (0, s.eI)({
							init() {
								p.U.on(l.Y.RemoveBoard, this.onRemoveBoard), p.U.once(l.Y.AddBoard, this.onAddBoard)
							},
							async onAddBoard() {
								const f = window.chesscom.features.includes("play_game_over_modal_next") ? Promise.all([e.e(4851), e.e(6437), e.e(9359)]).then(e.bind(e, 95789)) : Promise.all([e.e(6437), e.e(2863)]).then(e.bind(e, 27071));
								await (0, s.tL)(f)
							},
							onRemoveBoard({
								board: f
							}) {
								(0, Je.M)(f)
							}
						}),
						st = (0, s.VM)({
							triggers: [(0, s.$y)(X.x, [G.U.StallTimeout, G.U.ThinkTimeout, G.U.OpponentConnectionStatus]), (0, s.$y)(ge.Z, [re.L.StallTimeout, re.L.ThinkTimeout, re.L.OpponentConnectionStatus])],
							loader: () => e.e(4956).then(e.bind(e, 36087))
						});
					var Ze = e(26487),
						at = e(68697),
						Fe = e(171);

					function Ve(f) {
						return (0, at.Z)(f) && (0, Fe.Z)(f) === 1
					}
					var et = e(63763),
						it = e(52152),
						Be = e(45463),
						Ge = e(72045),
						pe = e(35029);

					function Ee() {
						if (pe.k.analysis.length) return;
						const f = pe.k.analysis.add({
							id: (0, Ge.Z)()
						});
						r.z.emit(i.K.Open, {
							analysis: f
						})
					}
					var _t = e(44675),
						ot = e(64162),
						gt = e(18370),
						rt = e(80105),
						pt = e(42591),
						Bt = e(48067),
						At = e(99450),
						lt = e(92005),
						Ke = e(6936);
					async function oe({
						id: f,
						isVsComputer: d
					}) {
						if (!((0, Be.hj)(f) || Ve(f))) throw new Error(`invalid archive game id: ${f}`);
						const B = d ? "web_computer_callback_load_game" : "web_callback_load_game_live_data",
							$ = Ke.Z.generate(B, {
								id: f
							}),
							{
								data: te
							} = await lt.Z.get($);
						return te
					}
					var R = e(98988);

					function ee(f, {
						game: d,
						players: M
					}) {
						const B = M.top.color === "white" ? M.top : M.bottom,
							$ = M.top.color === "white" ? M.bottom : M.top;
						return [M.top, M.bottom].forEach(te => {
							te.country = {
								name: te.countryName,
								code: te.countryId.toString()
							}
						}), d.uuid = (0, Be.HD)(f) ? f : null, d.players = [new pt.Q(B), new pt.Q($)], d.timestamps = ye(d), d
					}

					function ye(f) {
						var d, M;
						let B = (M = (d = f.moveTimestamps) != null ? d : f.timestamps) != null ? M : [];
						return typeof B == "string" && (B = B.split(",")), B.map($ => parseInt($, 10))
					}
					async function de(f, d) {
						if (R.y.isLoading.includes(f) || R.y.games.find(B => f === ((0, Be.HD)(f) ? B.uuid : B.id))) return;
						R.y.isLoading.push(f);
						let M;
						try {
							M = await oe({
								id: f,
								isVsComputer: d === z.Q.ComputerGame
							})
						} catch (B) {
							J.i.emit(j.K.NotFound, {
								response: B.response,
								gameId: f,
								routeName: d
							})
						}
						if (M) {
							const B = ee(f, M);
							if (B.partnerGameId) {
								B.partnerGame = new rt.C;
								const te = await oe({
										id: B.partnerGameId
									}),
									he = ee(B.partnerGameId, te);
								(0, s.Uc)(B.partnerGame, he)
							}
							R.y.analysis.add({
								id: B.id
							});
							const $ = R.y.games.add(B);
							J.i.emit(j.K.Open, {
								dailyGame: $
							}), (0, Bt.n)(At.U.playing)
						}(0, gt.A)(R.y.isLoading, f)
					}

					function ft() {
						R.y.currentMove.toggled = !0
					}
					var ct = e(5890),
						cn = e(42118),
						Ae = e(28731);

					function St(f = !Ae.N.theatreMode) {
						Ae.N.theatreMode = f, Ae.N.focusMode = !1, (0, cn.Y)(f)
					}
					var Jt = e(40381),
						un = e(61317),
						Yt = e(30636),
						ze = e(87833);
					async function bt() {
						!(0, N.j)() || (0, ze.n)() || !(0, Yt.n)() || (await (0, Jt.Y)(), (0, Y.w)() || (0, un.$)())
					}
					var It = e(63114),
						ut = e(95735),
						Oe = e(82619);

					function Lt() {
						const f = (0, Oe.t)();
						ut._.games.filter(d => d.isPlayerTurn(f) || d.getEstimatedDuration() <= 600).forEach(d => {
							ut._.toggledGames.includes(d.id) || ut._.toggledGames.push(d.id)
						})
					}
					var vt = e(51271),
						yt = e(60575),
						Se = e(74508);

					function dn() {
						const f = (0, Se.S)();
						yt.V.games.filter(d => d.isPlayerTurn(f) || d.getEstimatedDuration() <= 600).forEach(d => {
							yt.V.toggledGames.includes(d.id) || yt.V.toggledGames.push(d.id)
						})
					}

					function mn(f) {
						return Boolean(f.id && (f.name === z.Q.RcnGame || f.name === z.Q.ComputerGame || f.name === z.Q.ArchivedGame || f.name === z.Q.LiveGame))
					}
					var Q = e(66816),
						I = e(49475),
						De = e(82733),
						wt = e(77183),
						se = e(77415);

					function hn() {
						const f = document.getElementById("board-layout-sidebar");
						f && (se.B.sidebarWidth = f.getBoundingClientRect().width)
					}
					var le = e(9085),
						Et = e(35144),
						Nn = e(74227),
						He = e(17655),
						Fn = e(12778);

					function _n() {
						Fn.K.completedGamesCount++
					}
					const ha = (0, s.eI)({
						init() {
							document.readyState !== "complete" ? window.addEventListener("load", this.onWindowLoad) : (this.onWindowLoad(), this.onWindowResize()), window.addEventListener("blur", this.onWindowBlur), window.addEventListener("focus", this.onWindowFocus), window.addEventListener("resize", this.onWindowResize), document.addEventListener("keydown", this.onDocumentKeyDown), J.i.on(j.K.End, this.onEndDailyGame), J.i.on(j.K.NotFound, this.onDailyGameNotFound), X.x.on(G.U.End, this.onEndLiveGame), X.x.on(G.U.Expired, this.onLiveGameExpired), ge.Z.on(re.L.End, this.onEndRcnGame), F.s.onAll(this.onRouterChange), hn()
						},
						onWindowLoad() {
							hn(), (0, Se.S)().isGuest || (0, et.kt)()
						},
						onDocumentKeyDown(f) {
							const d = f.target;
							if (!!d && !(/input|textarea/i.test(d.nodeName) || d.hasAttribute("contenteditable"))) switch (f.key) {
								case "l":
								case "L":
									f.ctrlKey && f.shiftKey && Ee();
									break;
								case "z":
									(0, ct.w)();
									break;
								case "Escape":
									(0, ct.w)(!1);
									break;
								case "`":
									((0, Oe.t)().isStreamer() || (0, Oe.t)().isStaff()) && (0, wt.X)(Et.V.Console.key);
									break;
								case ".":
									(0, N.j)() && (0, wt.X)(Et.V.OpenGames.key);
									break;
								default:
									break
							}
						},
						onWindowFocus() {
							var f;
							Ae.N.windowBlurTimestamp && (Date.now() - Ae.N.windowBlurTimestamp > 500 && (Lt(), dn(), ((f = (0, He.H)()) == null ? void 0 : f.type) === le.V.DailyGame && ft()), Ae.N.windowBlurTimestamp = null)
						},
						onWindowBlur() {
							Ae.N.windowBlurTimestamp = Date.now()
						},
						onWindowResize: (0, it.Z)(() => {
							hn(), Ae.N.isFocusModeSupported = (0, Ze.k)(), !Ae.N.isFocusModeSupported && (Ae.N.theatreMode || Ae.N.focusMode) && (St(!1), (0, ct.w)(!1))
						}),
						onDailyGameNotFound({
							response: f,
							gameId: d,
							routeName: M
						}) {
							if ((0, N.j)() && f?.status === 404) {
								if ((0, Be.hj)(d) && (M === z.Q.ArchivedGame || M === z.Q.LiveGame)) {
									(0, It.y)(d);
									return
								}
								if (Ve(d)) {
									(0, vt.a)(d);
									return
								}
							}(0, I.Z)((0, He.H)())
						},
						onEndLiveGame({
							liveGame: f
						}) {
							f.isPlaying((0, Oe.t)()) && _n()
						},
						onLiveGameExpired() {
							(0, I.Z)((0, He.H)())
						},
						onEndDailyGame({
							dailyGame: f
						}) {
							f.isPlaying((0, Se.S)()) && _n()
						},
						onEndRcnGame({
							rcnGame: f
						}) {
							f.isPlaying((0, Se.S)().uuid) && _n()
						},
						onRouterChange({
							route: f
						}) {
							if (f.name !== z.Q.Tournaments && (0, ot.h)() && (0, _t.z)(), mn(f)) {
								de(f.id, f.name);
								return
							}
							if (!!(0, N.j)()) switch (f.name) {
								case z.Q.Daily:
									(0, De.S)(Nn.v.daily);
									break;
								case z.Q.Settings:
									(0, Q.e)();
									break;
								case z.Q.Play:
									f.params.action || bt();
									break;
								default:
									break
							}
						}
					});

					function Gn() {
						return (0, N.j)() && !(0, ze.n)() && ((0, Y.w)() || (0, ue.O)())
					}
					const _a = (0, s.VM)({
						triggers: [(0, s.$y)(X.x, [G.U.Open], Gn), (0, s.$y)(ge.Z, [re.L.Open], Gn)],
						loader: () => e.e(5767).then(e.bind(e, 12956))
					});
					var H = e(88166),
						je = e(75193);
					const ga = (0, s.VM)({
							triggers: [(0, s.$y)(je.e, [H.b.Announce, H.b.AnnounceList])],
							loader: () => e.e(1881).then(e.bind(e, 27525))
						}),
						pa = (0, s.VM)({
							triggers: [(0, s.$y)(O.c, [k.F.ArenaSubscribeFailure, k.F.ArenaChannelExpired]), (0, s.$y)(je.e, [H.b.ArenaChallenge, H.b.ArenaChallengeAccepted, H.b.ArenaChallengeCancelled, H.b.ArenaChallengeDeclined, H.b.ArenaChallengeFail, H.b.ArenaGameRequestCancelled, H.b.ArenaGameRequested, H.b.ArenaScheduled, H.b.ArenaState, H.b.FullArena])],
							loader: () => e.e(1035).then(e.bind(e, 14222))
						}),
						fa = (0, s.VM)({
							emitter: je.e,
							events: [H.b.BughousePair, H.b.CancelBughousePairRequest, H.b.Challenge, H.b.ChallengeAccept, H.b.ChallengeAcceptFail, H.b.ChallengeCancel, H.b.ChallengeDecline, H.b.ChallengeDeclineFail, H.b.ChallengeFail, H.b.ChallengeList, H.b.ChallengeRemove, H.b.DeclineBughousePairRequest, H.b.Match, H.b.RequestBughousePair],
							loader: () => e.e(849).then(e.bind(e, 56039))
						}),
						ba = (0, s.VM)({
							emitter: je.e,
							events: [H.b.FullRoom],
							loader: () => e.e(2194).then(e.bind(e, 41324))
						}),
						va = (0, s.VM)({
							emitter: je.e,
							events: [H.b.EventList, H.b.GameList, H.b.UserArenaList, H.b.UserTeamMatchList, H.b.UserTournamentList],
							loader: () => e.e(6546).then(e.bind(e, 19809))
						}),
						ya = (0, s.VM)({
							emitter: je.e,
							events: [H.b.ExamineBoard],
							loader: () => e.e(8212).then(e.bind(e, 37790))
						}),
						wa = (0, s.VM)({
							triggers: [(0, s.$y)(O.c, [k.F.GameSubscribeFailure]), (0, s.$y)(je.e, [H.b.FullGame, H.b.GameList, H.b.Game])],
							loader: () => e.e(8317).then(e.bind(e, 82308))
						}),
						Ea = (0, s.VM)({
							emitter: X.x,
							events: [G.U.Open],
							loader: () => Promise.all([e.e(7952), e.e(5775)]).then(e.bind(e, 64932))
						}),
						Pa = (0, s.VM)({
							emitter: je.e,
							events: [H.b.Ban, H.b.BanFail, H.b.Kick, H.b.KickFail, H.b.Mute, H.b.MuteFail, H.b.UnKickFail, H.b.Warn, H.b.WarnFail],
							shouldLoad: () => (0, Oe.t)().isStaff() || (0, Oe.t)().isModerator(),
							loader: () => e.e(4755).then(e.bind(e, 722))
						}),
						Ca = (0, s.VM)({
							triggers: [(0, s.$y)(O.c, [k.F.TeamMatchChannelExpired, k.F.TeamMatchSubscribeFailure]), (0, s.$y)(je.e, [H.b.FullTeamMatch, H.b.AcceptTeamMatchChallengeFail, H.b.TeamMatchChallenge, H.b.TeamMatchChallengeAccepted, H.b.TeamMatchChallengeCancelled, H.b.TeamMatchChallengeDeclined, H.b.TeamMatchChallengeFail, H.b.TeamMatchJoined, H.b.TeamMatchScheduled, H.b.TeamMatchState])],
							loader: () => e.e(7914).then(e.bind(e, 83713))
						}),
						Ta = (0, s.VM)({
							triggers: [(0, s.$y)(O.c, [k.F.TournamentSubscribeFailure, k.F.TournamentChannelExpired]), (0, s.$y)(je.e, [H.b.FullTournament, H.b.TournamentState, H.b.TournamentBye, H.b.TournamentWithdrawn, H.b.TournamentUserAdded, H.b.TournamentUserRemoved, H.b.TournamentJoined, H.b.TournamentScheduled])],
							loader: () => e.e(4670).then(e.bind(e, 28245))
						}),
						Oa = (0, s.VM)({
							triggers: [(0, s.$y)(je.e, [H.b.User])],
							loader: () => e.e(9361).then(e.bind(e, 98990))
						});
					var Ut = e(83927);
					const gn = "monitorPageLoad";
					var zt = e(6671);

					function $n() {
						return (0, Y.w)() || (0, ue.O)()
					}
					var Ma = e(26607);
					const ka = (0, s.eI)({
						init(f) {
							Boolean(window.sessionStorage.getItem(gn)) && (window.sessionStorage.removeItem(gn), f.then(() => {
								zt.f.emit(Ut.q.Load)
							})), X.x.on(G.U.Open, this.onGameOpen), ge.Z.on(re.L.Open, this.onGameOpen), X.x.on(G.U.End, this.onLiveGameEnd), ge.Z.on(re.L.End, this.onRcnGameEnd), window.addEventListener("pagehide", this.onPageHide)
						},
						onPageHide() {
							$n() && window.sessionStorage.setItem(gn, "true")
						},
						onGameOpen() {
							$n() && zt.f.emit(Ut.q.Load)
						},
						onLiveGameEnd() {
							X.x.once(G.U.End, this.onGameOver)
						},
						onRcnGameEnd() {
							ge.Z.once(re.L.End, this.onGameOver)
						},
						onGameOver() {
							(0, Ma.o)()
						}
					});

					function Da() {
						const f = Boolean(window.chrome),
							d = window.chesscom.features.includes("browser_extension_detector");
						return f && d
					}
					const xa = (0, s.VM)({
							emitter: zt.f,
							events: [Ut.q.Load],
							shouldLoad: Da,
							loader: () => e.e(5975).then(e.bind(e, 32441))
						}),
						Ra = (0, s.VM)({
							emitter: zt.f,
							events: [Ut.q.Load],
							shouldLoad: () => window.chesscom.features.includes("chessboard_performance_metrics_play"),
							loader: () => e.e(9966).then(e.bind(e, 67833))
						});
					var Ba = e(57187),
						Aa = e(96639),
						Zn = e(66025);

					function Sa() {
						if (!window.chesscom.features.includes("play_game_monitor") || (0, Zn.L)()) return !1;
						const f = Number(window.localStorage.getItem(Ba.$)) || 0;
						return Date.now() - f >= Aa.Q
					}
					const Ia = (0, s.VM)({
						triggers: [Ua, La],
						emitter: zt.f,
						events: [Ut.q.Load],
						shouldLoad: () => window.chesscom.features.includes("play_game_monitor"),
						loader: () => e.e(7287).then(e.bind(e, 62106))
					});

					function La(f) {
						(0, Zn.L)() && f()
					}
					async function Ua() {
						if (Sa()) {
							const {
								checkRequiredGames: f
							} = await e.e(2566).then(e.bind(e, 1803));
							f()
						}
					}
					const za = (0, s.VM)({
						triggers: [(0, s.$y)(X.x, [G.U.Open], () => window.chesscom.features.includes("play_smart_network_choice") && (0, Y.w)())],
						loader: () => e.e(5605).then(e.bind(e, 84370))
					});
					var be = e(13920),
						Le = e(53903),
						Ue = e(44704),
						Wa = e(89662),
						Vn = e(9058),
						Ka = e(84375),
						ja = e(82910),
						Na = e(51512);
					async function Fa(f) {
						await (0, Jt.Y)();
						const {
							hash: d,
							timestamp: M,
							color: B,
							gameType: $,
							isRated: te,
							opponent: he,
							timeControl: xe,
							initialPosition: ht
						} = f, Rt = {
							tid: "StartGame",
							hash: d,
							timestamp: M,
							to: he ? (0, Na.M)(he) : null,
							gametype: $,
							rated: te,
							color: !te || he ? B : void 0,
							basetime: xe.baseTime * 10,
							timeinc: Number(xe.timeIncrement) * 10,
							initpos: ht
						};
						(0, Ka.n)(ja.L.game, Rt)
					}

					function Ga(f) {
						return {
							hash: f.hash,
							timestamp: Number(f.timestamp),
							gameType: f.variant || "chess",
							isRated: f.rated !== "unrated",
							opponent: f.opponent,
							color: (0, Be.kK)(f.color) ? void 0 : Number(f.color),
							initialPosition: f.initialPosition,
							timeControl: {
								baseTime: Number(f.base),
								timeIncrement: Number(f.timeIncrement || 0),
								timeType: "live"
							}
						}
					}
					var $a = e(41553),
						Za = e(75170),
						Va = e(83187),
						Ha = e(19888),
						Qa = e(82261),
						Wt = e(78855),
						Hn = e(9081),
						Qn = e(75017);
					const Jn = /^-?[0-9]+$/;

					function Ja() {
						const f = (0, Wt.r)().params;
						let d = null,
							M = null;
						return (0, Be.kK)(f.minrating) ? d = (0, Qn.d)() : Jn.test(f.minrating) && (d = Number(f.minrating)), (0, Be.kK)(f.maxrating) ? M = (0, Hn.$)() : Jn.test(f.maxrating) && (M = Number(f.maxrating)), {
							ratingRange: {
								lower: d,
								upper: M
							},
							gameType: f.variant || "chess",
							isRated: f.rated !== "unrated",
							opponent: {
								username: f.opponent
							},
							color: f.color === "1" || f.color === "2" ? Number(f.color) : Qa.C.Random,
							timeControl: new Ha.W((0, Va.B)({
								baseTime: Number(f.base),
								timeIncrement: Number(f.timeIncrement || 0),
								timeType: "live"
							}))
						}
					}
					var Me = e(32494),
						Ya = e(53771);
					async function Xa(f) {
						await (0, Ya.n)({
							service: Me.AM.Matcher,
							path: [Me.nv.Challenges, f, Me.nv.Accept]
						})
					}
					var Pt = e(93567);

					function qa() {
						const f = (0, Wt.r)();
						switch (f.params.action) {
							case Pt.y.FollowLiveUser: {
								f.params.member && f.params.member.split("|").forEach(d => (0, $a.P)(d));
								break
							}
							case Pt.y.AcceptLiveChallenge: {
								(0, Vn.N)(Number(f.params.challengeId));
								break
							}
							case Pt.y.CreateLiveChallenge: {
								(0, Za.i)(Ja());
								break
							}
							case Pt.y.StartLiveGame: {
								Fa(Ga(f.params));
								break
							}
							case Pt.y.StartRcnGame: {
								Xa(f.params.rcnChallengeId);
								break
							}
							default:
								break
						}
					}
					var ei = e(62704),
						ti = e(22023),
						pn = e(93882),
						ni = e(63498),
						si = e(78599),
						Re = e(27713),
						Yn = e(16025),
						Xn = e(57251),
						ai = e(59933),
						fn = e(29121),
						qn = e(95883),
						ii = e(31439);

					function oi() {
						if (!(0, ze.n)()) return !1;
						let f = null;
						try {
							f = JSON.parse(window.localStorage.getItem(Re.vN) || "")
						} catch {}
						return Boolean(f?.autoSeek)
					}
					var Ct = e(59479),
						Pe = e(87671),
						Ce = e(61023);
					const ri = (0, s.eI)({
						init(f) {
							c.T.on(u.t.Update, this.onSettingsUpdate), Ue.z.on(Le.F.BughousePartnerAccepted, this.onBughousePartnerAccepted), Ue.z.on(Le.F.OutgoingChallengeSent, this.onOutgoingChallenge), Ue.z.on(Le.F.OutgoingChallengeAccepted, this.onOutgoingChallenge), Ue.z.on(Le.F.OutgoingChallengeDeclined, this.onOutgoingChallenge), Ue.z.on(Le.F.OutgoingChallengeCancelled, this.onOutgoingChallenge), Ue.z.on(Le.F.OutgoingChallengeCleared, this.onOutgoingChallenge), Ce.p.on(Pe.h.OutgoingChallengeSent, this.onOutgoingChallenge), Ce.p.on(Pe.h.OutgoingChallengeAccepted, this.onOutgoingChallenge), Ce.p.on(Pe.h.OutgoingChallengeDeclined, this.onOutgoingChallenge), Ce.p.on(Pe.h.OutgoingChallengeCancelled, this.onOutgoingChallenge), Ce.p.on(Pe.h.OutgoingChallengeCleared, this.onOutgoingChallenge), f.then(this.onAppInitialized), (0, ii.S)() && (0, ei.a)()
						},
						onAppInitialized() {
							var f;
							Object.assign(Ct.m.challengeOptions, (0, ai.d)(!0)), ((f = Ct.m.challengeOptions.opponent) == null ? void 0 : f.username) && !Ct.m.challengeOptions.opponent.uuid && (0, ni.Q)(Ct.m.challengeOptions.opponent), (0, be.YP)(Ct.m, () => {
								Xn.S.emit(Yn.l.UpdateChallengeOptions)
							}), oi() && (0, Wa.r)(), (0, N.j)() && qa()
						},
						onBughousePartnerAccepted({
							from: f
						}) {
							(0, ti.B)(f)
						},
						onSettingsUpdate() {
							(0, si.j)({
								upper: (0, Hn.$)(),
								lower: (0, Qn.d)()
							})
						},
						onOutgoingChallenge() {
							(0, qn.r)().length ? (0, pn.m)(Re.H5.outgoingChallenges) : (0, fn.S)() === Re.H5.outgoingChallenges && (0, pn.m)(Re.H5.default)
						}
					});
					var li = e(88380);
					const ci = (0, s.VM)({
						triggers: [(0, s.$y)(Xn.S, [Yn.l.UpdateChallengeOptions], li.H)],
						loader: () => Promise.all([e.e(7952), e.e(5176)]).then(e.bind(e, 90517))
					});
					var $e = (f => (f[f.AcceptLiveChallenge = 0] = "AcceptLiveChallenge", f[f.CancelLiveChallenge = 1] = "CancelLiveChallenge", f[f.DeclineLiveChallenge = 2] = "DeclineLiveChallenge", f[f.AcceptRcnChallenge = 3] = "AcceptRcnChallenge", f[f.CancelRcnChallenge = 4] = "CancelRcnChallenge", f[f.DeclineRcnChallenge = 5] = "DeclineRcnChallenge", f[f.ShowIncomingChallenge = 6] = "ShowIncomingChallenge", f[f.HideIncomingChallenge = 7] = "HideIncomingChallenge", f[f.ShowOutgoingChallenge = 8] = "ShowOutgoingChallenge", f[f.HideOutgoingChallenge = 9] = "HideOutgoingChallenge", f))($e || {});
					const Qe = (0, s.QD)({
						broadcastChannelId: "notifications"
					});

					function es({
						challengeId: f
					}) {
						Qe.emit($e.HideIncomingChallenge, {
							challengeId: f
						})
					}

					function ts({
						challengeId: f
					}) {
						Qe.emit($e.HideOutgoingChallenge, {
							challengeId: f
						})
					}

					function ns(f) {
						Qe.emit($e.ShowIncomingChallenge, {
							challenge: f
						})
					}

					function ss(f) {
						Qe.emit($e.ShowOutgoingChallenge, {
							challenge: f
						})
					}
					var Kt = (f => (f[f.Live = 0] = "Live", f[f.RCN = 1] = "RCN", f))(Kt || {}),
						ui = e(52593),
						di = e(27251);
					const mi = (0, s.eI)({
						init() {
							Ue.z.on(Le.F.IncomingChallengeReceived, this.showIncomingLiveChallenge), Ue.z.on(Le.F.IncomingChallengeAccepted, this.hideIncomingLiveChallenge), Ue.z.on(Le.F.IncomingChallengeDeclined, this.hideIncomingLiveChallenge), Ue.z.on(Le.F.IncomingChallengeCancelled, this.hideIncomingLiveChallenge), Ue.z.on(Le.F.OutgoingChallengeSent, this.showOutgoingLiveChallenge), Ue.z.on(Le.F.OutgoingChallengeAccepted, this.hideOutgoingLiveChallenge), Ue.z.on(Le.F.OutgoingChallengeDeclined, this.hideOutgoingLiveChallenge), Ue.z.on(Le.F.OutgoingChallengeCancelled, this.hideOutgoingLiveChallenge), Qe.on($e.AcceptLiveChallenge, this.onAcceptLiveChallenge), Qe.on($e.CancelLiveChallenge, this.onCancelLiveChallenge), Qe.on($e.DeclineLiveChallenge, this.onDeclineLiveChallenge)
						},
						hideIncomingLiveChallenge(f) {
							!f.challenge || es({
								challengeId: f.challenge.id
							})
						},
						showIncomingLiveChallenge(f) {
							if (!f.challenge) return;
							const d = f.challenge,
								M = f.challenge.getFrom();
							ns({
								username: M.getUsername(),
								rated: d.isRatedChallenge(),
								timeControl: d.getTimeControl(),
								rating: M.getRating(d.getRatingType()),
								country: M.getCountry(),
								flairCode: M.getFlairCode(),
								membership: M.getMembership(),
								gameType: d.getGameType(),
								id: d.getChallengeId(),
								avatarUrl: M.getAvatar(),
								chessTitle: M.getChessTitle(),
								isTwitchSubscriber: M.twitchsubscriber,
								type: Kt.Live
							})
						},
						showOutgoingLiveChallenge(f) {
							var d;
							if (!f.challenge) return;
							const M = f.challenge,
								B = (d = M.getTo()) != null ? d : M.getFrom();
							ss({
								username: B.getUsername(),
								rated: M.isRatedChallenge(),
								timeControl: M.getTimeControl(),
								rating: B.getRating(M.getRatingType()),
								country: B.getCountry(),
								membership: B.getMembership(),
								flairCode: B.getFlairCode(),
								gameType: M.getGameType(),
								id: M.getChallengeId(),
								avatarUrl: B.getAvatar(),
								chessTitle: B.getChessTitle(),
								isTwitchSubscriber: B.twitchsubscriber,
								type: Kt.Live
							})
						},
						hideOutgoingLiveChallenge(f) {
							!f.challenge || ts({
								challengeId: f.challenge.id
							})
						},
						onAcceptLiveChallenge({
							challengeId: f
						}) {
							(0, Vn.N)(Number(f))
						},
						onCancelLiveChallenge({
							challengeId: f
						}) {
							(0, ui.h)(Number(f))
						},
						onDeclineLiveChallenge({
							challengeId: f
						}) {
							(0, di.U)(Number(f))
						}
					});
					var bn = e(67842),
						as = e(67399),
						Ne = e(15875),
						Tt = (f => (f.Waiting = "live-connection-waiting", f.Terminated = "live-connection-terminated", f))(Tt || {});
					const hi = (0, s.eI)({
						init() {
							O.c.on(k.F.ConnectionEstablished, this.onConnectionEstablished), O.c.on(k.F.ConnectionTerminated, this.onConnectionTerminated), O.c.on(k.F.ConnectionRefused, this.onConnectionTerminated), O.c.on(k.F.ConnectionWaiting, this.onConnectionWaiting)
						},
						onConnectionEstablished() {
							(0, bn.t)({
								keys: [Tt.Waiting]
							}), (0, bn.t)({
								keys: [Tt.Terminated]
							})
						},
						onConnectionWaiting() {
							(0, as.w)({
								keys: [Tt.Waiting],
								duration: 0,
								content: (0, Ne.dW)("Please wait, it's taking longer than usual to connect.")
							})
						},
						onConnectionTerminated({
							reason: f
						}) {
							O.c.off({
								type: k.F.ConnectionWaiting,
								handler: this.onConnectionWaiting
							}), (0, bn.t)({
								keys: [Tt.Waiting]
							});
							let d;
							switch (f) {
								case "user-kicked":
									d = (0, Ne.dW)("You have been kicked. Please, wait 30 minutes to reconnect");
									break;
								case "user-reenter":
									d = (0, Ne.dW)("This connection was closed because you logged in on another browser or device.");
									break;
								case "server-stopped":
								case "server-shutdown":
									d = (0, Ne.dW)("You have been disconnected. Please, wait until server is restarted.");
									break;
								default:
									d = (0, Ne.dW)("You have been disconnected. Please, refresh the page to reconnect.");
									break
							}(0, as.w)({
								keys: [Tt.Terminated],
								duration: 0,
								content: d
							})
						}
					});
					var _i = e(57806),
						gi = e(99079),
						pi = e(57071);
					const fi = (0, s.eI)({
							init() {
								Ce.p.on(Pe.h.IncomingChallengeAccepted, this.hideIncomingRcnChallenge), Ce.p.on(Pe.h.IncomingChallengeCancelled, this.hideIncomingRcnChallenge), Ce.p.on(Pe.h.IncomingChallengeDeclined, this.hideIncomingRcnChallenge), Ce.p.on(Pe.h.IncomingChallengeReceived, this.showIncomingRcnChallenge), Ce.p.on(Pe.h.OutgoingChallengeAccepted, this.hideOutgoingRcnChallenge), Ce.p.on(Pe.h.OutgoingChallengeCancelled, this.hideOutgoingRcnChallenge), Ce.p.on(Pe.h.OutgoingChallengeDeclined, this.hideOutgoingRcnChallenge), Ce.p.on(Pe.h.OutgoingChallengeSent, this.showOutgoingRcnChallenge), Qe.on($e.AcceptRcnChallenge, this.onAcceptRcnChallenge), Qe.on($e.CancelRcnChallenge, this.onCancelRcnChallenge), Qe.on($e.DeclineRcnChallenge, this.onDeclineRcnChallenge)
							},
							hideIncomingRcnChallenge(f) {
								es({
									challengeId: f.challenge.id
								})
							},
							showIncomingRcnChallenge(f) {
								var d;
								const M = f.challenge,
									B = M.getFrom();
								ns({
									username: B.getUsername(),
									rated: M.isRatedChallenge(),
									timeControl: M.getTimeControl(),
									country: B.getCountry(),
									flairCode: B.getFlairCode(),
									membership: B.membership,
									gameType: M.getGameType(),
									id: M.getChallengeId(),
									avatarUrl: B.getHighResAvatar(),
									chessTitle: B.getChessTitle(),
									rating: (d = B.getRating()) != null ? d : void 0,
									type: Kt.RCN
								})
							},
							hideOutgoingRcnChallenge(f) {
								ts({
									challengeId: f.challenge.id
								})
							},
							showOutgoingRcnChallenge(f) {
								var d;
								const M = f.challenge,
									B = (d = M.getTo()) != null ? d : M.getFrom();
								ss({
									username: B.getUsername(),
									rated: M.isRatedChallenge(),
									timeControl: M.getTimeControl(),
									country: B.getCountry(),
									flairCode: B.getFlairCode(),
									membership: B.membership,
									gameType: M.getGameType(),
									id: M.getChallengeId(),
									avatarUrl: B.getHighResAvatar(),
									chessTitle: B.getChessTitle(),
									type: Kt.RCN
								})
							},
							onAcceptRcnChallenge({
								challengeId: f
							}) {
								(0, _i.l)(String(f))
							},
							onCancelRcnChallenge({
								challengeId: f
							}) {
								(0, gi.z)(String(f))
							},
							onDeclineRcnChallenge({
								challengeId: f
							}) {
								(0, pi.P)(String(f))
							}
						}),
						bi = (0, s.eI)({
							init() {
								hi.init(), mi.init(), fi.init()
							}
						}),
						vi = (0, s.VM)({
							shouldLoad: () => (0, N.j)() && (0, We.q)(),
							loader: () => e.e(1744).then(e.bind(e, 95481))
						}),
						yi = (0, s.VM)({
							triggers: [(0, s.$y)(ge.Z, [re.L.Open]), (0, s.$y)(Ce.p, [Pe.h.Match])],
							loader: () => Promise.all([e.e(868), e.e(76)]).then(e.bind(e, 48527))
						}),
						wi = (0, s.VM)({
							emitter: ge.Z,
							events: [re.L.Open],
							loader: () => Promise.all([e.e(868), e.e(7952), e.e(7558)]).then(e.bind(e, 4235))
						}),
						Ei = (0, s.VM)({
							emitter: ge.Z,
							events: [re.L.Open],
							loader: () => Promise.all([e.e(868), e.e(7672)]).then(e.bind(e, 96699))
						});
					var Pi = e(38015),
						jt = e(16382),
						is = e(19934),
						Xt = e(34308),
						Ot = e(91482);

					function Ci(f) {
						(0, gt.A)(Ot.p.pendingChallenges, d => {
							const M = d.toUserId ? f.toUserId === d.toUserId : f.type === is.o.Seek,
								B = (0, Xt.k)(d.timeControl.base) === (0, Xt.k)(f.timeControl.base) && (0, Xt.k)(d.timeControl.increment) === (0, Xt.k)(f.timeControl.increment);
							return M && B
						})
					}
					var Ti = e(72096),
						Oi = e(41654),
						Mi = e(70763),
						os = e(43275);
					async function ki(f) {
						const d = (0, Se.S)(),
							M = await (0, os.U)({
								players: f.toUserId ? [f.userId, f.toUserId] : [f.userId],
								contextUser: d,
								playersDetails: f.playersDetails
							}),
							B = Ot.p.challenges.update({
								...f,
								playersDetails: M
							});
						f.type === is.o.Seek ? Ce.p.emit(Pe.h.OutgoingChallengeSent, {
							challenge: B
						}) : B.isTo(d) ? ((0, Mi.a)(B), Ce.p.emit(Pe.h.IncomingChallengeReceived, {
							challenge: B
						})) : B.getTo() && Ce.p.emit(Pe.h.OutgoingChallengeSent, {
							challenge: B
						})
					}
					var Di = e(70855);
					async function xi({
						message: f
					}) {
						const {
							game: d,
							id: M,
							source: B,
							state: $
						} = f;
						B && B !== Pi.M.RCN || ($ === jt.Q.Active && await ki(f), Ci(f), $ === jt.Q.Accepted && d && (0, Ti.A)(M, d), $ === jt.Q.Rejected && (0, Di.N)(M), $ === jt.Q.Cancelled && (0, Oi.O)(M))
					}
					var vn = e(86580);
					async function Ri(f, d) {
						const M = f.toUserId ? [f.userId, f.toUserId] : [f.userId],
							B = await (0, os.U)({
								players: M,
								playersDetails: f.playersDetails,
								contextUser: d
							});
						return {
							...f,
							playersDetails: B
						}
					}
					async function rs(f, d) {
						const {
							data: M
						} = await (0, vn.h)({
							service: Me.AM.Matcher,
							path: f
						});
						return M?.challenges ? Promise.all(M.challenges.filter(({
							state: B
						}) => B === jt.Q.Active).map(B => Ri(B, d))) : []
					}
					async function Bi() {
						const f = (0, Se.S)(),
							[d, M] = await Promise.all([rs(Me.nv.Challenges, f), rs(Me.nv.Seeks, f)]);
						Ot.p.challenges.reset([...d, ...M])
					}
					async function Ai() {
						var f;
						const {
							data: d
						} = await (0, vn.h)({
							path: Me.nv.Games,
							service: Me.AM.Play
						});
						(f = d.games) == null || f.forEach(M => {
							Ce.p.emit(Pe.h.Match, {
								rcnGameRef: M
							})
						})
					}
					var Si = e(4358);
					async function Ii() {
						return (0, ie.b)(Si.M, ({
							channel: f,
							message: d
						}) => {
							Ce.p.emit(Pe.h.Update, {
								channel: f,
								message: d
							})
						})
					}
					async function Li() {
						try {
							await Promise.all([Ii(), Bi(), Ai()]), Ot.p.isRcnMatcherReady = !0
						} catch (f) {
							throw Ot.p.isRcnMatcherEnabled = !1, f
						}
					}
					var Ui = e(38225);
					const zi = (0, s.eI)({
						init() {
							!(0, Ui._)() || (Li(), Ce.p.on(Pe.h.Update, xi))
						}
					});
					var ls = e(54967);
					const Wi = (0, s.eI)({
						init(f) {
							window.addEventListener("popstate", this.onHistoryBack), f.then(() => (0, ls.U)())
						},
						onHistoryBack() {
							(0, ls.U)()
						}
					});
					var Ki = e(49048),
						ji = e(17726);
					const Ni = (0, s.eI)({
						init() {
							return (0, N.j)() ? (window.addEventListener("focus", this.onWindowFocus), (0, Ki.o)()) : Promise.resolve()
						},
						onWindowFocus() {
							(0, ji.i)()
						}
					});
					var Fi = e(32662),
						Gi = e(46085);

					function $i() {
						var f;
						((f = (0, Fi.I)(Et.V.OpenGames.key)) == null ? void 0 : f.visible) && (0, Gi.I)().every(d => d.result) && (0, wt.X)(Et.V.OpenGames.key, !1)
					}
					var Zi = e(2005),
						cs = e(92946),
						Vi = e(92139);
					const yn = "boards";

					function Hi() {
						Qi().filter(f => f.type !== le.V.DailyGame || (0, Wt.r)().name !== z.Q.DailyGame).forEach(f => {
							switch ((0, Vi.U)({
									id: f.id,
									type: f.type
								}), f.type) {
								case le.V.LiveGame:
									(0, It.y)(f.id);
									break;
								case le.V.DailyGame:
									f.isVsComputer ? de(f.id, z.Q.ComputerGame) : f.isLiveGame ? de(f.id, z.Q.LiveGame) : (0, Zi.F)(f.id);
									break;
								case le.V.RcnGame:
									(0, vt.a)(f.id);
									break;
								default:
									break
							}
						}), window.sessionStorage.removeItem(yn)
					}

					function Qi() {
						if ((0, cs.K)({
								name: z.Q.Play
							}) || window.Cypress) return [];
						try {
							const f = JSON.parse(window.sessionStorage.getItem(yn) || "{}");
							if (f.url === document.referrer) return f.boards
						} catch {}
						return []
					}
					async function Ji() {
						Object.values(Et.V).forEach(f => {
							const d = Yi(f.storageKey);
							d && se.B.floatingModals.push({
								...f,
								...d,
								visible: !1
							})
						})
					}

					function Yi(f) {
						var d;
						try {
							return JSON.parse((d = window.localStorage.getItem(f)) != null ? d : "")
						} catch {
							return null
						}
					}
					var Mt = e(51321),
						dt = e(65077),
						mt = e(56626),
						Xi = e(40946);

					function qi() {
						const f = (0, Xi.D)().map(d => {
							var M, B, $, te;
							return d.type === le.V.LiveGame && ((M = (0, dt.S)(d.id)) == null ? void 0 : M.isOver()) || d.type === le.V.RcnGame && ((B = (0, mt.M)(d.id)) == null ? void 0 : B.isOver()) ? {
								type: le.V.DailyGame,
								id: d.id,
								isLiveGame: !0
							} : d.type === le.V.DailyGame ? {
								type: le.V.DailyGame,
								id: d.id,
								isVsComputer: ($ = (0, Mt.P)(d.id)) == null ? void 0 : $.isVsComputer,
								isLiveGame: (te = (0, Mt.P)(d.id)) == null ? void 0 : te.isLiveGame
							} : {
								type: d.type,
								id: d.id
							}
						});
						window.sessionStorage.setItem(yn, JSON.stringify({
							boards: f,
							url: window.location.href
						}))
					}
					const eo = (0, s.eI)({
						init(f) {
							window.addEventListener("pagehide", this.onPageHide), f.then(() => {
								Hi(), Ji()
							})
						},
						onPageHide() {
							$i(), qi()
						}
					});
					var us = e(56110),
						ds = e(92877),
						to = e(52966);

					function no() {
						(0, ds.g)(Object.values(to.t))
					}
					var so = e(46223),
						ms = e(30652);

					function ao() {
						const {
							soundTheme: f
						} = (0, so.T)(), d = ms.S.loaded.filter(M => M.theme !== f).map(M => M.code);
						(0, ds.g)(d)
					}
					var io = function() {
							var d = this,
								M = d._self._c;
							return M("alert-banner", {
								attrs: {
									alert: d.alert,
									action: d.action,
									dismiss: d.dismiss
								}
							})
						},
						oo = [],
						ro = function() {
							var d = this,
								M = d._self._c;
							return M("div", {
								class: [d.$style.component, d.$style[d.alert.type]],
								attrs: {
									id: `alert-${d.alert.id}`
								}
							}, [M("span", {
								class: d.$style.message,
								domProps: {
									innerHTML: d._s(d.alert.message)
								}
							}), d._v(" "), d.action ? M("v5-button", {
								attrs: {
									size: "x-small",
									type: "button",
									theme: d.action.theme
								},
								on: {
									click: d.action.handler
								}
							}, [d._v(`
    ` + d._s(d.action.text) + `
  `)]) : d._e(), d._v(" "), M("button", {
								class: d.$style.close,
								attrs: {
									type: "button"
								},
								on: {
									click: d.removeAlert
								}
							}, [M("span", {
								staticClass: "icon-font-chess x",
								class: d.$style.icon
							})]), d._v(" "), d.alert.flashCount ? M("img", {
								class: d.$style["log-image"],
								attrs: {
									alt: "",
									width: "1",
									height: "1",
									src: d.path
								}
							}) : d._e()], 1)
						},
						lo = [],
						co = e(56279),
						hs = e(63966),
						uo = e(30493),
						Ye = e(57061),
						h_ = e(400);

					function mo({
						contentType: f,
						contentId: d
					}) {
						let M = Ye.ZC.setArticleFeature;
						return f === Ye._G.BLOG ? M = Ye.ZC.setBlogFeature : f === Ye._G.VIDEO ? M = Ye.ZC.setVideoFeature : f === Ye._G.NEWS ? M = Ye.ZC.setNewsFeature : f === Ye._G.LESSONS && (M = Ye.ZC.setLessonsFeature), lt.Z.post(Ke.Z.generate(M, {
							id: d
						}))
					}

					function _s(f) {
						const M = Object.entries(window.chesscom_translations.messages).find(([B, $]) => $ === f || B === f);
						return M ? M[0] : f
					}

					function ho({
						contentType: f,
						contentId: d
					}) {
						return lt.Z.get(Ke.Z.generate("web_content_callback_headline", {
							contentType: f,
							contentId: d
						}))
					}

					function __() {
						const f = document.getElementById("sync-comments-count");
						f?.addEventListener("click", d => {
							d.preventDefault(), http.post(Router.generate("web_content_callback_comments_sync", {
								type: f.getAttribute("content-type"),
								id: f.getAttribute("content-id")
							})).then(() => {
								createAlert({
									type: types.success,
									message: contentTrans.commentsSynced
								})
							}).catch(handleError)
						})
					}
					var g_ = {
							featureContent: mo,
							getNonTranslatedString: _s,
							headlineContent: ho
						},
						Nt = e(31152),
						_o = {
							name: "TemplateAlertBanner",
							components: {
								V5Button: co.V5Button
							},
							inheritAttrs: !1,
							props: {
								alert: {
									type: Object,
									required: !0,
									validator(f) {
										return !f.id || typeof f.message != "string" || f.message.length < 1 ? !1 : Object.keys(hs.V5).some(d => hs.V5[d] === f.type)
									}
								},
								dismiss: {
									type: Function,
									required: !0
								},
								action: {
									type: Object,
									validator(f) {
										return !(typeof f.text != "string" || f.text.length < 1 || typeof f.theme != "string" || f.theme.length < 1 || typeof f.handler != "function")
									}
								}
							},
							computed: {
								cache() {
									return Math.floor(Math.random() * 100 * 1e3 * 1e3 * 1e3)
								},
								convertMessageToPath() {
									return encodeURI(this.untranslatedMessage)
								},
								path() {
									return `${(0,Nt.n)("bundles/web/images/clear.gif")}?msg=${this.convertMessageToPath}&flashCount=${this.alert.flashCount}&cachebust=${this.cache}`
								},
								untranslatedMessage() {
									return _s(this.alert.message)
								}
							},
							methods: {
								removeAlert() {
									(0, uo.ue)(this.alert.id, () => {
										this.dismiss(this.alert.id)
									})
								}
							}
						},
						go = _o,
						gs = {
							component: "alert-banner-component",
							showAlert: "alert-banner-showAlert",
							message: "alert-banner-message",
							error: "alert-banner-error",
							info: "alert-banner-info",
							topical: "alert-banner-topical",
							success: "alert-banner-success",
							warning: "alert-banner-warning",
							close: "alert-banner-close",
							icon: "alert-banner-icon",
							dismissing: "alert-banner-dismissing",
							hideAlert: "alert-banner-hideAlert",
							"log-image": "alert-banner-log-image"
						},
						me = e(51900);

					function po(f) {
						this.$style = gs.locals || gs
					}
					var fo = (0, me.Z)(go, ro, lo, !1, po, null, null),
						bo = fo.exports,
						vo = {
							name: "SoundBanner",
							components: {
								alertBanner: bo
							},
							computed: {
								alert() {
									return {
										id: "sound",
										message: this.$trans("Your browser is not currently playing sounds. Any action will enable it automatically."),
										type: "info"
									}
								},
								action() {
									return {
										text: this.$trans("Enable sounds"),
										theme: "basic-white",
										handler: () => {}
									}
								}
							},
							methods: {
								dismiss() {}
							}
						},
						yo = vo,
						wo = (0, me.Z)(yo, io, oo, !1, null, null, null),
						Eo = wo.exports;

					function Po() {
						const f = document.getElementById("alert-sound");
						f && f.parentNode && f.parentNode.removeChild(f)
					}

					function Co() {
						const f = document.createElement("div"),
							d = document.querySelector(".alert-flash-component");
						d && (d.appendChild(f), new be.ZP(Eo).$mount(f))
					}
					const To = (0, s.eI)({
						init() {
							no(), c.T.on(u.t.Update, ao), window.addEventListener("message", this.onWindowMessage)
						},
						onWindowMessage({
							data: f
						}) {
							switch (f && f.key) {
								case us.S.Suspended:
									Co();
									break;
								case us.S.Enabled:
									Po();
									break;
								default:
									break
							}
						}
					});
					var Oo = e(97205),
						Mo = e(13527);
					const ko = (0, s.VM)({
						triggers: [(0, s.$y)(ge.Z, [re.L.Open], ({
							rcnGame: f
						}) => Boolean((0, Mo.C)(f).length)), (0, s.$y)(X.x, [G.U.Open], ({
							liveGame: f
						}) => Boolean((0, Oo.x)(f).length))],
						loader: () => e.e(5019).then(e.bind(e, 918))
					});
					var Do = e(13258),
						xo = e(30025),
						Ro = e(46238),
						ps = e(61681),
						fs = e(45466);
					async function Bo(f) {
						const {
							data: d
						} = await (0, vn.h)({
							path: [fs.uF.Users, f],
							params: {
								withInitial: !0
							},
							service: fs.AM.Ratings
						});
						return Ao(d)
					}

					function Ao(f) {
						const {
							bughouse: d,
							chess: M,
							chess960: B,
							crazyhouse: $,
							oddschess: te,
							threecheck: he,
							kingofthehill: xe
						} = f.ratings, {
							blitz: ht,
							bullet: Rt,
							daily: ln,
							rapid: m_
						} = M;
						return {
							blitz: ht.rating,
							bughouse: d.blitz.rating,
							bullet: Rt.rating,
							chess960: B.blitz.rating,
							crazyhouse: $.blitz.rating,
							daily: ln.rating,
							oddschess: te.blitz.rating,
							threecheck: he.blitz.rating,
							kingofthehill: xe.blitz.rating,
							rapid: m_.rating
						}
					}
					var qt = e(61207);
					async function So() {
						var f;
						const d = (f = window.context.user) == null ? void 0 : f.uuid;
						if (!d) return;
						let M = null;
						const B = {
							attempts: 4,
							delay: $ => $ * 1e3,
							captureError: ($, te) => {
								var he;
								const xe = (he = $?.response) == null ? void 0 : he.status;
								xe && xe !== 500 && xe !== 502 && (0, Ro.T)(`failed to load user ratings (attempt: ${te}; status: ${xe})`, {
									error: $,
									uuid: d
								})
							}
						};
						try {
							M = await (0, xo.x)(() => Bo(d), B)
						} catch ($) {
							(0, Do.T)($)
						}
						M ? ((0, ps.B)(M), qt.B.hasLoadedUserRatings = !0) : qt.B.hasFailedToLoadUserRatings = !0
					}
					const Io = (0, s.eI)({
						init() {
							window.chesscom.features.includes("play_load_ratings_from_platform") ? So() : je.e.on(H.b.User, this.onUser)
						},
						onUser({
							data: f
						}) {
							(0, ps.B)(f.user), qt.B.hasLoadedUserRatings = !0
						}
					});
					var Lo = [o, h, P, V, S, _e, ve, q, Te, ae, st, ha, _a, ga, pa, fa, ba, va, ya, Ea, wa, Pa, Ca, Ta, Oa, xa, Ra, ka, Ia, za, ci, ri, bi, vi, wi, yi, Ei, zi, Wi, Ni, eo, To, ko, Io],
						Uo = function() {
							var d = this,
								M = d._self._c,
								B = d._self._setupProxy;
							return M("board-controls", {
								attrs: {
									"is-board-images-palette-visible": d.isBoardImagesPaletteVisible,
									"is-menu-icon-visible": d.isMenuIconVisible,
									"is-focus-mode-supported": d.isFocusModeSupported
								},
								on: {
									"click-board-images-palette": d.onClickBoardImagesPalette,
									"click-settings": d.onClickSettings,
									"click-focus": d.onClickFocus,
									"click-theatre": d.onClickTheatre,
									"click-flip": d.onClickFlip,
									"click-menu": d.onClickMenu
								}
							})
						},
						zo = [],
						Wo = e(39041),
						bs = e(12598);

					function Ko(f) {
						const d = document.getElementById("board-layout-controls");
						d && (0, Wo.o)(d, bs.I.BodyClass.HideBoardIcons, f)
					}
					var tt = e(7958);

					function jo() {
						return Boolean(tt.h.position)
					}

					function vs(f, d = "right") {
						if (!jo()) {
							if (f) {
								const M = f.getBoundingClientRect();
								if (M) {
									let te = d === "right" ? M.top - 33 : M.top - 400 - 10,
										he = d === "right" ? M.left + 33 : M.left - (300 - M.width) / 2;
									te = Math.max(0, te), te = Math.min(window.innerHeight - 400, te), he = Math.max(0, he), he = Math.min(window.innerWidth - 300, he);
									const xe = {
										top: te,
										left: he,
										width: 300,
										height: 400
									};
									tt.h.position || (tt.h.position = xe), Object.assign(tt.h.position, xe)
								}
							}(0, s.tL)(() => e.e(7182).then(e.bind(e, 27182))), tt.h.isVisible = !0;
							return
						}
						tt.h.isVisible = !tt.h.isVisible
					}
					var No = function() {
							var d = this,
								M = d._self._c,
								B = d._self._setupProxy;
							return M("div", [M("button", {
								directives: [{
									name: "tooltip",
									rawName: "v-tooltip",
									value: d.$trans("Settings"),
									expression: "$trans('Settings')"
								}],
								staticClass: "board-layout-icon icon-font-chess circle-gearwheel",
								attrs: {
									id: "board-controls-settings",
									"aria-label": d.$trans("Settings"),
									type: "button"
								},
								on: {
									click: function($) {
										return d.$emit("click-settings")
									}
								}
							}), d._v(" "), d.isFocusModeSupported ? M("button", {
								directives: [{
									name: "tooltip",
									rawName: "v-tooltip",
									value: d.$trans("Focus Mode"),
									expression: "$trans('Focus Mode')"
								}],
								staticClass: "board-layout-icon icon-font-chess maximize",
								attrs: {
									id: "board-controls-focus",
									"aria-label": d.$trans("Focus Mode"),
									type: "button"
								},
								on: {
									click: function($) {
										return d.$emit("click-focus")
									}
								}
							}) : d._e(), d._v(" "), d.isFocusModeSupported ? M("button", {
								directives: [{
									name: "tooltip",
									rawName: "v-tooltip",
									value: d.$trans("Theatre Mode"),
									expression: "$trans('Theatre Mode')"
								}],
								staticClass: "board-layout-icon icon-font-chess theatre",
								attrs: {
									id: "board-controls-theatre",
									"aria-label": d.$trans("Theatre Mode"),
									type: "button"
								},
								on: {
									click: function($) {
										return d.$emit("click-theatre")
									}
								}
							}) : d._e(), d._v(" "), M("button", {
								directives: [{
									name: "tooltip",
									rawName: "v-tooltip",
									value: d.$trans("Flip Board"),
									expression: "$trans('Flip Board')"
								}],
								staticClass: "board-layout-icon icon-font-chess repeat",
								attrs: {
									id: "board-controls-flip",
									"aria-label": d.$trans("Flip Board"),
									type: "button"
								},
								on: {
									click: function($) {
										return d.$emit("click-flip")
									}
								}
							}), d._v(" "), d.isMenuIconVisible ? M("button", {
								directives: [{
									name: "tooltip",
									rawName: "v-tooltip",
									value: {
										content: d.$trans("Menu"),
										position: "right"
									},
									expression: "{ content: $trans('Menu'), position: 'right' }"
								}],
								staticClass: "board-layout-icon icon-font-chess chess-pawn",
								class: d.$style["menu-icon"],
								attrs: {
									id: "board-controls-menu",
									"aria-label": d.$trans("Menu"),
									type: "button"
								},
								on: {
									click: function($) {
										return d.$emit("click-menu")
									}
								}
							}) : d._e(), d._v(" "), d.isBoardImagesPaletteVisible ? M("button", {
								directives: [{
									name: "tooltip",
									rawName: "v-tooltip",
									value: d.$trans("Emoji Palette"),
									expression: "$trans('Emoji Palette')"
								}],
								staticClass: "board-layout-icon icon-font-chess smileyadd",
								attrs: {
									"aria-label": d.$trans("Emoji Palette"),
									type: "button"
								},
								on: {
									click: function($) {
										return d.$emit("click-board-images-palette", $)
									}
								}
							}) : d._e()])
						},
						Fo = [],
						Ft = e(79883),
						Go = (0, be.aZ)({
							name: "BoardControls",
							directives: {
								tooltip: Ft.ZP
							},
							props: {
								isBoardImagesPaletteVisible: {
									type: Boolean,
									default: !1
								},
								isMenuIconVisible: {
									type: Boolean,
									default: !1
								},
								isFocusModeSupported: {
									type: Boolean,
									default: !1
								}
							},
							emits: ["click-board-images-palette", "click-settings", "click-focus", "click-theatre", "click-flip", "click-menu"]
						}),
						$o = Go,
						ys = {
							"menu-icon": "board-controls-menu-icon"
						};

					function Zo(f) {
						this.$style = ys.locals || ys
					}
					var Vo = (0, me.Z)($o, No, Fo, !1, Zo, null, null),
						Ho = Vo.exports,
						Qo = e(32786),
						en = e(13309);

					function Jo() {
						return Ae.N.isFocusModeSupported
					}
					var wn = e(56904),
						Yo = (0, be.aZ)({
							el: "#board-controls",
							name: "BoardControlsController",
							components: {
								BoardControls: Ho
							},
							computed: {
								activeBoard() {
									return (0, He.H)()
								},
								isBoardImagesPaletteVisible() {
									return Boolean(this.activeBoard)
								},
								isMenuIconVisible() {
									return (0, wn.x)() || (0, en.G)()
								},
								isFocusModeSupported() {
									return Jo()
								}
							},
							watch: {
								activeBoard: {
									immediate: !0,
									handler() {
										Ko(Boolean(this.activeBoard))
									}
								}
							},
							methods: {
								onClickBoardImagesPalette({
									target: f
								}) {
									vs(f)
								},
								onClickSettings() {
									(0, Q.e)()
								},
								onClickFlip() {
									(0, Qo.V)()
								},
								onClickFocus() {
									(0, ct.w)()
								},
								onClickTheatre() {
									St()
								},
								onClickMenu() {
									St(!1)
								}
							}
						}),
						Xo = Yo,
						qo = (0, me.Z)(Xo, Uo, zo, !1, null, null, null),
						er = qo.exports,
						tr = function() {
							var d = this,
								M = d._self._c,
								B = d._self._setupProxy;
							return M("player-controller", {
								attrs: {
									position: "bottom"
								}
							})
						},
						nr = [],
						sr = function() {
							var d = this,
								M = d._self._c,
								B = d._self._setupProxy;
							return M("player", {
								attrs: {
									"arena-place": d.arenaPlace,
									"board-id": d.boardId,
									"club-avatar": d.clubAvatar,
									"club-name": d.clubName,
									color: d.color,
									connection: d.connection,
									country: d.player.country,
									"flair-code": d.player.flairCode,
									"full-name": d.player.fullName,
									"is-captured-pieces-visible": d.isCapturedPiecesVisible,
									"is-current-user": d.isCurrentUser,
									"is-focus-mode": d.isFocusMode,
									"is-online": d.player.isOnline,
									"is-seeking-tagline-visible": d.isSeekingTaglineVisible,
									"is-theatre-mode": d.isTheatreMode,
									membership: d.membership,
									"outgoing-challenges": d.outgoingChallenges,
									position: d.position,
									"rating-range": d.ratingRange,
									rating: d.rating,
									score: d.score,
									"show-full-name": d.showFullName,
									squares: d.squares,
									"timeout-notification": d.timeoutNotification,
									title: d.player.chessTitle,
									"user-avatar": d.player.avatarUrl,
									username: d.player.username
								},
								on: {
									"click-user": d.onClickUser
								}
							}, [d.isQuickChatEnabled ? M("player-quick-chat", {
								attrs: {
									position: d.position,
									"player-index": d.playerIndex
								}
							}) : d._e(), d._v(" "), M("player-clock", {
								attrs: {
									position: d.position,
									"player-index": d.playerIndex
								}
							})], 1)
						},
						ar = [],
						ir = e(99670),
						ws = e(31813),
						Es = e(15413),
						or = function() {
							var d = this,
								M = d._self._c,
								B = d._self._setupProxy;
							return M("div", {
								class: d.componentClasses,
								on: {
									click: d.onClick
								}
							}, [!d.isCompact && d.hasArenaPlace ? M("arena-score", {
								attrs: {
									place: d.arenaPlace,
									score: d.score
								}
							}) : d._e(), d._v(" "), !d.isCompact && d.hasGrudgeScore && !d.hasArenaPlace ? M("grudge-score", {
								attrs: {
									score: d.score
								}
							}) : d._e(), d._v(" "), d.clubAvatar ? M("avatar", {
								directives: [{
									name: "tooltip",
									rawName: "v-tooltip",
									value: d.clubAvatarTooltip,
									expression: "clubAvatarTooltip"
								}],
								attrs: {
									alt: d.clubName,
									width: d.avatarSize,
									height: d.avatarSize,
									src: d.clubAvatar
								}
							}) : d._e(), d._v(" "), d.timeoutNotification ? M("timeout-avatar", {
								class: d.$style.avatar,
								attrs: {
									"timeout-notification": d.timeoutNotification,
									"is-theatre": d.isTheatreMode || d.isFocusMode
								}
							}) : M("player-avatar", {
								directives: [{
									name: "tooltip",
									rawName: "v-tooltip",
									value: d.userAvatarTooltip,
									expression: "userAvatarTooltip"
								}],
								key: d.username,
								class: d.$style.avatar,
								attrs: {
									alt: d.username,
									src: d.avatar,
									width: d.avatarSize,
									height: d.avatarSize,
									"presence-data": {
										isOnline: d.isOnline
									}
								}
							}, [d.title && (d.isTheatreMode || d.isFocusMode) ? M("user-chess-title", {
								class: d.$style.title,
								attrs: {
									"open-new-tab": "",
									url: d.titleUrl,
									title: d.title
								}
							}) : d._e()], 1), d._v(" "), M("div", {
								class: d.$style.tagline
							}, [d.isSeekingTaglineVisible ? M("seeking-tagline", {
								attrs: {
									"is-theatre": d.isTheatreMode || d.isFocusMode,
									challenge: d.outgoingChallenges[0]
								}
							}) : d.isCompact ? M("user-tagline-compact", {
								attrs: {
									country: d.country,
									"is-theatre": d.isTheatreMode || d.isFocusMode,
									rating: d.rating,
									title: d.title,
									"flair-code": d.flairCode,
									membership: d.membership,
									username: d.name
								}
							}, [d.connection ? M("connection", {
								attrs: {
									"is-theatre": d.isTheatreMode,
									"is-current-user": d.isCurrentUser,
									connection: d.connection,
									"tooltip-position": d.tooltipPosition
								}
							}) : d._e()], 1) : M("user-tagline", {
								attrs: {
									"username-theme": "white",
									"open-title-on-new-tab": "",
									username: d.name,
									title: d.title,
									"title-url": d.titleUrl,
									country: d.country,
									"flair-code": d.flairCode,
									membership: d.membership,
									rating: d.rating
								}
							}, [d.connection ? M("connection", {
								attrs: {
									"is-theatre-mode": d.isTheatreMode || d.isFocusMode,
									"is-current-user": d.isCurrentUser,
									connection: d.connection,
									"tooltip-position": d.tooltipPosition
								}
							}) : d._e(), d._v(" "), d.hasSquares ? M("span", {
								class: d.$style.squares,
								domProps: {
									textContent: d._s(`[${d.squares}]`)
								}
							}) : d._e()], 1), d._v(" "), d.timeoutNotification ? M("timeout-text", {
								attrs: {
									position: d.position,
									"is-theatre": d.isCompact,
									"timeout-notification": d.timeoutNotification
								}
							}) : d.isCapturedPiecesVisible ? M("captured-pieces", {
								class: d.$style.pieces,
								attrs: {
									"board-id": d.boardId,
									"vertical-layout": d.isTheatreMode || d.isFocusMode,
									color: d.color
								}
							}) : d._e()], 1), d._v(" "), d._t("default")], 2)
						},
						rr = [],
						kt = e(67104);
					const En = {
							p: "pawn",
							n: "knight",
							b: "bishop",
							r: "rook",
							q: "queen"
						},
						Ps = {
							p: 1,
							b: 2,
							n: 3,
							r: 4,
							q: 5
						},
						lr = f => `cpiece ${f}-`,
						cr = f => En[f],
						ur = (f, d) => `${f}-${En[d]}s`,
						Pn = (f, d, M) => lr(d) + (M === 1 ? cr(f) : ur(M, f)),
						dr = (f, d) => [...Array.from(Array(Math.floor(d / 2)), () => Pn(kt.lA.Piece.Types.Pawn, f, 2)), ...Array.from(Array(d % 2), () => Pn(kt.lA.Piece.Types.Pawn, f, 1))],
						mr = (f, d, M, B) => B && f === "p" ? dr(d, M) : Pn(f, d, M),
						hr = (f, d, M = !1) => Object.keys(f).filter(B => f[B] > 0 && En[B]).sort((B, $) => Ps[B] - Ps[$]).map(B => mr(B, d, f[B], M)).reduce((B, $) => B.concat($), []);
					var _r = e(24813),
						Gt = e(44856),
						tn = {
							"captured-pieces": "captured-pieces-captured-pieces",
							vertical: "captured-pieces-vertical",
							hidden: "captured-pieces-hidden",
							cpiece: "captured-pieces-cpiece",
							score: "captured-pieces-score",
							"b-pawn": "captured-pieces-b-pawn",
							"w-pawn": "captured-pieces-w-pawn",
							"b-2-pawns": "captured-pieces-b-2-pawns",
							"w-2-pawns": "captured-pieces-w-2-pawns",
							"b-3-pawns": "captured-pieces-b-3-pawns",
							"w-3-pawns": "captured-pieces-w-3-pawns",
							"b-4-pawns": "captured-pieces-b-4-pawns",
							"w-4-pawns": "captured-pieces-w-4-pawns",
							"b-5-pawns": "captured-pieces-b-5-pawns",
							"w-5-pawns": "captured-pieces-w-5-pawns",
							"b-6-pawns": "captured-pieces-b-6-pawns",
							"w-6-pawns": "captured-pieces-w-6-pawns",
							"b-7-pawns": "captured-pieces-b-7-pawns",
							"w-7-pawns": "captured-pieces-w-7-pawns",
							"b-8-pawns": "captured-pieces-b-8-pawns",
							"w-8-pawns": "captured-pieces-w-8-pawns",
							"b-bishop": "captured-pieces-b-bishop",
							"w-bishop": "captured-pieces-w-bishop",
							"b-2-bishops": "captured-pieces-b-2-bishops",
							"w-2-bishops": "captured-pieces-w-2-bishops",
							"b-knight": "captured-pieces-b-knight",
							"w-knight": "captured-pieces-w-knight",
							"b-2-knights": "captured-pieces-b-2-knights",
							"w-2-knights": "captured-pieces-w-2-knights",
							"b-rook": "captured-pieces-b-rook",
							"w-rook": "captured-pieces-w-rook",
							"b-2-rooks": "captured-pieces-b-2-rooks",
							"w-2-rooks": "captured-pieces-w-2-rooks",
							"b-queen": "captured-pieces-b-queen",
							"w-queen": "captured-pieces-w-queen"
						},
						gr = e(38549),
						pr = Object.defineProperty,
						fr = (f, d, M) => d in f ? pr(f, d, {
							enumerable: !0,
							configurable: !0,
							writable: !0,
							value: M
						}) : f[d] = M,
						$t = (f, d, M) => (fr(f, typeof d != "symbol" ? d + "" : d, M), M);
					class br extends _r.H {
						constructor() {
							super(), $t(this, "onPositionChangeHandler"), $t(this, "scoreElement"), $t(this, "color", 1), $t(this, "verticalLayout", !1), $t(this, "capturedPieces"), this.onPositionChangeHandler = (0, gr.Z)(this.onPositionChange.bind(this), 100)
						}
						static get observedAttributes() {
							return [Gt._.ObservedAttributes.BoardId, Gt._.ObservedAttributes.Color, Gt._.ObservedAttributes.VerticalLayout]
						}
						boardReady() {
							this.removeListeners(), this.addListeners(), this.onPositionChange()
						}
						componentDestroy() {
							this.removeListeners()
						}
						addListeners() {
							kt.jd.forEach(d => {
								this.addBoardEventListener(d, this.onPositionChangeHandler)
							})
						}
						removeListeners() {
							kt.jd.forEach(d => {
								this.removeBoardEventListener(d, this.onPositionChangeHandler)
							})
						}
						readAttributes() {
							const d = Number(this.getAttribute(Gt._.ObservedAttributes.Color)),
								M = Boolean(this.hasAttribute(Gt._.ObservedAttributes.VerticalLayout));
							return d !== this.color || M !== this.verticalLayout ? (this.color = d, this.verticalLayout = M, !0) : !1
						}
						attributesChanged() {
							this.readAttributes() && (this.buildComponent(), this.board && this.onPositionChange())
						}
						componentReady() {
							this.readAttributes(), this.buildComponent()
						}
						buildComponent() {
							this.innerHTML = `
      <div>
        <span class="${tn.cpiece} ${tn.score}" />
      </div>
    `, this.scoreElement = this.querySelector(`.${tn.score}`)
						}
						onPositionChange() {
							var d;
							this.capturedPieces = (d = this.board) == null ? void 0 : d.game.getMaterial(), this.updatePieces(), this.updateScore()
						}
						updatePieces() {
							if (!this.capturedPieces) return;
							const d = this.firstElementChild;
							if (!d) return;
							const M = hr(this.color === 1 ? this.capturedPieces.white : this.capturedPieces.black, this.color === 1 ? kt.lA.ColorsAsLetters.Black : kt.lA.ColorsAsLetters.White, this.verticalLayout);
							for (; M.length < d.childElementCount - 1 && d.childElementCount > 1;) {
								const B = d.children[d.childElementCount - 2];
								d.removeChild(B)
							}
							for (let B = 0; B < M.length; B++) {
								const $ = M[B].split(" ").map(te => tn[te]).join(" ");
								if (d.childElementCount - 1 >= B + 1) d.children[B].className !== $ && (d.children[B].className = $);
								else {
									const te = document.createElement("span");
									te.className = $, d.insertBefore(te, d.lastElementChild)
								}
							}
						}
						updateScore() {
							if (!this.scoreElement || !this.capturedPieces) return;
							let d = "";
							this.color === 1 && this.capturedPieces.imbalance > 0 && (d = `+${this.capturedPieces.imbalance}`), this.color === 2 && this.capturedPieces.imbalance < 0 && (d = `+${Math.abs(this.capturedPieces.imbalance)}`), this.scoreElement.textContent = d
						}
					}
					var vr = e(51798),
						yr = e(85154),
						wr = e(23886),
						Er = e(52098),
						Pr = function() {
							var d = this,
								M = d._self._c;
							return M("div", {
								class: d.$style.component
							}, [d._v(`
  ` + d._s(d.score) + `
  `), d.hasPlace ? M("span", {
								class: d.$style.place,
								domProps: {
									textContent: d._s(`#${d.place}`)
								}
							}) : d._e()])
						},
						Cr = [],
						Tr = {
							name: "ArenaScore",
							props: {
								score: [Number, null],
								place: [Number, null]
							},
							computed: {
								hasPlace() {
									return Boolean(this.place)
								}
							}
						},
						Or = Tr,
						Cs = {
							component: "arena-score-component",
							place: "arena-score-place"
						};

					function Mr(f) {
						this.$style = Cs.locals || Cs
					}
					var kr = (0, me.Z)(Or, Pr, Cr, !1, Mr, null, null),
						Dr = kr.exports,
						xr = function() {
							var d = this,
								M = d._self._c;
							return M("div", {
								directives: [{
									name: "tooltip",
									rawName: "v-tooltip",
									value: d.tooltip,
									expression: "tooltip"
								}],
								class: d.componentClasses
							}, [M("span", {
								class: d.$style.signal
							}), d._v(" "), M("span", {
								class: d.$style.signal
							}), d._v(" "), M("span", {
								class: d.$style.signal
							}), d._v(" "), M("span", {
								class: d.$style.signal
							})])
						},
						Rr = [],
						Ie = e(85090),
						Br = {
							name: "Connection",
							directives: {
								tooltip: Ft.ZP
							},
							props: {
								tooltipPosition: String,
								connection: String,
								isCurrentUser: Boolean,
								isTheatreMode: Boolean
							},
							computed: {
								isReconnecting() {
									return this.isCurrentUser && this.connection === Ie.J.offline
								},
								componentClasses() {
									return {
										[this.$style.component]: !0,
										[this.$style[this.connection]]: !0,
										[this.$style.reconnecting]: this.isReconnecting,
										[this.$style.theatre]: this.isTheatreMode
									}
								},
								tooltipContent() {
									switch (this.connection) {
										case Ie.J.excellent:
											return this.$trans("Excellent Connection (very low lag)");
										case Ie.J.good:
											return this.$trans("Good Connection (low lag)");
										case Ie.J.ok:
											return this.$trans("OK Connection (some lag)");
										case Ie.J.poor:
											return this.$trans("Poor Connection (high lag)");
										case Ie.J.offline:
											return this.$trans("Member Offline");
										default:
											return ""
									}
								},
								tooltip() {
									return {
										content: this.tooltipContent,
										position: this.tooltipPosition
									}
								}
							}
						},
						Ar = Br,
						Ts = {
							component: "connection-component",
							signal: "connection-signal",
							offline: "connection-offline",
							excellent: "connection-excellent",
							good: "connection-good",
							ok: "connection-ok",
							poor: "connection-poor",
							reconnecting: "connection-reconnecting",
							blink: "connection-blink"
						};

					function Sr(f) {
						this.$style = Ts.locals || Ts
					}
					var Ir = (0, me.Z)(Ar, xr, Rr, !1, Sr, null, null),
						Lr = Ir.exports,
						Ur = function() {
							var d = this,
								M = d._self._c;
							return M("div", {
								class: d.$style.component,
								domProps: {
									textContent: d._s(d.score.toFixed(1))
								}
							})
						},
						zr = [],
						Wr = {
							name: "GrudgeScore",
							props: {
								score: [Number, null]
							}
						},
						Kr = Wr,
						Os = {
							component: "grudge-score-component"
						};

					function jr(f) {
						this.$style = Os.locals || Os
					}
					var Nr = (0, me.Z)(Kr, Ur, zr, !1, jr, null, null),
						Fr = Nr.exports,
						Gr = e(21573),
						$r = function() {
							var d = this,
								M = d._self._c,
								B = d._self._setupProxy;
							return M("div", {
								class: d.componentClasses
							}, [M("animated-text", {
								class: d.$style.searching,
								attrs: {
									text: d.searchingLabel
								}
							}), d._v(" "), d.challenge.getTo() ? d._e() : M("span", {
								class: d.$style.rating,
								domProps: {
									textContent: d._s(d.ratingLabel)
								}
							})], 1)
						},
						Zr = [],
						Vr = e(78331),
						Hr = (0, be.aZ)({
							name: "SeekingTagline",
							components: {
								AnimatedText: Vr.Z
							},
							props: {
								isTheatre: {
									type: Boolean,
									required: !0
								},
								challenge: {
									type: Object,
									required: !0
								}
							},
							computed: {
								componentClasses() {
									return {
										[this.$style.component]: !0,
										[this.$style.theatre]: this.isTheatre
									}
								},
								ratingLabel() {
									const f = this.challenge.getMaxRating(),
										d = this.challenge.getMinRating();
									return !f && !d ? "" : this.$trans("Rating Range: %rating%", {
										"%rating%": `${d||this.$trans("Any")}-${f||this.$trans("Any")}`
									})
								},
								searchingLabel() {
									return this.challenge.getTo() ? this.$trans("Waiting for Opponent") : this.$trans("Searching")
								}
							}
						}),
						Qr = Hr,
						Ms = {
							component: "seeking-tagline-component",
							theatre: "seeking-tagline-theatre",
							searching: "seeking-tagline-searching",
							rating: "seeking-tagline-rating"
						};

					function Jr(f) {
						this.$style = Ms.locals || Ms
					}
					var Yr = (0, me.Z)(Qr, $r, Zr, !1, Jr, null, null),
						Xr = Yr.exports,
						qr = function() {
							var d = this,
								M = d._self._c,
								B = d._self._setupProxy;
							return M("div", {
								class: d.componentClasses
							}, [M("span", {
								staticClass: "icon-font-chess",
								class: [d.$style.icon, d.isOfflineTimeout ? "disconnected" : "chess-move"]
							})])
						},
						el = [],
						Xe = e(75916),
						tl = (0, be.aZ)({
							name: "TimeoutAvatar",
							props: {
								timeoutNotification: {
									type: Object,
									required: !0
								},
								isTheatre: {
									type: Boolean,
									default: !1,
									required: !0
								}
							},
							computed: {
								componentClasses() {
									return {
										[this.$style.component]: !0,
										[this.$style.theatre]: this.isTheatre
									}
								},
								isOfflineTimeout() {
									var f;
									return Boolean(((f = this.timeoutNotification) == null ? void 0 : f.notificationType) && [Xe._.OpponentOffline, Xe._.Offline].includes(this.timeoutNotification.notificationType))
								}
							}
						}),
						nl = tl,
						ks = {
							component: "timeout-avatar-component",
							icon: "timeout-avatar-icon",
							theatre: "timeout-avatar-theatre"
						};

					function sl(f) {
						this.$style = ks.locals || ks
					}
					var al = (0, me.Z)(nl, qr, el, !1, sl, null, null),
						il = al.exports,
						ol = function() {
							var d = this,
								M = d._self._c,
								B = d._self._setupProxy;
							return M("div", {
								class: d.componentClasses,
								domProps: {
									innerHTML: d._s(d.timeoutHtml)
								}
							})
						},
						rl = [],
						ll = (0, be.aZ)({
							name: "TimeoutText",
							props: {
								timeoutNotification: {
									type: Object,
									required: !0
								},
								isTheatre: {
									type: Boolean,
									default: !1,
									required: !1
								},
								position: {
									type: String,
									required: !0
								}
							},
							computed: {
								componentClasses() {
									return {
										[this.$style.component]: !0,
										[this.$style.theatre]: this.isTheatre,
										[this.$style[this.position]]: !0
									}
								},
								timeoutHtml() {
									const {
										notificationType: f,
										timeLeft: d
									} = this.timeoutNotification || {};
									return f === Xe._.AutoAbortOpponentTurn ? this.$trans("Waiting. Will auto-abort in %time%", {
										"%time%": `<count-down time-left="${d||0}"/>`
									}) : f === Xe._.AutoAbortMyTurn ? this.$trans("Your move. Will auto-abort in %time%", {
										"%time%": `<count-down time-left="${d||0}"/>`
									}) : f === Xe._.AutoResignOpponentTurn ? this.$trans("Waiting. Will auto-resign in %time%", {
										"%time%": `<count-down time-left="${d||0}"/>`
									}) : f === Xe._.AutoResignMyTurn ? this.$trans("Your move. Will auto-resign in %time%", {
										"%time%": `<count-down time-left="${d||0}"/>`
									}) : f === Xe._.OpponentOffline ? this.$trans("Disconnected. Will auto-resign in %time%", {
										"%time%": `<count-down time-left="${d||0}"/>`
									}) : f === Xe._.Offline ? this.$trans("Reconnecting... ") : null
								}
							}
						}),
						cl = ll,
						Ds = {
							component: "timeout-text-component",
							theatre: "timeout-text-theatre",
							top: "timeout-text-top",
							bottom: "timeout-text-bottom"
						};

					function ul(f) {
						this.$style = Ds.locals || Ds
					}
					var dl = (0, me.Z)(cl, ol, rl, !1, ul, null, null),
						ml = dl.exports,
						hl = e(17494),
						_l = e(65638),
						gl = (0, be.aZ)({
							name: "Player",
							directives: {
								tooltip: Ft.ZP
							},
							components: {
								Avatar: vr.Z,
								ArenaScore: Dr,
								PlayerAvatar: Gr.Z,
								Connection: Lr,
								GrudgeScore: Fr,
								UserTagline: wr.Z,
								UserChessTitle: yr.Z,
								UserTaglineCompact: hl.Z,
								TimeoutAvatar: il,
								TimeoutText: ml,
								SeekingTagline: Xr
							},
							props: {
								arenaPlace: {
									type: Number
								},
								boardId: {
									type: String,
									required: !0
								},
								clubAvatar: {
									type: String,
									default: ""
								},
								clubName: {
									type: String,
									default: ""
								},
								color: {
									type: Number,
									required: !0
								},
								connection: {
									type: String,
									default: ""
								},
								country: {
									type: Object
								},
								flairCode: {
									type: String,
									default: ""
								},
								fullName: {
									type: String,
									default: ""
								},
								isCapturedPiecesVisible: {
									type: Boolean,
									required: !0
								},
								isCurrentUser: {
									type: Boolean,
									required: !0
								},
								isFocusMode: {
									type: Boolean,
									required: !0
								},
								isOnline: {
									type: Boolean,
									default: !1
								},
								isSeekingTaglineVisible: {
									type: Boolean,
									default: !1
								},
								outgoingChallenges: {
									type: Array,
									required: !0
								},
								isTheatreMode: {
									type: Boolean,
									required: !0
								},
								membership: {
									type: Number,
									required: !0
								},
								position: {
									type: String,
									required: !0
								},
								rating: {
									type: Number,
									default: 0
								},
								ratingRange: {
									type: Object,
									required: !0
								},
								score: {
									type: Number
								},
								showFullName: {
									type: Boolean,
									required: !0
								},
								squares: {
									type: Number
								},
								title: {
									type: String,
									default: ""
								},
								userAvatar: {
									type: String,
									default: ""
								},
								username: {
									type: String,
									required: !0
								},
								timeoutNotification: {
									type: Object,
									required: !1
								}
							},
							emits: ["click-user"],
							computed: {
								componentClasses() {
									return {
										[this.$style.component]: !0,
										[this.$style[this.position]]: !0,
										[this.$style.theatre]: this.isTheatreMode || this.isFocusMode
									}
								},
								isCompact() {
									return Boolean(this.isTheatreMode || this.isFocusMode)
								},
								avatar() {
									var f, d;
									return this.isSeekingTaglineVisible ? (f = this.outgoingChallenges[0]) != null && f.getTo() ? this.outgoingChallenges[0].getTo().getAvatar() || (0, Nt.n)("bundles/web/images/user-image.svg") : (0, Nt.n)("bundles/web/images/seeksquare.gif") : (d = this.userAvatar) != null ? d : ""
								},
								avatarSize() {
									return this.isTheatreMode ? 80 : 40
								},
								hasArenaPlace() {
									return (0, Be.hj)(this.arenaPlace)
								},
								hasGrudgeScore() {
									return (0, Be.hj)(this.score)
								},
								tooltipPosition() {
									return this.position === "top" ? "bottom" : "top"
								},
								clubAvatarTooltip() {
									var f;
									return {
										content: (f = this.clubName) != null ? f : "",
										position: this.tooltipPosition
									}
								},
								userAvatarTooltip() {
									return {
										content: this.username,
										position: this.tooltipPosition
									}
								},
								titleUrl() {
									return Ke.Z.generate("web_member_titled_players")
								},
								hasSquares() {
									return (0, Be.hj)(this.squares)
								},
								name() {
									return this.showFullName ? this.fullName || this.username : this.username
								}
							},
							created() {
								(0, Er.M)("captured-pieces", br)
							},
							methods: {
								onClick(f) {
									(0, _l.S)(f.target) && this.$emit("click-user", f)
								}
							}
						}),
						pl = gl,
						xs = {
							component: "player-component",
							tagline: "player-tagline",
							squares: "player-squares",
							avatar: "player-avatar",
							theatre: "player-theatre",
							title: "player-title",
							pieces: "player-pieces",
							top: "player-top",
							bottom: "player-bottom"
						};

					function fl(f) {
						this.$style = xs.locals || xs
					}
					var bl = (0, me.Z)(pl, or, rr, !1, fl, null, null),
						vl = bl.exports,
						yl = function() {
							var d = this,
								M = d._self._c,
								B = d._self._setupProxy;
							return d.isClockVisible ? M("player-clock", {
								key: d.clockKey,
								attrs: {
									board: d.activeBoard,
									"clock-tooltip": d.clockTooltip,
									clock: d.clock,
									"is-theatre-mode": d.isTheatreMode,
									"player-index": d.playerIndex,
									"player-to-move": d.playerToMove,
									position: d.position
								},
								on: {
									"clock-element-added": d.onClockElementAdded,
									"clock-element-removed": d.onClockElementRemoved
								}
							}) : d._e()
						},
						wl = [],
						El = e(5148),
						Pl = function() {
							var d = this,
								M = d._self._c,
								B = d._self._setupProxy;
							return M("clock", {
								directives: [{
									name: "tooltip",
									rawName: "v-tooltip",
									value: d.clockTooltip,
									expression: "clockTooltip"
								}],
								attrs: {
									"is-theatre-mode": d.isTheatreMode,
									"player-index": d.playerIndex,
									"player-to-move": d.playerToMove,
									position: d.position
								}
							}, [d.isTheatreMode ? M("clock-arrow", {
								attrs: {
									position: d.position,
									"player-index": d.playerIndex
								}
							}) : d._e(), d._v(" "), d.isTheatreMode ? M("clock-bar", {
								attrs: {
									position: d.position,
									"player-index": d.playerIndex
								}
							}) : M("clock-icon"), d._v(" "), M("clock-time", {
								attrs: {
									board: d.board,
									clock: d.clock,
									"player-index": d.playerIndex
								},
								on: {
									"clock-element-added": function($) {
										return d.$emit("clock-element-added", $)
									},
									"clock-element-removed": function($) {
										return d.$emit("clock-element-removed", $)
									}
								}
							})], 1)
						},
						Cl = [],
						Tl = function() {
							var d = this,
								M = d._self._c,
								B = d._self._setupProxy;
							return M("div", {
								class: d.componentClasses
							})
						},
						Ol = [],
						Ml = (0, be.aZ)({
							name: "ClockArrow",
							props: {
								position: {
									type: String,
									required: !0
								},
								playerIndex: {
									type: Number,
									required: !0
								}
							},
							computed: {
								componentClasses() {
									return {
										[this.$style.arrow]: !0,
										[this.$style[this.position]]: !0,
										[this.$style.white]: this.playerIndex === 0,
										[this.$style.black]: this.playerIndex === 1
									}
								}
							}
						}),
						kl = Ml,
						Rs = {
							arrow: "clock-arrow-arrow",
							top: "clock-arrow-top",
							black: "clock-arrow-black",
							bottom: "clock-arrow-bottom"
						};

					function Dl(f) {
						this.$style = Rs.locals || Rs
					}
					var xl = (0, me.Z)(kl, Tl, Ol, !1, Dl, null, null),
						Rl = xl.exports,
						Bl = function() {
							var d = this,
								M = d._self._c,
								B = d._self._setupProxy;
							return M("div", {
								class: d.componentClasses
							}, [M("div", {
								class: d.$style.remainder
							})])
						},
						Al = [],
						Sl = (0, be.aZ)({
							name: "ClockBar",
							props: {
								position: {
									type: String,
									required: !0
								},
								playerIndex: {
									type: Number,
									required: !0
								}
							},
							computed: {
								componentClasses() {
									return {
										[this.$style.bar]: !0,
										[this.$style[this.position]]: !0,
										[this.$style.white]: this.playerIndex === 0,
										[this.$style.black]: this.playerIndex === 1
									}
								}
							}
						}),
						Il = Sl,
						Bs = {
							bar: "clock-bar-bar",
							remainder: "clock-bar-remainder",
							top: "clock-bar-top",
							bottom: "clock-bar-bottom",
							white: "clock-bar-white",
							black: "clock-bar-black"
						};

					function Ll(f) {
						this.$style = Bs.locals || Bs
					}
					var Ul = (0, me.Z)(Il, Bl, Al, !1, Ll, null, null),
						zl = Ul.exports,
						Wl = e(36755),
						Kl = e(70202),
						jl = e(27339),
						Nl = (0, be.aZ)({
							name: "PlayerClock",
							directives: {
								tooltip: Ft.ZP
							},
							components: {
								ClockArrow: Rl,
								ClockTime: Kl.Z,
								ClockIcon: Wl.Z,
								Clock: jl.Z,
								ClockBar: zl
							},
							props: {
								board: {
									type: Object
								},
								clock: {
									type: [Number, String]
								},
								clockTooltip: {
									type: String
								},
								isTheatreMode: {
									type: Boolean,
									required: !0
								},
								playerIndex: {
									type: Number,
									required: !0
								},
								playerToMove: {
									type: Number,
									required: !0
								},
								position: {
									type: String,
									required: !0
								}
							},
							emits: ["clock-element-added", "clock-element-removed"]
						}),
						Fl = Nl,
						Gl = (0, me.Z)(Fl, Pl, Cl, !1, null, null, null),
						$l = Gl.exports,
						Zl = e(86613),
						Vl = e(21001),
						Hl = e(86562),
						Ql = e(51722),
						Jl = e(83778),
						Yl = e(81194),
						As = e(11817),
						Cn = e(40201),
						Xl = (0, be.aZ)({
							name: "PlayerClockController",
							components: {
								PlayerClock: $l
							},
							props: {
								position: {
									type: String,
									required: !0
								},
								playerIndex: {
									type: Number,
									required: !0
								}
							},
							computed: {
								clockKey() {
									var f, d;
									return [(f = this.activeBoard) == null ? void 0 : f.type, (d = this.activeBoard) == null ? void 0 : d.id, this.playerIndex, this.position, this.isTheatreMode].join(":")
								},
								activeBoard() {
									return (0, He.H)()
								},
								activeGame() {
									var f;
									switch ((f = this.activeBoard) == null ? void 0 : f.type) {
										case le.V.LiveGame:
											return (0, dt.S)(this.activeBoard.id);
										case le.V.DailyGame:
											return (0, Mt.P)(this.activeBoard.id);
										case le.V.RcnGame:
											return (0, mt.M)(this.activeBoard.id);
										default:
											return null
									}
								},
								isTheatreMode() {
									return (0, en.G)() || (0, wn.x)()
								},
								timeControl() {
									var f;
									return this.activeGame ? this.activeGame.getTimeControl() : ((f = this.activeBoard) == null ? void 0 : f.type) === le.V.DailySeek ? (0, As.c)(this.activeBoard.id).getTimeControl() : (0, Cn.Q)()
								},
								isClockVisible() {
									return this.timeControl.timeType !== "none"
								},
								isClockRunning() {
									return (this.activeGame instanceof Zl.k || this.activeGame instanceof Vl.k) && this.activeGame.isInProgress()
								},
								playerToMove() {
									return !this.activeGame || this.isClockRunning ? -1 : this.activeGame.isOver() ? this.selectedPly % 2 : this.activeGame.getPlayerToMove()
								},
								clock() {
									var f;
									if (!this.isClockRunning) return (f = this.activeGame) != null && f.isOver() ? this.activeGame.getPlayerClock(this.playerIndex, this.selectedPly) : this.activeGame instanceof rt.C ? this.activeGame.getDailyClock(this.playerIndex) : this.timeControl.timeType === "live" ? this.timeControl.baseTime * 10 : (0, El.X)(this.timeControl)
								},
								clockTooltip() {
									return this.activeGame instanceof rt.C ? this.activeGame.getClockTooltip(this.playerIndex) : ""
								},
								isAtEndOfLine() {
									return (0, Ql.J)(this.activeBoard)
								},
								selectedPly() {
									var f, d;
									return this.isClockRunning || this.isAtEndOfLine && ((f = this.activeGame) == null ? void 0 : f.isOver()) && ((d = this.activeGame) == null ? void 0 : d.getPlayerToMove()) === this.playerIndex ? -1 : (0, Hl.i)()
								}
							},
							methods: {
								onClockElementAdded(f) {
									var d;
									((d = this.activeBoard) == null ? void 0 : d.type) !== le.V.DailyGame && (0, Jl.I)(f)
								},
								onClockElementRemoved(f) {
									var d;
									((d = this.activeBoard) == null ? void 0 : d.type) !== le.V.DailyGame && (0, Yl.M)(f)
								}
							}
						}),
						ql = Xl,
						ec = (0, me.Z)(ql, yl, wl, !1, null, null, null),
						tc = ec.exports,
						nc = e(8181),
						sc = e(11341),
						Zt = e(99057);
					const ac = {
						0: Zt.T.Offline,
						1: Zt.T.Poor,
						2: Zt.T.Ok,
						3: Zt.T.Good,
						4: Zt.T.Excellent
					};
					var Ss = e(19966);

					function ic() {
						return ac[Ss.z.reactive.connectionQuality]
					}
					var oc = e(45215),
						Dt = e(22254);

					function rc() {
						return Dt.A.connectionFailedTimestamp
					}
					var lc = e(48549),
						cc = e(73353),
						uc = e(69051),
						dc = e(62493);

					function mc() {
						const f = (0, Oe.t)(),
							d = (0, dc.s)().map($ => {
								const te = $.getPlayerIndex(f),
									he = (0, uc.a)(le.V.LiveGame, $.id);
								return he?.getCurrentClock(te)
							}).filter($ => $ !== void 0),
							M = Math.min(...d);
						let B = 8e3;
						return M < 600 && (B = 6e3), M < 300 && (B = 4e3), B
					}

					function hc() {
						return Boolean(ut._.pendingMoves.length)
					}

					function Is(f) {
						if (!(0, lc.o)()) return null;
						const d = (0, Oe.t)().getConnectionLevel();
						if ((0, cc.W)()) return d;
						if (hc()) return Ie.J.offline;
						const M = mc(),
							B = f - rc();
						return B >= M ? Ie.J.offline : B >= M - 1e3 ? Ie.J.poor : B >= M - 2e3 ? d === Ie.J.poor ? d : Ie.J.ok : B >= M - 3e3 ? d === Ie.J.poor || d === Ie.J.ok ? d : Ie.J.good : d
					}

					function Ls(f, d) {
						const M = (0, oc.b)();
						if (!f && d === 0 && (0, N.j)() && (0, sc.r)()) return Is(M);
						if (f?.type === le.V.LiveGame) {
							const B = (0, dt.S)(f.id);
							if (B) {
								const $ = B.getPlayer(d),
									te = (0, Oe.t)();
								return $?.isSameUser(te) ? Is(M) : B.getPlayerConnectionLevel(d, M)
							}
						}
						if (f?.type === le.V.RcnGame) {
							const B = (0, mt.M)(f.id);
							if (B) {
								const $ = B.getPlayer(d),
									te = (0, Se.S)();
								return $.uuid === te.uuid ? ic() : B.getPlayerConnectionLevel(d, M)
							}
						}
						return null
					}
					var Us = e(43924);

					function _c(f, d) {
						var M, B;
						if (!f) return null;
						const $ = f.type === le.V.LiveGame ? (0, Oe.t)() : (0, Se.S)(),
							te = f.type === le.V.LiveGame ? (M = (0, dt.S)(f.id)) == null ? void 0 : M.getPlayer(d) : (B = (0, mt.M)(f.id)) == null ? void 0 : B.getPlayer(d);
						if ($.isSameUser(te) && Ls(f, d) === Ie.J.offline) return {
							board: f,
							notificationType: Xe._.Offline,
							timeLeft: null,
							playerIndex: d
						};
						const he = Us.d.timeoutNotifications.find(xe => xe.board.id === f.id && xe.board.type === f.type);
						return !he || d !== he.playerIndex ? null : he
					}
					var zs = e(24942),
						gc = e(34186),
						pc = e(9616),
						Tn = e(46587),
						fc = e(43141),
						bc = e(6871);

					function vc(f) {
						if (f === 0) {
							if (!(0, N.j)()) return {
								avatarUrl: (0, Nt.n)("bundles/web/images/white_400.png"),
								chessTitle: null,
								country: null,
								flairCode: null,
								id: 0,
								uuid: "",
								isFriend: !1,
								membershipLevel: 0,
								rating: 0,
								username: (0, Ne.dW)("Player")
							};
							const M = (0, Cn.Q)(),
								B = (0, Tn.l)();
							if ((0, Oe.t)().getUsername() && M.timeType === "live") {
								const $ = (0, Es.G)(M, B);
								return {
									...(0, Oe.t)().getPlayerInfo(),
									ratingType: $,
									rating: (0, bc.x)($)
								}
							} else return (0, Se.S)()
						}
						let d = 0;
						return (0, Tn.l)() === "oddschess" && (0, pc.N)() === gc.Z.AutoBalance && (d = (0, fc.y)()), {
							avatarUrl: (0, Nt.n)("bundles/web/images/black_400.png"),
							chessTitle: null,
							country: null,
							flairCode: null,
							id: 0,
							uuid: "",
							isFriend: !1,
							membershipLevel: 0,
							rating: d,
							username: (0, Ne.dW)("Opponent")
						}
					}

					function yc() {
						return (0, Oe.t)().isStaff() && Ae.N.isSquaresEnabled
					}
					var Vt = e(35754),
						wc = e(85335),
						Ec = e(9353),
						Ws = e(21860);

					function Pc(f) {
						var d;
						return (d = Ws.c.players.find(M => M.username.toLowerCase() === f.toLowerCase())) != null ? d : null
					}
					var Cc = e(24403),
						Tc = e(13690),
						Oc = e(42927),
						Mc = (0, be.aZ)({
							name: "PlayerController",
							components: {
								Player: vl,
								PlayerClock: tc,
								PlayerQuickChat: () => Promise.all([e.e(929), e.e(7999)]).then(e.bind(e, 66809))
							},
							props: {
								position: {
									type: String,
									required: !0
								}
							},
							computed: {
								activeBoard() {
									return (0, He.H)()
								},
								liveGame() {
									var f;
									return ((f = this.activeBoard) == null ? void 0 : f.type) === le.V.LiveGame ? (0, dt.S)(this.activeBoard.id) : null
								},
								dailyGame() {
									var f;
									return ((f = this.activeBoard) == null ? void 0 : f.type) === le.V.DailyGame ? (0, Mt.P)(this.activeBoard.id) : null
								},
								dailyChallenge() {
									var f;
									return ((f = this.activeBoard) == null ? void 0 : f.type) === le.V.DailySeek ? (0, As.c)(this.activeBoard.id) : null
								},
								rcnGame() {
									var f;
									return ((f = this.activeBoard) == null ? void 0 : f.type) === le.V.RcnGame ? (0, mt.M)(this.activeBoard.id) : null
								},
								boardId() {
									return (0, ws.H)()
								},
								isFocusMode() {
									return (0, en.G)()
								},
								isTheatreMode() {
									return (0, wn.x)()
								},
								isBoardFlipped() {
									return (0, nc.y)(this.activeBoard)
								},
								color() {
									return this.position === "top" ? this.isBoardFlipped ? 1 : 2 : this.isBoardFlipped ? 2 : 1
								},
								playerIndex() {
									var f;
									return ((f = this.activeBoard) == null ? void 0 : f.type) === le.V.CustomPosition ? this.position === "bottom" ? 0 : 1 : this.color - 1
								},
								player() {
									return (0, zs.J)(this.playerIndex) || vc(this.playerIndex)
								},
								pclPlayerInfo() {
									var f;
									return (f = this.liveGame) != null && f.pcl ? Pc(this.player.username) : null
								},
								ratingType() {
									var f, d;
									const M = (d = (f = this.liveGame) != null ? f : this.dailyGame) != null ? d : this.rcnGame;
									return M ? M.getRatingType() : (0, Es.G)((0, Cn.Q)(), (0, Tn.l)())
								},
								connection() {
									return Ls(this.activeBoard, this.playerIndex)
								},
								score() {
									return this.liveGame ? this.liveGame.getGrudgeScore(this.playerIndex) : this.rcnGame ? this.rcnGame.getGrudgeScore(this.playerIndex) : null
								},
								arenaPlace() {
									var f;
									return (f = this.liveGame) != null && f.isArenaGame() ? this.liveGame.getArenaPlace(this.playerIndex) : null
								},
								squares() {
									return yc() && this.liveGame ? this.liveGame.getPlayerSquares(this.playerIndex) : null
								},
								showFullName() {
									var f, d;
									return Boolean(((f = this.liveGame) == null ? void 0 : f.pcl) || ((d = this.liveGame) == null ? void 0 : d.realname))
								},
								isQuickChatEnabled() {
									return this.isFocusMode ? !1 : this.rcnGame ? this.rcnGame.isPlaying((0, Se.S)()) && (0, Cc.W)(this.rcnGame) : this.liveGame ? this.liveGame.isPlaying((0, Oe.t)()) && (0, wc.u)(this.liveGame) : !1
								},
								isCapturedPiecesVisible() {
									return Boolean(this.activeBoard)
								},
								isCurrentUser() {
									return (0, Oe.t)().isSameUser(this.player.username) || (0, Se.S)().isSameUser(this.player.username)
								},
								ratingRange() {
									return (0, Ec.E)()
								},
								rating() {
									var f, d;
									return this.isCurrentUser && !(0, Oc.$)() ? null : (d = (f = this.pclPlayerInfo) == null ? void 0 : f.rating) != null ? d : this.player.rating
								},
								membership() {
									return this.isCurrentUser && (0, ze.n)() ? ir.p0.basic : this.player.membershipLevel
								},
								club() {
									var f, d, M;
									if (!((f = this.liveGame) != null && f.isArenaGame()) || !((d = this.liveGame) != null && d.arenachessgroupids)) return null;
									const B = this.liveGame.arenachessgroupids[this.playerIndex],
										$ = (0, Vt.l)(this.liveGame.getArenaId());
									return (M = $?.chessgroups.find(te => te.chessgroupid === B)) != null ? M : null
								},
								clubName() {
									var f, d, M, B;
									return (B = (M = (f = this.pclPlayerInfo) == null ? void 0 : f.team) != null ? M : (d = this.club) == null ? void 0 : d.chessgroupname) != null ? B : null
								},
								clubAvatar() {
									var f, d, M, B;
									return (B = (M = (f = this.pclPlayerInfo) == null ? void 0 : f.avatar) != null ? M : (d = this.club) == null ? void 0 : d.chessgroupavatar) != null ? B : null
								},
								timeoutNotification() {
									return _c(this.activeBoard, this.playerIndex)
								},
								outgoingChallenges() {
									return (0, qn.r)()
								},
								isSeekingTaglineVisible() {
									return Boolean(!this.isCurrentUser && !this.activeBoard && this.outgoingChallenges[0])
								}
							},
							methods: {
								onClickUser({
									target: f
								}) {
									if (!this.player.membershipLevel) return;
									const d = (0, zs.J)(1 - this.playerIndex);
									(0, Tc.v)({
										user: {
											...this.player,
											ratingType: this.ratingType
										},
										opponent: d,
										element: f
									})
								}
							}
						}),
						kc = Mc,
						Dc = (0, me.Z)(kc, sr, ar, !1, null, null, null),
						Ks = Dc.exports,
						xc = (0, be.aZ)({
							el: "#player-bottom",
							name: "PlayerBottomController",
							components: {
								PlayerController: Ks
							}
						}),
						Rc = xc,
						Bc = (0, me.Z)(Rc, tr, nr, !1, null, null, null),
						Ac = Bc.exports,
						Sc = function() {
							var d = this,
								M = d._self._c,
								B = d._self._setupProxy;
							return M("player-controller", {
								attrs: {
									position: "top"
								}
							})
						},
						Ic = [],
						Lc = (0, be.aZ)({
							el: "#player-top",
							name: "PlayerTopController",
							components: {
								PlayerController: Ks
							}
						}),
						Uc = Lc,
						zc = (0, me.Z)(Uc, Sc, Ic, !1, null, null, null),
						Wc = zc.exports,
						Kc = function() {
							var d = this,
								M = d._self._c,
								B = d._self._setupProxy;
							return d.isFocusMode ? M("focus-mode-controls-controller") : M("sidebar", {
								attrs: {
									"is-loading": d.isLoading
								}
							}, [M("tabs", {
								attrs: {
									"selected-tab": d.selectedTab,
									tabs: d.tabs
								},
								on: {
									"close-tab": d.onCloseTab,
									"select-tab": d.onSelectTab,
									"close-daiy-games-popup": d.onCloseDailyGamesPopup
								}
							}), d._v(" "), M("tab-content", {
								attrs: {
									content: d.controller
								}
							}), d._v(" "), d.hasFloatingModals ? M("floating-modals-controller") : d._e()], 1)
						},
						jc = [],
						Ht = e(14647),
						Nc = function() {
							var d = this,
								M = d._self._c,
								B = d._self._setupProxy;
							return M("div", {
								class: d.componentClasses
							}, [d.isLoading ? M("loader-three-bounce") : [d._t("default")]], 2)
						},
						Fc = [],
						Gc = e(20023),
						$c = (0, be.aZ)({
							name: "Sidebar",
							components: {
								LoaderThreeBounce: Gc.Z
							},
							props: {
								isLoading: {
									type: Boolean,
									default: !1
								}
							},
							computed: {
								componentClasses() {
									return {
										[this.$style.component]: !0,
										[this.$style.loading]: this.isLoading
									}
								}
							}
						}),
						Zc = $c,
						js = {
							component: "sidebar-component",
							loading: "sidebar-loading"
						};

					function Vc(f) {
						this.$style = js.locals || js
					}
					var Hc = (0, me.Z)(Zc, Nc, Fc, !1, Vc, null, null),
						Qc = Hc.exports,
						Ns = e(31619),
						Jc = e(55211),
						Yc = e(32172),
						Xc = function() {
							var d = this,
								M = d._self._c,
								B = d._self._setupProxy;
							return M("tab-container", {
								attrs: {
									content: d.controller
								}
							}, [d.isAnnouncementVisible ? M("announcement-controller") : d._e()], 1)
						},
						qc = [],
						eu = e(48525),
						tu = function() {
							var d = this,
								M = d._self._c,
								B = d._self._setupProxy;
							return d.isAnnouncementVisible ? M("announcement", {
								attrs: {
									announcement: d.announcement
								},
								on: {
									click: d.onClickAnnouncement,
									dismiss: d.onDismissAnnouncement
								}
							}) : d._e()
						},
						nu = [],
						su = function() {
							var d = this,
								M = d._self._c,
								B = d._self._setupProxy;
							return M("div", {
								class: d.componentClasses,
								on: {
									click: d.onClick,
									mouseenter: d.clearTimeout,
									mouseleave: d.startTimeout
								}
							}, [M("span", {
								class: ["icon-font-chess", d.icon, d.$style.icon]
							}), d._v(" "), M("span", {
								class: d.$style.message,
								domProps: {
									innerHTML: d._s(d.message)
								},
								on: {
									click: function($) {
										return $.target !== $.currentTarget ? null : ($.stopPropagation(), d.onClick.apply(null, arguments))
									}
								}
							}), d._v(" "), d.isDismissable ? M("a", {
								directives: [{
									name: "tooltip",
									rawName: "v-tooltip",
									value: d.$trans("Dismiss"),
									expression: "$trans('Dismiss')"
								}],
								class: ["icon-font-chess x", d.$style.icon, d.$style.dismiss],
								on: {
									click: function($) {
										return $.stopPropagation(), d.dismiss.apply(null, arguments)
									}
								}
							}) : d._e()])
						},
						au = [],
						iu = (0, be.aZ)({
							name: "Announcement",
							directives: {
								tooltip: Ft.ZP
							},
							props: {
								announcement: {
									type: Object,
									required: !0
								}
							},
							emits: ["click", "dismiss"],
							data() {
								return {
									timeout: 0
								}
							},
							computed: {
								componentClasses() {
									return {
										[this.$style.component]: !0,
										[this.$style[this.status]]: !0,
										[this.$style.clickable]: this.announcement.clickable
									}
								},
								icon() {
									return this.announcement.icon || "bell"
								},
								message() {
									return this.announcement.message
								},
								status() {
									return this.announcement.status || "info"
								},
								isDismissable() {
									return this.announcement.dismissable
								}
							},
							beforeDestroy() {
								this.clearTimeout()
							},
							mounted() {
								this.startTimeout()
							},
							methods: {
								clearTimeout() {
									clearTimeout(this.timeout)
								},
								dismiss() {
									this.clearTimeout(), this.$emit("dismiss")
								},
								onClick() {
									this.announcement.clickable && this.$emit("click")
								},
								startTimeout() {
									this.isDismissable && (this.timeout = window.setTimeout(this.dismiss, 1e4))
								}
							}
						}),
						ou = iu,
						Fs = {
							component: "announcement-component",
							danger: "announcement-danger",
							info: "announcement-info",
							clickable: "announcement-clickable",
							dismiss: "announcement-dismiss",
							icon: "announcement-icon",
							message: "announcement-message"
						};

					function ru(f) {
						this.$style = Fs.locals || Fs
					}
					var lu = (0, me.Z)(ou, su, au, !1, ru, null, null),
						cu = lu.exports,
						On = e(77558);

					function uu() {
						On.I.announcement = null
					}

					function du() {
						return Dt.A.shutdownTimestamp + Dt.A.shutdownDelay
					}
					var mu = e(73641),
						hu = e(86351);

					function Gs() {
						const f = du();
						if (f) {
							const M = (0, mu.i)(),
								B = Math.round(Math.max(0, (f - M) / 6e4));
							return {
								icon: "circle-info",
								message: (0, Ne.jn)("{0} Server restarting. You're being reconnected. Please wait.|{1} Server restarting. You will be reconnected in 1 min|]1,Inf] Server restarting. You will be reconnected in %1$s% mins", B, {
									"%1$s%": B
								}),
								status: "info",
								clickable: !1,
								dismissable: !1,
								type: "shutdown"
							}
						}
						const d = (0, hu.P)();
						return d ? {
							icon: "circle-danger",
							message: (0, Ne.jn)("{0} Server restarts NOW|{1} Server restarts in 1 min|]1,Inf] Server restarts in %1$s% mins", d, {
								"%1$s%": d
							}),
							status: "danger",
							clickable: !1,
							dismissable: !1,
							type: "shutdown"
						} : On.I.announcement
					}
					var _u = e(86220),
						gu = e(58438),
						pu = (0, be.aZ)({
							name: "AnnouncementController",
							components: {
								Announcement: cu
							},
							computed: {
								announcement() {
									return Gs()
								},
								isAnnouncementVisible() {
									return Boolean(this.announcement)
								}
							},
							methods: {
								onClickAnnouncement() {
									var f;
									if ((0, ze.n)()) {
										(0, Ht.Y)();
										return
									}
									switch ((f = this.announcement) == null ? void 0 : f.type) {
										case "arena":
											(0, _u.E)(this.announcement.typeId);
											break;
										case "game":
											(0, It.y)(this.announcement.typeId);
											break;
										case "tournament":
											(0, gu.w)(this.announcement.typeId);
											break;
										default:
											break
									}
								},
								onDismissAnnouncement() {
									uu()
								}
							}
						}),
						fu = pu,
						bu = (0, me.Z)(fu, tu, nu, !1, null, null, null),
						vu = bu.exports,
						yu = function() {
							var d = this,
								M = d._self._c,
								B = d._self._setupProxy;
							return M("new-game-index", {
								attrs: {
									"is-custom-game-visible": d.isCustomGameVisible,
									"games-count": d.gamesCount,
									"sidebar-width": d.sidebarWidth,
									"players-count": d.playersCount,
									"is-logged-in": d.isLoggedIn
								},
								on: {
									"click-console": d.onClickConsole,
									"click-stats": d.onClickStats,
									"show-tournaments": d.onShowTournaments,
									"show-view": d.onShowView
								},
								scopedSlots: d._u([{
									key: "create-game",
									fn: function() {
										return [M("create-game")]
									},
									proxy: !0
								}, d.isIncomingChallengesVisible ? {
									key: "incoming-challenges",
									fn: function() {
										return [M("incoming-challenges")]
									},
									proxy: !0
								} : null, d.isCompetitionAnnouncementsVisible ? {
									key: "competition-announcements",
									fn: function() {
										return [M("competition-announcements")]
									},
									proxy: !0
								} : null, d.isFeaturedTvShowsVisible ? {
									key: "featured-tv-shows",
									fn: function() {
										return [M("featured-tv-shows")]
									},
									proxy: !0
								} : null], null, !0)
							})
						},
						wu = [],
						Eu = function() {
							var d = this,
								M = d._self._c,
								B = d._self._setupProxy;
							return M("div", {
								class: d.$style.component
							}, [d.isCustomGameVisible ? M("custom-game-tabs", {
								attrs: {
									"selected-tab": d.selectedTab
								},
								on: {
									"select-tab": d.onSelectTab
								}
							}) : d._e(), d._v(" "), M("div", {
								class: d.$style.content
							}, [d._t("create-game"), d._v(" "), d._t("incoming-challenges"), d._v(" "), M("direct-menu-item-small", {
								class: d.$style["direct-menu-item"],
								attrs: {
									"data-cy": "new-game-option-play-a-friend",
									img: "friend",
									header: d.$trans("Play a Friend")
								},
								on: {
									click: d.onClickPlayFriend
								}
							}), d._v(" "), M("direct-menu-item-small", {
								class: d.$style["direct-menu-item"],
								attrs: {
									"data-cy": "new-game-option-tournaments",
									img: "tournaments",
									header: d.$trans("Tournaments")
								},
								on: {
									click: function($) {
										return d.$emit("show-tournaments", $)
									}
								}
							}), d._v(" "), d._t("competition-announcements")], 2), d._v(" "), M("div", {
								class: d.$style.footer
							}, [d._t("featured-tv-shows"), d._v(" "), M("live-stats", {
								attrs: {
									"games-count": d.gamesCount,
									"is-logged-in": d.isLoggedIn,
									"is-sidebar-narrow": d.isSidebarNarrow,
									"players-count": d.playersCount
								},
								on: {
									"click-console": function($) {
										return d.$emit("click-console", $)
									},
									"click-stats": function($) {
										return d.$emit("click-stats", $)
									}
								}
							})], 2)], 1)
						},
						Pu = [],
						Cu = function() {
							var d = this,
								M = d._self._c;
							return M("button", {
								class: d.$style.component,
								attrs: {
									type: "button"
								},
								on: {
									click: function(B) {
										return d.$emit("click", B)
									}
								}
							}, [M("direct-menu-image", {
								class: d.$style.img,
								attrs: {
									img: d.img
								}
							}), d._v(" "), M("h2", {
								class: d.$style.title,
								domProps: {
									textContent: d._s(d.header)
								}
							})], 1)
						},
						Tu = [],
						Ou = e(96995),
						Mu = {
							name: "DirectMenuItemSmall",
							components: {
								DirectMenuImage: Ou.Z
							},
							props: {
								header: String,
								href: String,
								img: String
							},
							emits: ["click"]
						},
						ku = Mu,
						$s = {
							component: "direct-menu-item-small-component",
							img: "direct-menu-item-small-img",
							title: "direct-menu-item-small-title"
						};

					function Du(f) {
						this.$style = $s.locals || $s
					}
					var xu = (0, me.Z)(ku, Cu, Tu, !1, Du, null, null),
						Ru = xu.exports,
						Bu = e(38149),
						Au = function() {
							var d = this,
								M = d._self._c,
								B = d._self._setupProxy;
							return M("div", {
								class: d.$style.component
							}, [d.isLoggedIn ? M("button", {
								class: d.$style.icon,
								attrs: {
									"data-cy": "new-game-console-button",
									type: "button",
									"aria-label": d.$trans("Console")
								},
								on: {
									click: function($) {
										return d.$emit("click-console", $)
									}
								}
							}, [M("span", {
								staticClass: "icon-font-chess popup"
							})]) : d._e(), d._v(" "), d.gamesCount && d.playersCount ? M("button", {
								class: d.$style.text,
								attrs: {
									type: "button",
									"aria-label": d.$trans("Watch games")
								},
								domProps: {
									innerHTML: d._s(d.text)
								},
								on: {
									click: function($) {
										return d.$emit("click-stats", $)
									}
								}
							}) : d._e()])
						},
						Su = [],
						Iu = (0, be.aZ)({
							name: "LiveStats",
							props: {
								gamesCount: {
									type: Number,
									required: !0
								},
								isLoggedIn: {
									type: Boolean,
									required: !0
								},
								isSidebarNarrow: {
									type: Boolean,
									required: !0
								},
								playersCount: {
									type: Number,
									required: !0
								}
							},
							emits: ["click-stats", "click-console"],
							computed: {
								text() {
									return this.isSidebarNarrow ? this.$transChoice("{0} <strong>%1$s%</strong> Playing <strong>0</strong> Games|{1} <strong>%1$s%</strong> Playing <strong>1</strong> Game|]1,Inf] <strong>%1$s%</strong> Playing <strong>%2$s%</strong> Games", this.gamesCount, {
										"%1$s%": this.playersCount.toLocaleString(),
										"%2$s%": this.gamesCount.toLocaleString()
									}) : this.$transChoice("{0} <strong>%1$s%</strong> Playing <strong>0</strong> Games Today|{1} <strong>%1$s%</strong> Playing <strong>1</strong> Game Today|]1,Inf] <strong>%1$s%</strong> Playing <strong>%2$s%</strong> Games Today", this.gamesCount, {
										"%1$s%": this.playersCount.toLocaleString(),
										"%2$s%": this.gamesCount.toLocaleString()
									})
								}
							}
						}),
						Lu = Iu,
						Zs = {
							component: "live-stats-component",
							icon: "live-stats-icon",
							text: "live-stats-text"
						};

					function Uu(f) {
						this.$style = Zs.locals || Zs
					}
					var zu = (0, me.Z)(Lu, Au, Su, !1, Uu, null, null),
						Wu = zu.exports,
						Ku = (0, be.aZ)({
							name: "NewGameIndex",
							components: {
								LiveStats: Wu,
								DirectMenuItemSmall: Ru,
								CustomGameTabs: Bu.Z
							},
							props: {
								gamesCount: {
									type: Number,
									required: !0
								},
								isLoggedIn: {
									type: Boolean,
									required: !0
								},
								sidebarWidth: {
									type: Number,
									required: !0
								},
								playersCount: {
									type: Number,
									required: !0
								},
								isCustomGameVisible: {
									type: Boolean,
									required: !0
								}
							},
							emits: ["click-console", "click-stats", "show-tournaments", "show-view"],
							computed: {
								isSidebarNarrow() {
									return this.sidebarWidth < 450
								},
								selectedTab() {
									return Re.H5.customGameOptions
								}
							},
							methods: {
								onSelectTab({
									tab: {
										id: f
									}
								}) {
									this.$emit("show-view", {
										view: f
									})
								},
								onClickPlayFriend() {
									this.$emit("show-view", {
										view: Re.H5.playFriend
									})
								}
							}
						}),
						ju = Ku,
						Vs = {
							component: "new-game-index-component",
							content: "new-game-index-content",
							separator: "new-game-index-separator",
							"direct-menu-item": "new-game-index-direct-menu-item",
							footer: "new-game-index-footer"
						};

					function Nu(f) {
						this.$style = Vs.locals || Vs
					}
					var Fu = (0, me.Z)(ju, Eu, Pu, !1, Nu, null, null),
						Gu = Fu.exports,
						$u = e(82525),
						Zu = e(11145),
						Vu = e(60826);
					async function Hu() {
						await qe.Q.load()
					}
					var Qu = e(64381);

					function Ju() {
						return (0, Qu.n)().length > 0
					}
					var Mn = e(42481),
						kn = e(32362),
						Hs = e(58131),
						Yu = e(30098),
						Qs = e(41115),
						ce = e(28),
						Xu = e(18139);

					function Dn() {
						return (0, N.j)() && !(0, ze.n)()
					}
					var xn = e(52512),
						qu = (0, be.aZ)({
							name: "NewGameController",
							components: {
								CreateGame: $u.Z,
								NewGameIndex: Gu,
								CompetitionAnnouncements: () => e.e(6649).then(e.bind(e, 74319)),
								IncomingChallenges: () => e.e(9730).then(e.bind(e, 20095)),
								FeaturedTvShows: () => e.e(4241).then(e.bind(e, 98062))
							},
							computed: {
								sidebarWidth() {
									return (0, Xu.V)()
								},
								gamesCount() {
									return window.chesscom.statsGames || 0
								},
								playersCount() {
									return window.chesscom.statsMembersOnline || 0
								},
								isLoggedIn() {
									return (0, N.j)()
								},
								isCustomGameVisible() {
									return (0, fn.S)() === Re.H5.customGameOptions
								},
								isFeaturedTvShowsVisible() {
									return Ju()
								},
								isIncomingChallengesVisible() {
									return Boolean((0, Yu.s)().length)
								},
								isCompetitionAnnouncementsVisible() {
									return Dn()
								}
							},
							created() {
								(0, N.j)() && (Hu(), (0, ze.n)() || (0, Vu.Q)())
							},
							methods: {
								onClickConsole() {
									if (!(0, N.j)() || (0, ze.n)()) {
										(0, Ht.Y)();
										return
									}
									if (!(0, xn.J)()) {
										(0, Mn.L)();
										return
									}(0, wt.X)(Et.V.Console.key)
								},
								onShowTournaments() {
									if (!(0, N.j)() || (0, ze.n)()) {
										(0, Ht.Y)();
										return
									}
									if (!(0, xn.J)()) {
										(0, Mn.L)();
										return
									}(0, Zu.t)(), (0, Hs.j)("tournaments")
								},
								onShowView({
									view: f
								}) {
									if ((!(0, N.j)() || (0, ze.n)()) && f === Re.H5.playFriend) {
										(0, Ht.Y)();
										return
									}
									if (!(0, N.j)()) {
										(0, kn.f)();
										return
									}
									if (!(0, xn.J)()) {
										(0, Mn.L)();
										return
									}(0, pn.m)(f), (0, Hs.j)(f)
								},
								onClickStats() {
									(0, Qs.X)(ce.W.games), (0, De.S)(Nn.v.watch)
								}
							}
						}),
						ed = qu,
						td = (0, me.Z)(ed, yu, wu, !1, null, null, null),
						Js = td.exports,
						nd = e(12474),
						sd = e(53197),
						ad = e(21980),
						id = e(1730),
						ke = e(31780);
					const od = {
						[Re.H5.default]: Js,
						[Re.H5.customGameOptions]: Js,
						[Re.H5.openChallenges]: (0, ke.F)(() => e.e(8851).then(e.bind(e, 13118))),
						[Re.H5.playFriend]: (0, ke.F)(() => e.e(6011).then(e.bind(e, 85473))),
						[Re.H5.playVs]: (0, ke.F)(() => Promise.all([e.e(3081), e.e(7439)]).then(e.bind(e, 16007))),
						[Re.H5.outgoingChallenges]: (0, ke.F)(() => e.e(2511).then(e.bind(e, 19834))),
						[Re.H5.customPositionSetup]: (0, ke.F)(() => e.e(2214).then(e.bind(e, 66765))),
						[Re.H5.customPositionSelectOdds]: (0, ke.F)(() => Promise.all([e.e(9194), e.e(8367)]).then(e.bind(e, 4762))),
						[Re.H5.customPositionSelectOpening]: (0, ke.F)(() => Promise.all([e.e(9194), e.e(9604)]).then(e.bind(e, 54003)))
					};
					var rd = (0, be.aZ)({
							name: "NewGameTabController",
							components: {
								AnnouncementController: vu,
								TabContainer: eu.Z
							},
							computed: {
								controller() {
									return od[(0, fn.S)()]
								},
								isAnnouncementVisible() {
									return Boolean(Gs())
								}
							},
							mounted() {
								Dn() && !(0, ot.h)() && !(0, ad.b)() && (0, nd.d)()
							},
							beforeDestroy() {
								Dn() && !(0, ot.h)() && (0, id.k)() && (0, sd.F)()
							}
						}),
						ld = rd,
						cd = (0, me.Z)(ld, Xc, qc, !1, null, null, null),
						ud = cd.exports,
						dd = e(16610),
						Ys = e(54938),
						md = e(47440),
						hd = e(37960),
						Xs = e(34169),
						_d = e(25689),
						gd = e(37129),
						pd = e(86601),
						fd = e(93654),
						bd = e(15869),
						qs = e(98627),
						vd = e(20685),
						yd = e(15706),
						wd = e(64075),
						Rn = e(95334),
						Bn = e(5479),
						Ed = e(54598),
						Pd = e(54983),
						Cd = e(62769),
						Td = e(76013),
						Od = e(97702),
						Md = e(24003),
						kd = e(5015),
						Dd = e(71437),
						xd = e(89235);
					const Rd = [z.Q.ArchivedGame, z.Q.ComputerGame, z.Q.DailyGame, z.Q.DailySeek, z.Q.LiveGame, z.Q.RcnGame];

					function ea() {
						const f = (0, Wt.r)(),
							d = f.id;
						return !!(Rd.includes(f.name) && !(0, He.H)() || f.name === z.Q.LiveTournament && !(0, Rn.x)(d) || f.name === z.Q.LiveArena && !(0, Vt.l)(d) || f.name === z.Q.LiveTeamMatch && !(0, qs.e)(d) || f.params.action === Pt.y.CreateLiveChallenge && (0, xd.j)())
					}

					function Bd() {
						return window.innerWidth < 960
					}
					var Ad = e(69046),
						Sd = e(77067);

					function Id() {
						const f = (0, Wt.r)().name;
						return !(0, He.H)() && ((0, Ad.t)() || Bd()) && (f === z.Q.Play || Sd.d.includes(f))
					}

					function An(f, d) {
						return d ? (0, Ne.dW)("Analysis") : f ? (0, Ne.dW)("Play") : (0, Ne.dW)("Watch")
					}
					const ta = "dismissDailyGamesPopup",
						Ld = {
							[ce.W.arena]: (0, ke.F)(() => Promise.all([e.e(929), e.e(7953), e.e(2538), e.e(3779), e.e(7051), e.e(3900), e.e(6287)]).then(e.bind(e, 31299))),
							[ce.W.arenaChallenge]: (0, ke.F)(() => e.e(9681).then(e.bind(e, 61766))),
							[ce.W.games]: (0, ke.F)(() => e.e(9441).then(e.bind(e, 22725))),
							[ce.W.newGame]: ud,
							[ce.W.players]: (0, ke.F)(() => e.e(5874).then(e.bind(e, 61953))),
							[ce.W.teamMatch]: (0, ke.F)(() => Promise.all([e.e(929), e.e(7953), e.e(2538), e.e(3779), e.e(5354)]).then(e.bind(e, 83605))),
							[ce.W.teamMatchChallenge]: (0, ke.F)(() => e.e(319).then(e.bind(e, 1081))),
							[ce.W.tournament]: (0, ke.F)(() => Promise.all([e.e(929), e.e(7953), e.e(2538), e.e(3779), e.e(7051), e.e(3900), e.e(4397)]).then(e.bind(e, 89248)))
						},
						Ud = {
							[le.V.Analysis]: (0, ke.F)(() => Promise.all([e.e(938), e.e(1595)]).then(e.bind(e, 97721))),
							[le.V.LiveGame]: (0, ke.F)(() => Promise.all([e.e(929), e.e(7953), e.e(2538), e.e(3779), e.e(4851), e.e(938), e.e(2904), e.e(2957), e.e(7051), e.e(8655), e.e(4762), e.e(3526)]).then(e.bind(e, 56442))),
							[le.V.DailyGame]: (0, ke.F)(() => Promise.all([e.e(4851), e.e(938), e.e(2904), e.e(2957), e.e(6005)]).then(e.bind(e, 2653))),
							[le.V.DailySeek]: (0, ke.F)(() => e.e(7238).then(e.bind(e, 85818))),
							[le.V.RcnGame]: (0, ke.F)(() => Promise.all([e.e(868), e.e(929), e.e(7953), e.e(2538), e.e(3779), e.e(4851), e.e(938), e.e(2904), e.e(2957), e.e(8655), e.e(4762), e.e(5570)]).then(e.bind(e, 87062)))
						};
					var zd = (0, be.aZ)({
							el: "#sidebar",
							name: "SidebarController",
							components: {
								FloatingModalsController: () => Promise.all([e.e(929), e.e(9194), e.e(2538), e.e(9288)]).then(e.bind(e, 2593)),
								FocusModeControlsController: () => Promise.all([e.e(868), e.e(4851), e.e(2904), e.e(8655), e.e(3630)]).then(e.bind(e, 54870)),
								Sidebar: Qc,
								TabContent: Jc.Z,
								Tabs: Yc.Z
							},
							data() {
								return {
									isLoading: ea(),
									isDailyGamesPopupVisible: Boolean(!window.localStorage.getItem(ta) && (0, cs.K)({
										name: z.Q.Daily
									}))
								}
							},
							computed: {
								hasFloatingModals() {
									return (0, Od.d)().length > 0
								},
								isFocusMode() {
									return (0, en.G)()
								},
								activeBoard() {
									return (0, He.H)()
								},
								selectedTab() {
									return (0, Td.K)()
								},
								controller() {
									return this.activeBoard && (this.selectedTab === ce.W.game || this.selectedTab === ce.W.dailyGame || this.selectedTab === ce.W.analysis) ? Ud[this.activeBoard.type] : Ld[this.selectedTab]
								},
								liveTeamMatchChallenge() {
									const f = (0, md.T)();
									return f ? (0, vd.Q)(f) : null
								},
								liveArenaChallenge() {
									const f = (0, dd.f)();
									return f ? (0, pd.o)(f) : null
								},
								liveTournament() {
									const f = (0, Xs.t)();
									return f ? (0, Rn.x)(f) : null
								},
								liveArena() {
									const f = (0, Ys.r)();
									return f ? (0, Vt.l)(f) : null
								},
								liveTeamMatch() {
									const f = (0, hd.m)();
									return f ? (0, qs.e)(f) : null
								},
								tabs() {
									const f = [];
									if ((0, Md.L)() && f.push({
											id: ce.W.analysis,
											icon: "chess-board-search",
											label: this.$trans("Analysis"),
											closable: !0
										}), (0, kd.h)() && f.push({
											id: ce.W.dailyGame,
											icon: "daily",
											label: this.$trans("Daily"),
											closable: !0
										}), (0, Dd.A)()) {
										const d = this.getLiveGameTab();
										d && f.push(d)
									}
									return this.liveArena && f.push({
										id: ce.W.arena,
										icon: "order",
										label: this.liveArena.getLabel(),
										closable: !0
									}), this.liveTournament && f.push({
										id: ce.W.tournament,
										icon: "order",
										label: this.liveTournament.getLabel(),
										closable: !0,
										confirmClose: {
											active: (0, Bn.q)(this.liveTournament.id),
											content: this.$trans("Do you want to withdraw from this tournament?")
										}
									}), this.liveTeamMatch && f.push({
										id: ce.W.teamMatch,
										icon: "crossed-swords",
										label: this.liveTeamMatch.getLabel(),
										closable: !0
									}), this.liveArenaChallenge && f.push({
										id: ce.W.arenaChallenge,
										icon: "crossed-swords",
										label: this.liveArenaChallenge.getLabel(),
										closable: !0
									}), this.liveTeamMatchChallenge && f.push({
										id: ce.W.teamMatchChallenge,
										icon: "crossed-swords",
										label: this.liveTeamMatchChallenge.getLabel(),
										closable: !0
									}), f.push({
										id: ce.W.newGame,
										label: this.$trans("New Game"),
										icon: "square-plus",
										closable: !1
									}, {
										id: ce.W.games,
										label: this.$trans("Games"),
										icon: "chess-board",
										closable: !1,
										dailyGamesPopup: this.isDailyGamesPopupVisible
									}, {
										id: ce.W.players,
										label: this.$trans("Players"),
										icon: "users-alt",
										closable: !1
									}), f
								},
								isSidebarLoading() {
									return ea()
								}
							},
							watch: {
								isSidebarLoading(f, d) {
									!f && d && (this.isLoading = !1)
								}
							},
							mounted() {
								Id() && this.$el.scrollIntoView(!0)
							},
							methods: {
								onSelectTab({
									tab: f
								}) {
									if (!(0, N.j)()) {
										(0, kn.f)();
										return
									}
									if ((0, ze.n)() && f.id === ce.W.games && window.chesscom.features.includes("play_no_games_tab_for_guests")) {
										(0, Ht.Y)();
										return
									}(0, Qs.X)(f.id)
								},
								onCloseTab({
									tab: f
								}) {
									switch (f.id) {
										case ce.W.analysis:
										case ce.W.dailyGame:
										case ce.W.game: {
											this.activeBoard && (0, Ed.U)(this.activeBoard);
											break
										}
										case ce.W.arena: {
											this.liveArena && (0, _d.f)(this.liveArena.id);
											break
										}
										case ce.W.arenaChallenge: {
											this.liveArenaChallenge && (0, gd.m)(this.liveArenaChallenge.id);
											break
										}
										case ce.W.tournament: {
											this.liveTournament && ((0, Bn.q)(this.liveTournament.id) ? (0, wd.f)(this.liveTournament.id) : (0, yd.p)(this.liveTournament.id));
											break
										}
										case ce.W.teamMatchChallenge: {
											this.liveTeamMatchChallenge && (0, bd.g)(this.liveTeamMatchChallenge.id);
											break
										}
										case ce.W.teamMatch: {
											this.liveTeamMatch && (0, fd.e)(this.liveTeamMatch.id);
											break
										}
										default:
											break
									}
								},
								getLiveGameTab() {
									if (!this.activeBoard) return null;
									const f = (0, Pd.K)(this.activeBoard) === ce.W.game ? this.activeBoard : (0, Cd.N)();
									if (!f) return null;
									if (f.type === le.V.LiveGame) {
										const d = (0, dt.S)(f.id);
										if (d) return {
											id: ce.W.game,
											icon: (0, Ns.N)(d.getTimeControl(), d.getGameType()),
											label: An(d.isPlaying((0, Oe.t)()), d.isOver()),
											closable: d.isPlaying((0, Oe.t)()) ? d.isOver() : !0
										}
									}
									if (f.type === le.V.RcnGame) {
										const d = (0, mt.M)(f.id);
										if (d) return {
											id: ce.W.game,
											icon: (0, Ns.N)(d.getTimeControl(), d.getGameType()),
											label: An(d.isPlaying((0, Se.S)()), d.isOver()),
											closable: d.isPlaying((0, Se.S)()) ? d.isOver() : !0
										}
									}
									if (f.type === le.V.DailyGame) {
										const d = (0, Mt.P)(f.id);
										if (d) return {
											id: ce.W.game,
											icon: d.getTimeControlIcon(),
											label: An(d.isPlaying((0, Se.S)()), d.isOver()),
											closable: !0
										}
									}
									return null
								},
								onCloseDailyGamesPopup() {
									this.isDailyGamesPopupVisible = !1, window.localStorage.setItem(ta, "true")
								}
							}
						}),
						Wd = zd,
						Kd = (0, me.Z)(Wd, Kc, jc, !1, null, null, null),
						jd = Kd.exports,
						Nd = [er, Ac, Wc, jd],
						na = e(86880),
						Fd = Object.defineProperty,
						Gd = (f, d, M) => d in f ? Fd(f, d, {
							enumerable: !0,
							configurable: !0,
							writable: !0,
							value: M
						}) : f[d] = M,
						nn = (f, d, M) => (Gd(f, typeof d != "symbol" ? d + "" : d, M), M);
					class $d extends HTMLElement {
						constructor() {
							super(...arguments), nn(this, "delay", 0), nn(this, "endTime", 1 / 0), nn(this, "interval", null), nn(this, "timeLeft", 0)
						}
						connectedCallback() {
							this.initialize(), this.start()
						}
						initialize() {
							this.timeLeft = Number(this.getAttribute("time-left")), this.delay = Number(this.getAttribute("delay")) || 0, this.textContent = (0, na.mr)(this.timeLeft)
						}
						start() {
							setTimeout(() => {
								this.endTime = Date.now() + this.timeLeft, this.interval = setInterval(this.step.bind(this), 100)
							}, this.delay)
						}
						step() {
							if (Date.now() > this.endTime) {
								clearInterval(this.interval), this.interval = null;
								return
							}
							this.textContent = this.formatText()
						}
						formatText() {
							const d = Math.floor(this.endTime - Date.now());
							return (0, na.mr)(d)
						}
						disconnectedCallback() {
							clearInterval(this.interval), this.interval = null
						}
					}
					var Zd = {
							"count-down": $d
						},
						sa = e(48147),
						Vd = e(44280),
						Hd = e(47180);
					const Qd = (0, s.ko)({
						state: [Hd.o],
						context: Vd.k
					});
					var sn = e(89871);

					function Jd() {
						const f = (0, He.H)();
						switch (f?.type) {
							case le.V.DailyGame: {
								const d = (0, Mt.P)(f.id);
								let M = z.Q.DailyGame;
								return d.isLiveGame ? M = z.Q.LiveGame : d.isVsComputer && (M = z.Q.ComputerGame), Ke.Z.generate(M, {
									id: f.id
								})
							}
							case le.V.LiveGame: {
								const d = (0, dt.S)(f.id);
								return d?.isOver() ? Ke.Z.generate(z.Q.LiveGame, {
									id: f.id
								}) : null
							}
							case le.V.RcnGame: {
								const d = (0, mt.M)(f.id);
								return d?.isOver() ? Ke.Z.generate(z.Q.RcnGame, {
									id: f.id
								}) : null
							}
							default:
								return null
						}
					}
					const Yd = Qd({
						getGameUrl: Jd,
						getGamePgn: () => (0, sn.g)().game.getPGN()
					});

					function Xd() {
						return "//cdn.intergient.com/pageos/pageos.js"
					}

					function qd() {
						return "//cdn.intergient.com/1024308/72720/ramp.js"
					}
					var aa = e(26049),
						ia = e(52472),
						an = e(82326);
					const oa = 3e4,
						em = 3e3;

					function tm() {
						an.e.changePath("trigger-test"), setTimeout(Sn, oa)
					}

					function Sn() {
						var f, d;
						(d = (f = ia.Q).shouldNotRefreshAds) != null && d.call(f) ? setTimeout(Sn, em) : (an.e.triggerRefresh(), setTimeout(Sn, oa))
					}
					var ra = e(92505);
					const nm = (0, s.eI)({
						init() {
							window.addEventListener("load", this.onWindowLoad)
						},
						onWindowLoad() {
							if (window.Cypress) return;
							window.chesscom.features.includes("ads_playwire_ramp") ? Object.assign(an.e, {
								passiveMode: !0,
								que: [],
								onReady: () => {
									an.e.setPath("play"), (0, aa.$)(), window.chesscom.features.includes("play_ads_trigger_refresh") && tm()
								}
							}) : Object.assign(ra.L, {
								mode: "tyche",
								config: "https://config.playwire.com/1024308/v2/websites/72720/banner.json",
								passiveMode: !0,
								onReady: () => {
									ra.L.setPath("play"), (0, aa.$)()
								}
							});
							const f = document.createElement("script");
							Object.assign(f, {
								id: "tyche",
								src: window.chesscom.features.includes("ads_playwire_ramp") ? qd() : Xd(),
								async: !0,
								type: "text/javascript"
							}), document.body.appendChild(f)
						}
					});
					var sm = function() {
							var d = this,
								M = d._self._c,
								B = d._self._setupProxy;
							return d.isAdsEnabled ? M("div", {
								staticClass: "sidebar-ad"
							}, [M("div", {
								attrs: {
									id: d.slotId
								}
							}), d._v(" "), M("a", {
								attrs: {
									"data-cy": d.$cy.ads.sidebar.upgradeLink,
									href: d.upgradeUrl,
									target: "_blank"
								},
								domProps: {
									textContent: d._s(d.$trans("Remove Ads"))
								}
							})]) : d._e()
						},
						am = [],
						im = e(62645);

					function om(f) {
						(0, im.y)(bs.I.BodyClass.Ad, f)
					}
					var rm = e(33558),
						lm = (0, be.aZ)({
							el: "#sidebar-ad",
							name: "SidebarAdController",
							computed: {
								slotId() {
									return rm.E.sidebar.selectorId
								},
								upgradeUrl() {
									return Ke.Z.generate("web_membership", {
										c: "no_ads"
									})
								},
								isAdsEnabled() {
									return (0, sa.M)()
								}
							},
							watch: {
								isAdsEnabled: {
									immediate: !0,
									handler(f) {
										om(f)
									}
								}
							}
						}),
						cm = lm,
						um = (0, me.Z)(cm, sm, am, !1, null, null, null),
						dm = um.exports;
					const mm = (0, s.ko)({
						clients: [nm],
						controllers: [dm],
						context: ia.Q
					});

					function hm() {
						return y.J.clocks.some(f => f.playerIndex !== -1 && f.lowTime[f.playerIndex])
					}

					function _m() {
						var f, d;
						const M = (0, sn.g)();
						return M?.game.isAnimating() || ((d = M == null ? void 0 : (f = M.game).isDragging) == null ? void 0 : d.call(f)) || hm()
					}
					var gm = e(16806);

					function pm(f) {
						var d;
						return Boolean(((d = (0, Vt.l)(f)) == null ? void 0 : d.isActive()) && (0, gm.D)(f))
					}

					function fm() {
						var f, d;
						const M = (0, Ys.r)();
						if (M && ((f = (0, Vt.l)(M)) == null ? void 0 : f.isAdFree()) && pm(M)) return !0;
						const B = (0, Xs.t)();
						return !!(B && ((d = (0, Rn.x)(B)) == null ? void 0 : d.isAdFree()) && (0, Bn.q)(B))
					}
					const bm = mm({
							isAdsTemporarilyDisabled: fm,
							shouldNotRefreshAds: _m
						}),
						vm = (0, s.eI)({
							init() {
								this.addIcon()
							},
							addIcon() {
								const f = document.getElementById("board-controls-emoji-palette");
								f?.addEventListener("click", () => {
									vs(f)
								})
							}
						});
					var ym = e(88602);
					const wm = (0, s.ko)({
							context: ym.u,
							clients: [vm],
							state: [tt.h]
						}),
						Em = {
							getActiveChessboard: sn.g
						},
						Pm = wm(Em);
					var la = e(65256),
						In = e(54612),
						Cm = e(89466),
						Tm = e(28149),
						on = e(55607),
						Om = e(10513);
					async function Mm() {
						let f;
						try {
							f = await (0, Tm.R)()
						} catch (d) {
							console.error(d)
						}
						f && (Object.assign(on.q.boardOptions, f), Om.n.setBoardOptions(on.q.boardOptions)), In.f.getActiveChessboardId && ((0, Cm.x)().forEach(d => {
							d.game.setOptions(on.q.boardOptions)
						}), (0, la.q)())
					}

					function km() {
						var f, d, M, B;
						return Boolean(((d = (f = window.context) == null ? void 0 : f.user) == null ? void 0 : d.username) && ((B = (M = In.f).shouldLoadBoardOptions) == null ? void 0 : B.call(M)))
					}
					const Dm = (0, s.eI)({
						init() {
							return km() ? Mm() : Promise.resolve()
						}
					});
					var xm = e(58537),
						Rm = {
							"chess-board": xm.M
						};
					const Bm = (0, s.ko)({
						clients: [Dm],
						context: In.f,
						elements: Rm,
						state: [on.q.boardOptions]
					});

					function Am() {
						return "single"
					}
					const Sm = Bm({
							getActiveChessboardId: Am,
							shouldLoadBoardOptions: () => !0
						}),
						Im = (0, s.kr)();
					var Lm = e(86084);
					const Um = (0, s.ko)({
						context: Im,
						state: [Lm.u]
					})({});
					var zm = e(18561),
						Wm = e(65264),
						Km = e(84732);
					const jm = {
							settings: (0, Km.Gw)()
						},
						Nm = (0, s.ko)({
							state: [jm],
							context: Wm.a
						});
					var Fm = e(5628);
					const Gm = {
							getActiveChessboard: zm.g,
							getActiveChessboardElementId: ws.H,
							isEvaluationBarVisible: Fm.l,
							isDefaultFenAutomatic: () => !0
						},
						$m = Nm(Gm);
					var xt = e(46584),
						Ln = e(74863);
					const Zm = (0, s.eI)({
							init(f) {
								Ln.k.on(xt.x.State, this.onState), window.addEventListener("pagehide", this.onPageHide), f.then(this.onAppInitialized)
							},
							onAppInitialized() {
								Dt.A.isAppInitialized = !0, O.c.emit(k.F.Init)
							},
							onState(f) {
								Object.assign(Dt.A, f)
							},
							onPageHide() {
								Ln.k.emit(xt.x.Unload)
							}
						}),
						Vm = (0, s.VM)({
							triggers: [(0, s.$y)(Ln.k, [xt.x.Connect, xt.x.Publish, xt.x.Subscribe, xt.x.Unsubscribe])],
							loader: () => e.e(5925).then(e.bind(e, 94641))
						});
					var Hm = e(14869);
					const Qm = (0, s.ko)({
						context: Hm.R,
						clients: [Vm, Zm],
						state: [Dt.A]
					});
					var ca = e(96979),
						Jm = e(4113),
						Ym = e(54252),
						Xm = e(87002),
						qm = e(18539);

					function eh() {
						const f = (0, Jm.V)(),
							d = (0, Ym.L)(f, qm.k.stats);
						return (0, Xm.r)(d)
					}

					function th() {
						const f = eh(),
							d = Object.keys(f);
						return d.length ? d.map(B => sh(B, f[B])).map(B => ({
							networkKey: B.networkKey,
							score: nh(B)
						})).sort((B, $) => B.score - $.score)[0].networkKey : null
					}

					function nh({
						avgLatency: f,
						disconnects: d,
						uninterruptedGames: M
					}) {
						return f + 50 * d + 10 * M
					}

					function sh(f, d) {
						const $ = Object.values(d.gameStats),
							te = {
								avgLatency: 0,
								disconnects: 0,
								networkKey: f,
								uninterruptedGames: 0
							},
							he = [];
						let xe = 0;
						for (let ht = 0; ht < $.length; ht++) {
							const {
								disconnects: Rt,
								latencies: ln = []
							} = $[ht];
							Rt ? (xe < 10 && (te.disconnects += Rt), xe++) : te.uninterruptedGames < 5 && (te.uninterruptedGames++, ln.length && he.push((0, ca.W)(ln)))
						}
						return te.avgLatency = (0, ca.W)(he), te.disconnects += d.outOfGameDisconnects.length, te
					}
					var ua = e(25507);
					const ah = {
							getClientName: ua.i,
							getPreferredNetwork: window.chesscom.features.includes("play_smart_network_choice") ? th : void 0
						},
						ih = Qm(ah);
					var nt = e(98033);
					const oh = (0, s.eI)({
						init(f) {
							!(0, We.q)() || ((0, nt.R)(), f.then(nt.R), Me.pS.on(Me.LZ.CONNECT, nt.R), Me.pS.on(Me.LZ.DISCONNECT, nt.R), Me.pS.on(Me.LZ.ERROR, nt.R), Me.pS.on(Me.LZ.FAILURE, nt.R), Me.pS.on(Me.LZ.RECONNECT, nt.R), Me.pS.client.addQualityListener(nt.R))
						}
					});
					var rh = e(9296);
					const lh = (0, s.ko)({
							clients: [oh],
							state: [Ss.z.reactive],
							context: rh.q
						}),
						ch = {
							getClientId: ua.i
						},
						uh = lh(ch);
					var dh = e(45353),
						mh = e(81166);
					const rn = (0, s.kr)();
					var hh = function() {
							var d = this,
								M = d._self._c,
								B = d._self._setupProxy;
							return d.isVisible && d.shareMenuData ? M("share-menu", d._b({
								ref: "modal",
								attrs: {
									"board-settings": d.boardStyles,
									"is-logged-in": d.isLoggedIn
								},
								on: {
									hide: d.onClose,
									mounted: d.onShareMenuMounted
								}
							}, "share-menu", d.shareMenuData, !1)) : d._e()
						},
						_h = [],
						gh = e(28466),
						Qt = e(79674);

					function ph() {
						Qt.h.options = gh.v, Qt.h.isVisible = !1
					}

					function fh() {
						return rn.getActiveChessboard()
					}

					function bh() {
						return Qt.h.options
					}

					function vh() {
						return Qt.h.isVisible
					}
					var da = e(69839),
						yh = (0, be.aZ)({
							el: "#share-modal",
							name: "ShareModalController",
							components: {
								ShareMenu: () => Promise.all([e.e(1720), e.e(115), e.e(6612)]).then(e.bind(e, 31720))
							},
							setup() {
								return {
									checkboxModel: da._$
								}
							},
							data() {
								return {
									shareMenuData: null
								}
							},
							computed: {
								isVisible() {
									return vh()
								},
								boardStyles() {
									return rn.getBoardStyles()
								},
								isLoggedIn() {
									var f, d;
									return Boolean((d = (f = window.context) == null ? void 0 : f.user) == null ? void 0 : d.id)
								}
							},
							watch: {
								isVisible() {
									this.isVisible && this.loadBoardData()
								},
								checkboxModel: {
									deep: !0,
									handler() {
										this.loadBoardData()
									}
								}
							},
							methods: {
								onClose() {
									ph()
								},
								onShareMenuMounted(f) {
									f()
								},
								async loadBoardData() {
									await rn.loadBoardStyles();
									const f = fh(),
										d = f.game.getOptions(),
										M = bh();
									this.shareMenuData = {
										...M,
										initialActiveTab: M.initialTab,
										tcn: f.game.getTCN(),
										fen: f.game.getFEN(),
										pgn: f.game.getPGN((0, da.nj)(this.checkboxModel)),
										pgnHeaders: f.game.getHeaders(),
										hasTimestamps: !0,
										variant: f.game.getVariant(),
										boardOptions: {
											coordinates: d.coordinates,
											boardStyle: d.boardStyle,
											pieceStyle: d.pieceStyle,
											flipBoard: d.flipped
										}
									}
								}
							}
						}),
						wh = yh,
						Eh = (0, me.Z)(wh, hh, _h, !1, null, null, null),
						Ph = Eh.exports;
					const Ch = (0, s.ko)({
							state: [Qt.h],
							context: rn,
							controllers: [Ph]
						}),
						Th = {
							getActiveChessboard: sn.g,
							getBoardStyles: mh.X,
							loadBoardStyles: dh.o
						},
						Oh = Ch(Th),
						ma = [Yd, Pm, Sm, Um, Oh, $m, uh, ih];
					(0, sa.M)() && ma.push(bm);
					var Mh = ma,
						kh = e(77099),
						Dh = e(60849),
						xh = e(64276),
						Rh = e(67421),
						Bh = e(30201),
						Ah = e(66932),
						Sh = e(30300),
						Ih = e(3022),
						Lh = e(69403),
						Uh = e(62724),
						zh = e(8207),
						Wh = e(51401),
						Kh = e(4454),
						jh = e(25404),
						Nh = e(35916),
						Fh = e(94070),
						Gh = e(80425),
						$h = e(79116),
						Zh = e(97519),
						Vh = e(5887),
						Hh = e(50047),
						Qh = e(9647),
						Jh = e(75560),
						Yh = e(5365),
						Xh = e(79830),
						qh = e(8859),
						e_ = e(69207),
						t_ = e(79357),
						n_ = e(495),
						s_ = e(4412),
						a_ = [pe.k, y.J.currentTime, kh.m, Dh.k, xh.C, Rh.G, Bh.n, R.y, Ah.p, Sh.f, Ih.M, Lh.t, Uh.F, zh.V, Us.d, Ae.N, Wh.p, On.I, Kh.C, jh.M, Nh.W, Fh.p, ut._, Gh.K, $h.B, Zh.Z, Ct.m, Vh.m, Ws.c, Hh.o, Qh.f, yt.V, Ot.p, Jh.T, Yh.K, se.B, ms.S, Xh.L, qh.D, e_.b, t_.g, n_.E, s_.i, qt.B, Fn.K],
						i_ = e(38465),
						o_ = e(52461);

					function r_() {
						var f;
						const d = (f = document.getElementById("board")) == null ? void 0 : f.getAttribute("data-piece-style");
						return Boolean(d && ["real3d", "3d_staunton", "3dwood", "3dchesskid", "3dplastic"].includes(d))
					}

					function l_() {
						r_() ? (0, o_.U)().then(i_.t) : (0, la.q)()
					}

					function c_() {
						var f;
						const d = (f = window?.context) == null ? void 0 : f.user;
						return d?.isGuest ? !(d.fairPlayAgree || !1) : !1
					}

					function u_() {
						(0, s.QB)({
							elements: Zd,
							controllers: Nd,
							clients: Lo,
							state: a_,
							extensions: Mh,
							hooks: {
								onAfterInitControllers() {
									l_()
								},
								onAfterInit() {
									c_() && (0, kn.f)()
								}
							}
						})
					}
					var d_ = e(88646);
					u_();
					const Un = (0, d_.l)(),
						zn = (0, t.S)();
					window.context.play = {
						playVersion: Un,
						chessboardVersion: zn
					}, window.context.appVersion = Un, window.context.chessboardVersion = zn, console.log(`Version: ${Un} / ${zn}`)
				},
				26487: function(m, a, e) {
					e.d(a, {
						k: function() {
							return n
						}
					});

					function n() {
						return window.innerWidth >= 1170 && window.innerHeight >= 600
					}
				},
				62645: function(m, a, e) {
					e.d(a, {
						y: function() {
							return t
						}
					});
					var n = e(39041);

					function t(s, i) {
						(0, n.o)(document.body, s, i)
					}
				},
				39041: function(m, a, e) {
					e.d(a, {
						o: function() {
							return t
						}
					});
					var n = e(45463);

					function t(s, i, r) {
						const o = s.classList,
							u = o.contains(i),
							c = (0, n.jn)(r) ? r : !u;
						c !== u && (c ? o.add(i) : o.remove(i))
					}
				},
				5662: function(m, a, e) {
					e.d(a, {
						a: function() {
							return s
						}
					});
					var n = e(62645),
						t = e(12598);

					function s(i) {
						(0, n.y)(t.I.BodyClass.OutsideCoords, i)
					}
				},
				25343: function(m, a, e) {
					e.d(a, {
						j: function() {
							return s
						}
					});
					var n = e(62645),
						t = e(12598);

					function s(i) {
						(0, n.y)(t.I.BodyClass.Pseudo3d, i)
					}
				},
				49227: function(m, a, e) {
					e.d(a, {
						W: function() {
							return s
						}
					});
					var n = e(62645),
						t = e(12598);

					function s(i) {
						(0, n.y)(t.I.BodyClass.Real3d, i)
					}
				},
				42118: function(m, a, e) {
					e.d(a, {
						Y: function() {
							return s
						}
					});
					var n = e(62645),
						t = e(12598);

					function s(i) {
						var r;
						(0, n.y)(t.I.BodyClass.TheatreMode, i), (r = window.supportsUnderflow) != null && r.call(window) || window.dispatchEvent(new Event("modeResize")), window.dispatchEvent(new Event("resize"))
					}
				},
				12598: function(m, a, e) {
					e.d(a, {
						I: function() {
							return n
						}
					});
					var n;
					(t => {
						let s;
						(i => {
							i.Ad = "with-und", i.Analysis = "with-analysis", i.AnalysisCollapsed = "with-analysis-collapsed", i.Comments = "with-comments", i.DoubleBoard = "double-board", i.Evaluation = "with-evaluation", i.Pseudo3d = "pseudo-3d", i.FocusMode = "focus-mode", i.HandPieces = "with-pieces", i.HideBoardIcons = "hide-board-icons", i.MobileBoardHidden = "mobile-board-hidden", i.OutsideCoords = "outside-coords", i.Players = "with-players", i.Real3d = "real-3d", i.Tabs = "with-tabs", i.TheatreMode = "theatre-mode", i.Videos = "with-videos"
						})(s = t.BodyClass || (t.BodyClass = {}))
					})(n || (n = {}))
				},
				12352: function(m, a, e) {
					e.d(a, {
						Y4: function() {
							return t
						},
						U3: function() {
							return c
						},
						_j: function() {
							return _
						},
						wl: function() {
							return b
						}
					});
					var n = e(6936);
					const t = {
							amplitudeProps: "data-amplitude-props",
							speedChessChampionshipUrl: "data-speed-chess-championship-url",
							challengeUser: "data-challenge-user",
							loginAndGoRoute: "data-route-login-and-go",
							registerRoute: "data-route-register",
							routes: "data-routes"
						},
						s = {
							ONBOARD: "Onboard - StartReg",
							SEARCH: "Search",
							SEARCH_AUTOFILL: "searchAutoFill"
						},
						i = 100,
						r = 100,
						o = {
							ALERTS: "alerts",
							CHALLENGES: "challenges",
							CHAT_MESSAGES: "chatMessages",
							GAMES: "games",
							MESSAGES: "messages"
						},
						u = {
							CLOSE: "close",
							COLLAPSED: "collapsed",
							HOVER: "hover",
							NO_REDIRECT: "noredirect",
							OPEN: "open",
							WIDE: "wide"
						},
						c = {
							CLUB_CHAT_MODERATOR_ACTION: "club-chat-moderator-action",
							HIDE_FRIEND_REQUEST: "hide-friend-request",
							MODAL_DID_HIDE: "MODAL_DID_HIDE",
							SEND_NEW_GAME_SEEK: "SEND_NEW_GAME_SEEK",
							SEND_NEW_GAME_SEEK_SUCCESS: "SEND_NEW_GAME_SEEK_SUCCESS",
							SHOW_ONBOARD_MODAL: "SHOW_ONBOARD_MODAL",
							SHOW_UPGRADE_MODAL: "SHOW_UPGRADE_MODAL",
							START_DIRECT_CHAT: "START_DIRECT_CHAT"
						},
						l = {
							ANY: "any",
							DEFAULT_AND_USER: "default_and_user"
						},
						p = {
							MOBILE_WIDTH: 960,
							TOOLTIP_OFFSET: 8
						},
						h = {
							COLLAPSED: 50,
							DEFAULT: 145,
							MOBILE: 0,
							WIDE: 180
						},
						_ = {
							registerRoute: k => n.Z.generate("web_security_register", {
								redirectUrl: k
							}),
							loginAndGoRoute: k => n.Z.generate("web_security_login_and_go", {
								redirectUrl: k
							}),
							searchRoute: k => n.Z.generate("web_search", {
								q: k
							})
						},
						b = {
							AMPLITUDE_NAV_SELECTION: "[data-amplitude-nav-selection]",
							FRIEND_RESULTS: ".svelte-friend-result",
							LESSONS_CONTAINER: ".lessons-container",
							LOGOUT_FORM: ".form.logout",
							LOGOUT_TRIGGER: "#sb .logout",
							MAIN_NAV: "#sb",
							MAIN_NAV_SOCIAL_LINK: "#sb .link.social",
							MAIN_NAV_HOME_LINK: "#sb .link.home",
							MAIN_NAV_LINKS: "#sb .menu > .link",
							MAIN_NAV_LOGIN_LINK: "#sb .login",
							MAIN_NAV_PLAY_LINK: "#sb .link.play",
							MAIN_NAV_REGISTER_LINK: ".signup.register",
							MAIN_TOP_NAV: "#sb .menu.top",
							MAIN_TOP_NAV_LINKS: "#sb .menu.top > .link",
							SEARCH_INPUT: 'input[name="q"]',
							SIGN_UP: ".signup",
							TOOLTIP: ".svelte-tooltip",
							TOOLTIP_TRIGGER: "[data-tooltip-content]"
						},
						g = {
							FACEBOOK: "facebook",
							TWITTER: "twitter"
						},
						v = {
							TOOLTIP_SHOW_DELAY: 400
						},
						E = {
							COLLAPSED_NAV: "collapsed-nav"
						},
						y = 2,
						w = 5,
						P = 3
				},
				64910: function(m, a, e) {
					e.d(a, {
						GO: function() {
							return t
						}
					});
					const n = {
							BADGE_COUNT: "data-badge-count",
							BADGE_TEXT: "data-badge-text",
							BADGE_TYPE: "data-badge",
							SEEK_IS_SEEKER: "data-seek-is-seeker",
							SHAREABLE_GAME_UUID: "data-seek-short-uuid",
							SHAREABLE_SHARE_LINK: "data-seek-share-link"
						},
						t = {
							PUZZLE_BATTLE_CHALLENGE_TOASTER: "puzzle-battle-challenge-toaster",
							PUZZLE_BATTLE_CHALLENGE_USER: "puzzle-battle-challenge-user",
							HOME_NOTIFICATIONS: "home-sb-notifications",
							LOGIN_REGISTER_MODAL: "login-register-modal",
							OFFLINE_CHALLENGE_TOASTER: "offline-challenge-toaster",
							NAV_ROOT: "sb",
							SHAREABLE_GAME_URL_MODAL: "shareable-game-url-modal",
							SHAREABLE_GAME_SHORT_UUID: "shareable-game-short-uuid"
						},
						s = {
							BADGES: ".svelte-badge"
						}
				},
				45466: function(m, a, e) {
					e.d(a, {
						AM: function() {
							return n
						},
						CZ: function() {
							return t
						},
						nv: function() {
							return i
						},
						bo: function() {
							return r
						},
						fz: function() {
							return u
						},
						uF: function() {
							return c
						}
					});
					var n = (l => (l.Base = "base", l.Chat = "chat", l.Classroom = "classroom", l.Matcher = "matcher", l.Play = "play", l.Presence = "presence", l.Ratings = "ratings", l.Insights = "insights", l.TopPlayers = "topplayers", l.Users = "users", l.Invitations = "invitations", l.Settings = "settings", l.GameList = "gamelist", l))(n || {}),
						t = (l => (l.Classroom = "classroom", l.Game = "game", l.Disable = "disable", l.Messages = "messages", l.Mute = "mute", l.Unmute = "unmute", l.User = "user", l))(t || {}),
						s = (l => (l.Users = "users", l))(s || {}),
						i = (l => (l.Accept = "accept", l.Cancel = "cancel", l.Challenges = "challenges", l.Decline = "reject", l.Games = "games", l.Seeks = "seeks", l))(i || {}),
						r = (l => (l.Actions = "actions", l.Games = "games", l.Moves = "moves", l))(r || {}),
						o = (l => (l.Alias = "alias", l.Arrows = "arrows", l.AudioSettings = "audio-settings", l.AutoSave = "auto-save", l.Boards = "boards", l.ChatSettings = "chat-settings", l.Clock = "clock", l.CollectionIds = "collection-ids", l.Commands = "commands", l.Confirmations = "confirmations", l.Current = "current", l.Enrollment = "enrollment", l.EvaluationSettings = "evaluation-settings", l.Flipped = "flipped", l.GameId = "game-id", l.Images = "images", l.Invitees = "invitees", l.LargeClassroom = "large-classroom", l.Moves = "moves", l.Notifications = "notifications", l.PinnedVideos = "pinned-videos", l.Players = "players", l.Position = "position", l.Publish = "publish", l.SelectedCollectionId = "selected-collection-id", l.Sequence = "sequence", l.Sessions = "sessions", l.Squares = "squares", l.Stopwatch = "stopwatch", l.Timer = "timer", l.Title = "title", l.Twilio = "twilio", l.Users = "users", l.Webrtc = "webrtc", l))(o || {}),
						u = (l => (l.Users = "users", l))(u || {}),
						c = (l => (l.Users = "users", l))(c || {})
				},
				30179: function(m, a, e) {
					e.d(a, {
						h: function() {
							return t
						}
					});
					var n = e(34750);
					async function t(s) {
						return (0, n.n)({
							method: "get",
							...s
						})
					}
				},
				34750: function(m, a, e) {
					e.d(a, {
						n: function() {
							return r
						}
					});
					var n = e(25557),
						t = e(92005);
					const s = t.Z.create({
						withCredentials: !0
					});
					s.interceptors.response.use(o => o, o => {
						var u;
						if (((u = o?.response) == null ? void 0 : u.status) >= 400) try {
							(0, n.X)({
								message: o.message,
								method: o.config.method,
								requestUrl: o.config.url.replace("https://www.chess.com"),
								stack: o.stack,
								status: o.response.status
							})
						} catch {}
						return Promise.reject(o)
					});
					var i = s;
					async function r(o) {
						var u;
						let c = window.PubSub.options.url[o.service || "base"];
						const l = o.path instanceof Array ? o.path.join("/") : o.path;
						!c.endsWith("/") && !l.startsWith("/") && (c += "/");
						const p = {};
						["staging", "prod"].includes("dev") || (p.uid = (u = window.context.user) == null ? void 0 : u.uuid), o.params && Object.assign(p, o.params);
						const h = {};
						return o.requestId && (h["x-chesscom-request-id-client"] = o.requestId), o.clientId && (h["x-chesscom-play-client"] = o.clientId), o.headers && Object.assign(h, o.headers), i({
							url: /^http[s]?:/.test(l) ? l : `${c}${l}`,
							data: o.data,
							method: o.method || "post",
							params: p,
							headers: h,
							withCredentials: !0
						})
					}
				},
				32494: function(m, a, e) {
					e.d(a, {
						CZ: function() {
							return t.CZ
						},
						nv: function() {
							return t.nv
						},
						bo: function() {
							return t.bo
						},
						fz: function() {
							return t.fz
						},
						AM: function() {
							return t.AM
						},
						pS: function() {
							return s
						},
						LZ: function() {
							return n
						}
					});
					const n = {
						CONNECT: "connect",
						DISCONNECT: "disconnect",
						FAILURE: "failure",
						MESSAGE: "message",
						RECONNECT: "reconnect",
						SUBSCRIBE: "subscribe",
						SUBSCRIBE_FAIL: "subscribe_fail",
						UNSUBSCRIBE: "unsubscribe",
						ERROR: "error"
					};
					var t = e(45466);
					const s = window.PubSub
				},
				82704: function(m, a) {
					function n(t, s) {
						setTimeout(() => {
							window.toaster && t in window.toaster ? window.toaster[t](s) : n(t, s)
						}, 100)
					}
					a.Z = window.toaster || {
						add(t) {
							n("add", t)
						},
						remove(t) {
							n("remove", t)
						}
					}
				},
				99209: function(m, a, e) {
					e.d(a, {
						o: function() {
							return t
						}
					});

					function n(s) {
						s && (s.focus({
							preventScroll: !0
						}), s.select(), document.execCommand("copy"))
					}
					const t = s => {
						const i = document.createElement("textarea");
						i.value = s, document.body.appendChild(i), n(i), document.body.removeChild(i)
					}
				},
				62370: function(m, a, e) {
					e.d(a, {
						F: function() {
							return i
						}
					});
					var n = e(64910);
					const t = {},
						s = document.getElementById(n.GO.NAV_ROOT),
						i = (r, o) => {
							var u, c;
							if ((c = (u = window.chesscom) == null ? void 0 : u.features) == null ? void 0 : c.includes(r)) return !0;
							const p = o || s;
							return t[r] || (t[r] = Boolean(p && p.getAttribute(r))), t[r]
						}
				},
				24813: function(m, a, e) {
					e.d(a, {
						H: function() {
							return r
						}
					});
					var n = e(44856),
						t = Object.defineProperty,
						s = (o, u, c) => u in o ? t(o, u, {
							enumerable: !0,
							configurable: !0,
							writable: !0,
							value: c
						}) : o[u] = c,
						i = (o, u, c) => (s(o, typeof u != "symbol" ? u + "" : u, c), c);
					class r extends HTMLElement {
						constructor() {
							super(), i(this, "board", null), i(this, "boardId", null), i(this, "boardInitializedHandler"), i(this, "timeout"), this.boardInitializedHandler = this.boardInitialized.bind(this)
						}
						static get observedAttributes() {
							return [n._.ObservedAttributes.BoardId]
						}
						attributeChangedCallback(u) {
							this.createOnNextTick()
						}
						boardInitialized({
							detail: u
						}) {
							const c = `board-${u}`;
							this.boardId = c, this.setAttribute(n._.ObservedAttributes.BoardId, c), this.boardReady()
						}
						connectedCallback() {
							this.createOnNextTick()
						}
						disconnectedCallback() {
							this.destroy(), this.boardId = null, this.board = null
						}
						getBoard() {
							const u = this.boardId && document.getElementById(this.boardId);
							u && (this.board = u)
						}
						destroy() {
							var u, c;
							clearTimeout(this.timeout), this.componentDestroy(), (c = (u = this.board) == null ? void 0 : u.removeEventListener) == null || c.call(u, n._.Events.BoardInitialized, this.boardInitializedHandler)
						}
						createOnNextTick() {
							clearTimeout(this.timeout), this.timeout = window.setTimeout(() => {
								this.create(), this.attributesChanged()
							})
						}
						create() {
							var u, c, l, p, h;
							const _ = this.getAttribute(n._.ObservedAttributes.BoardId);
							if (!(_ && this.boardId === _)) {
								if (this.boardId = _, this.destroy(), this.componentReady(), this.getBoard(), !((u = this.board) != null && u.game)) {
									(l = (c = this.board) == null ? void 0 : c.addEventListener) == null || l.call(c, n._.Events.BoardInitialized, this.boardInitializedHandler);
									return
								}(h = (p = this.board).removeEventListener) == null || h.call(p, n._.Events.BoardInitialized, this.boardInitializedHandler), this.boardReady()
							}
						}
						addBoardEventListener(u, c) {
							var l, p;
							(p = (l = this.board) == null ? void 0 : l.game) == null || p.on(u, c)
						}
						removeBoardEventListener(u, c) {
							var l, p;
							try {
								(p = (l = this.board) == null ? void 0 : l.game) == null || p.off({
									type: u,
									handler: c
								})
							} catch {}
						}
						boardReady() {}
						componentReady() {}
						componentDestroy() {}
						attributesChanged() {}
					}
				},
				58537: function(m, a, e) {
					e.d(a, {
						M: function() {
							return O
						}
					});
					var n = e(67104),
						t = e(62370);
					const s = {
							CHESSBOARD_BETA: "chessboard_beta",
							CHESSBOARD_EFFECTS_SYNC: "chessboard_annotations_effects_sync",
							CHESSBOARD_RECORDER_PLUGIN: "chessboard_recorder_plugin",
							FRIENDS_PAGE_PRODUCT: "friends_page_product",
							LEAGUES_PRODUCT: "leagues_product",
							UPGRADE_MODAL_COURSE_COMPLETION: "lessons_upgrade_modal_course_completion",
							WDL_EVAL_BAR_OPTION: "wdl_eval_bar_option"
						},
						i = ["boardStyle", "coordinates", "darkMode", "highlightLegalMoves", "moveListDisplayType", "moveMethod", "pieceStyle", "real3D", "autoPromote", "autoClaimDraw", "disableUserMarkings", "enabled", "id", "legalPositionCheck", "soundTheme", "animationType"],
						o = (() => {
							const C = {};
							return ({
								api: D,
								options: L
							}) => {
								if (!D.getVersion) return;
								const x = D.getVersion();
								C[x] || console.log("CHESSBOARD VERSION:", x), C[x] = i.reduce((W, z) => (W[z] = L[z], W), {}), window.context.chessboardOptionsByVersion = C
							}
						})();
					var c = {
							name: "ChessboardOptionsUserSnapPlugin",
							create: o,
							match: [{
								condition: C => C.type === n.QY.OptionsEvents.Update,
								handler: (C, D) => o(D)
							}]
						},
						l = e(49227),
						p = e(82704),
						h = e(15875),
						_ = e(52152),
						b = e(46238),
						v = {
							name: "RendererSetFailedFallbackPlugin",
							match: [{
								condition: C => C.type === n.QY.InstanceEvents.RendererSetFailed,
								handler: (0, _.Z)(C => {
									var D, L;
									(0, l.W)(!1), (D = C?.data) != null && D.isWebGLRenderError ? p.Z.add({
										content: (0, h.dW)('WebGL is not supported by your browser, so some of your Piece or Animation Type <a href="/settings/board" target="_blank">settings</a> are ignored.'),
										icon: "circle-x",
										duration: 12e3
									}) : p.Z.add({
										content: (0, h.dW)('Issue rendering board, some of your <a href="/settings/board" target="_blank">settings</a> will be ignored.'),
										icon: "circle-x",
										duration: 12e3
									}), (0, b.T)(C.type, (L = C?.data) == null ? void 0 : L.error)
								}, 12500, {
									trailing: !1
								})
							}]
						},
						E = e(44856),
						y = Object.defineProperty,
						w = (C, D, L) => D in C ? y(C, D, {
							enumerable: !0,
							configurable: !0,
							writable: !0,
							value: L
						}) : C[D] = L,
						P = (C, D, L) => (w(C, typeof D != "symbol" ? D + "" : D, L), L);
					let k;
					class O extends HTMLElement {
						constructor() {
							super(...arguments), P(this, "game")
						}
						createGame(D) {
							const L = [...D.plugins || [], v];
							this.game = (0, n.dz)({
								...D,
								plugins: L
							}), this.game.on("CheatDetectionError", x => {
								(0, b.T)(x.type, x.data)
							}), this.game.plugins.add(c), (0, t.F)(s.CHESSBOARD_EFFECTS_SYNC) || (this.game.plugins.remove("effectsHMLSync"), this.game.onMany([n.QY.InstanceEvents.Create, n.QY.InstanceEvents.ModeChanged], () => this.game.plugins.remove("effectsHMLSync"))), (0, t.F)(s.CHESSBOARD_RECORDER_PLUGIN) && this.game.plugins.add((0, n.KW)()), this.dispatchEvent(new CustomEvent(E._.Events.BoardInitialized, {
								detail: this.game.getOptions().id
							}))
						}
						init({
							boardStyles: D,
							createRenderer: L,
							emitter: x,
							init: W,
							mode: z,
							options: F,
							plugins: V,
							pieceStyles: Z
						}) {
							this.innerHTML = "";
							const A = Object.assign((0, n.jw)(), F, {
									test: Boolean(window.Cypress)
								}),
								S = this;
							return this.createGame({
								el: S,
								emitter: x,
								init: W,
								mode: z,
								options: A,
								plugins: T(V),
								renderer: L?.({
									boardStyles: D,
									el: S,
									options: A,
									pieceStyles: Z
								})
							}), this.game
						}
						get options() {
							var D;
							return (D = this.game) == null ? void 0 : D.getOptions()
						}
						connectedCallback() {
							this.dispatchEvent(new CustomEvent(E._.Events.BoardAttached))
						}
						disconnectedCallback() {
							this.dispatchEvent(new CustomEvent(E._.Events.BoardDetached))
						}
					}

					function T(C = []) {
						const D = (0, n.n8)((0, n.NQ)(), C);
						return k || (k = (0, n.q4)()), [...D.filter(L => L.name !== n.th.Sounds.Plugin.Name), k]
					}
				},
				44856: function(m, a, e) {
					e.d(a, {
						_: function() {
							return n
						}
					});
					var n;
					(t => {
						let s;
						(o => {
							o.BoardId = "board-id", o.ColorsEnabled = "colors-enabled", o.Direction = "direction", o.DisableContextMenu = "disable-context-menu", o.DisplayType = "display-type", o.EngineName = "engine-name", o.GameId = "game-id", o.IsActive = "is-active", o.Lines = "lines", o.LinkToExplorer = "link-to-explorer", o.MoveListId = "move-list-id", o.OpeningIsClickable = "opening-is-clickable", o.ExplorerIsClickable = "explorer-is-clickable", o.ResultNodeIsSelectable = "result-node-is-selectable", o.ScrollContainerId = "scroll-container-id", o.TimestampMethod = "timestamp-method", o.ToggleTimestamps = "toggle-timestamps", o.Color = "color", o.UpdateManually = "update-manually", o.VerticalLayout = "vertical-layout"
						})(s = t.ObservedAttributes || (t.ObservedAttributes = {}));
						let i;
						(o => {
							o.BoardInitialized = "board-initialized", o.BoardAttached = "board-attached", o.BoardDetached = "board-detached"
						})(i = t.Events || (t.Events = {}));
						let r;
						(o => {
							o.ChessBoard = "chess-board", o.HorizontalMoveList = "horizontal-move-list", o.VerticalMoveList = "vertical-move-list", o.CapturedPieces = "captured-pieces", o.EcoOpening = "eco-opening", o.MoveList = "move-list"
						})(r = t.Elements || (t.Elements = {}))
					})(n || (n = {}))
				},
				44280: function(m, a, e) {
					e.d(a, {
						k: function() {
							return t
						}
					});
					var n = e(52553);
					const t = (0, n.kr)()
				},
				47180: function(m, a, e) {
					e.d(a, {
						o: function() {
							return n
						}
					});
					const n = {
						isVisible: !1
					}
				},
				26049: function(m, a, e) {
					e.d(a, {
						$: function() {
							return i
						}
					});
					var n = e(33558),
						t = e(82326),
						s = e(92505);

					function i() {
						try {
							window.chesscom.features.includes("ads_playwire_ramp") ? (t.e.destroyUnits("all"), t.e.addUnits(Object.values(n.E)).then(() => t.e.displayUnits()).catch(() => t.e.displayUnits())) : (s.L.destroyUnits("all"), s.L.addUnits(Object.values(n.E)).then(() => s.L.displayUnits()).catch(() => s.L.displayUnits()))
						} catch {}
					}
				},
				33558: function(m, a, e) {
					e.d(a, {
						E: function() {
							return n
						}
					});
					const n = {
						sidebar: {
							selectorId: "sky-atf",
							type: "sky_atf"
						},
						gameOver: {
							selectorId: "modal-med-rect",
							type: "med_rect_atf"
						}
					}
				},
				52472: function(m, a, e) {
					e.d(a, {
						Q: function() {
							return t
						}
					});
					var n = e(52553);
					const t = (0, n.kr)()
				},
				48147: function(m, a, e) {
					e.d(a, {
						M: function() {
							return t
						}
					});
					var n = e(52472);

					function t() {
						var s, i, r;
						const o = (r = (i = (s = n.Q).isAdsTemporarilyDisabled) == null ? void 0 : i.call(s)) != null ? r : !1;
						return Boolean(window.chesscom.showAds && !window.chesscom.features.includes("hide_ads_in_some_countries") && !o)
					}
				},
				82326: function(m, a, e) {
					e.d(a, {
						e: function() {
							return n
						}
					}), window.chesscom.features.includes("ads_playwire_ramp") && (window.ramp = {});
					const n = window.ramp
				},
				92505: function(m, a, e) {
					e.d(a, {
						L: function() {
							return n
						}
					}), window.tyche = {};
					const n = window.tyche
				},
				88602: function(m, a, e) {
					e.d(a, {
						u: function() {
							return t
						}
					});
					var n = e(52553);
					const t = (0, n.kr)()
				},
				7958: function(m, a, e) {
					e.d(a, {
						h: function() {
							return n
						}
					});
					const n = {
						isVisible: !1,
						position: void 0
					}
				},
				39427: function(m, a, e) {
					e.d(a, {
						t: function() {
							return n
						}
					});

					function n(t, s) {
						s.forEach(i => {
							t.game.plugins.has(i.name) || t.game.plugins.add(i)
						})
					}
				},
				48385: function(m, a, e) {
					e.d(a, {
						v: function() {
							return t
						}
					});
					var n = e(18561);

					function t() {
						const s = (0, n.g)();
						s.game.setOptions({
							flipped: !s.game.getOptions().flipped
						})
					}
				},
				45353: function(m, a, e) {
					e.d(a, {
						o: function() {
							return r
						}
					});
					var n = e(92005),
						t = e(6936);
					async function s() {
						const {
							data: o
						} = await n.Z.get(t.Z.generate("web_themes_data_callback"));
						return o
					}
					var i = e(55607);
					async function r() {
						i.q.boardStyles || (i.q.boardStyles = await s(), i.q.boardStyles.animationTypes = (i.q.boardStyles.animationTypes || []).filter(o => o.code !== "battle"))
					}
				},
				38465: function(m, a, e) {
					e.d(a, {
						t: function() {
							return u
						}
					});
					var n = e(67104);

					function t(c) {
						c.game.plugins.remove(n.th.Sounds.Plugin.Name), c.game.plugins.remove(n.th.ArrowKeys.Plugin.Name)
					}
					var s = e(65256),
						i = e(18561),
						r = e(89466),
						o = e(55607);

					function u() {
						var c;
						(0, r.x)().forEach(t);
						const l = (0, i.g)();
						o.q.soundPlugin && l.game.plugins.add(o.q.soundPlugin), o.q.arrowKeysPlugin && l.game.plugins.add(o.q.arrowKeysPlugin), (c = document.querySelector(".board-layout-chessboard .board")) == null || c.replaceWith(l), (0, s.q)()
					}
				},
				65256: function(m, a, e) {
					e.d(a, {
						q: function() {
							return l
						}
					});
					var n = e(67104),
						t = e(5662),
						s = e(25343),
						i = e(49227);
					const r = [n.$l.CoordinatesPositions.Off, n.$l.CoordinatesPositions.Inside, n.$l.CoordinatesPositions.Outside];
					var o = e(18561),
						u = e(46223);

					function c() {
						var _;
						(_ = (0, o.g)()) == null || _.game.resize()
					}

					function l() {
						window.removeEventListener("resize", c);
						const _ = (0, o.g)(),
							b = _ ? null : document.getElementById("board"),
							{
								animationType: g,
								coordinates: v,
								pieceStyle: E,
								boardStyle: y
							} = h(_, b),
							w = v === "outside",
							P = g !== "default" && g !== "none",
							k = E === "real3d",
							O = E.startsWith("3d");
						(0, i.W)(k), (0, s.j)(O), (0, t.a)(w), _ ? _.game.resize() : b && (p(v, y), b.style.visibility = ""), (P || k) && window.addEventListener("resize", c)
					}

					function p(_, b) {
						if (_ === n.$l.CoordinatesPositions.Inside) {
							const g = document.getElementById("outside-coords-style");
							if (g && n.NE[b]) {
								const [v, E] = n.NE[b];
								g.innerHTML = `.coordinate-light { fill: ${v}; } .coordinate-dark { fill: ${E}; }`
							}
						}
					}

					function h(_, b) {
						var g, v, E;
						if (_) return _.game.getOptions();
						if (b) {
							const y = (g = b.getAttribute("data-board-style")) != null ? g : "neo",
								w = (v = b.getAttribute("data-piece-style")) != null ? v : "green",
								P = Number((E = b.getAttribute("data-coordinates")) != null ? E : 0);
							return {
								boardStyle: y,
								pieceStyle: w,
								coordinates: r[P],
								animationType: n.$l.Animation.Types.None
							}
						}
						return (0, u.T)()
					}
				},
				83296: function(m, a, e) {
					e.d(a, {
						f: function() {
							return n
						}
					});
					const n = {
						animationType: "web_user_game_settings_email_callback_animation_type",
						boardStyle: "web_user_game_settings_email_callback_board_color",
						coordinates: "web_user_game_settings_email_callback_coordinates",
						darkMode: "web_user_game_settings_callback_dark_mode_toggle",
						highlightLegalMoves: "web_user_game_settings_email_callback_show_legal_moves_toggle",
						highlightMoves: "web_user_game_settings_email_callback_highlight_last_move_toggle",
						isWhiteOnBottom: "web_user_game_settings_email_callback_is_white_on_bottom_toggle",
						moveListDisplayType: "web_user_game_settings_email_callback_move_list_display_type",
						moveMethod: "web_user_game_settings_email_callback_move_method",
						pieceStyle: "web_user_game_settings_email_callback_piece",
						playSounds: "web_user_game_settings_email_callback_sound_toggle",
						showTimestamps: "web_user_game_settings_email_callback_show_timestamps",
						soundTheme: "web_user_game_settings_email_callback_sound_theme"
					}
				},
				45952: function(m, a, e) {
					e.d(a, {
						C: function() {
							return t
						}
					});
					var n = e(67104);
					const t = n.C8.create()
				},
				54612: function(m, a, e) {
					e.d(a, {
						f: function() {
							return t
						}
					});
					var n = e(52553);
					const t = (0, n.kr)()
				},
				31813: function(m, a, e) {
					e.d(a, {
						H: function() {
							return t
						}
					});
					var n = e(54612);

					function t() {
						const s = n.f.getActiveChessboardId();
						if (!s) throw new Error("No active chessboard");
						return `board-${s}`
					}
				},
				18561: function(m, a, e) {
					e.d(a, {
						g: function() {
							return i
						}
					});
					var n = e(54612),
						t = e(55607);

					function s(r) {
						return t.q.chessboards[`${r}`]
					}

					function i() {
						const r = n.f.getActiveChessboardId();
						if (!r) throw new Error("No active chessboard");
						return s(r)
					}
				},
				46223: function(m, a, e) {
					e.d(a, {
						T: function() {
							return t
						}
					});
					var n = e(55607);

					function t() {
						return n.q.boardOptions
					}
				},
				81166: function(m, a, e) {
					e.d(a, {
						X: function() {
							return t
						}
					});
					var n = e(55607);

					function t() {
						return n.q.boardStyles
					}
				},
				89466: function(m, a, e) {
					e.d(a, {
						x: function() {
							return t
						}
					});
					var n = e(55607);

					function t() {
						return Object.values(n.q.chessboards)
					}
				},
				28149: function(m, a, e) {
					e.d(a, {
						R: function() {
							return b
						}
					});
					var n = e(47866),
						t = e(33618),
						s = e(20584);
					const i = ["off", "inside", "outside"];

					function r(g) {
						const v = Number.parseInt(g, 10);
						return Number.isInteger(v) ? i[v] : g
					}
					var o = e(1653),
						u = e(92005),
						c = e(6936);
					const l = {},
						p = {};
					async function h(g) {
						var v;
						const y = await u.Z.get(c.Z.generate(g));
						return l[g] = y, (v = p[g]) == null || v.forEach(w => w(l[g])), y
					}

					function _(g, v) {
						p[g] = p[g] || [], p[g].push(v), l[g] && v(l[g])
					}
					async function b() {
						const g = (0, o.KZ)();
						if (window.chesscom.features.includes("settings_service_read")) {
							const F = await (0, n.w)(["board.animation_type", "board.board_style", "board.coordinates", "board.show_legal_moves", "board.highlight_moves", "board.white_always_on_bottom", "board.move_list_style", "board.move_method", "board.pieces_style", "board.play_sounds", "board.sound_theme", "gameplay.show_timestamps"]);
							return {
								animationType: (0, t.E)(F["board.animation_type"]),
								boardSize: "auto",
								boardStyle: F["board.board_style"],
								coordinates: F["board.coordinates"],
								darkMode: g,
								highlightLegalMoves: F["board.show_legal_moves"],
								highlightMoves: F["board.highlight_moves"],
								isWhiteOnBottom: F["board.white_always_on_bottom"],
								moveListDisplayType: F["board.move_list_style"],
								moveMethod: (0, s.z)(F["board.move_method"]),
								pieceStyle: F["board.pieces_style"] === "modern" ? "modern2" : F["board.pieces_style"],
								playSounds: F["board.play_sounds"],
								soundTheme: F["board.sound_theme"],
								showTimestamps: F["gameplay.show_timestamps"]
							}
						}
						const {
							data: v
						} = await h("web_user_callback_get_board_settings"), {
							animationType: E,
							boardCoords: y,
							boardSize: w,
							colorScheme: P,
							highlightLegalMoves: k,
							highlightMoves: O,
							isWhiteOnBottom: T,
							moveListDisplayType: C,
							moveMethod: D,
							pieceStyle: L,
							playSounds: x,
							soundTheme: W,
							showTimestamps: z
						} = v;
						return {
							animationType: (0, t.E)(E),
							boardSize: w,
							boardStyle: P,
							coordinates: r(y),
							darkMode: g,
							highlightLegalMoves: k === "1",
							highlightMoves: O === "1",
							isWhiteOnBottom: T,
							moveListDisplayType: C,
							moveMethod: D,
							pieceStyle: L,
							playSounds: x === "1",
							soundTheme: W,
							showTimestamps: Boolean(z)
						}
					}
				},
				53531: function(m, a, e) {
					e.d(a, {
						y: function() {
							return r
						}
					});
					var n = e(83296),
						t = e(3922),
						s = e(92005),
						i = e(6936);
					async function r(o, u) {
						if (!n.f[o]) throw new Error(`${o} is not a valid board option`);
						const [c, l] = (0, t.M)(o, u);
						await s.Z.post(i.Z.generate(n.f[c]), {
							action: l
						})
					}
				},
				55607: function(m, a, e) {
					e.d(a, {
						q: function() {
							return i
						}
					});
					var n = e(67104);

					function t() {
						const {
							animationType: r,
							boardStyle: o,
							coordinates: u,
							darkMode: c,
							highlightLegalMoves: l,
							highlightMoves: p,
							moveListDisplayType: h,
							moveMethod: _,
							pieceStyle: b,
							playSounds: g,
							soundTheme: v
						} = (0, n.jw)();
						return {
							animationType: r,
							boardSize: 0,
							boardStyle: o,
							coordinates: u,
							darkMode: c,
							highlightLegalMoves: l,
							highlightMoves: p,
							isWhiteOnBottom: !1,
							moveListDisplayType: h,
							moveMethod: _,
							pieceStyle: b,
							playSounds: g,
							showTimestamps: !0,
							soundTheme: v
						}
					}
					var s = e(10513);
					const i = {
						soundPlugin: null,
						arrowKeysPlugin: null,
						chessboards: {},
						boardOptions: {
							...t(),
							...s.n.getBoardOptions()
						},
						boardStyles: null
					}
				},
				10513: function(m, a, e) {
					e.d(a, {
						n: function() {
							return r
						}
					});
					var n = e(29586),
						t = e(59781);
					const s = "chessComAppState",
						i = ["id", "enabled", "allowMarkings", "captureKeyStrokes", "fadeSetup", "fetched", "flipBoard", "flipped", "highlightColor", "highlightOpacity", "moveListContextMenuEnabled", "overlayInAnalysisMode"],
						r = {
							getBoardOptions() {
								var o;
								const u = (0, n.Q)(t.Z.get(s)),
									c = Object.assign({}, (o = u?.board) == null ? void 0 : o.boardOptions);
								return i.forEach(l => {
									delete c[l]
								}), c.highlightColor = void 0, c
							},
							setBoardOptions(o) {
								var u;
								let c = (0, n.Q)(t.Z.get(s));
								(u = c?.board) != null && u.boardOptions ? Object.assign(c.board.boardOptions, {
									...o
								}) : c = {
									board: {
										boardOptions: {
											...o
										}
									}
								}, i.forEach(l => {
									delete c.board.boardOptions[l]
								}), t.Z.set(s, (0, n.P)(c))
							}
						}
				},
				70141: function(m, a, e) {
					e.d(a, {
						S: function() {
							return n
						}
					});

					function n() {
						const {
							default: t
						} = e(76940);
						return t
					}
				},
				86084: function(m, a, e) {
					e.d(a, {
						u: function() {
							return n
						}
					});
					const n = {
						features: []
					}
				},
				65264: function(m, a, e) {
					e.d(a, {
						a: function() {
							return t
						}
					});
					var n = e(52553);
					const t = (0, n.kr)()
				},
				40381: function(m, a, e) {
					e.d(a, {
						Y: function() {
							return p
						}
					});
					var n = e(22254),
						t = e(43667);

					function s() {
						return (0, t.Q)(h => {
							n.A.complete && n.A.connected && h()
						})
					}
					var i = e(46584),
						r = e(74863),
						o = e(20414),
						u = e(14869),
						c = e(92450),
						l = e(48549);
					async function p() {
						if (n.A.shutdownTimestamp > 0) throw new Error("waiting for LC restart");
						if (!(0, l.o)()) return n.A.isAppInitialized ? n.A.isLiveInitialized || (n.A.isLiveInitialized = !0, r.k.emit(i.x.Connect, {
							userId: window.context.user.id,
							isStaff: window.context.user.isStaff,
							clientName: u.R.getClientName()
						})) : c.c.once(o.F.Init, () => p()), s()
					}
				},
				84375: function(m, a, e) {
					e.d(a, {
						n: function() {
							return o
						}
					});
					var n = e(46584),
						t = e(74863),
						s = e(20414),
						i = e(92450),
						r = e(22254);

					function o(u, c) {
						if (!r.A.isAppInitialized) {
							i.c.once(s.F.Init, () => o(u, c));
							return
						}
						t.k.emit(n.x.Publish, {
							channel: u,
							data: c
						})
					}
				},
				43072: function(m, a, e) {
					e.d(a, {
						L: function() {
							return o
						}
					});
					var n = e(46584),
						t = e(74863),
						s = e(20414),
						i = e(92450),
						r = e(22254);

					function o(u) {
						if (!r.A.isAppInitialized) {
							i.c.once(s.F.Init, () => o(u));
							return
						}
						t.k.emit(n.x.Subscribe, {
							channel: u
						})
					}
				},
				31237: function(m, a, e) {
					e.d(a, {
						r: function() {
							return o
						}
					});
					var n = e(46584),
						t = e(74863),
						s = e(20414),
						i = e(92450),
						r = e(22254);

					function o(u) {
						if (!r.A.isAppInitialized) {
							i.c.once(s.F.Init, () => o(u));
							return
						}
						t.k.emit(n.x.Unsubscribe, {
							channel: u
						})
					}
				},
				82910: function(m, a, e) {
					e.d(a, {
						L: function() {
							return n
						}
					});
					const n = {
						admin: "/service/admin",
						announce: "/service/announce",
						arena: "/service/arena",
						arenaEvents: "/event-a/~1",
						chat: "/service/chat",
						clubChat: "/chat",
						connect: "/meta/connect",
						disconnect: "/meta/disconnect",
						examine: "/service/examine",
						game: "/service/game",
						handshake: "/meta/handshake",
						openChallenges: "/game/fastseek/~1",
						subscribe: "/meta/subscribe",
						teamMatch: "/service/teammatch",
						tournament: "/service/tournament",
						tournamentEvents: "/event-t/~1",
						unsubscribe: "/meta/unsubscribe",
						user: "/service/user"
					}
				},
				12627: function(m, a, e) {
					e.d(a, {
						J: function() {
							return n
						}
					});
					const n = {
						batchDelay: 50,
						connectTimeout: 1e4,
						defaultNetwork: window.Config["cometd.network"] || "auto",
						defaultTransport: window.Config["cometd.transport"] || "auto",
						disconnectTimeout: window.Config["cometd.disconnectTimeout"] || 60 * 6e4,
						handshakeTimeout: 15e3,
						idleTimeout: 10 * 6e4,
						networkDelay: 4e3,
						networkPublishDelay: 8e3,
						restartPollingDelay: 75e3,
						restartPollingInterval: 15e3,
						retryDelay: 200,
						retryPublishDelay: 500,
						retrySpamDelay: 1e3,
						waitingTimeout: 6e3
					}
				},
				9176: function(m, a, e) {
					e.d(a, {
						G: function() {
							return n
						}
					});
					var n = (t => (t.Variant = "variant", t.Rapid = "rapid", t.Bullet = "bullet", t.Blitz = "blitz", t.All = "all", t))(n || {})
				},
				46584: function(m, a, e) {
					e.d(a, {
						x: function() {
							return n
						}
					});
					var n = (t => (t[t.Connect = 0] = "Connect", t[t.Unload = 1] = "Unload", t[t.Publish = 2] = "Publish", t[t.Subscribe = 3] = "Subscribe", t[t.Unsubscribe = 4] = "Unsubscribe", t[t.Failure = 5] = "Failure", t[t.Response = 6] = "Response", t[t.Incoming = 7] = "Incoming", t[t.Maintenance = 8] = "Maintenance", t[t.State = 9] = "State", t))(n || {})
				},
				74863: function(m, a, e) {
					e.d(a, {
						k: function() {
							return t
						}
					});
					var n = e(52553);
					const t = (0, n.gd)()
				},
				14215: function(m, a, e) {
					e.d(a, {
						q: function() {
							return t
						}
					});
					var n = e(12627);
					const t = {
						userId: 0,
						isStaff: !1,
						clientName: null,
						username: null,
						playingGames: [],
						activeTransport: null,
						activeNetwork: null,
						subscribedChannels: [],
						openingChannels: [],
						closingChannels: [],
						url: null,
						domain: null,
						messageId: 0,
						nextAck: 0,
						lastMessageSent: Date.now(),
						isMonitoringIdle: !1,
						isFastConnect: !1,
						connectTimeout: n.J.connectTimeout,
						connectMessage: null,
						idleTimeout: n.J.idleTimeout,
						complete: !1,
						shutdown: !1,
						shutdownDelay: 0,
						shutdownTimestamp: 0,
						shutdownReconnectTimeout: null,
						idle: !1,
						connected: !1,
						connecting: !1,
						connectionFailedTimestamp: 0,
						handshaking: !1,
						reconnected: !1,
						disconnected: !1,
						disconnectReason: null,
						retryCount: 0,
						clientId: null,
						backOff: 0,
						waitingTimeout: null,
						metaHandshakeTimeout: null,
						metaConnectTimeout: null,
						retryHandshakeTimeout: null,
						retryConnectTimeout: null,
						handshakeMessages: 0,
						reuseSession: !1,
						isReusingSession: !1
					}
				},
				20414: function(m, a, e) {
					e.d(a, {
						F: function() {
							return n
						}
					});
					var n = (t => (t[t.ArenaChannelExpired = 0] = "ArenaChannelExpired", t[t.ArenaSubscribeFailure = 1] = "ArenaSubscribeFailure", t[t.ChannelExpired = 2] = "ChannelExpired", t[t.ConnectionComplete = 3] = "ConnectionComplete", t[t.ConnectionEstablished = 4] = "ConnectionEstablished", t[t.ConnectionInterrupted = 5] = "ConnectionInterrupted", t[t.ConnectionRefused = 6] = "ConnectionRefused", t[t.ConnectionRetry = 7] = "ConnectionRetry", t[t.ConnectionTerminated = 8] = "ConnectionTerminated", t[t.ConnectionWaiting = 9] = "ConnectionWaiting", t[t.GameChannelExpired = 10] = "GameChannelExpired", t[t.GameSubscribeFailure = 11] = "GameSubscribeFailure", t[t.Init = 12] = "Init", t[t.SubscribeFailure = 13] = "SubscribeFailure", t[t.TeamMatchChannelExpired = 14] = "TeamMatchChannelExpired", t[t.TeamMatchSubscribeFailure = 15] = "TeamMatchSubscribeFailure", t[t.TournamentChannelExpired = 16] = "TournamentChannelExpired", t[t.TournamentSubscribeFailure = 17] = "TournamentSubscribeFailure", t[t.TransportFailure = 18] = "TransportFailure", t[t.Unsubscribe = 19] = "Unsubscribe", t))(n || {})
				},
				88166: function(m, a, e) {
					e.d(a, {
						b: function() {
							return n
						}
					});
					var n = (t => (t[t.AcceptFriendRequest = 0] = "AcceptFriendRequest", t[t.AcceptTeamMatchChallengeFail = 1] = "AcceptTeamMatchChallengeFail", t[t.AdjustClocks = 2] = "AdjustClocks", t[t.Announce = 3] = "Announce", t[t.AnnounceList = 4] = "AnnounceList", t[t.Arena = 5] = "Arena", t[t.ArenaChallenge = 6] = "ArenaChallenge", t[t.ArenaChallengeAccepted = 7] = "ArenaChallengeAccepted", t[t.ArenaChallengeCancelled = 8] = "ArenaChallengeCancelled", t[t.ArenaChallengeDeclined = 9] = "ArenaChallengeDeclined", t[t.ArenaChallengeFail = 10] = "ArenaChallengeFail", t[t.ArenaGameRequestCancelled = 11] = "ArenaGameRequestCancelled", t[t.ArenaGameRequested = 12] = "ArenaGameRequested", t[t.ArenaScheduled = 13] = "ArenaScheduled", t[t.ArenaState = 14] = "ArenaState", t[t.Ban = 15] = "Ban", t[t.BanFail = 16] = "BanFail", t[t.BughousePair = 17] = "BughousePair", t[t.CancelBughousePairRequest = 18] = "CancelBughousePairRequest", t[t.CancelFriendRequest = 19] = "CancelFriendRequest", t[t.Challenge = 20] = "Challenge", t[t.ChallengeAccept = 21] = "ChallengeAccept", t[t.ChallengeAcceptFail = 22] = "ChallengeAcceptFail", t[t.ChallengeCancel = 23] = "ChallengeCancel", t[t.ChallengeCancelFail = 24] = "ChallengeCancelFail", t[t.ChallengeDecline = 25] = "ChallengeDecline", t[t.ChallengeDeclineFail = 26] = "ChallengeDeclineFail", t[t.ChallengeFail = 27] = "ChallengeFail", t[t.ChallengeList = 28] = "ChallengeList", t[t.ChallengeRemove = 29] = "ChallengeRemove", t[t.Chat = 30] = "Chat", t[t.ChatArchive = 31] = "ChatArchive", t[t.ChessGroupList = 32] = "ChessGroupList", t[t.DeclineBughousePairRequest = 33] = "DeclineBughousePairRequest", t[t.DeclineFriendRequest = 34] = "DeclineFriendRequest", t[t.DeleteFriend = 35] = "DeleteFriend", t[t.EndGame = 36] = "EndGame", t[t.Event = 37] = "Event", t[t.EventList = 38] = "EventList", t[t.EventRemove = 39] = "EventRemove", t[t.ExamineBoard = 40] = "ExamineBoard", t[t.Follow = 41] = "Follow", t[t.FollowedUserList = 42] = "FollowedUserList", t[t.FriendStatus = 43] = "FriendStatus", t[t.FullArena = 44] = "FullArena", t[t.FullExamineBoard = 45] = "FullExamineBoard", t[t.FullGame = 46] = "FullGame", t[t.FullRoom = 47] = "FullRoom", t[t.FullTeamMatch = 48] = "FullTeamMatch", t[t.FullTournament = 49] = "FullTournament", t[t.Game = 50] = "Game", t[t.GameList = 51] = "GameList", t[t.GameRemove = 52] = "GameRemove", t[t.GameState = 53] = "GameState", t[t.GuessTheMoveResults = 54] = "GuessTheMoveResults", t[t.GuessTheMoveUpdate = 55] = "GuessTheMoveUpdate", t[t.Kick = 56] = "Kick", t[t.KickFail = 57] = "KickFail", t[t.LagInfo = 58] = "LagInfo", t[t.Match = 59] = "Match", t[t.MoveFail = 60] = "MoveFail", t[t.Mute = 61] = "Mute", t[t.MuteFail = 62] = "MuteFail", t[t.RemoveText = 63] = "RemoveText", t[t.RequestBughousePair = 64] = "RequestBughousePair", t[t.RequestFriend = 65] = "RequestFriend", t[t.RoomList = 66] = "RoomList", t[t.Shutdown = 67] = "Shutdown", t[t.StartGameStream = 68] = "StartGameStream", t[t.StartGameStreamFail = 69] = "StartGameStreamFail", t[t.StillThereWarning = 70] = "StillThereWarning", t[t.TeamMatchChallenge = 71] = "TeamMatchChallenge", t[t.TeamMatchChallengeAccepted = 72] = "TeamMatchChallengeAccepted", t[t.TeamMatchChallengeCancelled = 73] = "TeamMatchChallengeCancelled", t[t.TeamMatchChallengeDeclined = 74] = "TeamMatchChallengeDeclined", t[t.TeamMatchChallengeFail = 75] = "TeamMatchChallengeFail", t[t.TeamMatchJoined = 76] = "TeamMatchJoined", t[t.TeamMatchScheduled = 77] = "TeamMatchScheduled", t[t.TeamMatchState = 78] = "TeamMatchState", t[t.Tournament = 79] = "Tournament", t[t.TournamentBye = 80] = "TournamentBye", t[t.TournamentJoined = 81] = "TournamentJoined", t[t.TournamentScheduled = 82] = "TournamentScheduled", t[t.TournamentState = 83] = "TournamentState", t[t.TournamentUserAdded = 84] = "TournamentUserAdded", t[t.TournamentUserRemoved = 85] = "TournamentUserRemoved", t[t.TournamentWithdrawn = 86] = "TournamentWithdrawn", t[t.Unfollow = 87] = "Unfollow", t[t.UnKickFail = 88] = "UnKickFail", t[t.User = 89] = "User", t[t.UserArenaList = 90] = "UserArenaList", t[t.UserList = 91] = "UserList", t[t.UserStatus = 92] = "UserStatus", t[t.UserTeamMatchList = 93] = "UserTeamMatchList", t[t.UserTournamentList = 94] = "UserTournamentList", t[t.Warn = 95] = "Warn", t[t.WarnFail = 96] = "WarnFail", t))(n || {})
				},
				14869: function(m, a, e) {
					e.d(a, {
						R: function() {
							return t
						}
					});
					var n = e(52553);
					const t = (0, n.kr)()
				},
				92450: function(m, a, e) {
					e.d(a, {
						c: function() {
							return t
						}
					});
					var n = e(52553);
					const t = (0, n.gd)()
				},
				48549: function(m, a, e) {
					e.d(a, {
						o: function() {
							return t
						}
					});
					var n = e(22254);

					function t() {
						return n.A.complete
					}
				},
				73353: function(m, a, e) {
					e.d(a, {
						W: function() {
							return t
						}
					});
					var n = e(22254);

					function t() {
						return n.A.connected
					}
				},
				11341: function(m, a, e) {
					e.d(a, {
						r: function() {
							return t
						}
					});
					var n = e(22254);

					function t() {
						return n.A.isLiveInitialized
					}
				},
				23756: function(m, a, e) {
					e.d(a, {
						q: function() {
							return t
						}
					});
					var n = e(14215);

					function t(s) {
						return n.q.openingChannels.includes(s)
					}
				},
				31057: function(m, a, e) {
					e.d(a, {
						N: function() {
							return t
						}
					});
					var n = e(14215);

					function t() {
						return n.q.isReusingSession
					}
				},
				5726: function(m, a, e) {
					e.d(a, {
						Y: function() {
							return s
						}
					});
					var n = e(14215);
					const t = /^\/service|^\/announce|^\/chat$|^\/admin$/;

					function s(i) {
						return t.test(i) || n.q.subscribedChannels.includes(i) && !n.q.closingChannels.includes(i)
					}
				},
				75193: function(m, a, e) {
					e.d(a, {
						e: function() {
							return t
						}
					});
					var n = e(52553);
					const t = (0, n.gd)()
				},
				22254: function(m, a, e) {
					e.d(a, {
						A: function() {
							return n
						}
					});
					const n = {
						complete: !1,
						connected: !1,
						connectionFailedTimestamp: 0,
						isAppInitialized: !1,
						isLiveInitialized: !1,
						shutdownDelay: 0,
						shutdownTimestamp: 0
					}
				},
				48803: function(m, a, e) {
					e.d(a, {
						I: function() {
							return n
						}
					});
					const n = t => `/arena/${t||""}`
				},
				30638: function(m, a, e) {
					e.d(a, {
						i: function() {
							return n
						}
					});
					const n = t => `/game/${t||""}`
				},
				95226: function(m, a, e) {
					e.d(a, {
						z: function() {
							return n
						}
					});
					const n = t => `/teammatch/${t||""}`
				},
				8991: function(m, a, e) {
					e.d(a, {
						B: function() {
							return n
						}
					});
					const n = t => `/tournament/${t||""}`
				},
				67842: function(m, a, e) {
					e.d(a, {
						t: function() {
							return o
						}
					});
					var n = e(30493),
						t = e(82704),
						s = e(99260),
						i = e(36244),
						r = e(18370);

					function o(u) {
						i.w.notifications.filter(l => u ? (!u.keys || u.keys.every(p => l.keys.includes(p))) && (!u.type || u.type === l.type) && (!u.id || u.id === l.id) : !0).forEach(l => {
							l.type === s.k.Toaster ? t.Z.remove(l.id) : l.type === s.k.Alert && (0, n.OD)(l.id), (0, r.A)(i.w.notifications, l)
						})
					}
				},
				67399: function(m, a, e) {
					e.d(a, {
						w: function() {
							return s
						}
					});
					var n = e(808),
						t = e(99260);

					function s(i) {
						(0, n.c)({
							type: t.k.Alert,
							...i
						})
					}
				},
				40112: function(m, a, e) {
					e.d(a, {
						x: function() {
							return t
						}
					});
					var n = e(67399);

					function t(s) {
						(0, n.w)({
							duration: 1e4,
							theme: "error",
							content: s
						})
					}
				},
				13258: function(m, a, e) {
					e.d(a, {
						T: function() {
							return s
						}
					});
					var n = e(40112),
						t = e(70913);

					function s(i) {
						(0, n.x)((0, t.i)(i))
					}
				},
				808: function(m, a, e) {
					e.d(a, {
						c: function() {
							return c
						}
					});
					var n = e(30493),
						t = e(82704),
						s = e(67842),
						i = e(99260),
						r = e(36244),
						o = e(54752),
						u = e.n(o);

					function c(l) {
						var p, h, _, b, g, v;
						const E = {
							type: (p = l.type) != null ? p : i.k.Alert,
							keys: (h = l.keys) != null ? h : [],
							id: u()()
						};
						l.unique && (0, s.t)({
							type: l.type,
							keys: l.keys
						}), l.duration && setTimeout(s.t, l.duration, {
							id: E.id
						}), E.type === i.k.Toaster ? (g = t.Z) == null || g.add({
							id: E.id,
							duration: l.duration,
							content: (_ = l.content) != null ? _ : "",
							theme: (b = l.theme) != null ? b : "info",
							icon: l.icon,
							links: l.links,
							actionLink: l.actionLink,
							avatarUrl: l.avatarUrl
						}) : E.type === i.k.Alert && (0, n.el)({
							id: E.id,
							type: l.theme || "info",
							message: (v = l.content) != null ? v : ""
						}), r.w.notifications.push(E)
					}
				},
				2548: function(m, a, e) {
					e.d(a, {
						s: function() {
							return t
						}
					});
					var n = e(67399);

					function t(s) {
						(0, n.w)({
							duration: 1e4,
							theme: "success",
							content: s
						})
					}
				},
				99260: function(m, a, e) {
					e.d(a, {
						k: function() {
							return n
						}
					});
					var n = (t => (t[t.Toaster = 0] = "Toaster", t[t.Alert = 1] = "Alert", t))(n || {})
				},
				36244: function(m, a, e) {
					e.d(a, {
						w: function() {
							return n
						}
					});
					const n = {
						notifications: []
					}
				},
				81321: function(m, a, e) {
					e.d(a, {
						b: function() {
							return t
						}
					});
					var n = e(92862);

					function t(s, i) {
						return (0, n.G)({
							channel: s,
							onMessage: i
						})
					}
				},
				92862: function(m, a, e) {
					e.d(a, {
						G: function() {
							return w
						}
					});
					var n = e(32494),
						t = e(19966);
					async function s(P) {
						if (P in t.z.connecting) return t.z.connecting[P];
						if (!t.z.clients[P]) return t.z.connecting[P] = new Promise((k, O) => {
							var T, C;
							const D = {
									debug: !1,
									maxReconnectionDelayMs: 5e3,
									reconnectionDelayPowBase: 1.3,
									uid: (C = (T = window.context) == null ? void 0 : T.user) == null ? void 0 : C.uuid,
									url: window.PubSub.options.url.pubsub.replace(/\/pubsub(\/)?$/, P)
								},
								L = {
									onAttach: () => {
										delete t.z.connecting[P], k()
									},
									onConnect: () => {
										delete t.z.connecting[P], k()
									},
									onDetach: () => {},
									onFailure: x => {
										delete t.z.connecting[P], delete t.z.clients[P], O(x)
									}
								};
							e.e(4966).then(e.bind(e, 69401)).then(({
								default: x
							}) => {
								t.z.clients[P] = x.connect(D, L)
							})
						}), t.z.connecting[P]
					}
					var i = e(4811),
						r = e(98033);

					function o() {
						return t.z.reactive.isConnected
					}
					var u = e(4452);
					async function c() {
						if (!(0, u.q)()) throw new Error("PubSub.client script not found in document");
						if (t.z.waitingForClient && await t.z.waitingForClient, (0, r.R)(), !o()) return new Promise(P => {
							const k = () => {
								window.PubSub.off(n.LZ.CONNECT, k), window.PubSub.off(n.LZ.RECONNECT, k), P()
							};
							window.PubSub.on(n.LZ.CONNECT, k), window.PubSub.on(n.LZ.RECONNECT, k)
						})
					}
					const l = 3e4;
					var p = e(46134),
						h = e(91218),
						_ = e(72891),
						b = Object.defineProperty,
						g = (P, k, O) => k in P ? b(P, k, {
							enumerable: !0,
							configurable: !0,
							writable: !0,
							value: O
						}) : P[k] = O,
						v = (P, k, O) => (g(P, typeof k != "symbol" ? k + "" : k, O), O);
					class E extends Error {
						constructor(k, O) {
							super(`failed to subscribe to ${k} (code: ${O?.code})`), v(this, "failure"), v(this, "channel"), this.channel = k, this.failure = O
						}
					}
					var y = e(46238);
					async function w(P) {
						if (t.z.waitingForClient) return t.z.waitingForClient;
						(0, _.N)(P.pubsub) ? await s(P.pubsub): o() || await c();
						const k = (0, h.X)(P);
						if (k in t.z.subscribing) return t.z.subscribing[k];
						if (!t.z.subscriptions[k]) return t.z.subscribing[k] = new Promise((O, T) => {
							const C = (0, p.E)(P.channel),
								D = (0, _.N)(P.pubsub) ? t.z.clients[P.pubsub] : n.pS,
								L = setTimeout(() => {
									k in t.z.subscribing && ((0, y.T)("time out while subscribing to PubSub", {
										channel: C
									}), (0, i.t)({
										channel: C,
										pubsub: P.pubsub
									}))
								}, l),
								x = D.subscribe(C, {
									onDetach() {
										clearTimeout(L)
									},
									onAttach() {
										clearTimeout(L), delete t.z.subscribing[k], t.z.subscriptions[k] = x, O()
									},
									onFailure(W) {
										clearTimeout(L), delete t.z.subscribing[k], T(new E(C, W))
									},
									onMessage(W) {
										C in t.z.subscribing && (0, y.T)("onMessage PubSub hook fired before onAttach", {
											channel: C
										}), Promise.resolve({
											channel: C,
											message: W
										}).then(P.onMessage)
									},
									onComplete() {
										clearTimeout(L), (0, i.t)({
											channel: C,
											pubsub: P.pubsub
										}), O()
									}
								})
						}), t.z.subscribing[k]
					}
				},
				4811: function(m, a, e) {
					e.d(a, {
						t: function() {
							return r
						}
					});
					var n = e(19966),
						t = e(18917),
						s = e(91218),
						i = e(72891);

					function r(o) {
						var u;
						const c = (0, s.X)(o);
						if ((u = n.z.subscriptions[c]) == null || u.close(), delete n.z.subscriptions[c], delete n.z.subscribing[c], !(0, i.N)(o.pubsub)) return;
						!Object.keys(n.z.subscriptions).filter(p => p.split(t.W)[0] === o.pubsub).length && n.z.clients[o.pubsub] && (n.z.clients[o.pubsub].close(), delete n.z.clients[o.pubsub])
					}
				},
				98033: function(m, a, e) {
					e.d(a, {
						R: function() {
							return r
						}
					});
					var n = e(32494),
						t = e(90085),
						s = e(19966),
						i = e(95034);

					function r() {
						if (!n.pS.client) return;
						const o = Boolean(n.pS.isAttached()),
							u = s.z.reactive.isConnected;
						o !== u && t.f.emit(o ? i.L.Established : i.L.Interrupted), s.z.reactive.isConnected = o, s.z.reactive.connectionQuality = n.pS.client.getQuality() || 0
					}
				},
				99057: function(m, a, e) {
					e.d(a, {
						T: function() {
							return n
						}
					});
					var n = (t => (t.Excellent = "excellent", t.Good = "good", t.Ok = "ok", t.Poor = "poor", t.Offline = "offline", t))(n || {})
				},
				18917: function(m, a, e) {
					e.d(a, {
						W: function() {
							return n
						}
					});
					const n = "$"
				},
				9296: function(m, a, e) {
					e.d(a, {
						q: function() {
							return t
						}
					});
					var n = e(52553);
					const t = (0, n.kr)()
				},
				90085: function(m, a, e) {
					e.d(a, {
						f: function() {
							return t
						}
					});
					var n = e(35174);
					const t = (0, n.I)()
				},
				4452: function(m, a, e) {
					e.d(a, {
						q: function() {
							return t
						}
					});
					var n = e(19966);

					function t() {
						return n.z.isEnabled
					}
				},
				86580: function(m, a, e) {
					e.d(a, {
						h: function() {
							return r
						}
					});
					var n = e(30179),
						t = e(9296),
						s = e(54752),
						i = e.n(s);
					async function r(o) {
						var u, c;
						return (0, n.h)({
							...o,
							requestId: i()(),
							clientId: (c = (u = t.q).getClientId) == null ? void 0 : c.call(u)
						})
					}
				},
				53771: function(m, a, e) {
					e.d(a, {
						n: function() {
							return r
						}
					});
					var n = e(34750),
						t = e(9296),
						s = e(54752),
						i = e.n(s);
					async function r(o) {
						var u, c;
						return (0, n.n)({
							...o,
							requestId: i()(),
							clientId: (c = (u = t.q).getClientId) == null ? void 0 : c.call(u)
						})
					}
				},
				19966: function(m, a, e) {
					e.d(a, {
						z: function() {
							return n
						}
					});
					const n = {
						clients: {},
						connecting: {},
						subscriptions: {},
						subscribing: {},
						isEnabled: Boolean(document.querySelector('script[src*="pubsub-connection"]')),
						waitingForClient: null,
						reactive: {
							isConnected: !1,
							connectionQuality: 0
						}
					}
				},
				95034: function(m, a, e) {
					e.d(a, {
						L: function() {
							return n
						}
					});
					var n = (t => (t[t.Established = 0] = "Established", t[t.Interrupted = 1] = "Interrupted", t))(n || {})
				},
				46134: function(m, a, e) {
					e.d(a, {
						E: function() {
							return t
						}
					});
					var n = e(45463);

					function t(s) {
						return (0, n.HD)(s) ? s : s.join("/")
					}
				},
				91218: function(m, a, e) {
					e.d(a, {
						X: function() {
							return i
						}
					});
					var n = e(18917),
						t = e(46134),
						s = e(72891);

					function i({
						channel: r,
						pubsub: o
					}) {
						return (0, s.N)(o) ? `${o}${n.W}${(0,t.E)(r)}` : (0, t.E)(r)
					}
				},
				72891: function(m, a, e) {
					e.d(a, {
						N: function() {
							return n
						}
					});

					function n(t) {
						return Boolean(t && t !== "/pubsub" && t !== "/pubsub/")
					}
				},
				95557: function(m, a, e) {
					e.d(a, {
						z: function() {
							return n
						}
					});
					var n = (t => (t.Embed = "embed", t.Event = "event", t.Gif = "gif", t.Image = "image", t.Pgn = "pgn", t))(n || {})
				},
				28466: function(m, a, e) {
					e.d(a, {
						v: function() {
							return t
						}
					});
					var n = e(95557);
					const t = {
						initialTab: n.z.Image,
						shareUrl: window.location.href
					}
				},
				79674: function(m, a, e) {
					e.d(a, {
						h: function() {
							return t
						}
					});
					var n = e(28466);
					const t = {
						options: n.v,
						isVisible: !1
					}
				},
				52553: function(m, a, e) {
					e.d(a, {
						Hn: function() {
							return o
						},
						QD: function() {
							return t
						},
						eI: function() {
							return s
						},
						VM: function() {
							return Z
						},
						BL: function() {
							return v
						},
						kr: function() {
							return y
						},
						ko: function() {
							return E
						},
						df: function() {
							return _e
						},
						gd: function() {
							return re
						},
						SN: function() {
							return qe
						},
						$y: function() {
							return F
						},
						QB: function() {
							return z
						},
						tL: function() {
							return k
						},
						Uc: function() {
							return p
						}
					});
					var n = e(35174);

					function t(K) {
						const U = (0, n.I)(),
							N = U.emit,
							q = "BroadcastChannel" in window,
							Y = ue => {
								var fe;
								((fe = ue.data) == null ? void 0 : fe.id) === K.broadcastChannelId && N.call(U, ue.data.type, ue.data.data)
							};
						return q ? (U.broadcastChannel = new BroadcastChannel(K.broadcastChannelId), U.broadcastChannel.addEventListener("message", Y)) : window.addEventListener("message", Y), U.emit = (ue, fe) => {
							N.call(U, ue, fe);
							const Te = {
								type: ue,
								data: fe,
								id: K.broadcastChannelId
							};
							U.broadcastChannel ? U.broadcastChannel.postMessage(Te) : window.postMessage(Te, window.location.origin)
						}, U
					}

					function s(K) {
						return Object.keys(K).forEach(U => {
							typeof K[U] == "function" && (K[U] = K[U].bind(K))
						}), K
					}
					async function i(K, U) {
						try {
							await K.init(U)
						} catch (N) {
							console.error(N)
						}
					}

					function r(K) {
						return Object.getOwnPropertyNames(K).filter(U => U !== "__ob__")
					}
					class o {}

					function u(K) {
						return Boolean(K instanceof Array && "options" in K && "ModelFactory" in K)
					}

					function c(K) {
						return K instanceof Array || Array.isArray(K)
					}

					function l(K, U) {
						return c(K) && c(U) && K.length === U.length ? K.length === 0 ? !1 : K.some((N, q) => N !== U[q]) : K !== U
					}

					function p(K, U) {
						r(U).forEach(N => {
							N in K && (K[N] instanceof o && U[N] ? p(K[N], U[N]) : u(K[N]) && c(U[N]) ? U[N].forEach((q, Y) => {
								const ue = K[N][Y];
								ue instanceof o ? p(ue, q) : K[N].add(q)
							}) : l(K[N], U[N]) && (K[N] = U[N]))
						})
					}
					var h = Object.defineProperty,
						_ = (K, U, N) => U in K ? h(K, U, {
							enumerable: !0,
							configurable: !0,
							writable: !0,
							value: N
						}) : K[U] = N,
						b = (K, U, N) => (_(K, typeof U != "symbol" ? U + "" : U, N), N);
					class g extends Array {
						constructor(U, N) {
							super(), b(this, "options"), b(this, "ModelFactory"), this.options = N, this.ModelFactory = U
						}
						add(U) {
							const N = new this.ModelFactory;
							return p(N, U), this.push(N), this.options.max && this.length > this.options.max && this.splice(0, this.length - this.options.max), N
						}
						find(U) {
							return this[this.findIndex(U)]
						}
						findIndex(U) {
							return typeof U == "function" ? Array.prototype.findIndex.call(this, U) : typeof U == "object" && U !== null ? Array.prototype.findIndex.call(this, N => this.getKey(N) === this.getKey(U)) : Array.prototype.findIndex.call(this, N => this.getKey(N) === U)
						}
						includes(U) {
							return this.findIndex(U) !== -1
						}
						update(U) {
							const N = this.findIndex(U);
							if (N === -1) return this.add(U);
							const q = this[N];
							return p(q, U), q
						}
						remove(U) {
							const N = this.findIndex(U);
							if (N === -1) return null;
							const q = this[N];
							return this.splice(N, 1), q
						}
						reset(U) {
							if (!U || U.length === 0) {
								this.splice(0);
								return
							}
							const N = U.map(q => {
								let Y;
								return q instanceof this.ModelFactory ? Y = q : (Y = this.find(q), Y || (Y = new this.ModelFactory), p(Y, q)), Y
							});
							this.splice(0, this.length, ...N)
						}
						getKey(U) {
							const N = U[this.options.key];
							return typeof N == "function" ? N.call(U) : N
						}
					}

					function v(K, U) {
						const N = new g(K, U);
						if (["add", "find", "findIndex", "update", "remove", "includes", "reset", "getKey"].forEach(Y => {
								N[Y] = g.prototype[Y].bind(N)
							}), U.create)
							for (let Y = 0; Y < U.create; Y++) N.push(new N.ModelFactory);
						return N
					}

					function E(K) {
						return U => (Object.assign(K.context, U), K)
					}

					function y() {
						return {}
					}
					var w = e(13920),
						P = e(45478);
					async function k(K) {
						if (typeof K == "function") return k(K());
						if (K instanceof Promise) return K.then(U => {
							k(U.default)
						}); {
							const {
								el: U,
								...N
							} = K, q = document.querySelector(U);
							if (q) return new Promise(Y => {
								if (window.chesscom.features.includes("play_base_vue_3_mounting") && window.chesscom.features.includes("client_chessboard_layout_beta")) {
									(0, P.r)({
										mounted: Y,
										render: () => (0, w.h)(N)
									}).mount(q);
									return
								}
								new w.ZP({
									mounted: Y,
									render: () => (0, w.h)(N)
								}).$mount(q)
							})
						}
					}

					function O(K, U) {
						const N = [];
						return K[U] instanceof Array ? N.push(...K[U]) : K[U] && console.warn(`${U} should be array`), K.extensions && K.extensions.forEach(q => {
							q[U] instanceof Array ? N.push(...q[U]) : q[U] && console.warn(`extension ${U} should be array`)
						}), N
					}

					function T(K, U) {
						const N = {};
						return K[U] && Object.assign(N, K[U]), K.extensions && K.extensions.forEach(q => {
							q[U] && Object.assign(N, q[U])
						}), N
					}

					function C(K) {
						return Promise.all(K.map(k))
					}
					async function D(K) {
						Object.keys(K).forEach(U => {
							customElements.define(U, K[U])
						})
					}

					function L(K) {
						const U = new Promise(N => {
							setTimeout(() => {
								Promise.all(K.map(q => i(q, U))).then(() => N())
							}, 0)
						});
						return U
					}
					async function x(K, U, N, q) {
						if (U) {
							N?.(U);
							try {
								await K(U)
							} catch (Y) {
								console.error(Y)
							}
							q?.(U)
						}
					}
					async function W(K) {
						const {
							elements: U,
							controllers: N,
							clients: q,
							hooks: Y
						} = K;
						await Promise.all([x(D, U, Y?.onBeforeInitElements, Y?.onAfterInitElements), x(C, N, Y?.onBeforeInitControllers, Y?.onAfterInitControllers), x(L, q, Y?.onBeforeInitClients, Y?.onAfterInitClients)])
					}
					async function z(K) {
						var U, N;
						const q = (0, w.iH)(O(K, "state")),
							Y = T(K, "elements"),
							ue = O(K, "controllers"),
							fe = O(K, "clients"),
							Te = K.hooks;
						await x(W, {
							state: q,
							elements: Y,
							controllers: ue,
							clients: fe,
							hooks: Te
						}, (U = K.hooks) == null ? void 0 : U.onBeforeInit, (N = K.hooks) == null ? void 0 : N.onAfterInit)
					}

					function F(K, U, N) {
						let q = !1,
							Y;
						return ue => {
							Y = (...fe) => {
								if (!q && (!N || N(...fe))) return q = !0, K.offMany(U.map(Te => ({
									type: Te,
									handler: Y
								}))), ue()
							}, K.onMany(U, Y)
						}
					}

					function V(K) {
						var U;
						const N = (U = K.triggers) != null ? U : [];
						K.emitter && K.events && N.push(F(K.emitter, K.events));
						let q;

						function Y() {
							var ue, fe;
							return q || (q = Promise.resolve((fe = (ue = K.shouldLoad) == null ? void 0 : ue.call(K)) == null || fe ? K.loader() : null)), q
						}
						return () => N.length ? N.forEach(ue => ue(Y)) : Y()
					}

					function Z(K) {
						return {
							init: V({
								...K,
								loader: () => K.loader().then(U => L(Object.values(U)))
							})
						}
					}
					var A = Object.defineProperty,
						S = (K, U, N) => U in K ? A(K, U, {
							enumerable: !0,
							configurable: !0,
							writable: !0,
							value: N
						}) : K[U] = N,
						j = (K, U, N) => (S(K, typeof U != "symbol" ? U + "" : U, N), N);
					class J extends Map {
						constructor(U) {
							super(), j(this, "options"), this.options = U
						}
						set(U, N) {
							return Map.prototype.set.call(this, this.getKey(U), N), this
						}
						delete(U) {
							return Map.prototype.delete.call(this, this.getKey(U))
						}
						get(U) {
							return Map.prototype.get.call(this, this.getKey(U))
						}
						has(U) {
							return Map.prototype.has.call(this, this.getKey(U))
						}
						getKey(U) {
							var N;
							return typeof((N = this.options) == null ? void 0 : N.key) == "function" ? this.options.key(U) : JSON.stringify(U)
						}
					}

					function _e(K) {
						return new J(K)
					}
					var we = e(92591);
					let G;

					function X() {
						return G || (G = (0, we.j)()), G
					}

					function re(K) {
						var U;
						const N = (0, n.I)();
						return N.emitQueue = (U = K?.emitQueue) != null ? U : X(), N.emit = async (q, Y) => {
							const ue = [];
							let fe;
							for (; fe = N.listeners.find(Te => (Te.type === q || Te.type === "all") && !ue.includes(Te.handler));) ue.push(fe.handler), await N.emitQueue.add(fe.handler, Y)
						}, N
					}

					function ge() {
						const K = createQueue(!0);
						return {
							createQueuedEmitter() {
								return re({
									emitQueue: K
								})
							}
						}
					}
					var ve = (K => (K.Initial = "initial", K.Registering = "registering", K.Registered = "registered", K.Requesting = "requesting", K.Loading = "loading", K.Loaded = "loaded", K.Failed = "failed", K))(ve || {}),
						We = e(43667),
						ie = e(72045);

					function qe(K) {
						var U, N, q, Y, ue, fe, Te, Je;
						if (K.global === !0 && ((N = (U = window.chesscom) == null ? void 0 : U.resources) == null ? void 0 : N[K.name])) return (Y = (q = window.chesscom) == null ? void 0 : q.resources) == null ? void 0 : Y[K.name];
						const ae = (0, w.qj)({
							state: {
								status: ve.Initial,
								data: null
							}
						});
						ae.name = K.name, ae.uuid = (0, ie.Z)(), ae.timestamp = 0, ae.expiration = (ue = K.expiration) != null ? ue : 0, ae.persist = (fe = K.persist) != null ? fe : !1, K.global === !0 && ((Je = (Te = window.chesscom).resources) != null || (Te.resources = {}), window.chesscom.resources[ae.name] = ae);

						function st() {
							return (0, We.Q)((pe, Ee) => {
								ae.state.status === ve.Loaded ? pe(ae.state.data) : ae.state.status === ve.Failed && Ee(new Error(`failed to load resource: ${ae.name}`))
							})
						}

						function Ze(pe, Ee = Date.now()) {
							return ae.state.data = pe, ae.state.status = ve.Loaded, ae.timestamp = Ee, ae.state.data
						}

						function at(pe) {
							ae.state.status = ve.Failed, ae.error = pe, ae.timestamp = 0
						}
						async function Fe() {
							ae.state.status = ve.Loading;
							try {
								const pe = await K.loader();
								return ae.persist && it(pe), Ze(pe)
							} catch (pe) {
								throw at(pe), pe
							}
						}

						function Ve() {
							return ae.timestamp === 0 ? !0 : ae.expiration === 0 ? !1 : Date.now() - ae.timestamp > ae.expiration
						}

						function et() {
							return `Resource.${ae.name}`
						}

						function it(pe) {
							const Ee = JSON.stringify({
								timestamp: Date.now(),
								data: pe
							});
							try {
								localStorage.setItem(et(), Ee)
							} catch {}
						}

						function Be() {
							const pe = localStorage.getItem(et());
							if (!pe) return Fe();
							let Ee;
							try {
								Ee = JSON.parse(pe)
							} catch {
								return Ge(), Fe()
							}
							return (ae.expiration === 0 ? !0 : Date.now() - Ee.timestamp < ae.expiration) ? Ze(Ee.data, Ee.timestamp) : (Ge(), Fe())
						}

						function Ge() {
							localStorage.removeItem(ae.name)
						}
						return ae.load = async function() {
							if (ae.state.status === ve.Loaded) return Ve() ? (ae.persist && Ge(), Fe()) : ae.state.data;
							if (ae.state.status === ve.Failed) throw ae.error;
							return ae.state.status === ve.Loading ? st() : ae.persist ? Be() : Fe()
						}, ae.expire = function() {
							ae.timestamp = 0, Ge()
						}, ae
					}
				},
				96066: function(m, a, e) {
					e.d(a, {
						s: function() {
							return n
						}
					});
					var n = (t => (t.Black = "black", t.Random = "random", t.White = "white", t))(n || {})
				},
				38015: function(m, a, e) {
					e.d(a, {
						M: function() {
							return n
						}
					});
					var n = (t => (t.LC = "live_chess", t.RCN = "rcn", t.Web = "web", t))(n || {})
				},
				16382: function(m, a, e) {
					e.d(a, {
						Q: function() {
							return n
						}
					});
					var n = (t => (t.Accepted = "accepted", t.Active = "active", t.Cancelled = "cancelled", t.Deleted = "deleted", t.Expired = "expired", t.Inactive = "inactive", t.Rejected = "rejected", t))(n || {})
				},
				19934: function(m, a, e) {
					e.d(a, {
						o: function() {
							return n
						}
					});
					var n = (t => (t.Challenge = "challenge", t.Seek = "seek", t))(n || {})
				},
				47866: function(m, a, e) {
					e.d(a, {
						w: function() {
							return t
						}
					});
					var n = e(32494);
					async function t(s) {
						const {
							data: i
						} = await n.pS.fetch({
							method: "get",
							path: "users/me",
							service: n.AM.Settings,
							params: {
								include: s.join(",")
							}
						});
						return i
					}
				},
				4030: function(m, a, e) {
					e.d(a, {
						z: function() {
							return t
						}
					});
					var n = e(32494);
					async function t(s) {
						!window.chesscom.features.includes("settings_service_data_sync") || Object.keys(s).length > 0 && await n.pS.publish({
							method: "post",
							service: n.AM.Settings,
							path: "users/me",
							data: s
						})
					}
				},
				44931: function(m, a, e) {
					e.d(a, {
						U: function() {
							return s
						}
					});
					var n = e(60422);
					let t;

					function s() {
						var i;
						return (i = window.chesscom) != null && i.amplitude ? window.chesscom.amplitude : (t || (t = e.e(3790).then(e.t.bind(e, 63790, 23)).then(({
							default: r
						}) => {
							var o, u, c, l;
							const {
								user: p,
								amplitudeKey: h
							} = window.context || {}, _ = p && !p.isGuest ? p.id : null, b = {
								includeUtm: !0,
								includeReferrer: !0,
								includeGclid: !0,
								saveParamsReferrerOncePerSession: !1
							};
							if ((u = (o = window.chesscom) == null ? void 0 : o.features) != null && u.includes("amplitude_domain_proxy") && ["www.chess.com", "www.chess-4.com"].includes(window.location.hostname) && (b.apiEndpoint = window.location.hostname.replace("www", "amplitude")), (l = (c = window.chesscom) == null ? void 0 : c.features) != null && l.includes("marketing_middleware_serverside_device_id_generation")) {
								const g = (0, n.ej)("me");
								if (g) {
									const v = JSON.parse(decodeURIComponent(g));
									b.deviceId = v.deviceId
								}
							}
							return r.getInstance().init(h, null, b), r.getInstance().setUserId(_), window.chesscom.amplitude = r, r
						})), t)
					}
				},
				18017: function(m, a, e) {
					e.d(a, {
						K: function() {
							return o
						}
					});
					var n = e(44931),
						t = e(45898),
						s = t.Z;
					async function i(u) {
						const c = await (0, n.U)();
						if (u == null) return;
						const l = new c.Identify;
						s(u, (p, h) => {
							l.add(h, p)
						}), c.getInstance().identify(l)
					}
					async function r(u) {
						const c = await (0, n.U)();
						u != null && c.getInstance().setUserProperties(u)
					}
					async function o(u, c, l, p) {
						const h = await (0, n.U)();
						await r(l), await i(p), h.getInstance().logEvent(u, c || {})
					}
				},
				96979: function(m, a, e) {
					e.d(a, {
						W: function() {
							return n
						}
					});

					function n(t) {
						return t.length ? t.reduce((s, i) => s + i, 0) / t.length : 0
					}
				},
				18370: function(m, a, e) {
					e.d(a, {
						A: function() {
							return t
						}
					});
					var n = e(45463);

					function t(s, i) {
						const r = (0, n.mf)(i) ? s.findIndex(i) : s.indexOf(i);
						r !== -1 && s.splice(r, 1)
					}
				},
				54693: function(m, a, e) {
					e.d(a, {
						q: function() {
							return i
						}
					});
					var n = e(45463);
					const t = (r, o) => {
							if ((0, n.HD)(o) && (0, n.Kn)(r)) return r[o];
							if ((0, n.mf)(o)) return o(r)
						},
						s = (r, o, u, c) => {
							const l = t(r, u),
								p = t(o, u);
							return l === null || typeof l > "u" ? 1 : p === null || typeof p > "u" ? -1 : l > p ? c === "desc" ? -1 : 1 : l < p ? c === "desc" ? 1 : -1 : 0
						};

					function i(r, o, u) {
						const c = (0, n.kJ)(o) ? o : [o],
							l = (0, n.kJ)(u) ? u : [u],
							p = r.slice(0);
						return p.sort((h, _) => {
							let b = 0;
							for (let g = 0; g < c.length && b === 0; g++) b = s(h, _, c[g], l[g]);
							return b
						}), p
					}
				},
				31152: function(m, a, e) {
					e.d(a, {
						n: function() {
							return s
						}
					});
					var n = {
						"bundles/web/images/game-preview-loading.png": "bundles/web/images/game-preview-loading.png",
						"bundles/web/images/image-default.svg": "bundles/web/images/image-default.svg",
						"bundles/web/images/noavatar_l.gif": "bundles/web/images/noavatar_l.gif",
						"bundles/web/images/svg/tic.svg": "bundles/web/images/svg/tic.svg",
						"bundles/web/images/svg/white-tic.svg": "bundles/web/images/svg/white-tic.svg",
						"bundles/web/images/user-image.svg": "bundles/web/images/user-image.svg",
						"bundles/web/images/web/learn-to-play.png": "bundles/web/images/web/learn-to-play.png",
						"bundles/web/images/web/tablet.jpg": "bundles/web/images/web/tablet.jpg",
						"bundles/web/images/webgl_data/2d/arcade/active-field-black-glow.png": "bundles/web/images/webgl_data/2d/arcade/active-field-black-glow.png",
						"bundles/web/images/webgl_data/2d/arcade/active-field-white-glow.png": "bundles/web/images/webgl_data/2d/arcade/active-field-white-glow.png",
						"bundles/web/images/webgl_data/2d/arcade/capture-lightning-black.json": "bundles/web/images/webgl_data/2d/arcade/capture-lightning-black.json",
						"bundles/web/images/webgl_data/2d/arcade/capture-lightning-black.png": "bundles/web/images/webgl_data/2d/arcade/capture-lightning-black.png",
						"bundles/web/images/webgl_data/2d/arcade/capture-lightning-white.json": "bundles/web/images/webgl_data/2d/arcade/capture-lightning-white.json",
						"bundles/web/images/webgl_data/2d/arcade/capture-lightning-white.png": "bundles/web/images/webgl_data/2d/arcade/capture-lightning-white.png",
						"bundles/web/images/webgl_data/2d/arcade/check-lightning-small.json": "bundles/web/images/webgl_data/2d/arcade/check-lightning-small.json",
						"bundles/web/images/webgl_data/2d/arcade/check-lightning-small.png": "bundles/web/images/webgl_data/2d/arcade/check-lightning-small.png",
						"bundles/web/images/webgl_data/2d/arcade/check-lightning.json": "bundles/web/images/webgl_data/2d/arcade/check-lightning.json",
						"bundles/web/images/webgl_data/2d/arcade/check-lightning.png": "bundles/web/images/webgl_data/2d/arcade/check-lightning.png",
						"bundles/web/images/webgl_data/2d/arcade/check-mate-lightning-black.json": "bundles/web/images/webgl_data/2d/arcade/check-mate-lightning-black.json",
						"bundles/web/images/webgl_data/2d/arcade/check-mate-lightning-black.png": "bundles/web/images/webgl_data/2d/arcade/check-mate-lightning-black.png",
						"bundles/web/images/webgl_data/2d/arcade/check-mate-lightning-white.json": "bundles/web/images/webgl_data/2d/arcade/check-mate-lightning-white.json",
						"bundles/web/images/webgl_data/2d/arcade/check-mate-lightning-white.png": "bundles/web/images/webgl_data/2d/arcade/check-mate-lightning-white.png",
						"bundles/web/images/webgl_data/2d/arcade/legal-move-arcade-black.png": "bundles/web/images/webgl_data/2d/arcade/legal-move-arcade-black.png",
						"bundles/web/images/webgl_data/2d/arcade/legal-move-arcade-white.png": "bundles/web/images/webgl_data/2d/arcade/legal-move-arcade-white.png",
						"bundles/web/images/webgl_data/2d/arcade/lightning-horizontal.png": "bundles/web/images/webgl_data/2d/arcade/lightning-horizontal.png",
						"bundles/web/images/webgl_data/2d/arcade/move-lightning-large-black.json": "bundles/web/images/webgl_data/2d/arcade/move-lightning-large-black.json",
						"bundles/web/images/webgl_data/2d/arcade/move-lightning-large-black.png": "bundles/web/images/webgl_data/2d/arcade/move-lightning-large-black.png",
						"bundles/web/images/webgl_data/2d/arcade/move-lightning-large-white.json": "bundles/web/images/webgl_data/2d/arcade/move-lightning-large-white.json",
						"bundles/web/images/webgl_data/2d/arcade/move-lightning-large-white.png": "bundles/web/images/webgl_data/2d/arcade/move-lightning-large-white.png",
						"bundles/web/images/webgl_data/2d/arcade/move-lightning-medium-black.json": "bundles/web/images/webgl_data/2d/arcade/move-lightning-medium-black.json",
						"bundles/web/images/webgl_data/2d/arcade/move-lightning-medium-black.png": "bundles/web/images/webgl_data/2d/arcade/move-lightning-medium-black.png",
						"bundles/web/images/webgl_data/2d/arcade/move-lightning-medium-white.json": "bundles/web/images/webgl_data/2d/arcade/move-lightning-medium-white.json",
						"bundles/web/images/webgl_data/2d/arcade/move-lightning-medium-white.png": "bundles/web/images/webgl_data/2d/arcade/move-lightning-medium-white.png",
						"bundles/web/images/webgl_data/2d/arcade/move-lightning-regular-black.json": "bundles/web/images/webgl_data/2d/arcade/move-lightning-regular-black.json",
						"bundles/web/images/webgl_data/2d/arcade/move-lightning-regular-black.png": "bundles/web/images/webgl_data/2d/arcade/move-lightning-regular-black.png",
						"bundles/web/images/webgl_data/2d/arcade/move-lightning-regular-white.json": "bundles/web/images/webgl_data/2d/arcade/move-lightning-regular-white.json",
						"bundles/web/images/webgl_data/2d/arcade/move-lightning-regular-white.png": "bundles/web/images/webgl_data/2d/arcade/move-lightning-regular-white.png",
						"bundles/web/images/webgl_data/2d/arcade/move-lightning-small-black.json": "bundles/web/images/webgl_data/2d/arcade/move-lightning-small-black.json",
						"bundles/web/images/webgl_data/2d/arcade/move-lightning-small-black.png": "bundles/web/images/webgl_data/2d/arcade/move-lightning-small-black.png",
						"bundles/web/images/webgl_data/2d/arcade/move-lightning-small-white.json": "bundles/web/images/webgl_data/2d/arcade/move-lightning-small-white.json",
						"bundles/web/images/webgl_data/2d/arcade/move-lightning-small-white.png": "bundles/web/images/webgl_data/2d/arcade/move-lightning-small-white.png",
						"bundles/web/images/webgl_data/2d/arcade/select-lightning-black.json": "bundles/web/images/webgl_data/2d/arcade/select-lightning-black.json",
						"bundles/web/images/webgl_data/2d/arcade/select-lightning-black.png": "bundles/web/images/webgl_data/2d/arcade/select-lightning-black.png",
						"bundles/web/images/webgl_data/2d/arcade/select-lightning-white.json": "bundles/web/images/webgl_data/2d/arcade/select-lightning-white.json",
						"bundles/web/images/webgl_data/2d/arcade/select-lightning-white.png": "bundles/web/images/webgl_data/2d/arcade/select-lightning-white.png",
						"bundles/web/images/webgl_data/2d/capture-dust.json": "bundles/web/images/webgl_data/2d/capture-dust.json",
						"bundles/web/images/webgl_data/2d/capture-dust.png": "bundles/web/images/webgl_data/2d/capture-dust.png",
						"bundles/web/images/webgl_data/2d/dust-big.json": "bundles/web/images/webgl_data/2d/dust-big.json",
						"bundles/web/images/webgl_data/2d/dust-big.png": "bundles/web/images/webgl_data/2d/dust-big.png",
						"bundles/web/images/webgl_data/2d/dust-regular.json": "bundles/web/images/webgl_data/2d/dust-regular.json",
						"bundles/web/images/webgl_data/2d/dust-regular.png": "bundles/web/images/webgl_data/2d/dust-regular.png",
						"bundles/web/images/webgl_data/2d/dust-small.json": "bundles/web/images/webgl_data/2d/dust-small.json",
						"bundles/web/images/webgl_data/2d/dust-small.png": "bundles/web/images/webgl_data/2d/dust-small.png",
						"bundles/web/images/webgl_data/2d/field-shadow.png": "bundles/web/images/webgl_data/2d/field-shadow.png",
						"bundles/web/images/webgl_data/2d/hand.json": "bundles/web/images/webgl_data/2d/hand.json",
						"bundles/web/images/webgl_data/2d/hand.png": "bundles/web/images/webgl_data/2d/hand.png",
						"bundles/web/images/webgl_data/3d/board/board.json": "bundles/web/images/webgl_data/3d/board/board.json",
						"bundles/web/images/webgl_data/3d/board/textures/board_8_bit.jpg": "bundles/web/images/webgl_data/3d/board/textures/board_8_bit.jpg",
						"bundles/web/images/webgl_data/3d/board/textures/board_8_bit_notation.png": "bundles/web/images/webgl_data/3d/board/textures/board_8_bit_notation.png",
						"bundles/web/images/webgl_data/3d/board/textures/board_bases.jpg": "bundles/web/images/webgl_data/3d/board/textures/board_bases.jpg",
						"bundles/web/images/webgl_data/3d/board/textures/board_bases_notation.png": "bundles/web/images/webgl_data/3d/board/textures/board_bases_notation.png",
						"bundles/web/images/webgl_data/3d/board/textures/board_blackwhite.jpg": "bundles/web/images/webgl_data/3d/board/textures/board_blackwhite.jpg",
						"bundles/web/images/webgl_data/3d/board/textures/board_blackwhite_notation.png": "bundles/web/images/webgl_data/3d/board/textures/board_blackwhite_notation.png",
						"bundles/web/images/webgl_data/3d/board/textures/board_blue.jpg": "bundles/web/images/webgl_data/3d/board/textures/board_blue.jpg",
						"bundles/web/images/webgl_data/3d/board/textures/board_blue_notation.png": "bundles/web/images/webgl_data/3d/board/textures/board_blue_notation.png",
						"bundles/web/images/webgl_data/3d/board/textures/board_brown.jpg": "bundles/web/images/webgl_data/3d/board/textures/board_brown.jpg",
						"bundles/web/images/webgl_data/3d/board/textures/board_brown_notation.png": "bundles/web/images/webgl_data/3d/board/textures/board_brown_notation.png",
						"bundles/web/images/webgl_data/3d/board/textures/board_bubblegum.jpg": "bundles/web/images/webgl_data/3d/board/textures/board_bubblegum.jpg",
						"bundles/web/images/webgl_data/3d/board/textures/board_bubblegum_notation.png": "bundles/web/images/webgl_data/3d/board/textures/board_bubblegum_notation.png",
						"bundles/web/images/webgl_data/3d/board/textures/board_burled_wood.jpg": "bundles/web/images/webgl_data/3d/board/textures/board_burled_wood.jpg",
						"bundles/web/images/webgl_data/3d/board/textures/board_burled_wood_notation.png": "bundles/web/images/webgl_data/3d/board/textures/board_burled_wood_notation.png",
						"bundles/web/images/webgl_data/3d/board/textures/board_dark_wood.jpg": "bundles/web/images/webgl_data/3d/board/textures/board_dark_wood.jpg",
						"bundles/web/images/webgl_data/3d/board/textures/board_dark_wood_notation.png": "bundles/web/images/webgl_data/3d/board/textures/board_dark_wood_notation.png",
						"bundles/web/images/webgl_data/3d/board/textures/board_dash.jpg": "bundles/web/images/webgl_data/3d/board/textures/board_dash.jpg",
						"bundles/web/images/webgl_data/3d/board/textures/board_dash_notation.png": "bundles/web/images/webgl_data/3d/board/textures/board_dash_notation.png",
						"bundles/web/images/webgl_data/3d/board/textures/board_glass.jpg": "bundles/web/images/webgl_data/3d/board/textures/board_glass.jpg",
						"bundles/web/images/webgl_data/3d/board/textures/board_glass_notation.png": "bundles/web/images/webgl_data/3d/board/textures/board_glass_notation.png",
						"bundles/web/images/webgl_data/3d/board/textures/board_graffiti.jpg": "bundles/web/images/webgl_data/3d/board/textures/board_graffiti.jpg",
						"bundles/web/images/webgl_data/3d/board/textures/board_graffiti_notation.png": "bundles/web/images/webgl_data/3d/board/textures/board_graffiti_notation.png",
						"bundles/web/images/webgl_data/3d/board/textures/board_green.jpg": "bundles/web/images/webgl_data/3d/board/textures/board_green.jpg",
						"bundles/web/images/webgl_data/3d/board/textures/board_green_notation.png": "bundles/web/images/webgl_data/3d/board/textures/board_green_notation.png",
						"bundles/web/images/webgl_data/3d/board/textures/board_grey.jpg": "bundles/web/images/webgl_data/3d/board/textures/board_grey.jpg",
						"bundles/web/images/webgl_data/3d/board/textures/board_grey_notation.png": "bundles/web/images/webgl_data/3d/board/textures/board_grey_notation.png",
						"bundles/web/images/webgl_data/3d/board/textures/board_icy_sea.jpg": "bundles/web/images/webgl_data/3d/board/textures/board_icy_sea.jpg",
						"bundles/web/images/webgl_data/3d/board/textures/board_icy_sea_notation.png": "bundles/web/images/webgl_data/3d/board/textures/board_icy_sea_notation.png",
						"bundles/web/images/webgl_data/3d/board/textures/board_light.jpg": "bundles/web/images/webgl_data/3d/board/textures/board_light.jpg",
						"bundles/web/images/webgl_data/3d/board/textures/board_light_notation.png": "bundles/web/images/webgl_data/3d/board/textures/board_light_notation.png",
						"bundles/web/images/webgl_data/3d/board/textures/board_lolz.jpg": "bundles/web/images/webgl_data/3d/board/textures/board_lolz.jpg",
						"bundles/web/images/webgl_data/3d/board/textures/board_lolz_notation.png": "bundles/web/images/webgl_data/3d/board/textures/board_lolz_notation.png",
						"bundles/web/images/webgl_data/3d/board/textures/board_marble.jpg": "bundles/web/images/webgl_data/3d/board/textures/board_marble.jpg",
						"bundles/web/images/webgl_data/3d/board/textures/board_marble_notation.png": "bundles/web/images/webgl_data/3d/board/textures/board_marble_notation.png",
						"bundles/web/images/webgl_data/3d/board/textures/board_marbleblue.jpg": "bundles/web/images/webgl_data/3d/board/textures/board_marbleblue.jpg",
						"bundles/web/images/webgl_data/3d/board/textures/board_marbleblue_notation.png": "bundles/web/images/webgl_data/3d/board/textures/board_marbleblue_notation.png",
						"bundles/web/images/webgl_data/3d/board/textures/board_marblebrown.jpg": "bundles/web/images/webgl_data/3d/board/textures/board_marblebrown.jpg",
						"bundles/web/images/webgl_data/3d/board/textures/board_marblebrown_notation.png": "bundles/web/images/webgl_data/3d/board/textures/board_marblebrown_notation.png",
						"bundles/web/images/webgl_data/3d/board/textures/board_marblegreen.jpg": "bundles/web/images/webgl_data/3d/board/textures/board_marblegreen.jpg",
						"bundles/web/images/webgl_data/3d/board/textures/board_marblegreen_notation.png": "bundles/web/images/webgl_data/3d/board/textures/board_marblegreen_notation.png",
						"bundles/web/images/webgl_data/3d/board/textures/board_metal.jpg": "bundles/web/images/webgl_data/3d/board/textures/board_metal.jpg",
						"bundles/web/images/webgl_data/3d/board/textures/board_metal_notation.png": "bundles/web/images/webgl_data/3d/board/textures/board_metal_notation.png",
						"bundles/web/images/webgl_data/3d/board/textures/board_neon.jpg": "bundles/web/images/webgl_data/3d/board/textures/board_neon.jpg",
						"bundles/web/images/webgl_data/3d/board/textures/board_neon_notation.png": "bundles/web/images/webgl_data/3d/board/textures/board_neon_notation.png",
						"bundles/web/images/webgl_data/3d/board/textures/board_newspaper.jpg": "bundles/web/images/webgl_data/3d/board/textures/board_newspaper.jpg",
						"bundles/web/images/webgl_data/3d/board/textures/board_newspaper_notation.png": "bundles/web/images/webgl_data/3d/board/textures/board_newspaper_notation.png",
						"bundles/web/images/webgl_data/3d/board/textures/board_orange.jpg": "bundles/web/images/webgl_data/3d/board/textures/board_orange.jpg",
						"bundles/web/images/webgl_data/3d/board/textures/board_orange_notation.png": "bundles/web/images/webgl_data/3d/board/textures/board_orange_notation.png",
						"bundles/web/images/webgl_data/3d/board/textures/board_overlay.jpg": "bundles/web/images/webgl_data/3d/board/textures/board_overlay.jpg",
						"bundles/web/images/webgl_data/3d/board/textures/board_overlay_notation.png": "bundles/web/images/webgl_data/3d/board/textures/board_overlay_notation.png",
						"bundles/web/images/webgl_data/3d/board/textures/board_parchment.jpg": "bundles/web/images/webgl_data/3d/board/textures/board_parchment.jpg",
						"bundles/web/images/webgl_data/3d/board/textures/board_parchment_notation.png": "bundles/web/images/webgl_data/3d/board/textures/board_parchment_notation.png",
						"bundles/web/images/webgl_data/3d/board/textures/board_pink.jpg": "bundles/web/images/webgl_data/3d/board/textures/board_pink.jpg",
						"bundles/web/images/webgl_data/3d/board/textures/board_pink_notation.png": "bundles/web/images/webgl_data/3d/board/textures/board_pink_notation.png",
						"bundles/web/images/webgl_data/3d/board/textures/board_purple.jpg": "bundles/web/images/webgl_data/3d/board/textures/board_purple.jpg",
						"bundles/web/images/webgl_data/3d/board/textures/board_purple_notation.png": "bundles/web/images/webgl_data/3d/board/textures/board_purple_notation.png",
						"bundles/web/images/webgl_data/3d/board/textures/board_red.jpg": "bundles/web/images/webgl_data/3d/board/textures/board_red.jpg",
						"bundles/web/images/webgl_data/3d/board/textures/board_red_notation.png": "bundles/web/images/webgl_data/3d/board/textures/board_red_notation.png",
						"bundles/web/images/webgl_data/3d/board/textures/board_sand.jpg": "bundles/web/images/webgl_data/3d/board/textures/board_sand.jpg",
						"bundles/web/images/webgl_data/3d/board/textures/board_sand_notation.png": "bundles/web/images/webgl_data/3d/board/textures/board_sand_notation.png",
						"bundles/web/images/webgl_data/3d/board/textures/board_shadow.png": "bundles/web/images/webgl_data/3d/board/textures/board_shadow.png",
						"bundles/web/images/webgl_data/3d/board/textures/board_sky.jpg": "bundles/web/images/webgl_data/3d/board/textures/board_sky.jpg",
						"bundles/web/images/webgl_data/3d/board/textures/board_sky_notation.png": "bundles/web/images/webgl_data/3d/board/textures/board_sky_notation.png",
						"bundles/web/images/webgl_data/3d/board/textures/board_stone.jpg": "bundles/web/images/webgl_data/3d/board/textures/board_stone.jpg",
						"bundles/web/images/webgl_data/3d/board/textures/board_stone_notation.png": "bundles/web/images/webgl_data/3d/board/textures/board_stone_notation.png",
						"bundles/web/images/webgl_data/3d/board/textures/board_tan.jpg": "bundles/web/images/webgl_data/3d/board/textures/board_tan.jpg",
						"bundles/web/images/webgl_data/3d/board/textures/board_tan_notation.png": "bundles/web/images/webgl_data/3d/board/textures/board_tan_notation.png",
						"bundles/web/images/webgl_data/3d/board/textures/board_tournament.jpg": "bundles/web/images/webgl_data/3d/board/textures/board_tournament.jpg",
						"bundles/web/images/webgl_data/3d/board/textures/board_tournament_notation.png": "bundles/web/images/webgl_data/3d/board/textures/board_tournament_notation.png",
						"bundles/web/images/webgl_data/3d/board/textures/board_translucent.jpg": "bundles/web/images/webgl_data/3d/board/textures/board_translucent.jpg",
						"bundles/web/images/webgl_data/3d/board/textures/board_translucent_notation.png": "bundles/web/images/webgl_data/3d/board/textures/board_translucent_notation.png",
						"bundles/web/images/webgl_data/3d/board/textures/board_walnut.jpg": "bundles/web/images/webgl_data/3d/board/textures/board_walnut.jpg",
						"bundles/web/images/webgl_data/3d/board/textures/board_walnut_notation.png": "bundles/web/images/webgl_data/3d/board/textures/board_walnut_notation.png",
						"bundles/web/images/webgl_data/3d/board/textures/board_winboard.jpg": "bundles/web/images/webgl_data/3d/board/textures/board_winboard.jpg",
						"bundles/web/images/webgl_data/3d/board/textures/board_winboard_notation.png": "bundles/web/images/webgl_data/3d/board/textures/board_winboard_notation.png",
						"bundles/web/images/webgl_data/3d/board/textures/board_wood.jpg": "bundles/web/images/webgl_data/3d/board/textures/board_wood.jpg",
						"bundles/web/images/webgl_data/3d/board/textures/board_wood_notation.png": "bundles/web/images/webgl_data/3d/board/textures/board_wood_notation.png",
						"bundles/web/images/webgl_data/3d/board/textures/board_wooddark.jpg": "bundles/web/images/webgl_data/3d/board/textures/board_wooddark.jpg",
						"bundles/web/images/webgl_data/3d/board/textures/board_wooddark_notation.png": "bundles/web/images/webgl_data/3d/board/textures/board_wooddark_notation.png",
						"bundles/web/images/webgl_data/3d/board/textures/board_woodlight.jpg": "bundles/web/images/webgl_data/3d/board/textures/board_woodlight.jpg",
						"bundles/web/images/webgl_data/3d/board/textures/board_woodlight_notation.png": "bundles/web/images/webgl_data/3d/board/textures/board_woodlight_notation.png",
						"bundles/web/images/webgl_data/3d/board/textures/board_woodmid.jpg": "bundles/web/images/webgl_data/3d/board/textures/board_woodmid.jpg",
						"bundles/web/images/webgl_data/3d/board/textures/board_woodmid_notation.png": "bundles/web/images/webgl_data/3d/board/textures/board_woodmid_notation.png",
						"bundles/web/images/webgl_data/3d/board/textures/board_woodolive.jpg": "bundles/web/images/webgl_data/3d/board/textures/board_woodolive.jpg",
						"bundles/web/images/webgl_data/3d/board/textures/board_woodolive_notation.png": "bundles/web/images/webgl_data/3d/board/textures/board_woodolive_notation.png",
						"bundles/web/images/webgl_data/3d/marking_arrow_L.json": "bundles/web/images/webgl_data/3d/marking_arrow_L.json",
						"bundles/web/images/webgl_data/3d/marking_arrow_straight.json": "bundles/web/images/webgl_data/3d/marking_arrow_straight.json",
						"bundles/web/images/webgl_data/3d/pieces/staunton_executive/bishop.json": "bundles/web/images/webgl_data/3d/pieces/staunton_executive/bishop.json",
						"bundles/web/images/webgl_data/3d/pieces/staunton_executive/bishop_promotion_black.jpg": "bundles/web/images/webgl_data/3d/pieces/staunton_executive/bishop_promotion_black.jpg",
						"bundles/web/images/webgl_data/3d/pieces/staunton_executive/bishop_promotion_white.jpg": "bundles/web/images/webgl_data/3d/pieces/staunton_executive/bishop_promotion_white.jpg",
						"bundles/web/images/webgl_data/3d/pieces/staunton_executive/king.json": "bundles/web/images/webgl_data/3d/pieces/staunton_executive/king.json",
						"bundles/web/images/webgl_data/3d/pieces/staunton_executive/knight.json": "bundles/web/images/webgl_data/3d/pieces/staunton_executive/knight.json",
						"bundles/web/images/webgl_data/3d/pieces/staunton_executive/knight_promotion_black.jpg": "bundles/web/images/webgl_data/3d/pieces/staunton_executive/knight_promotion_black.jpg",
						"bundles/web/images/webgl_data/3d/pieces/staunton_executive/knight_promotion_white.jpg": "bundles/web/images/webgl_data/3d/pieces/staunton_executive/knight_promotion_white.jpg",
						"bundles/web/images/webgl_data/3d/pieces/staunton_executive/pawn.json": "bundles/web/images/webgl_data/3d/pieces/staunton_executive/pawn.json",
						"bundles/web/images/webgl_data/3d/pieces/staunton_executive/queen.json": "bundles/web/images/webgl_data/3d/pieces/staunton_executive/queen.json",
						"bundles/web/images/webgl_data/3d/pieces/staunton_executive/queen_promotion_black.jpg": "bundles/web/images/webgl_data/3d/pieces/staunton_executive/queen_promotion_black.jpg",
						"bundles/web/images/webgl_data/3d/pieces/staunton_executive/queen_promotion_white.jpg": "bundles/web/images/webgl_data/3d/pieces/staunton_executive/queen_promotion_white.jpg",
						"bundles/web/images/webgl_data/3d/pieces/staunton_executive/rook.json": "bundles/web/images/webgl_data/3d/pieces/staunton_executive/rook.json",
						"bundles/web/images/webgl_data/3d/pieces/staunton_executive/rook_promotion_black.jpg": "bundles/web/images/webgl_data/3d/pieces/staunton_executive/rook_promotion_black.jpg",
						"bundles/web/images/webgl_data/3d/pieces/staunton_executive/rook_promotion_white.jpg": "bundles/web/images/webgl_data/3d/pieces/staunton_executive/rook_promotion_white.jpg",
						"bundles/web/images/webgl_data/3d/pieces/staunton_executive/textures/bishop_shadow.png": "bundles/web/images/webgl_data/3d/pieces/staunton_executive/textures/bishop_shadow.png",
						"bundles/web/images/webgl_data/3d/pieces/staunton_executive/textures/envmap/negx.jpg": "bundles/web/images/webgl_data/3d/pieces/staunton_executive/textures/envmap/negx.jpg",
						"bundles/web/images/webgl_data/3d/pieces/staunton_executive/textures/envmap/negy.jpg": "bundles/web/images/webgl_data/3d/pieces/staunton_executive/textures/envmap/negy.jpg",
						"bundles/web/images/webgl_data/3d/pieces/staunton_executive/textures/envmap/negz.jpg": "bundles/web/images/webgl_data/3d/pieces/staunton_executive/textures/envmap/negz.jpg",
						"bundles/web/images/webgl_data/3d/pieces/staunton_executive/textures/envmap/posx.jpg": "bundles/web/images/webgl_data/3d/pieces/staunton_executive/textures/envmap/posx.jpg",
						"bundles/web/images/webgl_data/3d/pieces/staunton_executive/textures/envmap/posy.jpg": "bundles/web/images/webgl_data/3d/pieces/staunton_executive/textures/envmap/posy.jpg",
						"bundles/web/images/webgl_data/3d/pieces/staunton_executive/textures/envmap/posz.jpg": "bundles/web/images/webgl_data/3d/pieces/staunton_executive/textures/envmap/posz.jpg",
						"bundles/web/images/webgl_data/3d/pieces/staunton_executive/textures/king_shadow.png": "bundles/web/images/webgl_data/3d/pieces/staunton_executive/textures/king_shadow.png",
						"bundles/web/images/webgl_data/3d/pieces/staunton_executive/textures/knight_shadow.png": "bundles/web/images/webgl_data/3d/pieces/staunton_executive/textures/knight_shadow.png",
						"bundles/web/images/webgl_data/3d/pieces/staunton_executive/textures/pawn_shadow.png": "bundles/web/images/webgl_data/3d/pieces/staunton_executive/textures/pawn_shadow.png",
						"bundles/web/images/webgl_data/3d/pieces/staunton_executive/textures/piece_black.jpg": "bundles/web/images/webgl_data/3d/pieces/staunton_executive/textures/piece_black.jpg",
						"bundles/web/images/webgl_data/3d/pieces/staunton_executive/textures/piece_marble_black.jpg": "bundles/web/images/webgl_data/3d/pieces/staunton_executive/textures/piece_marble_black.jpg",
						"bundles/web/images/webgl_data/3d/pieces/staunton_executive/textures/piece_marble_white.jpg": "bundles/web/images/webgl_data/3d/pieces/staunton_executive/textures/piece_marble_white.jpg",
						"bundles/web/images/webgl_data/3d/pieces/staunton_executive/textures/piece_metal_black.jpg": "bundles/web/images/webgl_data/3d/pieces/staunton_executive/textures/piece_metal_black.jpg",
						"bundles/web/images/webgl_data/3d/pieces/staunton_executive/textures/piece_metal_white.jpg": "bundles/web/images/webgl_data/3d/pieces/staunton_executive/textures/piece_metal_white.jpg",
						"bundles/web/images/webgl_data/3d/pieces/staunton_executive/textures/piece_plastic_black.jpg": "bundles/web/images/webgl_data/3d/pieces/staunton_executive/textures/piece_plastic_black.jpg",
						"bundles/web/images/webgl_data/3d/pieces/staunton_executive/textures/piece_plastic_white.jpg": "bundles/web/images/webgl_data/3d/pieces/staunton_executive/textures/piece_plastic_white.jpg",
						"bundles/web/images/webgl_data/3d/pieces/staunton_executive/textures/piece_white.jpg": "bundles/web/images/webgl_data/3d/pieces/staunton_executive/textures/piece_white.jpg",
						"bundles/web/images/webgl_data/3d/pieces/staunton_executive/textures/piece_wood_black.jpg": "bundles/web/images/webgl_data/3d/pieces/staunton_executive/textures/piece_wood_black.jpg",
						"bundles/web/images/webgl_data/3d/pieces/staunton_executive/textures/piece_wood_white.jpg": "bundles/web/images/webgl_data/3d/pieces/staunton_executive/textures/piece_wood_white.jpg",
						"bundles/web/images/webgl_data/3d/pieces/staunton_executive/textures/queen_shadow.png": "bundles/web/images/webgl_data/3d/pieces/staunton_executive/textures/queen_shadow.png",
						"bundles/web/images/webgl_data/3d/pieces/staunton_executive/textures/rook_shadow.png": "bundles/web/images/webgl_data/3d/pieces/staunton_executive/textures/rook_shadow.png",
						"bundles/web/images/webgl_data/README.md": "bundles/web/images/webgl_data/README.md",
						"bundles/web/images/webgl_data/three-d/board/board.glb": "bundles/web/images/webgl_data/three-d/board/board.glb",
						"bundles/web/images/webgl_data/three-d/board/board.json": "bundles/web/images/webgl_data/three-d/board/board.json",
						"bundles/web/images/webgl_data/three-d/board/textures/board_8_bit.jpg": "bundles/web/images/webgl_data/three-d/board/textures/board_8_bit.jpg",
						"bundles/web/images/webgl_data/three-d/board/textures/board_8_bit_notation.png": "bundles/web/images/webgl_data/three-d/board/textures/board_8_bit_notation.png",
						"bundles/web/images/webgl_data/three-d/board/textures/board_bases.jpg": "bundles/web/images/webgl_data/three-d/board/textures/board_bases.jpg",
						"bundles/web/images/webgl_data/three-d/board/textures/board_bases_notation.png": "bundles/web/images/webgl_data/three-d/board/textures/board_bases_notation.png",
						"bundles/web/images/webgl_data/three-d/board/textures/board_blackwhite.jpg": "bundles/web/images/webgl_data/three-d/board/textures/board_blackwhite.jpg",
						"bundles/web/images/webgl_data/three-d/board/textures/board_blackwhite_notation.png": "bundles/web/images/webgl_data/three-d/board/textures/board_blackwhite_notation.png",
						"bundles/web/images/webgl_data/three-d/board/textures/board_blue.jpg": "bundles/web/images/webgl_data/three-d/board/textures/board_blue.jpg",
						"bundles/web/images/webgl_data/three-d/board/textures/board_blue_notation.png": "bundles/web/images/webgl_data/three-d/board/textures/board_blue_notation.png",
						"bundles/web/images/webgl_data/three-d/board/textures/board_brown.jpg": "bundles/web/images/webgl_data/three-d/board/textures/board_brown.jpg",
						"bundles/web/images/webgl_data/three-d/board/textures/board_brown_notation.png": "bundles/web/images/webgl_data/three-d/board/textures/board_brown_notation.png",
						"bundles/web/images/webgl_data/three-d/board/textures/board_bubblegum.jpg": "bundles/web/images/webgl_data/three-d/board/textures/board_bubblegum.jpg",
						"bundles/web/images/webgl_data/three-d/board/textures/board_bubblegum_notation.png": "bundles/web/images/webgl_data/three-d/board/textures/board_bubblegum_notation.png",
						"bundles/web/images/webgl_data/three-d/board/textures/board_burled_wood.jpg": "bundles/web/images/webgl_data/three-d/board/textures/board_burled_wood.jpg",
						"bundles/web/images/webgl_data/three-d/board/textures/board_burled_wood_notation.png": "bundles/web/images/webgl_data/three-d/board/textures/board_burled_wood_notation.png",
						"bundles/web/images/webgl_data/three-d/board/textures/board_checkers.jpg": "bundles/web/images/webgl_data/three-d/board/textures/board_checkers.jpg",
						"bundles/web/images/webgl_data/three-d/board/textures/board_checkers_notation.png": "bundles/web/images/webgl_data/three-d/board/textures/board_checkers_notation.png",
						"bundles/web/images/webgl_data/three-d/board/textures/board_dark_wood.jpg": "bundles/web/images/webgl_data/three-d/board/textures/board_dark_wood.jpg",
						"bundles/web/images/webgl_data/three-d/board/textures/board_dark_wood_notation.png": "bundles/web/images/webgl_data/three-d/board/textures/board_dark_wood_notation.png",
						"bundles/web/images/webgl_data/three-d/board/textures/board_dash.jpg": "bundles/web/images/webgl_data/three-d/board/textures/board_dash.jpg",
						"bundles/web/images/webgl_data/three-d/board/textures/board_dash_notation.png": "bundles/web/images/webgl_data/three-d/board/textures/board_dash_notation.png",
						"bundles/web/images/webgl_data/three-d/board/textures/board_glass.jpg": "bundles/web/images/webgl_data/three-d/board/textures/board_glass.jpg",
						"bundles/web/images/webgl_data/three-d/board/textures/board_glass_notation.png": "bundles/web/images/webgl_data/three-d/board/textures/board_glass_notation.png",
						"bundles/web/images/webgl_data/three-d/board/textures/board_graffiti.jpg": "bundles/web/images/webgl_data/three-d/board/textures/board_graffiti.jpg",
						"bundles/web/images/webgl_data/three-d/board/textures/board_graffiti_notation.png": "bundles/web/images/webgl_data/three-d/board/textures/board_graffiti_notation.png",
						"bundles/web/images/webgl_data/three-d/board/textures/board_green.jpg": "bundles/web/images/webgl_data/three-d/board/textures/board_green.jpg",
						"bundles/web/images/webgl_data/three-d/board/textures/board_green_notation.png": "bundles/web/images/webgl_data/three-d/board/textures/board_green_notation.png",
						"bundles/web/images/webgl_data/three-d/board/textures/board_grey.jpg": "bundles/web/images/webgl_data/three-d/board/textures/board_grey.jpg",
						"bundles/web/images/webgl_data/three-d/board/textures/board_grey_notation.png": "bundles/web/images/webgl_data/three-d/board/textures/board_grey_notation.png",
						"bundles/web/images/webgl_data/three-d/board/textures/board_icy_sea.jpg": "bundles/web/images/webgl_data/three-d/board/textures/board_icy_sea.jpg",
						"bundles/web/images/webgl_data/three-d/board/textures/board_icy_sea_notation.png": "bundles/web/images/webgl_data/three-d/board/textures/board_icy_sea_notation.png",
						"bundles/web/images/webgl_data/three-d/board/textures/board_light.jpg": "bundles/web/images/webgl_data/three-d/board/textures/board_light.jpg",
						"bundles/web/images/webgl_data/three-d/board/textures/board_light_notation.png": "bundles/web/images/webgl_data/three-d/board/textures/board_light_notation.png",
						"bundles/web/images/webgl_data/three-d/board/textures/board_lolz.jpg": "bundles/web/images/webgl_data/three-d/board/textures/board_lolz.jpg",
						"bundles/web/images/webgl_data/three-d/board/textures/board_lolz_notation.png": "bundles/web/images/webgl_data/three-d/board/textures/board_lolz_notation.png",
						"bundles/web/images/webgl_data/three-d/board/textures/board_marble.jpg": "bundles/web/images/webgl_data/three-d/board/textures/board_marble.jpg",
						"bundles/web/images/webgl_data/three-d/board/textures/board_marble_notation.png": "bundles/web/images/webgl_data/three-d/board/textures/board_marble_notation.png",
						"bundles/web/images/webgl_data/three-d/board/textures/board_marbleblue.jpg": "bundles/web/images/webgl_data/three-d/board/textures/board_marbleblue.jpg",
						"bundles/web/images/webgl_data/three-d/board/textures/board_marbleblue_notation.png": "bundles/web/images/webgl_data/three-d/board/textures/board_marbleblue_notation.png",
						"bundles/web/images/webgl_data/three-d/board/textures/board_marblebrown.jpg": "bundles/web/images/webgl_data/three-d/board/textures/board_marblebrown.jpg",
						"bundles/web/images/webgl_data/three-d/board/textures/board_marblebrown_notation.png": "bundles/web/images/webgl_data/three-d/board/textures/board_marblebrown_notation.png",
						"bundles/web/images/webgl_data/three-d/board/textures/board_marblegreen.jpg": "bundles/web/images/webgl_data/three-d/board/textures/board_marblegreen.jpg",
						"bundles/web/images/webgl_data/three-d/board/textures/board_marblegreen_notation.png": "bundles/web/images/webgl_data/three-d/board/textures/board_marblegreen_notation.png",
						"bundles/web/images/webgl_data/three-d/board/textures/board_metal.jpg": "bundles/web/images/webgl_data/three-d/board/textures/board_metal.jpg",
						"bundles/web/images/webgl_data/three-d/board/textures/board_metal_notation.png": "bundles/web/images/webgl_data/three-d/board/textures/board_metal_notation.png",
						"bundles/web/images/webgl_data/three-d/board/textures/board_neon.jpg": "bundles/web/images/webgl_data/three-d/board/textures/board_neon.jpg",
						"bundles/web/images/webgl_data/three-d/board/textures/board_neon_notation.png": "bundles/web/images/webgl_data/three-d/board/textures/board_neon_notation.png",
						"bundles/web/images/webgl_data/three-d/board/textures/board_newspaper.jpg": "bundles/web/images/webgl_data/three-d/board/textures/board_newspaper.jpg",
						"bundles/web/images/webgl_data/three-d/board/textures/board_newspaper_notation.png": "bundles/web/images/webgl_data/three-d/board/textures/board_newspaper_notation.png",
						"bundles/web/images/webgl_data/three-d/board/textures/board_orange.jpg": "bundles/web/images/webgl_data/three-d/board/textures/board_orange.jpg",
						"bundles/web/images/webgl_data/three-d/board/textures/board_orange_notation.png": "bundles/web/images/webgl_data/three-d/board/textures/board_orange_notation.png",
						"bundles/web/images/webgl_data/three-d/board/textures/board_overlay.jpg": "bundles/web/images/webgl_data/three-d/board/textures/board_overlay.jpg",
						"bundles/web/images/webgl_data/three-d/board/textures/board_overlay_notation.png": "bundles/web/images/webgl_data/three-d/board/textures/board_overlay_notation.png",
						"bundles/web/images/webgl_data/three-d/board/textures/board_parchment.jpg": "bundles/web/images/webgl_data/three-d/board/textures/board_parchment.jpg",
						"bundles/web/images/webgl_data/three-d/board/textures/board_parchment_notation.png": "bundles/web/images/webgl_data/three-d/board/textures/board_parchment_notation.png",
						"bundles/web/images/webgl_data/three-d/board/textures/board_pink.jpg": "bundles/web/images/webgl_data/three-d/board/textures/board_pink.jpg",
						"bundles/web/images/webgl_data/three-d/board/textures/board_pink_notation.png": "bundles/web/images/webgl_data/three-d/board/textures/board_pink_notation.png",
						"bundles/web/images/webgl_data/three-d/board/textures/board_purple.jpg": "bundles/web/images/webgl_data/three-d/board/textures/board_purple.jpg",
						"bundles/web/images/webgl_data/three-d/board/textures/board_purple_notation.png": "bundles/web/images/webgl_data/three-d/board/textures/board_purple_notation.png",
						"bundles/web/images/webgl_data/three-d/board/textures/board_red.jpg": "bundles/web/images/webgl_data/three-d/board/textures/board_red.jpg",
						"bundles/web/images/webgl_data/three-d/board/textures/board_red_notation.png": "bundles/web/images/webgl_data/three-d/board/textures/board_red_notation.png",
						"bundles/web/images/webgl_data/three-d/board/textures/board_sand.jpg": "bundles/web/images/webgl_data/three-d/board/textures/board_sand.jpg",
						"bundles/web/images/webgl_data/three-d/board/textures/board_sand_notation.png": "bundles/web/images/webgl_data/three-d/board/textures/board_sand_notation.png",
						"bundles/web/images/webgl_data/three-d/board/textures/board_shadow.png": "bundles/web/images/webgl_data/three-d/board/textures/board_shadow.png",
						"bundles/web/images/webgl_data/three-d/board/textures/board_sky.jpg": "bundles/web/images/webgl_data/three-d/board/textures/board_sky.jpg",
						"bundles/web/images/webgl_data/three-d/board/textures/board_sky_notation.png": "bundles/web/images/webgl_data/three-d/board/textures/board_sky_notation.png",
						"bundles/web/images/webgl_data/three-d/board/textures/board_stone.jpg": "bundles/web/images/webgl_data/three-d/board/textures/board_stone.jpg",
						"bundles/web/images/webgl_data/three-d/board/textures/board_stone_notation.png": "bundles/web/images/webgl_data/three-d/board/textures/board_stone_notation.png",
						"bundles/web/images/webgl_data/three-d/board/textures/board_tan.jpg": "bundles/web/images/webgl_data/three-d/board/textures/board_tan.jpg",
						"bundles/web/images/webgl_data/three-d/board/textures/board_tan_notation.png": "bundles/web/images/webgl_data/three-d/board/textures/board_tan_notation.png",
						"bundles/web/images/webgl_data/three-d/board/textures/board_tournament.jpg": "bundles/web/images/webgl_data/three-d/board/textures/board_tournament.jpg",
						"bundles/web/images/webgl_data/three-d/board/textures/board_tournament_notation.png": "bundles/web/images/webgl_data/three-d/board/textures/board_tournament_notation.png",
						"bundles/web/images/webgl_data/three-d/board/textures/board_translucent.jpg": "bundles/web/images/webgl_data/three-d/board/textures/board_translucent.jpg",
						"bundles/web/images/webgl_data/three-d/board/textures/board_translucent_notation.png": "bundles/web/images/webgl_data/three-d/board/textures/board_translucent_notation.png",
						"bundles/web/images/webgl_data/three-d/board/textures/board_walnut.jpg": "bundles/web/images/webgl_data/three-d/board/textures/board_walnut.jpg",
						"bundles/web/images/webgl_data/three-d/board/textures/board_walnut_notation.png": "bundles/web/images/webgl_data/three-d/board/textures/board_walnut_notation.png",
						"bundles/web/images/webgl_data/three-d/board/textures/board_winboard.jpg": "bundles/web/images/webgl_data/three-d/board/textures/board_winboard.jpg",
						"bundles/web/images/webgl_data/three-d/board/textures/board_winboard_notation.png": "bundles/web/images/webgl_data/three-d/board/textures/board_winboard_notation.png",
						"bundles/web/images/webgl_data/three-d/board/textures/board_wood.jpg": "bundles/web/images/webgl_data/three-d/board/textures/board_wood.jpg",
						"bundles/web/images/webgl_data/three-d/board/textures/board_wood_notation.png": "bundles/web/images/webgl_data/three-d/board/textures/board_wood_notation.png",
						"bundles/web/images/webgl_data/three-d/board/textures/board_wooddark.jpg": "bundles/web/images/webgl_data/three-d/board/textures/board_wooddark.jpg",
						"bundles/web/images/webgl_data/three-d/board/textures/board_wooddark_notation.png": "bundles/web/images/webgl_data/three-d/board/textures/board_wooddark_notation.png",
						"bundles/web/images/webgl_data/three-d/board/textures/board_woodlight.jpg": "bundles/web/images/webgl_data/three-d/board/textures/board_woodlight.jpg",
						"bundles/web/images/webgl_data/three-d/board/textures/board_woodlight_notation.png": "bundles/web/images/webgl_data/three-d/board/textures/board_woodlight_notation.png",
						"bundles/web/images/webgl_data/three-d/board/textures/board_woodmid.jpg": "bundles/web/images/webgl_data/three-d/board/textures/board_woodmid.jpg",
						"bundles/web/images/webgl_data/three-d/board/textures/board_woodmid_notation.png": "bundles/web/images/webgl_data/three-d/board/textures/board_woodmid_notation.png",
						"bundles/web/images/webgl_data/three-d/board/textures/board_woodolive.jpg": "bundles/web/images/webgl_data/three-d/board/textures/board_woodolive.jpg",
						"bundles/web/images/webgl_data/three-d/board/textures/board_woodolive_notation.png": "bundles/web/images/webgl_data/three-d/board/textures/board_woodolive_notation.png",
						"bundles/web/images/webgl_data/three-d/marking_arrow_L.json": "bundles/web/images/webgl_data/three-d/marking_arrow_L.json",
						"bundles/web/images/webgl_data/three-d/marking_arrow_straight.json": "bundles/web/images/webgl_data/three-d/marking_arrow_straight.json",
						"bundles/web/images/webgl_data/three-d/pieces/staunton_executive/bishop.glb": "bundles/web/images/webgl_data/three-d/pieces/staunton_executive/bishop.glb",
						"bundles/web/images/webgl_data/three-d/pieces/staunton_executive/bishop.json": "bundles/web/images/webgl_data/three-d/pieces/staunton_executive/bishop.json",
						"bundles/web/images/webgl_data/three-d/pieces/staunton_executive/bishop_promotion_black.jpg": "bundles/web/images/webgl_data/three-d/pieces/staunton_executive/bishop_promotion_black.jpg",
						"bundles/web/images/webgl_data/three-d/pieces/staunton_executive/bishop_promotion_white.jpg": "bundles/web/images/webgl_data/three-d/pieces/staunton_executive/bishop_promotion_white.jpg",
						"bundles/web/images/webgl_data/three-d/pieces/staunton_executive/king.glb": "bundles/web/images/webgl_data/three-d/pieces/staunton_executive/king.glb",
						"bundles/web/images/webgl_data/three-d/pieces/staunton_executive/king.json": "bundles/web/images/webgl_data/three-d/pieces/staunton_executive/king.json",
						"bundles/web/images/webgl_data/three-d/pieces/staunton_executive/knight.glb": "bundles/web/images/webgl_data/three-d/pieces/staunton_executive/knight.glb",
						"bundles/web/images/webgl_data/three-d/pieces/staunton_executive/knight.json": "bundles/web/images/webgl_data/three-d/pieces/staunton_executive/knight.json",
						"bundles/web/images/webgl_data/three-d/pieces/staunton_executive/knight_promotion_black.jpg": "bundles/web/images/webgl_data/three-d/pieces/staunton_executive/knight_promotion_black.jpg",
						"bundles/web/images/webgl_data/three-d/pieces/staunton_executive/knight_promotion_white.jpg": "bundles/web/images/webgl_data/three-d/pieces/staunton_executive/knight_promotion_white.jpg",
						"bundles/web/images/webgl_data/three-d/pieces/staunton_executive/pawn.glb": "bundles/web/images/webgl_data/three-d/pieces/staunton_executive/pawn.glb",
						"bundles/web/images/webgl_data/three-d/pieces/staunton_executive/pawn.json": "bundles/web/images/webgl_data/three-d/pieces/staunton_executive/pawn.json",
						"bundles/web/images/webgl_data/three-d/pieces/staunton_executive/queen.glb": "bundles/web/images/webgl_data/three-d/pieces/staunton_executive/queen.glb",
						"bundles/web/images/webgl_data/three-d/pieces/staunton_executive/queen.json": "bundles/web/images/webgl_data/three-d/pieces/staunton_executive/queen.json",
						"bundles/web/images/webgl_data/three-d/pieces/staunton_executive/queen_promotion_black.jpg": "bundles/web/images/webgl_data/three-d/pieces/staunton_executive/queen_promotion_black.jpg",
						"bundles/web/images/webgl_data/three-d/pieces/staunton_executive/queen_promotion_white.jpg": "bundles/web/images/webgl_data/three-d/pieces/staunton_executive/queen_promotion_white.jpg",
						"bundles/web/images/webgl_data/three-d/pieces/staunton_executive/rook.glb": "bundles/web/images/webgl_data/three-d/pieces/staunton_executive/rook.glb",
						"bundles/web/images/webgl_data/three-d/pieces/staunton_executive/rook.json": "bundles/web/images/webgl_data/three-d/pieces/staunton_executive/rook.json",
						"bundles/web/images/webgl_data/three-d/pieces/staunton_executive/rook_promotion_black.jpg": "bundles/web/images/webgl_data/three-d/pieces/staunton_executive/rook_promotion_black.jpg",
						"bundles/web/images/webgl_data/three-d/pieces/staunton_executive/rook_promotion_white.jpg": "bundles/web/images/webgl_data/three-d/pieces/staunton_executive/rook_promotion_white.jpg",
						"bundles/web/images/webgl_data/three-d/pieces/staunton_executive/textures/bishop_shadow.png": "bundles/web/images/webgl_data/three-d/pieces/staunton_executive/textures/bishop_shadow.png",
						"bundles/web/images/webgl_data/three-d/pieces/staunton_executive/textures/envmap/negx.jpg": "bundles/web/images/webgl_data/three-d/pieces/staunton_executive/textures/envmap/negx.jpg",
						"bundles/web/images/webgl_data/three-d/pieces/staunton_executive/textures/envmap/negy.jpg": "bundles/web/images/webgl_data/three-d/pieces/staunton_executive/textures/envmap/negy.jpg",
						"bundles/web/images/webgl_data/three-d/pieces/staunton_executive/textures/envmap/negz.jpg": "bundles/web/images/webgl_data/three-d/pieces/staunton_executive/textures/envmap/negz.jpg",
						"bundles/web/images/webgl_data/three-d/pieces/staunton_executive/textures/envmap/posx.jpg": "bundles/web/images/webgl_data/three-d/pieces/staunton_executive/textures/envmap/posx.jpg",
						"bundles/web/images/webgl_data/three-d/pieces/staunton_executive/textures/envmap/posy.jpg": "bundles/web/images/webgl_data/three-d/pieces/staunton_executive/textures/envmap/posy.jpg",
						"bundles/web/images/webgl_data/three-d/pieces/staunton_executive/textures/envmap/posz.jpg": "bundles/web/images/webgl_data/three-d/pieces/staunton_executive/textures/envmap/posz.jpg",
						"bundles/web/images/webgl_data/three-d/pieces/staunton_executive/textures/king_shadow.png": "bundles/web/images/webgl_data/three-d/pieces/staunton_executive/textures/king_shadow.png",
						"bundles/web/images/webgl_data/three-d/pieces/staunton_executive/textures/knight_shadow.png": "bundles/web/images/webgl_data/three-d/pieces/staunton_executive/textures/knight_shadow.png",
						"bundles/web/images/webgl_data/three-d/pieces/staunton_executive/textures/pawn_shadow.png": "bundles/web/images/webgl_data/three-d/pieces/staunton_executive/textures/pawn_shadow.png",
						"bundles/web/images/webgl_data/three-d/pieces/staunton_executive/textures/piece_black.jpg": "bundles/web/images/webgl_data/three-d/pieces/staunton_executive/textures/piece_black.jpg",
						"bundles/web/images/webgl_data/three-d/pieces/staunton_executive/textures/piece_marble_black.jpg": "bundles/web/images/webgl_data/three-d/pieces/staunton_executive/textures/piece_marble_black.jpg",
						"bundles/web/images/webgl_data/three-d/pieces/staunton_executive/textures/piece_marble_white.jpg": "bundles/web/images/webgl_data/three-d/pieces/staunton_executive/textures/piece_marble_white.jpg",
						"bundles/web/images/webgl_data/three-d/pieces/staunton_executive/textures/piece_metal_black.jpg": "bundles/web/images/webgl_data/three-d/pieces/staunton_executive/textures/piece_metal_black.jpg",
						"bundles/web/images/webgl_data/three-d/pieces/staunton_executive/textures/piece_metal_white.jpg": "bundles/web/images/webgl_data/three-d/pieces/staunton_executive/textures/piece_metal_white.jpg",
						"bundles/web/images/webgl_data/three-d/pieces/staunton_executive/textures/piece_plastic_black.jpg": "bundles/web/images/webgl_data/three-d/pieces/staunton_executive/textures/piece_plastic_black.jpg",
						"bundles/web/images/webgl_data/three-d/pieces/staunton_executive/textures/piece_plastic_white.jpg": "bundles/web/images/webgl_data/three-d/pieces/staunton_executive/textures/piece_plastic_white.jpg",
						"bundles/web/images/webgl_data/three-d/pieces/staunton_executive/textures/piece_white.jpg": "bundles/web/images/webgl_data/three-d/pieces/staunton_executive/textures/piece_white.jpg",
						"bundles/web/images/webgl_data/three-d/pieces/staunton_executive/textures/piece_wood_black.jpg": "bundles/web/images/webgl_data/three-d/pieces/staunton_executive/textures/piece_wood_black.jpg",
						"bundles/web/images/webgl_data/three-d/pieces/staunton_executive/textures/piece_wood_white.jpg": "bundles/web/images/webgl_data/three-d/pieces/staunton_executive/textures/piece_wood_white.jpg",
						"bundles/web/images/webgl_data/three-d/pieces/staunton_executive/textures/queen_shadow.png": "bundles/web/images/webgl_data/three-d/pieces/staunton_executive/textures/queen_shadow.png",
						"bundles/web/images/webgl_data/three-d/pieces/staunton_executive/textures/rook_shadow.png": "bundles/web/images/webgl_data/three-d/pieces/staunton_executive/textures/rook_shadow.png",
						"bundles/web/images/webgl_data/two-d/arcade/capture-hint-hide.svg": "bundles/web/images/webgl_data/two-d/arcade/capture-hint-hide.svg",
						"bundles/web/images/webgl_data/two-d/arcade/capture-hint-out.svg": "bundles/web/images/webgl_data/two-d/arcade/capture-hint-out.svg",
						"bundles/web/images/webgl_data/two-d/arcade/capture-hint-over.svg": "bundles/web/images/webgl_data/two-d/arcade/capture-hint-over.svg",
						"bundles/web/images/webgl_data/two-d/arcade/capture-hint-show.svg": "bundles/web/images/webgl_data/two-d/arcade/capture-hint-show.svg",
						"bundles/web/images/webgl_data/two-d/arcade/king-check.svg": "bundles/web/images/webgl_data/two-d/arcade/king-check.svg",
						"bundles/web/images/webgl_data/two-d/arcade/move-hint-hide.svg": "bundles/web/images/webgl_data/two-d/arcade/move-hint-hide.svg",
						"bundles/web/images/webgl_data/two-d/arcade/move-hint-out.svg": "bundles/web/images/webgl_data/two-d/arcade/move-hint-out.svg",
						"bundles/web/images/webgl_data/two-d/arcade/move-hint-over.svg": "bundles/web/images/webgl_data/two-d/arcade/move-hint-over.svg",
						"bundles/web/images/webgl_data/two-d/arcade/move-hint-show.svg": "bundles/web/images/webgl_data/two-d/arcade/move-hint-show.svg",
						"bundles/web/images/webgl_data/two-d/arcade/piece-capture.svg": "bundles/web/images/webgl_data/two-d/arcade/piece-capture.svg",
						"bundles/web/images/webgl_data/two-d/arcade/piece-grab.svg": "bundles/web/images/webgl_data/two-d/arcade/piece-grab.svg",
						"bundles/web/images/webgl_data/two-d/arcade/piece-release.svg": "bundles/web/images/webgl_data/two-d/arcade/piece-release.svg",
						"bundles/web/images/webgl_data/two-d/arcade/piece-trail.svg": "bundles/web/images/webgl_data/two-d/arcade/piece-trail.svg",
						"bundles/web/images/webgl_data/two-d/arcade/square-fill.svg": "bundles/web/images/webgl_data/two-d/arcade/square-fill.svg",
						"bundles/web/images/webgl_data/two-d/hover-square.png": "bundles/web/images/webgl_data/two-d/hover-square.png",
						"bundles/web/images/webgl_data/two-d/natural/piece-trail-long.png": "bundles/web/images/webgl_data/two-d/natural/piece-trail-long.png",
						"bundles/web/images/webgl_data/two-d/natural/piece-trail.png": "bundles/web/images/webgl_data/two-d/natural/piece-trail.png"
					};
					let t;
					window.Config["domain.static"] && !window.Config.cypress ? t = "https" : t = "http";
					const s = (i, r = !0, o = t) => {
						const u = r ? `${o}:${window.Config["domain.static"]}` : "",
							c = n[i] != null ? n[i] : i;
						return `${u}/${c}`
					}
				},
				63763: function(m, a, e) {
					e.d(a, {
						kt: function() {
							return r
						},
						nl: function() {
							return o
						}
					});
					var n = e(18017);
					async function t(u) {
						await (0, n.K)("Notifs System Prompt Clicked", {
							buttonClicked: u ? "allowNotifs" : "blockNotifs"
						}, {
							pushNotifsEnabled: u
						})
					}
					var s = e(2144);

					function i() {
						return "Notification" in window && !window.Cypress
					}

					function r() {
						if (!i()) return;
						const u = Notification.permission === "default";
						Notification.permission !== "denied" && Notification.permission !== "granted" && Notification.requestPermission().then(c => {
							u && c !== "default" && t(c === "granted")
						})
					}

					function o({
						icon: u = "/bundles/web/favicons/favicon.svg",
						title: c,
						content: l,
						duration: p = 1e4
					}) {
						if (!i() || (0, s.tq)() || document.hasFocus && document.hasFocus() || Notification.permission !== "granted") return;
						const h = new Notification(c, {
							icon: u,
							body: l
						});
						h.addEventListener("click", () => window.focus()), setTimeout(() => h.close(), p)
					}
				},
				2144: function(m, a, e) {
					e.d(a, {
						j7: function() {
							return t
						},
						bM: function() {
							return s
						},
						k_: function() {
							return i
						},
						qD: function() {
							return r
						},
						e0: function() {
							return o
						},
						sJ: function() {
							return u
						},
						kY: function() {
							return p
						},
						Cz: function() {
							return h
						},
						tq: function() {
							return n.t
						},
						qs: function() {
							return y
						}
					});
					var n = e(69046);
					const t = () => encodeURIComponent(window.document.title),
						s = () => encodeURIComponent(window.location.href),
						i = window.location.pathname,
						r = t(),
						o = s(),
						u = () => {
							if (window.sidebar && window.sidebar.addPanel) window.sidebar.addPanel(r, o, "");
							else if (window.external && "AddFavorite" in window.external) window.external.AddFavorite(o, r);
							else {
								const O = window.navigator.userAgent.toLowerCase().indexOf("mac") !== -1 ? "Cmd" : "Ctrl";
								alert(`Press ${O}+D to bookmark this page.`)
							}
						},
						c = {
							chrome: "Chrome",
							edge: "edge",
							firefox: "Firefox",
							ie: "IE",
							safari: "Safari"
						},
						l = {
							chrome: 79,
							edge: 79,
							firefox: 75,
							ie: Number.POSITIVE_INFINITY,
							safari: 13.1
						},
						p = () => {
							window.print()
						},
						h = (O, T) => {
							window.location.href = `mailto:?${O}&${T}`
						},
						_ = (O, T) => T.appVersion.indexOf(O) > -1,
						b = (O = window.navigator.userAgent) => O.match(/Edg/) !== null,
						g = (O = window.navigator.userAgent) => O.match(/Android/) !== null,
						v = (O = window.navigator.userAgent) => Boolean(["macintosh", "iphone", "ipad"].find(T => O.toLowerCase().indexOf(T) >= 0)),
						E = (O = window.navigator.userAgent) => Boolean(["iphone", "ipad"].find(T => O.toLowerCase().indexOf(T) >= 0)),
						y = (O = window.navigator.userAgent) => {
							let T, C = O.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || [];
							if (b(O)) {
								const D = O.indexOf("Edg");
								let L = 4;
								O.match("Edge/") && (L = 5);
								const x = D + L;
								return {
									name: "Edge",
									version: parseInt(O.substring(x, O.indexOf(".", x)), 10)
								}
							}
							return /trident/i.test(C[1]) ? (T = /\brv[ :]+(\d+)/g.exec(O) || [], {
								name: "IE",
								version: parseInt(T[1] || "-1", 10)
							}) : C[1] === c.chrome && (T = O.match(/\bOPR\/(\d+)/), T != null) ? {
								name: "Opera",
								version: parseInt(T[1], 10)
							} : (C = C[2] ? [C[1], C[2]] : [window.navigator.appName, window.navigator.appVersion, "-?"], C[0] === c.safari && (T = O.match(/version\/(\d+)/i), T != null && C.splice(1, 1, T[1])), C[0] === "MSIE" ? {
								name: c.ie,
								version: parseInt(C[1], 10)
							} : {
								name: C[0],
								version: parseInt(C[1], 10)
							})
						},
						w = (O = window.navigator) => _("NT", O) ? _("Windows NT 5.1", O) || _("Windows NT 6.0", O) ? 6 : _("Windows NT 6.1", O) ? 7 : _("Windows NT 6.2", O) || _("Windows NT 6.3", O) ? 8 : 10 : -1,
						P = (O = window.navigator.userAgent) => {
							const T = y(O);
							return T.name == null || T.name.length === 0 ? !1 : Object.keys(c).some(C => T.name.toLowerCase() === c[C].toLowerCase() && T.version < l[C])
						},
						k = O => {
							var T;
							const C = [c.chrome.toLowerCase(), c.edge.toLowerCase(), c.firefox.toLowerCase(), c.safari.toLowerCase()],
								D = y(O);
							return D.name == null || D.name.length === 0 || ((T = C.indexOf) == null ? void 0 : T.call(C, D.name.toLowerCase())) === -1 ? !1 : !P(O)
						}
				},
				69046: function(m, a, e) {
					e.d(a, {
						t: function() {
							return n
						}
					});
					const n = (t = window.navigator.userAgent) => /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(t)
				},
				40192: function(m, a, e) {
					e.d(a, {
						Q: function() {
							return l
						}
					});
					var n = Object.defineProperty,
						t = (p, h, _) => h in p ? n(p, h, {
							enumerable: !0,
							configurable: !0,
							writable: !0,
							value: _
						}) : p[h] = _,
						s = (p, h, _) => (t(p, typeof h != "symbol" ? h + "" : h, _), _);

					function i() {
						const p = "test";
						try {
							return localStorage.setItem(p, p), localStorage.removeItem(p), !0
						} catch {
							return !1
						}
					}
					class r {
						constructor() {
							s(this, "enabled"), this.enabled = i()
						}
						get(h) {
							return JSON.parse(localStorage.getItem(h))
						}
						set(h, _) {
							localStorage.setItem(h, JSON.stringify(_))
						}
					}
					var o = Object.defineProperty,
						u = (p, h, _) => h in p ? o(p, h, {
							enumerable: !0,
							configurable: !0,
							writable: !0,
							value: _
						}) : p[h] = _,
						c = (p, h, _) => (u(p, typeof h != "symbol" ? h + "" : h, _), _);
					class l {
						constructor(h, _ = {}) {
							c(this, "cache"), c(this, "cacheKey"), c(this, "memory"), this.cache = new r, this.cacheKey = h, this.memory = _
						}
						get ready() {
							return this.cache.enabled !== !1
						}
						get(h, _ = null) {
							return this.memory[h] ? this.memory[h] : this.ready ? (this.pull(), typeof this.memory[h] < "u" ? this.memory[h] : _) : _
						}
						pull() {
							return this.memory = this.cache.get(this.cacheKey) || {}, this
						}
						push() {
							return this.cache.set(this.cacheKey, this.memory), this
						}
						remove(h) {
							return this.ready ? (this.pull(), typeof this.memory[h] > "u" ? this : (delete this.memory[h], this.push())) : this
						}
						set(h, _) {
							return this.ready ? (this.pull(), this.memory[h] = _, this.push()) : this
						}
					}
				},
				59781: function(m, a, e) {
					e.d(a, {
						Z: function() {
							return s
						}
					});
					var n = e(40192);
					const t = "json_settings";
					var s = new n.Q(t)
				},
				25557: function(m, a, e) {
					e.d(a, {
						X: function() {
							return r
						}
					});
					var n = e(9669),
						t = e.n(n);
					const s = t().create(),
						i = [/api\.iterable\.com/];

					function r(u) {
						var c;
						if (i.some(p => p.test(u.requestUrl))) return;
						const l = {
							ip: window.context.ip,
							error: {
								message: u.message,
								method: u.method,
								requestHost: (c = u.requestHost) != null ? c : window.location.hostname,
								requestUrl: u.requestUrl,
								stack: u.stack,
								status: u.status,
								type: "HTTP_REQUEST"
							},
							user: window.context.user ? {
								countryCode: window.context.user.country.code,
								id: window.context.user.id,
								membershipCode: window.context.user.membershipCode,
								membershipLevel: window.context.user.membershipLevel,
								timezone: window.context.user.timezone,
								username: window.context.user.username
							} : {},
							userAgent: window.navigator.userAgent
						};
						o(l)
					}

					function o(u) {
						!window.chesscom.features.includes("client_metrics_error_reporting") || s.post(`${window.chesscom.clientMetricsDomain}/error-reporting/web`, u)
					}
				},
				10273: function(m, a, e) {
					e.d(a, {
						D: function() {
							return n
						}
					});

					function n(t) {
						let s = t;
						if (s <= 0) return "0:00";
						let i = 0,
							r = 0,
							o = 0;
						const u = s <= 200;
						return s >= 10 && (o = Math.floor(s / 10), s -= o * 10), o >= 60 && (r = Math.floor(o / 60), o -= r * 60), o < 10 && (o = `0${o}`), r >= 60 && (i = Math.floor(r / 60), r -= i * 60), i ? (r < 10 && (r = `0${r}`), `${i}:${r}:${o}`) : u ? `${r}:${o}.${Math.floor(s)}` : `${r}:${o}`
					}
				},
				38549: function(m, a, e) {
					var n = e(36409);
					a.Z = n.Z
				},
				52152: function(m, a, e) {
					var n = e(111);
					a.Z = n.Z
				},
				60422: function(m, a, e) {
					e.d(a, {
						ej: function() {
							return i
						}
					});
					const n = 90;

					function t(o, u, c) {
						let l = "";
						if (c) {
							const p = new Date;
							p.setTime(p.getTime() + Math.min(n, c) * 24 * 60 * 60 * 1e3), l = `; expires=${p.toUTCString()}`
						}
						document.cookie = `${o}=${u||""}${l}; path=/; samesite=none; secure`
					}

					function s(o) {
						t(o, "", -3650)
					}

					function i(o) {
						const u = {};
						return document.cookie.split("; ").forEach(c => {
							const [l, p] = c.split("=");
							l && p && (u[l] = p)
						}), u[o] || null
					}
					var r = {
						getCookie: i,
						deleteCookie: s,
						setCookie: t
					}
				},
				45478: function(m, a, e) {
					e.d(a, {
						r: function() {
							return i
						}
					});
					var n = e(13920),
						t = e(78345),
						s = e(20629);

					function i(r, o = {}) {
						const u = (0, n.iH)(!1),
							c = document.createElement("div"),
							l = {
								render: () => u.value && (0, n.h)(r, {
									props: o
								})
							};
						let p;
						const h = {
							mount(_) {
								if (u.value = !0, !p) {
									const b = typeof _ == "string" ? document.querySelector(_) : _;
									b && (b.innerHTML = "", b.appendChild(c)), p = new n.ZP(l).$mount(c)
								}
							},
							unmount() {
								u.value = !1
							},
							use(_) {
								return _ instanceof s.ZP.Store ? l.store = _ : _ instanceof t.Z && (n.ZP.use(t.Z), l.router = _), h
							}
						};
						return h
					}
				},
				43667: function(m, a, e) {
					e.d(a, {
						Q: function() {
							return s
						}
					});
					var n = e(45463),
						t = e(13920);

					function s(i) {
						let r, o;
						return (0, n.mf)(i) ? r = i : (r = i.handler, o = i.timeout), new Promise((u, c) => {
							let l;

							function p() {
								l ? l() : setTimeout(p)
							}

							function h(g) {
								u(g), p()
							}

							function _(g) {
								c(g), p()
							}

							function b() {
								r(h, _)
							}(0, n.hj)(o) && setTimeout(_, o, new Error("watcher promise timeout")), l = (0, t.m0)(b)
						})
					}
				},
				1653: function(m, a, e) {
					e.d(a, {
						KZ: function() {
							return i
						},
						Yc: function() {
							return r
						}
					});
					var n = e(57061),
						t = e(60422);
					const s = "dark-mode",
						i = () => document.body.classList.contains(s),
						r = i(),
						o = p => p ? document.body.classList.add(s) : document.body.classList.remove(s),
						u = p => p ? setCookie(constants.USER_COLOR_SCHEME, s, 30) : setCookie(constants.USER_COLOR_SCHEME, "", 30),
						c = p => {
							const _ = window.tinymce;
							_?.editors.forEach(({
								id: b
							}) => {
								p ? (_.get(b).settings.body_class = s, _.get(b).getBody().classList.add(s)) : (_.get(b).settings.body_class = "", _.get(b).getBody().classList.remove(s))
							})
						},
						l = p => {
							const h = document.querySelectorAll("[data-tweet-id]"),
								_ = p ? "theme=light" : "theme=dark",
								b = p ? "theme=dark" : "theme=light";
							h.forEach(g => {
								const v = g.getAttribute(attributes.SRC);
								g.setAttribute(attributes.SRC, v ? v.replace(_, b) : "")
							})
						}
				},
				36075: function(m, a, e) {
					e.d(a, {
						_: function() {
							return n
						}
					});

					function n(t) {
						return Math.floor(new Date(t).valueOf() / 1e3)
					}
				},
				36932: function(m, a, e) {
					e.d(a, {
						w6: function() {
							return n
						}
					});

					function n(i, r = "-") {
						return `${i.getFullYear()}${r}${s(i.getMonth()+1)}${r}${s(i.getDate())}`
					}

					function t(i) {
						const [r, o, u] = i.split("-").map(Number);
						return new Date(r, o - 1, u)
					}

					function s(i) {
						return i < 10 ? `0${i}` : i.toString()
					}
				},
				3491: function(m, a, e) {
					var n = e(45463);
					const t = {
						name: "click-outside",
						bind(s, i) {
							let r, o, u = 1,
								c = "click";
							if ((0, n.mf)(i.value) ? r = i.value : (0, n.Kn)(i.value) && (r = i.value.handler, u = i.value.delay, c = i.value.clickEvent || "click"), !(0, n.mf)(r)) throw new Error("must pass function to click-outside");
							const l = h => h.stopPropagation(),
								p = h => s !== h.target && r(s, h);
							s.$unbindClickOutside && s.$unbindClickOutside(), s.$unbindClickOutside = () => {
								clearTimeout(o), s.removeEventListener(c, l), document.removeEventListener(c, p), delete s.$unbindClickOutside
							}, o = setTimeout(() => {
								s.addEventListener(c, l), document.addEventListener(c, p)
							}, u)
						},
						unbind(s) {
							s.$unbindClickOutside && s.$unbindClickOutside()
						}
					};
					a.Z = t
				},
				13209: function(m, a, e) {
					var n = e(11679);

					function t(u) {
						return this.$lastClickTimestamp ? Date.now() - this.$lastClickTimestamp > 2e3 ? (this.$lastClickTimestamp = Date.now(), !0) : (u.preventDefault(), u.stopPropagation(), !1) : (this.$lastClickTimestamp = Date.now(), !0)
					}
					const s = {
						name: "click-spam",
						bind(u) {
							(0, n.Z)("ClickSpam", u, {
								click: t
							}, {
								capture: !0
							})
						},
						unbind(u) {
							u.$unbindClickSpam && u.$unbindClickSpam()
						}
					};
					let i = 0;
					const r = {},
						o = {
							bind(u) {
								const c = (i++).toString();
								u.setAttribute("data-click-spam-id", c);
								const l = p => {
									var h;
									const _ = Date.now(),
										b = Number((h = u.getAttribute("data-click-spam-timestamp")) != null ? h : 0);
									_ - b > 2e3 ? u.setAttribute("data-click-spam-timestamp", _.toString()) : (p.preventDefault(), p.stopPropagation())
								};
								r[c] = l, u.addEventListener("click", l, {
									capture: !0
								})
							},
							unbind(u) {
								const c = u.getAttribute("data-click-spam-id");
								c && (u.removeEventListener("click", r[c]), delete r[c])
							}
						};
					a.Z = window.chesscom.features.includes("vue_3_click_spam_directive") ? o : s
				},
				79883: function(m, a, e) {
					e.d(a, {
						ZP: function() {
							return O
						},
						u2: function() {
							return k
						}
					});
					var n = function() {
							var C = this,
								D = C._self._c;
							return D("div", {
								staticClass: "tooltip tip vue-tooltip"
							}, [D("div", {
								staticClass: "arrow"
							}), C._v(" "), D("div", {
								ref: "content",
								staticClass: "inner",
								attrs: {
									"data-cy": "tooltip-content"
								}
							})])
						},
						t = [],
						s = e(57061),
						i = e(28971),
						r = e(18370),
						o = e(45463);
					const u = T => (0, o.HD)(T.value) ? {
							content: T.value
						} : T.value,
						c = () => {};
					var l = {
							name: "Tooltip",
							created() {
								this.active = null, this.hideOnDocumentVisibilityChangeHandler = c, this.hideOnScrollHandler = c, this.instances = []
							},
							beforeDestroy() {
								this.instances = null, this.clearTooltip()
							},
							methods: {
								bind(T, C) {
									this.instances.push({
										element: T,
										options: u(C || {
											value: T.getAttribute("title")
										})
									}), T.removeAttribute("title"), T.addEventListener("mouseenter", this.showTooltip), T.addEventListener("focus", this.showTooltip)
								},
								update(T, C) {
									const D = this.instances.find(L => L.element === T);
									!D || (D.options = u(C))
								},
								unbind(T) {
									const C = this.instances.find(D => D.element === T);
									!C || (this.active === C && this.hideTooltip({
										target: C.element
									}), (0, r.A)(this.instances, C), T.removeEventListener("mouseenter", this.showTooltip), T.removeEventListener("focus", this.showTooltip), T.removeEventListener("mouseleave", this.hideTooltip), T.removeEventListener("blur", this.hideTooltip))
								},
								showTooltip({
									target: T
								}) {
									const C = this.instances.find(W => W.element === T);
									if (!C || !C.options || !C.options.content) return;
									const D = C.options.delay || 400,
										L = C.options.position || "top",
										x = C.options.padding || 0;
									this.clearTooltip(), C.element.classList.contains(s.xL.CONFIRM_OPEN) || (this.active = C, C.element.addEventListener("mouseleave", this.hideTooltip), C.element.addEventListener("blur", this.hideTooltip), this.showTimeout = setTimeout(() => {
										this.showFrame = window.requestAnimationFrame(() => {
											this.$refs && this.$refs.content && C.options && (this.$refs.content.textContent = C.options.content), this.$el.classList.add(L), (0, i._O)(C.element, this.$el, L, x)
										})
									}, D)), C.options.closeOnScroll !== !1 && this.hideOnScroll(T), this.hideOnDocumentVisibilityChange(T)
								},
								hideOnDocumentVisibilityChange(T) {
									this.hideOnDocumentVisibilityChangeHandler = () => {
										this.hideTooltip({
											target: T
										})
									}, document.addEventListener("visibilitychange", this.hideOnDocumentVisibilityChangeHandler)
								},
								hideOnScroll(T) {
									this.hideOnScrollHandler = () => {
										this.hideTooltip({
											target: T
										})
									}, window.addEventListener("scroll", this.hideOnScrollHandler)
								},
								hideTooltip({
									target: T
								}) {
									!this.instances.find(D => D.element === T) || (this.clearTooltip(), this.hideFrame = window.requestAnimationFrame(() => {
										this.$refs && this.$refs.content && (this.$refs.content.textContent = null), (0, i.fs)(this.$el)
									}))
								},
								clearTooltip() {
									this.active && (this.active.element.removeEventListener("mouseleave", this.hideTooltip), this.active.element.removeEventListener("blur", this.hideTooltip), this.active = null), clearTimeout(this.showTimeout), window.cancelAnimationFrame(this.hideFrame), window.cancelAnimationFrame(this.showFrame), window.removeEventListener("scroll", this.hideOnScrollHandler), document.removeEventListener("visibilitychange", this.hideOnDocumentVisibilityChangeHandler)
								}
							}
						},
						p = l,
						h = e(51900),
						_ = (0, h.Z)(p, n, t, !1, null, null, null),
						b = _.exports,
						g = e(13920);
					const v = g.ZP.extend(b);
					let E, y = !1;
					const w = () => {
						if (E || (E = new v), !y) {
							const T = document.createElement("div");
							document.body.appendChild(T), E?.$mount(T), y = !0
						}
						return E
					};

					function P() {
						E.$destroy(), y = !1, E = null
					}
					const k = {
						bind: (T, C) => w().bind(T, C),
						componentUpdated: (T, C) => w().update(T, C),
						unbind: (T, C) => w().unbind(T, C)
					};
					var O = k
				},
				52098: function(m, a, e) {
					e.d(a, {
						M: function() {
							return n
						}
					});

					function n(t, s) {
						customElements.get(t) || customElements.define(t, s)
					}
				},
				17869: function(m, a, e) {
					e.d(a, {
						E: function() {
							return n
						}
					});

					function n(t) {
						const s = document.querySelector(`link[data-href*="/${t}.client"]`);
						s && (s.setAttribute("href", s.getAttribute("data-href")), s.removeAttribute("data-href"))
					}
				},
				69839: function(m, a, e) {
					e.d(a, {
						kN: function() {
							return s
						},
						_$: function() {
							return r
						},
						Ux: function() {
							return o
						},
						sY: function() {
							return u
						},
						nj: function() {
							return c
						}
					});
					var n = e(59781),
						t = e(13920);
					const s = (0, t.qj)({
							isCommentsCheckboxVisible: !1,
							isHighlightsCheckboxVisible: !1,
							isAnalyzedPgnCheckboxVisible: !1
						}),
						i = "shareModalPgnOptions",
						r = (0, t.qj)(Object.assign({
							isAnalyzedPgnEnabled: !1,
							isCommentsEnabled: !0,
							isHighlightsEnabled: !1,
							isTimestampsEnabled: !1
						}, n.Z.get(i)));

					function o(l) {
						Object.keys(l).forEach(p => {
							r[p] = Boolean(l[p])
						}), n.Z.set(i, {
							...n.Z.get(i),
							...l
						})
					}

					function u(l) {
						Object.keys(l).forEach(p => {
							s[p] = l[p]
						})
					}
					const c = ({
						isCommentsEnabled: l,
						isHighlightsEnabled: p,
						isTimestampsEnabled: h
					}) => {
						const _ = !l,
							b = [];
						return h && b.push("clk", "timestamp"), p && b.push("c_effect", "c_arrow", "c_highlight"), {
							hideComments: _,
							restrictCommands: b
						}
					}
				},
				38632: function(m, a, e) {
					e.d(a, {
						x: function() {
							return n
						}
					});

					function n() {
						var t;
						return (t = window.context) == null ? void 0 : t.user
					}
				},
				70913: function(m, a, e) {
					e.d(a, {
						i: function() {
							return s
						}
					});
					var n = e(63966),
						t = e(66103);
					const s = r => {
							if (!(!r.response || r.response.status === 401)) return (r.response.data && r.response.data.message ? r.response.data.message : n.R0.badRequest) || r.response.statusText
						},
						i = r => s(r) || Translator.trans("An error occurred")
				},
				92005: function(m, a, e) {
					e.d(a, {
						Z: function() {
							return Z
						}
					});
					var n = e(9669),
						t = e.n(n),
						s = t();

					function i(A) {
						return r(A) || o(A) || u(A)
					}

					function r(A) {
						return A.startsWith("/service/") || A.includes(".com/service/")
					}

					function o(A) {
						return A.includes("chessbomb.com")
					}

					function u(A) {
						return /https:\/\/(?!www)([\S]+)chess.com/.test(A)
					}
					const c = ["delete", "patch", "post", "put"];

					function l(A) {
						return !A || i(A.url) || !c.includes(A.method) || (A.data instanceof FormData || A.data instanceof URLSearchParams ? A.data.append("_token", window.context.csrf.token) : A.data = Object.assign({
							_token: window.context.csrf.token
						}, A.data || {})), A
					}
					var p = e(64910);
					const h = () => Math.random().toString(36).substring(2, 15),
						_ = A => {
							let S = h();
							for (; S.length < A;) S += h();
							return S.substring(0, A)
						},
						b = () => {
							const A = document.getElementById(p.GO.NAV_ROOT);
							return A ? Boolean(A.dataset.featureClientRequestId) : !1
						};

					function g(A) {
						return b() && (A.headers.common["X-Chesscom-Request-Id"] = _(32)), A
					}
					const v = A => (Object.keys(A).forEach(S => {
						const j = A[S];
						typeof j == "boolean" && (A[S] = Number(j)), typeof j == "object" && j !== null && (A[S] = v(j))
					}), A);

					function E(A) {
						return !A || i(A.url) || typeof A.data == "object" && (A.data = v(A.data)), A
					}
					var y = [l, g, E],
						w = e(25557);

					function P(A) {
						const S = A.config,
							j = A.response;
						if (A.toString() === "Cancel") return Promise.reject(A);
						try {
							S.data = JSON.parse(S.data)
						} catch {
							return Promise.reject(A)
						}
						if (j && j.status === 403 && j.headers["x-chesscom-csrf-token"] && S && !S.data.retry) {
							const J = j.headers["x-chesscom-csrf-token"];
							return S.data._token = J, S.data.retry = !0, window.context.csrf.token = J, s(S)
						}
						if (j?.status >= 400) try {
							(0, w.X)({
								message: A.message,
								method: A.config.method,
								requestUrl: A.config.url.replace("https://www.chess.com"),
								stack: A.stack,
								status: A.response.status
							})
						} catch {}
						return Promise.reject(A)
					}
					var k = e(56712),
						O = e(47239);
					async function T(A) {
						if (!await (0, O.U)()) return;
						(await (0, k.m)()).configureScope(j => {
							Object.keys(A).forEach(J => {
								j.setExtra(J, A[J])
							})
						})
					}
					const C = ({
							key: A,
							value: S
						}) => {
							window.chesscom || (window.chesscom = {}), window.chesscom[A] || (window.chesscom[A] = S)
						},
						D = () => {
							C({
								key: "logData",
								value: {}
							})
						},
						L = ({
							key: A,
							value: S
						}) => {
							D(), window.chesscom.logData[A] = S, T({
								[A]: S
							})
						},
						x = ({
							key: A,
							value: S
						}) => {
							D();
							const j = window.chesscom.logData[A] || [];
							Array.isArray(j) ? window.chesscom.logData[A] = [...j, S] : window.chesscom.logData[A] = [j, S]
						},
						W = () => {
							D(), window.chesscom.logData = {}
						};

					function z(A) {
						return A.headers && A.headers["x-chesscom-request-id-cdn"] && (L({
							key: "x-chesscom-request-id-cdn",
							value: A.headers["x-chesscom-request-id-cdn"]
						}), L({
							key: "x-chesscom-request-id-lb",
							value: A.headers["x-chesscom-request-id-lb"]
						})), A
					}

					function F(A, S) {
						var j;
						if (!S.name) throw new Error("interceptor must be a named function");
						return (j = A.handlers) == null ? void 0 : j.find(J => {
							var _e;
							return ((_e = J.fulfilled) == null ? void 0 : _e.name) === S.name
						})
					}

					function V(A) {
						y.forEach(S => {
							F(A.interceptors.request, S) || A.interceptors.request.use(S)
						}), F(A.interceptors.response, z) || A.interceptors.response.use(z, P)
					}
					V(s);
					var Z = s
				},
				86880: function(m, a, e) {
					e.d(a, {
						p6: function() {
							return u
						},
						uf: function() {
							return c
						},
						mr: function() {
							return l
						}
					});
					var n = e(57061),
						t = e(66103);

					function s(h = "", _ = "-") {
						return (h || (Object.prototype.hasOwnProperty.call(window, "context") ? window.context.i18n.locale : "en-US")).replace("_", _)
					}
					const i = () => {
						switch (new Date().getMonth()) {
							case 3:
							case 5:
							case 8:
							case 10:
								return 864e5 * 30;
							case 1:
								return new Date().getFullYear() % 4 === 0 ? 864e5 * 29 : 864e5 * 28;
							default:
								return 864e5 * 31
						}
					};

					function r(h, _, b) {
						return h === "year" ? _ ? t.Z.transChoice("{1} 1 year ago|]1,Inf] %1$s% years ago", b, {
							"%1$s%": b
						}) : t.Z.transChoice("{1} 1 year|]1,Inf] %1$s% years", b, {
							"%1$s%": b
						}) : h === "month" ? _ ? t.Z.transChoice("{1} 1 month ago|]1,Inf] %1$s% months ago", b, {
							"%1$s%": b
						}) : t.Z.transChoice("{1} 1 month|]1,Inf] %1$s% months", b, {
							"%1$s%": b
						}) : h === "day" ? _ ? t.Z.transChoice("{1} 1 day ago|]1,Inf] %1$s% days ago", b, {
							"%1$s%": b
						}) : t.Z.transChoice("{1} 1 day|]1,Inf] %1$s% days", b, {
							"%1$s%": b
						}) : h === "hour" ? _ ? t.Z.transChoice("{1} 1 hour ago|]1,Inf] %1$s% hours ago", b, {
							"%1$s%": b
						}) : t.Z.transChoice("{1} 1 hour|]1,Inf] %1$s% hours", b, {
							"%1$s%": b
						}) : h === "minute" ? _ ? t.Z.transChoice("{1} 1 minute ago|]1,Inf] %1$s% minutes ago", b, {
							"%1$s%": b
						}) : t.Z.transChoice("{1} 1 minute|]1,Inf] %1$s% minutes", b, {
							"%1$s%": b
						}) : ""
					}
					const o = {
							year: 31536e6,
							month: i(),
							day: 864e5,
							hour: 36e5,
							minute: 6e4
						},
						u = {
							mergeOptions(h) {
								return {
									abbreviateHours: !1,
									abbreviateMinutes: !0,
									includeDays: !1,
									...h
								}
							},
							getUnitsInInt(h, _ = {}) {
								const b = u.mergeOptions(_),
									g = 86400,
									v = 3600,
									E = 60;
								let y = 0,
									w = 0,
									P = 0,
									k = h;
								return b.includeDays === !0 && (y = Math.floor(k / g), k -= y * g), w = Math.floor(k / v), k -= w * v, P = Math.floor(k / E), {
									minutes: P,
									hours: w,
									days: y
								}
							},
							getDaysHoursMinutesAsString(h, _ = {}) {
								const b = u.getDaysHoursMinutesAsObject(h, _),
									{
										minutes: g,
										hours: v,
										days: E
									} = u.getUnitsInInt(h, _),
									y = [];
								return E > 0 && y.push(b.days), v > 0 && y.push(b.hours), (g > 0 || y.length === 0) && y.push(b.minutes), y.join(" ")
							},
							getDaysHoursMinutesAsObject(h, _ = {}) {
								const b = u.mergeOptions(_),
									{
										minutes: g,
										hours: v,
										days: E
									} = u.getUnitsInInt(h, _),
									y = t.Z.transChoice("{0} 0 days|{1} 1 day|]1,Inf] %1$s% days", E, {
										"%1$s%": E
									});
								let w = t.Z.transChoice("{0} 0 hours|{1} 1 hour|]1,Inf] %1$s% hours", Math.floor(v), {
										"%1$s%": v
									}),
									P = t.Z.transChoice("{0} 0 min|{1} 1 min|]1,Inf] %1$s% min", g, {
										"%1$s%": g
									});
								return b.abbreviateHours && (w = t.Z.transChoice("{0} 0 hrs|{1} 1 hr|]1,Inf] %1$s% hrs", Math.floor(v), {
									"%1$s%": v
								})), b.abbreviateMinutes || (P = t.Z.transChoice("{1} 1 minute|]1,Inf] %1$s% minutes", g, {
									"%1$s%": g
								})), {
									days: y,
									hours: w,
									minutes: P
								}
							},
							long: (h = new Date, _ = {}) => {
								const b = h instanceof Date ? h : new Date(h),
									g = {
										year: "numeric",
										month: "short",
										day: "numeric"
									};
								return new Intl.DateTimeFormat(s(), {
									...g,
									..._
								}).format(b)
							},
							full: (h = new Date, _ = {}) => {
								const b = h instanceof Date ? h : new Date(h),
									g = {
										year: "numeric",
										month: "short",
										day: "numeric",
										hour: "numeric",
										minute: "numeric",
										second: "numeric",
										timeZoneName: "short"
									};
								return new Intl.DateTimeFormat(s(), {
									...g,
									..._
								}).format(b)
							},
							numeric: (h = new Date, _ = {}) => {
								const b = h instanceof Date ? h : new Date(h);
								if (window.Intl) {
									const E = s();
									return new Intl.DateTimeFormat(E, Object.assign({
										day: "2-digit",
										month: "2-digit",
										year: "numeric"
									}, _)).format(b)
								}
								const g = `0${b.getMonth()+1}`.slice(-2),
									v = `0${b.getDate()}`.slice(-2);
								return `${g}/${v}/${b.getFullYear()}`
							},
							relative: (h, _ = !0, b = !0, g = !1, v = Date.now()) => {
								let E, y;
								const P = (h instanceof Date ? h : new Date(h)).getTime(),
									k = g ? P - v : v - P;
								if (Math.abs(k) > o.month && _) {
									const T = {
										year: "numeric",
										month: "short",
										day: "numeric"
									};
									return new Intl.DateTimeFormat(s(), T).format(P)
								}
								if (k >= o.year) y = "year", E = Math.abs(Math.floor(k / o.year));
								else if (k >= o.month) y = "month", E = Math.abs(Math.floor(k / o.month));
								else if (k >= o.day) y = "day", E = Math.abs(Math.floor(k / o.day));
								else if (k >= o.hour) y = "hour", E = Math.abs(Math.floor(k / o.hour));
								else if (k >= o.minute) y = "minute", E = Math.abs(Math.floor(k / o.minute));
								else return g ? t.Z.trans("Right now") : t.Z.trans("Just now");
								const O = Math.abs(k) === k;
								return r(y, O && b, E)
							},
							customNumericDate: (h = new Date, _ = "/", b = "m/d/y") => {
								const g = h instanceof Date ? h : new Date(h),
									v = {
										d: `0${g.getDate()}`.slice(-2),
										m: `0${g.getMonth()+1}`.slice(-2),
										y: `${g.getFullYear()}`
									};
								return ["m", "d", "y"].every(w => b.split("/").includes(w)) ? b.split("/").reduce((w, P) => (w.push(v[P]), w), []).join(_) : `${v.m}${_}${v.d}${_}${v.y}`
							},
							userDate: h => {
								const _ = window.context.user ? new Date(h * 1e3).toLocaleString("en-US", {
										timeZone: window.context.user.timezone
									}) : new Date(h * 1e3),
									b = new Date(_).setMilliseconds(0),
									g = new Date(b),
									v = n.Iz.daysOfWeek[g.getDay()],
									E = g.getDate(),
									y = n.Iz.months[g.getMonth()],
									w = g.toLocaleTimeString(s()),
									P = w.split(" ").length > 1 ? w.split(" ")[1] : "",
									k = w.split(" ")[0].split(":");
								k.pop();
								const O = k.join(":");
								return `${v}, ${y} ${E}, ${O}${P}`
							}
						};

					function c(h, _ = "", b = {}) {
						return new Intl.NumberFormat([s(_), "en-US"], b).format(h)
					}

					function l(h, _ = 0) {
						if (h < 0 || h == null) return "";
						const g = (h % 1e3 / 1e3).toFixed(_ + 1).slice(2, _ + 2),
							v = Math.floor(h / 1e3),
							E = Math.floor(v / 60),
							y = Math.floor(E / 60),
							w = E % 60,
							P = w < 10 && y ? `0${w}` : w,
							k = v % 60,
							O = k < 10 ? `0${k}` : k;
						let T = `${P}:${O}`;
						return y && (T = `${y}:${T}`), _ && (T = `${T}.${g}`), T
					}
					var p = {
						formatDate: u,
						getLocale: s,
						formatNumber: c,
						formatTime: l
					}
				},
				4143: function(m, a, e) {
					e.d(a, {
						q: function() {
							return n
						},
						b: function() {
							return t
						}
					});
					const n = (s, i) => {
							if (!s) return;
							let r = "@2x";
							return /\.svg$/.test(s) ? s : ([1.5, 3, 4].indexOf(i) > -1 && (r = `@${i}x`), s.replace(/(\.\w+)$/, o => r + o))
						},
						t = s => {
							if (!s) return;
							const i = s.substring(s.lastIndexOf("/") + 1),
								r = s.replace(i, "");
							return `${s}, ${r}${n(i)} 2x`
						}
				},
				94068: function(m, a, e) {
					var n = e(6936);
					a.Z = () => window.location.href.indexOf(n.Z.generate("web_2fa_login")) !== -1
				},
				91008: function(m, a, e) {
					e.d(a, {
						H: function() {
							return n
						}
					});

					function n() {
						return "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1"
					}
				},
				46233: function(m, a, e) {
					e.d(a, {
						M: function() {
							return r
						}
					});
					var n = e(3527),
						t = e.n(n),
						s = e(91008);

					function i(o) {
						switch (o) {
							case "chess":
								return "Chess";
							case "chess960":
								return "Chess960";
							case "crazyhouse":
								return "Crazyhouse";
							case "bughouse":
								return "Crazyhouse";
							case "threecheck":
								return "3-check";
							case "kingofthehill":
								return "King of the Hill";
							default:
								return "Chess"
						}
					}

					function r({
						moves: o,
						variant: u,
						gameType: c,
						initialPosition: l
					}) {
						return t().getFenFromMoves(l || (0, s.H)(), t().decodeTCN(o), u || i(c))
					}
				},
				29586: function(m, a, e) {
					e.d(a, {
						Q: function() {
							return n
						},
						P: function() {
							return t
						}
					});
					const n = (s, ...i) => JSON.parse(s, ...i),
						t = (s, ...i) => JSON.stringify(s, ...i)
				},
				34308: function(m, a, e) {
					e.d(a, {
						k: function() {
							return n
						}
					});

					function n(t) {
						var s, i, r;
						const u = /^PT(?:(\d+)H)?(?:(\d+)M)?(?:(\d+(?:\.\d{1,3})?)S)?$/.exec(t);
						return u ? Number((s = u[1]) != null ? s : 0) * 60 * 60 + Number((i = u[2]) != null ? i : 0) * 60 + Number((r = u[3]) != null ? r : 0) : 0
					}
				},
				30025: function(m, a, e) {
					e.d(a, {
						x: function() {
							return s
						}
					});
					var n = e(45463),
						t = e(44039);
					async function s(i, r) {
						let o, u = r.attempts,
							c = null;
						for (; u > 0;) {
							u--;
							try {
								o = await i(), c = null, u = 0
							} catch (l) {
								c = l;
								const p = r.attempts - u;
								r.captureError && r.captureError(c, p), u > 0 && ((0, n.hj)(r.delay) && r.delay > 0 ? await (0, t.D)(r.delay) : (0, n.mf)(r.delay) && await (0, t.D)(r.delay(p)))
							}
						}
						if (c) throw c;
						return o
					}
				},
				6936: function(m, a, e) {
					e.d(a, {
						Z: function() {
							return o
						}
					});
					var n = e(35889),
						t = e.n(n);

					function s() {
						return t()
					}

					function i(u) {
						var c, l, p;
						const h = s();
						if (!h.routes_[u]) {
							try {
								Object.assign(h.context_, {
									base_url: "",
									prefix: "",
									host: "www.chess-dev.com",
									port: "",
									scheme: "https",
									locale: ""
								})
							} catch {}
							if (Object.isFrozen(h.routes_) && (h.routes_ = Object.assign({}, h.routes_)), (l = (c = window.chesscom) == null ? void 0 : c.routes) != null && l[u]) {
								const _ = window.chesscom.routes[u],
									b = ".chess-dev.com",
									g = window.location.host.replace(/^[^.]+/, "");
								g && ((p = _.hosttokens) == null || p.forEach(v => {
									v.forEach((E, y) => {
										E.includes(b) && (v[y] = E.replace(b, g))
									})
								})), h.routes_[u] = _
							}
						}
					}
					class r {
						generate(c, l, p) {
							const h = l || {};
							typeof h.username == "string" && (h.username = h.username.toLowerCase()), i(c);
							try {
								return s().generate(c, h, p)
							} catch {
								const b = new Error(`Couldn't find missing route '${c}'.`);
								return console.error(b), "/"
							}
						}
						i18nable(c) {
							return `i18n_${c}` in window.chesscom.routes
						}
						i18n(c, l, p) {
							var h, _;
							let b = c;
							const g = l || {};
							if (((_ = (h = window.context) == null ? void 0 : h.route) == null ? void 0 : _.startsWith("i18n")) && this.i18nable(c)) {
								const E = "_locale";
								g[E] = window.context.locale.slice(0, 2), b = `i18n_${c}`
							}
							const v = this.generate(b, g, p);
							return p ? v : v.replace(/^.*\/\/[^/]+/, "")
						}
					}
					var o = new r
				},
				46238: function(m, a, e) {
					e.d(a, {
						T: function() {
							return i
						}
					});
					var n = e(56712),
						t = e(47239);
					async function s(r = 0) {
						var o;
						if (!await (0, t.U)()) return;
						window.chesscom.sudoEnableSentry = !0;
						const u = await (0, n.m)();
						for (;
							(o = window.chesscom.queuedSentryReports) != null && o.length;) u.captureException(window.chesscom.queuedSentryReports.shift());
						if (r > 0) {
							const c = Date.now() + r * 24 * 60 * 60 * 1e3;
							window.localStorage.setItem("enableSentryUntil", c.toString())
						}
					}
					async function i(r, o) {
						if (!await (0, t.U)()) return;
						s();
						const u = await (0, n.m)(),
							c = r instanceof Error ? r : new Error(r);
						o ? u.withScope(l => {
							Object.keys(o).forEach(p => l.setExtra(p, o[p])), u.captureException(c)
						}) : u.captureException(c)
					}
				},
				56712: function(m, a, e) {
					e.d(a, {
						m: function() {
							return n
						}
					});
					async function n() {
						return e.e(7631).then(e.bind(e, 26048))
					}
				},
				47239: function(m, a, e) {
					e.d(a, {
						U: function() {
							return t
						}
					});
					var n = e(56712);
					async function t() {
						try {
							const s = await (0, n.m)();
							return Boolean(s.getCurrentHub().getClient())
						} catch {
							return !1
						}
					}
				},
				3922: function(m, a, e) {
					e.d(a, {
						M: function() {
							return n
						}
					});
					const n = (i, r) => [i, t(i, r)],
						t = (i, r) => {
							switch (i) {
								case "coordinates":
									return s(r);
								default:
									return r
							}
						},
						s = i => ["off", "inside", "outside"].includes(i) ? ["off", "inside", "outside"].indexOf(i) : i
				},
				78803: function(m, a, e) {
					e.d(a, {
						R: function() {
							return s
						}
					});
					var n = e(33618),
						t = e(20584);
					const s = u => Object.entries(u).reduce((c, [l, p]) => {
							const [h, _] = i(l, p);
							return c[h] = _, c
						}, {}),
						i = (u, c) => {
							const l = r(u);
							return [l, o(l, c)]
						},
						r = u => {
							switch (u) {
								case "animationType":
									return "board.animation_type";
								case "boardStyle":
									return "board.board_style";
								case "coordinates":
									return "board.coordinates";
								case "highlightLegalMoves":
									return "board.show_legal_moves";
								case "highlightMoves":
									return "board.highlight_moves";
								case "isWhiteOnBottom":
									return "board.white_always_on_bottom";
								case "moveListDisplayType":
									return "board.move_list_style";
								case "moveMethod":
									return "board.move_method";
								case "pieceStyle":
									return "board.pieces_style";
								case "playSounds":
									return "board.play_sounds";
								case "soundTheme":
									return "board.sound_theme";
								case "showTimestamps":
									return "gameplay.show_timestamps";
								default:
									return u
							}
						},
						o = (u, c) => {
							switch (u) {
								case "board.pieces_style":
									return c === "modern2" ? "modern" : c;
								case "board.animation_type":
									return (0, n.C)(c);
								case "board.move_method":
									return (0, t.N)(c);
								case "board.coordinates":
									return ["off", "inside", "outside"].includes(c) ? c : ["off", "inside", "outside"][c];
								default:
									return c
							}
						}
				},
				33618: function(m, a, e) {
					e.d(a, {
						C: function() {
							return n
						},
						E: function() {
							return t
						}
					});

					function n(s) {
						return !s || s === "default" ? "medium" : s
					}

					function t(s) {
						return !s || s === "medium" || s === "battle" ? "default" : s
					}
				},
				20584: function(m, a, e) {
					e.d(a, {
						z: function() {
							return n
						},
						N: function() {
							return t
						}
					});

					function n(s) {
						switch (s) {
							case "drag_only":
								return "drag-only";
							case "click":
								return "click";
							case "drag":
							default:
								return "drag"
						}
					}

					function t(s) {
						switch (s) {
							case "click":
								return "click";
							case "drag-only":
								return "drag_only";
							case "drag":
							default:
								return "drag"
						}
					}
				},
				11679: function(m, a, e) {
					e.d(a, {
						Z: function() {
							return n
						}
					});

					function n(t, s, i, r) {
						const o = `$unbind${t}`;
						s[o] && s[o](), Object.keys(i).forEach(u => {
							s.addEventListener(u, i[u], r)
						}), s[o] = () => {
							Object.keys(i).forEach(u => {
								s.removeEventListener(u, i[u]), delete i[u]
							}), delete s[o]
						}
					}
				},
				98134: function(m, a, e) {
					e.d(a, {
						i5: function() {
							return n
						},
						dO: function() {
							return t
						},
						N7: function() {
							return s
						},
						uH: function() {
							return i
						},
						Yk: function() {
							return r
						},
						so: function() {
							return o
						},
						fQ: function() {
							return u
						}
					});
					const n = 3,
						t = {
							SOUND_SUSPENDED: "sound-suspended",
							SOUND_ENABLED: "sound-enabled"
						},
						s = ["webm", "ogg", "mp3", "wav"],
						i = "default",
						r = "//images.chesscomfiles.com/chess-themes/sounds",
						o = ["move-check", "premove", "capture", "castle", "game-end", "game-start", "promote", "move-opponent", "move-self"],
						u = o.concat(["click", "correct", "drawoffer", "illegal", "incorrect", "notify", "tenseconds"])
				},
				75053: function(m, a, e) {
					e.d(a, {
						U: function() {
							return s
						}
					});
					var n = e(98134);

					function t(i, r, o = n.uH) {
						return `${n.Yk}/_${r.toUpperCase()}_/${o}/${i}.${r}`
					}

					function s(i, r) {
						return n.so.includes(i) ? n.N7.map(o => t(i, o, r)) : n.fQ.includes(i) ? n.N7.map(o => t(i, o)) : [`/bundles/web/sounds/${i}.mp3`]
					}
				},
				38135: function(m, a, e) {
					e.d(a, {
						xB: function() {
							return t
						},
						eA: function() {
							return s
						}
					});
					const n = null,
						t = ["1d", "3d", "7d", "2d", "5d", "14d"],
						s = [`${1*60}`, `${1*60}|1`, `${2*60}|1`, "30", "20|1", `${3*60}`, `${3*60}|2`, `${5*60}`, `${5*60}|5`, `${5*60}|2`, `${10*60}`, `${15*60}|10`, `${30*60}`, `${10*60}|5`, `${20*60}`, `${60*60}`],
						i = s.slice(0, 5),
						r = null,
						o = null
				},
				39059: function(m, a, e) {
					e.d(a, {
						f: function() {
							return n
						}
					});

					function n(t) {
						return t.baseTime + Number(t.timeIncrement) * 40
					}
				},
				15413: function(m, a, e) {
					e.d(a, {
						G: function() {
							return t
						}
					});
					var n = e(3832);

					function t(s, i = "chess") {
						return i !== "chess" && i !== "oddschess" ? i : (0, n.L)(s)
					}
				},
				31619: function(m, a, e) {
					e.d(a, {
						N: function() {
							return t
						}
					});
					var n = e(3832);

					function t(s, i = "chess") {
						return i === "chess960" ? s.timeType === "live" ? "live960" : "chess960" : i !== "chess" ? i : (0, n.L)(s)
					}
				},
				5148: function(m, a, e) {
					e.d(a, {
						X: function() {
							return t
						}
					});
					var n = e(15875);

					function t(s) {
						const {
							baseTime: i,
							timeIncrement: r,
							timeType: o
						} = s;
						if (o === "none") return "--";
						if (o === "daily") return (0, n.jn)("{1} 1 day|]1,Inf] %1$s% days", i, {
							"%1$s%": i
						}).trim();
						if (r && i < 60) return `${(0,n.jn)("{1} 1 sec|]1,Inf] %1$s% sec",Number(i.toFixed(0)),{"%1$s%":i.toFixed(0)}).trim()} | ${r.toFixed(0)}`;
						const u = i % 60;
						return r && i ? u > 0 ? `${Math.floor(i/60)}:${String(u).padStart(2,"0")} | ${r.toFixed(0)}` : `${(i/60).toFixed(0)} | ${r.toFixed(0)}` : i < 60 ? (0, n.jn)("{1} 1 sec|]1,Inf] %1$s% sec", Number(i.toFixed(0)), {
							"%1$s%": i.toFixed(0)
						}).trim() : u > 0 ? `${Math.floor(i/60)}:${String(u).padStart(2,"0")}` : (0, n.jn)("{1} 1 min|]1,Inf] %1$s% min", Number((i / 60).toFixed(0)), {
							"%1$s%": (i / 60).toFixed(0)
						}).trim()
					}
				},
				93485: function(m, a, e) {
					e.d(a, {
						n: function() {
							return s
						}
					});
					var n = e(3832),
						t = e(15875);

					function s(i) {
						switch ((0, n.L)(i)) {
							case "daily":
								return (0, t.dW)("daily", {}, "mobile");
							case "blitz":
								return (0, t.dW)("Blitz");
							case "rapid":
								return (0, t.dW)("Rapid");
							case "bullet":
								return (0, t.dW)("Bullet");
							default:
								return ""
						}
					}
				},
				3832: function(m, a, e) {
					e.d(a, {
						L: function() {
							return s
						}
					});
					const n = 3 * 60,
						t = 10 * 60;

					function s(i) {
						if (i.timeType === "daily") return "daily";
						const {
							baseTime: r,
							timeIncrement: o
						} = i, u = Number(r), c = o ? 1 * o : 0, l = u + 40 * c;
						return l < n ? "bullet" : l >= t ? "rapid" : "blitz"
					}
				},
				83187: function(m, a, e) {
					e.d(a, {
						B: function() {
							return n
						}
					});

					function n(t) {
						let s = "600",
							i = 600,
							r = 0,
							o = "live",
							u;
						switch (typeof t) {
							case "string":
								t.includes("d") ? (i = Number(t.replace("d", "")), o = "daily") : /^[0-9]+\/[0-9]+$/.test(t) ? (i = Number(t.split(/\//).pop()) / 86400, o = "daily") : (u = t.split(/\+|\|/), i = Number(u[0]), r = Number(u[1] || 0));
								break;
							case "object":
								i = Number(t.baseTime || 0), r = Number(t.timeIncrement || 0), o = t.timeType || o;
								break;
							case "number":
								i = t;
								break;
							default:
								break
						}
						return (!r || r < 0 || r > 60) && (r = 0), i > 7200 && (i = 7200), o === "daily" ? s = `${i}d` : r ? s = `${i}|${r}` : s = `${i}`, {
							key: s,
							baseTime: i,
							timeIncrement: r,
							timeType: o
						}
					}
				},
				22505: function(m, a, e) {
					e.d(a, {
						F: function() {
							return t
						}
					});
					var n = e(83187);

					function t(s, i) {
						const r = (0, n.B)(s),
							o = (0, n.B)(i);
						return !(r.timeType !== o.timeType || r.baseTime !== o.baseTime || r.timeIncrement && r.timeIncrement !== o.timeIncrement || o.timeIncrement && o.timeIncrement !== r.timeIncrement)
					}
				},
				69562: function(m, a, e) {
					e.d(a, {
						DY: function() {
							return h
						},
						w4: function() {
							return b
						},
						dL: function() {
							return g
						}
					});
					var n = e(66103);
					const t = v => Math.round(v / 60 / 1e3),
						s = v => Math.round(v / 1e3),
						i = ({
							padSeconds: v = !1,
							seconds: E
						}) => {
							const y = Math.ceil(E),
								w = Math.floor(y / 60);
							let P = y % 60;
							return v && (P = `0${P}`, P = P.substring(P.length - 2)), {
								mins: w,
								secs: P
							}
						},
						r = v => {
							const {
								mins: E,
								secs: y
							} = i({
								padSeconds: !0,
								seconds: v
							});
							return `${E}:${y}`
						},
						o = v => {
							const E = Math.ceil(v);
							let y = Math.floor(E / (3600 * 24)),
								w = Math.floor(E % (3600 * 24) / 3600),
								P = Math.ceil(E % 3600 / 60);
							return P === 60 && (P = 0, w += 1), w === 24 && (w = 0, y += 1), {
								days: y,
								hours: w,
								minutes: P
							}
						},
						u = v => {
							const E = Math.floor(v / 60),
								y = (v - E * 60).toFixed(1);
							return E === 0 ? y : `${E}:${`0${y}`.substr(-4)}`
						},
						c = v => {
							const {
								days: E,
								hours: y,
								minutes: w
							} = o(v), P = E > 0 ? Translator.transChoice("{1} 1 day|]1,Inf] %1$s% days", E, {
								"%1$s%": E
							}) : "", k = y > 0 ? Translator.transChoice("{1} 1 hr|]1,Inf] %1$s% hrs", y, {
								"%1$s%": y
							}) : "", O = w > 0 ? Translator.transChoice("{1} 1 min|]1,Inf] %1$s% mins", w, {
								"%1$s%": w
							}) : "";
							return E ? P : y ? k : O
						},
						l = v => {
							const {
								days: E,
								hours: y,
								minutes: w
							} = o(v), P = E > 0 ? `${Translator.transChoice("{1} 1 day|]1,Inf] %1$s% days",E,{"%1$s%":E})}${y>0||w>0?", ":""}` : "", k = y > 0 ? `${Translator.transChoice("{1} 1 hour|]1,Inf] %1$s% hours",y,{"%1$s%":y})}${w>0?", ":""}` : "", O = w > 0 ? `${Translator.transChoice("{1} 1 minute|]1,Inf] %1$s% minutes",w,{"%1$s%":w})}` : "";
							return `${P}${k}${O}`
						},
						p = v => Math.round(v / 100),
						h = v => Math.round(v * 10),
						_ = v => Math.round(v * 100),
						b = v => Math.round(v * 1e3),
						g = v => Math.round(v / 10)
				},
				6182: function(m, a, e) {
					var n = e(15875);
					a.Z = {
						methods: {
							$trans: n.dW,
							$transChoice: n.jn
						}
					}
				},
				15875: function(m, a, e) {
					e.d(a, {
						dW: function() {
							return l
						},
						jn: function() {
							return p
						},
						$H: function() {
							return g
						}
					});
					var n = e(72475),
						t = e.n(n),
						s, i;
					const r = ((i = (s = window.context) == null ? void 0 : s.i18n) == null ? void 0 : i.locale) === "fr_FR";
					t().placeHolderPrefix = "", t().placeHolderSuffix = "";
					const o = v => v.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&"),
						u = v => {
							const E = {};
							return v !== null && typeof v < "u" && Object.keys(v).forEach(y => {
								const w = o(y);
								w != null && w.length > 0 && (E[w] = v[y])
							}), E
						},
						c = (v, E = "messages", y) => {
							if (window.chesscom_translations && window.chesscom_translations[E] && window.chesscom_translations[E][v]) return window.chesscom_translations[E][v];
							if (window.chesscom_live_translations && window.chesscom_live_translations[E] && window.chesscom_live_translations[E][v]) return window.chesscom_live_translations[E][v];
							if (E === "live" && window.i18n_phrases && window.i18n_phrases[v]) return window.i18n_phrases;
							if (E === "countries" && window.Country && window.Country[v]) return window.Country;
							if (!y) return E !== "javascript" ? c(v, "javascript") : v
						},
						l = (v, E, y) => t().trans(c(v, y), u(E), y),
						p = (v, E, y, w) => {
							if (typeof E > "u") return "";
							const P = c(v, w),
								k = u(y);
							return r ? h(P, E, k, w) : t().transChoice(P, E, k)
						};

					function h(v, E, y, w) {
						const [P, k, O] = v.split("|").map(T => T.trim());
						return E === 0 || E === 1 ? t().trans(P, y, w) : E % 1e6 === 0 ? t().trans(k, y, w) : t().trans(O, y, w)
					}
					const _ = (v, E) => !!c(v, E, !0),
						b = () => {
							if (window.chesscom_translations && window.chesscom_translations.countries) return window.chesscom_translations.countries;
							if (window.chesscom_live_translations && window.chesscom_live_translations.countries) return window.chesscom_live_translations.countries;
							if (window.Country) return window.Country
						},
						g = {
							trans: l,
							transChoice: p
						}
				},
				66103: function(m, a, e) {
					var n = e(15875);
					a.Z = n.$H
				},
				45463: function(m, a, e) {
					e.d(a, {
						o8: function() {
							return i
						},
						Kn: function() {
							return r
						},
						HD: function() {
							return o
						},
						mf: function() {
							return u
						},
						hj: function() {
							return c
						},
						kK: function() {
							return l
						},
						kJ: function() {
							return p
						},
						jn: function() {
							return b
						}
					});

					function n(g) {
						return g !== void 0
					}

					function t(g) {
						return _(g) && Object.keys(g).length === 0
					}

					function s(g) {
						return g === null
					}

					function i(g) {
						return g === void 0
					}

					function r(g) {
						return !s(g) && typeof g == "object"
					}

					function o(g) {
						return typeof g == "string"
					}

					function u(g) {
						return typeof g == "function"
					}

					function c(g) {
						return typeof g == "number" && !isNaN(g)
					}

					function l(g) {
						return s(g) || i(g)
					}

					function p(g) {
						return Array.isArray(g)
					}

					function h(g) {
						if (!r(g)) return !1;
						const v = Object.prototype.toString.call(g);
						return v === "[object Error]" || v === "[object DOMException]"
					}

					function _(g) {
						return r(g) ? g.constructor && g.constructor.name === "Object" : !1
					}

					function b(g) {
						return typeof g == "boolean"
					}
				},
				44039: function(m, a, e) {
					e.d(a, {
						D: function() {
							return n
						}
					});
					const n = (t = 0) => new Promise(s => {
						setTimeout(s, t)
					})
				},
				40360: function(m, a, e) {
					e.d(a, {
						o: function() {
							return n
						}
					});

					function n(t) {
						window.postMessage(t, window.location.origin)
					}
				},
				13920: function(m, a, e) {
					e.d(a, {
						Fl: function() {
							return t.Fl
						},
						ZP: function() {
							return P
						},
						RC: function() {
							return t.RC
						},
						aZ: function() {
							return t.aZ
						},
						h: function() {
							return t.h
						},
						Y3: function() {
							return t.Y3
						},
						Ah: function() {
							return t.Ah
						},
						qj: function() {
							return t.qj
						},
						iH: function() {
							return t.iH
						},
						SU: function() {
							return t.SU
						},
						fb: function() {
							return t.fb
						},
						YP: function() {
							return t.YP
						},
						m0: function() {
							return t.m0
						}
					});
					var n = e(6182),
						t = e(70538),
						s = JSON.parse('{"sidebar":{"upgradeLink":"ads-sidebar-upgrade-link"}}'),
						i = JSON.parse('{"chatMessage":{"avatar":"chat-message-avatar","messageText":"chat-message-text"}}'),
						r = JSON.parse('{"postDeleteIcon":"comment-post-delete-icon"}'),
						o = JSON.parse('{"buttons":{"cancelButton":"confirm-popover-cancel-button","yesButton":"confirm-popover-yes-button"}}'),
						u = JSON.parse('{"blogs":{"title":"wat_blogs-title"}}'),
						c = JSON.parse('{"moveFeedback":{"topLine":"move-feedback-top-line"}}'),
						l = JSON.parse('{"mainControls":{"analysis":"explorer-main-controls-analysis","moveBack":"explorer-main-controls-move-back","moveForward":"explorer-main-controls-move-forward","practice":"explorer-main-controls-practice","reset":"explorer-main-controls-reset"},"gameFilters":{"chooseGame":"explorer-game-filters-choose-game","gameType":"explorer-game-filters-game-type","mastersSearch":"explorer-game-filters-masters-search"},"moveListSection":{"searchUrl":"explorer-move-list-section-search-url","suggestedMoves":{"items":"explorer-suggested-moves-items","moveType":"explorer-suggested-moves-move-type","suggestedBlack":"explorer-suggested-moves-suggested-black","suggestedDraw":"explorer-suggested-moves-suggested-draw","suggestedWhite":"explorer-suggested-moves-suggested-white","totalGames":"explorer-suggested-moves-total-games"}},"shareButtons":{"download":"explorer-share-buttons-download","share":"explorer-share-buttons-share","shareFromFilters":"explorer-share-buttons-share-from-filters"}}'),
						p = JSON.parse('{"userWhite":"modal-game-over-user-white","userBlack":"modal-game-over-user-black","score":"modal-game-over-score","avatar":"modal-game-over-avatar","headerTitle":"modal-game-over-header-title","headerSubtitle":"modal-game-over-header-subtitle","headerIcon":"modal-game-over-header-icon"}'),
						h = JSON.parse('{"listItem":"messages-message-list-item","newMessageButton":"messages-new-message-button","archiveAllConversationsBtn":"messages-archive-all-conversations-button","deleteAllConversationsBtn":"messages-delete-all-conversations-button","listItemUsernameText":"messages-message-list-item-username-text","listItemFlag":"messages-message-list-item-flag","listItemMessage":"messages-message-list-item-message","conversationItem":"messages-message-conversation-item","conversationItemAvatar":"messages-message-conversation-item-avatar","inboxTabButton":"messages-inbox-tab-button","unreadTabButton":"messages-unread-tab-button","archiveTabButton":"messages-archive-tab-button","archiveConversationButton":"messages-archive-conversation-button","deleteConversationButton":"messages-delete-conversation-button","restoreConversationButton":"messages-restore-conversation-button","modalCancelButton":"messages-modal-cancel-button","modalConfirmButton":"messages-modal-confirm-button","unreadMessagesCount":"messages-unread-messages-count"}'),
						_ = JSON.parse('{"firstTimeButton":"modal-first-time-button"}'),
						b = JSON.parse('{"gameItem":"practice-game-item"}'),
						g = JSON.parse('{"dailyPuzzlePage":{"date":"daily-puzzle-date","hideCalendar":"daily-puzzle-hideCalendar","hint":"daily-puzzle-hint","month":"daily-puzzle-month","nextMonth":"daily-puzzle-nextMonth","nextPuzzle":"daily-puzzle-nextPuzzle","previousMonth":"daily-puzzle-previousMonth","previousPuzzle":"daily-puzzle-previousPuzzle","share":"daily-puzzle-share","showCalendar":"daily-puzzle-showCalendar","solution":"daily-puzzle-solution","successModal":"daily-puzzle-successModal","title":"daily-puzzle-title","tryAgain":"daily-puzzle-tryAgain"},"modals":{"closeButton":"puzzles-rated-settings-closeBtn","firstTimeButton":"modal-first-time-button","score":"puzzles-modal-score","select":"puzzles-modal-select","settingsModal":"puzzles-modal-settingsModal","showTimerInput":"puzzles-modal-showTimerInput","statValue":"puzzles-modal-stat-value"},"buttons":{"settings":"puzzles-settings-button","comments":"puzzles-comments-button","download":"puzzles-download-button","share":"puzzles-share-button","playVsComputer":"puzzles-playVsComputer-button"},"ratedPage":{"animatedNumber":"puzzles-rated-animatedNumber","ratingDelta":"puzzles-rated-ratingDelta","recentAttemptsChart":"recent-attempts-chart","speedBonus":"puzzles-rated-speedBonus","streakInfo":"puzzles-rated-streakInfo","themeControlsComponent":"puzzles-rated-themeControlsComponent","themeControlsSuggestions":"puzzles-rated-themeControlsSuggestions","timer":"rated-timer","timerClockIcon":"puzzles-rated-timerClockIcon","toMoveSectionHeading":"to-move-section-heading","usersRating":"users-rating","userAvatar":"user-avatar","buttons":{"analysis":"analysis-btn","back":"arrow-back-button","hintMove":"hint-move-button","nextMove":"next-move-arrow","nextPuzzle":"next-puzzle-btn","previousMove":"previous-move-arrow","restartPuzzle":"restart-puzzle-btn","showSolution":"show-solution-button"},"endPuzzleStats":{"attempts":"puzzles-rated-endPuzzleStats-attempts","passRate":"puzzles-rated-endPuzzleStats-passRate","rating":"puzzles-rated-endPuzzleStats-rating","speedBonus":"puzzles-rated-endPuzzleStats-speedBonus","targetTime":"puzzles-rated-endPuzzleStats-targetTime"}}}'),
						v = JSON.parse('{"gameReviewButton":"quick-analysis-game-review-button","analysisButton":"quick-analysis-analysis-button"}'),
						E = JSON.parse('{"shareLinkInput":"share-menu-share-link-input"}'),
						y = JSON.parse('{"saveToArchiveButton":"vs-personalities-save-to-archive-button","saveToArchiveLabel":"vs-personalities-save-to-archive-label"}'),
						w = {
							ads: s,
							chat: i,
							comments: r,
							confirmPopover: o,
							connect: u,
							engine: c,
							explorer: l,
							gameOverModal: p,
							messages: h,
							modals: _,
							practice: b,
							puzzles: g,
							quickAnalysis: v,
							shareMenu: E,
							vsPersonalities: y
						};
					t.ZP.config.productionTip = !1, t.ZP.mixin(n.Z), ["prod", "staging"].includes("dev") || (t.ZP.prototype.$cy = {
						...w
					});
					var P = t.ZP
				},
				63966: function(m, a, e) {
					e.d(a, {
						jC: function() {
							return t
						},
						R0: function() {
							return s
						},
						sY: function() {
							return i
						},
						xL: function() {
							return r
						},
						V5: function() {
							return o
						}
					});
					var n = e(66103);
					const t = 7e3,
						s = {
							badRequest: n.Z.trans("Oops. Looks like there was an error. Sorry! Please refresh.")
						},
						i = {
							avatarUploaded: n.Z.trans("Avatar uploaded"),
							commentCreated: n.Z.trans("Thank you for your comment."),
							commentDeleted: n.Z.trans("Comment deleted."),
							commentEmptyContent: n.Z.trans("You cannot send an empty comment"),
							commentUpdated: n.Z.trans("Comment updated."),
							commentLinkCopied: n.Z.trans("Comment link is copied to clipboard"),
							copied: n.Z.trans("Copied to clipboard"),
							forumsMarkedAsRead: n.Z.trans("All forum topics have been marked as read"),
							featureContent: n.Z.trans("Feature Set! It might take a minute or two to appear."),
							inviteEmpty: n.Z.trans("Please select the players for whom to send the invitation"),
							inviteSent: n.Z.trans("Your invitations were sent successfully"),
							pgnCopied: n.Z.trans("PGN copied to buffer")
						},
						r = {
							ALERT_FLASH_CONTAINER: "widget-alert-flash",
							DISMISSING: "alert-banner-dismissing"
						},
						o = {
							error: "error",
							info: "info",
							success: "success"
						},
						u = {
							type: o.error,
							message: s.badRequest
						}
				},
				30493: function(m, a, e) {
					e.d(a, {
						ue: function() {
							return b
						},
						el: function() {
							return g
						},
						OD: function() {
							return s
						},
						x2: function() {
							return E
						},
						s$: function() {
							return v
						}
					});
					var n = e(63966),
						t = e(17869);

					function s(y) {
						const w = document.getElementById(`alert-${y}`);
						w && c(w)
					}

					function i(y = 2) {
						var w;
						const P = u();
						Array.from((w = P?.querySelectorAll(`.alerts-alert:not(:nth-last-child(-n + ${y}))`)) != null ? w : []).forEach(c)
					}

					function r() {
						const y = u();
						y && (y.innerHTML = "")
					}

					function o(y) {
						var w;
						y.type !== n.V5.success && i(2), (0, t.E)("alerts");
						const P = document.createElement("div");
						P.classList.add("alerts-alert"), P.classList.add("alerts-enter"), P.classList.add(`alerts-${y.type}`), P.setAttribute("id", `alert-${y.id}`);
						const k = document.createElement("span");
						k.classList.add("alerts-message"), k.innerHTML = y.message;
						const O = document.createElement("button");
						O.classList.add("alerts-close"), O.setAttribute("type", "button"), O.innerHTML = '<span class="icon-font-chess x"></span>', P.appendChild(k), P.appendChild(O), (w = u()) == null || w.appendChild(P), O.addEventListener("click", p), y.type === n.V5.success && setTimeout(c, n.jC, P)
					}

					function u() {
						return document.getElementById(n.xL.ALERT_FLASH_CONTAINER)
					}

					function c(y) {
						y.classList.add("alerts-leave"), setTimeout(l, 200, y)
					}

					function l(y) {
						var w;
						try {
							(w = u()) == null || w.removeChild(y)
						} catch {
							r()
						}
					}

					function p(y) {
						var w, P;
						const k = (P = (w = y.target) == null ? void 0 : w.closest) == null ? void 0 : P.call(w, ".alerts-alert");
						k && c(k)
					}
					var h = e(54752),
						_ = e.n(h);
					const b = (y, w) => {
						const P = document.getElementById(`alert-${y}`);
						P && P.classList.add(n.xL.DISMISSING), setTimeout(() => {
							w()
						}, 200)
					};

					function g({
						message: y,
						type: w,
						id: P
					}) {
						o({
							id: P ?? _()(),
							type: w,
							message: y
						})
					}

					function v(y) {
						g({
							type: n.V5.success,
							message: y
						})
					}

					function E(y = n.R0.badRequest) {
						g({
							type: n.V5.error,
							message: y
						})
					}
				},
				6640: function(m, a, e) {
					e.d(a, {
						U: function() {
							return n
						}
					});
					const n = {
						CHANGE_STEP: "change-step",
						CLEAR_ERROR: "clear-error",
						CLOSE_MODAL: "close-modal",
						HANDLE_INPUT: "handle-input",
						HANDLE_SELECTED_SUGGESTION: "handle-selected-suggestion",
						LOGIN_AS_GUEST: "login-as-guest",
						PLAY_AS_GUEST: "play-as-guest",
						SHOW_AUTHENTICATION_MODAL: "show-authentication-modal",
						SHOW_ERROR_MESSAGE: "show-error-message",
						SHOW_LOGIN_MODAL: "show-login-modal",
						SKILL_LEVEL_UPDATED: "skill-level-updated"
					}
				},
				42049: function(m, a, e) {
					e.d(a, {
						x: function() {
							return n
						}
					});
					const n = {
						AUTHENTICATION_MODAL: "authentication-modal",
						AUTHENTICATION_MODAL_TRIGGER: "authentication-modal-trigger",
						LOGIN_MODAL: "login-modal",
						LOGIN_MODAL_TRIGGER: "login-modal-trigger"
					}
				},
				72581: function(m, a, e) {
					e.d(a, {
						t: function() {
							return n
						}
					});
					const n = {
						AUTHENTICATION_INTRO: "intro",
						AUTHENTICATION_SIGNUP: "signup"
					}
				},
				57061: function(m, a, e) {
					e.d(a, {
						ZC: function() {
							return u
						},
						_G: function() {
							return c
						},
						U3: function() {
							return _
						},
						$y: function() {
							return l
						},
						xL: function() {
							return h
						},
						_j: function() {
							return b
						},
						Iz: function() {
							return p
						}
					});
					const n = {
						BOARD_POPOVER: "v-board-popover",
						CONFIRM_POPOVER: "v-new-confirm-popover",
						TOOLTIP: "v-tooltip",
						USER_POPOVER: "v-user-popover"
					};
					var t = e(6936),
						s = e(66103),
						i, r;
					const o = {
							ARIA_CONTROLS: "aria-controls",
							ARIA_LABEL: "aria-label",
							ARIA_SELECTED: "aria-selected",
							AVATAR: "data-avatar",
							ALIGN_DROPDOWN: "data-align-dropdown",
							BORDER_TOP: "data-border-top",
							BORDER_TOP_WIDE: "data-border-top-wide",
							BUTTON_TEXT: "data-button-text",
							CATEGORIES: "data-categories",
							CONTROL_LABEL_TEXT: "data-control-label-text",
							CUSTOM_BTN_CLASS: "data-custom-btn-class",
							CUSTOM_COLLAPSE_CLASS: "data-custom-collapse-class",
							DARK_MODE: "data-dark-mode",
							HIDDEN: "hidden",
							ICON_BUTTON: "data-icon-button",
							NEXT_LESSON_HINT: "data-next-lesson-hint",
							OPTIONS: "data-options",
							SHOW_ICON: "data-show-icon",
							SELECTED_LANGUAGES: "data-selected-languages",
							SELECTED_PAGE: "data-selected-page",
							SELECTED_VALUE: "data-selected-value",
							SLOTS: "data-stats-slots",
							SRC: "src",
							STATS: "data-stats",
							SURVEY_DATA: "data-survey",
							SURVEY_VOTED: "data-voted-survey",
							TAB_URL_PARAM: "data-tab-url-param",
							TYPE: "data-type",
							USERNAME: "data-username",
							USER_LANGUAGE: "data-user-language",
							VALUE: "data-value",
							VS_STATS: "data-vs-stats"
						},
						u = {
							getArticleAuthors: "web_article_callback_list_authors",
							lockUnlockComments: {
								article: "web_article_callback_lock_coments",
								blog: "web_blog_callback_lock_coments",
								news: "web_news_callback_lock_coments",
								video: "web_video_callback_lock_coments"
							},
							setArticleFeature: "web_content_callback_feature_article",
							setBlogFeature: "web_content_callback_feature_blog",
							setLessonsFeature: "web_content_callback_feature_lesson_course",
							setNewsFeature: "web_content_callback_feature_news",
							setVideoFeature: "web_content_callback_feature_chess_video"
						},
						c = {
							BLOG: "blog",
							CSRF_TOKEN: (r = (i = window.context) == null ? void 0 : i.csrf) == null ? void 0 : r.token,
							DARK_MODE: "dark-mode",
							DEFAULT_LOCALE: "en_US",
							LESSONS: "lessons",
							NEWS: "news",
							VIDEO: "video",
							GRID_VIEW: "grid",
							LIST_VIEW: "list",
							LOCALE: window.context && window.context.locale || "en_US",
							LOGGED_IN: window.context && window.context.user,
							PUZZLES_COUNT: 500,
							TIME: {
								hour: 36e5
							},
							USERNAME: window.context && window.context.user ? window.context.user.username : null,
							USER_COLOR_SCHEME: "COLOR_SCHEME"
						},
						l = {
							CHESS_960: "chess960"
						},
						p = {
							category: v => s.Z.trans(v, {}, "dynamic"),
							commentsSynced: s.Z.trans("Comment count will be recalculated in few moments"),
							daysOfWeek: [s.Z.trans("Sunday"), s.Z.trans("Monday"), s.Z.trans("Tuesday"), s.Z.trans("Wednesday"), s.Z.trans("Thursday"), s.Z.trans("Friday"), s.Z.trans("Saturday")],
							loading: s.Z.trans("Loading..."),
							months: [s.Z.trans("January"), s.Z.trans("February"), s.Z.trans("March"), s.Z.trans("April"), s.Z.trans("May"), s.Z.trans("June"), s.Z.trans("July"), s.Z.trans("August"), s.Z.trans("September"), s.Z.trans("October"), s.Z.trans("November"), s.Z.trans("December")],
							monthsAbbreviated: [s.Z.trans("Jan"), s.Z.trans("Feb"), s.Z.trans("Mar"), s.Z.trans("Apr"), s.Z.trans("May"), s.Z.trans("Jun"), s.Z.trans("Jul"), s.Z.trans("Aug"), s.Z.trans("Sep"), s.Z.trans("Oct"), s.Z.trans("Nov"), s.Z.trans("Dec")],
							noResult: s.Z.trans("No results found."),
							pleaseEnter: v => s.Z.trans("Please enter %number% or more characters", {
								"%number%": v
							}),
							showMore: s.Z.trans("More"),
							showLess: s.Z.trans("Less"),
							lessonsHintMessage: s.Z.trans("Let me help you learn everything you need to know with this guide."),
							nextLessonHintMessage: s.Z.trans("Your next lesson is ready. Study daily if you really want to improve!"),
							openingsHintMessage: s.Z.trans("Let me help you improve your openings!")
						},
						h = {
							AMPLITUDE_LOGGER: "amplitude-logger",
							AMPLITUDE_LOG_SELECTION: "[data-log-selection-to-amplitude]",
							BOARD_POPOVER: n.BOARD_POPOVER,
							CAPTCHA: "captcha",
							COLLAPSE: "v-toggle-collapse",
							COLLAPSED: "toggle-collapsed",
							CONTENT_AD: "content-ad",
							CONTENT_CATEGORY_SELECT: "content-category-select",
							CONTENT_LANGUAGE_SELECT: "content-language-select",
							CONFIRM_OPEN: "confirm-open",
							CONFIRM_POPOVER: "v-confirm-popover",
							CONFIRM_POPOVER_INLINE: "confirm-popover-inline",
							DELETE_CONTENT: "post-category-link-delete",
							DELETE_SPAM_CONTENT: "post-category-link-delete-spam",
							DONATE_MODAL: "donate-modal",
							FEATURE_SIDEBAR_LINK: "post-category-link-feature",
							FILTERS: "page-filters",
							FOLLOW_UNFOLLOW_AUTHOR: "follow-unfollow-author",
							FORM_DATEPICKER: "v-datepicker",
							FORM_DROPDOWN: "form-dropdown",
							GAME_PREVIEW: "game-preview",
							GIFT_MEMBERSHIP_BUTTON: "give-gift-membership",
							GIFT_MEMBERSHIP_MODAL: "gift-membership-modal",
							HEADLINE_SIDEBAR_LINK: "post-category-link-headline",
							HIDDEN: "toggle-hidden",
							HINT_WRAPPER: "hint-wrapper",
							LANGUAGE_DROPDOWN: "post-view-languages",
							LOCK_UNLOCK_CONTENT: "lock-unlock-content",
							MESSAGE_PARENT: "vue-message",
							NAVIGATION_FOOTER: "navigation-footer",
							NEW_GAME: "new-game",
							PAGINATION_BOTTOM: "pagination-bottom",
							PAGINATION_BUTTON: "ui_pagination-item-component",
							PAGINATION_TOP: "pagination-top",
							PAGINATION_SCROLL_TOP: ".pagination-scroll-to-top",
							POST_AUTHOR_FOLLOW: "post-author-follow",
							POST_CAN_EDIT_URL: "post-can-edit-url",
							POST_EDIT_URL: "post-edit-url",
							POST_EDIT_URL_FIELD: "post-edit-url-field",
							POST_IMAGE_BUTTON: "image-upload-button",
							POST_IMAGE_THUMBNAIL: "image-upload-thumbnail",
							PUBLISH_CONTENT: "post-category-link-publish",
							SCROLL_TOP_ANCHOR: "scroll-top-anchor",
							SHORT_SIDEBAR_AD_BOTTOM: "short-sidebar-ad-bottom",
							SHORT_SIDEBAR_AD_TOP: "short-sidebar-ad-top",
							SIDEBAR_STATS: "sidebar-stats",
							SIDEBAR_SURVEY: "sidebar-survey",
							SIDEBAR_TOGGLE_BUTTON_TEXT: "toggle-content-button-text",
							SIDEBAR_TOGGLE_ICON: "toggle-content-icon",
							SIDEBAR_USER_ITEMS: "sidebar-users-grid-toggle-item",
							SIDEBAR_USERS_TOGGLE_BUTTON: "toggle-content-button",
							STAT_CHART: "stat-chart",
							TABS_BUTTON: "v5-tabs-button",
							TABS_PANEL: "v5-tabs-panel",
							TABS_WRAPPER: "v5-tabs-wrapper",
							TIMEZONES: "page-timezones",
							TOOLTIP: n.TOOLTIP,
							TOOLTIP_CLASS: "tooltip",
							TOOLTIP_TOP: "top",
							UPGRADE_ACCORDION: "upgrade-accordion",
							USER_LEAGUE: "user-league",
							USER_TAGLINE: "post-view-meta-user",
							VERSION_DROPDOWN: "version-dropdown"
						},
						_ = {
							CONFIRM_POPOVER_YES: "confirm-popover-yes",
							SHOW_MODAL: "show-confirm-popover",
							VOTE_COUNTED: "vote-counted",
							VIEW_CHANGE: "view-change",
							VIEW_GRID: "view-grid",
							VIEW_LIST: "view-list"
						},
						b = {
							changeContentLanguage: () => t.Z.generate("web_user_callback_set_content_language"),
							enPassant: () => t.Z.generate("web_article_view", {
								url: "how-to-capture-en-passant"
							}),
							inviteLink: (v, E, y) => t.Z.generate(v, {
								url: E,
								secret: y
							}),
							lockUnlockComments: (v, E) => t.Z.generate(u.lockUnlockComments[v], {
								id: E
							}),
							loginPage: t.Z.generate("web_security_login_and_go"),
							redirectToLoginPage: v => t.Z.generate("web_security_login_and_go", {
								redirectUrl: v
							}),
							surveyVote: (v, E) => t.Z.generate("web_survey_callback_vote", {
								id: v,
								optionId: E
							}),
							teamMatch: v => t.Z.generate("web_team_match_view", {
								match: v
							}),
							tournament: v => t.Z.generate("web_tournament_view", {
								url: v
							}),
							userProfile: v => t.Z.generate("web_member_view", {
								username: v
							})
						},
						g = {
							LESSONS_HINT_STATE: "lessons_hint_state",
							OPENINGS_HINT_STATE: "openings_hint_state"
						}
				},
				90040: function(m, a, e) {
					e.d(a, {
						b: function() {
							return t
						}
					});
					var n = e(6936);
					const t = (s, i, r) => {
						let o = s;
						const u = i;
						if (r) {
							const c = document.querySelector("[data-url-locale]"),
								l = c?.getAttribute("data-url-locale"),
								p = l?.split("_")[0] !== "en" && l?.split("_")[0];
							p && u && (o = r, u._locale = p)
						}
						return n.Z.generate(o, u)
					}
				},
				77727: function(m, a, e) {
					e.d(a, {
						lW: function() {
							return i
						},
						h$: function() {
							return o
						},
						nv: function() {
							return l
						},
						YE: function() {
							return p
						},
						c: function() {
							return h
						}
					});
					var n = e(3527),
						t = e.n(n),
						s = e(15875);
					const i = {
							KOMODO: "KOMODO",
							STOCKFISH: "STOCKFISH",
							STOCKFISH_NNUE: "STOCKFISH (NNUE)",
							OFF: "OFF"
						},
						r = {
							name: t().supportsMultithreading() ? window.chesscom.features.includes("stockfish_15_1") ? "Stockfish 15.1" : "Stockfish 15" : "Stockfish 11",
							description: t().supportsMultithreading() ? (0, s.dW)("faster") : "",
							paths: {
								engines: {
									multiThreaded: {
										loader: window.Config.threadedEnginePaths.stockfish.multiThreaded.loader,
										engine: window.Config.threadedEnginePaths.stockfish.multiThreaded.engine
									},
									singleThreaded: {
										loader: window.Config.threadedEnginePaths.stockfish.singleThreaded.loader,
										engine: window.Config.threadedEnginePaths.stockfish.singleThreaded.engine
									},
									asm: window.Config.threadedEnginePaths.stockfish.asm
								},
								pathToBook: window.Config.pathToBookSmall
							}
						},
						o = {
							[i.STOCKFISH]: {
								...r
							},
							[i.STOCKFISH_NNUE]: {
								...r,
								name: window.chesscom.features.includes("stockfish_15_1") ? "Stockfish 15.1 NNUE" : "Stockfish 15 NNUE",
								description: (0, s.dW)("stronger, %filesize%", {
									"%filesize%": "45MB"
								}),
								paths: {
									...r.paths,
									settings: {
										EvalFile: window.Config.threadedEnginePaths.stockfish.multiThreaded.nnue,
										Threads: (navigator.hardwareConcurrency / 2).toString(),
										"Use NNUE": "true"
									}
								},
								multithreadingRequired: !0
							},
							[i.KOMODO]: {
								name: "Komodo",
								paths: {
									pathToEngineWorker: window.Config.pathToExplanationEngineWorker,
									pathToWasmEngine: window.Config.pathToWasmExplanationEngine,
									pathToNonWasmEngine: window.Config.pathToNonWasmKomodo
								}
							},
							[i.OFF]: {
								label: (0, s.dW)("Engine Off"),
								name: "Engine Off"
							}
						},
						u = {
							name: "Komodo Threats",
							paths: {
								pathToEngineWorker: window.Config.pathToExplanationEngineWorker,
								pathToWasmEngine: window.Config.pathToWasmExplanationEngine
							}
						},
						c = {
							LATEST: {
								value: "latest",
								label: "Stockfish 10"
							},
							SF12: {
								value: "stockfish12",
								label: "Stockfish 12 (NNUE)"
							}
						},
						l = i.STOCKFISH;

					function p(b) {
						return o[b ?? l]
					}

					function h() {
						const b = {
							...o
						};
						return Object.entries(b).filter(_).map(([g, v]) => {
							var E;
							return {
								value: g,
								label: (E = v.label) != null ? E : v.description ? `${v.name} (${v.description})` : v.name
							}
						})
					}

					function _([b, g]) {
						return Boolean(!g.multithreadingRequired || t().supportsMultithreading())
					}
				},
				80019: function(m, a, e) {
					e.d(a, {
						H: function() {
							return t
						}
					});
					var n = e(35174);
					const t = (0, n.I)()
				},
				84732: function(m, a, e) {
					e.d(a, {
						Gw: function() {
							return p
						},
						OL: function() {
							return h
						},
						mC: function() {
							return _
						},
						YQ: function() {
							return b
						},
						VP: function() {
							return l
						}
					});
					var n = e(77727);
					const t = {
							komodo: 14,
							stockfish: 14
						},
						s = "analysis_engine_settings";
					var i = e(80019),
						r, o;
					const u = {
						depth: 20,
						timeLimit: 10,
						linesCount: 3,
						engineName: n.nv,
						isWdlBarSupported: !1,
						hasChosenWdlBar: !1,
						wdlBarEnabled: !1,
						tbBarEnabled: !1,
						complexityModeEnabled: !1,
						criticalPositionEnabled: !1
					};
					Object.assign(u, c(), {
						isWdlBarSupported: (o = (r = window.chesscom) == null ? void 0 : r.features) == null ? void 0 : o.includes("analysis_eval_bar_modes")
					});

					function c() {
						try {
							return JSON.parse(window.localStorage.getItem(s) || "")
						} catch {
							return {}
						}
					}

					function l(g) {
						Object.keys(g).some(E => g[E] !== u[E]) && (Object.assign(u, g), window.localStorage.setItem(s, JSON.stringify(u)), i.H.emit("evaluation.settings-update"))
					}

					function p() {
						return u
					}

					function h() {
						return u.engineName === n.lW.KOMODO ? 50 : 200
					}

					function _() {
						return u.engineName === n.lW.KOMODO ? t.komodo : t.stockfish
					}
					const b = () => u.isWdlBarSupported
				},
				49165: function(m, a, e) {
					e.d(a, {
						zT: function() {
							return s
						},
						CJ: function() {
							return i
						},
						oU: function() {
							return r
						},
						wM: function() {
							return o
						},
						dB: function() {
							return u
						},
						qg: function() {
							return p
						},
						zu: function() {
							return h
						},
						oq: function() {
							return _
						},
						Si: function() {
							return b
						}
					});
					var n = e(15875),
						t = e(66103);
					const s = {
							ABANDONED: "abandoned",
							ABORTED: "aborted",
							ADJUDICATED: "adjudicated",
							AGREED: "agreed",
							BUGHOUSELOSE: "bughousepartnerlose",
							CHECKMATED: "checkmated",
							DOUBLE_FORFEIT: "doubleforfeit",
							FIFTY_MOVE: "50move",
							INSUFFICIENT: "insufficient",
							KINGOFTHEHILL: "kingofthehill",
							REPETITION: "repetition",
							RESIGNED: "resigned",
							STALEMATE: "stalemate",
							THREECHECK: "threecheck",
							TIMEOUT: "timeout",
							TIMEVSINSUFFICIENT: "timevsinsufficient"
						},
						i = {
							[s.CHECKMATED]: (0, n.dW)("You won by checkmate."),
							[s.RESIGNED]: (0, n.dW)("You won by resignation."),
							[s.TIMEOUT]: (0, n.dW)("You won on time.")
						},
						r = {
							[s.CHECKMATED]: (0, n.dW)("You lost by checkmate."),
							[s.RESIGNED]: (0, n.dW)("You lost by resignation."),
							[s.TIMEOUT]: (0, n.dW)("You lost on time.")
						},
						o = {
							[s.CHECKMATED]: (0, n.dW)("Your partner won by checkmate."),
							[s.RESIGNED]: (0, n.dW)("Your partner won by resignation."),
							[s.TIMEOUT]: (0, n.dW)("Your partner won on time.")
						},
						u = {
							[s.CHECKMATED]: (0, n.dW)("Your partner lost by checkmate."),
							[s.RESIGNED]: (0, n.dW)("Your partner lost by resignation."),
							[s.TIMEOUT]: (0, n.dW)("Your partner lost on time.")
						},
						c = {
							[s.AGREED]: (0, n.dW)("Your partner and their opponent agreed to a draw."),
							[s.REPETITION]: (0, n.dW)("Your partner drew by threefold repetition.")
						},
						l = {
							[s.ABANDONED]: (0, n.dW)("game abandoned"),
							[s.ABORTED]: (0, n.dW)("game aborted"),
							[s.ADJUDICATED]: (0, n.dW)("by adjudication"),
							[s.AGREED]: (0, n.dW)("by agreement"),
							[s.BUGHOUSELOSE]: (0, n.dW)("with their bughouse partner"),
							[s.CHECKMATED]: (0, n.dW)("by checkmate"),
							[s.DOUBLE_FORFEIT]: (0, n.dW)("Double forfeit"),
							[s.FIFTY_MOVE]: (0, n.dW)("by 50-move rule"),
							[s.INSUFFICIENT]: (0, n.dW)("by insufficient material"),
							[s.KINGOFTHEHILL]: (0, n.dW)("by the king reaching the hill"),
							[s.REPETITION]: (0, n.dW)("by repetition"),
							[s.RESIGNED]: (0, n.dW)("by resignation"),
							[s.STALEMATE]: (0, n.dW)("by stalemate"),
							[s.THREECHECK]: (0, n.dW)("by checking the opponent king for the 3rd time"),
							[s.TIMEOUT]: (0, n.dW)("on time"),
							[s.TIMEVSINSUFFICIENT]: (0, n.dW)("by timeout vs insufficient material")
						};

					function p(v, E) {
						return v === s.BUGHOUSELOSE && E ? (0, n.dW)("Your partner won the game!") : l[v]
					}
					const h = {
							[s.ABANDONED]: (0, n.dW)("%winner% won - game abandoned"),
							[s.ABORTED]: (0, n.dW)("Game aborted"),
							[s.AGREED]: (0, n.dW)("Game drawn by agreement"),
							[s.BUGHOUSELOSE]: (0, n.dW)("with their bughouse partner"),
							[s.CHECKMATED]: (0, n.dW)("%winner% won by checkmate"),
							[s.DOUBLE_FORFEIT]: (0, n.dW)("Double forfeit"),
							[s.FIFTY_MOVE]: (0, n.dW)("Game drawn by 50-move rule"),
							[s.INSUFFICIENT]: (0, n.dW)("Game drawn - insufficient material"),
							[s.KINGOFTHEHILL]: (0, n.dW)("%winner% got their king to the middle"),
							[s.REPETITION]: (0, n.dW)("Game drawn by repetition"),
							[s.RESIGNED]: (0, n.dW)("%winner% won by resignation"),
							[s.STALEMATE]: (0, n.dW)("Game drawn by stalemate"),
							[s.THREECHECK]: (0, n.dW)("%winner% gave three checks"),
							[s.TIMEOUT]: (0, n.dW)("%winner% won on time"),
							[s.TIMEVSINSUFFICIENT]: (0, n.dW)("Game drawn - timeout vs insufficient material")
						},
						_ = {
							[s.AGREED]: "https://www.chess.com/article/view/how-chess-games-can-end-8-ways-explained#agreement",
							[s.CHECKMATED]: "https://www.chess.com/article/view/how-chess-games-can-end-8-ways-explained#checkmate",
							[s.FIFTY_MOVE]: "https://www.chess.com/article/view/how-chess-games-can-end-8-ways-explained#move-rule",
							[s.INSUFFICIENT]: "https://www.chess.com/article/view/how-chess-games-can-end-8-ways-explained#insufficient-material",
							[s.REPETITION]: "https://www.chess.com/article/view/how-chess-games-can-end-8-ways-explained#repetition",
							[s.RESIGNED]: "https://www.chess.com/article/view/how-chess-games-can-end-8-ways-explained#resignation",
							[s.STALEMATE]: "https://www.chess.com/article/view/how-chess-games-can-end-8-ways-explained#stalemate",
							[s.TIMEOUT]: "https://www.chess.com/article/view/how-chess-games-can-end-8-ways-explained#timeout",
							[s.TIMEVSINSUFFICIENT]: "https://www.chess.com/article/view/how-chess-games-can-end-8-ways-explained#insufficient-material"
						},
						b = {
							HALF_HALF: "1/2-1/2",
							HALF_HALF_ENTITY: "&frac12;-&frac12;",
							ONE_ZERO: "1-0",
							ZERO_ONE: "0-1",
							NONE: "*"
						},
						g = [{
							label: t.Z.trans("Standard"),
							value: "chess",
							icon: "chess-board",
							tip: t.Z.trans("Normal rules of chess."),
							daily: !0,
							live: !0,
							defaultType: !0
						}, {
							label: t.Z.trans("Chess960"),
							value: "chess960",
							icon: "chess960",
							tip: t.Z.trans("Normal rules, but starting position is random."),
							daily: !0,
							live: !0
						}, {
							label: t.Z.trans("Book Opening"),
							value: "book",
							icon: "chess-board",
							daily: !0,
							quickLaunch: !1
						}, {
							label: t.Z.trans("Custom FEN"),
							value: "custom",
							icon: "chess-board",
							daily: !0,
							quickLaunch: !1
						}, {
							label: t.Z.trans("3 Check"),
							value: "threecheck",
							icon: "threecheck",
							tip: t.Z.trans("First to check the other king 3 times wins."),
							live: !0
						}, {
							label: t.Z.trans("King of the Hill"),
							value: "kingofthehill",
							icon: "kingofthehill",
							tip: t.Z.trans("First to get king to middle 4 squares wins."),
							live: !0
						}, {
							label: t.Z.trans("Crazyhouse"),
							value: "crazyhouse",
							icon: "crazyhouse",
							tip: t.Z.trans("When you capture a piece, you can drop it on your turn!"),
							live: !0
						}, {
							label: t.Z.trans("Bughouse"),
							value: "bughouse",
							icon: "bughouse",
							tip: t.Z.trans("Team up with another player and you can drop the pieces that they capture."),
							live: !0
						}]
				},
				10430: function(m, a, e) {
					e.d(a, {
						_G: function() {
							return l
						},
						U3: function() {
							return u
						},
						DL: function() {
							return v
						},
						MR: function() {
							return E
						},
						xL: function() {
							return i
						},
						Xw: function() {
							return p
						},
						ko: function() {
							return g
						},
						Iz: function() {
							return c
						}
					});
					var n = e(57061),
						t = e(6936),
						s = e(15875);
					const i = {
						AUTHENTICATION_MODAL: "authentication-modal",
						FACEBOOK_MODAL: "facebook-modal",
						FIRST_TIME_MODAL: "first-time-modal",
						GUEST_MODAL: "guest-modal",
						GUEST_MODAL_TRIGGER: "guest-modal-trigger",
						NEW_ACCOUNT: "new-account-modal",
						UPGRADE_MODAL: "upgrade-modal"
					};
					var r, o, u = (O => (O.HIDE_MODAL = "hide-modal", O.HIDE_MODAL_BACKGROUND_CLICK = "hide-background", O.HIDE_MODAL_SOCIAL_SHARE = "hide-modal-social-share", O.LOGIN_OR_REGISTER_MODAL = "LOGIN_OR_REGISTER_MODAL", O.MODAL_DID_HIDE = "modal-did-hide", O.SHOW_GUEST_MODAL = "show-guest-modal", O.SHOW_MODAL_SOCIAL_SHARE = "show-modal-social-share", O.SHOW_UPGRADE_MODAL = "show-upgrade-modal", O))(u || {});
					const c = {
							GUEST_MODAL_TITLE: {
								analysis: (0, s.dW)("Sign up to analyze your games!"),
								lessons: (0, s.dW)("Sign up to unlock Lessons!"),
								pawn: (0, s.dW)("Sign up to use this feature."),
								"puzzles-learning": (0, s.dW)("Sign up to keep solving puzzles!"),
								stats: (0, s.dW)("Sign up to track your progress!")
							},
							GUEST_MODAL_FOOTER_TEXT: (0, s.dW)("Already have an account? Log in")
						},
						l = {
							GUEST_MODAL_SLIDES: {
								analysis: "analysis",
								lessons: "lessons",
								pawn: "pawn",
								puzzles: "puzzles-learning",
								stats: "stats"
							}
						},
						p = ["analysis", "lessons", "puzzles-learning", "puzzles-rush", "puzzles-battle"],
						h = [{
							title: (0, s.dW)("Play, Learn and Connect"),
							subtitle: (0, s.dW)("Join millions of chess players."),
							icon: "pawn"
						}, {
							title: (o = (r = window.chesscom) == null ? void 0 : r.features) != null && o.includes("update_puzzle_modal_puzzle_count") ? (0, s.jn)("]1,Inf[ %number%K+ puzzles", n._G.PUZZLES_COUNT, {
								"%number%": n._G.PUZZLES_COUNT
							}) : (0, s.dW)("%number%k+ Puzzles", {
								"%number%": n._G.PUZZLES_COUNT
							}),
							subtitle: (0, s.dW)("Play every day to improve"),
							icon: "puzzles-learning"
						}, {
							title: (0, s.dW)("1500+ Lessons"),
							subtitle: (0, s.dW)("Learn from chess masters!"),
							icon: "lessons"
						}, {
							title: (0, s.dW)("Full Game Analysis"),
							subtitle: (0, s.dW)("Learn from every game!"),
							icon: "analysis"
						}, {
							title: (0, s.dW)("Get a Rating"),
							subtitle: (0, s.dW)("Save your games!"),
							icon: "stats"
						}, {
							title: (0, s.dW)("Explore Full Openings"),
							subtitle: (0, s.dW)("See moves played by masters!"),
							icon: "explorer"
						}],
						_ = "dismissedOnboardModalId",
						b = [{
							title: (0, s.dW)("Full Analysis"),
							subtitle: (0, s.dW)("Full Report, Accuracy, Key Moments"),
							icon: "analysis",
							generic: !0
						}, {
							title: (0, s.dW)("Unlimited Puzzles"),
							subtitle: (0, s.dW)("Solve 8+ Puzzles/day to improve fast"),
							icon: "puzzles-learning",
							generic: !0
						}, {
							title: (0, s.dW)("Unlimited Lessons"),
							subtitle: (0, s.dW)("Your step-by-step path to mastery"),
							icon: "lessons",
							generic: !0
						}, {
							title: (0, s.dW)("Remove Ads"),
							subtitle: (0, s.dW)("Get the best Chess.com experience"),
							icon: "no-ads",
							generic: !0
						}, {
							title: (0, s.dW)("Unlimited Puzzle Rush"),
							subtitle: (0, s.dW)("3 strikes and you're out!"),
							icon: "puzzles-rush"
						}, {
							title: (0, s.dW)("Unlimited Puzzle Battles"),
							subtitle: (0, s.dW)("Rush another player to win!"),
							icon: "puzzles-battle"
						}, {
							title: (0, s.dW)("Get Your Own Flair"),
							subtitle: (0, s.dW)("Share your unique personality"),
							icon: "flair"
						}, {
							title: (0, s.dW)("Explore Full Openings"),
							subtitle: (0, s.dW)("See moves played by masters!"),
							icon: "explorer"
						}, {
							title: (0, s.dW)("Master Every Position"),
							subtitle: (0, s.dW)("Practice means everything!"),
							icon: "workout"
						}, {
							title: (0, s.dW)("Unlock All Bots"),
							subtitle: (0, s.dW)("Play vs various skills and styles."),
							icon: "computer"
						}, {
							title: (0, s.dW)("Unlimited Collections"),
							subtitle: (0, s.dW)("Build and organize your library"),
							icon: "library",
							id: 12
						}, {
							title: (0, s.dW)("Unlimited Daily Puzzles"),
							subtitle: (0, s.dW)("Unlock all daily puzzles."),
							icon: "daily-puzzle"
						}],
						g = [{
							title: (0, s.dW)("Unlimited Game Review with Coach"),
							icon: "game-review"
						}, {
							title: (0, s.dW)("Unlimited Puzzles"),
							icon: "puzzles"
						}, {
							title: (0, s.dW)("Unlimited Lessons"),
							icon: "lessons"
						}, {
							title: (0, s.dW)("No Ads"),
							icon: "no-ads"
						}],
						v = O => {
							const T = h.find(D => D.icon === O) || h[0],
								C = h.filter(D => D !== T);
							return C.unshift(T), C
						},
						E = O => {
							const T = b.find(D => D.icon === O) || b[0],
								C = b.filter(D => D.generic && D !== T);
							return C.unshift(T), C
						},
						y = {
							CLUBS: "clubs",
							COMPUTER: "computer",
							EXPLORER: "explorer",
							LEAGUES: "leagues",
							LESSONS: "lessons",
							LIBRARY: "library",
							OPENINGS: "openings",
							SOLO_CHESS: "solo",
							TOURNAMENTS: "tournaments",
							VISION: "vision"
						},
						w = {
							[y.COMPUTER]: {
								bullets: [{
									icon: "select",
									text: (0, s.dW)("Play bots with various strengths and styles")
								}, {
									icon: "chip",
									text: (0, s.dW)("Use optional coaching features for insights")
								}, {
									icon: "user",
									text: (0, s.dW)("Practice at any time - with no pressure")
								}],
								buttonText: (0, s.dW)("Start"),
								icon: "computer",
								storageKey: "vs_computer_intro_modal_dismissed",
								subtitle: (0, s.dW)("Challenge the computer to an online chess game."),
								title: (0, s.dW)("Chess Computer")
							},
							[y.EXPLORER]: {
								bullets: [{
									icon: "magnifying-glass",
									text: (0, s.dW)("Search millions of master games")
								}, {
									icon: "user",
									text: (0, s.dW)("Choose specific players to explore")
								}, {
									icon: "chess-move-alt",
									text: (0, s.dW)("Find winning moves from your games")
								}],
								icon: "explorer",
								storageKey: "explorer_intro_modal_dismissed",
								subtitleBottom: (0, s.dW)("See moves chess masters have made and the outcome of the game from any position."),
								title: (0, s.dW)("Chess Explorer")
							},
							[y.OPENINGS]: {
								bullets: [{
									icon: "magnifying-glass",
									text: (0, s.dW)("Search more than 3,000 opening lines")
								}, {
									icon: "book-open",
									text: (0, s.dW)("Find the perfect chess opening for you")
								}, {
									icon: "circle-compass",
									text: (0, s.dW)("Explore variations and master chess games")
								}],
								icon: "openings",
								storageKey: "openings_intro_modal_dismissed",
								subtitleBottom: (0, s.dW)("Learn and explore chess openings to try in your chess games."),
								title: (0, s.dW)("Chess Openings")
							},
							[y.SOLO_CHESS]: {
								bullets: [{
									icon: "incorrect",
									text: (0, s.dW)("Capture a piece with every move until just one remains")
								}, {
									icon: "circle-stop",
									text: (0, s.dW)("No piece may capture more than 2 times per puzzle")
								}, {
									icon: "king-fill",
									text: (0, s.dW)("If there is a King on the board, it must be the final piece")
								}, {
									icon: "circle-checkmark",
									text: (0, s.dW)("Try for a perfect run in Challenge Mode!")
								}],
								buttonText: (0, s.dW)("Start"),
								icon: "solo",
								modalWidth: "lg",
								storageKey: "solo_intro_modal_dismissed",
								subtitleTop: (0, s.dW)("How to Play"),
								title: (0, s.dW)("Solo Chess")
							},
							[y.VISION]: {
								bullets: [{
									icon: "chess-board-vision",
									text: (0, s.dW)("Improve vision with coordinate training")
								}, {
									icon: "chess-board-arrow-down",
									text: (0, s.dW)("Identify squares or make moves")
								}, {
									icon: "live",
									text: (0, s.dW)("Answer as many as you can in 30 seconds")
								}],
								buttonText: (0, s.dW)("Start"),
								icon: "vision",
								showConfirmButton: !0,
								storageKey: "vision_intro_modal_dismissed",
								subtitleBottom: (0, s.dW)("Learn to quickly follow and record chess coordinates and annotation."),
								title: (0, s.dW)("Vision Trainer")
							},
							[y.LESSONS]: {
								bullets: [{
									icon: "play",
									text: (0, s.dW)("Watch videos to learn concepts")
								}, {
									icon: "circle-checkmark",
									text: (0, s.dW)("Test knowledge with Challenges")
								}, {
									icon: "king-fill",
									text: (0, s.dW)("Level up to achieve Mastery")
								}],
								icon: "lessons",
								storageKey: "lessons_intro_modal_dismissed",
								subtitleBottom: (0, s.dW)("Learn from interactive lessons created by chess masters."),
								title: (0, s.dW)("Chess Lessons")
							},
							[y.CLUBS]: {
								bullets: [{
									icon: "teammatch",
									text: (0, s.dW)("Represent your club in matches")
								}, {
									icon: "chat",
									text: (0, s.dW)("Chat in private forums")
								}, {
									icon: "square-four",
									text: (0, s.dW)("Organize your team")
								}],
								icon: "clubs",
								storageKey: "clubs_intro_modal_dismissed",
								subtitleBottom: (0, s.dW)("Join an Online Chess Club and connect and compete with your friends in matches."),
								title: (0, s.dW)("Chess Clubs")
							},
							[y.TOURNAMENTS]: {
								bullets: [{
									icon: "circle-timer",
									text: (0, s.dW)("Join tournaments starting every few minutes")
								}, {
									icon: "calendar",
									text: (0, s.dW)("Compete in Daily, multi-game tournaments")
								}, {
									icon: "cup",
									text: (0, s.dW)("Win trophies to display on your Profile")
								}],
								icon: "tournaments",
								storageKey: "tournaments_intro_modal_dismissed",
								subtitleBottom: (0, s.dW)("Compete in online chess tournaments or join an online Arena, where anyone can win."),
								title: (0, s.dW)("Chess Tournaments")
							},
							[y.LIBRARY]: {
								bullets: [{
									icon: "chess-board",
									text: (0, s.dW)("Create collections from games played online, offline, or uploaded.")
								}, {
									icon: "magnifying-glass",
									text: (0, s.dW)("Open, analyze, edit, and re-save your games to your collection.")
								}, {
									icon: "users",
									text: (0, s.dW)("Organize, tag, and share your collections with others.")
								}],
								icon: "library",
								storageKey: "library_intro_modal_dismissed",
								subtitleBottom: (0, s.dW)("Compile your very own Collection of personal, master, and all other games."),
								title: (0, s.dW)("Library")
							},
							[y.LEAGUES]: {
								bullets: [{
									icon: "circle-timer",
									text: (0, s.dW)("Play and win games to earn points")
								}, {
									icon: "calendar",
									text: (0, s.dW)("All major formats supported - bullet, blitz, rapid & arena")
								}, {
									icon: "cup",
									text: (0, s.dW)("The longer the time control, the more points you earn")
								}],
								icon: "cup",
								storageKey: "leagues_intro_modal_dismissed",
								subtitleBottom: (0, s.dW)("Earn trophies and advance to the Next League by playing games."),
								title: (0, s.dW)("Players Leagues")
							}
						},
						P = O => w[O],
						k = {
							HOME: t.Z.generate("web_user_home")
						}
				},
				70885: function(m, a, e) {
					e.d(a, {
						hV: function() {
							return t
						},
						lB: function() {
							return s
						},
						_l: function() {
							return i
						},
						gQ: function() {
							return o
						},
						FI: function() {
							return c
						}
					});
					var n = e(15875);
					const t = {
							FIGURINE: "figurine",
							TEXT: "text"
						},
						s = {
							BLACK: 2,
							WHITE: 1
						},
						i = {
							BLACK: "black",
							WHITE: "white"
						},
						r = {
							black: "BLACK",
							white: "WHITE"
						},
						o = {
							B: "bishop",
							K: "king",
							N: "knight",
							R: "rook",
							Q: "queen"
						};
					let u;
					const c = () => (u || (u = {
						B: n.$H.trans("move_list.algebraic.B", null, "moves") || "B",
						K: n.$H.trans("move_list.algebraic.K", null, "moves") || "K",
						N: n.$H.trans("move_list.algebraic.N", null, "moves") || "N",
						R: n.$H.trans("move_list.algebraic.R", null, "moves") || "R",
						Q: n.$H.trans("move_list.algebraic.Q", null, "moves") || "Q"
					}), u)
				},
				28190: function(m, a, e) {
					e.d(a, {
						o: function() {
							return s
						}
					});
					var n = e(70885);

					function t(i) {
						return (0, n.FI)()[i]
					}

					function s(i) {
						return i.includes("O-O") ? i : i.replace(/[BKNRQ]/g, t)
					}
				},
				13290: function(m, a, e) {
					e.d(a, {
						t: function() {
							return n
						}
					});
					const n = () => document.querySelector("html").getAttribute("dir") === "rtl"
				},
				6850: function(m, a) {
					a.Z = {
						modalStates: {
							select: "select",
							send: "send",
							sent: "sent"
						},
						types: {
							game: "game",
							social: "social"
						}
					}
				},
				99670: function(m, a, e) {
					e.d(a, {
						ZC: function() {
							return r
						},
						Wp: function() {
							return c
						},
						yc: function() {
							return p
						},
						xL: function() {
							return b
						},
						_j: function() {
							return g
						},
						Iz: function() {
							return v
						},
						p0: function() {
							return n.p
						},
						Cz: function() {
							return w
						},
						rP: function() {
							return P
						},
						U3: function() {
							return T
						},
						Zj: function() {
							return C
						}
					});
					var n = e(81005),
						t = e(6936),
						s = e(66103);
					const i = {
							CAN_EDIT_FLAIR: "data-can-edit-flair",
							IS_ENABLED: "data-is-enabled",
							MEMBERSHIP_LEVEL: "data-membership-level",
							USERNAME: "data-username",
							USER_ID: "data-user-id"
						},
						r = {
							REPORT_USER: "web_user_callback_report_user",
							REPORT_TV_USER: "web_tv_callback_report",
							USER_POPUP: "web_user_callback_popup"
						},
						o = "membership_icons",
						u = [{
							key: "membership_icons",
							title: s.Z.trans("Membership Icons")
						}, {
							key: "emoji",
							title: s.Z.trans("Emoji")
						}, {
							key: "chess",
							title: s.Z.trans("Chess")
						}, {
							key: "holiday",
							title: s.Z.trans("Holiday")
						}, {
							key: "hosts",
							title: s.Z.trans("Hosts")
						}, {
							key: "computer_chess",
							title: s.Z.trans("Computer Chess")
						}, {
							key: "pro_chess_league",
							title: s.Z.trans("PRO Chess League")
						}],
						c = {
							category: "membership_icons",
							code: "nothing",
							description: s.Z.trans("Nothing"),
							id: 206,
							imageCode: "nothing",
							membershipLevelCode: "staff",
							name: s.Z.trans("Nothing"),
							status: ""
						},
						l = "diamond_traditional",
						p = ["blocked", "clear", "clear_light"],
						h = 500,
						_ = 200,
						b = {
							USER_FLAIR: "user-flair",
							USER_SEARCH: "user-search",
							USER_POPOVER_CONTAINER: "user-popover"
						},
						g = {
							about: () => t.Z.generate("web_about"),
							membership: (D = "icon") => t.Z.generate("web_membership", {
								c: D
							}),
							usernameSearch: D => t.Z.generate("web_user_callback_username_search", {
								activeDays: 4e3,
								...D
							}),
							userDivision: ({
								league: D,
								division: L
							}) => t.Z.generate("web_league_division", {
								league: D,
								division: L
							}),
							userProfile: D => t.Z.generate("web_member_view", {
								username: D
							})
						},
						v = {
							acceptFriendRequest: s.Z.trans("Accept Friend Request"),
							addFriend: s.Z.trans("Add Friend"),
							block: s.Z.trans("Block"),
							blockConfirm: s.Z.trans("Are you sure you want to block this user?"),
							blockUser: D => s.Z.trans("Block %username%?", {
								"%username%": D
							}),
							cancel: s.Z.trans("Cancel"),
							cancelFriendRequest: s.Z.trans("Cancel Friend Request"),
							challenge: s.Z.trans("Challenge"),
							follow: s.Z.trans("Follow"),
							gameArchive: s.Z.trans("Game Archive"),
							giftMembership: s.Z.trans("Gift Membership"),
							giveTrophy: s.Z.trans("Give Award"),
							joinedDate: D => s.Z.trans("Joined %1$s%", {
								"%1$s%": D
							}),
							lastOnline: D => s.Z.trans("Online %1$s%", {
								"%1$s%": D
							}),
							moderator: s.Z.trans("Moderator"),
							onlineNow: s.Z.trans("Online Now"),
							inLiveNow: s.Z.trans("In Live"),
							removeFriend: s.Z.trans("Remove Friend"),
							removeFriendConfirm: s.Z.trans("Are you sure you want to remove this friend from your list?"),
							report: s.Z.trans("Report"),
							reportUser: D => s.Z.trans("Report %username%", {
								"%username%": D
							}),
							sendMessage: s.Z.trans("Send Message"),
							showYourFlair: s.Z.trans("Show your flair!"),
							staff: s.Z.trans("Staff"),
							unblock: s.Z.trans("Unblock"),
							unfollow: s.Z.trans("Unfollow"),
							userReportError: s.Z.trans("Tell us more...")
						},
						E = 225,
						y = {
							[n.p.diamond]: "diamond",
							[n.p.abuser]: "abuser",
							[n.p.cheater]: "cheater",
							[n.p.voluntarilyClosed]: "inactive",
							[n.p.unspecifiedClosed]: "cheater",
							[n.p.gold]: "gold",
							[n.p.moderator]: "pawn-blue",
							[n.p.platinum]: "platinum",
							[n.p.staff]: "pawn-green"
						},
						w = {
							[n.p.basic]: s.Z.trans("Basic Membership"),
							[n.p.diamond]: s.Z.trans("Diamond Membership"),
							[n.p.cheater]: s.Z.trans("Closed: Fair Play"),
							[n.p.abuser]: s.Z.trans("Closed: Abuse"),
							[n.p.voluntarilyClosed]: s.Z.trans("Closed: Inactive"),
							[n.p.unspecifiedClosed]: s.Z.trans("Account Closed"),
							[n.p.gold]: s.Z.trans("Gold Membership"),
							[n.p.moderator]: s.Z.trans("Moderator Account"),
							[n.p.platinum]: s.Z.trans("Platinum Membership"),
							[n.p.silver]: s.Z.trans("Silver Membership"),
							[n.p.staff]: s.Z.trans("Staff Account")
						},
						P = {
							GM: s.Z.trans("Grandmaster"),
							WGM: s.Z.trans("Woman Grandmaster"),
							IM: s.Z.trans("International Master"),
							WIM: s.Z.trans("Woman International Master"),
							FM: s.Z.trans("FIDE Master"),
							WFM: s.Z.trans("Woman FIDE Master"),
							NM: s.Z.trans("National Master"),
							CM: s.Z.trans("FIDE Candidate Master"),
							WCM: s.Z.trans("FIDE Woman Candidate Master"),
							WNM: s.Z.trans("Woman National Master")
						},
						k = D => D === !0 || D === "online",
						O = D => D === "onlive",
						T = {
							AUTOCOMPLETE_CLEAR_SELECTED: "form-autocomplete-clear-selected"
						},
						C = {
							FETCH_ROLES: "fetchRoles"
						}
				},
				81005: function(m, a, e) {
					e.d(a, {
						p: function() {
							return n
						}
					});
					const n = {
						guest: 0,
						cheater: 5,
						abuser: 6,
						voluntarilyClosed: 7,
						unspecifiedClosed: 8,
						basic: 10,
						silver: 20,
						gold: 30,
						platinum: 40,
						diamond: 50,
						moderator: 80,
						staff: 90
					}
				},
				84610: function(m, a, e) {
					e.d(a, {
						jl: function() {
							return t.j
						},
						sQ: function() {
							return c
						},
						nJ: function() {
							return n.n
						},
						RN: function() {
							return p
						},
						S_: function() {
							return b
						},
						yO: function() {
							return O
						}
					});
					var n = e(32717),
						t = e(30533),
						s = e(1653),
						i = e(6936),
						r = e(99670);
					const o = window.context,
						u = () => {
							var D;
							return !!(isLoggedIn() && ((D = o.user) == null ? void 0 : D.isEnabled))
						},
						c = () => {
							var D;
							return !!((0, t.j)() && ((D = o.user) == null ? void 0 : D.isImpersonating))
						},
						l = () => {
							var D;
							return (D = o.user) == null ? void 0 : D.isPremium
						},
						p = () => (0, t.j)() && !(0, n.n)(),
						h = () => {
							var D;
							return !!(isLoggedIn() && ((D = o.user) == null ? void 0 : D.eligibleFirstTrial))
						},
						_ = D => Boolean(D.chess_title),
						b = D => {
							if (!(0, t.j)()) return !1;
							let L = !1;
							switch (D) {
								case "isActivated":
									L = o.user.isActivated;
									break;
								case "isStaff":
									L = o.user.membershipLevel >= r.p0.staff;
									break;
								case "isStaffOnly":
									L = o.user.membershipLevel === r.p0.staff;
									break;
								case "isModerator":
									L = o.user.membershipLevel >= r.p0.moderator;
									break;
								case "isModeratorOnly":
									L = o.user.membershipLevel === r.p0.moderator;
									break;
								case "isDiamond":
									L = o.user.membershipLevel >= r.p0.diamond;
									break;
								case "isDiamondOnly":
									L = o.user.membershipLevel === r.p0.diamond;
									break;
								case "isPlatinum":
									L = o.user.membershipLevel >= r.p0.platinum;
									break;
								case "isPlatinumOnly":
									L = o.user.membershipLevel === r.p0.platinum;
									break;
								case "isSilver":
									L = o.user.membershipLevel >= r.p0.silver;
									break;
								case "isSilverOnly":
									L = o.user.membershipLevel === r.p0.silver;
									break;
								case "isGold":
									L = o.user.membershipLevel >= r.p0.gold;
									break;
								case "isGoldOnly":
									L = o.user.membershipLevel === r.p0.gold;
									break;
								case "isPremium":
									L = o.user.membershipLevel >= r.p0.silver;
									break;
								case "isBasic":
									L = o.user.membershipLevel === r.p0.basic;
									break;
								case "isNewlyRegistered":
									L = o.user.isNewlyRegistered;
									break;
								case "isGuest":
									L = o.user.isGuest;
									break;
								case "chessTitle":
									L = o.user.chessTitle;
									break;
								default:
									L = !1;
									break
							}
							return L
						},
						g = D => {
							var L, x, W, z, F, V, Z, A, S, j, J, _e, we, G, X, re, ge, ve, We;
							let ie = !1;
							if (!isLoggedIn()) {
								switch (D) {
									case "diagramSettings":
										ie = {};
										break;
									case "isDarkMode":
										ie = getIsDarkMode();
										break;
									default:
										ie = null;
										break
								}
								return ie
							}
							switch (D) {
								case "cohort":
									ie = (L = o.user) == null ? void 0 : L.cohort;
									break;
								case "country":
									ie = (x = o.user) == null ? void 0 : x.country;
									break;
								case "flairCode":
									ie = (W = o.user) == null ? void 0 : W.flairCode;
									break;
								case "getUserId":
									ie = (z = o.user) == null ? void 0 : z.id;
									break;
								case "getUsername":
									ie = (F = o.user) == null ? void 0 : F.username;
									break;
								case "getAvatarUrl":
									ie = (V = o.user) == null ? void 0 : V.avatarUrl;
									break;
								case "getAvatarLargeUrl":
									ie = (Z = o.user) == null ? void 0 : Z.avatarLargeUrl;
									break;
								case "getSettingsAvatarUrl":
									ie = (A = o.user) == null ? void 0 : A.settingsAvatarUrl;
									break;
								case "getLastLoginDate":
									ie = (S = o.user) == null ? void 0 : S.lastLoginDate;
									break;
								case "registerDate":
									ie = (j = o.user) == null ? void 0 : j.registerDate;
									break;
								case "getBrowserTimezone":
									ie = window.jstz.determine().name();
									break;
								case "getTimezone":
									ie = (J = o.user) == null ? void 0 : J.timezone;
									break;
								case "getDiagramSettings":
									ie = o.diagramSettings;
									break;
								case "language":
									ie = o.i18n.locale;
									break;
								case "contentLanguage":
									ie = o.i18n.contentLanguage;
									break;
								case "speaksEnglish":
									ie = o.i18n.locale === "en_US";
									break;
								case "eligibleFirstTrial":
									ie = (_e = o.user) == null ? void 0 : _e.eligibleFirstTrial;
									break;
								case "fairPlayAgree":
									ie = (we = o.user) == null ? void 0 : we.fairPlayAgree;
									break;
								case "getArchiveView":
									ie = (G = o.user) != null && G.archiveView ? o.user.archiveView : "grid";
									break;
								case "homeContentType":
									ie = "following";
									break;
								case "getMembershipLevel":
									ie = (X = o.user) == null ? void 0 : X.membershipLevel;
									break;
								case "isContentHidden":
									ie = (re = o.user) == null ? void 0 : re.isContentHidden;
									break;
								case "isDarkMode":
									ie = getIsDarkMode();
									break;
								case "rating":
									ie = (ge = o.user) == null ? void 0 : ge.rating;
									break;
								case "safeMode":
									ie = (ve = o.user) == null ? void 0 : ve.safeMode;
									break;
								case "uuid":
									ie = (We = o.user) == null ? void 0 : We.uuid;
									break;
								default:
									ie = !1;
									break
							}
							return ie
						},
						v = () => isLoggedIn() ? window.location.href === Router.generate("web_member_view", {
							username: (void 0).getUsername()
						}) : !1,
						E = D => D === "grid" || D === "list",
						y = D => D === "following" || D === "my_activity",
						w = () => {
							var D;
							return isLoggedIn() ? (D = o.user) == null ? void 0 : D.features : {}
						},
						P = D => D ? `<a href="${Router.generate("web_member_view",{username:D})}" target="_self">${D}</a>` : "",
						k = (D, L) => {
							if (!D || !L) return "";
							switch (L) {
								case "profile":
									return Router.generate("web_member_view", {
										username: D
									});
								case "trophies":
									return Router.generate("web_member_view", {
										username: D,
										view: "trophies"
									});
								case "stats":
									return Router.generate("web_stats", {
										username: D
									});
								default:
									return Router.generate("web_member_view", {
										username: D
									})
							}
						},
						O = (D, L) => !L && D >= r.p0.basic ? r.p0.unspecifiedClosed : D,
						T = D => Object.keys(membership).filter(L => membership[L] === D || L === D)[0],
						C = {
							excludeByMembershipType: (D, {
								user: L
							}) => L.membership_level !== D,
							excludeUsersWithComparisonArray: (D, {
								user: L
							}) => {
								if (D.findIndex(x => x.id === L.id) === -1) return L
							}
						}
				},
				32717: function(m, a, e) {
					e.d(a, {
						n: function() {
							return n
						}
					});

					function n() {
						var t, s;
						return Boolean((s = (t = window.context) == null ? void 0 : t.user) == null ? void 0 : s.isGuest)
					}
				},
				30533: function(m, a, e) {
					e.d(a, {
						j: function() {
							return t
						}
					});
					var n = e(94068);

					function t() {
						var s;
						return Boolean(((s = window.context) == null ? void 0 : s.user) && !(0, n.Z)())
					}
				},
				14647: function(m, a, e) {
					e.d(a, {
						Y: function() {
							return i
						}
					});
					var n = e(10430),
						t = e(30533),
						s = e(40360);

					function i({
						slide: r,
						title: o
					} = {}) {
						Promise.all([e.e(1010), e.e(5435)]).then(e.bind(e, 94865)).then(({
							default: u
						}) => {
							u.createInstance(n.xL.GUEST_MODAL);
							const c = (0, t.j)() ? void 0 : n._G.GUEST_MODAL_SLIDES.pawn;
							(0, s.o)({
								key: n.U3.SHOW_GUEST_MODAL,
								slide: r || c,
								title: o
							})
						})
					}
				},
				72183: function(m, a, e) {
					e.d(a, {
						m: function() {
							return o
						}
					});
					var n = e(6640),
						t = e(42049),
						s = e(72581),
						i = e(40360);
					const r = {
						show: s.t.AUTHENTICATION_SIGNUP
					};

					function o(u = r) {
						Promise.all([e.e(6453), e.e(1010), e.e(8731)]).then(e.bind(e, 78731)).then(({
							default: c
						}) => {
							c.createInstance(t.x.AUTHENTICATION_MODAL), (0, i.o)({
								key: n.U.SHOW_AUTHENTICATION_MODAL,
								...u
							})
						})
					}
				},
				62426: function(m, a, e) {
					e.d(a, {
						l: function() {
							return s
						}
					});
					var n = e(12352),
						t = e(40360);
					const s = (i = {}) => {
						(0, t.o)({
							key: n.U3.SHOW_UPGRADE_MODAL,
							payload: i
						})
					}
				},
				99996: function(m, a, e) {
					e.d(a, {
						A: function() {
							return i
						}
					});
					var n = e(88623),
						t = e(93590);
					async function s(r) {
						const {
							data: o
						} = await (0, n.K)(r);
						return o.users.reduce((u, c) => (u[c.id] = (0, t.O)(c), u), {})
					}
					async function i(r) {
						return (await s([r]))[r]
					}
				},
				88623: function(m, a, e) {
					e.d(a, {
						K: function() {
							return s
						}
					});
					var n = e(32494),
						t = e(30179);
					async function s(i) {
						return (0, t.h)({
							service: n.AM.Presence,
							path: [n.fz.Users],
							params: {
								ids: i.slice(0, 25).join(",")
							}
						})
					}
				},
				93590: function(m, a, e) {
					e.d(a, {
						O: function() {
							return s
						}
					});
					var n = e(6936),
						t = e(69605);

					function s(i) {
						var r, o;
						const {
							activity: u,
							activityContext: c,
							id: l,
							status: p,
							statusAt: h,
							statusAtUncertain: _
						} = i, b = {
							battleLink: void 0,
							eventLink: void 0,
							gameLink: void 0,
							id: l,
							isOfflineStatusUncertain: void 0,
							isOnline: p === t.p.Online,
							isPlaying: u === t.V.Playing,
							offlineSince: void 0,
							statusAt: h
						};
						if (p === t.p.Offline && (b.offlineSince = h), (r = c?.games) != null && r.length) {
							const g = c.games[0],
								v = g.legacyId ? "web_game_live" : "web_game_rcn",
								E = g.legacyId || g.id;
							b.gameLink = n.Z.generate(v, {
								id: E
							})
						} else if ((o = c?.battles) != null && o.length) {
							const g = c.battles[0].id;
							b.battleLink = n.Z.generate("web_puzzles_mode_battle_view", {
								shortUuid: g
							})
						}
						return b.isOfflineStatusUncertain = _, b
					}
				},
				69605: function(m, a, e) {
					e.d(a, {
						V: function() {
							return n
						},
						p: function() {
							return t
						}
					});
					var n = (s => (s.None = "none", s.Playing = "playing", s))(n || {}),
						t = (s => (s.Offline = "offline", s.Online = "online", s))(t || {})
				},
				72420: function(m, a, e) {
					e.d(a, {
						t: function() {
							return t
						}
					});
					var n = e(52553);
					class t extends n.Hn {}
				},
				72012: function(m, a, e) {
					e.d(a, {
						_: function() {
							return r
						}
					});
					var n = e(52553),
						t = Object.defineProperty,
						s = (o, u, c) => u in o ? t(o, u, {
							enumerable: !0,
							configurable: !0,
							writable: !0,
							value: c
						}) : o[u] = c,
						i = (o, u, c) => (s(o, typeof u != "symbol" ? u + "" : u, c), c);
					class r extends n.Hn {
						constructor() {
							super(...arguments), i(this, "id", 0), i(this, "date", ""), i(this, "content", ""), i(this, "pending", !1), i(this, "retry", !1), i(this, "animate", !1), i(this, "visible", !0), i(this, "isRemovable", !1), i(this, "requestId", ""), i(this, "sender", null), i(this, "component", null), i(this, "props", null), i(this, "on", null), i(this, "uuid", "")
						}
					}
				},
				79858: function(m, a, e) {
					e.d(a, {
						h: function() {
							return t
						}
					});
					var n = e(52553);
					class t extends n.Hn {}
				},
				46769: function(m, a, e) {
					e.d(a, {
						P: function() {
							return r
						}
					});
					var n = e(52553),
						t = Object.defineProperty,
						s = (o, u, c) => u in o ? t(o, u, {
							enumerable: !0,
							configurable: !0,
							writable: !0,
							value: c
						}) : o[u] = c,
						i = (o, u, c) => (s(o, typeof u != "symbol" ? u + "" : u, c), c);
					class r extends n.Hn {
						constructor() {
							super(...arguments), i(this, "avatarUrl", ""), i(this, "canComment", !1), i(this, "isFollowing", !1), i(this, "isGuest", !1), i(this, "username", "")
						}
					}
				},
				30133: function(m, a, e) {
					e.d(a, {
						s: function() {
							return r
						}
					});
					var n = e(52553),
						t = Object.defineProperty,
						s = (o, u, c) => u in o ? t(o, u, {
							enumerable: !0,
							configurable: !0,
							writable: !0,
							value: c
						}) : o[u] = c,
						i = (o, u, c) => (s(o, typeof u != "symbol" ? u + "" : u, c), c);
					class r extends n.Hn {
						constructor() {
							super(...arguments), i(this, "author", {}), i(this, "body", ""), i(this, "createdAtRelative", ""), i(this, "id", 0), i(this, "reactionsId", ""), i(this, "user", {}), i(this, "visibilityPolicy", !1)
						}
					}
				},
				78543: function(m, a, e) {
					e.d(a, {
						v: function() {
							return r
						}
					});
					var n = e(52553),
						t = Object.defineProperty,
						s = (o, u, c) => u in o ? t(o, u, {
							enumerable: !0,
							configurable: !0,
							writable: !0,
							value: c
						}) : o[u] = c,
						i = (o, u, c) => (s(o, typeof u != "symbol" ? u + "" : u, c), c);
					class r extends n.Hn {
						constructor() {
							super(...arguments), i(this, "fen", ""), i(this, "flipBoard", !1), i(this, "highlightSquares", ""), i(this, "id", 0), i(this, "isMyTurnToMove", !1), i(this, "opponent", {
								avatarUrl: "",
								chessTitle: null,
								country: null,
								flairCode: null,
								id: 0,
								uuid: "",
								isFriend: null,
								membershipLevel: 0,
								rating: 0,
								username: ""
							}), i(this, "timeLeftDisplay", "")
						}
					}
				},
				17856: function(m, a, e) {
					e.d(a, {
						_: function() {
							return b
						}
					});
					var n = e(39059),
						t = e(15413),
						s = e(31619),
						i = e(5148),
						r = e(93485),
						o = e(15875),
						u = e(72420),
						c = e(39185),
						l = e(90204),
						p = Object.defineProperty,
						h = (g, v, E) => v in g ? p(g, v, {
							enumerable: !0,
							configurable: !0,
							writable: !0,
							value: E
						}) : g[v] = E,
						_ = (g, v, E) => (h(g, typeof v != "symbol" ? v + "" : v, E), E);
					class b extends u.t {
						constructor() {
							super(...arguments), _(this, "daysPerMove", 3), _(this, "from", new c.$), _(this, "gameType", "chess"), _(this, "id", 0), _(this, "initialSetup", null), _(this, "isRated", !0), _(this, "maxRatingDelta", null), _(this, "minRatingDelta", null), _(this, "baseRating", 0), _(this, "name", ""), _(this, "seekerAvatar", ""), _(this, "seekerColor", 0), _(this, "seekerCountry", null), _(this, "seekerFlairCode", null), _(this, "seekerMembershipLevel", null), _(this, "seekerRating", 1200), _(this, "seekerTitle", ""), _(this, "seekerUserId", 0), _(this, "seekerUsername", ""), _(this, "to", null)
						}
						is960() {
							return this.gameType === "chess960"
						}
						isVariant() {
							return this.gameType !== "chess"
						}
						getChallengeId() {
							return this.id
						}
						getEstimatedDuration() {
							return (0, n.f)(this.getTimeControl())
						}
						getRating() {
							return this.seekerRating
						}
						getRatingToClosestHundred() {
							return Math.round(this.getRating() / 100) * 100
						}
						getGameType() {
							return this.gameType
						}
						getFrom() {
							return this.from
						}
						getTo() {
							return this.to
						}
						getColor() {
							return this.seekerColor
						}
						hasColor() {
							return Boolean(this.seekerColor)
						}
						getGameIcon() {
							return (0, s.N)(this.getTimeControl(), this.gameType)
						}
						getGameLabel() {
							const v = this.isVariant() ? this.getGameTypeLabel() : (0, r.n)(this.getTimeControl()),
								E = this.getTo();
							return E ? `${v} vs ${E.getUsername()}` : v
						}
						getGameTypeLabel() {
							var v;
							return ((v = (0, l.A)(this.gameType)) == null ? void 0 : v.label) || ""
						}
						getTimeControl() {
							return {
								baseTime: this.daysPerMove,
								timeIncrement: 0,
								timeType: "daily"
							}
						}
						getTimeLabel() {
							return (0, i.X)(this.getTimeControl())
						}
						getRatedLabel() {
							return this.isRated ? (0, o.dW)("Rated") : (0, o.dW)("Unrated")
						}
						getColorLabel() {
							return this.seekerColor ? this.seekerColor === 1 ? (0, o.dW)("White") : (0, o.dW)("Black") : ""
						}
						getRatingType() {
							return (0, t.G)(this.getTimeControl(), this.gameType)
						}
						getTimeRatedLabel() {
							let v = this.getTimeLabel();
							return this.isRated || (v += ` (${this.getRatedLabel()})`), v
						}
						isRatedChallenge() {
							return this.isRated
						}
						getMaxRating() {
							return !this.maxRatingDelta || !this.baseRating ? null : this.baseRating + this.maxRatingDelta
						}
						getMinRating() {
							return !this.minRatingDelta || !this.baseRating ? null : this.baseRating - this.minRatingDelta
						}
						isAccepted() {
							return !1
						}
					}
				},
				80105: function(m, a, e) {
					e.d(a, {
						C: function() {
							return E
						}
					});
					var n = e(52553),
						t = e(69562);
					const s = ({
							timeControl: y,
							timestamps: w,
							convertTimeUnit: P = t.w4
						}) => w.map(k => typeof k == "number" ? Math.max(1, P(Number(y.substr(2))) - k) : k),
						i = ({
							timestamps: y,
							baseTime: w,
							timeIncrement: P
						}) => y.map((k, O) => typeof k != "number" ? k : O <= 1 ? w - k + P : y[O - 2] - k + P),
						r = ({
							timestamps: y,
							baseTime: w,
							timeIncrement: P
						}) => y.map((k, O) => O <= 1 ? w - k + P : y[O - 2] - k + P);
					var o = e(91008),
						u = e(15413),
						c = e(83187),
						l = e(31619),
						p = e(15875),
						h = e(45463),
						_ = e(9085),
						b = Object.defineProperty,
						g = (y, w, P) => w in y ? b(y, w, {
							enumerable: !0,
							configurable: !0,
							writable: !0,
							value: P
						}) : y[w] = P,
						v = (y, w, P) => (g(y, typeof w != "symbol" ? w + "" : w, P), P);
					class E extends n.Hn {
						constructor() {
							super(...arguments), v(this, "allowVacation", !1), v(this, "areFriends", !1), v(this, "baseTime1", null), v(this, "canSendTrophy", !1), v(this, "changesPlayersRating", !1), v(this, "colorOfWinner", ""), v(this, "daysPerTurn", 0), v(this, "endTime", ""), v(this, "gameEndReason", ""), v(this, "highlightSquares", ""), v(this, "id", 0), v(this, "initialSetup", ""), v(this, "isAbortable", !1), v(this, "isAnalyzable", !1), v(this, "isCheckmate", !1), v(this, "isVsComputer", !1), v(this, "isFinished", !1), v(this, "isLiveGame", !1), v(this, "isPlayerTurn", !1), v(this, "isPreviousNextLoading", !1), v(this, "isRated", !1), v(this, "isResignable", !1), v(this, "isStalemate", !1), v(this, "isCommentsVisible", !1), v(this, "isTakeback", !1), v(this, "lastActivityChat", 0), v(this, "lastDate", 0), v(this, "lastMove", ""), v(this, "moveList", ""), v(this, "nextGame", null), v(this, "notes", ""), v(this, "pgnHeaders", null), v(this, "players", []), v(this, "plyCount", 0), v(this, "previousGame", null), v(this, "ratingChange", 0), v(this, "ratingChangeBlack", 0), v(this, "ratingChangePotential", null), v(this, "ratingChangeWhite", 0), v(this, "resultMessage", ""), v(this, "startingPositionId", 0), v(this, "startTime", 0), v(this, "teamMatch", null), v(this, "timeIncrement1", null), v(this, "timestamps", []), v(this, "tournament", null), v(this, "turnColor", ""), v(this, "turnTimeRemaining", ""), v(this, "type", "chess"), v(this, "partnerGameId", null), v(this, "partnerGame", null), v(this, "uuid", null)
						}
						getBoardRef() {
							return {
								id: this.id,
								type: _.V.DailyGame
							}
						}
						getPlayerToMove() {
							return this.plyCount % 2
						}
						getPlayerIndex(w) {
							if ((0, h.hj)(w)) return w;
							let P;
							return (0, h.HD)(w) ? P = w : P = w.username, this.players.findIndex(k => k.username === P)
						}
						isCustomPosition() {
							return this.type === "chess" && Boolean(this.initialSetup) && this.initialSetup !== (0, o.H)()
						}
						isPlaying(w) {
							return this.getPlayerIndex(w) !== -1
						}
						getCanShowComments(w) {
							return this.isLiveGame || this.isVsComputer ? !0 : !w || this.isFinished
						}
						getPlayerClock(w, P) {
							if (!this.isLiveGame && !this.isVsComputer) return 0;
							const k = this.getPlayerIndex(w);
							if (P === 0) return Number(this.baseTime1);
							if (P === 1 && k === 1) return Number(this.baseTime1);
							const O = this.getTimestamps(),
								T = O[O.length - 1];
							if (P === -1 || P > this.plyCount || P > O.length) return T;
							const C = P - 1;
							return C % 2 === k ? O[C] : O[C - 1]
						}
						getDailyClock(w) {
							var P;
							return this.isLiveGame || this.isVsComputer ? "" : this.isFinished ? (0, p.jn)("{1} 1 day|]1,Inf] %1$s% days", this.daysPerTurn, {
								"%1$s%": this.daysPerTurn
							}) : this.isPlayerOnVacation(w) ? (0, p.dW)("Vacation") : (P = this.getPlayer(w)) == null ? void 0 : P.turnTimeRemaining
						}
						isPlayerOnVacation(w) {
							const P = this.getPlayer(w);
							return this.allowVacation && P.isVacation
						}
						getClockTooltip(w) {
							if (!this.isPlayerOnVacation(w)) return "";
							const P = this.getPlayer(w);
							return (0, p.dW)("%relativeTime% of vacation remaining", {
								"%relativeTime%": P.vacationRemaining
							})
						}
						getGameType() {
							return this.type
						}
						isVariant() {
							return this.getGameType() !== "chess"
						}
						getInitialPosition() {
							return this.initialSetup || (0, o.H)()
						}
						getPlayer(w) {
							const P = (0, h.hj)(w) ? w : this.getPlayerIndex(w);
							return this.players[P]
						}
						getOpponent(w) {
							return this.players[1 - this.getPlayerIndex(w)]
						}
						getWhitePlayer() {
							return this.players[0]
						}
						getBlackPlayer() {
							return this.players[1]
						}
						getWinnerIndex() {
							switch (this.colorOfWinner) {
								case "black":
									return 1;
								case "white":
									return 0;
								default:
									return -1
							}
						}
						getTimeControl() {
							var w, P, k;
							return this.isLiveGame || this.isVsComputer ? (0, c.B)({
								baseTime: (0, t.dL)((w = this.baseTime1) != null ? w : 0),
								timeIncrement: (0, t.dL)((P = this.timeIncrement1) != null ? P : 0),
								timeType: ((k = this.baseTime1) != null ? k : 0) > 0 ? "live" : "none"
							}) : (0, c.B)({
								timeType: "daily",
								baseTime: this.daysPerTurn
							})
						}
						getTimeControlIcon() {
							return this.isVsComputer ? "vs-bot" : (0, l.N)(this.getTimeControl(), this.getGameType())
						}
						getRatingType() {
							return (0, u.G)(this.getTimeControl(), this.getGameType())
						}
						isOver() {
							return this.isFinished
						}
						getTimestamps() {
							const w = this.timestamps ? this.timestamps.slice(0) : [];
							for (; this.startingPositionId && w.length < this.moveList.length / 2;) w.unshift(null);
							return w
						}
						getMoveListTimestamps() {
							const w = this.pgnHeaders.TimeControl,
								P = this.getTimestamps();
							if (this.isLiveGame || this.isVsComputer) {
								const {
									baseTime: k,
									timeIncrement: O
								} = this.getTimeControl();
								return i({
									baseTime: (0, t.DY)(k ?? 0),
									timeIncrement: (0, t.DY)(O ?? 0),
									timestamps: P
								})
							}
							return s({
								timeControl: w,
								timestamps: P,
								convertTimeUnit: t.DY
							})
						}
						getMoves() {
							return this.moveList
						}
						getMovesBeforeAnimation(w) {
							const P = this.getMoves();
							return w ? P.substring(0, P.length - 2) : P
						}
						getLastMove() {
							const w = this.getMoves();
							return w.substring(w.length - 2)
						}
						getRcnChannel() {
							return `notification/games/${this.id}/last-activity`
						}
						getRematchColor(w) {
							const P = this.getPlayerIndex(w);
							return this.isCustomPosition() ? P + 1 : 3 - (P + 1)
						}
					}
				},
				96794: function(m, a, e) {
					e.d(a, {
						J: function() {
							return r
						}
					});
					var n = e(52553),
						t = Object.defineProperty,
						s = (o, u, c) => u in o ? t(o, u, {
							enumerable: !0,
							configurable: !0,
							writable: !0,
							value: c
						}) : o[u] = c,
						i = (o, u, c) => (s(o, typeof u != "symbol" ? u + "" : u, c), c);
					class r extends n.Hn {
						constructor() {
							super(...arguments), i(this, "animating", !1), i(this, "isPendingMove", !1), i(this, "showSpinner", !1), i(this, "submitted", !1), i(this, "submitting", !1), i(this, "toggled", !1)
						}
					}
				},
				97008: function(m, a, e) {
					e.d(a, {
						f: function() {
							return p
						}
					});
					var n = e(52553),
						t = e(91008),
						s = e(83187),
						i = e(42591),
						r = e(9045),
						o = e(9085),
						u = Object.defineProperty,
						c = (h, _, b) => _ in h ? u(h, _, {
							enumerable: !0,
							configurable: !0,
							writable: !0,
							value: b
						}) : h[_] = b,
						l = (h, _, b) => (c(h, typeof _ != "symbol" ? _ + "" : _, b), b);
					class p extends n.Hn {
						constructor() {
							super(...arguments), l(this, "createDate", 0), l(this, "daysPerMove", 0), l(this, "eco", null), l(this, "gameTypeId", 0), l(this, "hasBasicAcceptPermissions", !1), l(this, "hasCustomFen", !1), l(this, "hasOpponent", !1), l(this, "id", 0), l(this, "initialSetup", ""), l(this, "isRated", !1), l(this, "isSeeker", !1), l(this, "isSeekerOnTop", !1), l(this, "isTakeback", !1), l(this, "name", ""), l(this, "opponent", new i.Q({})), l(this, "ratingDeltas", null), l(this, "resultHistory", null), l(this, "seeker", new i.Q({})), l(this, "seekerColor", 0), l(this, "seekerSettings", {
								vacationTime: 0
							}), l(this, "seekerStats", null), l(this, "timeoutPercent", 0)
						}
						getBoardRef() {
							return {
								id: this.id,
								type: o.V.DailySeek
							}
						}
						isChess960() {
							return this.gameTypeId === r.I
						}
						getInitialPosition() {
							return this.isChess960() ? "8/pppppppp/8/8/8/8/PPPPPPPP/8" : this.initialSetup.length ? this.initialSetup : (0, t.H)()
						}
						getPlayer(_) {
							const b = this.seekerColor < 2 ? this.seeker : this.opponent,
								g = this.seekerColor < 2 ? this.opponent : this.seeker;
							return [b, g][_]
						}
						getWhitePlayer() {
							return this.getPlayer(0)
						}
						getBlackPlayer() {
							return this.getPlayer(1)
						}
						getTimeControl() {
							return (0, s.B)(`${this.daysPerMove}d`)
						}
					}
				},
				42591: function(m, a, e) {
					e.d(a, {
						Q: function() {
							return p
						}
					});
					var n = e(81005),
						t = e(52553),
						s = e(6936),
						i = e(16488),
						r = e(66248),
						o = e(51512),
						u = Object.defineProperty,
						c = (h, _, b) => _ in h ? u(h, _, {
							enumerable: !0,
							configurable: !0,
							writable: !0,
							value: b
						}) : h[_] = b,
						l = (h, _, b) => (c(h, typeof _ != "symbol" ? _ + "" : _, b), b);
					class p extends i.n {
						constructor(_) {
							super(), l(this, "avatarUrl", ""), l(this, "canWinOnTime", !1), l(this, "chessTitle", ""), l(this, "color", ""), l(this, "country", null), l(this, "flairCode", null), l(this, "gamesInProgress", 0), l(this, "hasConnectedTwitch", !1), l(this, "hasSupportRole", !1), l(this, "id", 0), l(this, "isActivated", !1), l(this, "isBlocked", !1), l(this, "isDrawable", !1), l(this, "isFriend", !1), l(this, "isEnabled", !1), l(this, "isGuest", !1), l(this, "isModerator", !1), l(this, "isRecentlyRegistered", !1), l(this, "isStaff", !1), l(this, "isStreamer", !1), l(this, "isInLivechess", !1), l(this, "isOnline", !1), l(this, "isTouchMove", !1), l(this, "isVacation", !1), l(this, "friendRequestReceived", !1), l(this, "friendRequestSent", !1), l(this, "membershipLevel", 0), l(this, "offeredDraw", !1), l(this, "optedLeagues", !0), l(this, "rating", 0), l(this, "username", ""), l(this, "uuid", ""), l(this, "turnTimeRemaining", ""), l(this, "vacationRemaining", ""), _ && (0, t.Uc)(this, _)
						}
						getAvatar() {
							return this.avatarUrl && !this.avatarUrl.includes("noavatar") ? this.avatarUrl : null
						}
						getUsername() {
							return this.username
						}
						getChessTitle() {
							return this.chessTitle
						}
						isSameUser(_) {
							return Boolean(_) && (0, o.M)(this) === (0, o.M)(_)
						}
						getFlairCode() {
							return this.flairCode
						}
						getCountry() {
							return this.country
						}
						hasFriendRelation() {
							return this.isFriend
						}
						getProfileUrl() {
							return s.Z.generate("web_member_view", {
								username: this.getUsername()
							})
						}
						isPremium() {
							return this.membershipLevel >= n.p.silver
						}
						getMembership() {
							return this.membershipLevel
						}
						getRating() {
							return this.rating
						}
						getTagline({
							ratingType: _,
							lightMode: b
						} = {}) {
							return (0, r.J)({
								username: this.getUsername(),
								chessTitle: this.getChessTitle(),
								rating: _ && !this.isGuest ? this.rating : 0,
								lightMode: b
							})
						}
					}
				},
				69920: function(m, a, e) {
					e.d(a, {
						H: function() {
							return o
						}
					});
					var n = e(52553),
						t = e(59386),
						s = Object.defineProperty,
						i = (u, c, l) => c in u ? s(u, c, {
							enumerable: !0,
							configurable: !0,
							writable: !0,
							value: l
						}) : u[c] = l,
						r = (u, c, l) => (i(u, typeof c != "symbol" ? c + "" : c, l), l);
					class o extends n.Hn {
						constructor(c) {
							super(), r(this, "challengedClubId", 0), r(this, "challengingClubId", 0), r(this, "endTime", new Date), r(this, "icon", ""), r(this, "id", ""), r(this, "imageUrl", null), r(this, "isClubEvent", !1), r(this, "isInProgress", !1), r(this, "label", ""), r(this, "order", 0), r(this, "playerCount", 0), r(this, "startTime", new Date), r(this, "timeLabel", ""), r(this, "type", t.o.Tournament), r(this, "timeClass", ""), r(this, "gameType", "chess"), c && (0, n.Uc)(this, c)
						}
					}
				},
				93948: function(m, a, e) {
					e.d(a, {
						C: function() {
							return h
						}
					});
					var n = e(31152),
						t = e(6936),
						s = e(15875),
						i = e(93590),
						r = e(69605),
						o = e(16488),
						u = e(51512),
						c = Object.defineProperty,
						l = (_, b, g) => b in _ ? c(_, b, {
							enumerable: !0,
							configurable: !0,
							writable: !0,
							value: g
						}) : _[b] = g,
						p = (_, b, g) => (l(_, typeof b != "symbol" ? b + "" : b, g), g);
					class h extends o.n {
						constructor() {
							super(...arguments), p(this, "avatar_url", ""), p(this, "best_rating", 0), p(this, "best_rating_type", ""), p(this, "country_id", 0), p(this, "country_name", ""), p(this, "create_date", ""), p(this, "chess_title", ""), p(this, "flair_code", ""), p(this, "is_enabled", 0), p(this, "is_friend", !1), p(this, "is_in_livechess", !1), p(this, "is_online", !1), p(this, "is_tracked", 0), p(this, "last_login_date", ""), p(this, "membership_level", 0), p(this, "user_id", 0), p(this, "user_uuid", ""), p(this, "username", ""), p(this, "presence", null)
						}
						getPresenceDetails() {
							return this.presence ? (0, i.O)(this.presence) : null
						}
						getAvatar() {
							return this.avatar_url && !this.avatar_url.includes("noavatar") ? this.avatar_url : (0, n.n)("bundles/web/images/user-image.svg")
						}
						getUsername() {
							return (0, u.M)(this)
						}
						getChessTitle() {
							return this.chess_title
						}
						isSameUser() {
							return !1
						}
						hasFriendRelation() {
							return Boolean(this.is_friend)
						}
						getFlairCode() {
							return this.flair_code
						}
						getCountry() {
							return this.country_name ? {
								name: (0, s.dW)(this.country_name, null, "countries"),
								code: this.country_id.toString()
							} : null
						}
						getProfileUrl() {
							return t.Z.generate("web_member_view", {
								username: this.getUsername()
							})
						}
						isPremium() {
							return !1
						}
						getMembership() {
							return this.membership_level
						}
						getRating() {
							return this.best_rating
						}
						isPlaying() {
							var b;
							return ((b = this.presence) == null ? void 0 : b.activity) === r.V.Playing
						}
						isOnline() {
							var b;
							return ((b = this.presence) == null ? void 0 : b.status) === r.p.Online
						}
						getSortableStatus() {
							return this.isPlaying() ? 0 : this.isOnline() ? 1 : 2
						}
						getFullName() {
							return this.getUsername()
						}
						getPlayerInfo() {
							return {
								id: this.user_id,
								uuid: this.user_uuid,
								isFriend: this.hasFriendRelation(),
								avatarUrl: this.getAvatar(),
								chessTitle: this.getChessTitle(),
								country: this.getCountry(),
								flairCode: this.getFlairCode(),
								fullName: this.getFullName(),
								membershipLevel: this.getMembership(),
								rating: this.getRating(),
								username: this.getUsername(),
								presenceDetails: this.getPresenceDetails()
							}
						}
						getCurrentGame() {
							var b, g, v;
							return ((v = (g = (b = this.presence) == null ? void 0 : b.activityContext) == null ? void 0 : g.games) == null ? void 0 : v[0]) || null
						}
					}
				},
				54897: function(m, a, e) {
					e.d(a, {
						f: function() {
							return r
						}
					});
					var n = e(52553),
						t = Object.defineProperty,
						s = (o, u, c) => u in o ? t(o, u, {
							enumerable: !0,
							configurable: !0,
							writable: !0,
							value: c
						}) : o[u] = c,
						i = (o, u, c) => (s(o, typeof u != "symbol" ? u + "" : u, c), c);
					class r extends n.Hn {
						constructor() {
							super(...arguments), i(this, "ratingchanges", []), i(this, "ratings", [])
						}
					}
				},
				50279: function(m, a, e) {
					e.d(a, {
						Q: function() {
							return r
						}
					});
					var n = e(52553),
						t = Object.defineProperty,
						s = (o, u, c) => u in o ? t(o, u, {
							enumerable: !0,
							configurable: !0,
							writable: !0,
							value: c
						}) : o[u] = c,
						i = (o, u, c) => (s(o, typeof u != "symbol" ? u + "" : u, c), c);
					class r extends n.Hn {
						constructor() {
							super(...arguments), i(this, "uuid", ""), i(this, "division", {
								inProgress: !1,
								league: {
									id: 0,
									name: ""
								},
								name: "",
								playersCount: 1,
								requiredCount: 50
							}), i(this, "stats", {
								ranking: 0,
								trophyCount: 0,
								trophyIncrement: 0
							}), i(this, "isGameValid", !1)
						}
					}
				},
				68440: function(m, a, e) {
					e.d(a, {
						R: function() {
							return p
						}
					});
					var n = e(52553),
						t = e(15413),
						s = e(5148),
						i = e(39185),
						r = e(82107),
						o = e(52117),
						u = Object.defineProperty,
						c = (h, _, b) => _ in h ? u(h, _, {
							enumerable: !0,
							configurable: !0,
							writable: !0,
							value: b
						}) : h[_] = b,
						l = (h, _, b) => (c(h, typeof _ != "symbol" ? _ + "" : _, b), b);
					class p extends n.Hn {
						constructor() {
							super(...arguments), l(this, "basetime", 600), l(this, "challengedgroupavatar", null), l(this, "challengedgroupid", 0), l(this, "challengedgroupname", ""), l(this, "challengedgroupurl", ""), l(this, "chessgroupavatar", null), l(this, "chessgroupid", 0), l(this, "chessgroupname", ""), l(this, "chessgroupurl", ""), l(this, "duration", 0), l(this, "gametype", "chess"), l(this, "id", 0), l(this, "localtime", Date.now()), l(this, "maxplayers", null), l(this, "name", ""), l(this, "owner", new i.$), l(this, "servertime", ""), l(this, "starttime", ""), l(this, "timeinc", 0), l(this, "uuid", "")
						}
						getLabel() {
							return this.name
						}
						getChallengedClubId() {
							return this.challengedgroupid
						}
						getChallengedClubName() {
							return this.challengedgroupname
						}
						getChallengedClubUrl() {
							return this.challengedgroupurl
						}
						getChallengedClubAvatar() {
							return this.challengedgroupavatar
						}
						getChallengingClubId() {
							return this.chessgroupid
						}
						getChallengingClubName() {
							return this.chessgroupname
						}
						getChallengingClubUrl() {
							return this.chessgroupurl
						}
						getChallengingClubAvatar() {
							return this.chessgroupavatar
						}
						getTimeControl() {
							return {
								timeType: "live",
								baseTime: this.basetime / 10,
								timeIncrement: this.timeinc / 10
							}
						}
						getTimeLabel() {
							return (0, s.X)(this.getTimeControl())
						}
						getRatingType() {
							return (0, t.G)(this.getTimeControl(), this.gametype)
						}
						isOwner(_) {
							return Boolean(this.owner && this.owner.isSameUser(_))
						}
						getVariantLabel() {
							return (0, o.T)(this.gametype)
						}
						getStartTime() {
							return (0, r.Z)(this.localtime, this.starttime, this.servertime)
						}
					}
				},
				8985: function(m, a, e) {
					e.d(a, {
						v: function() {
							return E
						}
					});
					var n = e(52553),
						t = e(11e3),
						s = Object.defineProperty,
						i = (y, w, P) => w in y ? s(y, w, {
							enumerable: !0,
							configurable: !0,
							writable: !0,
							value: P
						}) : y[w] = P,
						r = (y, w, P) => (i(y, typeof w != "symbol" ? w + "" : w, P), P);
					class o extends n.Hn {
						constructor() {
							super(...arguments), r(this, "arenaid", 0), r(this, "gameid", 0), r(this, "players", (0, n.BL)(t.T, {
								key: "getUsername",
								max: 2,
								create: 2
							}))
						}
						getWhitePlayer() {
							return this.players[0].user
						}
						getBlackPlayer() {
							return this.players[1].user
						}
					}
					var u = e(78631),
						c = Object.defineProperty,
						l = (y, w, P) => w in y ? c(y, w, {
							enumerable: !0,
							configurable: !0,
							writable: !0,
							value: P
						}) : y[w] = P,
						p = (y, w, P) => (l(y, typeof w != "symbol" ? w + "" : w, P), P);
					class h extends u.Y {
						constructor() {
							super(...arguments), p(this, "models", (0, n.BL)(o, {
								key: "gameid"
							}))
						}
					}
					var _ = e(42131),
						b = Object.defineProperty,
						g = (y, w, P) => w in y ? b(y, w, {
							enumerable: !0,
							configurable: !0,
							writable: !0,
							value: P
						}) : y[w] = P,
						v = (y, w, P) => (g(y, typeof w != "symbol" ? w + "" : w, P), P);
					class E extends _.C {
						constructor() {
							super(...arguments), v(this, "pages", (0, n.BL)(h, {
								key: "page"
							}))
						}
					}
				},
				11e3: function(m, a, e) {
					e.d(a, {
						T: function() {
							return u
						}
					});
					var n = e(52553),
						t = e(39185),
						s = e(930),
						i = Object.defineProperty,
						r = (c, l, p) => l in c ? i(c, l, {
							enumerable: !0,
							configurable: !0,
							writable: !0,
							value: p
						}) : c[l] = p,
						o = (c, l, p) => (r(c, typeof l != "symbol" ? l + "" : l, p), p);
					class u extends n.Hn {
						constructor() {
							super(...arguments), o(this, "arenaid", 0), o(this, "chessgroupid", 0), o(this, "currentstreak", 0), o(this, "draws", 0), o(this, "games", 0), o(this, "longeststreak", 0), o(this, "losses", 0), o(this, "place", 0), o(this, "placeChange", 0), o(this, "rating", 0), o(this, "score", 0), o(this, "scoreChange", 0), o(this, "user", new t.$), o(this, "wins", 0)
						}
						getUsername() {
							return this.user.uid
						}
						getTrophyUrl() {
							return (0, s.t)(this.place)
						}
						getStreak() {
							return this.currentstreak
						}
						getBestStreak() {
							return this.longeststreak
						}
						getStreakColor() {
							return this.currentstreak >= 5 ? "#ca3431" : this.currentstreak === 4 ? "#f05a2a" : this.currentstreak === 3 ? "#f1ab22" : "#bebdb9"
						}
						getGameScore() {
							return `${Number(this.wins)+Number(this.draws)*.5}/${this.games}`
						}
						getScoreChange() {
							return this.scoreChange || 0
						}
						getPlaceChange() {
							return this.placeChange || 0
						}
					}
				},
				34506: function(m, a, e) {
					e.d(a, {
						_: function() {
							return E
						}
					});
					var n = e(52553),
						t = e(15413),
						s = e(31619),
						i = e(5148),
						r = e(3832),
						o = e(99670),
						u = e(69920),
						c = e(39185),
						l = e(59386),
						p = e(82107),
						h = e(87661),
						_ = e(52117),
						b = Object.defineProperty,
						g = (y, w, P) => w in y ? b(y, w, {
							enumerable: !0,
							configurable: !0,
							writable: !0,
							value: P
						}) : y[w] = P,
						v = (y, w, P) => (g(y, typeof w != "symbol" ? w + "" : w, P), P);
					class E extends n.Hn {
						constructor(w) {
							super(), v(this, "chessgroupavatar", ""), v(this, "chessgroupid", 0), v(this, "chessgroupname", ""), v(this, "chessgroups", []), v(this, "chessgroupurl", ""), v(this, "finishtime", ""), v(this, "gametype", "chess"), v(this, "id", 0), v(this, "imageurl", ""), v(this, "localtime", Date.now()), v(this, "maxplayers", 0), v(this, "maxrating", null), v(this, "maxscoredplayers", 0), v(this, "minml", null), v(this, "minrating", null), v(this, "name", ""), v(this, "owner", new c.$), v(this, "playerscount", 0), v(this, "servertime", ""), v(this, "standingscount", 0), v(this, "starttime", ""), v(this, "status", "scheduled"), v(this, "time", {
								basetime: 600,
								timeinc: 0
							}), v(this, "titled", !1), v(this, "verified", !1), v(this, "options", []), v(this, "pairingmethod", "fiforating"), w && (0, n.Uc)(this, w)
						}
						getStartTime() {
							return (0, p.Z)(this.localtime, this.starttime, this.servertime)
						}
						getEndTime() {
							return (0, p.Z)(this.localtime, this.finishtime, this.servertime)
						}
						getTimeControl() {
							return {
								timeType: "live",
								baseTime: this.time.basetime / 10,
								timeIncrement: this.time.timeinc / 10
							}
						}
						getLabel() {
							return (0, h.B)(`${this.name} Arena`)
						}
						getAvatar() {
							return this.chessgroupavatar || this.imageurl
						}
						getIcon() {
							return this.isPremiumSeries() ? "premium" : this.isPremium() ? "membership-diamond" : this.isVerified() ? "verified" : (0, s.N)(this.getTimeControl(), this.gametype)
						}
						isPremium() {
							return Boolean(this.minml && this.minml >= o.p0.silver)
						}
						isPremiumSeries() {
							return this.isPremium() && /cash prizes/i.test(this.name)
						}
						isActive() {
							return this.isScheduled() || this.isRegistration() || this.isInProgress()
						}
						isInProgress() {
							return this.status === "in_progress"
						}
						isCancelled() {
							return this.status === "cancelled"
						}
						isScheduled() {
							return this.status === "scheduled"
						}
						isRegistration() {
							return this.status === "registration"
						}
						isFinished() {
							return this.status === "finished"
						}
						getRatingType() {
							return (0, t.G)(this.getTimeControl(), this.gametype)
						}
						getTimeLabel() {
							return (0, i.X)(this.getTimeControl())
						}
						getVariantLabel() {
							return (0, _.T)(this.gametype)
						}
						getPlayersCount() {
							return this.standingscount || this.playerscount
						}
						isStarting(w) {
							return Math.max(0, this.getStartTime().getTime() - w) === 0 && this.isRegistration()
						}
						isStartingSoon(w) {
							const P = Math.max(0, this.getStartTime().getTime() - w);
							return P > 0 && P <= 9e4
						}
						isOwner(w) {
							return this.owner && this.owner.isSameUser(w)
						}
						hasValidMembership(w) {
							return this.minml ? w.getMembership() >= this.minml : !0
						}
						isVariant() {
							return this.gametype !== "chess"
						}
						isClubArena() {
							return Boolean(this.chessgroupid)
						}
						getClubUrl() {
							return this.chessgroupurl
						}
						getClubName() {
							return this.chessgroupname
						}
						getEventInfo() {
							return new u.H({
								id: `A${this.id}`,
								imageUrl: this.getAvatar(),
								label: (0, h.B)(this.name),
								type: l.o.Arena,
								icon: this.getIcon(),
								isClubEvent: this.isClubArena(),
								startTime: this.getStartTime(),
								endTime: this.getEndTime(),
								order: 3,
								playerCount: this.getPlayersCount(),
								timeLabel: this.getTimeLabel(),
								gameType: this.gametype,
								timeClass: (0, r.L)(this.getTimeControl())
							})
						}
						isMultiClubArena() {
							return this.chessgroups.length > 1
						}
						getGameType() {
							return this.gametype
						}
						isVerified() {
							return this.verified
						}
						isAdFree() {
							return this.options.includes("adfree")
						}
						shouldRequireRules() {
							return this.options.includes("rules")
						}
					}
				},
				70183: function(m, a, e) {
					e.d(a, {
						$: function() {
							return b
						}
					});
					var n = e(39059),
						t = e(15413),
						s = e(31619),
						i = e(5148),
						r = e(93485),
						o = e(15875),
						u = e(72420),
						c = e(39185),
						l = e(90204),
						p = Object.defineProperty,
						h = (g, v, E) => v in g ? p(g, v, {
							enumerable: !0,
							configurable: !0,
							writable: !0,
							value: E
						}) : g[v] = E,
						_ = (g, v, E) => (h(g, typeof v != "symbol" ? v + "" : v, E), E);
					class b extends u.t {
						constructor() {
							super(...arguments), _(this, "accepted", !1), _(this, "color", 0), _(this, "computer", !1), _(this, "from", new c.$), _(this, "gametype", "chess"), _(this, "id", 0), _(this, "maxrating", null), _(this, "minrating", null), _(this, "monitor", !1), _(this, "offline", !1), _(this, "rated", !0), _(this, "rematchgid", 0), _(this, "time", {
								basetime: 600,
								timeinc: 0
							}), _(this, "to", new c.$), _(this, "twitchsubscriber", !1), _(this, "uuid", "")
						}
						getChallengeId() {
							return this.id
						}
						getEstimatedDuration() {
							return (0, n.f)(this.getTimeControl())
						}
						getRematchGameId() {
							return this.rematchgid
						}
						getRating() {
							return this.from.getRating(this.getRatingType())
						}
						getRatingToClosestHundred() {
							return Math.round(this.getRating() / 100) * 100
						}
						getGameType() {
							return this.gametype
						}
						getFrom() {
							return this.from
						}
						getTo() {
							return this.to
						}
						getColor() {
							return this.color
						}
						hasColor() {
							return Boolean(this.color)
						}
						isRatedChallenge() {
							return this.rated
						}
						isVariant() {
							return this.gametype !== "chess"
						}
						isBughouse() {
							return this.gametype === "bughouse"
						}
						isComputer() {
							return this.from.computer
						}
						isMonitor() {
							return this.from.monitor
						}
						getGameIcon() {
							return (0, s.N)(this.getTimeControl(), this.gametype)
						}
						getGameLabel() {
							const v = this.isVariant() ? this.getGameTypeLabel() : (0, r.n)(this.getTimeControl()),
								E = this.getTo();
							return E ? `${v} vs ${E.getUsername()}` : v
						}
						getGameTypeLabel() {
							var v;
							return ((v = (0, l.A)(this.gametype)) == null ? void 0 : v.label) || ""
						}
						getTimeControl() {
							return {
								baseTime: this.time.basetime / 10,
								timeIncrement: this.time.timeinc / 10,
								timeType: "live"
							}
						}
						getTimeLabel() {
							return (0, i.X)(this.getTimeControl())
						}
						getRatedLabel() {
							return this.rated ? (0, o.dW)("Rated") : (0, o.dW)("Unrated")
						}
						getColorLabel() {
							return this.color ? this.color === 1 ? (0, o.dW)("White") : (0, o.dW)("Black") : ""
						}
						getMaxRating() {
							return this.maxrating
						}
						getMinRating() {
							return this.minrating ? Math.max(this.minrating, 100) : this.minrating
						}
						getMinMaxRatingLabel() {
							const v = this.getMinRating();
							return v && this.maxrating ? (0, o.dW)("You have issued a challenge. Waiting to find an opponent rated %1$s%-%2$s%...", {
								"%1$s%": v,
								"%2$s%": this.maxrating
							}) : v ? (0, o.dW)("You have issued a challenge. Waiting to find an opponent rated %1$s% and higher...", {
								"%1$s%": v
							}) : this.maxrating ? (0, o.dW)("You have issued a challenge. Waiting to find an opponent rated %1$s% and lower...", {
								"%1$s%": this.maxrating
							}) : (0, o.dW)("You have issued a challenge. Waiting to find an opponent...")
						}
						isRatingRangeTooNarrow() {
							return Boolean(this.maxrating && this.minrating && Math.abs(this.maxrating - this.minrating) < 200)
						}
						getRatingType() {
							return (0, t.G)(this.getTimeControl(), this.gametype)
						}
						isOffline() {
							return Boolean(this.getTo() && this.offline)
						}
						getTimeRatedLabel() {
							let v = this.getTimeLabel();
							return this.isRatedChallenge() || (v += ` (${this.getRatedLabel()})`), v
						}
						isAccepted() {
							return this.accepted
						}
					}
				},
				86613: function(m, a, e) {
					e.d(a, {
						k: function() {
							return P
						}
					});
					var n = e(3527),
						t = e.n(n),
						s = e(49165),
						i = e(52553),
						r = e(36932),
						o = e(91008),
						u = e(28190);

					function c({
						tcn: k,
						ply: O,
						variant: T,
						fen: C
					}) {
						const D = t().createGame({
							tcn: k,
							variant: T || "chess",
							analysis: !0,
							fen: C
						});
						if (!D) return "";
						const L = D.history(!0),
							x = O - 1,
							W = (0, u.o)(L[x].san),
							z = Math.ceil(O / 2),
							F = x % 2 === 1 ? "..." : ". ";
						return `${z}${F}${W}`
					}
					var l = e(39059),
						p = e(83187),
						h = e(5148),
						_ = e(3832),
						b = e(39185),
						g = e(85090),
						v = e(9085),
						E = Object.defineProperty,
						y = (k, O, T) => O in k ? E(k, O, {
							enumerable: !0,
							configurable: !0,
							writable: !0,
							value: T
						}) : k[O] = T,
						w = (k, O, T) => (y(k, typeof O != "symbol" ? O + "" : O, T), T);
					class P extends i.Hn {
						constructor() {
							super(...arguments), w(this, "abortable", [!1, !1]), w(this, "aborteruid", null), w(this, "arenachessgroupids", null), w(this, "arenacurrentstreaks", null), w(this, "arenaid", null), w(this, "arenaplaces", null), w(this, "arenascores", null), w(this, "blackchecks", null), w(this, "blackhand", null), w(this, "clocks", []), w(this, "codemessage", null), w(this, "disconnecttimeouts", []), w(this, "draws", []), w(this, "verified", !1), w(this, "gametype", "chess"), w(this, "grudgematchscores", null), w(this, "id", 0), w(this, "initpos", ""), w(this, "linkedgameid", null), w(this, "liveshow", !1), w(this, "modifiers", []), w(this, "moves", ""), w(this, "movetimestamps", ""), w(this, "pcl", !1), w(this, "players", (0, i.BL)(b.$, {
								key: "uid",
								max: 2,
								create: 2
							})), w(this, "playersStatusTimestamp", [0, 0]), w(this, "protected", !1), w(this, "private", !1), w(this, "rated", !0), w(this, "ratingchanges", []), w(this, "ratings", []), w(this, "ratingtype", "blitz"), w(this, "results", null), w(this, "realname", !1), w(this, "seq", 0), w(this, "squares", [0, 0]), w(this, "stalltimeouts", []), w(this, "status", "init"), w(this, "teammatchid", null), w(this, "teammatchscores", null), w(this, "thinktimeouts", []), w(this, "time", {
								basetime: 600,
								timeinc: 0
							}), w(this, "tournamentid", null), w(this, "tournamentscores", null), w(this, "uuid", ""), w(this, "whitechecks", null), w(this, "whitehand", null)
						}
						getBoardRef() {
							return {
								id: this.id,
								type: v.V.LiveGame
							}
						}
						getLinkedGameId() {
							return this.linkedgameid
						}
						getTimeControl() {
							return this.time ? (0, p.B)({
								baseTime: this.time.basetime / 10,
								timeIncrement: this.time.timeinc / 10,
								timeType: "live"
							}) : (0, p.B)({
								baseTime: 600,
								timeIncrement: 0,
								timeType: "live"
							})
						}
						getTimeLabel() {
							return (0, h.X)(this.getTimeControl())
						}
						getEstimatedDuration() {
							return (0, l.f)(this.getTimeControl())
						}
						isVerified() {
							return this.verified
						}
						getGameType() {
							return this.gametype || "chess"
						}
						getRatingType() {
							return this.ratingtype
						}
						getInitialPosition() {
							return this.initpos || (0, o.H)()
						}
						getMoves() {
							return this.moves
						}
						getMovesAmount() {
							return this.seq
						}
						isBlackMoveFirst() {
							if (this.initpos && this.initpos !== (0, o.H)()) {
								const O = t().getPositionDetails({
									fen: this.initpos
								});
								return O?.sideToMove === 2
							}
							return !1
						}
						getOddsPlyIncrement() {
							return this.isBlackMoveFirst() ? 1 : 0
						}
						getPlayerToMove() {
							return (this.seq + this.getOddsPlyIncrement()) % 2
						}
						isPlayerTurn(O) {
							return this.getPlayerIndex(O) === this.getPlayerToMove()
						}
						getPlayerIndex(O) {
							if (O === 0 || O === 1) return Number(O);
							const T = O instanceof b.$ ? O.getUsername() : O;
							return this.players.findIndex(C => C.getUsername() === T)
						}
						getPlayerColor(O) {
							const T = this.getPlayerIndex(O);
							return T === -1 ? null : T + 1
						}
						getPlayer(O) {
							const T = this.getPlayerIndex(O);
							return T === -1 ? null : this.players[T]
						}
						getOpponent(O) {
							const T = this.getPlayerIndex(O);
							return T === -1 ? null : this.players[1 - T]
						}
						isOver() {
							return Boolean(this.results)
						}
						isPlaying(O) {
							return this.getPlayerIndex(O) !== -1
						}
						isBughouse() {
							return this.getGameType() === "bughouse"
						}
						isCustomPosition() {
							return this.getGameType() === "chess" && Boolean(this.initpos) && this.initpos !== (0, o.H)()
						}
						isVariant() {
							return this.getGameType() !== "chess"
						}
						isTournamentPremoveEnabled() {
							return this.isTournamentGame() && this.status === "init"
						}
						isTournamentGame() {
							return Boolean(this.tournamentid)
						}
						hasHandPieces() {
							return ["crazyhouse", "bughouse"].includes(this.getGameType())
						}
						isArenaGame() {
							return Boolean(this.arenaid)
						}
						isTeamMatchGame() {
							return Boolean(this.teammatchid)
						}
						isProtected() {
							return Boolean(this.protected)
						}
						isLiveShow() {
							return Boolean(this.liveshow)
						}
						isAbortable(O) {
							if (this.isOver() || !this.abortable) return !1;
							const T = this.getPlayerIndex(O);
							return T === -1 ? !1 : Boolean(this.abortable[T])
						}
						isDrawEnabled(O) {
							const T = this.isPlaying(O);
							return this.isArenaGame() ? T && this.seq > 40 : T
						}
						isResignEnabled(O) {
							const T = this.isPlaying(O);
							return this.isArenaGame() ? T && this.seq > 20 : T
						}
						getWhitePlayer() {
							return this.players[0]
						}
						getBlackPlayer() {
							return this.players[1]
						}
						getTotalLag() {
							const O = (this.players[0].lag || 5) * 2,
								T = (this.players[1].lag || 5) * 2;
							let C = O + T;
							return C < 3 ? C = 3 : C > 100 && (C = 100), C
						}
						isAborted() {
							return Boolean(this.results && this.results[0] === "aborted")
						}
						getWinnerIndex() {
							return this.results ? this.results.findIndex(O => O === "win") : -1
						}
						isRated() {
							return Boolean(this.rated)
						}
						getGameScore(O) {
							const T = this.getPlayerIndex(O);
							if (this.results && T !== -1) {
								if (this.results[T] === "win") return 1;
								if (this.results[1 - T] !== "win") return .5
							}
							return 0
						}
						getArenaScore(O) {
							const T = this.getPlayerIndex(O);
							return this.arenascores && T !== -1 ? this.arenascores[T] : null
						}
						getArenaPlace(O) {
							const T = this.getPlayerIndex(O);
							return this.arenaplaces && T !== -1 ? this.arenaplaces[T] : null
						}
						getTournamentScore(O) {
							const T = this.getPlayerIndex(O);
							return this.tournamentscores && T !== -1 ? this.tournamentscores[T] : null
						}
						getTeamMatchScore(O) {
							const T = this.getPlayerIndex(O);
							return this.teammatchscores && T !== -1 ? this.teammatchscores[T] + this.getGameScore(T) : null
						}
						getGrudgeScore(O) {
							if (this.isTournamentGame()) return this.getTournamentScore(O);
							if (this.isArenaGame()) return this.getArenaScore(O);
							if (this.isTeamMatchGame()) return this.getTeamMatchScore(O);
							const T = this.getPlayerIndex(O);
							return T !== -1 && this.grudgematchscores && this.grudgematchscores[0] + this.grudgematchscores[1] > 0 ? this.grudgematchscores[T] : null
						}
						getTournamentId() {
							return Number(this.tournamentid)
						}
						getArenaId() {
							return Number(this.arenaid)
						}
						getTeamMatchId() {
							return Number(this.teammatchid)
						}
						getTimestamps() {
							return (this.movetimestamps || "").split(",").map(Number)
						}
						getMoveListTimestamps() {
							return this.getTimestamps()
						}
						isCompetitionGame() {
							return Boolean(this.arenaid || this.tournamentid || this.teammatchid)
						}
						isInProgress() {
							return this.status === "in_progress"
						}
						isTimeoutResult(O) {
							if (!this.results) return !1;
							const T = this.getPlayerIndex(O);
							return T === -1 ? !1 : this.results[T] === "timeout" ? !0 : this.results[T] === "timevsinsufficient" ? this.clocks[T] < this.clocks[1 - T] : !1
						}
						getLastMoveText(O = "") {
							return c({
								tcn: this.getMoves() + O,
								variant: this.getGameType(),
								ply: this.getMoves().length / 2 + 1,
								fen: this.getInitialPosition()
							})
						}
						getAutoResignTimeLeft(O) {
							const T = this.getPlayerIndex(O);
							return T === -1 ? null : Math.min(this.clocks[T], this.disconnecttimeouts[T])
						}
						getAutoAbortTimeLeft(O) {
							const T = this.getPlayerIndex(O);
							if (T === -1) return null;
							const C = [this.getAutoResignTimeLeft(T) || 0];
							return this.stalltimeouts && C.push(this.stalltimeouts[T]), Math.min(...C)
						}
						getAutoAbortDelay() {
							switch (this.getTimeClass()) {
								case "bullet":
									return 5e3;
								case "blitz":
									return 1e4;
								default:
									return 2e4
							}
						}
						getThinkTimeLeft(O) {
							const T = this.getPlayerIndex(O);
							return T === -1 ? null : this.thinktimeouts ? this.thinktimeouts[T] : null
						}
						getLeagueGameCategory() {
							return this.isArenaGame() ? "arena" : this.isTournamentGame() ? "swiss" : "livechess"
						}
						getGameEndReason() {
							if (!this.results) return null;
							const O = this.getWinnerIndex();
							return O === -1 ? this.results[0] : this.results[1 - O]
						}
						getTimeClass() {
							return (0, _.L)(this.getTimeControl())
						}
						isBullet() {
							return this.getTimeClass() === "bullet"
						}
						getPlayerSquares(O) {
							const T = this.getPlayerIndex(O);
							return T === -1 ? null : this.squares[T]
						}
						getPlayerClock(O, T) {
							const C = this.getPlayerIndex(O);
							if (T === 0) return this.time.basetime;
							if (T === 1 && C === 1) return this.time.basetime;
							if (T === -1 || T > this.seq) return this.clocks[C];
							const D = T - 1,
								L = this.getTimestamps();
							return T > L.length ? this.clocks[C] : D % 2 === C ? L[D] : L[D - 1]
						}
						getPGNHeaders() {
							var O, T;
							const C = this.getGameType();
							let D = "Live Chess";
							C !== "Chess" && (D += ` - ${C}`);
							const L = this.getTimeControl();
							let x = `${L.baseTime}`;
							L.timeIncrement && (x += `+${L.timeIncrement}`);
							const W = this.getGameEndReason();
							let z = s.Si.NONE,
								F = "unterminated";
							if (W) {
								const V = this.getWinnerIndex();
								if (V === -1) z = s.Si.HALF_HALF, F = s.zu[W];
								else {
									const Z = this.players[V].uid;
									z = [s.Si.ONE_ZERO, s.Si.ZERO_ONE][V], F = s.zu[W].replace("%winner%", Z)
								}
							}
							return {
								Site: "Chess.com",
								Event: D,
								Date: (0, r.w6)(new Date, "."),
								TimeControl: x,
								White: this.players[0].uid,
								Black: this.players[1].uid,
								WhiteElo: (O = this.players[0].getRating(this.ratingtype)) == null ? void 0 : O.toString(),
								BlackElo: (T = this.players[1].getRating(this.ratingtype)) == null ? void 0 : T.toString(),
								Termination: F,
								Result: z
							}
						}
						getGuessedMoveText(O, T) {
							return c({
								tcn: this.getMoves().substr(0, (O - 1) * 2) + T,
								variant: this.getGameType(),
								fen: this.getInitialPosition(),
								ply: O
							})
						}
						getRematchColor(O) {
							const T = this.getPlayerIndex(O);
							return this.isAborted() || this.isCustomPosition() ? T + 1 : 3 - (T + 1)
						}
						isStarting() {
							return !this.seq && (this.status === "starting" || this.status === "in_progress")
						}
						getOfflineDelay() {
							return this.isBullet() ? 1e4 : 3e4
						}
						getPlayerConnectionLevel(O, T) {
							const C = this.players[O];
							if (!C) return null;
							const D = C.getConnectionLevel();
							if (C.isOnline()) return D;
							if (this.playersStatusTimestamp[O]) {
								const L = this.getOfflineDelay(),
									x = T - this.playersStatusTimestamp[O];
								return x >= L ? g.J.offline : x >= L - 1e3 ? g.J.poor : x >= L - 2e3 ? D === g.J.poor ? D : g.J.ok : x >= L - 3e3 ? D === g.J.poor || D === g.J.ok ? D : g.J.good : C.getConnectionLevel()
							}
							return null
						}
						hasHelpModifier() {
							return this.modifiers.includes("help")
						}
					}
				},
				26141: function(m, a, e) {
					e.d(a, {
						F: function() {
							return v
						}
					});
					var n = e(52553),
						t = e(15413),
						s = e(31619),
						i = e(5148),
						r = e(3832),
						o = e(69920),
						u = e(39185),
						c = e(59386),
						l = e(82107),
						p = e(91094),
						h = e(71203),
						_ = Object.defineProperty,
						b = (E, y, w) => y in E ? _(E, y, {
							enumerable: !0,
							configurable: !0,
							writable: !0,
							value: w
						}) : E[y] = w,
						g = (E, y, w) => (b(E, typeof y != "symbol" ? y + "" : y, w), w);
					class v extends n.Hn {
						constructor() {
							super(...arguments), g(this, "challengedgroupavatar", null), g(this, "challengedgroupid", 0), g(this, "challengedgroupname", ""), g(this, "challengedgroupscore", 0), g(this, "challengedgroupurl", ""), g(this, "chessgroupavatar", null), g(this, "chessgroupid", 0), g(this, "chessgroupname", ""), g(this, "chessgroupscore", 0), g(this, "chessgroupurl", ""), g(this, "currentround", 0), g(this, "gametype", "chess"), g(this, "id", 0), g(this, "localtime", Date.now()), g(this, "maxplayers", null), g(this, "maxrating", null), g(this, "minplayers", null), g(this, "minrating", null), g(this, "name", ""), g(this, "owner", new u.$), g(this, "players", []), g(this, "rounds", 0), g(this, "servertime", ""), g(this, "starttime", ""), g(this, "status", "scheduled"), g(this, "time", {
								basetime: 600,
								timeinc: 0
							}), g(this, "titled", !1)
						}
						getAvatar() {
							var y;
							return (y = this.getChallengedClubAvatar()) != null ? y : ""
						}
						isVerified() {
							return !1
						}
						isInProgress() {
							return this.status === "in_progress"
						}
						isCancelled() {
							return this.status === "cancelled"
						}
						isFinished() {
							return this.status === "finished"
						}
						isScheduled() {
							return this.status === "scheduled"
						}
						isRegistration() {
							return this.status === "registration"
						}
						getLabel() {
							return this.name
						}
						getChallengedClubId() {
							return this.challengedgroupid
						}
						getChallengedClubName() {
							return this.challengedgroupname
						}
						getChallengedClubUrl() {
							return this.challengedgroupurl
						}
						getChallengedClubScore() {
							return this.challengedgroupscore
						}
						getChallengedClubAvatar() {
							return this.challengedgroupavatar
						}
						getChallengingClubId() {
							return this.chessgroupid
						}
						getChallengingClubName() {
							return this.chessgroupname
						}
						getChallengingClubUrl() {
							return this.chessgroupurl
						}
						getChallengingClubScore() {
							return this.chessgroupscore
						}
						getChallengingClubAvatar() {
							return this.chessgroupavatar
						}
						getGameType() {
							return this.gametype || "chess"
						}
						getRatingLabel() {
							return (0, p.e)(this.minrating, this.maxrating)
						}
						getTimeControl() {
							return {
								timeType: "live",
								baseTime: this.time.basetime / 10,
								timeIncrement: this.time.timeinc / 10
							}
						}
						getTimeLabel() {
							return (0, i.X)(this.getTimeControl())
						}
						getRatingType() {
							return (0, t.G)(this.getTimeControl(), this.gametype)
						}
						getEstimatedEndTime() {
							const y = this.getStartTime();
							return new Date(y.getTime() + 36e5)
						}
						getIcon() {
							return (0, s.N)(this.getTimeControl(), this.getGameType())
						}
						getPlayersCount() {
							var y;
							return ((y = this.players) == null ? void 0 : y.length) || 0
						}
						getEventInfo() {
							return new o.H({
								challengedClubId: this.challengedgroupid,
								challengingClubId: this.chessgroupid,
								endTime: this.getEstimatedEndTime(),
								icon: this.getIcon(),
								id: `M${this.id}`,
								imageUrl: this.getChallengedClubAvatar(),
								isClubEvent: !0,
								isInProgress: this.isInProgress(),
								label: this.getLabel(),
								order: 3,
								playerCount: this.getPlayersCount(),
								startTime: this.getStartTime(),
								timeLabel: this.getTimeLabel(),
								type: c.o.TeamMatch,
								gameType: this.gametype,
								timeClass: (0, r.L)(this.getTimeControl())
							})
						}
						getStartTime() {
							return (0, l.Z)(this.localtime, this.starttime, this.servertime)
						}
						getEndTime() {
							return (0, h.L)({
								timeControl: this.getTimeControl(),
								rounds: 1,
								startTime: this.getStartTime()
							})
						}
					}
				},
				57586: function(m, a, e) {
					e.d(a, {
						K: function() {
							return E
						}
					});
					var n = e(52553),
						t = e(9705),
						s = Object.defineProperty,
						i = (y, w, P) => w in y ? s(y, w, {
							enumerable: !0,
							configurable: !0,
							writable: !0,
							value: P
						}) : y[w] = P,
						r = (y, w, P) => (i(y, typeof w != "symbol" ? w + "" : w, P), P);
					class o extends n.Hn {
						constructor() {
							super(...arguments), r(this, "gameid", 0), r(this, "players", (0, n.BL)(t.N, {
								key: "getUsername",
								max: 2,
								create: 2
							})), r(this, "tournamentid", 0)
						}
						getWhitePlayer() {
							return this.players[0].user
						}
						getBlackPlayer() {
							return this.players[1].user
						}
					}
					var u = e(78631),
						c = Object.defineProperty,
						l = (y, w, P) => w in y ? c(y, w, {
							enumerable: !0,
							configurable: !0,
							writable: !0,
							value: P
						}) : y[w] = P,
						p = (y, w, P) => (l(y, typeof w != "symbol" ? w + "" : w, P), P);
					class h extends u.Y {
						constructor() {
							super(...arguments), p(this, "models", (0, n.BL)(o, {
								key: "gameid"
							}))
						}
					}
					var _ = e(42131),
						b = Object.defineProperty,
						g = (y, w, P) => w in y ? b(y, w, {
							enumerable: !0,
							configurable: !0,
							writable: !0,
							value: P
						}) : y[w] = P,
						v = (y, w, P) => (g(y, typeof w != "symbol" ? w + "" : w, P), P);
					class E extends _.C {
						constructor() {
							super(...arguments), v(this, "pages", (0, n.BL)(h, {
								key: "page"
							}))
						}
					}
				},
				9705: function(m, a, e) {
					e.d(a, {
						N: function() {
							return o
						}
					});
					var n = e(52553),
						t = e(39185),
						s = Object.defineProperty,
						i = (u, c, l) => c in u ? s(u, c, {
							enumerable: !0,
							configurable: !0,
							writable: !0,
							value: l
						}) : u[c] = l,
						r = (u, c, l) => (i(u, typeof c != "symbol" ? c + "" : c, l), l);
					class o extends n.Hn {
						constructor() {
							super(...arguments), r(this, "allgamesplayed", !1), r(this, "games", 0), r(this, "opponentscore", 0), r(this, "place", 0), r(this, "rating", 0), r(this, "score", 0), r(this, "scoreChange", 0), r(this, "startplace", 0), r(this, "tiebreak", ""), r(this, "tournamentid", 0), r(this, "user", new t.$)
						}
						getUsername() {
							return this.user.uid
						}
						hasPlayedAllGames() {
							return Boolean(this.allgamesplayed)
						}
						getTrophyUrl() {
							try {
								const c = ["gold", "silver", "bronze"][Number(this.place) - 1];
								return window.Config.trophies.tournament[c]
							} catch {
								return ""
							}
						}
						getScoreChange() {
							return this.scoreChange || 0
						}
						getTiebreak() {
							let c;
							if (this.tiebreak) {
								const [l, ...p] = this.tiebreak.split(",");
								switch (l) {
									case "01":
										c = p[1];
										break;
									default:
										c = p[0];
										break
								}
							} else c = this.opponentscore;
							return c = Number(c), c && !isNaN(c) ? c.toString() : "0"
						}
					}
				},
				45960: function(m, a, e) {
					e.d(a, {
						H: function() {
							return _
						}
					});
					var n = e(52553),
						t = e(9705),
						s = e(78631),
						i = Object.defineProperty,
						r = (b, g, v) => g in b ? i(b, g, {
							enumerable: !0,
							configurable: !0,
							writable: !0,
							value: v
						}) : b[g] = v,
						o = (b, g, v) => (r(b, typeof g != "symbol" ? g + "" : g, v), v);
					class u extends s.Y {
						constructor() {
							super(...arguments), o(this, "models", (0, n.BL)(t.N, {
								key: "getUsername"
							}))
						}
					}
					var c = e(42131),
						l = Object.defineProperty,
						p = (b, g, v) => g in b ? l(b, g, {
							enumerable: !0,
							configurable: !0,
							writable: !0,
							value: v
						}) : b[g] = v,
						h = (b, g, v) => (p(b, typeof g != "symbol" ? g + "" : g, v), v);
					class _ extends c.C {
						constructor() {
							super(...arguments), h(this, "pages", (0, n.BL)(u, {
								key: "page"
							}))
						}
					}
				},
				5905: function(m, a, e) {
					e.d(a, {
						f: function() {
							return w
						}
					});
					var n = e(52553),
						t = e(15413),
						s = e(31619),
						i = e(5148),
						r = e(3832),
						o = e(99670),
						u = e(69920),
						c = e(39185),
						l = e(59386),
						p = e(82107),
						h = e(91094),
						_ = e(71203),
						b = e(87661),
						g = e(52117),
						v = Object.defineProperty,
						E = (P, k, O) => k in P ? v(P, k, {
							enumerable: !0,
							configurable: !0,
							writable: !0,
							value: O
						}) : P[k] = O,
						y = (P, k, O) => (E(P, typeof k != "symbol" ? k + "" : k, O), O);
					class w extends n.Hn {
						constructor(k) {
							super(), y(this, "chessgroupavatar", ""), y(this, "chessgroupid", 0), y(this, "chessgroupname", ""), y(this, "chessgroupurl", ""), y(this, "currentround", 0), y(this, "finishtime", ""), y(this, "gamescount", 0), y(this, "gametype", "chess"), y(this, "id", 0), y(this, "imageurl", ""), y(this, "joinable", !1), y(this, "localtime", Date.now()), y(this, "maxplayers", null), y(this, "maxrating", null), y(this, "minml", null), y(this, "minplayers", null), y(this, "minrating", null), y(this, "name", ""), y(this, "owner", new c.$), y(this, "players", []), y(this, "playerscount", 0), y(this, "rounds", 0), y(this, "servertime", ""), y(this, "starttime", ""), y(this, "standingscount", 0), y(this, "status", "scheduled"), y(this, "time", {
								basetime: 600,
								timeinc: 0
							}), y(this, "titled", !1), y(this, "verified", !1), y(this, "options", []), k && (0, n.Uc)(this, k)
						}
						getStartTime() {
							return (0, p.Z)(this.localtime, this.starttime, this.servertime)
						}
						getEndTime() {
							return this.finishtime ? (0, p.Z)(this.localtime, this.finishtime, this.servertime) : this.getEstimatedEndTime()
						}
						isClubTournament() {
							return Boolean(this.chessgroupid)
						}
						getTimeControl() {
							return {
								timeType: "live",
								baseTime: this.time.basetime / 10,
								timeIncrement: this.time.timeinc / 10
							}
						}
						getLabel() {
							let k = `${(0,b.B)(this.name)} ${(0,h.e)(this.minrating,this.maxrating)}`;
							return this.isClubTournament() && (k = `${this.getTimeLabel()} - ${k}`), k
						}
						getPlayersCount() {
							var k;
							return this.standingscount || this.playerscount || ((k = this.players) == null ? void 0 : k.length) || 0
						}
						isActive() {
							return this.isScheduled() || this.isRegistration() || this.isInProgress()
						}
						isInProgress() {
							return this.status === "in_progress"
						}
						isCancelled() {
							return this.status === "cancelled"
						}
						isScheduled() {
							return this.status === "scheduled"
						}
						isRegistration() {
							return this.status === "registration"
						}
						isFinished() {
							return this.status === "finished"
						}
						isLastRound() {
							return this.getCurrentRound() === this.getRoundsCount()
						}
						getCurrentRound() {
							return Number(this.currentround)
						}
						getRoundsCount() {
							return Number(this.rounds)
						}
						getAvatar() {
							return this.chessgroupavatar || this.imageurl
						}
						getIcon() {
							return this.isPremium() ? "membership-diamond" : this.isVerified() ? "verified" : (0, s.N)(this.getTimeControl(), this.gametype)
						}
						isPremium() {
							return Boolean(this.minml && this.minml >= o.p0.silver)
						}
						isNextRoundStartingSoon() {
							return this.isInProgress() && !this.isLastRound() && this.gamescount <= 2
						}
						isStartingSoon(k) {
							const O = Math.max(0, this.getStartTime().getTime() - k);
							return O > 0 && O <= 9e4
						}
						getRatingType() {
							return (0, t.G)(this.getTimeControl(), this.gametype)
						}
						getTimeLabel() {
							return (0, i.X)(this.getTimeControl())
						}
						isOwner(k) {
							return this.owner && this.owner.isSameUser(k)
						}
						getVariantLabel() {
							return (0, g.T)(this.gametype)
						}
						isJoinable() {
							return Boolean(this.joinable)
						}
						isVariant() {
							return this.gametype !== "chess"
						}
						getEstimatedEndTime() {
							return (0, _.L)({
								rounds: this.getRoundsCount(),
								startTime: this.getStartTime(),
								timeControl: this.getTimeControl()
							})
						}
						getEventInfo() {
							return new u.H({
								endTime: this.getEndTime(),
								icon: this.getIcon(),
								id: `T${this.id}`,
								imageUrl: this.getAvatar(),
								isClubEvent: this.isClubTournament(),
								isInProgress: this.isInProgress(),
								label: `${(0,b.B)(this.name)} ${(0,h.e)(this.minrating,this.maxrating)}`,
								order: 3,
								playerCount: this.getPlayersCount(),
								startTime: this.getStartTime(),
								timeLabel: this.getTimeLabel(),
								type: l.o.Tournament,
								gameType: this.gametype,
								timeClass: (0, r.L)(this.getTimeControl())
							})
						}
						getGameType() {
							return this.gametype
						}
						isVerified() {
							return this.verified
						}
						getClubUrl() {
							return this.chessgroupurl
						}
						getClubName() {
							return this.chessgroupname
						}
						isAdFree() {
							return this.options.includes("adfree")
						}
						shouldRequireRules() {
							return this.options.includes("rules")
						}
					}
				},
				39185: function(m, a, e) {
					e.d(a, {
						$: function() {
							return _
						}
					});
					var n = e(52553),
						t = e(6936),
						s = e(15875),
						i = e(99670),
						r = e(16488),
						o = e(85090),
						u = e(66248),
						c = e(51512),
						l = Object.defineProperty,
						p = (b, g, v) => g in b ? l(b, g, {
							enumerable: !0,
							configurable: !0,
							writable: !0,
							value: v
						}) : b[g] = v,
						h = (b, g, v) => (p(b, typeof g != "symbol" ? g + "" : g, v), v);
					class _ extends r.n {
						constructor(g) {
							super(), h(this, "avatar", ""), h(this, "country", ""), h(this, "fullname", ""), h(this, "ml", 0), h(this, "status", ""), h(this, "title", ""), h(this, "uid", ""), h(this, "uuid", ""), h(this, "id", 0), h(this, "gid", 0), h(this, "flair", null), h(this, "lag", 0), h(this, "lagms", 0), h(this, "friendrelation", !1), h(this, "requestedrelation", !1), h(this, "requestingrelation", !1), h(this, "trackingrelation", !1), h(this, "daily", 1200), h(this, "blitz", 1200), h(this, "bughouse", 1200), h(this, "chess960", 1200), h(this, "crazyhouse", 1200), h(this, "kingofthehill", 1200), h(this, "lightning", 1200), h(this, "oddschess", 1200), h(this, "standard", 1200), h(this, "threecheck", 1200), h(this, "computer", !1), h(this, "mod", !1), h(this, "monitor", !1), h(this, "new", !1), h(this, "nonverified", !1), h(this, "presenter", !1), h(this, "roles", []), h(this, "freetrialad", !1), h(this, "hasconnectedtwitch", !1), h(this, "twitchsubscriber", !1), g && (0, n.Uc)(this, g)
						}
						hasRole(g) {
							return !this.roles || !g ? !1 : this.roles.includes(g.toLowerCase())
						}
						isSameUser(g) {
							return Boolean(g) && (0, c.M)(this) === (0, c.M)(g)
						}
						getUsername() {
							return (0, c.M)(this)
						}
						getProfileUrl() {
							return t.Z.generate("web_member_view", {
								username: this.getUsername()
							})
						}
						getAvatar() {
							return this.avatar && !this.avatar.includes("noavatar") ? this.avatar : null
						}
						getCountry() {
							return this.country ? {
								name: (0, s.dW)(this.country, null, "countries"),
								code: this.country.toLowerCase()
							} : null
						}
						getMembership() {
							return this.ml
						}
						isPresenter() {
							return Boolean(this.presenter || this.hasRole("LIVE_PRESENTER"))
						}
						isPremium() {
							return this.ml >= i.p0.silver
						}
						getChessTitle() {
							return this.title
						}
						getStatus() {
							return this.status
						}
						isOnline() {
							return this.status !== "offline"
						}
						hasFriendRelation() {
							return Boolean(this.friendrelation)
						}
						hasReceivedFriendRequest() {
							return Boolean(this.requestedrelation)
						}
						hasSentFriendRequest() {
							return Boolean(this.requestingrelation)
						}
						hasTrackingRelation() {
							return Boolean(this.trackingrelation)
						}
						getRating(g) {
							switch (g) {
								case "bullet":
								case "lightning":
									return this.lightning;
								case "rapid":
								case "standard":
									return this.standard;
								case "blitz":
									return this.blitz;
								case "bughouse":
									return this.bughouse;
								case "chess960":
									return this.chess960;
								case "crazyhouse":
									return this.crazyhouse;
								case "kingofthehill":
									return this.kingofthehill;
								case "oddschess":
									return this.oddschess;
								case "threecheck":
									return this.threecheck;
								default:
									return this.blitz
							}
						}
						getPlayerInfo(g = "blitz") {
							return {
								id: this.id,
								uuid: this.uuid,
								isFriend: this.hasFriendRelation(),
								avatarUrl: this.getAvatar(),
								chessTitle: this.getChessTitle(),
								country: this.getCountry(),
								flairCode: this.getFlairCode(),
								friendRequestReceived: this.hasReceivedFriendRequest(),
								friendRequestSent: this.hasSentFriendRequest(),
								fullName: this.getFullName(),
								membershipLevel: this.getMembership(),
								rating: this.getRating(g),
								username: this.getUsername()
							}
						}
						isPlaying() {
							return this.status === "playing"
						}
						isEventManager() {
							return this.hasRole("EVENT_MANAGER")
						}
						getFlairCode() {
							return this.flair ? this.flair.code : null
						}
						getShowFreeTrial() {
							return Boolean(this.freetrialad)
						}
						isVerified() {
							return !this.nonverified
						}
						isGuest() {
							return this.ml === 0
						}
						getConnectionLevel() {
							const g = Number(this.lag);
							return g <= 1 ? o.J.excellent : g > 1 && g <= 2 ? o.J.good : g > 2 && g <= 5 ? o.J.ok : g > 5 ? o.J.poor : null
						}
						getLagInMilliseconds() {
							return this.lagms
						}
						isModerator() {
							return Boolean(this.mod || this.ml >= i.p0.moderator)
						}
						isStaff() {
							return this.ml >= i.p0.staff
						}
						isAnnouncer() {
							return this.isModerator() || this.isEventManager() || this.hasRole("LIVE_ANNOUNCER")
						}
						isStreamer() {
							return this.hasRole("STREAMER") || this.hasRole("STREAMER_MOD")
						}
						getTagline({
							ratingType: g,
							lightMode: v
						} = {}) {
							return (0, u.J)({
								username: this.getUsername(),
								chessTitle: this.getChessTitle(),
								rating: g && !this.isGuest() ? this.getRating(g) : 0,
								lightMode: v
							})
						}
						getFullName() {
							var g;
							return ((g = this.fullname) == null ? void 0 : g.trim()) || this.getUsername()
						}
						isChatInputRestricted() {
							return !(this.isPremium() || this.isStreamer() || this.isAnnouncer())
						}
					}
				},
				21001: function(m, a, e) {
					e.d(a, {
						k: function() {
							return D
						}
					});
					var n = e(49165),
						t = e(99057),
						s = e(52553),
						i = e(36932),
						r = e(91008),
						o = e(34308),
						u = e(39059),
						c = e(15413),
						l = e(83187),
						p = e(31619),
						h = e(5148),
						_ = e(3832),
						b = e(93485),
						g = e(45463),
						v = e(87626),
						E = e(61624),
						y = e(66789),
						w = (L => (L.Aborted = "aborted", L.Checkmate = "checkmate", L.Timeout = "timeout", L.Win = "win", L))(w || {}),
						P = e(9085),
						k = e(35790),
						O = Object.defineProperty,
						T = (L, x, W) => x in L ? O(L, x, {
							enumerable: !0,
							configurable: !0,
							writable: !0,
							value: W
						}) : L[x] = W,
						C = (L, x, W) => (T(L, typeof x != "symbol" ? x + "" : x, W), W);
					class D extends s.Hn {
						constructor() {
							super(...arguments), C(this, "actions", [
								[],
								[]
							]), C(this, "activeTransport", window.chesscom.features.includes("play_game_via_rsocket") ? "rsocket" : "pubsub"), C(this, "channel", ""), C(this, "pubsub", null), C(this, "clocks", []), C(this, "createdAt", ""), C(this, "connectivity", [{}, {}]), C(this, "draws", [y.M.None, y.M.None]), C(this, "href", ""), C(this, "gameType", "rcn"), C(this, "grudgeScore", null), C(this, "finishedAt", ""), C(this, "id", ""), C(this, "initialPosition", ""), C(this, "moves", []), C(this, "players", []), C(this, "playersDetails", (0, s.BL)(v.i, {
								key: "uuid",
								max: 2,
								create: 2
							})), C(this, "playersStatusTimestamp", [0, 0]), C(this, "precalculatedRatings", null), C(this, "rated", !1), C(this, "ratings", null), C(this, "results", null), C(this, "startedAt", ""), C(this, "timeControl", {
								base: "PT600S",
								increment: "PT0S"
							}), C(this, "timeouts", null), C(this, "transports", null), C(this, "updatedAt", "")
						}
						getBoardRef() {
							return {
								id: this.id,
								type: P.V.RcnGame
							}
						}
						getPlayerClock(x) {
							return this.clocks[x]
						}
						getGrudgeScore(x) {
							return this.grudgeScore && this.grudgeScore[0] + this.grudgeScore[1] > 0 ? this.grudgeScore[x] : null
						}
						getEstimatedDuration() {
							return (0, u.f)(this.getTimeControl())
						}
						getGameIcon() {
							return (0, p.N)(this.getTimeControl(), this.gameType)
						}
						getGameLabel() {
							return (0, b.n)(this.getTimeControl())
						}
						getGameType() {
							return "chess"
						}
						isRated() {
							return this.rated
						}
						getInitialPosition() {
							return this.initialPosition || (0, r.H)()
						}
						isCustomPosition() {
							return this.getGameType() === "chess" && Boolean(this.initialPosition) && this.initialPosition !== (0, r.H)()
						}
						getMoves() {
							return this.moves.map(([x]) => x).join("")
						}
						getMoveTcn(x) {
							var W;
							return (W = this.moves[x - 1]) == null ? void 0 : W[0]
						}
						getMovesAmount() {
							return this.moves.length
						}
						getOpponent(x) {
							const W = this.getPlayerIndex(x);
							return W === -1 ? null : this.playersDetails[1 - W]
						}
						getPlayer(x) {
							const W = (0, g.hj)(x) ? x : this.getPlayerIndex(x);
							return this.playersDetails[W]
						}
						getWhitePlayer() {
							return this.playersDetails[0]
						}
						getBlackPlayer() {
							return this.playersDetails[1]
						}
						getGameEndReason() {
							if (!this.results) return null;
							const x = this.getWinnerIndex();
							return x === -1 ? this.results[0] : this.results[1 - x]
						}
						getMoveListTimestamps() {
							return this.getTimestamps()
						}
						getPlayerActions(x) {
							const W = this.getPlayerIndex(x);
							return this.actions[W] || []
						}
						getPlayerIndex(x) {
							const W = (0, k.T)(x);
							return this.players.findIndex(z => z === W)
						}
						getPlayerColor(x) {
							const W = this.getPlayerIndex(x);
							return W === -1 ? null : W + 1
						}
						getTimeControl() {
							return (0, l.B)({
								baseTime: (0, o.k)(this.timeControl.base),
								timeIncrement: (0, o.k)(this.timeControl.increment),
								timeType: "live"
							})
						}
						getRatingType() {
							return (0, c.G)(this.getTimeControl(), this.getGameType())
						}
						getTimeLabel() {
							return (0, h.X)(this.getTimeControl())
						}
						getTimestamps() {
							return this.moves.map(x => Math.round(x[1] / 100))
						}
						getTo() {
							return null
						}
						getWinnerIndex() {
							return this.results ? this.results.findIndex(x => x === w.Win) : -1
						}
						isInProgress() {
							return Boolean(this.startedAt) && !this.isOver()
						}
						isStarting() {
							return !this.getMovesAmount()
						}
						isOver() {
							return Boolean(this.results)
						}
						isAbortable(x) {
							return this.getPlayerActions(x).includes(E.G.Abort)
						}
						isAborted() {
							return Boolean(this.results && this.results[0] === w.Aborted)
						}
						isDrawEnabled(x) {
							return this.isPlaying(x)
						}
						isResignEnabled(x) {
							return this.getPlayerActions(x).includes(E.G.Resign)
						}
						getPlayerToMove() {
							return this.moves.length % 2
						}
						isPlayerTurn(x) {
							return this.getPlayerIndex(x) === this.getPlayerToMove()
						}
						isPlaying(x) {
							const W = (0, k.T)(x);
							return Boolean(W && this.players.includes(W))
						}
						getAutoAbortDelay() {
							switch (this.getTimeClass()) {
								case "bullet":
									return 5e3;
								case "blitz":
									return 1e4;
								default:
									return 2e4
							}
						}
						getAutoResignTimeLeft(x) {
							var W, z;
							if (!this.getPlayer(x)) return null;
							const F = [this.clocks[x] * 100],
								V = (z = (W = this.connectivity) == null ? void 0 : W[x]) == null ? void 0 : z.disconnectTimeout;
							if (V && this.playersStatusTimestamp[x]) {
								const A = this.playersStatusTimestamp[x] + V - Date.now();
								F.push(Math.max(0, A))
							}
							return Math.min(...F)
						}
						getAutoAbortTimeLeft(x) {
							var W, z;
							const F = [this.getAutoResignTimeLeft(x) || 0];
							return (W = this.timeouts) != null && W.move && F.push((z = this.timeouts) == null ? void 0 : z.move), Math.min(...F)
						}
						getPGNHeaders() {
							const x = this.getTimeControl();
							let W = `${x.baseTime}`;
							x.timeIncrement && (W += `+${x.timeIncrement}`);
							const z = this.getGameEndReason();
							let F = n.Si.NONE,
								V = "unterminated";
							if (z) {
								const Z = this.getWinnerIndex();
								if (Z === -1) F = n.Si.HALF_HALF, V = n.zu[z];
								else {
									const A = this.playersDetails[Z].username;
									F = [n.Si.ONE_ZERO, n.Si.ZERO_ONE][Z], V = n.zu[z].replace("%winner%", A)
								}
							}
							return {
								Site: "Chess.com",
								Event: "Live Chess",
								Date: (0, i.w6)(new Date, "."),
								TimeControl: W,
								White: this.playersDetails[0].username,
								Black: this.playersDetails[1].username,
								Termination: V,
								Result: F
							}
						}
						hasOutgoingDrawOffer(x) {
							const W = this.getPlayerIndex(x);
							return W === -1 ? !1 : this.draws[W] === y.M.Draw
						}
						getRematchColor(x) {
							const W = this.getPlayerIndex(x);
							return this.isAborted() || this.isCustomPosition() ? W + 1 : 3 - (W + 1)
						}
						isVariant() {
							return this.getGameType() !== "chess"
						}
						getTimeClass() {
							return (0, _.L)(this.getTimeControl())
						}
						isBullet() {
							return this.getTimeClass() === "bullet"
						}
						getOddsPlyIncrement() {
							return 0
						}
						getOfflineDelay() {
							return this.isBullet() ? 1e4 : 3e4
						}
						getPlayerConnectionLevel(x, W) {
							if (!this.connectivity[x].disconnectedAt) return t.T.Excellent;
							if (this.playersStatusTimestamp[x]) {
								const F = this.getOfflineDelay(),
									V = W - this.playersStatusTimestamp[x];
								return V >= F ? t.T.Offline : V >= F - 1e3 ? t.T.Poor : V >= F - 2e3 ? t.T.Ok : V >= F - 3e3 ? t.T.Good : t.T.Excellent
							}
							return null
						}
					}
				},
				93515: function(m, a, e) {
					e.d(a, {
						k: function() {
							return k
						}
					});
					var n = e(52553),
						t = e(96066),
						s = e(38015),
						i = e(16382),
						r = e(19934),
						o = e(34308),
						u = e(39059),
						c = e(15413),
						l = e(31619),
						p = e(5148),
						h = e(93485),
						_ = e(15875),
						b = e(72420),
						g = e(42591),
						v = e(87626),
						E = e(90204),
						y = Object.defineProperty,
						w = (O, T, C) => T in O ? y(O, T, {
							enumerable: !0,
							configurable: !0,
							writable: !0,
							value: C
						}) : O[T] = C,
						P = (O, T, C) => (w(O, typeof T != "symbol" ? T + "" : T, C), C);
					class k extends b.t {
						constructor() {
							super(...arguments), P(this, "accepted", !1), P(this, "color", t.s.Random), P(this, "createdAt", ""), P(this, "game", null), P(this, "href", ""), P(this, "id", ""), P(this, "playersDetails", (0, n.BL)(v.i, {
								key: "uuid",
								max: 2
							})), P(this, "rated", !1), P(this, "source", s.M.RCN), P(this, "state", i.Q.Active), P(this, "timeControl", {
								base: "",
								increment: ""
							}), P(this, "toUserId", null), P(this, "type", r.o.Seek), P(this, "updatedAt", ""), P(this, "userId", ""), P(this, "variant", "chess")
						}
						getChallengeId() {
							return this.id
						}
						getGameType() {
							return this.variant
						}
						getGameIcon() {
							return (0, l.N)(this.getTimeControl(), this.variant)
						}
						getGameLabel() {
							const T = (0, h.n)(this.getTimeControl()),
								C = this.getTo();
							return C ? (0, _.dW)("%time% vs %opponent%", {
								"%time%": T,
								"%opponent%": C.getUsername()
							}) : T
						}
						getTimeControl() {
							return {
								baseTime: (0, o.k)(this.timeControl.base),
								timeIncrement: (0, o.k)(this.timeControl.increment),
								timeType: "live"
							}
						}
						getEstimatedDuration() {
							return (0, u.f)(this.getTimeControl())
						}
						getTimeLabel() {
							return (0, p.X)(this.getTimeControl())
						}
						getFrom() {
							return this.playersDetails.find(this.userId)
						}
						getTo() {
							var T, C;
							return this.toUserId && ((C = (T = this.playersDetails).find) == null ? void 0 : C.call(T, this.toUserId)) || null
						}
						isFrom(T) {
							return T instanceof g.Q ? T.uuid === this.userId : T === this.userId
						}
						isTo(T) {
							return T instanceof g.Q ? T.uuid === this.toUserId : T === this.toUserId
						}
						getColor() {
							return this.color
						}
						hasColor() {
							return this.color !== t.s.Random
						}
						isVariant() {
							return this.variant !== "chess"
						}
						getGameTypeLabel() {
							var T;
							return ((T = (0, E.A)(this.variant)) == null ? void 0 : T.label) || ""
						}
						isRatedChallenge() {
							return this.rated
						}
						getRatedLabel() {
							return this.isRatedChallenge() ? (0, _.dW)("Rated") : (0, _.dW)("Unrated")
						}
						getColorLabel() {
							switch (this.color) {
								case t.s.White:
									return (0, _.dW)("White");
								case t.s.Black:
									return (0, _.dW)("Black");
								default:
									return ""
							}
						}
						getRatingType() {
							return (0, c.G)(this.getTimeControl(), this.variant)
						}
						getTimeRatedLabel() {
							let T = this.getTimeLabel();
							return this.isRatedChallenge() || (T += ` (${this.getRatedLabel()})`), T
						}
						getMaxRating() {
							return null
						}
						getMinRating() {
							return null
						}
						getRating() {
							return 0
						}
						getRatingToClosestHundred() {
							return Math.round(this.getRating() / 100) * 100
						}
						isAccepted() {
							return this.accepted
						}
					}
				},
				87626: function(m, a, e) {
					e.d(a, {
						i: function() {
							return p
						}
					});
					var n = e(81005),
						t = e(4143),
						s = e(6936),
						i = e(16488),
						r = e(66248),
						o = e(35790),
						u = Object.defineProperty,
						c = (h, _, b) => _ in h ? u(h, _, {
							enumerable: !0,
							configurable: !0,
							writable: !0,
							value: b
						}) : h[_] = b,
						l = (h, _, b) => (c(h, typeof _ != "symbol" ? _ + "" : _, b), b);
					class p extends i.n {
						constructor() {
							super(...arguments), l(this, "avatarUrl", ""), l(this, "chessTitle", ""), l(this, "country", null), l(this, "flairCode", null), l(this, "friendRequestReceived", !1), l(this, "friendRequestSent", !1), l(this, "hasConnectedTwitch", !1), l(this, "id", 0), l(this, "isFriend", !1), l(this, "membership", "basic"), l(this, "rating", 0), l(this, "username", ""), l(this, "uuid", "")
						}
						get membershipLevel() {
							return n.p[this.membership]
						}
						getAvatar() {
							return this.avatarUrl
						}
						getHighResAvatar() {
							var _;
							return (_ = (0, t.q)(this.avatarUrl, 3)) != null ? _ : this.avatarUrl
						}
						getUsername() {
							return this.username
						}
						getChessTitle() {
							return this.chessTitle
						}
						getFlairCode() {
							return this.flairCode
						}
						getCountry() {
							return this.country
						}
						isSameUser(_) {
							return this.uuid === (0, o.T)(_)
						}
						hasFriendRelation() {
							return this.isFriend
						}
						getProfileUrl() {
							return s.Z.generate("web_member_view", {
								username: this.getUsername()
							})
						}
						getRating() {
							return this.rating
						}
						isPremium() {
							return this.membership !== "basic"
						}
						getMembership() {
							return n.p[this.membership]
						}
						isGuest() {
							return this.membership === "guest"
						}
						getTagline() {
							return (0, r.J)({
								username: this.getUsername(),
								chessTitle: this.getChessTitle(),
								rating: this.rating
							})
						}
					}
				},
				19888: function(m, a, e) {
					e.d(a, {
						W: function() {
							return u
						}
					});
					var n = e(52553),
						t = e(83187),
						s = e(5148),
						i = Object.defineProperty,
						r = (c, l, p) => l in c ? i(c, l, {
							enumerable: !0,
							configurable: !0,
							writable: !0,
							value: p
						}) : c[l] = p,
						o = (c, l, p) => (r(c, typeof l != "symbol" ? l + "" : l, p), p);
					class u extends n.Hn {
						constructor(l) {
							if (super(), o(this, "key", ""), o(this, "baseTime", 600), o(this, "timeIncrement", 0), o(this, "timeType", ""), o(this, "isCustom", !1), l?.isCustom) {
								(0, n.Uc)(this, l);
								return
							}
							l?.key && (0, n.Uc)(this, (0, t.B)(l.key))
						}
						getLabel() {
							return (0, s.X)(this)
						}
					}
				},
				16488: function(m, a, e) {
					e.d(a, {
						n: function() {
							return t
						}
					});
					var n = e(52553);
					class t extends n.Hn {}
				},
				78631: function(m, a, e) {
					e.d(a, {
						Y: function() {
							return r
						}
					});
					var n = e(52553),
						t = Object.defineProperty,
						s = (o, u, c) => u in o ? t(o, u, {
							enumerable: !0,
							configurable: !0,
							writable: !0,
							value: c
						}) : o[u] = c,
						i = (o, u, c) => (s(o, typeof u != "symbol" ? u + "" : u, c), c);
					class r extends n.Hn {
						constructor() {
							super(...arguments), i(this, "page", 0)
						}
					}
				},
				42131: function(m, a, e) {
					e.d(a, {
						C: function() {
							return r
						}
					});
					var n = e(52553),
						t = Object.defineProperty,
						s = (o, u, c) => u in o ? t(o, u, {
							enumerable: !0,
							configurable: !0,
							writable: !0,
							value: c
						}) : o[u] = c,
						i = (o, u, c) => (s(o, typeof u != "symbol" ? u + "" : u, c), c);
					class r extends n.Hn {
						constructor() {
							super(...arguments), i(this, "firstPage", 0), i(this, "id", 0), i(this, "lastPage", 0), i(this, "lastQuery", 0), i(this, "pageSize", 10), i(this, "totalCount", 0), i(this, "versions", {})
						}
						getMaxPages() {
							return Math.ceil(this.totalCount / this.pageSize)
						}
						getCurrentVersions() {
							const u = this.versions || {},
								c = {},
								l = this.getMaxPages();
							let p = this.lastPage;
							p > l && (p = l || 1);
							for (let h = this.firstPage; h <= p; h++) c[h] = u[h] || 0;
							return c
						}
					}
				},
				50760: function(m, a, e) {
					e.d(a, {
						K: function() {
							return n
						}
					});
					var n = (t => (t[t.Open = 0] = "Open", t[t.Close = 1] = "Close", t))(n || {})
				},
				21820: function(m, a, e) {
					e.d(a, {
						z: function() {
							return t
						}
					});
					var n = e(52553);
					const t = (0, n.gd)()
				},
				35029: function(m, a, e) {
					e.d(a, {
						k: function() {
							return u
						}
					});
					var n = e(52553),
						t = e(9085),
						s = Object.defineProperty,
						i = (c, l, p) => l in c ? s(c, l, {
							enumerable: !0,
							configurable: !0,
							writable: !0,
							value: p
						}) : c[l] = p,
						r = (c, l, p) => (i(c, typeof l != "symbol" ? l + "" : l, p), p);
					class o extends n.Hn {
						constructor() {
							super(...arguments), r(this, "id", "")
						}
						getBoardRef() {
							return {
								id: this.id,
								type: t.V.Analysis
							}
						}
					}
					const u = {
						analysis: (0, n.BL)(o, {
							key: "id"
						})
					}
				},
				52461: function(m, a, e) {
					e.d(a, {
						U: function() {
							return w
						}
					});
					var n = e(67104),
						t = e(39427);

					function s(P) {
						const k = [(0, n.qU)(), (0, n.YP)()];
						(0, t.t)(P, k)
					}
					var i = e(54612),
						r = e(55607),
						o = e(44856),
						u = e(38549),
						c = e(13920);

					function l(P, k) {
						const O = {};
						return Object.keys(k).forEach(T => {
							const C = k[T],
								D = () => {
									const x = C.getValue(P);
									x !== O[T] && (O[T] = x)
								};
							D();
							const L = C.debounce === !1 ? D : (0, u.Z)(D, C.debounce);
							P.parentNode && P.game.onMany(C.events, L), P.addEventListener(o._.Events.BoardAttached, () => {
								D(), P.game.onMany(C.events, L)
							}), P.addEventListener(o._.Events.BoardDetached, () => {
								P.game.offMany(C.events.map(x => ({
									type: x,
									handler: L
								})))
							})
						}), (0, c.iH)(O), O
					}

					function p(P) {
						var k, O, T;
						const {
							id: C,
							options: D,
							mode: L,
							plugins: x,
							state: W,
							excludedPlugins: z
						} = P;
						if (C in r.q.chessboards) throw new Error("Chessboard already created");
						const F = (0, n.n8)((0, n.NQ)({
								exclude: z ?? []
							}), (T = (O = (k = i.f).getDefaultChessboardPlugins) == null ? void 0 : O.call(k)) != null ? T : []),
							V = F.find(j => j.name === n.th.Sounds.Plugin.Name),
							Z = F.find(j => j.name === n.th.ArrowKeys.Plugin.Name);
						!r.q.arrowKeysPlugin && Z && (r.q.arrowKeysPlugin = Z), !r.q.soundPlugin && V && (r.q.soundPlugin = V);
						const A = (0, n.n8)(F, x || []).filter(j => j.name !== n.th.Sounds.Plugin.Name).concat(r.q.soundPlugin),
							S = document.createElement("chess-board");
						return S.className = "board", S.createGame({
							el: S,
							options: {
								...r.q.boardOptions,
								...D,
								id: C,
								test: Boolean(window.Config.cypress)
							},
							mode: L,
							plugins: A
						}), z?.includes(n.th.BoardImages.Plugin.Name) || s(S), W && (S.state = l(S, W)), r.q.chessboards[C] = S, new Promise(j => {
							S.game.once("RendererSet", () => {
								setTimeout(j, 0)
							})
						})
					}
					var h = e(45952),
						_ = e(91008);
					const b = {
							debounce: 250,
							events: n.jd,
							getValue: P => P.game.isAtEndOfLine()
						},
						g = {
							debounce: !1,
							events: [n.QY.OptionsEvents.Update],
							getValue: P => P.game.getOptions().flipped
						},
						v = {
							debounce: 250,
							events: n.jd,
							getValue: P => {
								var k;
								return (k = P.game.getSelectedNode()) != null ? k : null
							}
						},
						E = {
							isAtEndOfLine: b,
							isFlipped: g,
							selectedNode: v
						};
					var y = e(89871);
					async function w() {
						await p({
							id: "single",
							mode: h.C,
							state: E
						}), (0, y.g)().game.load({
							fen: (0, _.H)()
						})
					}
				},
				32786: function(m, a, e) {
					e.d(a, {
						V: function() {
							return i
						}
					});
					var n = e(48385),
						t = e(60181),
						s = e(17655);

					function i() {
						(0, s.H)() ? (0, n.v)() : t.q.isBlankBoardFlipped = !t.q.isBlankBoardFlipped
					}
				},
				89871: function(m, a, e) {
					e.d(a, {
						g: function() {
							return r
						}
					});
					var n = e(54612),
						t = e(55607);

					function s(o) {
						return t.q.chessboards[`${o}`]
					}

					function i() {
						const o = n.f.getActiveChessboardId();
						if (!o) throw new Error("No active chessboard");
						return s(o)
					}

					function r() {
						return i()
					}
				},
				86562: function(m, a, e) {
					e.d(a, {
						i: function() {
							return t
						}
					});
					var n = e(89871);

					function t() {
						var s, i;
						const r = (0, n.g)();
						let o = (s = r?.state) == null ? void 0 : s.selectedNode;
						for (; o?.ids.line;) o = r.game.getNodeByIds(o.previous);
						return (i = o?.ply) != null ? i : 0
					}
				},
				89151: function(m, a, e) {
					e.d(a, {
						C: function() {
							return s
						}
					});
					var n = e(60181),
						t = e(57849);

					function s(i) {
						return n.q.snapshots[(0, t.M)(i)] || null
					}
				},
				51722: function(m, a, e) {
					e.d(a, {
						J: function() {
							return r
						}
					});
					var n = e(89871),
						t = e(89151),
						s = e(17655),
						i = e(62647);

					function r(o) {
						var u, c;
						const l = o ?? (0, s.H)();
						return l ? (0, i.G)(l) ? Boolean((u = (0, n.g)()) == null ? void 0 : u.state.isAtEndOfLine) : Boolean(!((c = (0, t.C)(l)) != null && c.selectedNode)) : !0
					}
				},
				8181: function(m, a, e) {
					e.d(a, {
						y: function() {
							return o
						}
					});
					var n = e(89871),
						t = e(89151),
						s = e(60181),
						i = e(17655),
						r = e(62647);

					function o(u) {
						var c, l;
						const p = u ?? (0, i.H)();
						return p ? (0, r.G)(p) ? Boolean((c = (0, n.g)()) == null ? void 0 : c.state.isFlipped) : Boolean((l = (0, t.C)(p)) == null ? void 0 : l.isFlipped) : s.q.isBlankBoardFlipped
					}
				},
				21116: function(m, a, e) {
					e.d(a, {
						a: function() {
							return p
						}
					});
					var n = e(51321),
						t = e(13309),
						s = e(65077),
						i = e(82619),
						r = e(56626),
						o = e(9085),
						u = e(17655),
						c = e(74508);
					const l = ["chess", "chess960", "oddschess"];

					function p() {
						const h = (0, u.H)();
						if (!h || (0, t.G)()) return !1;
						switch (h.type) {
							case o.V.Analysis:
								return !0;
							case o.V.LiveGame: {
								const _ = (0, s.S)(h.id);
								return Boolean(_ && l.includes(_.getGameType()) && (!_.isPlaying((0, i.t)()) || _.isOver()))
							}
							case o.V.RcnGame: {
								const _ = (0, r.M)(h.id);
								return Boolean(_ && l.includes(_.getGameType()) && (!_.isPlaying((0, c.S)()) || _.isOver()))
							}
							case o.V.DailyGame: {
								const _ = (0, n.P)(h.id);
								return Boolean(_ && (_.isLiveGame || _.isVsComputer) && l.includes(_.getGameType()) && (!_.isPlaying((0, c.S)()) || _.isOver()))
							}
							default:
								return !1
						}
					}
				},
				5628: function(m, a, e) {
					e.d(a, {
						l: function() {
							return l
						}
					});
					var n = e(45463),
						t = e(21116),
						s = e(65077),
						i = e(82619),
						r = e(5365);

					function o() {
						return Boolean(r.K.playSettings.evalBar)
					}
					var u = e(9085),
						c = e(17655);

					function l() {
						const p = (0, c.H)();
						if (p?.type === u.V.LiveGame) {
							const h = (0, s.S)(p.id);
							if (h?.isPlaying((0, i.t)()) && h?.hasHelpModifier() && !h?.isRated()) return !0
						}
						return !(0, t.a)() || !p ? !1 : (0, n.jn)(p?.isEvaluationBarEnabled) ? p.isEvaluationBarEnabled : o()
					}
				},
				60181: function(m, a, e) {
					e.d(a, {
						q: function() {
							return n
						}
					});
					const n = {
						snapshots: {},
						listeners: [],
						isBlankBoardFlipped: !1,
						chessboardModeBeforeExplorerEnabled: null
					}
				},
				83778: function(m, a, e) {
					e.d(a, {
						I: function() {
							return r
						}
					});
					var n = e(81194),
						t = e(39852),
						s = e(47172),
						i = e(57849);

					function r(o) {
						(0, n.M)(o), t.J.clocks.update({
							id: o.id,
							type: o.type,
							key: (0, i.M)(o)
						}).elements.push({
							element: o.element,
							iconElement: (0, s.SG)(o.element),
							barElement: (0, s.Bw)(o.element),
							iconDegree: 0,
							playerIndex: o.playerIndex
						})
					}
				},
				42567: function(m, a, e) {
					e.d(a, {
						Y: function() {
							return s
						}
					});
					var n = e(39852),
						t = e(57849);

					function s(i) {
						const r = n.J.clocks.update({
							id: i.id,
							type: i.type,
							key: (0, t.M)(i)
						});
						Object.assign(r, i)
					}
				},
				81194: function(m, a, e) {
					e.d(a, {
						M: function() {
							return i
						}
					});
					var n = e(18370),
						t = e(39852),
						s = e(57849);

					function i(r) {
						const o = t.J.clocks.find((0, s.M)(r));
						o && (0, n.A)(o.elements, u => u.element === r.element)
					}
				},
				41885: function(m, a, e) {
					e.d(a, {
						d: function() {
							return n
						}
					});
					var n = (t => (t[t.LowTime = 0] = "LowTime", t[t.Timeout = 1] = "Timeout", t[t.Every5Sec = 2] = "Every5Sec", t))(n || {})
				},
				98560: function(m, a, e) {
					e.d(a, {
						W: function() {
							return t
						}
					});
					var n = e(52553);
					const t = (0, n.gd)()
				},
				69051: function(m, a, e) {
					e.d(a, {
						a: function() {
							return s
						}
					});
					var n = e(39852),
						t = e(57849);

					function s(i, r) {
						return n.J.clocks.find((0, t.M)({
							type: i,
							id: r
						}))
					}
				},
				73641: function(m, a, e) {
					e.d(a, {
						i: function() {
							return t
						}
					});
					var n = e(39852);

					function t() {
						return n.J.currentTime.now60sec
					}
				},
				45215: function(m, a, e) {
					e.d(a, {
						b: function() {
							return t
						}
					});
					var n = e(39852);

					function t() {
						return n.J.currentTime.now1sec
					}
				},
				39852: function(m, a, e) {
					e.d(a, {
						J: function() {
							return _
						}
					});
					var n = e(52553),
						t = e(45463),
						s = e(3832),
						i = Object.defineProperty,
						r = (b, g, v) => g in b ? i(b, g, {
							enumerable: !0,
							configurable: !0,
							writable: !0,
							value: v
						}) : b[g] = v,
						o = (b, g, v) => (r(b, typeof g != "symbol" ? g + "" : g, v), v);
					class u extends n.Hn {
						constructor() {
							super(...arguments), o(this, "key", ""), o(this, "id", 0), o(this, "type", ""), o(this, "elements", []), o(this, "tolerance", 0), o(this, "baseTime", 600), o(this, "timeIncrement", 0), o(this, "playerIndex", -1), o(this, "playerToMove", 0), o(this, "currentClocks", []), o(this, "nextLags", []), o(this, "currentLags", []), o(this, "isRunning", !1), o(this, "lowTime", [!1, !1]), o(this, "timeout", !1)
						}
						getTickedClocks(g) {
							const v = this.currentClocks.slice(0);
							return v[this.playerToMove] -= g, v
						}
						getTickedLags(g) {
							const v = this.currentLags.slice(0);
							return v[this.playerToMove] -= g, v
						}
						getUpdatedClocks(g, v) {
							const E = this.playerIndex;
							if (E === -1) return g.slice(0);
							const y = 1 - E,
								w = this.currentClocks.slice(0);
							return this.shouldOverwriteClock(g, E) && (w[E] = g[E]), this.shouldOverwriteClock(g, y) ? w[y] = g[y] : this.shouldIncrementOpponentClock(v) && (w[y] += this.timeIncrement), w
						}
						getCurrentLags(g) {
							const v = [];
							for (let E = 0; E < 2; E++) {
								const y = this.nextLags[E],
									w = this.getClockDelta(g, E);
								v[E] = Math.min(100, w + y + 3)
							}
							return v
						}
						getNextLags(g) {
							const v = this.nextLags.slice(0),
								E = 1 - this.playerIndex;
							return this.playerIndex === -1 || this.shouldOverwriteClock(g, E) || this.shouldOverwriteClock(g, E) || (v[E] = this.getClockDelta(g, E)), v
						}
						getClockDelta(g, v) {
							const E = g[v],
								y = this.timeIncrement;
							return Math.max(0, E - this.currentClocks[v] - y)
						}
						shouldOverwriteClock(g, v) {
							const E = this.timeIncrement,
								y = g[v],
								w = this.currentClocks[v],
								P = this.tolerance;
							return y - E < w || y - E > w + P || y < P || w < P
						}
						shouldIncrementOpponentClock(g) {
							const v = 1 - this.playerIndex;
							return this.playerToMove === v && g !== v
						}
						shouldDelayOpponentClock() {
							return this.tolerance > 0 && this.playerToMove !== this.playerIndex && this.currentLags[this.playerToMove] > 0
						}
						getCurrentClock(g = this.playerIndex) {
							return this.currentClocks[g]
						}
						getIncrementedClock() {
							let g = this.currentClocks[this.playerIndex];
							return this.timeIncrement > 0 && (g += this.timeIncrement), g
						}
						getMovedClocks(g) {
							const v = this.currentClocks.slice(0);
							return v[this.playerToMove] = g, v
						}
						getLowTime() {
							const g = {
								baseTime: this.baseTime / 10,
								timeIncrement: this.timeIncrement / 10,
								timeType: "live"
							};
							switch ((0, s.L)(g)) {
								case "bullet":
									return 100;
								case "blitz":
									return 200;
								default:
									return 600
							}
						}
						hasLowTime(g) {
							return !this.lowTime[g] && this.getCurrentClock(g) > 0 && this.getCurrentClock(g) < this.getLowTime()
						}
						hasGotTimeout() {
							return !this.timeout && this.playerIndex === this.playerToMove && this.getCurrentClock(this.playerToMove) <= 0
						}
						getBarRemainder(g) {
							return (this.getCurrentClock(g) * 100 / this.baseTime).toFixed(0)
						}
					}
					var c, l;
					const p = Date.now(),
						h = (l = (c = window.performance) == null ? void 0 : c.now) == null ? void 0 : l.call(c),
						_ = {
							tickInterval: null,
							tickTimeout: null,
							intervalCounter: 0,
							lastInterval: 0,
							clockNow: p,
							clockPerfNow: h,
							isPerfNowSupported: (0, t.hj)(h),
							clocks: (0, n.BL)(u, {
								key: "key"
							}),
							last1sec: p,
							last5sec: p,
							last60sec: p,
							currentTime: {
								now1sec: p,
								now5sec: p,
								now60sec: p
							}
						}
				},
				55475: function(m, a, e) {
					e.d(a, {
						h: function() {
							return i
						}
					});
					var n = e(92005),
						t = e(6936),
						s = e(77099);
					async function i() {
						const r = await n.Z.get(t.Z.generate("web_club_callback_user_member_clubs"));
						s.m.memberClubs.splice(0, s.m.memberClubs.length, ...r.data)
					}
				},
				29037: function(m, a, e) {
					e.d(a, {
						s: function() {
							return c
						}
					});
					var n = e(43667),
						t = e(92005),
						s = e(6936),
						i = e(77099);
					async function r() {
						const l = await t.Z.get(s.Z.generate("web_club_callback_user_admin_clubs"));
						i.m.adminClubs.reset(l.data)
					}
					var o = e(55475);
					async function u() {
						i.m.isLoadingClubs = !0, i.m.hasLoadedClubs = !1, i.m.hasFailedToLoadClubs = !1;
						try {
							await Promise.all([r(), (0, o.h)()]), i.m.hasLoadedClubs = !0
						} catch {
							i.m.hasFailedToLoadClubs = !0
						}
						i.m.isLoadingClubs = !1
					}

					function c() {
						return !i.m.isLoadingClubs && !i.m.hasLoadedClubs && !i.m.hasFailedToLoadClubs && u(), (0, n.Q)((l, p) => {
							i.m.hasLoadedClubs ? l() : i.m.hasFailedToLoadClubs && p(new Error("failed to load clubs"))
						})
					}
				},
				77099: function(m, a, e) {
					e.d(a, {
						m: function() {
							return o
						}
					});
					var n = e(52553),
						t = Object.defineProperty,
						s = (u, c, l) => c in u ? t(u, c, {
							enumerable: !0,
							configurable: !0,
							writable: !0,
							value: l
						}) : u[c] = l,
						i = (u, c, l) => (s(u, typeof c != "symbol" ? c + "" : c, l), l);
					class r extends n.Hn {
						constructor() {
							super(...arguments), i(this, "create_date", 0), i(this, "description", ""), i(this, "id", 0), i(this, "image_url", ""), i(this, "member_count", 0), i(this, "name", ""), i(this, "url", "")
						}
					}
					const o = {
						isLoadingClubs: !1,
						hasLoadedClubs: !1,
						hasFailedToLoadClubs: !1,
						adminClubs: (0, n.BL)(r, {
							key: "id"
						}),
						searchResults: (0, n.BL)(r, {
							key: "id"
						}),
						memberClubs: [],
						isSearchingClubs: !1,
						searchMessage: ""
					}
				},
				60849: function(m, a, e) {
					e.d(a, {
						k: function() {
							return _
						}
					});
					var n = e(52553),
						t = e(30133),
						s = Object.defineProperty,
						i = (b, g, v) => g in b ? s(b, g, {
							enumerable: !0,
							configurable: !0,
							writable: !0,
							value: v
						}) : b[g] = v,
						r = (b, g, v) => (i(b, typeof g != "symbol" ? g + "" : g, v), v);
					class o extends n.Hn {
						constructor() {
							super(...arguments), r(this, "more", !1), r(this, "page", 1), r(this, "perPage", 20), r(this, "total", 0)
						}
					}
					var u = e(46769),
						c = Object.defineProperty,
						l = (b, g, v) => g in b ? c(b, g, {
							enumerable: !0,
							configurable: !0,
							writable: !0,
							value: v
						}) : b[g] = v,
						p = (b, g, v) => (l(b, typeof g != "symbol" ? g + "" : g, v), v);
					class h extends n.Hn {
						constructor() {
							super(...arguments), p(this, "id", 0), p(this, "busy", !1), p(this, "comments", (0, n.BL)(t.s, {
								key: "id"
							})), p(this, "paginator", new o), p(this, "user", new u.P), p(this, "reactionsPrefix", "")
						}
					}
					const _ = {
						currentThreadId: null,
						threads: (0, n.BL)(h, {
							key: "id"
						})
					}
				},
				44675: function(m, a, e) {
					e.d(a, {
						z: function() {
							return u
						}
					});
					var n = e(11341),
						t = e(64276),
						s = e(53197),
						i = e(32768),
						r = e(89639),
						o = e(1730);

					function u() {
						const c = t.C.isTournamentsModalVisible;
						t.C.isTournamentsModalVisible = !1, (0, i.g)(), c && (0, n.r)() && !(0, r.g)() && (0, o.k)() && (0, s.F)()
					}
				},
				11145: function(m, a, e) {
					e.d(a, {
						t: function() {
							return h
						}
					});
					var n = e(52553),
						t = e(29037),
						s = e(64862),
						i = e(64276),
						r = e(12474),
						o = e(21980),
						u = e(7689),
						c = e(33490),
						l = e(78855),
						p = e(89639);
					async function h() {
						i.C.isTournamentsModalVisible || (await (0, n.tL)(Promise.all([e.e(9194), e.e(3798), e.e(4296)]).then(e.bind(e, 3634))), i.C.isTournamentsModalVisible = !0, (0, t.s)(), !(0, p.g)() && !(0, o.b)() && (0, r.d)(), window.location.hash === "#club-event" || (0, s.E)() ? (0, u.p)({
							name: c.Q.CreateTournament,
							params: (0, l.r)().params || {}
						}) : (0, u.p)({
							name: c.Q.Tournaments,
							params: {}
						}))
					}
				},
				16610: function(m, a, e) {
					e.d(a, {
						f: function() {
							return t
						}
					});
					var n = e(64276);

					function t() {
						return n.C.activeArenaChallenge
					}
				},
				54938: function(m, a, e) {
					e.d(a, {
						r: function() {
							return i
						}
					});
					var n = e(64276),
						t = e(33490),
						s = e(78855);

					function i() {
						if (n.C.activeArena) return n.C.activeArena;
						const r = (0, s.r)();
						return r.name === t.Q.LiveArena && r.id ? r.id : null
					}
				},
				47440: function(m, a, e) {
					e.d(a, {
						T: function() {
							return t
						}
					});
					var n = e(64276);

					function t() {
						return n.C.activeTeamMatchChallenge
					}
				},
				37960: function(m, a, e) {
					e.d(a, {
						m: function() {
							return i
						}
					});
					var n = e(64276),
						t = e(33490),
						s = e(78855);

					function i() {
						if (n.C.activeTeamMatch) return n.C.activeTeamMatch;
						const r = (0, s.r)();
						return r.name === t.Q.LiveTeamMatch && r.id ? r.id : null
					}
				},
				34169: function(m, a, e) {
					e.d(a, {
						t: function() {
							return i
						}
					});
					var n = e(64276),
						t = e(33490),
						s = e(78855);

					function i() {
						if (n.C.activeTournament) return n.C.activeTournament;
						const r = (0, s.r)();
						return r.name === t.Q.LiveTournament && r.id ? r.id : null
					}
				},
				64862: function(m, a, e) {
					e.d(a, {
						E: function() {
							return i
						}
					});
					var n = e(64162),
						t = e(33490),
						s = e(78855);

					function i() {
						return (0, n.h)() && (0, s.r)().name === t.Q.CreateTournament
					}
				},
				64162: function(m, a, e) {
					e.d(a, {
						h: function() {
							return t
						}
					});
					var n = e(64276);

					function t() {
						return n.C.isTournamentsModalVisible
					}
				},
				64276: function(m, a, e) {
					e.d(a, {
						C: function() {
							return n
						}
					});
					const n = {
						activeArena: null,
						activeArenaChallenge: null,
						activeTeamMatch: null,
						activeTeamMatchChallenge: null,
						activeTournament: null,
						isTournamentsModalVisible: !1
					}
				},
				67421: function(m, a, e) {
					e.d(a, {
						G: function() {
							return s
						}
					});
					var n = e(52553),
						t = e(72012);
					const s = {
						messages: (0, n.BL)(t._, {
							key: "id"
						})
					}
				},
				60826: function(m, a, e) {
					e.d(a, {
						Q: function() {
							return c
						}
					});
					var n = e(52553),
						t = e(92005),
						s = e(6936);
					async function i() {
						const {
							data: l
						} = await t.Z.get(s.Z.generate("web_alert_callback_alerts"));
						return l
					}
					const r = (0, n.SN)({
						name: "alerts",
						loader: i,
						global: !0,
						expiration: 0
					});
					var o = e(30201),
						u = e(74508);
					async function c(l) {
						var p, h;
						if (!l?.forceReload) {
							const {
								alerts: v
							} = await r.load(), E = (h = (p = v?.game_seek) == null ? void 0 : p.data) == null ? void 0 : h.map(y => y.alertId).join(";");
							if (E === o.n.directChallengeAlertIds) return;
							if (o.n.directChallengeAlertIds = E, !E) {
								o.n.directChallenges.reset();
								return
							}
						}
						const {
							data: _
						} = await t.Z.get(s.Z.generate("web_game_seek_callback_user_seeks"));
						if (!_?.challengesToUser) return;
						const b = (0, u.S)(),
							g = _.challengesToUser.map(v => ({
								...v,
								baseRating: b.rating,
								to: b,
								from: {
									id: v.seekerUserId,
									avatar: v.seekerAvatar,
									uid: v.seekerUsername,
									daily: v.seekerRating,
									title: v.seekerTitle,
									flair: v.seekerFlairCode ? {
										code: v.seekerFlairCode
									} : null
								}
							}));
						o.n.directChallenges.reset(g)
					}
				},
				18710: function(m, a, e) {
					e.d(a, {
						W: function() {
							return n
						}
					});
					var n = (t => (t[t.Open = 0] = "Open", t[t.Close = 1] = "Close", t))(n || {})
				},
				24984: function(m, a, e) {
					e.d(a, {
						n: function() {
							return t
						}
					});
					var n = e(52553);
					const t = (0, n.gd)()
				},
				11817: function(m, a, e) {
					e.d(a, {
						c: function() {
							return t
						}
					});
					var n = e(30201);

					function t(s) {
						return n.n.seeks.find(s)
					}
				},
				30201: function(m, a, e) {
					e.d(a, {
						n: function() {
							return r
						}
					});
					var n = e(52553),
						t = e(78543),
						s = e(17856),
						i = e(97008);
					const r = {
						openChallenges: (0, n.BL)(s._, {
							key: "id"
						}),
						directChallenges: (0, n.BL)(s._, {
							key: "id"
						}),
						seeks: (0, n.BL)(i.f, {
							key: "id"
						}),
						activeGames: (0, n.BL)(t.v, {
							key: "id"
						}),
						outgoingChallenges: (0, n.BL)(t.v, {
							key: "id"
						}),
						activeGamesPage: 1,
						isCreatingDailyChallenge: !1,
						directChallengeAlertIds: ""
					}
				},
				90378: function(m, a, e) {
					e.d(a, {
						p: function() {
							return u
						}
					});
					var n = e(3527),
						t = e.n(n),
						s = e(92005),
						i = e(6936),
						r = e(27002),
						o = e(98988);
					async function u(c) {
						const l = (0, r.g)(c),
							p = o.y.games.find(c),
							{
								data: h
							} = await s.Z.get(i.Z.generate("web_analysis_game_callback_view_all", {
								type: "daily",
								gameId: c
							})),
							_ = h.selfAnalysis && h.selfAnalysis.selfAnalysis && h.selfAnalysis.selfAnalysis.pgn;
						if (!_) return;
						const b = t().createGame({
							analysis: !0
						});
						if (!b) return;
						b.loadPgn(_), b.loadMoves(p.moveList, {
							method: "promote"
						});
						const g = b.pgn({});
						l.localPgn = g, l.savedPgn = g
					}
				},
				98744: function(m, a, e) {
					e.d(a, {
						r: function() {
							return l
						}
					});
					var n = e(51321),
						t = e(98988);

					function s(p) {
						return t.y.chats.find(p)
					}
					var i = e(74508);

					function r(p) {
						const h = (0, n.P)(p);
						if (!h) return !1;
						const _ = s(p);
						if (_?.isLoading || _?.isAllPreviousLoaded) return !1;
						const b = (0, i.S)();
						return h.isPlaying(b) || b.hasSupportRole
					}
					var o = e(92005),
						u = e(6936);
					async function c(p, h) {
						const _ = u.Z.generate("web_game_callback_get_chat_messages", {
								id: p,
								...h
							}),
							{
								data: b
							} = await o.Z.get(_);
						return b
					}
					async function l(p, h) {
						if (!r(p)) return;
						const _ = t.y.chats.update({
								id: p,
								isLoading: !0
							}),
							b = await c(p, {
								before: h?.newer && _.beforeKey ? _.beforeKey : "",
								after: h?.older && _.afterKey ? _.afterKey : ""
							});
						if (t.y.chats.update({
								id: p,
								isLoading: !1
							}), !b.scrolling) return;
						t.y.chats.update({
							isLoading: !1,
							id: p,
							isEnabled: b.isEnabled,
							afterKey: b.scrolling.after,
							beforeKey: b.scrolling.before,
							hasNewMessage: _.hasNewMessage || b.hasNewMessage,
							isAllPreviousLoaded: h?.older && b.scrolling.isEnd || _.isAllPreviousLoaded
						}), _.messages.filter(y => y.pending).forEach(y => _.messages.remove(y.id));
						const g = (0, n.P)(p),
							v = (0, i.S)(),
							E = b.items.filter(y => !_.messages.includes(y.id)).map(y => {
								var w;
								return ((w = y.sender) == null ? void 0 : w.username) === v.username ? y.sender = null : y.sender = y.sender && g.getPlayer(y.sender.username) || y.sender, y.visible = !0, y
							});
						h?.older ? _.messages.unshift(...E) : _.messages.push(...E)
					}
				},
				91099: function(m, a, e) {
					e.d(a, {
						C: function() {
							return o
						}
					});
					var n = e(92005),
						t = e(6936),
						s = e(24719),
						i = e(51321),
						r = e(57482);
					async function o(u) {
						const c = (0, s.P)(u);
						if (!c || c.isLoading) return;
						const l = (0, i.P)(u);
						if (l.isFinished || l.isPlayerTurn) return;
						c.isLoading = !0;
						const {
							data: {
								moveConditions: p
							}
						} = await n.Z.get(t.Z.generate("web_move_condition_callback_get", {
							id: u
						})), h = [];
						p.map(_ => h.push({
							firstId: _[0].id,
							lastId: _[_.length - 1].id,
							moveList: _.map(b => `${b.ifMove}${b.thenMove}`).join(""),
							sans: _.reduce((b, {
								ifMoveSan: g,
								thenMoveSan: v
							}) => [...b, g, v], [])
						})), h.length === 0 && h.push((0, r.G)()), c.moveConditions = h, c.isLoading = !1
					}
				},
				89213: function(m, a, e) {
					e.d(a, {
						Y: function() {
							return r
						}
					});
					var n = e(92005),
						t = e(6936),
						s = e(51321),
						i = e(74508);
					async function r(u) {
						const c = (0, s.P)(u);
						if (!c || c.getPlayer((0, i.S)()).gamesInProgress <= 1) return;
						c.isPreviousNextLoading = !0;
						const p = {
								id: c.id,
								location: "daily"
							},
							h = c.isFinished ? t.Z.generate("web_callback_load_next_game_archive", p) : t.Z.generate("web_daily_callback_load_next_game", p),
							_ = c.isFinished ? t.Z.generate("web_callback_load_previous_game_archive", p) : t.Z.generate("web_daily_callback_load_previous_game", p);
						c.nextGame = await o(h), c.previousGame = await o(_), c.isPreviousNextLoading = !1
					}
					async function o(u) {
						var c, l;
						try {
							const {
								data: p
							} = await n.Z.get(u);
							return (l = (c = p.game) != null ? c : p.id) != null ? l : null
						} catch {
							return null
						}
					}
				},
				2005: function(m, a, e) {
					e.d(a, {
						F: function() {
							return g
						}
					});
					var n = e(18370),
						t = e(90378),
						s = e(98744),
						i = e(91099),
						r = e(89213),
						o = e(24511),
						u = e(48067),
						c = e(99450),
						l = e(83084),
						p = e(62545),
						h = e(95945),
						_ = e(98988),
						b = e(74508);
					async function g(v) {
						if (_.y.games.includes(v) || _.y.isLoading.includes(v)) return;
						_.y.isLoading.push(v);
						const E = await (0, h.V)(v);
						_.y.conditionals.add({
							id: E.id
						}), _.y.analysis.add({
							id: E.id
						});
						const y = _.y.games.add(E);
						(0, s.r)(y.id), p.i.emit(l.K.Open, {
							dailyGame: y
						}), (0, u.n)(c.U.playing), (0, o.F)(), y.isPlaying((0, b.S)()) && ((0, i.C)(v), (0, r.Y)(v), (0, t.p)(v)), (0, n.A)(_.y.isLoading, v)
					}
				},
				24511: function(m, a, e) {
					e.d(a, {
						F: function() {
							return s
						}
					});
					var n = e(96794),
						t = e(98988);

					function s() {
						t.y.currentMove = new n.J
					}
				},
				48067: function(m, a, e) {
					e.d(a, {
						n: function() {
							return t
						}
					});
					var n = e(98988);

					function t(s) {
						n.y.mode = s
					}
				},
				9045: function(m, a, e) {
					e.d(a, {
						I: function() {
							return n
						}
					});
					const n = 22
				},
				99450: function(m, a, e) {
					e.d(a, {
						U: function() {
							return n
						}
					});
					var n = (t => (t.analysis = "analysis", t.conditionals = "conditionals", t.playing = "playing", t))(n || {})
				},
				9021: function(m, a, e) {
					e.d(a, {
						o: function() {
							return n
						}
					});
					const n = "dismissAnalysisExplanation"
				},
				83084: function(m, a, e) {
					e.d(a, {
						K: function() {
							return n
						}
					});
					var n = (t => (t[t.Close = 0] = "Close", t[t.End = 1] = "End", t[t.NotFound = 2] = "NotFound", t[t.Open = 3] = "Open", t[t.PostMove = 4] = "PostMove", t[t.Update = 5] = "Update", t[t.Move = 6] = "Move", t))(n || {})
				},
				62545: function(m, a, e) {
					e.d(a, {
						i: function() {
							return t
						}
					});
					var n = e(52553);
					const t = (0, n.gd)()
				},
				27002: function(m, a, e) {
					e.d(a, {
						g: function() {
							return t
						}
					});
					var n = e(98988);

					function t(s) {
						return n.y.analysis.find(s)
					}
				},
				24719: function(m, a, e) {
					e.d(a, {
						P: function() {
							return t
						}
					});
					var n = e(98988);

					function t(s) {
						return n.y.conditionals.find(s)
					}
				},
				29604: function(m, a, e) {
					e.d(a, {
						P: function() {
							return s
						}
					});
					var n = e(15875),
						t = e(98988);

					function s(i) {
						const r = t.y.games.find(i);
						return `${(0,n.dW)("Chess: %opponentUsername% vs %playerUsername%",{"%opponentUsername%":r.getWhitePlayer().username,"%playerUsername%":r.getBlackPlayer().username})} - ${i} - Chess.com`
					}
				},
				51321: function(m, a, e) {
					e.d(a, {
						P: function() {
							return t
						}
					});
					var n = e(98988);

					function t(s) {
						return n.y.games.find(s)
					}
				},
				95945: function(m, a, e) {
					e.d(a, {
						V: function() {
							return i
						}
					});
					var n = e(92005),
						t = e(6936),
						s = e(42591);
					async function i(r) {
						const o = t.Z.generate("web_daily_callback_load_game", {
								id: r
							}),
							u = await n.Z.get(o),
							c = u.data.game,
							l = u.data.players,
							p = l.top.color === "white" ? l.top : l.bottom,
							h = l.top.color === "white" ? l.bottom : l.top;
						return [l.top, l.bottom].forEach(_ => {
							_.country = {
								name: _.countryName,
								code: _.countryId.toString()
							}
						}), c.players = [new s.Q(p), new s.Q(h)], c
					}
				},
				98988: function(m, a, e) {
					e.d(a, {
						y: function() {
							return O
						}
					});
					var n = e(52553),
						t = Object.defineProperty,
						s = (T, C, D) => C in T ? t(T, C, {
							enumerable: !0,
							configurable: !0,
							writable: !0,
							value: D
						}) : T[C] = D,
						i = (T, C, D) => (s(T, typeof C != "symbol" ? C + "" : C, D), D);
					class r extends n.Hn {
						constructor() {
							super(...arguments), i(this, "id", 0), i(this, "localPgn", ""), i(this, "isSaving", !1), i(this, "savedPgn", "")
						}
					}
					var o = e(72012),
						u = Object.defineProperty,
						c = (T, C, D) => C in T ? u(T, C, {
							enumerable: !0,
							configurable: !0,
							writable: !0,
							value: D
						}) : T[C] = D,
						l = (T, C, D) => (c(T, typeof C != "symbol" ? C + "" : C, D), D);
					class p extends n.Hn {
						constructor() {
							super(...arguments), l(this, "afterKey", ""), l(this, "beforeKey", ""), l(this, "id", 0), l(this, "isAllPreviousLoaded", !1), l(this, "isEnabled", !1), l(this, "isLoading", !1), l(this, "hasNewMessage", !1), l(this, "messages", (0, n.BL)(o._, {
								key: "id"
							}))
						}
					}
					var h = e(57482),
						_ = Object.defineProperty,
						b = (T, C, D) => C in T ? _(T, C, {
							enumerable: !0,
							configurable: !0,
							writable: !0,
							value: D
						}) : T[C] = D,
						g = (T, C, D) => (b(T, typeof C != "symbol" ? C + "" : C, D), D);
					class v extends n.Hn {
						constructor() {
							super(...arguments), g(this, "currentLine", 0), g(this, "id", 0), g(this, "isLoading", !1), g(this, "moveConditions", [(0, h.G)()])
						}
						getCurrentMoveCondition() {
							return this.moveConditions[this.currentLine]
						}
					}
					var E = e(80105),
						y = e(96794),
						w = e(99450),
						P = e(9021),
						k;
					const O = {
						analysis: (0, n.BL)(r, {
							key: "id"
						}),
						chats: (0, n.BL)(p, {
							key: "id"
						}),
						conditionals: (0, n.BL)(v, {
							key: "id"
						}),
						currentMove: new y.J,
						games: (0, n.BL)(E.C, {
							key: "id"
						}),
						isLoading: [],
						mode: w.U.playing,
						hasDismissedAnalysisExplanation: Boolean((k = window.localStorage.getItem(P.o)) != null ? k : !1)
					}
				},
				19040: function(m, a, e) {
					e.d(a, {
						s: function() {
							return n
						}
					});
					var n = (t => (t[t.ConnectionFailed = 0] = "ConnectionFailed", t[t.Disconnected = 1] = "Disconnected", t[t.Connecting = 2] = "Connecting", t[t.Connected = 3] = "Connected", t[t.Paired = 4] = "Paired", t[t.NotSynced = 5] = "NotSynced", t[t.Synced = 6] = "Synced", t[t.SyncedMove = 7] = "SyncedMove", t[t.SyncedWaiting = 8] = "SyncedWaiting", t[t.IllegalMove = 9] = "IllegalMove", t))(n || {})
				},
				70368: function(m, a, e) {
					e.d(a, {
						E: function() {
							return t
						}
					});
					var n = e(66932);

					function t() {
						return n.p.isEnabled
					}
				},
				66932: function(m, a, e) {
					e.d(a, {
						p: function() {
							return i
						}
					});
					var n = e(19040),
						t = e(5365);

					function s() {
						return t.K.playSettings.dgtBoardEnabled
					}
					const i = {
						isEnabled: s(),
						status: n.s.Disconnected,
						currentPosition: "",
						previousPosition: "",
						currentPiece: null,
						previousPiece: null
					}
				},
				47003: function(m, a, e) {
					e.d(a, {
						k: function() {
							return n
						}
					});
					var n = (t => (t.Other = "other", t.Own = "own", t.Master = "master", t))(n || {})
				},
				30300: function(m, a, e) {
					e.d(a, {
						f: function() {
							return s
						}
					});
					var n = e(47003);
					const t = {
							source: n.k.Master,
							username: ""
						},
						s = {
							opening: {
								name: "",
								score: 0
							},
							suggestedMoves: [],
							selectedMove: null,
							search: {
								...t
							}
						}
				},
				60090: function(m, a, e) {
					e.d(a, {
						g: function() {
							return n
						}
					});
					const n = "playHiddenFeaturedTvShows"
				},
				64381: function(m, a, e) {
					e.d(a, {
						n: function() {
							return i
						}
					});
					var n = e(36075),
						t = e(57351),
						s = e(3022);

					function i() {
						if (!t.Q.state.data) return [];
						const r = new Date().toLocaleString("en-US", {
								timeZone: "America/Los_Angeles"
							}),
							o = (0, n._)(r);
						return t.Q.state.data.filter(u => u.startTime <= o && u.endTime >= o && !s.M.hiddenShows.includes(u.streamChannel))
					}
				},
				57351: function(m, a, e) {
					e.d(a, {
						Q: function() {
							return o
						}
					});
					var n = e(52553),
						t = e(36075),
						s = e(92005),
						i = e(6936);
					async function r() {
						var u;
						const c = i.Z.generate("web_tv_callback_schedule", {
								locale: (u = window.context.locale) != null ? u : "en_US",
								isHeadlined: !0
							}),
							l = await s.Z.get(c),
							p = [];
						return Object.values(l.data.videos).forEach(h => {
							h.forEach(_ => {
								p.push({
									title: _.title,
									startTime: (0, t._)(_.start_date),
									endTime: (0, t._)(_.end_date),
									image: _.image_url,
									streamChannel: _.show_name,
									streamUrl: _.show_url
								})
							})
						}), p
					}
					const o = (0, n.SN)({
						name: "featuredTvShows",
						loader: r,
						persist: !1,
						expiration: 0
					})
				},
				3022: function(m, a, e) {
					e.d(a, {
						M: function() {
							return s
						}
					});
					var n = e(60090),
						t;
					const s = {
						hiddenShows: JSON.parse((t = window.localStorage.getItem(n.g)) != null ? t : "[]")
					}
				},
				69403: function(m, a, e) {
					e.d(a, {
						t: function() {
							return s
						}
					});
					var n = e(52553),
						t = e(93948);
					const s = {
						friends: (0, n.BL)(t.C, {
							key: "username"
						}),
						currentPage: 1,
						friendsCount: 0,
						loadingPages: []
					}
				},
				62724: function(m, a, e) {
					e.d(a, {
						F: function() {
							return u
						}
					});
					var n = e(52553),
						t = e(31619),
						s = Object.defineProperty,
						i = (c, l, p) => l in c ? s(c, l, {
							enumerable: !0,
							configurable: !0,
							writable: !0,
							value: p
						}) : c[l] = p,
						r = (c, l, p) => (i(c, typeof l != "symbol" ? l + "" : l, p), p);
					class o extends n.Hn {
						constructor() {
							super(...arguments), r(this, "baseTime1", 0), r(this, "daysPerTurn", 0), r(this, "timeIncrement", 0), r(this, "gameType", {
								code: ""
							}), r(this, "id", 0), r(this, "isLive", !1), r(this, "isVsComputer", !1), r(this, "user1", {
								title: "",
								username: ""
							}), r(this, "user2", {
								title: "",
								username: ""
							}), r(this, "user1Rating", 0), r(this, "user2Rating", 0), r(this, "user1Result", 0), r(this, "user2Result", 0)
						}
						getTimeControl() {
							return this.isLive || this.isVsComputer ? {
								baseTime: this.baseTime1 / 10,
								timeIncrement: this.timeIncrement,
								timeType: this.baseTime1 > 0 ? "live" : "none"
							} : {
								baseTime: this.daysPerTurn,
								timeIncrement: this.timeIncrement,
								timeType: "daily"
							}
						}
						getTimeControlIcon() {
							return this.isVsComputer ? "vs-bot" : (0, t.N)(this.getTimeControl(), this.getGameType())
						}
						getGameType() {
							return this.gameType.code
						}
						getResultLabel() {
							return this.user1Result === 1 ? "1-0" : this.user2Result === 1 ? "0-1" : "\xBD-\xBD"
						}
						hasWon(l) {
							return l === this.user1.username && this.user1Result === 1 || l === this.user2.username && this.user2Result === 1
						}
						hasLost(l) {
							return l === this.user1.username && this.user2Result === 1 || l === this.user2.username && this.user1Result === 1
						}
					}
					const u = {
						games: (0, n.BL)(o, {
							key: "id"
						}),
						isLoading: !1,
						filter: ""
					}
				},
				87995: function(m, a, e) {
					e.d(a, {
						M: function() {
							return o
						}
					});
					var n = e(18370),
						t = e(89871),
						s = e(8207),
						i = e(17655),
						r = e(62647);

					function o(u) {
						const c = u ?? (0, i.H)();
						if (!c) return;
						(0, n.A)(s.V.boards, p => p.id === c.id && p.type === c.type);
						const l = (0, t.g)();
						l.game.getOptions().enabled || setTimeout(() => {
							(0, r.G)(c) && l.game.setOptions({
								enabled: !0
							})
						}, 500)
					}
				},
				8207: function(m, a, e) {
					e.d(a, {
						V: function() {
							return n
						}
					});
					const n = {
						boards: []
					}
				},
				75916: function(m, a, e) {
					e.d(a, {
						_: function() {
							return n
						}
					});
					var n = (t => (t[t.AutoAbortMyTurn = 0] = "AutoAbortMyTurn", t[t.AutoAbortOpponentTurn = 1] = "AutoAbortOpponentTurn", t[t.AutoResignMyTurn = 2] = "AutoResignMyTurn", t[t.AutoResignOpponentTurn = 3] = "AutoResignOpponentTurn", t[t.OpponentOffline = 4] = "OpponentOffline", t[t.Offline = 5] = "Offline", t))(n || {})
				},
				43924: function(m, a, e) {
					e.d(a, {
						d: function() {
							return s
						}
					});
					var n = e(52553);
					const t = i => `${i.type}:${i.id}`,
						s = {
							opponentDisconnectedTimeout: (0, n.df)({
								key: t
							}),
							stallTimeout: (0, n.df)({
								key: t
							}),
							thinkTimeout: (0, n.df)({
								key: t
							}),
							timeoutNotifications: []
						}
				},
				42481: function(m, a, e) {
					e.d(a, {
						L: function() {
							return s
						}
					});
					var n = e(52553),
						t = e(28731);
					async function s() {
						await (0, n.tL)(e.e(5904).then(e.bind(e, 1191))), t.N.isFairPlayModalVisible = !0
					}
				},
				5890: function(m, a, e) {
					e.d(a, {
						w: function() {
							return s
						}
					});
					var n = e(42118),
						t = e(28731);

					function s(i = !t.N.focusMode) {
						t.N.focusMode = i, t.N.theatreMode = !1, (0, n.Y)(i);
						const r = document.getElementById("board-controls-focus");
						!r || (t.N.focusMode ? (r.classList.add("minimize"), r.classList.remove("maximize")) : (r.classList.remove("minimize"), r.classList.add("maximize")))
					}
				},
				24942: function(m, a, e) {
					e.d(a, {
						J: function() {
							return u
						}
					});
					var n = e(11817),
						t = e(51321),
						s = e(65077),
						i = e(56626),
						r = e(9085),
						o = e(17655);

					function u(c) {
						var l, p, h;
						const _ = (0, o.H)();
						if (!_) return null;
						switch (_.type) {
							case r.V.DailyGame:
								return (0, t.P)(_.id).players[c];
							case r.V.DailySeek:
								return (0, n.c)(_.id).getPlayer(c);
							case r.V.LiveGame: {
								const b = (0, s.S)(_.id);
								return (l = b?.players[c].getPlayerInfo(b.getRatingType())) != null ? l : null
							}
							case r.V.RcnGame:
								return (h = (p = (0, i.M)(_.id)) == null ? void 0 : p.getPlayer(c)) != null ? h : null;
							default:
								return null
						}
					}
				},
				13309: function(m, a, e) {
					e.d(a, {
						G: function() {
							return t
						}
					});
					var n = e(28731);

					function t() {
						return n.N.focusMode
					}
				},
				56904: function(m, a, e) {
					e.d(a, {
						x: function() {
							return t
						}
					});
					var n = e(28731);

					function t() {
						return n.N.theatreMode
					}
				},
				28731: function(m, a, e) {
					e.d(a, {
						N: function() {
							return t
						}
					});
					var n = e(26487);
					const t = {
						focusMode: !1,
						giftMembershipModalUser: null,
						isFairPlayModalVisible: !1,
						isSquaresEnabled: !1,
						reportModalUsername: null,
						shareModalVisible: !1,
						theatreMode: !1,
						windowBlurTimestamp: null,
						isFocusModeSupported: (0, n.k)()
					}
				},
				51401: function(m, a, e) {
					e.d(a, {
						p: function() {
							return s
						}
					});
					var n = e(52553),
						t = e(50279);
					const s = {
						leagueGames: (0, n.BL)(t.Q, {
							key: "uuid"
						}),
						fallbackTimeout: (0, n.df)({
							key: i => `${i.type}:${i.id}`
						})
					}
				},
				86351: function(m, a, e) {
					e.d(a, {
						P: function() {
							return s
						}
					});
					var n = e(73641),
						t = e(77558);

					function s() {
						if (!t.I.shutdownTimestamp) return 0;
						const i = (0, n.i)();
						return t.I.shutdownTimestamp < i ? 1 : Math.round((t.I.shutdownTimestamp - i) / 6e4)
					}
				},
				77558: function(m, a, e) {
					e.d(a, {
						I: function() {
							return n
						}
					});
					const n = {
						announcement: null,
						lastGameAnnouncement: 0,
						shutdownTimestamp: 0
					}
				},
				18887: function(m, a, e) {
					e.d(a, {
						y: function() {
							return r
						}
					});
					var n = e(84375),
						t = e(82910),
						s = e(18370),
						i = e(4454);

					function r(o) {
						(0, s.A)(i.C.waitingGame, o), (0, s.A)(i.C.requestingGame, o), (0, n.n)(t.L.arena, {
							tid: "CancelArenaGameRequest",
							id: o
						})
					}
				},
				37129: function(m, a, e) {
					e.d(a, {
						m: function() {
							return i
						}
					});
					var n = e(89033),
						t = e(50462),
						s = e(4454);

					function i(r) {
						const o = s.C.challenges.find(r);
						o && t.u.emit(n.l.CloseChallenge, {
							liveArenaChallenge: o
						}), s.C.challenges.remove(r)
					}
				},
				25689: function(m, a, e) {
					e.d(a, {
						f: function() {
							return p
						}
					});
					var n = e(31237),
						t = e(5726),
						s = e(48803),
						i = e(18370),
						r = e(18887),
						o = e(89033),
						u = e(50462),
						c = e(4454),
						l = e(96958);

					function p(h) {
						const _ = (0, s.I)(h),
							b = c.C.arenas.find(h);
						(0, t.Y)(_) && !(0, l.M)(h) && (0, n.r)(_), u.u.emit(o.l.Close, {
							liveArenaId: h,
							liveArena: b
						}), (0, r.y)(h), c.C.arenas.remove(h), c.C.currentUserStandings.remove(h), c.C.arenaGamesPages.remove(h), c.C.arenaStandingsPages.remove(h), (0, i.A)(c.C.requestingGame, h), (0, i.A)(c.C.startingSoon, h), (0, i.A)(c.C.waitingGame, h)
					}
				},
				86220: function(m, a, e) {
					e.d(a, {
						E: function() {
							return u
						}
					});
					var n = e(40381),
						t = e(43072),
						s = e(23756),
						i = e(5726),
						r = e(48803),
						o = e(4454);
					async function u(c) {
						await (0, n.Y)();
						const l = (0, r.I)(c);
						o.C.arenas.find(c) || (0, s.q)(l) || (0, i.Y)(l) || (0, t.L)(l)
					}
				},
				89033: function(m, a, e) {
					e.d(a, {
						l: function() {
							return n
						}
					});
					var n = (t => (t[t.Close = 0] = "Close", t[t.CloseChallenge = 1] = "CloseChallenge", t[t.Open = 2] = "Open", t[t.OpenChallenge = 3] = "OpenChallenge", t[t.Over = 4] = "Over", t))(n || {})
				},
				50462: function(m, a, e) {
					e.d(a, {
						u: function() {
							return t
						}
					});
					var n = e(52553);
					const t = (0, n.gd)()
				},
				86601: function(m, a, e) {
					e.d(a, {
						o: function() {
							return t
						}
					});
					var n = e(4454);

					function t(s) {
						return n.C.challenges.find(s)
					}
				},
				16806: function(m, a, e) {
					e.d(a, {
						D: function() {
							return t
						}
					});
					var n = e(4454);

					function t(s) {
						return n.C.currentUserStandings.find(s)
					}
				},
				35754: function(m, a, e) {
					e.d(a, {
						l: function() {
							return t
						}
					});
					var n = e(4454);

					function t(s) {
						return n.C.arenas.find(s)
					}
				},
				4454: function(m, a, e) {
					e.d(a, {
						C: function() {
							return E
						}
					});
					var n = e(52553),
						t = e(34506),
						s = e(68440),
						i = e(8985),
						r = e(11e3),
						o = e(78631),
						u = Object.defineProperty,
						c = (y, w, P) => w in y ? u(y, w, {
							enumerable: !0,
							configurable: !0,
							writable: !0,
							value: P
						}) : y[w] = P,
						l = (y, w, P) => (c(y, typeof w != "symbol" ? w + "" : w, P), P);
					class p extends o.Y {
						constructor() {
							super(...arguments), l(this, "models", (0, n.BL)(r.T, {
								key: "getUsername"
							}))
						}
					}
					var h = e(42131),
						_ = Object.defineProperty,
						b = (y, w, P) => w in y ? _(y, w, {
							enumerable: !0,
							configurable: !0,
							writable: !0,
							value: P
						}) : y[w] = P,
						g = (y, w, P) => (b(y, typeof w != "symbol" ? w + "" : w, P), P);
					class v extends h.C {
						constructor() {
							super(...arguments), g(this, "pages", (0, n.BL)(p, {
								key: "page"
							}))
						}
					}
					const E = {
						arenaGamesPages: (0, n.BL)(i.v, {
							key: "id"
						}),
						arenas: (0, n.BL)(t._, {
							key: "id"
						}),
						arenaStandingsPages: (0, n.BL)(v, {
							key: "id"
						}),
						challenges: (0, n.BL)(s.R, {
							key: "id"
						}),
						currentUserStandings: (0, n.BL)(r.T, {
							key: "arenaid"
						}),
						requestingGame: [],
						waitingGame: [],
						startingSoon: []
					}
				},
				9058: function(m, a, e) {
					e.d(a, {
						N: function() {
							return i
						}
					});
					var n = e(40381),
						t = e(84375),
						s = e(82910);
					async function i(r) {
						await (0, n.Y)(), (0, t.n)(s.L.game, {
							tid: "ChallengeAccept",
							id: r
						})
					}
				},
				55628: function(m, a, e) {
					e.d(a, {
						v: function() {
							return o
						}
					});
					var n = e(84375),
						t = e(82910),
						s = e(71582),
						i = e(25404),
						r = e(82619);

					function o() {
						i.M.bughousePair && ((0, n.n)(t.L.game, {
							from: (0, r.t)().getUsername(),
							tid: "BughousePairCancel",
							to: i.M.bughousePair.getUsername()
						}), i.M.bughousePair = null, i.M.pendingBughousePairUsername = null, i.M.bughousePairStatus = s.V.Idle)
					}
				},
				19097: function(m, a, e) {
					e.d(a, {
						Q: function() {
							return o
						}
					});
					var n = e(84375),
						t = e(82910),
						s = e(71582),
						i = e(25404),
						r = e(82619);

					function o(u) {
						(0, n.n)(t.L.game, {
							from: (0, r.t)().getUsername(),
							tid: "CancelBughousePairRequest",
							to: u
						}), i.M.bughousePairStatus = s.V.Idle, i.M.pendingBughousePairUsername = null
					}
				},
				52593: function(m, a, e) {
					e.d(a, {
						h: function() {
							return s
						}
					});
					var n = e(84375),
						t = e(82910);

					function s(i) {
						(0, n.n)(t.L.game, {
							tid: "ChallengeCancel",
							id: i
						})
					}
				},
				22745: function(m, a, e) {
					e.d(a, {
						m: function() {
							return O
						}
					});
					var n = e(40381),
						t = e(84375),
						s = e(82910),
						i = e(73353),
						r = e(52553),
						o = e(45463),
						u = e(17314),
						c = e(70183),
						l = e(39185),
						p = e(38988),
						h = e(25404),
						_ = e(82619),
						b = e(43667),
						g = e(61207);

					function v() {
						return (0, b.Q)((T, C) => {
							g.B.hasLoadedUserRatings && T(), g.B.hasFailedToLoadUserRatings && C(new Error("failed to load user ratings"))
						})
					}
					var E = e(6871);
					const y = (T, C) => {
						if ((0, o.kK)(T)) return null;
						let D = Number(T);
						return isNaN(D) ? null : (D >= -600 && D <= 600 && (D = C + D), D)
					};

					function w(T, C, D) {
						let L = y(T, D),
							x = y(C, D);
						if (x && L) {
							const W = x - L;
							if (W < 25) {
								const z = Math.floor((25 - W) / 2);
								L -= z, x += z, x - L === 24 && x++
							}
						}
						return {
							minrating: L,
							maxrating: x
						}
					}
					var P = e(51512);
					const k = T => {
						if (!T) return null;
						const C = new l.$;
						return C.uid = T, C
					};
					async function O(T) {
						await (0, n.Y)();
						const C = (0, _.t)(),
							{
								color: D,
								gameType: L,
								initialPosition: x,
								isRated: W,
								opponent: z,
								ratingRange: F,
								timeControl: V,
								rematchGameId: Z,
								help: A
							} = T,
							S = {
								tid: "Challenge",
								uuid: (0, u.Z)(),
								to: z ? (0, P.M)(z) : null,
								from: C.getUsername(),
								gametype: L,
								initpos: x,
								rated: W,
								minrating: null,
								maxrating: null,
								rematchgid: Z,
								color: (!W || z) && (0, o.hj)(D) ? D : void 0,
								basetime: V.baseTime * 10,
								timeinc: Number(V.timeIncrement) * 10,
								modifiers: A ? ["help"] : void 0
							};
						if (!z && !T.shareableChallenge && F) {
							await v();
							const J = (0, E.x)(V, L);
							Object.assign(S, w(F.lower, F.upper, J))
						}
						const j = new c.$;
						if ((0, r.Uc)(j, {
								...S,
								from: C,
								to: k(S.to),
								time: {
									basetime: S.basetime,
									timeinc: S.timeinc
								}
							}), !(0, i.W)()) {
							(0, p.r)(j, {
								reason: "connection"
							});
							return
						}
						typeof S.color == "string" && (S.color = void 0), (0, t.n)(s.L.game, S), h.M.challenges.add(j)
					}
				},
				27251: function(m, a, e) {
					e.d(a, {
						U: function() {
							return s
						}
					});
					var n = e(84375),
						t = e(82910);

					function s(i) {
						(0, n.n)(t.L.game, {
							tid: "ChallengeDecline",
							id: i
						})
					}
				},
				69976: function(m, a, e) {
					e.d(a, {
						p: function() {
							return u
						}
					});
					var n = e(40381),
						t = e(84375),
						s = e(82910),
						i = e(71582),
						r = e(25404),
						o = e(82619);
					async function u(c) {
						await (0, n.Y)(), (0, t.n)(s.L.game, {
							from: (0, o.t)().getUsername(),
							tid: "RequestBughousePair",
							to: c
						}), r.M.bughousePairStatus = i.V.Sent, r.M.pendingBughousePairUsername = c
					}
				},
				71582: function(m, a, e) {
					e.d(a, {
						V: function() {
							return n
						}
					});
					var n = (t => (t.Accepted = "accepted", t.Idle = "idle", t.Sent = "sent", t))(n || {})
				},
				53903: function(m, a, e) {
					e.d(a, {
						F: function() {
							return n
						}
					});
					var n = (t => (t[t.BughousePairCancelled = 0] = "BughousePairCancelled", t[t.BughousePartnerAccepted = 1] = "BughousePartnerAccepted", t[t.BughousePartnerCancelled = 2] = "BughousePartnerCancelled", t[t.BughousePartnerDeclined = 3] = "BughousePartnerDeclined", t[t.BughousePartnerRecieved = 4] = "BughousePartnerRecieved", t[t.BughousePartnerSent = 5] = "BughousePartnerSent", t[t.IncomingChallengeAccepted = 6] = "IncomingChallengeAccepted", t[t.IncomingChallengeCancelled = 7] = "IncomingChallengeCancelled", t[t.IncomingChallengeCleared = 8] = "IncomingChallengeCleared", t[t.IncomingChallengeDeclined = 9] = "IncomingChallengeDeclined", t[t.IncomingChallengeFailed = 10] = "IncomingChallengeFailed", t[t.IncomingChallengeReceived = 11] = "IncomingChallengeReceived", t[t.OutgoingChallengeAccepted = 12] = "OutgoingChallengeAccepted", t[t.OutgoingChallengeCancelled = 13] = "OutgoingChallengeCancelled", t[t.OutgoingChallengeCleared = 14] = "OutgoingChallengeCleared", t[t.OutgoingChallengeDeclined = 15] = "OutgoingChallengeDeclined", t[t.OutgoingChallengeFailed = 16] = "OutgoingChallengeFailed", t[t.OutgoingChallengeSent = 17] = "OutgoingChallengeSent", t))(n || {})
				},
				44704: function(m, a, e) {
					e.d(a, {
						z: function() {
							return t
						}
					});
					var n = e(52553);
					const t = (0, n.gd)()
				},
				17771: function(m, a, e) {
					e.d(a, {
						z: function() {
							return t
						}
					});
					var n = e(25404);

					function t() {
						return n.M.bughousePairStatus
					}
				},
				38988: function(m, a, e) {
					e.d(a, {
						r: function() {
							return c
						}
					});
					var n = e(82704),
						t = e(808),
						s = e(99260),
						i = e(15875),
						r = e(52117);
					const o = l => `challenge-fail-${l.id||l.uuid}`;

					function u(l) {
						toaster.remove(o(l))
					}

					function c(l, {
						reason: p
					}) {
						let h, _ = s.k.Toaster;
						const b = l.getTo();
						switch (p) {
							case "user.guest_permission_denied_create_challenge":
								h = (0, i.dW)("You are unable to challenge Titled players.");
								break;
							case "user.titled_permission_denied_create_challenge":
								h = (0, i.dW)("You are unable to challenge Guest players.");
								break;
							case "connection":
								h = (0, i.dW)("Your challenge cannot be created because of your internet connection. Please reconnect and try again.");
								break;
							case "user.playing_game":
								b ? h = (0, i.dW)("Can't create a challenge because either you or %1$s% is currently playing.", {
									"%1$s%": b.getUsername()
								}) : h = (0, i.dW)("Can't create a challenge because you are currently playing.");
								break;
							case "user.playing_competition":
								b ? h = (0, i.dW)("Can't create a challenge because either you or %1$s% is currently playing in a competition.", {
									"%1$s%": b.getUsername()
								}) : h = (0, i.dW)("Can't create a challenge because you are currently playing in a competition.");
								break;
							case "user.player_protection_operative":
								b && (h = (0, i.dW)('You are not able to challenge %toUser%. <a href="https://support.chess.com/article/670-why-cant-i-challenge-certain-players" target="_blank">Find out more</a>.', {
									"%toUser%": b.getUsername()
								}));
								break;
							case "game.dw_restriction":
								h = (0, i.dW)('Your account is restricted for violations of our <a href="https://www.chess.com/community" target="_blank">Sportsmanship Policy</a>. You may directly challenge Friends, or create rated, open challenges using standard time-controls. This restriction will be removed automatically as you play more games with good sportsmanship.'), _ = s.k.Alert;
								break;
							case "game.min_rating_bound_restriction":
							case "game.max_rating_bound_restriction":
								h = (0, i.dW)("Your challenge does not match the member's current match settings.");
								break;
							case "game.not_accepting_challenges":
								b && (h = (0, i.dW)("%1$s% is not accepting challenges.", {
									"%1$s%": b.getUsername()
								}));
								break;
							case "challenge.duplicated":
								h = (0, i.dW)("You cannot create another challenge with same parameters.");
								break;
							case "challenge.too_many_challenges_to_user":
								b && (h = (0, i.dW)("You've sent too many challenges to %user%", {
									"%user%": b.getUsername()
								}));
								break;
							case "game.user_offline":
								b && (h = (0, i.dW)("Not possible to challenge %user%, because they are offline.", {
									"%user%": b.getUsername()
								}));
								break;
							case "user.is_blocked":
								b && (h = (0, i.dW)("Not possible to challenge %user%, because they are blocked.", {
									"%user%": b.getUsername()
								}));
								break;
							case "challenge.unsupported_game_type":
								b && (h = (0, i.dW)("%user% is unable to play %variant% from the Mobile App", {
									"%user%": b.getUsername(),
									"%variant%": (0, r.T)(l.getGameType())
								}));
								break;
							default:
								p ? h = `<span title="${p}">${(0,i.dW)("Challenge failed. Please wait a few seconds and try again.")}</span>` : h = (0, i.dW)("Failed to create challenge with given parameters.");
								break
						}!h || (_ === s.k.Toaster ? n.Z.add({
							id: o(l),
							icon: "circle-x",
							duration: 12e3,
							content: h
						}) : (0, t.c)({
							icon: "circle-x",
							content: h,
							type: _,
							theme: "error"
						}))
					}
				},
				25404: function(m, a, e) {
					e.d(a, {
						M: function() {
							return i
						}
					});
					var n = e(52553),
						t = e(70183),
						s = e(71582);
					const i = {
						bughousePair: null,
						pendingBughousePairUsername: null,
						bughousePairStatus: s.V.Idle,
						challenges: (0, n.BL)(t.$, {
							key: "id"
						}),
						openChallenges: (0, n.BL)(t.$, {
							key: "id"
						})
					}
				},
				85335: function(m, a, e) {
					e.d(a, {
						u: function() {
							return s
						}
					});
					var n = e(82619),
						t = e(40962);

					function s(i) {
						return !i.isPlaying((0, n.t)()) || i.isBughouse() ? !0 : (0, t.D)(i.getWhitePlayer().hasFriendRelation() || i.getBlackPlayer().hasFriendRelation())
					}
				},
				35916: function(m, a, e) {
					e.d(a, {
						W: function() {
							return b
						}
					});
					var n = e(52553),
						t = e(39185),
						s = Object.defineProperty,
						i = (g, v, E) => v in g ? s(g, v, {
							enumerable: !0,
							configurable: !0,
							writable: !0,
							value: E
						}) : g[v] = E,
						r = (g, v, E) => (i(g, typeof v != "symbol" ? v + "" : v, E), E);
					class o extends n.Hn {
						constructor() {
							super(...arguments), r(this, "id", ""), r(this, "user", new t.$), r(this, "approved", !1)
						}
					}
					var u = e(72012),
						c = e(79858),
						l = Object.defineProperty,
						p = (g, v, E) => v in g ? l(g, v, {
							enumerable: !0,
							configurable: !0,
							writable: !0,
							value: E
						}) : g[v] = E,
						h = (g, v, E) => (p(g, typeof v != "symbol" ? v + "" : v, E), E);
					class _ extends c.h {
						constructor() {
							super(...arguments), h(this, "chessgroupadmin", !1), h(this, "disabled", !1), h(this, "id", ""), h(this, "messages", (0, n.BL)(u._, {
								key: "id",
								max: 250
							}))
						}
						isDisabled() {
							return Boolean(this.disabled)
						}
						isGameRoom() {
							return this.id[0] === "G"
						}
					}
					const b = {
						rooms: (0, n.BL)(_, {
							key: "id"
						}),
						requests: (0, n.BL)(o, {
							key: "id"
						})
					}
				},
				12474: function(m, a, e) {
					e.d(a, {
						d: function() {
							return g
						}
					});
					var n = e(40381),
						t = e(31057),
						s = e(29037),
						i = e(84375),
						r = e(82910);

					function o() {
						(0, i.n)(r.L.arena, {
							tid: "QueryUserArenaList"
						})
					}

					function u() {
						(0, i.n)(r.L.teamMatch, {
							tid: "QueryUserTeamMatchList"
						})
					}

					function c() {
						(0, i.n)(r.L.tournament, {
							tid: "QueryUserTournamentList"
						})
					}
					var l = e(43072);

					function p() {
						(0, l.L)(r.L.arenaEvents)
					}

					function h() {
						(0, l.L)(r.L.tournamentEvents)
					}
					var _ = e(53197),
						b = e(94070);
					async function g() {
						await (0, n.Y)(), (0, t.N)() && await (0, _.F)(), b.p.isSubscribedCompetitionEvents = !0, (0, s.s)(), p(), h(), o(), u(), c()
					}
				},
				53197: function(m, a, e) {
					e.d(a, {
						F: function() {
							return o
						}
					});
					var n = e(82910),
						t = e(73147);
					async function s() {
						await (0, t.a)(n.L.arenaEvents)
					}
					async function i() {
						await (0, t.a)(n.L.tournamentEvents)
					}
					var r = e(94070);
					async function o() {
						r.p.userArenas.reset(), r.p.userTournaments.reset(), r.p.userTeamMatches.reset(), r.p.hasLoadedUserArenas = !1, r.p.hasLoadedUserTournaments = !1, r.p.hasLoadedUserTeamMatches = !1, r.p.isSubscribedCompetitionEvents = !1, await Promise.all([s(), i()])
					}
				},
				73147: function(m, a, e) {
					e.d(a, {
						a: function() {
							return i
						}
					});
					var n = e(31237),
						t = e(20414),
						s = e(92450);

					function i(r) {
						return new Promise(o => {
							const u = c => {
								c.channel === r && (o(), s.c.off({
									type: t.F.Unsubscribe,
									handler: u
								}))
							};
							s.c.on(t.F.Unsubscribe, u), (0, n.r)(r)
						})
					}
				},
				59386: function(m, a, e) {
					e.d(a, {
						o: function() {
							return n
						}
					});
					var n = (t => (t.TeamMatch = "teamMatch", t.Tournament = "tournament", t.Arena = "arena", t))(n || {})
				},
				13753: function(m, a, e) {
					e.d(a, {
						m: function() {
							return n
						}
					});
					const n = "liveGameEventType"
				},
				21980: function(m, a, e) {
					e.d(a, {
						b: function() {
							return t
						}
					});
					var n = e(94070);

					function t() {
						return n.p.isSubscribedCompetitionEvents
					}
				},
				94070: function(m, a, e) {
					e.d(a, {
						p: function() {
							return A
						}
					});
					var n = e(9176),
						t = e(52553),
						s = e(34506),
						i = e(54693),
						r = e(15413),
						o = e(39185),
						u = Object.defineProperty,
						c = (S, j, J) => j in S ? u(S, j, {
							enumerable: !0,
							configurable: !0,
							writable: !0,
							value: J
						}) : S[j] = J,
						l = (S, j, J) => (c(S, typeof j != "symbol" ? j + "" : j, J), J);
					class p extends t.Hn {
						constructor() {
							super(...arguments), l(this, "avgrating", 0), l(this, "basetime", 600), l(this, "featured", !1), l(this, "gametype", "chess"), l(this, "id", ""), l(this, "liveshow", !1), l(this, "pcl", !1), l(this, "relayid", 0), l(this, "timeinc", 0), l(this, "title", ""), l(this, "type", "game"), l(this, "users", (0, t.BL)(o.$, {
								key: "uid",
								max: 2,
								create: 2
							}))
						}
						getRatingType() {
							return (0, r.G)(this.getTimeControl(), this.gametype)
						}
						getTimeControl() {
							return {
								timeType: "live",
								baseTime: this.basetime / 10,
								timeIncrement: this.timeinc / 10
							}
						}
						getGameType() {
							return this.gametype || "chess"
						}
						getSearchString() {
							return this.isGame() ? `${this.users[0].getUsername()} ${this.users[1].getUsername()}`.toLowerCase() : this.title.toLowerCase()
						}
						getSortOrder() {
							const J = 5e3 - this.avgrating;
							return this.pcl ? 1e4 + J : this.featured ? 3e4 + J : 4e4 + J
						}
						isGame() {
							return this.type === "game" || this.type === "variant_game"
						}
						getGameId() {
							return this.isGame() ? Number(this.id.substr(1)) : 0
						}
					}
					var h = Object.defineProperty,
						_ = (S, j, J) => j in S ? h(S, j, {
							enumerable: !0,
							configurable: !0,
							writable: !0,
							value: J
						}) : S[j] = J,
						b = (S, j, J) => (_(S, typeof j != "symbol" ? j + "" : j, J), J);
					class g extends t.Hn {
						constructor() {
							super(...arguments), b(this, "channel", ""), b(this, "events", (0, t.BL)(p, {
								key: "id"
							})), b(this, "loading", !1), b(this, "page", 0)
						}
						hasEvents(j) {
							if (!j) return Boolean(this.events.length);
							const J = new RegExp(j, "i");
							return Boolean(this.events.find(_e => J.test(_e.getSearchString())))
						}
						getEvents(j, J) {
							let _e;
							if (j) {
								const we = new RegExp(j, "i");
								_e = this.events.filter(G => we.test(G.getSearchString()))
							} else _e = this.events;
							if (J) {
								const we = G => !J.includes(G.getGameId());
								_e = _e.filter(we)
							}
							return (0, i.q)(_e, we => we.getSortOrder())
						}
					}
					var v = e(26141),
						E = e(5905),
						y = e(31619),
						w = e(5148),
						P = e(3832),
						k = e(99670),
						O = e(69920),
						T = e(59386),
						C = e(82107),
						D = e(91094),
						L = e(71203),
						x = e(87661),
						W = Object.defineProperty,
						z = (S, j, J) => j in S ? W(S, j, {
							enumerable: !0,
							configurable: !0,
							writable: !0,
							value: J
						}) : S[j] = J,
						F = (S, j, J) => (z(S, typeof j != "symbol" ? j + "" : j, J), J);
					class V extends t.Hn {
						constructor() {
							super(...arguments), F(this, "basetime", 600), F(this, "clubevent", !1), F(this, "currentround", 0), F(this, "date", ""), F(this, "finishtime", ""), F(this, "gametype", "chess"), F(this, "id", ""), F(this, "imageurl", ""), F(this, "localtime", Date.now()), F(this, "maxrating", null), F(this, "minml", null), F(this, "minrating", null), F(this, "playerscount", 0), F(this, "rated", !0), F(this, "rounds", 0), F(this, "servertime", ""), F(this, "status", "scheduled"), F(this, "timeinc", 0), F(this, "title", ""), F(this, "titled", !1), F(this, "type", T.o.Tournament), F(this, "verified", !1)
						}
						getStartTime() {
							return (0, C.Z)(this.localtime, this.date, this.servertime)
						}
						getEndTime() {
							return this.finishtime ? (0, C.Z)(this.localtime, this.finishtime, this.servertime) : this.getEstimatedEndTime()
						}
						isUpcoming(j) {
							if (this.isRegistration()) return !0;
							if (this.isArena() && this.isInProgress()) {
								const J = this.getStartTime().getTime(),
									we = (this.getEndTime().getTime() - J) / 2;
								return j < J + we
							}
							return !!(this.isTournament() && this.isInProgress() && this.getCurrentRound() <= 1)
						}
						isInProgress() {
							return this.status === "in_progress"
						}
						isRegistration() {
							return this.status === "registration"
						}
						isArena() {
							return this.type === "arena"
						}
						isTournament() {
							return this.type === "tournament"
						}
						getCurrentRound() {
							return Number(this.currentround)
						}
						getRoundsCount() {
							return Number(this.rounds || 5)
						}
						getEventInfo() {
							return new O.H({
								endTime: this.getEndTime(),
								icon: this.getIcon(),
								id: this.id,
								imageUrl: this.imageurl,
								isClubEvent: this.clubevent,
								isInProgress: this.isInProgress(),
								label: this.getLabel(),
								order: this.getOrder(),
								playerCount: this.playerscount,
								startTime: this.getStartTime(),
								timeLabel: (0, w.X)(this.getTimeControl()),
								type: this.type,
								gameType: this.gametype,
								timeClass: (0, P.L)(this.getTimeControl())
							})
						}
						getOrder() {
							return this.titled ? 1 : this.minml && this.minml >= k.p0.silver ? 2 : 3
						}
						getTimeControl() {
							return {
								timeType: "live",
								baseTime: this.basetime / 10,
								timeIncrement: this.timeinc / 10
							}
						}
						getLabel() {
							return `${(0,x.B)(this.title)} ${(0,D.e)(this.minrating,this.maxrating)}`
						}
						getIcon() {
							return this.minml && this.minml >= k.p0.silver ? "membership-diamond" : (0, y.N)(this.getTimeControl(), this.gametype)
						}
						getEstimatedEndTime() {
							return (0, L.L)({
								rounds: this.getRoundsCount(),
								startTime: this.getStartTime(),
								timeControl: this.getTimeControl()
							})
						}
						getRatingType() {
							return (0, r.G)(this.getTimeControl(), this.gametype)
						}
						getMaxRating() {
							return this.maxrating
						}
						getMinRating() {
							return this.minrating
						}
						isVerified() {
							return this.verified
						}
						getAvatar() {
							return this.imageurl
						}
					}
					var Z = e(13753);
					const A = {
						arenas: (0, t.BL)(V, {
							key: "id"
						}),
						gameEventType: window.localStorage.getItem(Z.m) || n.G.All,
						hasLoadedArenas: !1,
						hasLoadedTournaments: !1,
						hasLoadedUserArenas: !1,
						hasLoadedUserTeamMatches: !1,
						hasLoadedUserTournaments: !1,
						isSubscribedCompetitionEvents: !1,
						pages: (0, t.BL)(g, {
							key: "channel"
						}),
						tournaments: (0, t.BL)(V, {
							key: "id"
						}),
						userArenas: (0, t.BL)(s._, {
							key: "id"
						}),
						userTeamMatches: (0, t.BL)(v.F, {
							key: "id"
						}),
						userTournaments: (0, t.BL)(E.f, {
							key: "id"
						})
					}
				},
				61317: function(m, a, e) {
					e.d(a, {
						$: function() {
							return o
						}
					});
					var n = e(84375),
						t = e(82910),
						s = e(95735),
						i = e(26867),
						r = e(82619);

					function o(u) {
						s._.isObservingTopGame = !0, u && Object.values(i.K).includes(u) && (s._.topGameType = u), (0, n.n)(t.L.user, {
							tid: "Top",
							from: (0, r.t)().getUsername(),
							type: s._.topGameType
						})
					}
				},
				63114: function(m, a, e) {
					e.d(a, {
						y: function() {
							return v
						}
					});
					var n = e(40381),
						t = e(43072),
						s = e(23756),
						i = e(5726),
						r = e(30638),
						o = e(46238),
						u = e(84375),
						c = e(82910),
						l = e(95735);

					function p(E) {
						(0, u.n)(c.L.game, {
							tid: "QueryGameState",
							gid: E,
							fullgame: !0,
							gamestate: !1
						}), l._.pendingQueryGameState.includes(E) && l._.pendingQueryGameState.push(E)
					}
					var h = e(69091),
						_ = e(87671),
						b = e(61023),
						g = e(74508);
					async function v(E) {
						if (!E) return;
						if (window.chesscom.features.includes("observe_live_game_in_rcn")) {
							let P;
							try {
								P = await (0, h.R)(String(E))
							} catch {}
							if (P) {
								const k = (0, g.S)().uuid;
								if (!P.players.includes(k)) {
									b.p.emit(_.h.Match, {
										rcnGameRef: P
									});
									return
								}
							}
						}
						await (0, n.Y)();
						const y = (0, r.i)(E);
						if (!(l._.games.find(E) || (0, s.q)(y))) {
							if ((0, i.Y)(y)) {
								setTimeout(() => {
									!l._.games.find(E) && (0, i.Y)(y) && ((0, o.T)(`query game when opening after 1s (${E})`), p(E))
								}, 1e3);
								return
							}(0, t.L)(y)
						}
					}
				},
				16400: function(m, a, e) {
					e.d(a, {
						U: function() {
							return n
						}
					});
					var n = (t => (t[t.Close = 0] = "Close", t[t.End = 1] = "End", t[t.Expired = 2] = "Expired", t[t.Move = 3] = "Move", t[t.Open = 4] = "Open", t[t.Start = 5] = "Start", t[t.Takeback = 6] = "Takeback", t[t.Update = 7] = "Update", t[t.Recover = 8] = "Recover", t[t.ConfirmMove = 9] = "ConfirmMove", t[t.PublishMove = 10] = "PublishMove", t[t.OpponentConnectionStatus = 11] = "OpponentConnectionStatus", t[t.ThinkTimeout = 12] = "ThinkTimeout", t[t.StallTimeout = 13] = "StallTimeout", t))(n || {})
				},
				81654: function(m, a, e) {
					e.d(a, {
						x: function() {
							return t
						}
					});
					var n = e(52553);
					const t = (0, n.gd)()
				},
				62493: function(m, a, e) {
					e.d(a, {
						s: function() {
							return s
						}
					});
					var n = e(77723),
						t = e(82619);

					function s() {
						return (0, n.Y)().filter(i => !i.isOver() && i.isPlaying((0, t.t)()))
					}
				},
				65077: function(m, a, e) {
					e.d(a, {
						S: function() {
							return t
						}
					});
					var n = e(95735);

					function t(s) {
						return s ? n._.games.find(s) : null
					}
				},
				77723: function(m, a, e) {
					e.d(a, {
						Y: function() {
							return t
						}
					});
					var n = e(95735);

					function t() {
						return n._.games
					}
				},
				81986: function(m, a, e) {
					e.d(a, {
						w: function() {
							return t
						}
					});
					var n = e(95735);

					function t(s) {
						const {
							games: i
						} = n._, r = i.findIndex(u => u.getLinkedGameId() === s);
						return r === -1 ? !1 : i.findIndex(u => u.getLinkedGameId() === i[r].id) > r
					}
				},
				96958: function(m, a, e) {
					e.d(a, {
						M: function() {
							return s
						}
					});
					var n = e(95735),
						t = e(82619);

					function s(i) {
						const r = (0, t.t)();
						return n._.games.includes(o => o.isArenaGame() && o.isPlaying(r) && !o.isOver() && o.arenaid === i)
					}
				},
				89220: function(m, a, e) {
					e.d(a, {
						w: function() {
							return t
						}
					});
					var n = e(62493);

					function t() {
						return (0, n.s)().length > 0
					}
				},
				95735: function(m, a, e) {
					e.d(a, {
						_: function() {
							return O
						}
					});
					var n = e(52553),
						t = Object.defineProperty,
						s = (T, C, D) => C in T ? t(T, C, {
							enumerable: !0,
							configurable: !0,
							writable: !0,
							value: D
						}) : T[C] = D,
						i = (T, C, D) => (s(T, typeof C != "symbol" ? C + "" : C, D), D);
					class r extends n.Hn {
						constructor() {
							super(...arguments), i(this, "gid", 0), i(this, "countIncomingOffers", 0), i(this, "lastOutgoingOffer", 0), i(this, "isActive", !1), i(this, "ignoreDrawOffers", !1)
						}
					}
					var o = e(86613),
						u = Object.defineProperty,
						c = (T, C, D) => C in T ? u(T, C, {
							enumerable: !0,
							configurable: !0,
							writable: !0,
							value: D
						}) : T[C] = D,
						l = (T, C, D) => (c(T, typeof C != "symbol" ? C + "" : C, D), D);
					class p extends n.Hn {
						constructor() {
							super(...arguments), l(this, "gid", 0), l(this, "clock", 0), l(this, "lastmovemessagesent", !1), l(this, "coh", !1), l(this, "mht", 0), l(this, "move", ""), l(this, "seq", 0), l(this, "squared", !1), l(this, "uid", ""), l(this, "fm1"), l(this, "fm2"), l(this, "bm1"), l(this, "bm2")
						}
					}
					var h = Object.defineProperty,
						_ = (T, C, D) => C in T ? h(T, C, {
							enumerable: !0,
							configurable: !0,
							writable: !0,
							value: D
						}) : T[C] = D,
						b = (T, C, D) => (_(T, typeof C != "symbol" ? C + "" : C, D), D);
					class g extends n.Hn {
						constructor() {
							super(...arguments), b(this, "gid", 0), b(this, "move", ""), b(this, "seq", 0), b(this, "codemessage", null)
						}
					}
					var v = e(54897),
						E = Object.defineProperty,
						y = (T, C, D) => C in T ? E(T, C, {
							enumerable: !0,
							configurable: !0,
							writable: !0,
							value: D
						}) : T[C] = D,
						w = (T, C, D) => (y(T, typeof C != "symbol" ? C + "" : C, D), D);
					class P extends v.f {
						constructor() {
							super(...arguments), w(this, "id", 0)
						}
					}
					var k = e(26867);
					const O = {
						drawOffers: (0, n.BL)(r, {
							key: "gid"
						}),
						failedMoves: (0, n.BL)(g, {
							key: "gid"
						}),
						gameOver: (0, n.BL)(P, {
							key: "id"
						}),
						games: (0, n.BL)(o.k, {
							key: "id"
						}),
						isObservingTopGame: !1,
						pendingMoves: (0, n.BL)(p, {
							key: "gid"
						}),
						pendingQueryGameState: [],
						stillThereWarning: [],
						toggledGames: [],
						topGameId: null,
						topGameType: k.K.Blitz
					}
				},
				26867: function(m, a, e) {
					e.d(a, {
						K: function() {
							return n
						}
					});
					var n = (t => (t.Friend = "friend", t.Blitz = "blitz", t.Bullet = "lightning", t.Rapid = "standard", t))(n || {})
				},
				15869: function(m, a, e) {
					e.d(a, {
						g: function() {
							return i
						}
					});
					var n = e(7042),
						t = e(20208),
						s = e(80425);

					function i(r) {
						const o = s.K.challenges.find(r);
						o && t.r.emit(n._.CloseChallenge, {
							liveTeamMatchChallenge: o
						}), s.K.challenges.remove(r)
					}
				},
				93654: function(m, a, e) {
					e.d(a, {
						e: function() {
							return l
						}
					});
					var n = e(31237),
						t = e(5726),
						s = e(95226),
						i = e(59225),
						r = e(80425);

					function o(p) {
						const h = r.K.teamMatches.find(p);
						if (!h || h.isCancelled() || h.isFinished()) return;
						const _ = r.K.currentUserStandings.find(p);
						_ && _.hasPlayedAllGames() || (0, i.W)(p)
					}
					var u = e(7042),
						c = e(20208);

					function l(p) {
						const h = (0, s.z)(p),
							_ = r.K.teamMatches.find(p);
						r.K.currentUserStandings.includes(p) && o(p), (0, t.Y)(h) && (0, n.r)(h), c.r.emit(u._.Close, {
							liveTeamMatchId: p,
							liveTeamMatch: _
						}), r.K.teamMatches.remove(p), r.K.currentUserStandings.remove(p), r.K.teamMatchStandingsPairPages.remove(p)
					}
				},
				59225: function(m, a, e) {
					e.d(a, {
						W: function() {
							return i
						}
					});
					var n = e(84375),
						t = e(82910),
						s = e(82619);

					function i(r) {
						(0, n.n)(t.L.teamMatch, {
							tid: "WithdrawFromTeamMatch",
							id: r,
							uid: (0, s.t)().getUsername()
						})
					}
				},
				7042: function(m, a, e) {
					e.d(a, {
						_: function() {
							return n
						}
					});
					var n = (t => (t[t.Open = 0] = "Open", t[t.Close = 1] = "Close", t[t.OpenChallenge = 2] = "OpenChallenge", t[t.CloseChallenge = 3] = "CloseChallenge", t))(n || {})
				},
				20208: function(m, a, e) {
					e.d(a, {
						r: function() {
							return t
						}
					});
					var n = e(52553);
					const t = (0, n.gd)()
				},
				20685: function(m, a, e) {
					e.d(a, {
						Q: function() {
							return t
						}
					});
					var n = e(80425);

					function t(s) {
						return n.K.challenges.find(s)
					}
				},
				98627: function(m, a, e) {
					e.d(a, {
						e: function() {
							return t
						}
					});
					var n = e(80425);

					function t(s) {
						return n.K.teamMatches.find(s)
					}
				},
				80425: function(m, a, e) {
					e.d(a, {
						K: function() {
							return Z
						}
					});
					var n = e(52553),
						t = e(26141),
						s = e(15413),
						i = e(5148),
						r = e(39185),
						o = e(82107),
						u = e(91094),
						c = e(52117),
						l = Object.defineProperty,
						p = (A, S, j) => S in A ? l(A, S, {
							enumerable: !0,
							configurable: !0,
							writable: !0,
							value: j
						}) : A[S] = j,
						h = (A, S, j) => (p(A, typeof S != "symbol" ? S + "" : S, j), j);
					class _ extends n.Hn {
						constructor() {
							super(...arguments), h(this, "basetime", 600), h(this, "challengedgroupavatar", null), h(this, "challengedgroupid", 0), h(this, "challengedgroupname", ""), h(this, "challengedgroupurl", ""), h(this, "chessgroupavatar", null), h(this, "chessgroupid", 0), h(this, "chessgroupname", ""), h(this, "chessgroupurl", ""), h(this, "currentround", 0), h(this, "gametype", "chess"), h(this, "id", 0), h(this, "localtime", Date.now()), h(this, "maxplayers", null), h(this, "maxrating", null), h(this, "minplayers", null), h(this, "minrating", null), h(this, "name", ""), h(this, "owner", new r.$), h(this, "servertime", ""), h(this, "starttime", ""), h(this, "timeinc", 0)
						}
						getLabel() {
							return this.name
						}
						getChallengedClubId() {
							return this.challengedgroupid
						}
						getChallengedClubName() {
							return this.challengedgroupname
						}
						getChallengedClubUrl() {
							return this.challengedgroupurl
						}
						getChallengedClubAvatar() {
							return this.challengedgroupavatar
						}
						getChallengingClubId() {
							return this.chessgroupid
						}
						getChallengingClubName() {
							return this.chessgroupname
						}
						getChallengingClubUrl() {
							return this.chessgroupurl
						}
						getChallengingClubAvatar() {
							return this.chessgroupavatar
						}
						getRatingLabel() {
							return (0, u.e)(this.minrating, this.maxrating)
						}
						getTimeControl() {
							return {
								timeType: "live",
								baseTime: this.basetime / 10,
								timeIncrement: this.timeinc / 10
							}
						}
						getTimeLabel() {
							return (0, i.X)(this.getTimeControl())
						}
						getRatingType() {
							return (0, s.G)(this.getTimeControl(), this.gametype)
						}
						getPlayersLabel() {
							return (0, u.e)(this.minplayers, this.maxplayers)
						}
						isOwner(S) {
							return Boolean(this.owner && this.owner.isSameUser(S))
						}
						getVariantLabel() {
							return (0, c.T)(this.gametype)
						}
						getStartTime() {
							return (0, o.Z)(this.localtime, this.starttime, this.servertime)
						}
					}
					var b = Object.defineProperty,
						g = (A, S, j) => S in A ? b(A, S, {
							enumerable: !0,
							configurable: !0,
							writable: !0,
							value: j
						}) : A[S] = j,
						v = (A, S, j) => (g(A, typeof S != "symbol" ? S + "" : S, j), j);
					class E extends n.Hn {
						constructor() {
							super(...arguments), v(this, "allgamesplayed", !1), v(this, "games", 0), v(this, "teammatchid", 0), v(this, "user", new r.$)
						}
						getUser() {
							return this.user
						}
						hasPlayedAllGames() {
							return Boolean(this.allgamesplayed)
						}
					}
					var y = Object.defineProperty,
						w = (A, S, j) => S in A ? y(A, S, {
							enumerable: !0,
							configurable: !0,
							writable: !0,
							value: j
						}) : A[S] = j,
						P = (A, S, j) => (w(A, typeof S != "symbol" ? S + "" : S, j), j);
					class k extends n.Hn {
						constructor() {
							super(...arguments), P(this, "games", []), P(this, "chessgroupstanding", new E), P(this, "challengedgroupstanding", new E)
						}
						getKey() {
							let S = "";
							return this.chessgroupstanding && (S += this.chessgroupstanding.user.uid), S += "+", this.challengedgroupstanding && (S += this.challengedgroupstanding.user.uid), S
						}
						getChallengingClubStanding() {
							return this.chessgroupstanding
						}
						getChallengedClubStanding() {
							return this.challengedgroupstanding
						}
						getGames() {
							return this.games
						}
					}
					var O = e(78631),
						T = Object.defineProperty,
						C = (A, S, j) => S in A ? T(A, S, {
							enumerable: !0,
							configurable: !0,
							writable: !0,
							value: j
						}) : A[S] = j,
						D = (A, S, j) => (C(A, typeof S != "symbol" ? S + "" : S, j), j);
					class L extends O.Y {
						constructor() {
							super(...arguments), D(this, "models", (0, n.BL)(k, {
								key: "getKey"
							}))
						}
					}
					var x = e(42131),
						W = Object.defineProperty,
						z = (A, S, j) => S in A ? W(A, S, {
							enumerable: !0,
							configurable: !0,
							writable: !0,
							value: j
						}) : A[S] = j,
						F = (A, S, j) => (z(A, typeof S != "symbol" ? S + "" : S, j), j);
					class V extends x.C {
						constructor() {
							super(...arguments), F(this, "pages", (0, n.BL)(L, {
								key: "page"
							}))
						}
					}
					const Z = {
						teamMatches: (0, n.BL)(t.F, {
							key: "id"
						}),
						challenges: (0, n.BL)(_, {
							key: "id"
						}),
						currentUserStandings: (0, n.BL)(E, {
							key: "teammatchid"
						}),
						teamMatchStandingsPairPages: (0, n.BL)(V, {
							key: "id"
						}),
						hasAcceptedChallengeExplicitly: !1
					}
				},
				15706: function(m, a, e) {
					e.d(a, {
						p: function() {
							return h
						}
					});
					var n = e(31237),
						t = e(5726),
						s = e(8991),
						i = e(18370),
						r = e(95735),
						o = e(82619);

					function u(_) {
						const b = (0, o.t)();
						return r._.games.includes(g => g.isTournamentGame() && g.isPlaying(b) && !g.isOver() && g.tournamentid === _)
					}
					var c = e(67377),
						l = e(84826),
						p = e(79116);

					function h(_) {
						const b = (0, s.B)(_),
							g = p.B.tournaments.find(_);
						(0, t.Y)(b) && !u(_) && (0, n.r)(b), l.R.emit(c.h.Close, {
							liveTournamentId: _,
							liveTournament: g
						}), (0, i.A)(p.B.joined, _), (0, i.A)(p.B.joinedManually, _), (0, i.A)(p.B.withdrawn, _), (0, i.A)(p.B.withdrawnManually, _), (0, i.A)(p.B.startingSoon, _), p.B.tournaments.remove(_), p.B.currentUserStandings.remove(_), p.B.tournamentGamesPages.remove(_), p.B.tournamentStandingsPages.remove(_), p.B.tournamentByes.remove(_)
					}
				},
				58438: function(m, a, e) {
					e.d(a, {
						w: function() {
							return u
						}
					});
					var n = e(40381),
						t = e(43072),
						s = e(23756),
						i = e(5726),
						r = e(8991),
						o = e(79116);
					async function u(c) {
						await (0, n.Y)();
						const l = (0, r.B)(c);
						o.B.tournaments.find(c) || (0, s.q)(l) || (0, i.Y)(l) || (0, t.L)(l)
					}
				},
				76772: function(m, a, e) {
					e.d(a, {
						G: function() {
							return i
						}
					});
					var n = e(84375),
						t = e(82910),
						s = e(82619);

					function i(r) {
						(0, n.n)(t.L.tournament, {
							tid: "WithdrawFromTournament",
							id: r,
							uid: (0, s.t)().getUsername()
						})
					}
				},
				64075: function(m, a, e) {
					e.d(a, {
						f: function() {
							return i
						}
					});
					var n = e(15706),
						t = e(76772),
						s = e(79116);

					function i(r) {
						const o = s.B.tournaments.find(r);
						if (!o || o.isFinished() || o.isCancelled()) return;
						const u = s.B.currentUserStandings.find(r);
						u && u.hasPlayedAllGames() || (s.B.withdrawnManually.includes(r) || s.B.withdrawnManually.push(r), (0, t.G)(r), (0, n.p)(r))
					}
				},
				67377: function(m, a, e) {
					e.d(a, {
						h: function() {
							return n
						}
					});
					var n = (t => (t[t.Bye = 0] = "Bye", t[t.Close = 1] = "Close", t[t.Open = 2] = "Open", t[t.Over = 3] = "Over", t[t.Joined = 4] = "Joined", t[t.Starting = 5] = "Starting", t))(n || {})
				},
				84826: function(m, a, e) {
					e.d(a, {
						R: function() {
							return t
						}
					});
					var n = e(52553);
					const t = (0, n.gd)()
				},
				95334: function(m, a, e) {
					e.d(a, {
						x: function() {
							return t
						}
					});
					var n = e(79116);

					function t(s) {
						return n.B.tournaments.find(s)
					}
				},
				82798: function(m, a, e) {
					e.d(a, {
						_: function() {
							return t
						}
					});
					var n = e(79116);

					function t(s) {
						const i = n.B.currentUserStandings.find(s);
						return Boolean((i || n.B.joined.includes(s)) && !n.B.withdrawn.includes(s))
					}
				},
				5479: function(m, a, e) {
					e.d(a, {
						q: function() {
							return t
						}
					});
					var n = e(79116);

					function t(s) {
						const i = n.B.currentUserStandings.find(s),
							r = n.B.tournaments.find(s);
						return Boolean(r && r.isActive() && !n.B.withdrawn.includes(s) && i && !i.hasPlayedAllGames())
					}
				},
				79116: function(m, a, e) {
					e.d(a, {
						B: function() {
							return p
						}
					});
					var n = e(52553),
						t = e(5905),
						s = Object.defineProperty,
						i = (h, _, b) => _ in h ? s(h, _, {
							enumerable: !0,
							configurable: !0,
							writable: !0,
							value: b
						}) : h[_] = b,
						r = (h, _, b) => (i(h, typeof _ != "symbol" ? _ + "" : _, b), b);
					class o extends n.Hn {
						constructor() {
							super(...arguments), r(this, "id", 0), r(this, "points", 0), r(this, "currentround", 0), r(this, "codemessage", "")
						}
					}
					var u = e(57586),
						c = e(9705),
						l = e(45960);
					const p = {
						withdrawn: [],
						withdrawnManually: [],
						joined: [],
						joinedManually: [],
						startingSoon: [],
						tournaments: (0, n.BL)(t.f, {
							key: "id"
						}),
						currentUserStandings: (0, n.BL)(c.N, {
							key: "tournamentid"
						}),
						tournamentByes: (0, n.BL)(o, {
							key: "id"
						}),
						tournamentGamesPages: (0, n.BL)(u.K, {
							key: "id"
						}),
						tournamentStandingsPages: (0, n.BL)(l.H, {
							key: "id"
						}),
						autoWithdrawnWarningTimeout: null
					}
				},
				41553: function(m, a, e) {
					e.d(a, {
						P: function() {
							return o
						}
					});
					var n = e(40381),
						t = e(84375),
						s = e(82910),
						i = e(97519),
						r = e(14072);
					async function o(u) {
						!(0, r.r)(u) || (await (0, n.Y)(), (0, t.n)(s.L.user, {
							tid: "Follow",
							to: u,
							from: i.Z.currentUser.getUsername()
						}))
					}
				},
				85090: function(m, a, e) {
					e.d(a, {
						J: function() {
							return n
						}
					});
					const n = {
						excellent: "excellent",
						good: "good",
						ok: "ok",
						poor: "poor",
						offline: "offline"
					}
				},
				82619: function(m, a, e) {
					e.d(a, {
						t: function() {
							return t
						}
					});
					var n = e(97519);

					function t() {
						return n.Z.currentUser
					}
				},
				97519: function(m, a, e) {
					e.d(a, {
						Z: function() {
							return o
						}
					});
					var n = e(52553),
						t = e(39185),
						s = e(74508);
					const i = (0, s.S)(),
						r = new t.$;
					(0, n.Uc)(r, {
						uid: i.username,
						ml: i.membershipLevel,
						status: "online",
						title: i.chessTitle
					});
					const o = {
						blocked: [],
						blocking: [],
						currentUser: r,
						following: (0, n.BL)(t.$, {
							key: "uid"
						})
					}
				},
				57187: function(m, a, e) {
					e.d(a, {
						$: function() {
							return n
						}
					});
					const n = "monitorLastRequiredGamesCheck"
				},
				19444: function(m, a, e) {
					e.d(a, {
						y: function() {
							return n
						}
					});
					const n = "monitorRequiredGamesIds"
				},
				96639: function(m, a, e) {
					e.d(a, {
						Q: function() {
							return n
						}
					});
					const n = 12 * 60 * 60 * 1e3
				},
				16663: function(m, a, e) {
					e.d(a, {
						z: function() {
							return t
						}
					});
					var n = e(19444);

					function t() {
						var s;
						const i = (s = window.localStorage.getItem(n.y)) == null ? void 0 : s.trim();
						return i ? i.split(",") : []
					}
				},
				66025: function(m, a, e) {
					e.d(a, {
						L: function() {
							return t
						}
					});
					var n = e(16663);

					function t() {
						var s, i;
						return Boolean(window.chesscom.features.includes("play_game_monitor_send_metrics") || ((s = window.context.user) == null ? void 0 : s.isStreamer) && window.chesscom.features.includes("play_game_monitor_send_metrics_streamers") || window.chesscom.features.includes("play_game_monitor_send_metrics_random") && Math.random() < .01 * ((i = window.chesscom.playSendMetricsRandomPercentage) != null ? i : 0) || (0, n.z)().length)
					}
				},
				26607: function(m, a, e) {
					e.d(a, {
						o: function() {
							return u
						}
					});
					var n = e(83927),
						t = e(6671),
						s = e(89220),
						i = e(16293);

					function r() {
						return !(0, s.w)() && !(0, i.O)()
					}
					const o = {
						hasRequestedSendEvent: !1,
						isRunningSendEvent: !1
					};

					function u() {
						if (o.isRunningSendEvent || !r()) {
							o.hasRequestedSendEvent = !0;
							return
						}
						c()
					}
					async function c() {
						o.hasRequestedSendEvent = !1, o.isRunningSendEvent = !0, await t.f.emit(n.q.Send), o.isRunningSendEvent = !1, o.hasRequestedSendEvent && setTimeout(u)
					}
				},
				83927: function(m, a, e) {
					e.d(a, {
						q: function() {
							return n
						}
					});
					var n = (t => (t[t.Load = 0] = "Load", t[t.Send = 1] = "Send", t))(n || {})
				},
				6671: function(m, a, e) {
					e.d(a, {
						f: function() {
							return t
						}
					});
					var n = e(52553);
					const t = (0, n.gd)()
				},
				45661: function(m, a, e) {
					e.d(a, {
						e: function() {
							return n
						}
					});
					const n = "cometdNetworksStats"
				},
				4113: function(m, a, e) {
					e.d(a, {
						V: function() {
							return t
						}
					});
					var n = e(45661);

					function t() {
						var s;
						return JSON.parse((s = window.localStorage.getItem(n.e)) != null ? s : "{}")
					}
				},
				6819: function(m, a, e) {
					e.d(a, {
						s: function() {
							return n
						}
					});

					function n() {
						return {
							outOfGameDisconnects: [],
							gameStats: {}
						}
					}
				},
				54252: function(m, a, e) {
					e.d(a, {
						L: function() {
							return n
						}
					});

					function n(t, s) {
						const i = JSON.parse(JSON.stringify(t));
						return Object.entries(s).forEach(([r, o]) => {
							const u = i[r];
							if (!u) {
								i[r] = o;
								return
							}
							i[r].outOfGameDisconnects.concat(o.outOfGameDisconnects), Object.entries(o.gameStats).forEach(([c, l]) => {
								const p = u.gameStats[c];
								if (!p) {
									i[r].gameStats[c] = Object.assign({}, l), i[r].gameStats[c].latencies = Object.assign([], i[r].gameStats[c].latencies);
									return
								}
								i[r].gameStats[c] = {
									disconnects: p.disconnects + l.disconnects,
									latencies: Object.assign([], p.latencies, l.latencies),
									timestamp: l.timestamp
								}
							})
						}), i
					}
				},
				87002: function(m, a, e) {
					e.d(a, {
						r: function() {
							return i
						}
					});
					var n = e(96979);
					const t = ["live3", "live2"];
					var s = e(6819);

					function i(r) {
						const u = Date.now() - 864e5,
							c = Date.now() - 14 * 864e5,
							l = {};
						return t.forEach(p => {
							var h;
							l[p] = (0, s.s)();
							const _ = (h = r[p]) != null ? h : (0, s.s)();
							l[p].outOfGameDisconnects = _.outOfGameDisconnects.filter(b => b > c), Object.entries(_.gameStats).forEach(([b, g]) => {
								g.timestamp < c || (g.latencies = g.latencies.filter(v => v && v < 6e4), g.timestamp < u && (g.latencies = [(0, n.W)(g.latencies)]), l[p].gameStats[b] = Object.assign({}, g))
							})
						}), l
					}
				},
				18539: function(m, a, e) {
					e.d(a, {
						k: function() {
							return n
						}
					});
					const n = {
						stats: {}
					}
				},
				25981: function(m, a, e) {
					e.d(a, {
						a: function() {
							return t
						}
					});
					var n = e(59479);
					async function t() {
						n.m.challengeLink = null, n.m.isChallengeLinkCopied = !1, n.m.isChallengeLinkDisabled = !1
					}
				},
				56901: function(m, a, e) {
					e.d(a, {
						Q: function() {
							return v
						}
					});
					var n = e(99209),
						t = e(13258),
						s = e(96066),
						i = e(92005),
						r = e(6936),
						o = e(25981),
						u = e(59479),
						c = e(38225),
						l = e(19966);

					function p(O) {
						return Boolean(!l.z.subscribing[O] && l.z.subscriptions[O])
					}
					var h = e(4358);

					function _() {
						return p(h.M)
					}
					var b = e(32538),
						g = e(11634);
					async function v(O) {
						u.m.challengeLink = null, u.m.isChallengeLinkDisabled = !0, u.m.challengeLink = await E(O), (0, n.o)(u.m.challengeLink), u.m.isChallengeLinkCopied = !0, setTimeout(o.a, 15e3)
					}
					async function E(O) {
						const T = y(O);
						if (w(O)) {
							const x = await P(O);
							x && (T.rcnChallengeId = x)
						}
						let C;
						try {
							C = await i.Z.post(r.Z.generate("web_game_callback_shareable_chess_challenge"), T)
						} catch (x) {
							throw (0, t.T)(x), x
						}
						const {
							playInviteUrl: D,
							shortUuid: L
						} = C.data.gameSeek;
						return D || r.Z.generate("web_game_seek_challenge", {
							shortUuid: L
						}, !0)
					}

					function y(O) {
						var T;
						const C = O.timeControl.timeType === "daily";
						return {
							color: O.color || 0,
							gameType: O.gameType === "oddschess" ? "chess" : O.gameType,
							isRated: O.gameType !== "oddschess" && O.isRated ? "1" : "0",
							ratingMax: u.m.challengeOptions.ratingRange.upper || null,
							ratingMin: u.m.challengeOptions.ratingRange.lower || null,
							baseTime: C ? void 0 : O.timeControl.baseTime,
							timeIncrement: C ? void 0 : O.timeControl.timeIncrement,
							daysPerMove: C ? O.timeControl.baseTime : void 0,
							vs: ((T = O.opponent) == null ? void 0 : T.username) || null,
							startingPosition: O.initialPosition || null,
							minRequiredGameCount: 0,
							takeback: "0"
						}
					}

					function w(O) {
						return (0, c._)() && _() && O.timeControl.timeType === "live"
					}
					async function P(O) {
						const T = k(O);
						try {
							return (await (0, b.Y)(T, !0)).data.id
						} catch {
							return null
						}
					}

					function k(O) {
						const T = {
							rated: O.gameType !== "oddschess" && Boolean(O.isRated),
							gameType: O.gameType === "oddschess" ? "chess" : O.gameType,
							initialPosition: O.initialPosition || void 0,
							ratingRange: {
								lower: u.m.challengeOptions.ratingRange.lower || null,
								upper: u.m.challengeOptions.ratingRange.upper || null
							},
							timeControl: {
								base: (0, g.C)(O.timeControl.baseTime),
								increment: (0, g.C)(O.timeControl.timeIncrement || 0)
							}
						};
						return O.color && (T.color = O.color === 1 ? s.s.White : s.s.Black), T
					}
				},
				75170: function(m, a, e) {
					e.d(a, {
						i: function() {
							return L
						}
					});
					var n = e(91008),
						t = e(81005),
						s = e(13258),
						i = e(2548),
						r = e(92005),
						o = e(6936),
						u = e(30201),
						c = e(51512);
					async function l(Z) {
						var A, S;
						const j = {
							color: Z.color || void 0,
							daysPerMove: Z.timeControl.baseTime,
							gameType: Z.gameType,
							isRated: Z.isRated,
							maxRatingDelta: (A = Z.ratingRange) == null ? void 0 : A.upper,
							minRatingDelta: Math.abs(((S = Z.ratingRange) == null ? void 0 : S.lower) || 0),
							startingPosition: Z.initialPosition || void 0,
							takeback: Z.isAllowingTakebacks ? "1" : "0"
						};
						Z.opponent || Object.assign(j, {
							maxTimeoutPercent: Z.isAvoidTimeouts ? 0 : void 0,
							maxTimePerMove: Z.moveSpeed || void 0,
							minMembershipLevel: Z.isPremiumMembersOnly ? t.p.gold : void 0,
							minRequiredGameCount: Z.minGamesPlayed || 0
						});
						const J = Z.opponent ? o.Z.generate("web_game_callback_daily_chess_challenge", {
							opponent: (0, c.M)(Z.opponent)
						}) : o.Z.generate("web_game_callback_random_daily_chess_challenge");
						u.n.isCreatingDailyChallenge = !0;
						try {
							const _e = await r.Z.post(J, j);
							(0, i.s)(_e.data.message)
						} catch (_e) {
							(0, s.T)(_e)
						}
						u.n.isCreatingDailyChallenge = !1
					}
					var p = e(22745),
						h = e(35038),
						_ = e(34186),
						b = e(63591),
						g = e(59933),
						v = e(4254),
						E = e(59479),
						y = e(27427),
						w = e(43667),
						P = e(91482);

					function k() {
						return (0, w.Q)((Z, A) => {
							P.p.isRcnMatcherReady ? Z() : P.p.isRcnMatcherEnabled || A(new Error("matcher failed to initialize"))
						})
					}
					var O = e(17726),
						T = e(10890);

					function C(Z) {
						const A = [];
						Z.ratingRange && A.push({
							field: "outgoingMinRating",
							value: Z.ratingRange.lower
						}, {
							field: "outgoingMaxRating",
							value: Z.ratingRange.upper
						}), Z.timeControl.timeType === "live" && (A.push({
							field: "seekGameType",
							value: Z.gameType
						}, {
							field: "seekRated",
							value: Z.isRated
						}), Z.gameType === "chess" ? A.push({
							field: "seekBaseTimeChess",
							value: Z.timeControl.baseTime * 10
						}, {
							field: "seekIncrementChess",
							value: Number(Z.timeControl.timeIncrement) * 10
						}) : A.push({
							field: "seekBaseTimeVariants",
							value: Z.timeControl.baseTime * 10
						}, {
							field: "seekIncrementVariants",
							value: Number(Z.timeControl.timeIncrement) * 10
						})), (0, T.z)(A)
					}
					var D = e(35545);
					async function L(Z, A = {}) {
						if (!(0, D.j)()) return;
						E.m.shouldReloadRecentTimeControls = !0, E.m.shouldReloadRecentOpponents = !0, E.m.isCreatingChallenge = !0, await (0, O.i)();
						const S = x(Z);
						if (S.opponent || V(S, A), W(S)) await l(S);
						else if (await z(Z)) {
							await F(S, Z);
							try {
								await (0, y.G)(S)
							} catch {
								await (0, p.m)(S)
							}
						} else await (0, p.m)(S);
						E.m.isCreatingChallenge = !1
					}

					function x(Z) {
						var A;
						const S = {
							...(0, g.d)(!0),
							...Z,
							opponent: (A = Z.opponent) != null && A.username ? (0, c.M)(Z.opponent) : null
						};
						return S.gameType === "oddschess" && (S.gameType = "chess", S.color || (S.color = 1), (!S.initialPosition || E.m.customPositionType === _.Z.AutoBalance) && (S.initialPosition = (0, b.p)())), S.initialPosition && (S.isRated = !1), S
					}

					function W(Z) {
						return Z.timeControl.timeType === "daily"
					}
					async function z(Z) {
						if (Z.help || Z.initialPosition && Z.initialPosition !== (0, n.H)()) return !1;
						try {
							return await k(), !0
						} catch {
							return !1
						}
					}
					async function F(Z, A) {
						var S, j;
						if ((S = A.opponent) != null && S.uuid) Z.toUserId = A.opponent.uuid;
						else if ((j = A.opponent) != null && j.username) {
							const {
								uuid: J
							} = await (0, v.C)(A.opponent.username);
							Z.toUserId = J
						}
					}

					function V(Z, A) {
						(0, h.s)(), C(A.ratingRange ? Z : {
							...Z,
							ratingRange: null
						})
					}
				},
				89662: function(m, a, e) {
					e.d(a, {
						r: function() {
							return i
						}
					});
					var n = e(75170),
						t = e(46587),
						s = e(40201);
					async function i() {
						return (0, n.i)({
							gameType: (0, t.l)(),
							isRated: !0,
							timeControl: (0, s.Q)(),
							initialPosition: null
						})
					}
				},
				64515: function(m, a, e) {
					e.d(a, {
						u: function() {
							return c
						}
					});
					var n = e(72055),
						t = e(34186),
						s = e(63591),
						i = e(91717),
						r = e(9616),
						o = e(46587),
						u = e(2418);

					function c() {
						(0, o.l)() === "oddschess" && (0, r.N)() === t.Z.AutoBalance && ((0, u.e)() && !(0, i.r)() ? (0, n.m)((0, s.p)()) : !(0, u.e)() && (0, i.r)() && (0, n.m)(null))
					}
				},
				62704: function(m, a, e) {
					e.d(a, {
						a: function() {
							return u
						}
					});
					var n = e(92005),
						t = e(6936),
						s = e(83187),
						i = e(59479),
						r = e(87833),
						o = e(35545);
					async function u() {
						if (!(0, o.j)() || (0, r.n)()) {
							i.m.recentTimeControls = [];
							return
						}
						if (i.m.recentTimeControls && !i.m.shouldReloadRecentTimeControls) return;
						i.m.recentTimeControls || (i.m.recentTimeControls = [{
							timeType: "none",
							baseTime: 0
						}, {
							timeType: "none",
							baseTime: 0
						}, {
							timeType: "none",
							baseTime: 0
						}]), i.m.shouldReloadRecentTimeControls = !1;
						const {
							data: c
						} = await n.Z.get(t.Z.generate("web_live_recent_time_control"));
						if (c) {
							const l = c.map(p => (0, s.B)({
								baseTime: Number(p.baseTime || 0) / 10,
								timeIncrement: Number(p.timeIncrement || 0) / 10,
								timeType: "live"
							}));
							i.m.recentTimeControls = l
						}
					}
				},
				35038: function(m, a, e) {
					e.d(a, {
						s: function() {
							return s
						}
					});
					var n = e(27713),
						t = e(59479);

					function s({
						autoSeek: i
					} = {
						autoSeek: !1
					}) {
						const r = JSON.stringify({
							autoSeek: Boolean(i),
							timeControl: t.m.challengeOptions.timeControl,
							gameType: t.m.challengeOptions.gameType
						});
						try {
							window.localStorage.setItem(n.vN, r)
						} catch {}
					}
				},
				22023: function(m, a, e) {
					e.d(a, {
						B: function() {
							return r
						}
					});
					var n = e(93948),
						t = e(39185),
						s = e(4254),
						i = e(59479);
					async function r(o) {
						o instanceof n.C || o instanceof t.$ ? i.m.bughousePartner = o.getPlayerInfo() : o?.username ? i.m.bughousePartner = await (0, s.C)(o.username) : i.m.bughousePartner = null
					}
				},
				135: function(m, a, e) {
					e.d(a, {
						B: function() {
							return i
						}
					});
					var n = e(64515),
						t = e(72055),
						s = e(59479);

					function i(r) {
						s.m.customPositionType = r, (0, t.m)(null), (0, n.u)()
					}
				},
				98589: function(m, a, e) {
					e.d(a, {
						D: function() {
							return _
						}
					});
					var n = e(83187),
						t = e(64515),
						s = e(135),
						i = e(72055),
						r = e(93882),
						o = e(86629),
						u = e(27713),
						c = e(34186),
						l = e(29121),
						p = e(59479),
						h = e(81048);

					function _(b) {
						var g;
						p.m.challengeOptions.gameType !== b && (p.m.challengeOptions.gameType = b, ((g = p.m.challengeOptions.timeControl) == null ? void 0 : g.timeType) === "live" && (b !== "chess" ? (0, o.Z)((0, n.B)(u.RE)) : (0, o.Z)((0, h.w)(b))), (0, i.m)(null), (0, t.u)(), b === "oddschess" && (0, l.S)() === u.H5.default && (0, r.m)(u.H5.customGameOptions), b !== "oddschess" && p.m.customPositionType !== c.Z.AutoBalance && (0, s.B)(c.Z.AutoBalance))
					}
				},
				72055: function(m, a, e) {
					e.d(a, {
						m: function() {
							return t
						}
					});
					var n = e(59479);

					function t(s) {
						n.m.challengeOptions.initialPosition = s
					}
				},
				93882: function(m, a, e) {
					e.d(a, {
						m: function() {
							return i
						}
					});
					var n = e(98589),
						t = e(27713),
						s = e(59479);

					function i(r) {
						s.m.view = r, s.m.view === t.H5.default && s.m.challengeOptions.gameType === "oddschess" && (0, n.D)("chess")
					}
				},
				63498: function(m, a, e) {
					e.d(a, {
						Q: function() {
							return l
						}
					});
					var n = e(64515),
						t = e(93948),
						s = e(4254),
						i = e(92005),
						r = e(6936);
					async function o(p) {
						var h, _, b, g, v, E, y, w;
						const P = r.Z.generate("pubapi_player_stats", {
							username: p
						});
						let k;
						try {
							k = (await i.Z.get(P)).data
						} catch {
							k = {}
						}
						return {
							bullet: ((_ = (h = k.chess_bullet) == null ? void 0 : h.last) == null ? void 0 : _.rating) || null,
							blitz: ((g = (b = k.chess_blitz) == null ? void 0 : b.last) == null ? void 0 : g.rating) || null,
							rapid: ((E = (v = k.chess_rapid) == null ? void 0 : v.last) == null ? void 0 : E.rating) || null,
							daily: ((w = (y = k.chess_daily) == null ? void 0 : y.last) == null ? void 0 : w.rating) || null
						}
					}
					async function u(p) {
						return p instanceof t.C ? {
							...p.getPlayerInfo(),
							...await o(p.username)
						} : {
							...await (0, s.C)(p.username),
							...await o(p.username)
						}
					}
					var c = e(59479);
					async function l(p) {
						c.m.challengeOptions.opponent = p ? await u(p) : null, (0, n.u)()
					}
				},
				78599: function(m, a, e) {
					e.d(a, {
						j: function() {
							return t
						}
					});
					var n = e(59479);

					function t(s) {
						n.m.challengeOptions.ratingRange = {
							...n.m.challengeOptions.ratingRange,
							...s
						}
					}
				},
				86629: function(m, a, e) {
					e.d(a, {
						Z: function() {
							return o
						}
					});
					var n = e(19888),
						t = e(98589),
						s = e(27713),
						i = e(59479),
						r = e(91346);

					function o(u) {
						var c;
						i.m.challengeOptions.timeControl = new n.W(u), i.m.challengeOptions.timeControl.timeType === "daily" && ((0, r.d)(), (c = s.Ik.find(l => l.key === i.m.challengeOptions.gameType)) != null && c.isLiveOnly && (0, t.D)("chess"))
					}
				},
				32362: function(m, a, e) {
					e.d(a, {
						f: function() {
							return s
						}
					});
					var n = e(72183),
						t = e(35038);

					function s({
						autoSeek: i
					} = {}) {
						i && (0, t.s)({
							autoSeek: i
						}), (0, n.m)({})
					}
				},
				58131: function(m, a, e) {
					e.d(a, {
						j: function() {
							return s
						}
					});
					var n = e(18017),
						t = e(27713);

					function s(i) {
						const r = {
							name: "playOnlineClick",
							selection: ""
						};
						switch (i) {
							case t.H5.playFriend:
								r.selection = "playAFriend";
								break;
							case t.H5.customGameOptions:
								r.selection = "customGame";
								break;
							case "tournaments":
								r.selection = "tournaments";
								break;
							case "findFriends":
								r.selection = "playAFriend-findFriends";
								break;
							case "inviteFriends":
								r.selection = "playAFriend-inviteFriends";
								break;
							case "challengeLink":
								r.selection = "playAFriend-challengeLink";
								break;
							default:
								break
						}
						r.selection && (0, n.K)(r.name, {
							selection: r.selection
						})
					}
				},
				27713: function(m, a, e) {
					e.d(a, {
						RE: function() {
							return i
						},
						Ik: function() {
							return s
						},
						vN: function() {
							return c
						},
						H5: function() {
							return r
						},
						A0: function() {
							return o
						}
					});
					var n = e(15875);

					function t() {
						return [{
							key: "chess",
							value: "chess",
							icon: "chess-board",
							isLiveOnly: !1,
							label: (0, n.dW)("Standard"),
							tooltip: (0, n.dW)("Normal rules of chess."),
							route: null
						}, {
							key: "chess960",
							value: "chess960",
							icon: "live960",
							isLiveOnly: !1,
							label: (0, n.dW)("Chess960"),
							tooltip: (0, n.dW)("Normal rules, but starting position is random."),
							route: "web_play_variant_chess960"
						}, {
							key: "threecheck",
							value: "threecheck",
							icon: "threecheck",
							isLiveOnly: !0,
							label: (0, n.dW)("3 Check"),
							tooltip: (0, n.dW)("First to check the other king 3 times wins."),
							route: "web_play_variant_3_check"
						}, {
							key: "kingofthehill",
							value: "kingofthehill",
							icon: "kingofthehill",
							isLiveOnly: !0,
							label: (0, n.dW)("King of the Hill"),
							tooltip: (0, n.dW)("First to get king to middle 4 squares wins."),
							route: "web_play_variant_king_of_the_hill"
						}, {
							key: "crazyhouse",
							value: "crazyhouse",
							icon: "crazyhouse",
							isLiveOnly: !0,
							label: (0, n.dW)("Crazyhouse"),
							tooltip: (0, n.dW)("When you capture a piece, you can drop it on your turn!"),
							route: "web_play_variant_crazyhouse"
						}, {
							key: "bughouse",
							value: "bughouse",
							icon: "bughouse",
							isLiveOnly: !0,
							label: (0, n.dW)("Doubles (Bughouse)"),
							tooltip: (0, n.dW)("Team up with another player and you can drop the pieces that they capture."),
							route: "web_play_variant_doubles_bughouse"
						}, {
							key: "oddschess",
							value: "oddschess",
							icon: "switches",
							isLiveOnly: !1,
							label: (0, n.dW)("Custom Position / Odds"),
							tooltip: (0, n.dW)("Start a game with a material difference."),
							route: null
						}]
					}
					const s = t(),
						i = "180|0",
						r = {
							customGameOptions: "customGameOptions",
							default: "default",
							playVs: "playVs",
							playFriend: "playFriend",
							outgoingChallenges: "outgoingChallenges",
							customPositionSetup: "customPositionSetup",
							customPositionSelectOdds: "customPositionSelectOdds",
							customPositionSelectOpening: "customPositionSelectOpening",
							openChallenges: "openChallenges"
						},
						o = {
							index: "index",
							findFriends: "findFriends",
							inviteFriends: "inviteFriends",
							facebookFriends: "facebookFriends",
							friendRecommendations: "friendRecommendations",
							recentOpponents: "recentOpponents",
							challengeLink: "challengeLink"
						},
						u = {
							bughousePartner: "bughousePartner",
							opponent: "opponent"
						},
						c = "playNewGameSettings"
				},
				34186: function(m, a, e) {
					e.d(a, {
						Z: function() {
							return n
						}
					});
					var n = (t => (t.AutoBalance = "auto-balance", t.SetupPosition = "setup-position", t.FEN = "fen", t.SelectOdds = "select-odds", t.SelectOpening = "select-opening", t))(n || {})
				},
				16025: function(m, a, e) {
					e.d(a, {
						l: function() {
							return n
						}
					});
					var n = (t => (t[t.UpdateChallengeOptions = 0] = "UpdateChallengeOptions", t))(n || {})
				},
				61545: function(m, a, e) {
					e.d(a, {
						I: function() {
							return t
						}
					});
					var n = e(15875);
					const t = [{
						imageUrl: "/bundles/web/images/play/auto-balance-board.png",
						description: (0, n.dW)("Auto-Balance")
					}, {
						evaluation: -.3,
						fen: "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPP1/RNBQKBNR w KQkq - 0 1",
						description: (0, n.dW)("Missing h2 pawn")
					}, {
						evaluation: -.4,
						fen: "rnbqkbnr/pppppppp/8/8/8/8/1PPPPPPP/RNBQKBNR w KQkq - 0 1",
						description: (0, n.dW)("Missing a2 pawn")
					}, {
						evaluation: -.6,
						fen: "rnbqkbnr/pppppppp/8/8/8/8/PPPP1PPP/RNBQKBNR w KQkq - 0 1",
						description: (0, n.dW)("Missing e2 pawn")
					}, {
						evaluation: -.7,
						fen: "rnbqkbnr/pppppppp/8/8/8/4P3/PPPPKPPP/RNBQ1BNR w kq - 0 1",
						description: (0, n.dW)("Misplaced White King")
					}, {
						evaluation: -.8,
						fen: "rnbqkbnr/ppp2ppp/8/3pp3/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1",
						description: (0, n.dW)("2 Moves for Black")
					}, {
						evaluation: -.8,
						fen: "rnbqkbnr/pppppppp/8/8/8/8/PP1PPPPP/RNBQKBNR w KQkq - 0 1",
						description: (0, n.dW)("Missing c2 pawn")
					}, {
						evaluation: -.9,
						fen: "rnbqkbnr/pppppppp/8/8/8/8/P1PPPPPP/RNBQKBNR w KQkq - 0 1",
						description: (0, n.dW)("Missing b2 pawn")
					}, {
						evaluation: -1,
						fen: "rnbqkbnr/pppppppp/8/8/8/8/1PPPPPP1/RNBQKBNR w KQkq - 0 1",
						description: (0, n.dW)("Missing a2 and h2 pawns")
					}, {
						evaluation: -1.1,
						fen: "r1bqkb1r/ppp2ppp/2n2n2/3pp3/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1",
						description: (0, n.dW)("4 Moves for Black")
					}, {
						evaluation: -1.2,
						fen: "rnbqkbnr/pppppppp/8/8/8/8/PPPPP1PP/RNBQKBNR w KQkq - 0 1",
						description: (0, n.dW)("Missing f2 pawn")
					}, {
						evaluation: -1.4,
						fen: "r2qk2r/ppp2ppp/2nbbn2/3pp3/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1",
						description: (0, n.dW)("6 Moves for Black")
					}, {
						evaluation: -1.5,
						fen: "rnbqkb1r/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBN1 w Qkq - 0 1",
						description: (0, n.dW)("Rook for Knight")
					}, {
						evaluation: -1.6,
						fen: "rnbqkbnr/pppppppp/8/8/8/8/1PPPP1PP/RNBQKBNR w KQkq - 0 1",
						description: (0, n.dW)("Missing a2 and f2 pawns")
					}, {
						evaluation: -1.8,
						fen: "rnbqkbnr/pppppppp/8/8/8/8/1PPPPP1P/RNBQKBNR w KQkq - 0 1",
						description: (0, n.dW)("Missing a2 and g2 pawns")
					}, {
						evaluation: -1.9,
						fen: "rnbqkbnr/pppppppp/8/8/8/8/PPP2PPP/RNBQKBNR w KQkq - 0 1",
						description: (0, n.dW)("Missing d2 and e2 pawns")
					}, {
						evaluation: -2.3,
						fen: "rnbqkbnr/pppppppp/8/8/8/8/P1PPPP1P/RNBQKBNR w KQkq - 0 1",
						description: (0, n.dW)("Missing b2 and g2 pawns")
					}, {
						evaluation: -2.4,
						fen: "rnbqkbnr/pppppppp/8/8/8/8/PPPPP2P/RNBQKBNR w KQkq - 0 1",
						description: (0, n.dW)("Missing f2 and g2 pawns")
					}, {
						evaluation: -2.5,
						fen: "rnbqkbnr/pppppppp/8/8/8/8/PPPPP3/RNBQKBNR w KQkq - 0 1",
						description: (0, n.dW)("Missing 3 Pawns")
					}, {
						evaluation: -2.7,
						fen: "r2qk2r/ppp2ppp/2n2n2/2bppb2/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1",
						description: (0, n.dW)("Dream Position")
					}, {
						evaluation: -3,
						fen: "rnbqkbnr/1ppppppp/8/8/8/8/PPPPPPPP/R1BQKBNR w KQkq - 0 1",
						description: (0, n.dW)("Knight for Pawn")
					}, {
						evaluation: -3.4,
						fen: "rnbqkbnr/pppppppp/8/8/8/8/1PPPP3/RNBQKBNR w KQkq - 0 1",
						description: (0, n.dW)("Missing 4 Pawns")
					}, {
						evaluation: -3.5,
						fen: "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKB1R w KQkq - 0 1",
						description: (0, n.dW)("Missing g1 Knight")
					}, {
						evaluation: -3.7,
						fen: "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/R1BQKBNR w KQkq - 0 1",
						description: (0, n.dW)("Missing b1 Knight")
					}, {
						evaluation: -3.8,
						fen: "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQK1NR w KQkq - 0 1",
						description: (0, n.dW)("Missing Bishop")
					}, {
						evaluation: -4.3,
						fen: "rnbqkbnr/pppppppp/8/8/8/8/1PPPPPPP/R1BQKBNR w KQkq - 0 1",
						description: (0, n.dW)("Missing Knight and a2 pawn")
					}, {
						evaluation: -4.6,
						fen: "rnbqkbnr/pppppppp/8/8/8/8/P1PPPPPP/R1BQKBNR w KQkq - 0 1",
						description: (0, n.dW)("(-450) Missing Knight and b2 pawn")
					}, {
						evaluation: -4.8,
						fen: "r1bqkb1r/pppppppp/8/8/8/8/PPPPPPPP/NNNNKNNN w kq - 0 1",
						description: (0, n.dW)("(-500) Knightmare")
					}, {
						evaluation: -5,
						fen: "3qk3/pppppppp/8/8/8/8/PPPPPPPP/2B1K1N1 w - - 0 1",
						description: (0, n.dW)("(-500) Queen vs Bishop and Knight")
					}, {
						evaluation: -5.1,
						fen: "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/1NBQKBNR w Kkq - 0 1",
						description: (0, n.dW)("(-500) Missing a1 Rook")
					}, {
						evaluation: -5.4,
						fen: "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBN1 w Qkq - 0 1",
						description: (0, n.dW)("(-550) Missing h1 Rook")
					}, {
						evaluation: -6.1,
						fen: "rnbqkbnr/pppppppp/8/8/8/8/1PPPPPPP/1NBQKBNR w Kkq - 0 1",
						description: (0, n.dW)("(-600) Missing Rook and a2 pawn")
					}, {
						evaluation: -7.4,
						fen: "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/R1BQKB1R w KQkq - 0 1",
						description: (0, n.dW)("(-750) Missing Knights")
					}, {
						evaluation: -8.9,
						fen: "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/2BQKBNR w Kkq - 0 1",
						description: (0, n.dW)("(-900) Missing Rook and Knight")
					}, {
						evaluation: -9.8,
						fen: "rnbqkbnr/pppppppp/8/8/8/8/1PPPPPPP/2BQKBNR w Kkq - 0 1",
						description: (0, n.dW)("(-1000) Missing Rook, Knight, and pawn")
					}, {
						evaluation: -11.2,
						fen: "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNB1KBNR w KQkq - 0 1",
						description: (0, n.dW)("(-1100) Missing Queen")
					}, {
						evaluation: -11.5,
						fen: "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/R2QKB1R w KQkq - 0 1",
						description: (0, n.dW)("(-1200) Missing 2 Knights and 1 Bishop")
					}, {
						evaluation: -15.7,
						fen: "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/R2QK2R w KQkq - 0 1",
						description: (0, n.dW)("(-1600) Missing Bishops and Knights")
					}, {
						evaluation: -19,
						fen: "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/R3KBNR w KQkq - 0 1",
						description: (0, n.dW)("(-2000) Missing Queen, Bishop, Knight")
					}, {
						evaluation: -22,
						fen: "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/1NB1KBN1 w kq - 0 1",
						description: (0, n.dW)("(-2400) Missing Queen and 2 Rooks")
					}, {
						evaluation: -31,
						fen: "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/4KBN1 w kq - 0 1",
						description: (0, n.dW)("(-3000) Missing Q, 2R, B, N")
					}]
				},
				82261: function(m, a, e) {
					e.d(a, {
						C: function() {
							return n
						}
					});
					var n = (t => (t[t.White = 1] = "White", t[t.Black = 2] = "Black", t[t.Random = 0] = "Random", t))(n || {})
				},
				37061: function(m, a, e) {
					e.d(a, {
						c: function() {
							return n
						}
					});
					const n = "playNewGameRecentTimeControlsPinned"
				},
				57251: function(m, a, e) {
					e.d(a, {
						S: function() {
							return t
						}
					});
					var n = e(52553);
					const t = (0, n.gd)()
				},
				63591: function(m, a, e) {
					e.d(a, {
						p: function() {
							return o
						}
					});
					var n = e(54693),
						t = e(15413),
						s = e(61545),
						i = e(64821),
						r = e(40201);

					function o() {
						var u;
						const l = (0, t.G)((0, r.Q)()) === "daily";
						let {
							userRating: p,
							opponentRating: h
						} = (0, i.x)();
						l && (p > h ? p += 125 : h += 125);
						const _ = Math.abs(p - h),
							b = Math.min(p, h),
							g = (12.5 * _ - .002 * _ * b) / 1e3,
							E = (0, n.q)(s.I.filter(w => w.evaluation), w => Math.abs(w.evaluation + g)).slice(0, 3);
						return (u = E[Math.floor(Math.random() * E.length)].fen) != null ? u : ""
					}
				},
				64821: function(m, a, e) {
					e.d(a, {
						x: function() {
							return r
						}
					});
					var n = e(15413),
						t = e(43141),
						s = e(40201),
						i = e(6871);

					function r() {
						const o = (0, n.G)((0, s.Q)()),
							u = (0, i.x)(o),
							c = (0, t.y)();
						return {
							userRating: u,
							opponentRating: c
						}
					}
				},
				68878: function(m, a, e) {
					e.d(a, {
						_: function() {
							return t
						}
					});
					var n = e(59479);

					function t() {
						return n.m.challengeLink
					}
				},
				59933: function(m, a, e) {
					e.d(a, {
						d: function() {
							return g
						}
					});
					var n = e(83187),
						t = e(19888),
						s = e(27713),
						i = e(82261),
						r = e(77067),
						o = e(78855),
						u = e(9081),
						c = e(75017),
						l = e(5365);

					function p() {
						return l.K.playSettings.seekGameType || "chess"
					}

					function h() {
						return l.K.playSettings.seekRated
					}
					var _ = e(81048),
						b = e(87833);

					function g(v = !1) {
						const E = (0, o.r)();
						let y = null;
						try {
							y = JSON.parse(window.localStorage.getItem(s.vN) || "")
						} catch {}
						const w = r.d.includes(E.name),
							P = y && (y.timeControl.timeType === "daily" || (0, b.n)() || !v);
						let k = p(),
							O = (0, _.w)(k),
							T = null;
						if (w) {
							const D = s.Ik.find(L => L.route === E.name);
							D ? (k = D.value, O = (0, n.B)(s.RE)) : E.params.time ? O = (0, n.B)(`${E.params.time}|${E.params.increment||0}`) : E.params.daily && (O = (0, n.B)(E.params.daily)), E.params.opponent && (T = {
								username: E.params.opponent
							})
						} else P && y && (k = s.Ik.find(D => D.key === y?.gameType) ? y.gameType : "chess", O = k === "chess" || y.timeControl.timeType === "daily" ? y.timeControl : (0, n.B)(s.RE));
						const C = {
							upper: (0, u.$)(),
							lower: (0, c.d)()
						};
						return {
							color: i.C.Random,
							gameType: k,
							initialPosition: null,
							isAllowingTakebacks: !1,
							isAvoidTimeouts: !1,
							isPremiumMembersOnly: !1,
							isRated: h(),
							minGamesPlayed: 0,
							moveSpeed: 0,
							opponent: T,
							ratingRange: C,
							timeControl: new t.W(O)
						}
					}
				},
				23518: function(m, a, e) {
					e.d(a, {
						b: function() {
							return i
						}
					});
					var n = e(27713),
						t = e(40201),
						s = e(87833);

					function i() {
						let r = n.Ik;
						return (0, s.n)() && (r = r.filter(o => o.key !== "bughouse")), (0, t.Q)().timeType === "daily" && (r = r.filter(o => !o.isLiveOnly)), r
					}
				},
				30098: function(m, a, e) {
					e.d(a, {
						s: function() {
							return p
						}
					});
					var n = e(30201);

					function t() {
						return n.n.directChallenges
					}
					var s = e(25404),
						i = e(82619);

					function r() {
						const h = (0, i.t)();
						return s.M.challenges.filter(_ => _.getTo() && !h.isSameUser(_.getFrom()))
					}
					var o = e(19934),
						u = e(91482),
						c = e(74508);

					function l() {
						const h = (0, c.S)();
						return u.p.challenges.filter(_ => {
							var b;
							return _.type === o.o.Challenge && ((b = _.getTo()) == null ? void 0 : b.isSameUser(h))
						})
					}

					function p() {
						return [...l(), ...r(), ...t()]
					}
				},
				91717: function(m, a, e) {
					e.d(a, {
						r: function() {
							return t
						}
					});
					var n = e(59479);

					function t() {
						return n.m.challengeOptions.initialPosition
					}
				},
				29121: function(m, a, e) {
					e.d(a, {
						S: function() {
							return i
						}
					});
					var n = e(27713),
						t = e(34186),
						s = e(59479);

					function i() {
						return s.m.customPositionType === t.Z.SetupPosition && !s.m.challengeOptions.initialPosition ? n.H5.customPositionSetup : s.m.customPositionType === t.Z.SelectOdds && !s.m.challengeOptions.initialPosition ? n.H5.customPositionSelectOdds : s.m.customPositionType === t.Z.SelectOpening && !s.m.challengeOptions.initialPosition ? n.H5.customPositionSelectOpening : s.m.view
					}
				},
				95883: function(m, a, e) {
					e.d(a, {
						r: function() {
							return p
						}
					});
					var n = e(25404),
						t = e(82619);

					function s() {
						const h = (0, t.t)(),
							_ = n.M.challenges.filter(b => h.isSameUser(b.getFrom()));
						return n.M.bughousePair && _.push(...n.M.challenges.filter(b => {
							var g;
							return (g = n.M.bughousePair) == null ? void 0 : g.isSameUser(b.getFrom())
						})), _
					}
					var i = e(19934),
						r = e(91482),
						o = e(74508);

					function u() {
						return r.p.challenges.filter(h => h.type === i.o.Challenge && h.isFrom((0, o.S)()))
					}

					function c() {
						return u().filter(h => h.getTo())
					}

					function l() {
						return r.p.challenges.filter(h => h.type === i.o.Seek)
					}

					function p() {
						return [...c(), ...s(), ...l()]
					}
				},
				97734: function(m, a, e) {
					e.d(a, {
						V: function() {
							return c
						}
					});
					var n = e(34186),
						t = e(9616),
						s = e(82261),
						i = e(64821);

					function r() {
						const {
							userRating: l,
							opponentRating: p
						} = (0, i.x)();
						return l >= p ? s.C.White : s.C.Black
					}
					var o = e(46587),
						u = e(59479);

					function c() {
						return (0, o.l)() === "oddschess" && (0, t.N)() === n.Z.AutoBalance ? r() : u.m.challengeOptions.color
					}
				},
				9616: function(m, a, e) {
					e.d(a, {
						N: function() {
							return t
						}
					});
					var n = e(59479);

					function t() {
						return n.m.customPositionType
					}
				},
				46587: function(m, a, e) {
					e.d(a, {
						l: function() {
							return t
						}
					});
					var n = e(59479);

					function t() {
						return n.m.challengeOptions.gameType
					}
				},
				43141: function(m, a, e) {
					e.d(a, {
						y: function() {
							return r
						}
					});
					var n = e(15413),
						t = e(46587),
						s = e(2418),
						i = e(40201);

					function r() {
						const o = (0, s.e)(),
							u = (0, t.l)(),
							c = (0, n.G)((0, i.Q)(), u);
						return o ? o[c] || 400 : 0
					}
				},
				2418: function(m, a, e) {
					e.d(a, {
						e: function() {
							return t
						}
					});
					var n = e(59479);

					function t() {
						return n.m.challengeOptions.opponent
					}
				},
				9353: function(m, a, e) {
					e.d(a, {
						E: function() {
							return t
						}
					});
					var n = e(59479);

					function t() {
						return n.m.challengeOptions.ratingRange
					}
				},
				40201: function(m, a, e) {
					e.d(a, {
						Q: function() {
							return t
						}
					});
					var n = e(59479);

					function t() {
						return n.m.challengeOptions.timeControl
					}
				},
				46973: function(m, a, e) {
					e.d(a, {
						K: function() {
							return t
						}
					});
					var n = e(59479);

					function t() {
						return n.m.startingPositions
					}
				},
				67319: function(m, a, e) {
					e.d(a, {
						K: function() {
							return t
						}
					});
					var n = e(59479);

					function t() {
						return n.m.isChallengeLinkCopied
					}
				},
				43355: function(m, a, e) {
					e.d(a, {
						K: function() {
							return t
						}
					});
					var n = e(59479);

					function t() {
						return n.m.isChallengeLinkDisabled
					}
				},
				89235: function(m, a, e) {
					e.d(a, {
						j: function() {
							return c
						}
					});
					var n = e(30201);

					function t() {
						return n.n.isCreatingDailyChallenge
					}
					var s = e(25404);

					function i() {
						return s.M.challenges.some(l => l.uuid && !l.id)
					}
					var r = e(59479),
						o = e(91482);

					function u() {
						return Boolean(o.p.pendingChallenges.length)
					}

					function c() {
						return r.m.isCreatingChallenge || t() || i() || u()
					}
				},
				29543: function(m, a, e) {
					e.d(a, {
						Y: function() {
							return t
						}
					});
					var n = e(59479);

					function t() {
						return Boolean(n.m.challengeOptions.isRated)
					}
				},
				31439: function(m, a, e) {
					e.d(a, {
						S: function() {
							return t
						}
					});
					var n = e(59479);

					function t() {
						return n.m.isRecentTimeControlsPinned
					}
				},
				88380: function(m, a, e) {
					e.d(a, {
						H: function() {
							return r
						}
					});
					var n = e(27713),
						t = e(29121),
						s = e(46587);
					const i = [n.H5.customGameOptions, n.H5.customPositionSetup, n.H5.playVs];

					function r() {
						return Boolean(i.includes((0, t.S)()) && (0, s.l)() === "oddschess")
					}
				},
				4254: function(m, a, e) {
					e.d(a, {
						C: function() {
							return s
						}
					});
					var n = e(92005),
						t = e(6936);
					async function s(i) {
						const r = t.Z.generate("web_user_callback_popup", {
								username: i
							}),
							{
								data: o
							} = await n.Z.get(r);
						return {
							username: i,
							id: o.userId,
							uuid: o.uuid,
							isFriend: o.areFriends,
							chessTitle: o.chessTitle,
							membershipLevel: o.membership.level,
							flairCode: o.flair.code,
							avatarUrl: o.avatarUrl,
							rating: o.bestRating,
							ratingType: o.bestRatingType,
							country: {
								name: o.countryName,
								code: o.countryId.toString()
							}
						}
					}
				},
				59479: function(m, a, e) {
					e.d(a, {
						m: function() {
							return g
						}
					});
					var n = e(52553),
						t = e(93948),
						s = e(34186),
						i = e(37061),
						r = e(59933),
						o = e(27713),
						u = e(33490),
						c = e(49053);

					function l() {
						const E = (0, c.f)();
						switch (E.name) {
							case u.Q.Friend:
								return o.H5.playFriend;
							case u.Q.NewGame:
								return E.params.opponent ? o.H5.customGameOptions : o.H5.default;
							case u.Q.Variant3Check:
							case u.Q.VariantChess960:
							case u.Q.VariantCrazyhouse:
							case u.Q.VariantDoublesBughouse:
							case u.Q.VariantKingOfTheHill:
								return o.H5.customGameOptions;
							default:
								return o.H5.default
						}
					}
					var p = e(93567),
						h = e(78855),
						_ = e(35545),
						b;
					const g = {
						bughousePartner: null,
						challengeLink: null,
						challengeOptions: (0, r.d)(),
						customPositionType: s.Z.AutoBalance,
						isChallengeLinkCopied: !1,
						isChallengeLinkDisabled: !1,
						isChallengeLinkModalVisible: !1,
						isCreatingChallenge: v(),
						isEmailInviteModalVisible: !1,
						isFacebookFriendsModalVisible: !1,
						isRecentTimeControlsPinned: Boolean((b = window.localStorage.getItem(i.c)) != null ? b : !1),
						recentOpponents: (0, n.BL)(t.C, {
							key: "username"
						}),
						recentTimeControls: null,
						shouldReloadRecentOpponents: !1,
						shouldReloadRecentTimeControls: !1,
						startingPositions: [],
						view: l()
					};

					function v() {
						const E = (0, h.r)();
						return (0, _.j)() && E.params.action === p.y.CreateLiveChallenge
					}
				},
				53298: function(m, a, e) {
					e.d(a, {
						N: function() {
							return n
						}
					});
					const n = "openChallengesCollapsedGroups"
				},
				63467: function(m, a, e) {
					e.d(a, {
						W: function() {
							return n
						}
					});
					const n = "openChallengesGraphView"
				},
				5887: function(m, a, e) {
					e.d(a, {
						m: function() {
							return s
						}
					});
					var n = e(53298),
						t = e(63467);
					const s = {
						graphView: Boolean(window.localStorage.getItem(t.W)),
						collapsedGroups: (window.localStorage.getItem(n.N) || "").split(",").filter(i => i)
					}
				},
				21860: function(m, a, e) {
					e.d(a, {
						c: function() {
							return n
						}
					});
					const n = {
						players: []
					}
				},
				50047: function(m, a, e) {
					e.d(a, {
						o: function() {
							return u
						}
					});
					var n = e(52553),
						t = Object.defineProperty,
						s = (c, l, p) => l in c ? t(c, l, {
							enumerable: !0,
							configurable: !0,
							writable: !0,
							value: p
						}) : c[l] = p,
						i = (c, l, p) => (s(c, typeof l != "symbol" ? l + "" : l, p), p);
					const r = {
						arc: "",
						arcPlayerScenario: !1,
						tally: {
							blunder: 0,
							book: 0,
							excellent: 0,
							fasterMate: 0,
							forced: 0,
							good: 0,
							inaccuracy: 0,
							missedMate: 0,
							missedWin: 0,
							mistake: 0,
							winningToLosing: 0
						}
					};
					class o extends n.Hn {
						constructor() {
							super(...arguments), i(this, "key", ""), i(this, "progress", 0), i(this, "results", r), i(this, "cancel", null)
						}
					}
					const u = {
						analysis: (0, n.BL)(o, {
							key: "key"
						})
					}
				},
				97923: function(m, a, e) {
					e.d(a, {
						S: function() {
							return n
						}
					});
					var n = (t => (t.Observers = "observers", t.Players = "players", t))(n || {})
				},
				24403: function(m, a, e) {
					e.d(a, {
						W: function() {
							return s
						}
					});
					var n = e(40962),
						t = e(74508);

					function s(i) {
						var r;
						const o = (0, t.S)();
						if (o.isGuest) return !1;
						if (!i.isPlaying(o)) return !0;
						const u = Boolean((r = i.getOpponent(o)) == null ? void 0 : r.isFriend);
						return (0, n.D)(u)
					}
				},
				9647: function(m, a, e) {
					e.d(a, {
						f: function() {
							return g
						}
					});
					var n = e(52553),
						t = Object.defineProperty,
						s = (v, E, y) => E in v ? t(v, E, {
							enumerable: !0,
							configurable: !0,
							writable: !0,
							value: y
						}) : v[E] = y,
						i = (v, E, y) => (s(v, typeof E != "symbol" ? E + "" : E, y), y);
					class r extends n.Hn {
						constructor() {
							super(...arguments), i(this, "id", ""), i(this, "username", ""), i(this, "approved", !1)
						}
					}
					var o = e(45466),
						u = e(72012),
						c = e(79858),
						l = e(97923),
						p = Object.defineProperty,
						h = (v, E, y) => E in v ? p(v, E, {
							enumerable: !0,
							configurable: !0,
							writable: !0,
							value: y
						}) : v[E] = y,
						_ = (v, E, y) => (h(v, typeof E != "symbol" ? E + "" : E, y), y);
					class b extends c.h {
						constructor() {
							super(...arguments), _(this, "chatType", l.S.Players), _(this, "disabled", !1), _(this, "id", ""), _(this, "messages", (0, n.BL)(u._, {
								key: "requestId",
								max: 250
							}))
						}
						isDisabled() {
							return Boolean(this.disabled)
						}
						getChannel() {
							return [o.AM.Chat, o.CZ.Game, this.id, this.chatType].join("/")
						}
					}
					const g = {
						rooms: (0, n.BL)(b, {
							key: "id"
						}),
						requests: (0, n.BL)(r, {
							key: "id"
						}),
						prevRequests: {}
					}
				},
				51271: function(m, a, e) {
					e.d(a, {
						a: function() {
							return P
						}
					});
					var n = e(18370),
						t = e(45463),
						s = e(42567),
						i = e(9085),
						r = e(74508);

					function o(k) {
						(0, s.Y)({
							id: k.id,
							type: i.V.RcnGame,
							tolerance: 10,
							baseTime: k.getTimeControl().baseTime,
							timeIncrement: k.getTimeControl().timeIncrement,
							playerIndex: k.getPlayerIndex((0, r.S)().uuid),
							playerToMove: k.getPlayerToMove(),
							currentLags: [0, 0],
							currentClocks: k.clocks.slice(0),
							isRunning: k.isInProgress()
						})
					}
					var u = e(92862),
						c = e(61583),
						l = e(90994);
					async function p(k) {
						await (0, u.G)({
							channel: k.channel,
							pubsub: k.pubsub,
							onMessage: O => {
								l.Z.emit(c.L.GameStateUpdate, {
									gameState: O.message
								})
							}
						})
					}
					var h = e(29706),
						_ = e(43275),
						b = e(81507);
					async function g(k, O) {
						const T = await (0, h._)(k),
							C = {};
						k.players.forEach((L, x) => {
							var W, z;
							C[L] = (z = (W = k.playersDetails) == null ? void 0 : W[x]) != null ? z : {}
						});
						const D = await (0, _.U)({
							players: k.players,
							contextUser: O,
							playersDetails: C
						});
						return {
							...T,
							channel: k.channel,
							clocks: (0, b.W)(T.clocks),
							href: k.href,
							players: k.players,
							playersDetails: D,
							pubsub: k.pubsub,
							rated: k.rated,
							timeControl: k.timeControl,
							transports: k.transports
						}
					}
					var v = e(69091),
						E = e(60575),
						y = e(61681);

					function w(k) {
						const O = k.players.findIndex(D => D === (0, r.S)().uuid);
						if (O === -1 || !k.playersDetails) return;
						const T = k.playersDetails[O].rating;
						if (!T) return;
						const C = k.variant === "chess" ? k.timeclass : k.variant;
						(0, y.B)({
							[C]: T
						})
					}
					async function P(k) {
						const O = (0, t.HD)(k) ? k : k.id;
						if (E.V.games.includes(O) || E.V.loadingGames.includes(O)) return;
						E.V.loadingGames.push(O);
						const T = (0, t.HD)(k) ? await (0, v.R)(k) : k,
							C = (0, r.S)(),
							D = T.players.includes(C.uuid),
							L = window.chesscom.features.includes(D ? "play_game_via_rsocket" : "play_obrserve_game_via_rsocket");
						if (w(T), L) {
							const {
								subscribeToRsocketRcnGameUpdates: z
							} = await Promise.all([e.e(868), e.e(8824), e.e(5726)]).then(e.bind(e, 67870));
							await z(T)
						} else await p(T);
						const x = await g(T, C),
							W = E.V.games.update(x);
						W.clocks && !W.isOver() && o(W), l.Z.emit(c.L.Open, {
							rcnGame: W
						}).then(() => {
							W.isStarting() && l.Z.emit(c.L.Start, {
								rcnGame: W
							})
						}), (0, n.A)(E.V.loadingGames, W.id)
					}
				},
				61624: function(m, a, e) {
					e.d(a, {
						G: function() {
							return n
						}
					});
					var n = (t => (t.Abort = "abort", t.Draw = "draw", t.DrawReject = "draw-reject", t.DrawIgnore = "draw-ignore", t.Resign = "resign", t))(n || {})
				},
				66789: function(m, a, e) {
					e.d(a, {
						M: function() {
							return n
						}
					});
					var n = (t => (t.None = "none", t.Draw = "draw", t.Ignore = "ignore", t))(n || {})
				},
				61583: function(m, a, e) {
					e.d(a, {
						L: function() {
							return n
						}
					});
					var n = (t => (t[t.Close = 0] = "Close", t[t.ConfirmMove = 1] = "ConfirmMove", t[t.ConnectionEstablished = 2] = "ConnectionEstablished", t[t.ConnectionInterrupted = 3] = "ConnectionInterrupted", t[t.End = 4] = "End", t[t.GameStateUpdate = 5] = "GameStateUpdate", t[t.Move = 6] = "Move", t[t.MoveFailed = 7] = "MoveFailed", t[t.Open = 8] = "Open", t[t.OpponentConnectionStatus = 9] = "OpponentConnectionStatus", t[t.OpponentMove = 10] = "OpponentMove", t[t.PublishMove = 11] = "PublishMove", t[t.Start = 12] = "Start", t[t.StallTimeout = 13] = "StallTimeout", t[t.ThinkTimeout = 14] = "ThinkTimeout", t[t.Update = 15] = "Update", t[t.DrawOffered = 16] = "DrawOffered", t[t.DrawDeclined = 17] = "DrawDeclined", t[t.DrawCancelled = 18] = "DrawCancelled", t))(n || {})
				},
				90994: function(m, a, e) {
					e.d(a, {
						Z: function() {
							return t
						}
					});
					var n = e(52553);
					const t = (0, n.gd)()
				},
				81928: function(m, a, e) {
					e.d(a, {
						f: function() {
							return s
						}
					});
					var n = e(16970),
						t = e(74508);

					function s() {
						return (0, n.x)().filter(i => !i.isOver() && i.isPlaying((0, t.S)()))
					}
				},
				56626: function(m, a, e) {
					e.d(a, {
						M: function() {
							return t
						}
					});
					var n = e(60575);

					function t(s) {
						return n.V.games.find(s)
					}
				},
				16970: function(m, a, e) {
					e.d(a, {
						x: function() {
							return t
						}
					});
					var n = e(60575);

					function t() {
						return n.V.games
					}
				},
				16293: function(m, a, e) {
					e.d(a, {
						O: function() {
							return t
						}
					});
					var n = e(81928);

					function t() {
						return (0, n.f)().length > 0
					}
				},
				29706: function(m, a, e) {
					e.d(a, {
						_: function() {
							return t
						}
					});
					var n = e(86580);
					async function t(s) {
						const {
							data: i
						} = await (0, n.h)({
							path: s.href,
							params: {
								include: "precalculated"
							}
						});
						return i
					}
				},
				69091: function(m, a, e) {
					e.d(a, {
						R: function() {
							return s
						}
					});
					var n = e(32494),
						t = e(86580);
					async function s(i) {
						const {
							data: r
						} = await (0, t.h)({
							path: [n.bo.Games, i],
							service: n.AM.Play
						});
						return r
					}
				},
				60575: function(m, a, e) {
					e.d(a, {
						V: function() {
							return _
						}
					});
					var n = e(52553),
						t = e(21001),
						s = Object.defineProperty,
						i = (b, g, v) => g in b ? s(b, g, {
							enumerable: !0,
							configurable: !0,
							writable: !0,
							value: v
						}) : b[g] = v,
						r = (b, g, v) => (i(b, typeof g != "symbol" ? g + "" : g, v), v);
					class o extends n.Hn {
						constructor() {
							super(...arguments), r(this, "attempt", 0), r(this, "gameId", ""), r(this, "clock", 0), r(this, "index", 0), r(this, "move", ""), r(this, "metadata")
						}
					}
					var u = e(54897),
						c = Object.defineProperty,
						l = (b, g, v) => g in b ? c(b, g, {
							enumerable: !0,
							configurable: !0,
							writable: !0,
							value: v
						}) : b[g] = v,
						p = (b, g, v) => (l(b, typeof g != "symbol" ? g + "" : g, v), v);
					class h extends u.f {
						constructor() {
							super(...arguments), p(this, "id", "")
						}
					}
					const _ = {
						gameOver: (0, n.BL)(h, {
							key: "id"
						}),
						games: (0, n.BL)(t.k, {
							key: "id"
						}),
						loadingGames: [],
						pendingMoves: (0, n.BL)(o, {
							key: "gameId"
						}),
						rsocketConnections: {},
						rsocketMetadataCache: {},
						toggledGames: []
					}
				},
				57806: function(m, a, e) {
					e.d(a, {
						l: function() {
							return r
						}
					});
					var n = e(32494),
						t = e(53771),
						s = e(72096),
						i = e(91482);
					async function r(o) {
						const u = i.p.challenges.find(o);
						if (!u) return Promise.reject();
						await (0, t.n)({
							path: [u.href, n.nv.Accept]
						}), (0, s.A)(o)
					}
				},
				99079: function(m, a, e) {
					e.d(a, {
						z: function() {
							return r
						}
					});
					var n = e(32494),
						t = e(53771),
						s = e(41654),
						i = e(91482);
					async function r(o) {
						const u = i.p.challenges.find(o);
						if (!u) return Promise.reject();
						await (0, t.n)({
							path: [u.href, n.nv.Cancel]
						}), (0, s.O)(o)
					}
				},
				27427: function(m, a, e) {
					e.d(a, {
						G: function() {
							return u
						}
					});
					var n = e(96066),
						t = e(18370),
						s = e(32538),
						i = e(91482),
						r = e(74508),
						o = e(11634);
					async function u(c) {
						var l, p;
						const {
							baseTime: h,
							timeIncrement: _
						} = c.timeControl, b = {
							capabilities: [],
							rated: c.isRated,
							gameType: c.gameType,
							timeControl: {
								base: (0, o.C)(h),
								increment: (0, o.C)(_ || 0)
							}
						};
						c.color && (b.color = c.color === 1 ? n.s.White : n.s.Black), c.initialPosition && (b.initialPosition = c.initialPosition), c.toUserId && (b.toUserId = c.toUserId), c.ratingRange && (b.ratingRange = c.ratingRange), (l = (0, r.S)()) != null && l.isGuest && (b.rated = !1), window.chesscom.features.includes("play_rcn_capabilities_rated_games") && ((p = b.capabilities) == null || p.push("rated")), i.p.pendingChallenges.push(b);
						try {
							await (0, s.Y)(b)
						} catch (g) {
							throw (0, t.A)(i.p.pendingChallenges, b), g
						}
					}
				},
				57071: function(m, a, e) {
					e.d(a, {
						P: function() {
							return o
						}
					});
					var n = e(32494),
						t = e(53771);
					async function s({
						href: u
					}) {
						return (0, t.n)({
							path: [u, n.nv.Decline]
						})
					}
					var i = e(70855),
						r = e(91482);
					async function o(u) {
						const c = r.p.challenges.find(u);
						if (!c) return Promise.reject();
						await s(c), (0, i.N)(u)
					}
				},
				72096: function(m, a, e) {
					e.d(a, {
						A: function() {
							return o
						}
					});
					var n = e(87671),
						t = e(61023),
						s = e(70763),
						i = e(91482),
						r = e(74508);
					async function o(u, c) {
						const l = (0, r.S)(),
							p = i.p.challenges.find(u);
						if (!p) {
							c && t.p.emit(n.h.Match, {
								rcnGameRef: c
							});
							return
						}
						p.accepted || (p.accepted = !0, (0, s._)(p), t.p.emit(p.isTo(l) ? n.h.IncomingChallengeAccepted : n.h.OutgoingChallengeAccepted, {
							challenge: p
						})), c && (p.game = c, t.p.emit(n.h.Match, {
							rcnGameRef: c
						}))
					}
				},
				41654: function(m, a, e) {
					e.d(a, {
						O: function() {
							return o
						}
					});
					var n = e(87671),
						t = e(61023),
						s = e(70763),
						i = e(91482),
						r = e(74508);
					async function o(u) {
						const c = (0, r.S)(),
							l = i.p.challenges.remove(u);
						l && ((0, s._)(l), t.p.emit(l.isTo(c) ? n.h.IncomingChallengeCancelled : n.h.OutgoingChallengeCancelled, {
							challenge: l
						}))
					}
				},
				70855: function(m, a, e) {
					e.d(a, {
						N: function() {
							return o
						}
					});
					var n = e(87671),
						t = e(61023),
						s = e(70763),
						i = e(91482),
						r = e(74508);
					async function o(u) {
						const c = (0, r.S)(),
							l = i.p.challenges.remove(u);
						l && ((0, s._)(l), t.p.emit(l.isTo(c) ? n.h.IncomingChallengeDeclined : n.h.OutgoingChallengeDeclined, {
							challenge: l
						}))
					}
				},
				87671: function(m, a, e) {
					e.d(a, {
						h: function() {
							return n
						}
					});
					var n = (t => (t[t.IncomingChallengeAccepted = 0] = "IncomingChallengeAccepted", t[t.IncomingChallengeCancelled = 1] = "IncomingChallengeCancelled", t[t.IncomingChallengeCleared = 2] = "IncomingChallengeCleared", t[t.IncomingChallengeDeclined = 3] = "IncomingChallengeDeclined", t[t.IncomingChallengeReceived = 4] = "IncomingChallengeReceived", t[t.Match = 5] = "Match", t[t.OutgoingChallengeAccepted = 6] = "OutgoingChallengeAccepted", t[t.OutgoingChallengeCancelled = 7] = "OutgoingChallengeCancelled", t[t.OutgoingChallengeCleared = 8] = "OutgoingChallengeCleared", t[t.OutgoingChallengeDeclined = 9] = "OutgoingChallengeDeclined", t[t.OutgoingChallengeSent = 10] = "OutgoingChallengeSent", t[t.Update = 11] = "Update", t))(n || {})
				},
				4358: function(m, a, e) {
					e.d(a, {
						M: function() {
							return n
						}
					});
					const n = "matcher/tickets/users/:me"
				},
				61023: function(m, a, e) {
					e.d(a, {
						p: function() {
							return t
						}
					});
					var n = e(52553);
					const t = (0, n.gd)()
				},
				38225: function(m, a, e) {
					e.d(a, {
						_: function() {
							return t
						}
					});
					var n = e(91482);

					function t() {
						return n.p.isRcnMatcherEnabled
					}
				},
				70763: function(m, a, e) {
					e.d(a, {
						_: function() {
							return o
						},
						a: function() {
							return u
						}
					});
					var n = e(82704),
						t = e(14395),
						s = e(77800),
						i = e(52966);
					const r = c => `incoming-rcn-challenge-${c.id}`;

					function o(c) {
						n.Z.remove(r(c))
					}

					function u(c) {
						const l = c.getFrom();
						!(0, t.Q)(l.hasFriendRelation()) || (0, s.G)(i.t.notify)
					}
				},
				43275: function(m, a, e) {
					e.d(a, {
						U: function() {
							return o
						}
					});
					var n = e(81005),
						t = e(92005),
						s = e(6936),
						i = e(15875),
						r = e(45463);
					async function o(c) {
						const {
							players: l,
							contextUser: p,
							playersDetails: h
						} = c, _ = l.filter(g => g !== p.uuid);
						let b;
						if (_.length) {
							const g = s.Z.generate("web_user_callback_id_to_user_data");
							b = (await t.Z.get(g, {
								params: {
									uuids: _
								}
							})).data
						} else b = {};
						return l.includes(p.uuid) && (b[p.uuid] = u(p)), l.map(g => {
							const v = Object.assign({}, h?.[g], b[g]),
								E = (0, r.HD)(v.country) ? {
									name: (0, i.dW)(v.country, null, "countries"),
									code: v.country.toLowerCase()
								} : v.country;
							return {
								...v,
								uuid: g,
								country: E,
								friendRequestReceived: Boolean(v.friend_request_received || v.friendRequestReceived),
								friendRequestSent: Boolean(v.friend_request_sent || v.friendRequestSent)
							}
						})
					}

					function u(c) {
						var l;
						const p = Object.keys(n.p).find(h => n.p[h] === c.membershipLevel);
						return {
							avatarUrl: (l = c.getAvatar()) != null ? l : "",
							chessTitle: c.getChessTitle(),
							country: c.getCountry(),
							flairCode: c.getFlairCode(),
							id: c.id,
							uuid: c.uuid,
							membership: p,
							username: c.getUsername()
						}
					}
				},
				32538: function(m, a, e) {
					e.d(a, {
						Y: function() {
							return s
						}
					});
					var n = e(32494),
						t = e(53771);
					async function s(i, r) {
						const o = i.toUserId || r ? n.nv.Challenges : n.nv.Seeks;
						return (0, t.n)({
							service: n.AM.Matcher,
							path: [o, i.gameType],
							data: i
						})
					}
				},
				91482: function(m, a, e) {
					e.d(a, {
						p: function() {
							return i
						}
					});
					var n = e(4452),
						t = e(52553),
						s = e(93515);
					const i = {
						challenges: (0, t.BL)(s.k, {
							key: "id"
						}),
						isRcnMatcherEnabled: (0, n.q)() && window.chesscom.features.includes("play_rcn_matcher_switch"),
						isRcnMatcherReady: !1,
						pendingChallenges: []
					}
				},
				54967: function(m, a, e) {
					e.d(a, {
						U: function() {
							return r
						}
					});
					var n = e(7689),
						t = e(23185),
						s = e(78855),
						i = e(49053);

					function r(o = (0, i.f)()) {
						(0, n.p)(o), t.s.emit(o.name, {
							route: (0, s.r)()
						})
					}
				},
				7689: function(m, a, e) {
					e.d(a, {
						p: function() {
							return u
						}
					});
					var n = e(6936);

					function t(c) {
						window.history.replaceState(null, document.title, c)
					}
					var s = e(33490),
						i = e(77067),
						r = e(66866),
						o = e(75560);

					function u(c) {
						const l = {};
						c.id && (l.id = c.id);
						const p = new URL(n.Z.i18n(c.name, l, !0)).pathname;
						window.location.pathname !== p && (window.history.pushState(c, document.title, p), Object.assign(o.T.currentRoute, c), i.d.includes(c.name) ? t((0, r.D)(s.Q.Play)) : c.params.action && t(`${window.location.origin}${window.location.pathname}`))
					}
				},
				93567: function(m, a, e) {
					e.d(a, {
						y: function() {
							return n
						}
					});
					var n = (t => (t.AcceptLiveChallenge = "acceptLiveChallenge", t.FollowLiveUser = "follow", t.CreateLiveChallenge = "createLiveChallenge", t.StartLiveGame = "startLiveGame", t.StartRcnGame = "startRcnGame", t.JoinTournament = "joinTournament", t.WithdrawTournament = "withdrawTournament", t.JoinArena = "joinArena", t.JoinMatch = "joinMatch", t.WithdrawMatch = "withdrawMatch", t.ShowChat = "showChat", t))(n || {})
				},
				33490: function(m, a, e) {
					e.d(a, {
						Q: function() {
							return n
						}
					});
					var n = (t => (t.ArchivedGame = "web_live_game", t.ComputerGame = "web_game_computer", t.CreateTournament = "web_play_create_tournament", t.Daily = "web_play_daily", t.DailyGame = "web_game_daily", t.DailySeek = "web_daily_seek", t.Friend = "web_play_friend", t.LiveArena = "web_play_live_arena", t.LiveGame = "web_game_live", t.LiveTeamMatch = "web_play_live_team_match", t.LiveTournament = "web_play_live_tournament", t.NewGame = "web_play_new", t.Play = "web_play", t.RcnGame = "web_game_uuid", t.Settings = "web_play_settings", t.Tournaments = "web_play_tournaments", t.Variant3Check = "web_play_variant_3_check", t.VariantChess960 = "web_play_variant_chess960", t.VariantCrazyhouse = "web_play_variant_crazyhouse", t.VariantDoublesBughouse = "web_play_variant_doubles_bughouse", t.VariantKingOfTheHill = "web_play_variant_king_of_the_hill", t))(n || {})
				},
				77067: function(m, a, e) {
					e.d(a, {
						d: function() {
							return t
						}
					});
					var n = e(33490);
					const t = [n.Q.NewGame, n.Q.Friend, n.Q.Variant3Check, n.Q.VariantChess960, n.Q.VariantCrazyhouse, n.Q.VariantDoublesBughouse, n.Q.VariantKingOfTheHill]
				},
				23185: function(m, a, e) {
					e.d(a, {
						s: function() {
							return t
						}
					});
					var n = e(52553);
					const t = (0, n.gd)()
				},
				78855: function(m, a, e) {
					e.d(a, {
						r: function() {
							return t
						}
					});
					var n = e(75560);

					function t() {
						return n.T.currentRoute
					}
				},
				66866: function(m, a, e) {
					e.d(a, {
						D: function() {
							return s
						}
					});
					var n = e(6936);

					function t(i, r) {
						return new URL(n.Z.generate(i, r, !0)).pathname
					}

					function s(i, r = {}) {
						return t(i, r)
					}
				},
				49053: function(m, a, e) {
					e.d(a, {
						f: function() {
							return o
						}
					});
					var n = e(33490),
						t = e(66866);

					function s(u) {
						const c = {};
						return u && u.substr(1).split("&").forEach(l => {
							const [p, h] = l.split("=").map(decodeURIComponent);
							c[p] = h
						}), c
					}

					function i(u) {
						const c = u.split("/").pop() || "";
						return /^[\d]+$/.test(c) ? parseInt(c, 10) : c || null
					}

					function r(u) {
						if (u !== (0, t.D)(n.Q.Play)) {
							const l = Object.values(n.Q).find(p => p !== n.Q.Play && u.startsWith((0, t.D)(p)));
							if (l) return l
						}
						return n.Q.Play
					}

					function o() {
						const {
							pathname: u,
							search: c
						} = window.location, l = s(c), p = r(u);
						return {
							params: l,
							name: p,
							id: i(u)
						}
					}
				},
				92946: function(m, a, e) {
					e.d(a, {
						K: function() {
							return t
						}
					});
					var n = e(78855);

					function t(s) {
						const i = (0, n.r)();
						return i.name === s.name && (s.id === i.id || !s.id && !i.id)
					}
				},
				87510: function(m, a, e) {
					e.d(a, {
						h: function() {
							return i
						}
					});
					var n = e(93567),
						t = e(78855),
						s = e(51512);

					function i(r) {
						var o;
						const u = (0, t.r)();
						return Boolean(u.params.action === n.y.FollowLiveUser && ((o = u.params.member) == null ? void 0 : o.split("|").some(c => c === (0, s.M)(r))))
					}
				},
				75560: function(m, a, e) {
					e.d(a, {
						T: function() {
							return t
						}
					});
					var n = e(49053);
					const t = {
						currentRoute: (0, n.f)()
					}
				},
				49048: function(m, a, e) {
					e.d(a, {
						o: function() {
							return v
						}
					});
					var n = e(13258),
						t = e(52553),
						s = e(30025),
						i = e(34763),
						r = e(47866),
						o = e(92005),
						u = e(6936),
						c = e(29272);
					async function l() {
						if (window.chesscom.features.includes("settings_service_read")) return await h();
						const E = await _();
						return {
							...b(E),
							showTimestamps: Boolean(E.showTimestamps)
						}
					}
					const p = Object.keys(c.y1).reduce((E, y) => {
						const w = c.y1[y];
						return w?.serviceKey && (E[w.serviceKey] = {
							settingsKey: y,
							fromSettingsValue: w.fromServiceValue
						}), E
					}, {});

					function h() {
						return (0, r.w)(Object.keys(p)).then(E => Object.entries(E).reduce((y, [w, P]) => {
							const {
								settingsKey: k,
								fromSettingsValue: O
							} = p[w], T = O ? O(P) : P;
							return y[k] = T, y
						}, {}))
					}

					function _() {
						const E = u.Z.generate("web_play_settings_get_settings_callback");
						return o.Z.get(E).then(y => y.data)
					}

					function b(E) {
						return Object.keys(c.y1).forEach(y => {
							const w = c.y1[y].loadKey;
							w && (E[y] = E[w], delete E[w])
						}), E
					}
					var g = e(5365);
					async function v() {
						var E;
						let y = null;
						const w = {
							attempts: 3,
							delay: P => P * 1e3
						};
						try {
							y = await (0, s.x)(l, w)
						} catch (P) {
							(0, n.T)(P)
						}
						y ? ((0, t.Uc)(g.K.playSettings, y), g.K.playSettingsVersion = (E = window.localStorage.getItem(i.y)) != null ? E : null, g.K.hasLoadedPlaySettings = !0) : g.K.hasFailedToLoadPlaySettings = !0
					}
				},
				17726: function(m, a, e) {
					e.d(a, {
						i: function() {
							return u
						}
					});
					var n = e(49048),
						t = e(8678),
						s = e(32945),
						i = e(34763),
						r = e(10616),
						o = e(5365);
					async function u() {
						if (o.K.hasLoadedPlaySettings) {
							const c = o.K.playSettingsVersion,
								l = window.localStorage.getItem(i.y);
							l && c !== l && (await (0, n.o)(), r.T.emit(s.t.Update))
						} else await (0, t.e)()
					}
				},
				10890: function(m, a, e) {
					e.d(a, {
						z: function() {
							return x
						}
					});
					var n = e(65256),
						t = e(89466),
						s = e(53531),
						i = e(55607),
						r = e(10513),
						o = e(4030),
						u = e(78803);
					async function c(W) {
						if (Object.keys(W).length === 0) return;
						Object.assign(i.q.boardOptions, W), (0, t.x)().forEach(V => {
							V.game.setOptions(W)
						});
						const F = Object.keys(W).map(V => (0, s.y)(V, W[V]));
						await Promise.all(F), r.n.setBoardOptions(i.q.boardOptions), (0, n.q)(), window.chesscom.features.includes("settings_service_data_sync") && await (0, o.z)((0, u.R)(W))
					}
					var l = e(83296),
						p = e(52553),
						h = e(92005),
						_ = e(6936),
						b = e(45463),
						g = e(29272),
						v = e(5365);
					async function E(W, z) {
						if (!g.y1[W]) return;
						const {
							route: F
						} = g.y1[W];
						let V;
						F && (V = _.Z.generate(F), (0, b.jn)(z) ? V += `/${z?"1":"0"}` : (0, b.kK)(z) ? V += "/0" : V += `/${z}`), V && (await h.Z.post(V), (0, p.Uc)(v.K.playSettings, {
							[W]: z
						}))
					}
					async function y(W, z) {
						if (!window.chesscom.features.includes("settings_service_data_sync")) return;
						const F = {};
						z.forEach(({
							field: V,
							value: Z
						}) => {
							var A;
							if (W[V] === Z) return;
							const {
								serviceKey: S,
								serviceValue: j
							} = (A = g.y1[V]) != null ? A : {};
							S && (F[S] = j ? j(Z) : Z)
						}), await (0, o.z)(F)
					}
					var w = e(17314),
						P = e(34763);

					function k() {
						v.K.playSettingsVersion = (0, w.Z)(), window.localStorage.setItem(P.y, v.K.playSettingsVersion)
					}
					var O = e(8678),
						T = e(93057),
						C = e(32945),
						D = e(10616),
						L = e(7228);
					async function x(W) {
						await (0, O.e)();
						const z = (0, L.G)(),
							F = {},
							V = [];
						try {
							await y(z, W)
						} catch {}
						let Z = !1;
						W.forEach(({
							field: S,
							value: j
						}) => {
							z[S] !== j && (S === "dgtBoardEnabled" && (j ? window.localStorage.setItem(T.D, "true") : window.localStorage.removeItem(T.D), Z = !0), l.f[S] ? Object.assign(F, {
								[S]: j
							}) : g.y1[S] && V.push({
								field: S,
								value: j
							}))
						}), await c(F);
						let A = Promise.resolve();
						V.forEach(({
							field: S,
							value: j
						}) => {
							A = A.then(() => E(S, j))
						}), await A, k(), D.T.emit(C.t.Update), Z && setTimeout(() => window.location.reload(), 1e3)
					}
				},
				66816: function(m, a, e) {
					e.d(a, {
						e: function() {
							return p
						}
					});
					var n = e(45353),
						t = e(40381),
						s = e(52553),
						i = e(92005),
						r = e(6936),
						o = e(8678),
						u = e(5365);
					async function c() {
						if (!window.chesscom.features.includes("settings_service_read")) {
							await (0, o.e)(), u.K.isOnVacation = u.K.playSettings.isOnVacation;
							return
						}
						const h = r.Z.generate("web_play_settings_get_settings_callback"),
							_ = await i.Z.get(h);
						u.K.isOnVacation = Boolean(_.data.isOnVacation)
					}
					var l = e(29272);
					async function p(h = l.Vy.board) {
						c(), await Promise.all([(0, t.Y)(), (0, s.tL)(Promise.all([e.e(9194), e.e(9122)]).then(e.bind(e, 37253))), (0, n.o)()]), u.K.isVisible = !0, u.K.selectedTab = h
					}
				},
				8678: function(m, a, e) {
					e.d(a, {
						e: function() {
							return s
						}
					});
					var n = e(43667),
						t = e(5365);

					function s() {
						return (0, n.Q)((i, r) => {
							t.K.hasFailedToLoadPlaySettings ? r(new Error("play settings failed to load")) : t.K.hasLoadedPlaySettings && i()
						})
					}
				},
				29272: function(m, a, e) {
					e.d(a, {
						IU: function() {
							return p
						},
						wv: function() {
							return b
						},
						le: function() {
							return h
						},
						TU: function() {
							return l
						},
						Xo: function() {
							return v
						},
						q7: function() {
							return g
						},
						y1: function() {
							return y
						},
						P6: function() {
							return o
						},
						TG: function() {
							return u
						},
						iP: function() {
							return r
						},
						Vy: function() {
							return i
						}
					});
					var n = e(15875);

					function t(w) {
						switch (w) {
							case "off":
								return 1;
							case "on":
								return 2;
							case "off_in_chat":
							default:
								return 0
						}
					}

					function s(w) {
						switch (w) {
							case "friends":
								return 1;
							case "nobody":
								return 2;
							case "everyone":
							default:
								return 0
						}
					}
					const i = {
							board: "board",
							alerts: "alerts",
							connection: "connection",
							play: "play",
							analysis: "analysis"
						},
						r = {
							general: "playSettingsGeneral",
							live: "playSettingsLive",
							daily: "playSettingsDaily"
						},
						o = {
							everybody: 0,
							friends: 1,
							nobody: 2
						},
						u = [{
							value: o.everybody,
							label: (0, n.dW)("Everyone")
						}, {
							value: o.friends,
							label: (0, n.dW)("Friends Only")
						}, {
							value: o.nobody,
							label: (0, n.dW)("Nobody")
						}],
						c = {
							idle: 0,
							off: 1,
							on: 2
						},
						l = [{
							label: (0, n.dW)("Evaluation"),
							value: 0
						}, {
							label: (0, n.dW)("Win/Draw/Loss"),
							value: 1
						}],
						p = [{
							label: (0, n.dW)("Go to my next available game"),
							value: "next_game"
						}, {
							label: (0, n.dW)("Go to game list"),
							value: "my_games"
						}, {
							label: (0, n.dW)("Stay on this game"),
							value: "stay"
						}],
						h = [null, 1, 2, 3, 5, 7, 10, 14].map(w => ({
							value: w,
							label: w ? w.toString() : "--"
						})),
						_ = [{
							value: 0,
							label: (0, n.dW)("Never")
						}, {
							value: 1,
							label: (0, n.dW)("Archive Only")
						}, {
							value: 2,
							label: (0, n.dW)("Always")
						}],
						b = [{
							value: "off",
							label: (0, n.dW)("None")
						}, {
							value: "inside",
							label: (0, n.dW)("Inside")
						}, {
							value: "outside",
							label: (0, n.dW)("Outside")
						}],
						g = [{
							value: "drag",
							label: (0, n.dW)("Drag or Click")
						}, {
							value: "click",
							label: (0, n.dW)("Click Squares")
						}, {
							value: "drag-only",
							label: (0, n.dW)("Drag Pieces")
						}],
						v = [{
							value: c.idle,
							label: (0, n.dW)("Off in Game Chat")
						}, {
							value: c.off,
							label: (0, n.dW)("Off")
						}, {
							value: c.on,
							label: (0, n.dW)("On")
						}],
						E = {
							dgtBoardEnabled: {
								key: "dgtboard",
								defaultValue: !1
							}
						},
						y = {
							showTimestamps: {
								route: "web_play_settings_set_timestamps_callback",
								serviceKey: "gameplay.show_timestamps"
							},
							autoPromote: {
								loadKey: "autoQueen",
								route: "web_play_settings_auto_promote_callback",
								serviceKey: "gameplay.live.auto_promote_queen"
							},
							confirmResign: {
								route: "web_play_settings_set_confirm_resign_callback",
								serviceKey: "gameplay.confirm_resign"
							},
							autoSwitchGame: {
								loadKey: "autoSwitch",
								route: "web_play_settings_auto_switch_callback",
								serviceKey: "gameplay.live.auto_switch_game"
							},
							lowTimeWarning: {
								route: "web_play_settings_low_time_warning_callback",
								serviceKey: "gameplay.live.low_time_warning"
							},
							premoves: {
								loadKey: "premoveEnabled",
								route: "web_play_settings_premoves_callback",
								serviceKey: "gameplay.live.premoves"
							},
							multipleGames: {
								loadKey: "playMultipleGames",
								route: "web_play_settings_multi_games_callback",
								serviceKey: "gameplay.live.play_multiple_games"
							},
							quickAnalysis: {
								loadKey: "autoAnalysis",
								route: "web_play_settings_set_auto_analysis_callback",
								serviceKey: "gameplay.auto_analysis"
							},
							friendsChallenge: {
								loadKey: "friendsAlwaysChallenge",
								route: "web_play_settings_set_friend_exempt_callback",
								serviceKey: "gameplay.friends_can_challenge_me_no_matter_what"
							},
							allowChallenges: {
								route: "web_play_settings_set_allow_challenges_callback",
								serviceKey: "gameplay.allow_challenges_from",
								serviceValue: w => {
									var P;
									return (P = ["everyone", "friends", "nobody"][w]) != null ? P : "everyone"
								},
								fromServiceValue: w => s(w)
							},
							allowOfflineChallenges: {
								route: "web_play_settings_allow_offline_challenges_callback",
								serviceKey: "gameplay.live.allow_offline_challenges"
							},
							focusMode: {
								loadKey: "alwaysUseFocus",
								route: "web_play_settings_set_always_use_focus_callback",
								serviceKey: "gameplay.focus_mode"
							},
							eventAlerts: {
								loadKey: "eventAnnouncement",
								route: "web_play_settings_event_announcement_callback",
								serviceKey: "gameplay.live.event_announcements",
								serviceValue: w => {
									var P;
									return (P = ["off_in_chat", "off", "on"][w]) != null ? P : "off_in_chat"
								},
								fromServiceValue: w => t(w)
							},
							challengeAlerts: {
								loadKey: "challengePopupAlert",
								route: "web_play_settings_challenge_alerts_callback",
								serviceKey: "gameplay.live.challenge_alerts",
								serviceValue: w => {
									var P;
									return (P = ["everyone", "friends", "nobody"][w]) != null ? P : "everyone"
								},
								fromServiceValue: w => s(w)
							},
							outgoingMinRating: {
								loadKey: "seekMinRating",
								route: "web_play_settings_seek_min_rating_callback",
								serviceKey: "gameplay.seek_min_rating"
							},
							outgoingMaxRating: {
								loadKey: "seekMaxRating",
								route: "web_play_settings_seek_max_rating_callback",
								serviceKey: "gameplay.seek_max_rating"
							},
							incomingMinRating: {
								loadKey: "challengeMinRating",
								route: "web_play_settings_challenge_min_rating_callback",
								serviceKey: "gameplay.challenge_min_rating"
							},
							incomingMaxRating: {
								loadKey: "challengeMaxRating",
								route: "web_play_settings_challenge_max_rating_callback",
								serviceKey: "gameplay.challenge_max_rating"
							},
							graphRated: {
								loadKey: "seekFilterRatedOnly",
								route: "web_play_settings_seek_filter_rated_only_callback",
								serviceKey: "gameplay.live.seek_filter_rated_only",
								serviceValue: w => Boolean(w)
							},
							graphPremium: {
								loadKey: "seekFilterPremiumOnly",
								route: "web_play_settings_seek_filter_premium_only_callback",
								serviceKey: "gameplay.live.seek_filter_premium_only",
								serviceValue: w => Boolean(w)
							},
							graphVariants: {
								loadKey: "seekFilterHideVariants",
								route: "web_play_settings_seek_filter_hide_variant_callback",
								serviceKey: "gameplay.live.seek_filter_hide_variants",
								serviceValue: w => Boolean(w)
							},
							gameChat: {
								route: "web_play_settings_set_game_chat_callback",
								serviceKey: "gameplay.allow_game_chat_with",
								serviceValue: w => {
									var P;
									return (P = ["everyone", "friends", "nobody"][w]) != null ? P : "everyone"
								},
								fromServiceValue: w => s(w)
							},
							seekGameType: {
								route: "web_play_settings_seek_game_type_callback",
								serviceKey: "gameplay.seek_game_type"
							},
							seekBaseTimeChess: {
								route: "web_play_settings_seek_base_time_chess_callback",
								serviceKey: "gameplay.live.seek_base_time_chess"
							},
							seekIncrementChess: {
								route: "web_play_settings_seek_increment_chess_callback",
								serviceKey: "gameplay.live.seek_increment_chess"
							},
							seekBaseTimeVariants: {
								route: "web_play_settings_seek_base_variants_time_callback",
								serviceKey: "gameplay.live.seek_base_time_variants"
							},
							seekIncrementVariants: {
								route: "web_play_settings_seek_increment_variants_callback",
								serviceKey: "gameplay.live.seek_increment_variants"
							},
							evalBar: {
								loadKey: "evaluationBar",
								route: "web_play_settings_evaluation_bar_callback",
								serviceKey: "gameplay.live.evaluation_bar"
							},
							evalLines: {
								loadKey: "engineEvaluation",
								route: "web_play_settings_engine_evaluation_callback",
								serviceKey: "gameplay.live.engine_evaluation"
							},
							afterMoving: {
								route: "web_play_settings_set_after_moving_callback",
								serviceKey: "gameplay.daily.after_moving"
							},
							confirmMove: {
								route: "web_play_settings_set_confirm_move_callback",
								serviceKey: "gameplay.daily.confirm_move"
							},
							maxGameCount: {
								route: "web_play_settings_set_max_game_count_callback",
								serviceKey: "gameplay.daily.max_game_count",
								serviceValue: w => {
									const P = Math.floor(Number(w));
									return P > 0 && !Number.isNaN(P) ? P : null
								}
							},
							minDaysPerMove: {
								route: "web_play_settings_set_min_days_per_move_callback",
								serviceKey: "gameplay.daily.min_days_per_move",
								serviceValue: w => [1, 2, 3, 5, 7, 10, 14].includes(w) ? w : null
							},
							maxDaysPerMove: {
								route: "web_play_settings_set_max_days_per_move_callback",
								serviceKey: "gameplay.daily.max_days_per_move",
								serviceValue: w => [1, 2, 3, 5, 7, 10, 14].includes(w) ? w : null
							},
							autoWinOnTime: {
								route: "web_play_settings_set_auto_win_on_time_callback",
								serviceKey: "gameplay.daily.auto_win_on_time"
							},
							seekRated: {
								route: "web_play_settings_seek_rated_callback",
								serviceKey: "gameplay.live.seek_is_rated",
								serviceValue: w => Boolean(w)
							},
							watchTopGame: {
								loadKey: "autoTop",
								route: "web_play_settings_auto_top_callback",
								serviceKey: "gameplay.live.auto_watch_top_game"
							}
						}
				},
				59470: function(m, a, e) {
					e.d(a, {
						a: function() {
							return n
						}
					});
					var n = (t => (t.NextGame = "next_game", t.GameList = "my_games", t.Stay = "stay", t))(n || {})
				},
				93057: function(m, a, e) {
					e.d(a, {
						D: function() {
							return n
						}
					});
					const n = "dgtboard"
				},
				32945: function(m, a, e) {
					e.d(a, {
						t: function() {
							return n
						}
					});
					var n = (t => (t[t.Update = 0] = "Update", t))(n || {})
				},
				34763: function(m, a, e) {
					e.d(a, {
						y: function() {
							return n
						}
					});
					const n = "playSettingsVersion"
				},
				10616: function(m, a, e) {
					e.d(a, {
						T: function() {
							return t
						}
					});
					var n = e(52553);
					const t = (0, n.gd)()
				},
				9081: function(m, a, e) {
					e.d(a, {
						$: function() {
							return t
						}
					});
					var n = e(5365);

					function t() {
						return n.K.playSettings.outgoingMaxRating
					}
				},
				75017: function(m, a, e) {
					e.d(a, {
						d: function() {
							return t
						}
					});
					var n = e(5365);

					function t() {
						return n.K.playSettings.outgoingMinRating
					}
				},
				81048: function(m, a, e) {
					e.d(a, {
						w: function() {
							return s
						}
					});
					var n = e(83187),
						t = e(5365);

					function s(i) {
						const r = t.K.playSettings.seekBaseTimeChess,
							o = t.K.playSettings.seekIncrementChess,
							u = t.K.playSettings.seekBaseTimeVariants,
							c = t.K.playSettings.seekIncrementVariants,
							l = i === "chess" ? r : u,
							p = i === "chess" ? o : c,
							h = (0, n.B)({
								baseTime: l / 10,
								timeIncrement: p / 10,
								timeType: "live"
							});
						return l ? h : (0, n.B)("600|0")
					}
				},
				7228: function(m, a, e) {
					e.d(a, {
						G: function() {
							return s
						}
					});
					var n = e(46223),
						t = e(5365);

					function s() {
						const i = {
							...(0, n.T)()
						};
						return t.K.playSettings && Object.assign(i, t.K.playSettings), i
					}
				},
				30636: function(m, a, e) {
					e.d(a, {
						n: function() {
							return t
						}
					});
					var n = e(5365);

					function t() {
						return Boolean(n.K.playSettings.watchTopGame)
					}
				},
				14395: function(m, a, e) {
					e.d(a, {
						Q: function() {
							return s
						}
					});
					var n = e(29272),
						t = e(5365);

					function s(i) {
						switch (t.K.playSettings.challengeAlerts) {
							case n.P6.nobody:
								return !1;
							case n.P6.friends:
								return i;
							default:
								return !0
						}
					}
				},
				40962: function(m, a, e) {
					e.d(a, {
						D: function() {
							return s
						}
					});
					var n = e(29272),
						t = e(5365);

					function s(i) {
						switch (t.K.playSettings.gameChat) {
							case n.P6.nobody:
								return !1;
							case n.P6.friends:
								return i;
							default:
								return !0
						}
					}
				},
				5365: function(m, a, e) {
					e.d(a, {
						K: function() {
							return l
						}
					});
					var n = e(52553),
						t = e(59470),
						s = Object.defineProperty,
						i = (h, _, b) => _ in h ? s(h, _, {
							enumerable: !0,
							configurable: !0,
							writable: !0,
							value: b
						}) : h[_] = b,
						r = (h, _, b) => (i(h, typeof _ != "symbol" ? _ + "" : _, b), b);
					class o extends n.Hn {
						constructor() {
							super(...arguments), r(this, "afterMoving", t.a.NextGame), r(this, "allowChallenges", 0), r(this, "allowOfflineChallenges", !1), r(this, "autoPromote", !1), r(this, "autoSwitchGame", !1), r(this, "autoWinOnTime", !0), r(this, "challengeAlerts", 0), r(this, "confirmMove", !0), r(this, "confirmResign", !1), r(this, "dgtBoardEnabled", !1), r(this, "evalBar", !0), r(this, "evalLines", !1), r(this, "eventAlerts", 0), r(this, "focusMode", !1), r(this, "friendsChallenge", !1), r(this, "gameChat", 0), r(this, "graphPremium", !1), r(this, "graphVariants", !1), r(this, "incomingMaxRating", null), r(this, "incomingMinRating", null), r(this, "isOnVacation", !1), r(this, "lowTimeWarning", !1), r(this, "maxDaysPerMove", 0), r(this, "maxGameCount", null), r(this, "minDaysPerMove", 0), r(this, "multipleGames", !1), r(this, "outgoingMaxRating", null), r(this, "outgoingMinRating", null), r(this, "premoves", !1), r(this, "quickAnalysis", !0), r(this, "seekBaseTimeChess", 6e3), r(this, "seekBaseTimeVariants", 1800), r(this, "seekGameType", "chess"), r(this, "seekIncrementChess", 0), r(this, "seekIncrementVariants", 0), r(this, "seekRated", !0), r(this, "showTimestamps", !0), r(this, "watchTopGame", !1)
						}
					}
					var u = e(93057),
						c = e(36559);
					const l = {
						hasFailedToLoadPlaySettings: !1,
						hasLoadedPlaySettings: !1,
						isOnVacation: !1,
						isVisible: !1,
						playSettings: p(),
						playSettingsVersion: null,
						selectedTab: null
					};

					function p() {
						const h = new o;
						return (0, c.r)().get(u.D, !1) && (window.localStorage.setItem(u.D, "true"), (0, c.r)().remove(u.D)), h.dgtBoardEnabled = window.localStorage.getItem(u.D) === "true", h
					}
				},
				92139: function(m, a, e) {
					e.d(a, {
						U: function() {
							return t
						}
					});
					var n = e(77415);

					function t(s) {
						n.B.openBoardsInBackground.push(s)
					}
				},
				54598: function(m, a, e) {
					e.d(a, {
						U: function() {
							return h
						}
					});
					var n = e(49475),
						t = e(82733),
						s = e(23548),
						i = e(74227),
						r = e(13248),
						o = e(62769),
						u = e(14130),
						c = e(62647),
						l = e(6042),
						p = e(77415);

					function h(_) {
						const b = p.B.boards.findIndex(v => v.type === _.type && v.id === _.id);
						if (b === -1) return;
						const g = (0, c.G)(_);
						if (p.B.boards.splice(b, 1), g) {
							const v = (0, o.N)();
							v ? (0, n.Z)(v) : p.B.boards[0] ? (0, n.Z)(p.B.boards[0]) : (0, n.Z)(null)
						}(0, u.$)() === i.v.openGames && !(0, l.I)() && (0, t.S)(i.v.watch), r.U.emit(s.Y.RemoveBoard, {
							board: _
						})
					}
				},
				17154: function(m, a, e) {
					e.d(a, {
						L: function() {
							return t
						}
					});
					var n = e(77415);

					function t(s, i) {
						const r = n.B.floatingModals.find(o => o.key === s);
						r && (Object.assign(r, i), window.localStorage.setItem(r.storageKey, JSON.stringify({
							visible: r.visible,
							position: r.position
						})))
					}
				},
				49475: function(m, a, e) {
					e.d(a, {
						Z: function() {
							return O
						}
					});
					var n = e(41115),
						t = e(32768),
						s = e(23548),
						i = e(28),
						r = e(13248),
						o = e(42359),
						u = e(54983),
						c = e(76013),
						l = e(62647),
						p = e(65077),
						h = e(56626),
						_ = e(93567),
						b = e(78855),
						g = e(87510),
						v = e(9085),
						E = e(17655),
						y = e(81014),
						w = e(86191);

					function P() {
						var T, C;
						const D = (0, E.H)();
						if (!(0, w.j)(D)) return !1;
						if ((0, y.k)()) return !0;
						if ((0, b.r)().params.action === _.y.FollowLiveUser) switch (D?.type) {
							case v.V.LiveGame:
								return Boolean((T = (0, p.S)(D.id)) == null ? void 0 : T.players.some(g.h));
							case v.V.RcnGame:
								return Boolean((C = (0, h.M)(D.id)) == null ? void 0 : C.playersDetails.some(g.h));
							default:
								return !1
						}
						return !0
					}
					var k = e(77415);
					async function O(T) {
						if (!(T && !(0, o.S)(T.type, T.id)) && !(T && (0, l.G)(T))) {
							if (await r.U.emit(s.Y.BeforeSelectBoard, {
									currentBoard: k.B.activeBoard,
									nextBoard: T
								}), T ? (k.B.activeBoard && (0, u.K)(k.B.activeBoard) === i.W.game ? k.B.previousActiveBoard = k.B.activeBoard : k.B.previousActiveBoard = null, k.B.activeBoard = {
									type: T.type,
									id: T.id
								}) : (k.B.activeBoard = null, k.B.previousActiveBoard = null), k.B.selectedSidebarTab) {
								const C = (0, c.K)();
								if (k.B.activeBoard) {
									const D = (0, u.K)(k.B.activeBoard);
									D === i.W.game && C === i.W.dailyGame ? (0, n.X)(i.W.game) : D === i.W.dailyGame && C === i.W.game ? (0, n.X)(i.W.dailyGame) : D === i.W.newGame && C !== i.W.newGame && (0, n.X)(i.W.newGame)
								} else(C === i.W.analysis || C === i.W.game || C === i.W.dailyGame) && (0, n.X)(i.W.newGame)
							}
							P() && (0, t.g)(), await r.U.emit(s.Y.SelectBoard, {
								board: k.B.activeBoard
							})
						}
					}
				},
				82733: function(m, a, e) {
					e.d(a, {
						S: function() {
							return t
						}
					});
					var n = e(77415);

					function t(s) {
						n.B.selectedGamesTab = s
					}
				},
				41115: function(m, a, e) {
					e.d(a, {
						X: function() {
							return g
						}
					});
					var n = e(49475),
						t = e(59380),
						s = e(28),
						i = e(17655),
						r = e(54983),
						o = e(40946);

					function u() {
						return (0, o.D)().find(v => (0, r.K)(v) === s.W.analysis) || null
					}

					function c() {
						return (0, o.D)().find(v => (0, r.K)(v) === s.W.dailyGame) || null
					}
					var l = e(62769),
						p = e(24003),
						h = e(5015),
						_ = e(71437),
						b = e(77415);

					function g(v) {
						if (v === s.W.analysis && !(0, p.L)()) {
							b.B.selectedSidebarTab = s.W.newGame;
							return
						}
						if (v === s.W.dailyGame && !(0, h.h)()) {
							b.B.selectedSidebarTab = s.W.newGame;
							return
						}
						if (v === s.W.game && !(0, _.A)()) {
							b.B.selectedSidebarTab = s.W.newGame;
							return
						}
						const E = (0, i.H)();
						if (E) {
							const y = (0, r.K)(E);
							v === s.W.dailyGame && y !== s.W.dailyGame ? (0, n.Z)(c()) : v === s.W.game && y !== s.W.game ? (0, n.Z)((0, l.N)()) : v === s.W.analysis && y !== s.W.analysis ? (0, n.Z)(u()) : v === s.W.newGame && y !== s.W.newGame && (0, n.Z)(t.r)
						}
						b.B.selectedSidebarTab = v
					}
				},
				77183: function(m, a, e) {
					e.d(a, {
						X: function() {
							return r
						}
					});
					var n = e(45463),
						t = e(17154),
						s = e(35144),
						i = e(77415);

					function r(o, u) {
						let c = i.B.floatingModals.find(l => l.key === o);
						c || (c = Object.values(s.V).find(l => l.key === o), c && i.B.floatingModals.push(c)), c && (0, t.L)(o, {
							visible: (0, n.jn)(u) ? u : !c.visible
						})
					}
				},
				32768: function(m, a, e) {
					e.d(a, {
						g: function() {
							return p
						}
					});
					var n = e(29604),
						t = e(7689),
						s = e(33490),
						i = e(9085),
						r = e(17655),
						o = e(51321),
						u = e(78855);

					function c(h) {
						let _ = null;
						switch (h.type) {
							case i.V.DailyGame: {
								const b = (0, o.P)(h.id);
								let g = s.Q.DailyGame,
									v = b.id;
								b.isLiveGame && (b.uuid ? (v = b.uuid, g = s.Q.RcnGame) : g = s.Q.LiveGame), b.isVsComputer && (g = s.Q.ComputerGame);
								const E = (0, u.r)(),
									y = {};
								E.id === v && E.params.username && (y.username = E.params.username), _ = {
									name: g,
									id: v,
									params: y
								};
								break
							}
							case i.V.DailySeek:
								_ = {
									name: s.Q.DailySeek,
									id: h.id,
									params: {}
								};
								break;
							case i.V.LiveGame:
								_ = {
									name: s.Q.LiveGame,
									id: h.id,
									params: {}
								};
								break;
							case i.V.RcnGame:
								_ = {
									name: s.Q.RcnGame,
									id: h.id,
									params: {}
								};
								break;
							default:
								break
						}
						return _
					}
					const l = window.document.title;

					function p() {
						const h = (0, r.H)();
						if (window.document.title = h?.type === i.V.DailyGame ? (0, n.P)(h.id) : l, !h) {
							(0, t.p)({
								name: s.Q.Play,
								params: {}
							});
							return
						}
						window.document.title = h?.type === i.V.DailyGame ? (0, n.P)(h.id) : l;
						const _ = c(h);
						_ && (0, t.p)(_)
					}
				},
				98004: function(m, a, e) {
					e.d(a, {
						a: function() {
							return n
						}
					});
					var n = (t => (t.games = "arenaGames", t.standings = "arenaStandings", t.clubStandings = "arenaClubStandings", t.chat = "arenaChat", t))(n || {})
				},
				9085: function(m, a, e) {
					e.d(a, {
						V: function() {
							return n
						}
					});
					var n = (t => (t.Analysis = "analysis", t.Blank = "blank", t.CustomPosition = "customPosition", t.DailyGame = "dailyGame", t.DailySeek = "dailySeek", t.LiveGame = "liveGame", t.RcnGame = "rcnGame", t))(n || {})
				},
				59380: function(m, a, e) {
					e.d(a, {
						r: function() {
							return t
						}
					});
					var n = e(9085);
					const t = {
						type: n.V.CustomPosition,
						id: n.V.CustomPosition
					}
				},
				52e3: function(m, a, e) {
					e.d(a, {
						E: function() {
							return n
						}
					});
					const n = "playDailyGamesView"
				},
				17520: function(m, a, e) {
					e.d(a, {
						l: function() {
							return n
						}
					});
					var n = (t => (t.list = "list", t.grid = "grid", t))(n || {})
				},
				23548: function(m, a, e) {
					e.d(a, {
						Y: function() {
							return n
						}
					});
					var n = (t => (t[t.AddBoard = 0] = "AddBoard", t[t.BeforeSelectBoard = 1] = "BeforeSelectBoard", t[t.RemoveBoard = 2] = "RemoveBoard", t[t.SelectBoard = 3] = "SelectBoard", t))(n || {})
				},
				35144: function(m, a, e) {
					e.d(a, {
						V: function() {
							return t
						}
					});
					var n = e(15875);
					const t = {
						ArenaGames: {
							key: "arenaGames",
							title: (0, n.dW)("Arena Games"),
							controller: "broadcaster-arena-games-controller",
							storageKey: "arenaGamesFloatingModal",
							position: null,
							visible: !1,
							defaultSize: {
								width: 215,
								height: 230
							}
						},
						Console: {
							key: "console",
							title: (0, n.dW)("Console"),
							controller: "broadcaster-console-controller",
							storageKey: "consoleFloatingModal",
							position: null,
							visible: !1,
							defaultSize: {
								width: 400,
								height: 230
							}
						},
						OpenGames: {
							key: "openGames",
							title: (0, n.dW)("Open Games"),
							controller: "broadcaster-open-games-controller",
							storageKey: "openGamesFloatingModal",
							position: null,
							visible: !1,
							defaultSize: {
								width: 215,
								height: 230
							}
						},
						TournamentGames: {
							key: "tournamentGames",
							title: (0, n.dW)("Tournament Games"),
							controller: "broadcaster-tournament-games-controller",
							storageKey: "tournamentGamesFloatingModal",
							position: null,
							visible: !1,
							defaultSize: {
								width: 215,
								height: 230
							}
						}
					}
				},
				74227: function(m, a, e) {
					e.d(a, {
						v: function() {
							return n
						}
					});
					var n = (t => (t.archive = "archive", t.daily = "daily", t.watch = "watch", t.openGames = "openGames", t))(n || {})
				},
				64422: function(m, a, e) {
					e.d(a, {
						Q: function() {
							return n
						}
					});
					var n = (t => (t.bughouse = "liveGameBughouse", t.moves = "liveGameMoves", t))(n || {})
				},
				9083: function(m, a, e) {
					e.d(a, {
						i: function() {
							return n
						}
					});
					var n = (t => (t.friends = "friends", t.streamers = "streamers", t.topPlayers = "topPlayers", t))(n || {})
				},
				28: function(m, a, e) {
					e.d(a, {
						W: function() {
							return n
						}
					});
					var n = (t => (t.analysis = "analysis", t.arena = "arena", t.arenaChallenge = "arenaChallenge", t.game = "game", t.dailyGame = "dailyGame", t.games = "games", t.newGame = "newGame", t.players = "players", t.teamMatch = "teamMatch", t.teamMatchChallenge = "teamMatchChallenge", t.tournament = "tournament", t))(n || {})
				},
				84567: function(m, a, e) {
					e.d(a, {
						g: function() {
							return n
						}
					});
					var n = (t => (t.chat = "teamMatchChat", t.standings = "teamMatchStandings", t))(n || {})
				},
				66737: function(m, a, e) {
					e.d(a, {
						N: function() {
							return n
						}
					});
					var n = (t => (t.games = "tournamentGames", t.standings = "tournamentStandings", t.chat = "tournamentChat", t))(n || {})
				},
				13248: function(m, a, e) {
					e.d(a, {
						U: function() {
							return t
						}
					});
					var n = e(52553);
					const t = (0, n.gd)()
				},
				17655: function(m, a, e) {
					e.d(a, {
						H: function() {
							return s
						}
					});
					var n = e(42359),
						t = e(77415);

					function s() {
						return t.B.activeBoard ? (0, n.S)(t.B.activeBoard.type, t.B.activeBoard.id) : null
					}
				},
				54983: function(m, a, e) {
					e.d(a, {
						K: function() {
							return r
						}
					});
					var n = e(51321),
						t = e(9085),
						s = e(28),
						i = e(42359);

					function r(o) {
						const u = (0, i.S)(o.type, o.id);
						if (!u) return null;
						if (u.type === t.V.Analysis) return s.W.analysis;
						if (u.type === t.V.DailySeek) return s.W.dailyGame;
						if (u.type === t.V.DailyGame) {
							const c = (0, n.P)(u.id);
							return c.isLiveGame || c.isVsComputer ? s.W.game : s.W.dailyGame
						}
						return u.type === t.V.LiveGame || u.type === t.V.RcnGame ? s.W.game : u.type === t.V.CustomPosition ? s.W.newGame : null
					}
				},
				42359: function(m, a, e) {
					e.d(a, {
						S: function() {
							return t
						}
					});
					var n = e(77415);

					function t(s, i) {
						return n.B.boards.find(r => r.type === s && r.id === i)
					}
				},
				40946: function(m, a, e) {
					e.d(a, {
						D: function() {
							return t
						}
					});
					var n = e(77415);

					function t() {
						return n.B.boards
					}
				},
				32662: function(m, a, e) {
					e.d(a, {
						I: function() {
							return t
						}
					});
					var n = e(77415);

					function t(s) {
						var i;
						return (i = n.B.floatingModals.find(r => r.key === s)) != null ? i : null
					}
				},
				62769: function(m, a, e) {
					e.d(a, {
						N: function() {
							return o
						}
					});
					var n = e(28),
						t = e(42359),
						s = e(54983),
						i = e(40946),
						r = e(77415);

					function o() {
						return r.B.previousActiveBoard ? (0, t.S)(r.B.previousActiveBoard.type, r.B.previousActiveBoard.id) : (0, i.D)().find(u => (0, s.K)(u) === n.W.game) || null
					}
				},
				75097: function(m, a, e) {
					e.d(a, {
						A: function() {
							return E
						}
					});
					var n = e(54693),
						t = e(3527),
						s = e.n(t);

					function i({
						moves: y,
						timestamps: w
					}) {
						const P = s().createGame({
							variant: "Bughouse",
							tcn: y,
							times: w
						});
						return P ? P.fen().split(" | ")[0] : ""
					}
					var r = e(46233),
						o = e(98988);

					function u() {
						return o.y.games
					}
					var c = e(77723),
						l = e(81986),
						p = e(82619),
						h = e(16970),
						_ = e(9085),
						b = e(74508);

					function g(y, w) {
						var P;
						return (P = y.isAborted) != null && P.call(y) ? "-" : y.getWinnerIndex() === w ? "1" : y.getWinnerIndex() === 1 - w ? "0" : "\xBD"
					}

					function v(y, w) {
						return w ? i({
							moves: [y.getMoves(), w.getMoves()],
							timestamps: [y.getTimestamps(), w.getTimestamps()]
						}) : (0, r.M)({
							gameType: y.getGameType(),
							moves: y.getMoves(),
							initialPosition: y.getInitialPosition()
						})
					}

					function E() {
						const y = [],
							w = (0, p.t)(),
							P = (0, b.S)(),
							k = (0, c.Y)(),
							O = (0, h.x)(),
							T = u();
						return O.forEach(C => {
							y.push({
								clocks: C.clocks,
								id: C.id,
								isPlaying: C.isPlaying(P.uuid),
								playerInfo: C.playersDetails.slice(0),
								playerToMove: C.getPlayerToMove(),
								previewFen: v(C, null),
								result: C.isOver() ? [g(C, 0), g(C, 1)] : null,
								type: _.V.RcnGame
							})
						}), k.filter(C => !(0, l.w)(C.id)).filter(C => !C.getLinkedGameId() || k.find(D => D.id === C.getLinkedGameId())).forEach(C => {
							const D = C.getLinkedGameId() ? k.find(L => L.id === C.getLinkedGameId()) : null;
							y.push({
								clocks: C.clocks,
								id: C.id,
								isPlaying: C.isPlaying(w),
								playerInfo: C.players.map(L => L.getPlayerInfo(C.ratingtype)),
								playerToMove: C.getPlayerToMove(),
								previewFen: v(C, D),
								result: C.isOver() ? [g(C, 0), g(C, 1)] : null,
								type: _.V.LiveGame
							})
						}), T.filter(C => C.isLiveGame).forEach(C => {
							y.push({
								clocks: [0, 0],
								id: C.id,
								isPlaying: C.isPlaying(P),
								playerInfo: C.players,
								playerToMove: C.getPlayerToMove(),
								previewFen: v(C, C.partnerGame),
								result: C.isOver() ? [g(C, 0), g(C, 1)] : null,
								type: _.V.DailyGame
							})
						}), (0, n.q)(y, C => C.isPlaying ? 1 : 2)
					}
				},
				14130: function(m, a, e) {
					e.d(a, {
						$: function() {
							return t
						}
					});
					var n = e(77415);

					function t() {
						return n.B.selectedGamesTab
					}
				},
				76013: function(m, a, e) {
					e.d(a, {
						K: function() {
							return b
						}
					});
					var n = e(35754),
						t = e(98627),
						s = e(95334),
						i = e(33490),
						r = e(77067),
						o = e(78855),
						u = e(28),
						c = e(17655),
						l = e(54983),
						p = e(81014);

					function h() {
						const g = (0, o.r)(),
							v = g.id,
							E = (0, c.H)();
						return r.d.includes(g.name) ? (0, p.k)() ? (0, l.K)(E) : u.W.newGame : g.name === i.Q.Daily ? u.W.games : g.name === i.Q.LiveTournament && (0, s.x)(v) ? u.W.tournament : g.name === i.Q.LiveArena && (0, n.l)(v) ? u.W.arena : g.name === i.Q.LiveTeamMatch && (0, t.e)(v) ? u.W.teamMatch : E ? (0, l.K)(E) : u.W.newGame
					}
					var _ = e(77415);

					function b() {
						return _.B.selectedSidebarTab ? _.B.selectedSidebarTab : h()
					}
				},
				18139: function(m, a, e) {
					e.d(a, {
						V: function() {
							return t
						}
					});
					var n = e(77415);

					function t() {
						return n.B.sidebarWidth
					}
				},
				97702: function(m, a, e) {
					e.d(a, {
						d: function() {
							return t
						}
					});
					var n = e(77415);

					function t() {
						return n.B.floatingModals.filter(s => s.visible)
					}
				},
				46085: function(m, a, e) {
					e.d(a, {
						I: function() {
							return s
						}
					});
					var n = e(75097);

					function t(i, r) {
						const {
							playerInfo: o
						} = i, u = r.trim().toLowerCase();
						return o.some(c => c.username.toLowerCase().startsWith(u))
					}

					function s(i = "") {
						var r;
						const o = (r = (0, n.A)()) == null ? void 0 : r.filter(u => !u.isPlaying);
						return i ? o.filter(u => t(u, i)) : o
					}
				},
				62647: function(m, a, e) {
					e.d(a, {
						G: function() {
							return t
						}
					});
					var n = e(17655);

					function t(s) {
						const i = (0, n.H)();
						return Boolean(i?.type === s.type && i?.id === s.id)
					}
				},
				24003: function(m, a, e) {
					e.d(a, {
						L: function() {
							return s
						}
					});
					var n = e(28),
						t = e(25181);

					function s() {
						return (0, t.M)(n.W.analysis)
					}
				},
				5015: function(m, a, e) {
					e.d(a, {
						h: function() {
							return s
						}
					});
					var n = e(28),
						t = e(25181);

					function s() {
						return (0, t.M)(n.W.dailyGame)
					}
				},
				71437: function(m, a, e) {
					e.d(a, {
						A: function() {
							return s
						}
					});
					var n = e(28),
						t = e(25181);

					function s() {
						return (0, t.M)(n.W.game)
					}
				},
				89639: function(m, a, e) {
					e.d(a, {
						g: function() {
							return s
						}
					});
					var n = e(28),
						t = e(76013);

					function s() {
						return (0, t.K)() === n.W.newGame
					}
				},
				6042: function(m, a, e) {
					e.d(a, {
						I: function() {
							return t
						}
					});
					var n = e(40946);

					function t() {
						return (0, n.D)().length > 1
					}
				},
				81014: function(m, a, e) {
					e.d(a, {
						k: function() {
							return c
						}
					});
					var n = e(51321),
						t = e(65077),
						s = e(82619),
						i = e(56626),
						r = e(9085),
						o = e(17655),
						u = e(74508);

					function c() {
						var l, p, h;
						const _ = (0, o.H)();
						switch (_?.type) {
							case r.V.LiveGame:
								return Boolean((l = (0, t.S)(_.id)) == null ? void 0 : l.isPlaying((0, s.t)()));
							case r.V.RcnGame:
								return Boolean((p = (0, i.M)(_.id)) == null ? void 0 : p.isPlaying((0, u.S)()));
							case r.V.DailyGame:
								return Boolean((h = (0, n.P)(_.id)) == null ? void 0 : h.isPlaying((0, u.S)()));
							default:
								return !1
						}
					}
				},
				1730: function(m, a, e) {
					e.d(a, {
						k: function() {
							return s
						}
					});
					var n = e(62493),
						t = e(81928);

					function s() {
						return Boolean((0, n.s)().length || (0, t.f)().length)
					}
				},
				25181: function(m, a, e) {
					e.d(a, {
						M: function() {
							return i
						}
					});
					var n = e(17655),
						t = e(54983),
						s = e(40946);

					function i(r) {
						return Boolean((0, n.H)() && (0, s.D)().some(o => (0, t.K)(o) === r))
					}
				},
				86191: function(m, a, e) {
					e.d(a, {
						j: function() {
							return c
						}
					});
					var n = e(33490),
						t = e(77067),
						s = e(78855),
						i = e(9085),
						r = e(77415);

					function o({
						id: l,
						type: p
					}) {
						return r.B.openBoardsInBackground.some(h => h.id === l && (h.type === p || p === i.V.DailyGame && h.type === i.V.LiveGame))
					}
					var u = e(81014);

					function c(l) {
						if (l && o(l)) return !1;
						if (!r.B.selectedSidebarTab && !(0, u.k)()) {
							const p = (0, s.r)();
							return !(t.d.includes(p.name) || p.name === n.Q.LiveArena || p.name === n.Q.LiveTournament || p.name === n.Q.LiveTeamMatch)
						}
						return !0
					}
				},
				77415: function(m, a, e) {
					e.d(a, {
						B: function() {
							return v
						}
					});
					var n = e(52553),
						t = e(9085),
						s = Object.defineProperty,
						i = (E, y, w) => y in E ? s(E, y, {
							enumerable: !0,
							configurable: !0,
							writable: !0,
							value: w
						}) : E[y] = w,
						r = (E, y, w) => (i(E, typeof y != "symbol" ? y + "" : y, w), w);
					class o extends n.Hn {
						constructor() {
							super(...arguments), r(this, "id", 0), r(this, "type", t.V.Blank), r(this, "key", ""), r(this, "isEvaluationBarEnabled", null), r(this, "isEvaluationLinesEnabled", null), r(this, "isEvaluationExplorerEnabled", null)
						}
					}
					var u = e(98004),
						c = e(17520),
						l = e(52e3),
						p = e(64422),
						h = e(9083),
						_ = e(84567),
						b = e(66737),
						g = e(87833);
					const v = {
						activeBoard: null,
						boards: (0, n.BL)(o, {
							key: "key"
						}),
						dailyGamesView: window.localStorage.getItem(l.E) || c.l.grid,
						openBoardsInBackground: [],
						previousActiveBoard: null,
						selectedArenaTab: u.a.standings,
						selectedGamesTab: null,
						selectedLiveGameTab: p.Q.moves,
						selectedDailyGameTab: null,
						selectedPlayersTab: (0, g.n)() ? h.i.topPlayers : h.i.friends,
						selectedSidebarTab: null,
						selectedTeamMatchTab: _.g.standings,
						selectedTournamentTab: b.N.standings,
						sidebarWidth: 0,
						floatingModals: []
					}
				},
				92877: function(m, a, e) {
					e.d(a, {
						g: function() {
							return o
						}
					});
					var n = e(56110),
						t = e(46223),
						s = e(18370),
						i = e(75053),
						r = e(30652);

					function o(u) {
						const {
							playSounds: c,
							soundTheme: l
						} = (0, t.T)();
						r.S.loaded.filter(h => u.includes(h.code)).forEach(h => {
							(0, s.A)(r.S.loaded, h), h.sound.unload()
						}), c && u.forEach(h => {
							r.S.loaded.push({
								code: h,
								sound: (0, n.IZ)((0, i.U)(h, l)),
								theme: l
							})
						})
					}
				},
				77800: function(m, a, e) {
					e.d(a, {
						G: function() {
							return i
						}
					});
					var n = e(56110),
						t = e(46223),
						s = e(14768);

					function i(r) {
						const {
							playSounds: o
						} = (0, t.T)();
						if (o) {
							const u = (0, s.z)(r);
							u && (0, n.GN)(u)
						}
					}
				},
				40453: function(m, a, e) {
					e.d(a, {
						F: function() {
							return n
						}
					});
					const n = "bughouseSound"
				},
				52966: function(m, a, e) {
					e.d(a, {
						t: function() {
							return n
						}
					});
					var n = (t => (t.eventEnd = "event-end", t.eventStart = "event-start", t.gameEnd = "game-end", t.gameStart = "game-start", t.lowTime = "tenseconds", t.notify = "notify", t.shoutout = "shoutout", t))(n || {})
				},
				14768: function(m, a, e) {
					e.d(a, {
						z: function() {
							return t
						}
					});
					var n = e(30652);

					function t(s) {
						var i, r;
						return (r = (i = n.S.loaded.find(o => o.code === s)) == null ? void 0 : i.sound) != null ? r : null
					}
				},
				30652: function(m, a, e) {
					e.d(a, {
						S: function() {
							return t
						}
					});
					var n = e(40453);
					const t = {
						loaded: [],
						isBughouseSoundsEnabled: Boolean(window.localStorage.getItem(n.F))
					}
				},
				79830: function(m, a, e) {
					e.d(a, {
						L: function() {
							return i
						}
					});
					var n = e(52553),
						t = e(93948);
					class s extends t.C {}
					const i = {
						streamers: (0, n.BL)(s, {
							key: "username"
						})
					}
				},
				9707: function(m, a, e) {
					e.d(a, {
						r: function() {
							return n
						}
					});
					const n = "hiddenStreamingPlayers"
				},
				97205: function(m, a, e) {
					e.d(a, {
						x: function() {
							return t
						}
					});
					var n = e(82619);

					function t(s) {
						return s.players.filter(i => i.hasconnectedtwitch && !i.isSameUser((0, n.t)()))
					}
				},
				13527: function(m, a, e) {
					e.d(a, {
						C: function() {
							return t
						}
					});
					var n = e(74508);

					function t(s) {
						return s.playersDetails.filter(i => i.hasConnectedTwitch && !i.isSameUser((0, n.S)()))
					}
				},
				8859: function(m, a, e) {
					e.d(a, {
						D: function() {
							return u
						}
					});
					var n = e(52553),
						t = Object.defineProperty,
						s = (l, p, h) => p in l ? t(l, p, {
							enumerable: !0,
							configurable: !0,
							writable: !0,
							value: h
						}) : l[p] = h,
						i = (l, p, h) => (s(l, typeof p != "symbol" ? p + "" : p, h), h);
					class r extends n.Hn {
						constructor() {
							super(...arguments), i(this, "uuid", ""), i(this, "username", ""), i(this, "games", []), i(this, "isStreaming", !1)
						}
					}
					var o = e(9707);
					const u = {
						players: (0, n.BL)(r, {
							key: "uuid"
						}),
						hiddenPlayers: c(),
						eventSources: {}
					};

					function c() {
						try {
							return JSON.parse(window.localStorage.getItem(o.r) || "[]").filter(l => l.expiration > Date.now())
						} catch {
							return []
						}
					}
				},
				60684: function(m, a, e) {
					e.d(a, {
						Q: function() {
							return n
						}
					});
					var n = (t => (t.Bullet = "bullet", t.Blitz = "blitz", t.Rapid = "rapid", t.Variant = "variant", t))(n || {})
				},
				69207: function(m, a, e) {
					e.d(a, {
						b: function() {
							return v
						}
					});
					var n = e(52553),
						t = e(15413),
						s = e(83187),
						i = e(6936),
						r = e(15875),
						o = Object.defineProperty,
						u = (E, y, w) => y in E ? o(E, y, {
							enumerable: !0,
							configurable: !0,
							writable: !0,
							value: w
						}) : E[y] = w,
						c = (E, y, w) => (u(E, typeof y != "symbol" ? y + "" : y, w), w);
					class l extends n.Hn {
						constructor() {
							super(...arguments), c(this, "uuid", ""), c(this, "username", ""), c(this, "fullName", ""), c(this, "title", ""), c(this, "country", ""), c(this, "rating", 0), c(this, "color", "")
						}
						getCountry() {
							return this.country ? {
								name: (0, r.dW)(this.country, null, "countries"),
								code: this.country.toLowerCase()
							} : null
						}
						getChessTitle() {
							return this.title
						}
						getProfileUrl() {
							return i.Z.generate("web_member_view", {
								username: this.getUsername()
							})
						}
						getRating() {
							return this.rating
						}
						getUsername() {
							return this.username
						}
						getFullName() {
							return this.fullName || this.getUsername()
						}
					}
					var p = Object.defineProperty,
						h = (E, y, w) => y in E ? p(E, y, {
							enumerable: !0,
							configurable: !0,
							writable: !0,
							value: w
						}) : E[y] = w,
						_ = (E, y, w) => (h(E, typeof y != "symbol" ? y + "" : y, w), w);
					class b extends n.Hn {
						constructor() {
							super(...arguments), _(this, "id", ""), _(this, "legacyId", 0), _(this, "featured", !1), _(this, "variant", "chess"), _(this, "timeclass", "blitz"), _(this, "timeControl", {
								base: 0,
								increment: 0
							}), _(this, "players", (0, n.BL)(l, {
								key: "uuid",
								max: 2,
								create: 2
							})), _(this, "titled", !0), _(this, "title", ""), _(this, "ranking", 0), _(this, "pcl", !1)
						}
						getTimeControl() {
							return (0, s.B)({
								baseTime: this.timeControl.base / 1e3,
								timeIncrement: this.timeControl.increment / 1e3,
								timeType: "live"
							})
						}
						getWhitePlayer() {
							return this.players[0]
						}
						getBlackPlayer() {
							return this.players[1]
						}
						getRatingType() {
							return (0, t.G)(this.getTimeControl(), this.getGameType())
						}
						getGameType() {
							return this.variant || "chess"
						}
					}
					var g = e(60684);
					const v = {
						games: (0, n.BL)(b, {
							key: "id"
						}),
						variant: "chess",
						timeClass: g.Q.Blitz
					}
				},
				10835: function(m, a, e) {
					e.d(a, {
						O: function() {
							return n
						}
					});
					var n = (t => (t.Bullet = "bullet", t.Blitz = "blitz", t.Rapid = "rapid", t))(n || {})
				},
				79357: function(m, a, e) {
					e.d(a, {
						g: function() {
							return _
						}
					});
					var n = e(52553),
						t = e(81005),
						s = e(15875),
						i = e(45463),
						r = e(69605),
						o = e(92558),
						u = Object.defineProperty,
						c = (b, g, v) => g in b ? u(b, g, {
							enumerable: !0,
							configurable: !0,
							writable: !0,
							value: v
						}) : b[g] = v,
						l = (b, g, v) => (c(b, typeof g != "symbol" ? g + "" : g, v), v);
					class p extends n.Hn {
						constructor() {
							super(...arguments), l(this, "avatarUrl", ""), l(this, "chessTitle", ""), l(this, "country", ""), l(this, "flairCode", ""), l(this, "id", ""), l(this, "userId", 0), l(this, "membership", "basic"), l(this, "presence", null), l(this, "rating", 0), l(this, "username", ""), l(this, "isFriend", !1)
						}
						isPlaying() {
							var g;
							return ((g = this.presence) == null ? void 0 : g.activity) === r.V.Playing
						}
						isOnline() {
							var g;
							return ((g = this.presence) == null ? void 0 : g.status) === r.p.Online
						}
						getLiveGameId() {
							return this.presence ? (0, o.W)(this.presence) : null
						}
						getUsername() {
							return this.username
						}
						getCountry() {
							return (0, i.HD)(this.country) ? {
								name: (0, s.dW)(this.country, null, "countries"),
								code: this.country.toLowerCase()
							} : this.country ? this.country : null
						}
						getMembershipLevel() {
							return t.p[this.membership] || t.p.basic
						}
						getPlayerInfo(g) {
							return {
								avatarUrl: this.avatarUrl,
								chessTitle: this.chessTitle,
								country: this.getCountry(),
								flairCode: this.flairCode,
								id: this.userId,
								uuid: this.id,
								isFriend: this.isFriend,
								membershipLevel: this.getMembershipLevel(),
								rating: this.rating,
								ratingType: g,
								username: this.username
							}
						}
					}
					var h = e(10835);
					const _ = {
						players: (0, n.BL)(p, {
							key: "id"
						}),
						variant: "chess",
						timeClass: h.O.Blitz,
						isLoading: !1,
						query: ""
					}
				},
				495: function(m, a, e) {
					e.d(a, {
						E: function() {
							return t
						}
					});
					var n = e(6850);
					const t = {
						gameId: 0,
						isFriend: !1,
						isLiveGame: !1,
						isSending: !1,
						isVisible: !1,
						message: "",
						modalState: n.Z.modalStates.select,
						recipientUsername: "",
						selectedTrophy: null,
						trophies: [],
						trophyMeta: {
							page: 1,
							more: !1
						}
					}
				},
				32639: function(m, a, e) {
					e.d(a, {
						q: function() {
							return t
						}
					});
					var n = e(4412);

					function t() {
						n.i.isVisible = !1, n.i.isLoading = !1, n.i.user = null, n.i.opponent = null, n.i.lifetimeScore = null, n.i.usernameElement = null
					}
				},
				40943: function(m, a, e) {
					e.d(a, {
						u: function() {
							return o
						}
					});
					var n = e(92005),
						t = e(6936),
						s = e(99996),
						i = e(4412);
					async function r() {
						var u, c;
						const {
							user: l,
							opponent: p
						} = i.i;
						if (!l || !p || p.isGuest || ((u = l.username) == null ? void 0 : u.toLowerCase()) === ((c = p.username) == null ? void 0 : c.toLowerCase())) return;
						const h = l.id ? l.id : l.userId,
							_ = p.id ? p.id : p.userId;
						if (!(!h || !_)) try {
							const {
								data: b
							} = await n.Z.post(t.Z.generate("web_user_callback_lifetime_score", {
								user: h,
								opponent: _
							}));
							i.i.lifetimeScore = b
						} catch {
							i.i.lifetimeScore = null
						}
					}
					async function o() {
						var u, c;
						if (!i.i.user) return;
						const l = t.Z.generate("web_user_callback_popup", {
								username: i.i.user.username
							}),
							p = await n.Z.get(l);
						((u = p.config.url) == null ? void 0 : u.split("/").pop()) === ((c = i.i.user) == null ? void 0 : c.username.toLowerCase()) && (i.i.user = {
							...i.i.user,
							...p.data
						}, i.i.presenceDetails = await (0, s.A)(p.data.uuid), await r())
					}
				},
				13690: function(m, a, e) {
					e.d(a, {
						v: function() {
							return o
						}
					});
					var n = e(52553),
						t = e(32639),
						s = e(40943),
						i = e(4412),
						r = e(74508);
					async function o({
						user: u,
						opponent: c,
						element: l
					}) {
						var p;
						await (0, n.tL)(Promise.all([e.e(7947), e.e(7682)]).then(e.bind(e, 99211))), (0, t.q)(), i.i.isVisible = !0, i.i.isLoading = !0, i.i.user = {
							...u
						}, i.i.usernameElement = l, i.i.opponent = (p = c ?? (0, r.S)()) != null ? p : null, await (0, s.u)(), i.i.isLoading = !1
					}
				},
				4412: function(m, a, e) {
					e.d(a, {
						i: function() {
							return n
						}
					});
					const n = {
						isVisible: !1,
						isLoading: !1,
						presenceDetails: null,
						usernameElement: null,
						user: null,
						opponent: null,
						lifetimeScore: null
					}
				},
				91346: function(m, a, e) {
					e.d(a, {
						d: function() {
							return i
						}
					});
					var n = e(92005),
						t = e(6936),
						s = e(61207);
					async function i() {
						if (s.B.userRatings.daily) return;
						const {
							data: r
						} = await n.Z.get(t.Z.generate("web_game_callback_ratings"));
						s.B.userRatings.daily = r.dailyRating.chess
					}
				},
				61681: function(m, a, e) {
					e.d(a, {
						B: function() {
							return s
						}
					});
					var n = e(45463),
						t = e(61207);

					function s(i) {
						Object.keys(i).forEach(r => {
							!(0, n.hj)(i[r]) || (r === "lightning" && (t.B.userRatings.bullet = i[r]), r === "standard" && (t.B.userRatings.rapid = i[r]), r in t.B.userRatings && (t.B.userRatings[r] = i[r]))
						})
					}
				},
				6871: function(m, a, e) {
					e.d(a, {
						x: function() {
							return i
						}
					});
					var n = e(15413),
						t = e(45463),
						s = e(61207);

					function i(o, u) {
						return (0, t.HD)(o) ? r(o) : r((0, n.G)(o, u))
					}

					function r(o) {
						switch (o) {
							case "lightning":
								return s.B.userRatings.bullet;
							case "standard":
								return s.B.userRatings.rapid;
							default:
								return s.B.userRatings[o]
						}
					}
				},
				61207: function(m, a, e) {
					e.d(a, {
						B: function() {
							return s
						}
					});
					var n, t;
					const s = {
						hasLoadedUserRatings: !1,
						hasFailedToLoadUserRatings: !1,
						userRatings: {
							blitz: 1200,
							bughouse: 1200,
							bullet: 1200,
							chess960: 1200,
							crazyhouse: 1200,
							daily: ((t = (n = window.context) == null ? void 0 : n.user) == null ? void 0 : t.rating) || 0,
							kingofthehill: 1200,
							oddschess: 1200,
							rapid: 1200,
							threecheck: 1200
						}
					}
				},
				61674: function(m, a, e) {
					e.d(a, {
						q: function() {
							return o
						}
					});
					var n = e(92005),
						t = e(6936),
						s = e(15875),
						i = e(12778);
					let r = Promise.resolve({
						data: []
					});
					async function o(u) {
						if (await r, !u || !u.length) {
							i.K.userSearch.isSearchingUser = !1, i.K.userSearch.userSearchResults.reset(), i.K.userSearch.userSearchMessage = "", i.K.userSearch.searchQuery = "";
							return
						}
						if (i.K.userSearch.searchQuery = u, u.length < 3) {
							i.K.userSearch.isSearchingUser = !1, i.K.userSearch.userSearchResults.reset(), i.K.userSearch.userSearchMessage = (0, s.dW)("Please enter %number% or more characters", {
								"%number%": 3
							});
							return
						}
						i.K.userSearch.isSearchingUser = !0, r = n.Z.get(t.Z.generate("web_user_callback_username_search", {
							activeDays: 4e3,
							query: u
						}));
						let c;
						try {
							c = (await r).data
						} catch {}
						if (c) {
							const l = c.map(p => ({
								...p,
								user_id: p.id,
								user_uuid: p.uuid,
								is_friend: p.are_friends || p.is_friend
							}));
							i.K.userSearch.userSearchResults.reset(l), i.K.userSearch.userSearchMessage = ""
						} else i.K.userSearch.userSearchMessage = (0, s.dW)("No results found.");
						i.K.userSearch.isSearchingUser = !1
					}
				},
				22614: function(m, a, e) {
					e.d(a, {
						m: function() {
							return n
						}
					});
					const n = 5
				},
				42752: function(m, a, e) {
					e.d(a, {
						o: function() {
							return n
						}
					});

					function n() {
						var t;
						return (t = window.context.locale) != null ? t : "en_US"
					}
				},
				74508: function(m, a, e) {
					e.d(a, {
						S: function() {
							return t
						}
					});
					var n = e(12778);

					function t() {
						return n.K.contextUser
					}
				},
				76928: function(m, a, e) {
					e.d(a, {
						R: function() {
							return t
						}
					});
					var n = e(12778);

					function t() {
						return n.K.userSearch
					}
				},
				52512: function(m, a, e) {
					e.d(a, {
						J: function() {
							return n
						}
					});

					function n() {
						var t, s;
						const {
							isGuest: i,
							fairPlayAgree: r
						} = (s = (t = window?.context) == null ? void 0 : t.user) != null ? s : {};
						return Boolean(i || r)
					}
				},
				87833: function(m, a, e) {
					e.d(a, {
						n: function() {
							return t
						}
					});
					var n = e(12778);

					function t() {
						return n.K.contextUser.isGuest
					}
				},
				35545: function(m, a, e) {
					e.d(a, {
						j: function() {
							return t
						}
					});
					var n = e(12778);

					function t() {
						return Boolean(n.K.contextUser.username)
					}
				},
				42927: function(m, a, e) {
					e.d(a, {
						$: function() {
							return s
						}
					});
					var n = e(22614),
						t = e(12778);

					function s() {
						return t.K.completedGamesCount >= n.m
					}
				},
				12778: function(m, a, e) {
					e.d(a, {
						K: function() {
							return l
						}
					});
					var n = e(52553),
						t = e(38632),
						s = e(42591),
						i = e(93948),
						r, o, u;
					const c = Object.assign({}, (0, t.x)());
					delete c.isPremium;
					const l = {
						contextUser: new s.Q(c),
						completedGamesCount: (u = (o = (r = window.context) == null ? void 0 : r.user) == null ? void 0 : o.completedGamesCount) != null ? u : 0,
						userSearch: {
							searchQuery: "",
							isSearchingUser: !1,
							userSearchMessage: "",
							userSearchResults: (0, n.BL)(i.C, {
								key: "username"
							})
						}
					}
				},
				47172: function(m, a, e) {
					e.d(a, {
						SG: function() {
							return n
						},
						Bw: function() {
							return t
						},
						zv: function() {
							return s
						},
						nG: function() {
							return i
						}
					});

					function n(r) {
						var o;
						return (o = r.parentNode) == null ? void 0 : o.querySelector("svg")
					}

					function t(r) {
						var o;
						return (o = r.parentNode) == null ? void 0 : o.querySelector(".clock-bar-remainder")
					}

					function s(r, o) {
						var u, c;
						o ? (u = r.parentNode) == null || u.classList.add("clock-player-turn") : (c = r.parentNode) == null || c.classList.remove("clock-player-turn")
					}

					function i(r, o) {
						var u, c;
						o ? (u = r.parentNode) == null || u.classList.add("clock-low-time") : (c = r.parentNode) == null || c.classList.remove("clock-low-time")
					}
				},
				81507: function(m, a, e) {
					e.d(a, {
						W: function() {
							return n
						}
					});

					function n(t) {
						return t.map(s => Math.round(s / 100))
					}
				},
				31780: function(m, a, e) {
					e.d(a, {
						F: function() {
							return b
						}
					});
					var n = e(13920),
						t = function() {
							var v = this,
								E = v._self._c,
								y = v._self._setupProxy;
							return E("div", {
								class: v.$style.component,
								style: {
									paddingTop: `${v.showBar}px`
								}
							}, [v.showBar ? E("div", {
								class: v.$style.bar,
								style: {
									height: `${v.showBar}px`
								}
							}) : v._e(), v._v(" "), v.showError ? E("span", {
								staticClass: "icon-font-chess circle-danger",
								class: v.$style.error
							}) : v._e(), v._v(" "), v.isLoaderVisible ? E("loader-three-bounce") : v._e()], 1)
						},
						s = [],
						i = e(20023),
						r = (0, n.aZ)({
							name: "TabAsyncContent",
							components: {
								LoaderThreeBounce: i.Z
							},
							props: {
								showError: {
									type: Boolean,
									default: !1
								},
								showBar: {
									type: Number,
									default: 0
								}
							},
							data() {
								return {
									isLoaderVisible: !1,
									showLoaderTimeout: null
								}
							},
							created() {
								this.showError || (this.showLoaderTimeout = window.setTimeout(this.showLoader, 200))
							},
							beforeDestroy() {
								this.cancelLoader()
							},
							methods: {
								showLoader() {
									this.cancelLoader(), this.isLoaderVisible = !0
								},
								cancelLoader() {
									this.showLoaderTimeout && (clearTimeout(this.showLoaderTimeout), this.showLoaderTimeout = null)
								}
							}
						}),
						o = r,
						u = {
							component: "tab-async-content-component",
							error: "tab-async-content-error",
							bar: "tab-async-content-bar"
						},
						c = e(51900);

					function l(g) {
						this.$style = u.locals || u
					}
					var p = (0, c.Z)(o, t, s, !1, l, null, null),
						h = p.exports;
					const _ = (0, n.aZ)({
						extends: h,
						props: {
							showError: {
								type: Boolean,
								default: !0
							}
						}
					});

					function b(g) {
						return (0, n.RC)({
							delay: 0,
							loader: g,
							errorComponent: _,
							loadingComponent: h
						})
					}
				},
				57849: function(m, a, e) {
					e.d(a, {
						M: function() {
							return t
						}
					});
					var n = e(9085);

					function t(s) {
						return s ? !s.id && s.type ? s.type : `${s.type}-${s.id}` : n.V.Blank
					}
				},
				25507: function(m, a, e) {
					e.d(a, {
						i: function() {
							return c
						}
					});
					var n = e(82701),
						t = e.n(n),
						s = e(54752),
						i = e.n(s),
						r = e(88646);
					const o = i()();

					function u() {
						const l = t().detect() || {
							name: "unknown",
							os: "unknown"
						};
						return `${l.name}/${l.version};${l.os}`
					}

					function c() {
						return ["LC6", u(), o, (0, r.l)()].join(";")
					}
				},
				57482: function(m, a, e) {
					e.d(a, {
						G: function() {
							return n
						}
					});

					function n() {
						return {
							moveList: "",
							sans: []
						}
					}
				},
				90204: function(m, a, e) {
					e.d(a, {
						A: function() {
							return t
						}
					});
					var n = e(27713);

					function t(s) {
						return n.Ik.find(i => i.key === s)
					}
				},
				92558: function(m, a, e) {
					e.d(a, {
						W: function() {
							return n
						}
					});

					function n(t) {
						var s, i;
						const r = (i = (s = t.activityContext) == null ? void 0 : s.games) == null ? void 0 : i.find(o => o.legacyId);
						return r ? Number(r.legacyId) : null
					}
				},
				36559: function(m, a, e) {
					e.d(a, {
						r: function() {
							return s
						}
					});
					var n = e(40192);
					const t = new n.Q("live_storage");
					t.remove("liveNetwork"), t.remove("localStorageService");

					function s() {
						return t
					}
				},
				82107: function(m, a, e) {
					e.d(a, {
						Z: function() {
							return t
						}
					});

					function n(s) {
						const i = s.split(" "),
							r = i[0].split(".").map(Number),
							o = i[1].split(":").map(Number);
						return new Date(r[0], r[1] - 1, r[2], o[0], o[1], o[2])
					}

					function t(s, i, r) {
						if (!i || !r) return null;
						const o = n(i),
							u = n(r),
							c = s - u.getTime();
						return new Date(o.getTime() + c)
					}
				},
				88646: function(m, a, e) {
					e.d(a, {
						l: function() {
							return t
						}
					});

					function n(s) {
						return s.version
					}

					function t() {
						return n(e(83372))
					}
				},
				91094: function(m, a, e) {
					e.d(a, {
						e: function() {
							return n
						}
					});

					function n(t, s) {
						return t && s ? `(${t}-${s})` : t ? `(${t}+)` : s ? `(<${s})` : ""
					}
				},
				66248: function(m, a, e) {
					e.d(a, {
						J: function() {
							return t
						}
					});
					var n = e(6936);

					function t({
						username: s,
						chessTitle: i,
						rating: r,
						lightMode: o
					}) {
						const u = n.Z.generate("web_member_view", {
								username: s
							}),
							c = o ? " light-mode" : "",
							l = `<a href="${u}" target="_blank" class="user-username username${c}">${s}</a>`,
							p = i ? `<a href="/members/titled_players" target="_blank" class="user-chess-title${c}">${i}</a> ` : "",
							h = r ? ` <span class="user-rating${c}">(${r})</span>` : "";
						return `${p}${l}${h}`
					}
				},
				71203: function(m, a, e) {
					e.d(a, {
						L: function() {
							return n
						}
					});

					function n({
						timeControl: t,
						rounds: s,
						startTime: i
					}) {
						const r = Math.max(900, (2 * t.baseTime + 10) * s);
						return new Date(i.getTime() + 1e3 * r)
					}
				},
				930: function(m, a, e) {
					e.d(a, {
						t: function() {
							return n
						}
					});

					function n(t) {
						try {
							const s = ["gold", "silver", "bronze"][Number(t) - 1];
							return window.Config.trophies.arena[s]
						} catch {
							return ""
						}
					}
				},
				35790: function(m, a, e) {
					e.d(a, {
						T: function() {
							return t
						}
					});
					var n = e(45463);

					function t(s) {
						let i = "";
						return (0, n.HD)(s) ? i = s : "uuid" in s && (i = s.uuid), i
					}
				},
				51512: function(m, a, e) {
					e.d(a, {
						M: function() {
							return t
						}
					});
					var n = e(45463);

					function t(s) {
						const i = (0, n.HD)(s) ? s : s.uid || s.username;
						return i && i.includes(",") && !i.includes(" ") ? i.substring(0, i.indexOf(",")) : i ? i.toString() : ""
					}
				},
				65638: function(m, a, e) {
					e.d(a, {
						S: function() {
							return n
						}
					});

					function n(t) {
						return Boolean(t && "className" in t && /-avatar|user-username/.test(t.className))
					}
				},
				14072: function(m, a, e) {
					e.d(a, {
						r: function() {
							return t
						}
					});
					var n = e(45463);

					function t(s) {
						return (0, n.HD)(s) && /^[A-Z0-9_-]{3,}$/i.test(s)
					}
				},
				11634: function(m, a, e) {
					e.d(a, {
						C: function() {
							return n
						}
					});

					function n(t) {
						return `PT${t}S`
					}
				},
				87661: function(m, a, e) {
					e.d(a, {
						B: function() {
							return t
						}
					});
					var n = e(15875);

					function t(s) {
						let i, r, o = s.replace(/\d+\|\d+/, l => (i = l, "%timeControl%"));
						o = o.replace(/\s(Swiss|Arena)$/, (l, p) => (r = p, ""));
						const u = (0, n.dW)(o, {
							"%timeControl%": i ?? ""
						}, "messages");
						return (r ? `${u} ${(0,n.dW)(r)}` : u).replace(/-/g, " ")
					}
				},
				52117: function(m, a, e) {
					e.d(a, {
						T: function() {
							return t
						}
					});
					var n = e(15875);

					function t(s) {
						switch (s) {
							case "bughouse":
								return (0, n.dW)("Doubles (Bughouse)");
							case "chess":
								return (0, n.dW)("Standard");
							case "chess960":
								return (0, n.dW)("Chess960");
							case "crazyhouse":
								return (0, n.dW)("Crazyhouse");
							case "kingofthehill":
								return (0, n.dW)("King of the Hill");
							case "losers":
								return (0, n.dW)("Losers");
							case "oddschess":
								return (0, n.dW)("Odds Chess");
							case "threecheck":
								return (0, n.dW)("3 Check");
							default:
								return "unknown"
						}
					}
				},
				59471: function(m, a, e) {
					e.r(a), e.d(a, {
						default: function() {
							return h
						}
					});
					var n = function() {
							var b = this,
								g = b._self._c;
							return g("div", {
								directives: [{
									name: "click-outside",
									rawName: "v-click-outside",
									value: {
										handler: b.noClick,
										clickEvent: "mousedown"
									},
									expression: "{ handler: noClick, clickEvent: 'mousedown' }"
								}],
								class: b.$style.component,
								on: {
									click: function(v) {
										v.stopPropagation()
									},
									mousedown: function(v) {
										v.stopPropagation()
									}
								}
							}, [b.confirmText ? g("div", {
								class: b.$style.text,
								domProps: {
									textContent: b._s(b.confirmText)
								}
							}) : b._e(), b._v(" "), b._t("default"), b._v(" "), b._m(0), b._v(" "), b._m(1)], 2)
						},
						t = [function() {
							var _ = this,
								b = _._self._c;
							return b("v5-button", {
								attrs: {
									theme: "basic",
									size: "small",
									"data-cy": "confirm-no"
								},
								domProps: {
									textContent: _._s(_.$trans("No"))
								},
								on: {
									click: function(g) {
										return g.stopPropagation(), _.noClick.apply(null, arguments)
									}
								}
							})
						}, function() {
							var _ = this,
								b = _._self._c;
							return b("v5-button", {
								attrs: {
									theme: "primary",
									size: "small",
									"data-cy": "confirm-yes"
								},
								domProps: {
									textContent: _._s(_.$trans("Yes"))
								},
								on: {
									click: function(g) {
										return g.stopPropagation(), _.yesClick.apply(null, arguments)
									}
								}
							})
						}],
						s = e(56279),
						i = e(3491),
						r = {
							name: "ConfirmTray",
							directives: {
								clickOutside: i.Z
							},
							components: {
								V5Button: s.V5Button
							},
							props: {
								confirmText: String
							},
							emits: ["yes", "no"],
							methods: {
								noClick(_) {
									this.$emit("no", _)
								},
								yesClick(_) {
									this.$emit("yes", _)
								}
							}
						},
						o = r,
						u = {
							component: "confirm-tray-component",
							text: "confirm-tray-text"
						},
						c = e(51900);

					function l(_) {
						this.$style = u.locals || u
					}
					var p = (0, c.Z)(o, n, t, !1, l, null, null),
						h = p.exports
				},
				43537: function(m, a, e) {
					e.d(a, {
						Z: function() {
							return p
						}
					});
					var n = function() {
							var _ = this,
								b = _._self._c;
							return _.isSanctioned ? b("a", {
								directives: [{
									name: "tooltip",
									rawName: "v-tooltip",
									value: _.$trans("Click here to see our stance on the war in Ukraine"),
									expression: "$trans('Click here to see our stance on the war in Ukraine')"
								}],
								class: ["country-flags-component", `country-${_.decoratedCode}`, {
									[`country-flags-${_.size}`]: _.size
								}],
								attrs: {
									href: _.ukraineLink,
									target: "_blank"
								}
							}) : b("div", {
								directives: [{
									name: "tooltip",
									rawName: "v-tooltip",
									value: _.tooltip,
									expression: "tooltip"
								}],
								class: ["country-flags-component", `country-${_.decoratedCode}`.toLowerCase(), {
									[`country-flags-${_.size}`]: _.size
								}]
							})
						},
						t = [],
						s = e(79883),
						i = e(6936),
						r = e(66103),
						o = {
							name: "CountryFlag",
							directives: {
								tooltip: s.ZP
							},
							props: {
								code: {
									type: [Number, String],
									required: !1
								},
								name: {
									type: [String, Object],
									required: !1
								},
								size: {
									type: String,
									required: !1
								}
							},
							computed: {
								decoratedCode() {
									return this.isChessVerified || this.isSanctioned ? "sanctioned" : this.code
								},
								isChessVerified() {
									return ["fd", 431].includes(this.code)
								},
								isRussia() {
									var h;
									return ["ru", "RU", "116"].includes((h = this.code) == null ? void 0 : h.toString())
								},
								isSanctioned() {
									var h, _;
									return Boolean(((_ = (h = window.chesscom) == null ? void 0 : h.features) == null ? void 0 : _.includes("sanction_russia_flag")) && this.isRussia)
								},
								tooltip() {
									return this.isChessVerified ? r.Z.trans("Due to the ongoing war and resulting international sanctions, Russian and Belarusian flags will not be shown for players in Verified events.") : this.name
								},
								ukraineLink() {
									return i.Z.generate("web_blog_view", {
										url: "CHESScom/on-the-invasion-of-ukraine"
									})
								}
							}
						},
						u = o,
						c = e(51900),
						l = (0, c.Z)(u, n, t, !1, null, null, null),
						p = l.exports
				},
				96995: function(m, a, e) {
					e.d(a, {
						Z: function() {
							return l
						}
					});
					var n = function() {
							var h = this,
								_ = h._self._c;
							return _("div", {
								class: [h.$style.img, h.$style[h.img]]
							})
						},
						t = [],
						s = {
							name: "DirectMenuImage",
							props: {
								img: String
							},
							emits: ["click"]
						},
						i = s,
						r = {
							img: "direct-menu-image-img",
							analysis: "direct-menu-image-analysis",
							battle: "direct-menu-image-battle",
							blitz: "direct-menu-image-blitz",
							chessable: "direct-menu-image-chessable",
							classroom: "direct-menu-image-classroom",
							computer: "direct-menu-image-computer",
							daily: "direct-menu-image-daily",
							endgames: "direct-menu-image-endgames",
							friend: "direct-menu-image-friend",
							insights: "direct-menu-image-insights",
							lessons: "direct-menu-image-lessons",
							openings: "direct-menu-image-openings",
							practice: "direct-menu-image-practice",
							rated: "direct-menu-image-rated",
							rush: "direct-menu-image-rush",
							tournaments: "direct-menu-image-tournaments",
							training: "direct-menu-image-training",
							variants: "direct-menu-image-variants"
						},
						o = e(51900);

					function u(p) {
						this.$style = r.locals || r
					}
					var c = (0, o.Z)(i, n, t, !1, u, null, null),
						l = c.exports
				},
				20023: function(m, a, e) {
					e.d(a, {
						Z: function() {
							return l
						}
					});
					var n = function() {
							var h = this,
								_ = h._self._c;
							return _("div", {
								class: [h.$style.component, {
									[h.$style.circle]: h.isCircle
								}],
								style: {
									width: `${h.size}px`
								},
								attrs: {
									"data-test-element": "loader-three-bounce"
								}
							}, [_("div", {
								class: [h.$style.dot, h.$style.bounce1],
								style: h.dotCss
							}), h._v(" "), _("div", {
								class: [h.$style.dot, h.$style.bounce2],
								style: h.dotCss
							}), h._v(" "), _("div", {
								class: h.$style.dot,
								style: h.dotCss
							})])
						},
						t = [],
						s = {
							name: "LoaderThreeBounce",
							props: {
								isCircle: {
									type: Boolean,
									default: !1
								},
								size: {
									type: Number,
									default: 80
								}
							},
							computed: {
								dotCss() {
									const p = `${Math.round(this.size/4)}px`;
									return {
										width: p,
										height: p
									}
								}
							}
						},
						i = s,
						r = {
							component: "loader-three-bounce-component",
							circle: "loader-three-bounce-circle",
							dot: "loader-three-bounce-dot",
							animate: "loader-three-bounce-animate",
							bounce1: "loader-three-bounce-bounce1",
							bounce2: "loader-three-bounce-bounce2"
						},
						o = e(51900);

					function u(p) {
						this.$style = r.locals || r
					}
					var c = (0, o.Z)(i, n, t, !1, u, null, null),
						l = c.exports
				},
				69794: function(m, a, e) {
					e.d(a, {
						Z: function() {
							return _
						}
					});
					var n = function() {
							var g = this,
								v = g._self._c,
								E = g._self._setupProxy;
							return v("div", [g.isCopied && g.challengeLink ? v("v5-button", {
								class: g.$style.link,
								attrs: {
									"data-cy": "challenge-link-copy",
									"full-width": "",
									theme: g.theme
								},
								on: {
									click: g.onClickCopy
								}
							}, [v("span", {
								domProps: {
									textContent: g._s(g.challengeLink)
								}
							}), g._v(" "), v("span", {
								staticClass: "icon-font-chess ui_v5-button-icon copy",
								attrs: {
									"aria-hidden": "true"
								}
							})]) : v("v5-button", {
								attrs: {
									"data-cy": "challenge-link-copy",
									"full-width": "",
									theme: g.theme,
									disabled: g.isDisabled
								},
								on: {
									click: function(y) {
										return g.$emit("copy-link")
									}
								}
							}, [v("span", {
								staticClass: "icon-font-chess ui_v5-button-icon",
								class: g.icon,
								attrs: {
									"aria-hidden": "true"
								}
							}), g._v(" "), v("span", {
								domProps: {
									textContent: g._s(g.buttonText)
								}
							})]), g._v(" "), g.isCopied ? v("div", {
								class: g.$style.copied,
								domProps: {
									textContent: g._s(g.$trans("Challenge link will remain valid for 15 minutes"))
								}
							}) : g._e()], 1)
						},
						t = [],
						s = e(56279),
						i = e(99209),
						r = e(13920),
						o = (0, r.aZ)({
							name: "ChallengeLinkButton",
							components: {
								V5Button: s.V5Button
							},
							props: {
								challengeLink: {
									type: String,
									default: null
								},
								icon: {
									type: String,
									required: !0
								},
								label: {
									type: String,
									required: !0
								},
								theme: {
									type: String,
									required: !0
								},
								isCopied: {
									type: Boolean,
									required: !0
								},
								isDisabled: {
									type: Boolean,
									required: !0
								}
							},
							emits: ["copy-link"],
							computed: {
								buttonText() {
									return this.isCopied ? this.$trans("Copied") : this.label
								}
							},
							methods: {
								onClickCopy() {
									var b;
									(0, i.o)((b = this.challengeLink) != null ? b : "")
								}
							}
						}),
						u = o,
						c = {
							link: "challenge-link-button-link",
							copied: "challenge-link-button-copied"
						},
						l = e(51900);

					function p(b) {
						this.$style = c.locals || c
					}
					var h = (0, l.Z)(u, n, t, !1, p, null, null),
						_ = h.exports
				},
				43460: function(m, a, e) {
					e.d(a, {
						Z: function() {
							return p
						}
					});
					var n = function() {
							var _ = this,
								b = _._self._c,
								g = _._self._setupProxy;
							return b("div", {
								class: _.$style.component
							}, [b("button", {
								class: _.$style.button,
								on: {
									click: function(v) {
										return _.$emit("click", v)
									}
								}
							}, [b("span", {
								class: _.$style.label,
								domProps: {
									textContent: _._s(_.label)
								}
							}), _._v(" "), b("span", {
								staticClass: "icon-font-chess",
								class: [_.$style.icon, _.isOpen ? "chevron-up" : "chevron-bottom"]
							})])])
						},
						t = [],
						s = e(13920),
						i = (0, s.aZ)({
							name: "ToggleCustomGame",
							props: {
								isOpen: {
									type: Boolean,
									default: !1
								},
								label: {
									type: String,
									required: !0
								}
							},
							emits: ["click"]
						}),
						r = i,
						o = {
							component: "toggle-custom-game-component",
							button: "toggle-custom-game-button",
							label: "toggle-custom-game-label",
							icon: "toggle-custom-game-icon"
						},
						u = e(51900);

					function c(h) {
						this.$style = o.locals || o
					}
					var l = (0, u.Z)(r, n, t, !1, c, null, null),
						p = l.exports
				},
				74370: function(m, a, e) {
					e.d(a, {
						Z: function() {
							return w
						}
					});
					var n = function() {
							var k = this,
								O = k._self._c,
								T = k._self._setupProxy;
							return O("div", {
								attrs: {
									"data-cy": "new-game-type-selector"
								}
							}, [O("selector-button", {
								attrs: {
									icon: k.gameTypeOption.icon,
									label: k.gameTypeOption.label,
									"is-open": k.isOpen
								},
								on: {
									click: k.onToggle
								}
							}), k._v(" "), k.isOpen ? O("game-type-selector-options", {
								class: k.dropdownClass,
								attrs: {
									"show-extra-options": k.showExtraOptions,
									"selected-game-type": k.gameTypeOption.key,
									"game-type-options": k.gameTypeOptions
								},
								on: {
									"select-game-type": function(C) {
										return k.$emit("select-game-type", C)
									}
								}
							}) : k._e()], 1)
						},
						t = [],
						s = function() {
							var k = this,
								O = k._self._c,
								T = k._self._setupProxy;
							return O("selector-button-dropdown", [k._l(k.gameTypeOptions, function(C) {
								return O("selector-button-option", {
									key: C.key,
									attrs: {
										"data-cy": C.key,
										icon: C.icon,
										label: C.label,
										tooltip: C.tooltip,
										"is-selected": k.isSelected(C.key)
									},
									on: {
										click: function(D) {
											return k.onClick(C)
										}
									}
								})
							}), k._v(" "), k.showExtraOptions ? k._l(k.extraOptions, function(C) {
								return O("selector-button-option", {
									key: C.key,
									attrs: {
										"data-cy": C.key,
										icon: C.icon,
										label: C.label,
										tooltip: C.tooltip,
										"show-popout-icon": ""
									},
									on: {
										click: function(D) {
											return k.onClickExtra(C)
										}
									}
								})
							}) : k._e()], 2)
						},
						i = [],
						r = e(46362),
						o = e(28296),
						u = e(6936),
						c = e(13920),
						l = (0, c.aZ)({
							name: "GameTypeSelectorOptions",
							components: {
								SelectorButtonDropdown: r.Z,
								SelectorButtonOption: o.Z
							},
							props: {
								gameTypeOptions: {
									type: Array,
									required: !0
								},
								selectedGameType: {
									type: String,
									default: "chess"
								},
								tooltip: {
									type: String,
									default: ""
								},
								showExtraOptions: {
									type: Boolean,
									default: !1
								}
							},
							emits: ["select-game-type"],
							computed: {
								extraOptions() {
									return [{
										key: "fourPlayerChess",
										value: "fourPlayerChess",
										label: this.$trans("4 Player Chess"),
										icon: "four-ffa",
										tooltip: this.$trans("Play 2 on 2 or free for all"),
										route: u.Z.generate("web_chess_variants", {
											variant: "4-player-chess"
										}, !0)
									}, {
										key: "variants",
										value: "variants",
										label: this.$trans("More Variants"),
										icon: "variants",
										tooltip: this.$trans("Atomic, Fog Of War, 4 Player Chess, and MORE!"),
										route: u.Z.generate("web_chess_variants", {}, !0)
									}, {
										key: "classroom",
										value: "classroom",
										label: this.$trans("Classroom (Analysis Board)"),
										icon: "classroom",
										tooltip: this.$trans("Create a shared board for coaching and real-time game analysis"),
										route: u.Z.generate("web_classroom", {}, !0)
									}]
								}
							},
							methods: {
								onClick(P) {
									this.$emit("select-game-type", {
										gameType: P
									})
								},
								onClickExtra(P) {
									P.route && window.open(P.route)
								},
								isSelected(P) {
									return P === this.selectedGameType
								}
							}
						}),
						p = l,
						h = e(51900),
						_ = (0, h.Z)(p, s, i, !1, null, null, null),
						b = _.exports,
						g = e(66166),
						v = (0, c.aZ)({
							name: "GameTypeSelector",
							components: {
								SelectorButton: g.Z,
								GameTypeSelectorOptions: b
							},
							props: {
								dropdownClass: {
									type: String,
									default: ""
								},
								gameTypeOptions: {
									type: Array,
									required: !0
								},
								isOpen: {
									type: Boolean,
									default: !1
								},
								selectedGameType: {
									type: String,
									default: "chess"
								},
								showExtraOptions: {
									type: Boolean,
									default: !1
								}
							},
							emits: ["select-game-type", "click-game-type"],
							computed: {
								gameTypeOption() {
									return this.gameTypeOptions.find(P => P.key === this.selectedGameType) || this.gameTypeOptions.find(P => P.key === "chess") || this.gameTypeOptions[0]
								}
							},
							methods: {
								onToggle() {
									this.$emit("click-game-type")
								}
							}
						}),
						E = v,
						y = (0, h.Z)(E, n, t, !1, null, null, null),
						w = y.exports
				},
				46362: function(m, a, e) {
					e.d(a, {
						Z: function() {
							return p
						}
					});
					var n = function() {
							var _ = this,
								b = _._self._c,
								g = _._self._setupProxy;
							return b("div", {
								class: _.$style.component
							}, [_._t("default")], 2)
						},
						t = [],
						s = e(13920),
						i = (0, s.aZ)({
							name: "SelectorButtonDropdown"
						}),
						r = i,
						o = {
							component: "selector-button-dropdown-component"
						},
						u = e(51900);

					function c(h) {
						this.$style = o.locals || o
					}
					var l = (0, u.Z)(r, n, t, !1, c, null, null),
						p = l.exports
				},
				28296: function(m, a, e) {
					e.d(a, {
						Z: function() {
							return h
						}
					});
					var n = function() {
							var b = this,
								g = b._self._c,
								v = b._self._setupProxy;
							return g("button", {
								class: b.componentClasses,
								on: {
									click: function(E) {
										return b.$emit("click", E)
									}
								}
							}, [g("span", {
								staticClass: "icon-font-chess",
								class: [b.$style.icon, b.icon]
							}), b._v(" "), g("span", {
								class: b.$style.label,
								domProps: {
									textContent: b._s(b.label)
								}
							}), b._v(" "), b.showPopoutIcon ? g("span", {
								staticClass: "icon-font-chess square-out",
								class: b.$style.popout
							}) : b._e(), b._v(" "), b.tooltip ? g("span", {
								directives: [{
									name: "tooltip",
									rawName: "v-tooltip",
									value: b.tooltipData,
									expression: "tooltipData"
								}],
								staticClass: "icon-font-chess circle-info",
								class: b.$style.help
							}) : b._e()])
						},
						t = [],
						s = e(79883),
						i = e(13920),
						r = (0, i.aZ)({
							name: "SelectorButtonOption",
							directives: {
								tooltip: s.ZP
							},
							props: {
								icon: {
									type: String,
									required: !0
								},
								label: {
									type: String,
									required: !0
								},
								tooltip: {
									type: String,
									default: ""
								},
								isSelected: {
									type: Boolean,
									default: !1
								},
								showPopoutIcon: {
									type: Boolean,
									default: !1
								}
							},
							emits: ["click"],
							computed: {
								componentClasses() {
									return {
										[this.$style.button]: !0,
										[this.$style.selected]: this.isSelected
									}
								},
								tooltipData() {
									return {
										content: this.tooltip,
										position: "left"
									}
								}
							}
						}),
						o = r,
						u = {
							button: "selector-button-option-button",
							selected: "selector-button-option-selected",
							label: "selector-button-option-label",
							icon: "selector-button-option-icon",
							popout: "selector-button-option-popout",
							help: "selector-button-option-help"
						},
						c = e(51900);

					function l(_) {
						this.$style = u.locals || u
					}
					var p = (0, c.Z)(o, n, t, !1, l, null, null),
						h = p.exports
				},
				66166: function(m, a, e) {
					e.d(a, {
						Z: function() {
							return p
						}
					});
					var n = function() {
							var _ = this,
								b = _._self._c,
								g = _._self._setupProxy;
							return b("button", {
								class: _.$style.button,
								on: {
									click: function(v) {
										return _.$emit("click", v)
									}
								}
							}, [b("span", {
								staticClass: "icon-font-chess",
								class: [_.$style.icon, _.icon]
							}), _._v(" "), b("span", {
								class: _.$style.label,
								domProps: {
									textContent: _._s(_.label)
								}
							}), _._v(" "), b("span", {
								staticClass: "icon-font-chess",
								class: [_.$style.chevron, _.isOpen ? "chevron-up" : "chevron-bottom"]
							})])
						},
						t = [],
						s = e(13920),
						i = (0, s.aZ)({
							name: "SelectorButton",
							props: {
								icon: {
									type: [Array, String],
									required: !0
								},
								label: {
									type: String,
									required: !0
								},
								isOpen: {
									type: Boolean,
									default: !1
								}
							},
							emits: ["click"]
						}),
						r = i,
						o = {
							button: "selector-button-button",
							label: "selector-button-label",
							chevron: "selector-button-chevron",
							icon: "selector-button-icon"
						},
						u = e(51900);

					function c(h) {
						this.$style = o.locals || o
					}
					var l = (0, u.Z)(r, n, t, !1, c, null, null),
						p = l.exports
				},
				52597: function(m, a, e) {
					e.d(a, {
						Z: function() {
							return Ke
						}
					});
					var n = function() {
							var R = this,
								ee = R._self._c,
								ye = R._self._setupProxy;
							return ee("div", {
								attrs: {
									"data-cy": "new-game-time-selector"
								}
							}, [ee("selector-button", {
								attrs: {
									icon: ["icon-colored", R.selectedIcon],
									label: R.selectedLabel,
									"is-open": R.isOpen,
									"data-cy": "new-game-time-selector-button"
								},
								on: {
									click: function(de) {
										return R.$emit("click-time", de)
									}
								}
							}), R._v(" "), !R.isOpen && R.isRecentTimeControlsPinned ? ee("recent-time-category", {
								attrs: {
									"data-cy": "new-game-time-selector-category-recent",
									"header-visible": !1,
									"selected-time": R.selectedTime,
									"time-controls": R.recentTimeControls
								},
								on: {
									"select-time": function(de) {
										return R.$emit("select-time", de)
									}
								}
							}) : R._e(), R._v(" "), R.isOpen ? ee("time-selector-options", {
								class: R.dropdownClass,
								attrs: {
									"recent-time-controls": R.recentTimeControls,
									"selected-time": R.selectedTime,
									"is-guest": R.isGuest,
									"is-logged-in": R.isLoggedIn,
									"is-recent-time-controls-pinned": R.isRecentTimeControlsPinned
								},
								on: {
									"select-time": function(de) {
										return R.$emit("select-time", de)
									},
									"click-recent-time-controls-pin": function(de) {
										return R.$emit("click-recent-time-controls-pin", de)
									}
								}
							}) : R._e()], 1)
						},
						t = [],
						s = e(66166),
						i = function() {
							var R = this,
								ee = R._self._c,
								ye = R._self._setupProxy;
							return ee("recent-time-section", {
								attrs: {
									"header-visible": R.headerVisible,
									"is-pinned": R.isPinned
								},
								on: {
									"select-pin": function(de) {
										return R.$emit("select-pin", de)
									}
								}
							}, [ee("time-selector-field", R._l(R.timeControls, function(de, ft) {
								return ee("time-selector-button", {
									key: de.key || ft,
									attrs: {
										"data-cy": `time-selector-category-${de.key}`,
										"time-control": de,
										"selected-time": R.selectedTime,
										"highlight-selected": !1,
										"is-loading": de.timeType === "none"
									},
									on: {
										click: function(ct) {
											return R.onSelectTime(de)
										}
									}
								})
							}), 1)], 1)
						},
						r = [],
						o = function() {
							var R = this,
								ee = R._self._c,
								ye = R._self._setupProxy;
							return ee("div", {
								class: R.$style.component
							}, [R.headerVisible ? ee("div", {
								class: R.$style.header
							}, [ee("span", {
								staticClass: "icon-font-chess icon-colored circle-clock-alt",
								class: R.$style.icon
							}), R._v(" "), ee("span", {
								class: R.$style.label,
								domProps: {
									textContent: R._s(R.$trans("Recent"))
								}
							}), R._v(" "), ee("div", {
								class: R.$style.pin,
								on: {
									click: function(de) {
										return R.$emit("select-pin", de)
									}
								}
							}, [ee("span", {
								staticClass: "icon-font-chess icon-colored pushpin",
								class: R.$style.icon
							}), R._v(" "), ee("span", {
								domProps: {
									textContent: R._s(R.isPinned ? R.$trans("Unpin") : R.$trans("Pin"))
								}
							})])]) : R._e(), R._v(" "), R._t("default")], 2)
						},
						u = [],
						c = e(13920),
						l = (0, c.aZ)({
							name: "RecentTimeSection",
							props: {
								headerVisible: {
									type: Boolean,
									default: !0
								},
								isPinned: {
									type: Boolean,
									default: !1
								}
							},
							emits: ["select-pin"]
						}),
						p = l,
						h = {
							component: "recent-time-section-component",
							header: "recent-time-section-header",
							label: "recent-time-section-label",
							pin: "recent-time-section-pin",
							icon: "recent-time-section-icon"
						},
						_ = e(51900);

					function b(oe) {
						this.$style = h.locals || h
					}
					var g = (0, _.Z)(p, o, u, !1, b, null, null),
						v = g.exports,
						E = function() {
							var R = this,
								ee = R._self._c,
								ye = R._self._setupProxy;
							return ee("button", {
								class: R.componentClasses,
								attrs: {
									"data-cy": `time-selector-category-${R.timeControl.key}`
								},
								domProps: {
									textContent: R._s(R.label)
								},
								on: {
									click: function(de) {
										return R.$emit("click", de)
									}
								}
							})
						},
						y = [],
						w = e(5148),
						P = (0, c.aZ)({
							name: "TimeSelectorButton",
							props: {
								selectedTime: {
									type: Object,
									required: !0
								},
								timeControl: {
									type: Object,
									required: !0
								},
								highlightSelected: {
									type: Boolean,
									default: !0
								},
								isLoading: {
									type: Boolean,
									default: !1
								}
							},
							emits: ["click"],
							computed: {
								label() {
									return this.isLoading ? "" : (0, w.X)(this.timeControl)
								},
								componentClasses() {
									return {
										[this.$style.button]: !0,
										[this.$style.loading]: this.isLoading,
										[this.$style.selected]: this.highlightSelected ? this.timeControl.key === this.selectedTime.key : !1
									}
								}
							}
						}),
						k = P,
						O = {
							button: "time-selector-button-button",
							loading: "time-selector-button-loading",
							selected: "time-selector-button-selected"
						};

					function T(oe) {
						this.$style = O.locals || O
					}
					var C = (0, _.Z)(k, E, y, !1, T, null, null),
						D = C.exports,
						L = function() {
							var R = this,
								ee = R._self._c,
								ye = R._self._setupProxy;
							return ee("div", {
								class: R.$style.component
							}, [R._t("default")], 2)
						},
						x = [],
						W = (0, c.aZ)({
							name: "TimeSelectorField"
						}),
						z = W,
						F = {
							component: "time-selector-field-component"
						};

					function V(oe) {
						this.$style = F.locals || F
					}
					var Z = (0, _.Z)(z, L, x, !1, V, null, null),
						A = Z.exports,
						S = e(79883),
						j = (0, c.aZ)({
							name: "RecentTimeCategory",
							directives: {
								tooltip: S.ZP
							},
							components: {
								TimeSelectorButton: D,
								TimeSelectorField: A,
								RecentTimeSection: v
							},
							props: {
								selectedTime: {
									type: Object,
									required: !0
								},
								timeControls: {
									type: Array,
									required: !0
								},
								isPinned: {
									type: Boolean,
									default: !1
								},
								headerVisible: {
									type: Boolean,
									default: !0
								}
							},
							emits: ["select-time", "select-pin"],
							methods: {
								onSelectTime(oe) {
									this.$emit("select-time", {
										time: oe
									})
								}
							}
						}),
						J = j,
						_e = (0, _.Z)(J, i, r, !1, null, null, null),
						we = _e.exports,
						G = function() {
							var R = this,
								ee = R._self._c,
								ye = R._self._setupProxy;
							return ee("div", [R.canSeeRecentTimeControls ? ee("recent-time-category", {
								attrs: {
									"data-cy": "new-game-time-selector-category-recent",
									"selected-time": R.selectedTime,
									"time-controls": R.recentTimeControls,
									"is-pinned": R.isRecentTimeControlsPinned
								},
								on: {
									"select-time": R.onSelectTime,
									"select-pin": R.onClickRecentTimeControlsPin
								}
							}) : R._e(), R._v(" "), ee("time-selector-category", {
								attrs: {
									"data-cy": "new-game-time-selector-category-bullet",
									icon: "bullet",
									label: R.$trans("Bullet"),
									"selected-time": R.selectedTime,
									"time-controls": R.getTimeControlsForCategory("bullet")
								},
								on: {
									"select-time": R.onSelectTime
								}
							}), R._v(" "), ee("time-selector-category", {
								attrs: {
									"data-cy": "new-game-time-selector-category-blitz",
									icon: "blitz",
									label: R.$trans("Blitz"),
									"selected-time": R.selectedTime,
									"time-controls": R.getTimeControlsForCategory("blitz")
								},
								on: {
									"select-time": R.onSelectTime
								}
							}), R._v(" "), ee("time-selector-category", {
								attrs: {
									"data-cy": "new-game-time-selector-category-rapid",
									icon: "rapid",
									label: R.$trans("Rapid"),
									"selected-time": R.selectedTime,
									"time-controls": R.getTimeControlsForCategory("rapid")
								},
								on: {
									"select-time": R.onSelectTime
								}
							}), R._v(" "), R.canSeeMoreTimeControls ? ee("time-selector-category", {
								attrs: {
									"data-cy": "new-game-time-selector-category-daily",
									icon: "daily",
									label: R.$trans("daily", {}, "mobile"),
									"selected-time": R.selectedTime,
									"time-controls": R.getTimeControlsForCategory("daily")
								},
								on: {
									"select-time": R.onSelectTime
								}
							}) : R._e(), R._v(" "), R.isShowingMore ? ee("time-selector-custom", {
								attrs: {
									"base-seconds": R.customBaseSeconds,
									"base-time": R.customBaseTime,
									"time-increment": R.customTimeIncrement
								},
								on: {
									"input-base-seconds": R.onInputCustomBaseSeconds,
									"input-base-time": R.onInputCustomBaseTime,
									"input-time-increment": R.onInputCustomTimeIncrement,
									submit: R.onSubmitCustom
								}
							}) : R._e(), R._v(" "), R.canSeeMoreTimeControls ? ee("toggle-custom-game", {
								attrs: {
									"is-open": R.isShowingMore,
									label: R.isShowingMore ? R.$trans("Fewer Time Controls") : R.$trans("More Time Controls")
								},
								on: {
									click: R.onClickMore
								}
							}) : R._e()], 1)
						},
						X = [],
						re = e(43460),
						ge = function() {
							var R = this,
								ee = R._self._c,
								ye = R._self._setupProxy;
							return ee("time-selector-section", {
								attrs: {
									icon: R.icon,
									label: R.label
								}
							}, [ee("time-selector-field", R._l(R.timeControls, function(de) {
								return ee("time-selector-button", {
									key: de.key,
									attrs: {
										"time-control": de,
										"selected-time": R.selectedTime
									},
									on: {
										click: function(ft) {
											return R.onSelectTime(de)
										}
									}
								})
							}), 1)], 1)
						},
						ve = [],
						We = function() {
							var R = this,
								ee = R._self._c,
								ye = R._self._setupProxy;
							return ee("div", {
								class: R.$style.component
							}, [ee("div", {
								class: R.$style.header
							}, [ee("span", {
								staticClass: "icon-font-chess icon-colored",
								class: [R.$style.icon, R.icon]
							}), R._v(" "), ee("span", {
								class: R.$style.label,
								domProps: {
									textContent: R._s(R.label)
								}
							}), R._v(" "), R.icon === "daily" ? ee("span", {
								directives: [{
									name: "tooltip",
									rawName: "v-tooltip",
									value: R.$trans("Select the amount of time each player has to make a move."),
									expression: "$trans('Select the amount of time each player has to make a move.')"
								}],
								staticClass: "icon-font-chess circle-info",
								class: R.$style.info
							}) : R._e()]), R._v(" "), R._t("default")], 2)
						},
						ie = [],
						qe = (0, c.aZ)({
							name: "TimeSelectorSection",
							directives: {
								tooltip: S.ZP
							},
							props: {
								icon: {
									type: String,
									required: !0
								},
								label: {
									type: String,
									required: !0
								}
							}
						}),
						K = qe,
						U = {
							component: "time-selector-section-component",
							header: "time-selector-section-header",
							label: "time-selector-section-label",
							icon: "time-selector-section-icon",
							info: "time-selector-section-info"
						};

					function N(oe) {
						this.$style = U.locals || U
					}
					var q = (0, _.Z)(K, We, ie, !1, N, null, null),
						Y = q.exports,
						ue = (0, c.aZ)({
							name: "TimeSelectorCategory",
							directives: {
								tooltip: S.ZP
							},
							components: {
								TimeSelectorButton: D,
								TimeSelectorField: A,
								TimeSelectorSection: Y
							},
							props: {
								icon: {
									type: String,
									required: !1,
									default: ""
								},
								label: {
									type: String,
									required: !1,
									default: ""
								},
								selectedTime: {
									type: Object,
									required: !0
								},
								timeControls: {
									type: Array,
									required: !0
								}
							},
							emits: ["select-time"],
							methods: {
								onSelectTime(oe) {
									this.$emit("select-time", {
										time: oe
									})
								}
							}
						}),
						fe = ue,
						Te = (0, _.Z)(fe, ge, ve, !1, null, null, null),
						Je = Te.exports,
						ae = function() {
							var R = this,
								ee = R._self._c;
							return ee("time-selector-section", {
								attrs: {
									icon: "edit-time",
									label: R.$trans("Custom")
								}
							}, [ee("form", {
								class: R.$style.component,
								on: {
									submit: function(ye) {
										return ye.preventDefault(), R.$emit("submit")
									}
								}
							}, [ee("v5-input", {
								directives: [{
									name: "tooltip",
									rawName: "v-tooltip",
									value: R.$trans("Minutes"),
									expression: "$trans('Minutes')"
								}],
								attrs: {
									size: "large",
									type: "number",
									placeholder: R.$trans("min"),
									value: R.baseTime
								},
								on: {
									input: function(ye) {
										return R.onInput("base-time", ye)
									}
								}
							}), R._v(" "), ee("v5-input", {
								directives: [{
									name: "tooltip",
									rawName: "v-tooltip",
									value: R.$trans("Seconds"),
									expression: "$trans('Seconds')"
								}],
								attrs: {
									size: "large",
									type: "number",
									placeholder: R.$trans("sec"),
									value: R.baseSeconds
								},
								on: {
									input: function(ye) {
										return R.onInput("base-seconds", ye)
									}
								}
							}), R._v(" "), ee("v5-input", {
								directives: [{
									name: "tooltip",
									rawName: "v-tooltip",
									value: R.$trans("Increment"),
									expression: "$trans('Increment')"
								}],
								attrs: {
									size: "large",
									type: "number",
									placeholder: R.$trans("inc"),
									value: R.timeIncrement
								},
								on: {
									input: function(ye) {
										return R.onInput("time-increment", ye)
									}
								}
							}), R._v(" "), ee("v5-button", {
								class: R.$style.submit,
								attrs: {
									size: "small",
									"full-width": "",
									type: "submit",
									theme: "basic"
								}
							}, [ee("span", {
								staticClass: "icon-font-chess arrow-right",
								class: R.$style.icon
							})])], 1)])
						},
						st = [],
						Ze = e(56279),
						at = {
							name: "TimeSelectorCustom",
							directives: {
								tooltip: S.ZP
							},
							components: {
								V5Button: Ze.V5Button,
								V5Input: Ze.V5Input,
								TimeSelectorSection: Y
							},
							props: {
								baseSeconds: [Number, null],
								baseTime: [Number, null],
								timeIncrement: [Number, null]
							},
							emits: ["submit"],
							methods: {
								onInput(oe, R) {
									this.$emit(`input-${oe}`, {
										value: Number(R)
									})
								}
							}
						},
						Fe = at,
						Ve = {
							component: "time-selector-custom-component",
							submit: "time-selector-custom-submit",
							icon: "time-selector-custom-icon"
						};

					function et(oe) {
						this.$style = Ve.locals || Ve
					}
					var it = (0, _.Z)(Fe, ae, st, !1, et, null, null),
						Be = it.exports,
						Ge = e(38135),
						pe = e(83187),
						Ee = e(3832),
						_t = (0, c.aZ)({
							name: "TimeSelectorOptions",
							directives: {
								tooltip: S.ZP
							},
							components: {
								RecentTimeCategory: we,
								TimeSelectorCategory: Je,
								ToggleCustomGame: re.Z,
								TimeSelectorCustom: Be
							},
							props: {
								isOpen: {
									type: Boolean,
									default: !1
								},
								isGuest: {
									type: Boolean,
									default: !1
								},
								isLoggedIn: {
									type: Boolean,
									default: !1
								},
								selectedTime: {
									type: Object,
									required: !0
								},
								recentTimeControls: {
									type: Array,
									required: !0
								},
								isRecentTimeControlsPinned: {
									type: Boolean,
									default: !1
								}
							},
							emits: ["select-time", "click-recent-time-controls-pin"],
							data() {
								return {
									customBaseSeconds: null,
									customBaseTime: null,
									customTimeIncrement: null,
									isShowingMore: !1
								}
							},
							computed: {
								timeOptions() {
									return ["60", "60|1", `${2*60}|1`, `${3*60}`, `${3*60}|2`, `${5*60}`, `${10*60}`, `${15*60}|10`, `${30*60}`, "1d", "3d", "7d"]
								},
								moreTimeOptions() {
									return [...Ge.eA, ...Ge.xB]
								},
								timeControls() {
									return (this.isShowingMore ? this.moreTimeOptions : this.timeOptions).map(pe.B)
								},
								canSeeMoreTimeControls() {
									return this.isLoggedIn && !this.isGuest
								},
								canSeeRecentTimeControls() {
									return Boolean(this.recentTimeControls && this.recentTimeControls.length > 2)
								}
							},
							methods: {
								getTimeControlsForCategory(oe) {
									return this.timeControls.filter(R => (0, Ee.L)(R) === oe)
								},
								onClickMore() {
									this.isShowingMore = !this.isShowingMore
								},
								onClickRecentTimeControlsPin(oe) {
									this.$emit("click-recent-time-controls-pin", oe)
								},
								onInputCustomBaseSeconds({
									value: oe
								}) {
									this.customBaseSeconds = oe
								},
								onInputCustomBaseTime({
									value: oe
								}) {
									this.customBaseTime = oe
								},
								onInputCustomTimeIncrement({
									value: oe
								}) {
									this.customTimeIncrement = oe
								},
								onSelectTime(oe) {
									this.$emit("select-time", oe)
								},
								onSubmitCustom() {
									const oe = this.customBaseTime || 0,
										R = this.customBaseSeconds || 0,
										ee = oe * 60 + R;
									if (ee >= 10) {
										const ye = (0, pe.B)({
											baseTime: ee,
											timeIncrement: this.customTimeIncrement || 0,
											timeType: "live"
										});
										ye.isCustom = !0, this.$emit("select-time", {
											time: ye
										})
									}
								}
							}
						}),
						ot = _t,
						gt = (0, _.Z)(ot, G, X, !1, null, null, null),
						rt = gt.exports,
						pt = e(31619),
						Bt = (0, c.aZ)({
							name: "TimeSelector",
							directives: {
								tooltip: S.ZP
							},
							components: {
								SelectorButton: s.Z,
								TimeSelectorOptions: rt,
								RecentTimeCategory: we
							},
							props: {
								dropdownClass: {
									type: String,
									default: ""
								},
								isGuest: {
									type: Boolean,
									default: !1
								},
								isLoggedIn: {
									type: Boolean,
									default: !0
								},
								isOpen: {
									type: Boolean,
									default: !1
								},
								isRecentTimeControlsPinned: {
									type: Boolean,
									default: !1
								},
								recentTimeControls: {
									type: Array,
									default: () => []
								},
								selectedTime: {
									type: Object,
									required: !0
								}
							},
							emits: ["select-time", "click-time", "click-recent-time-controls-pin"],
							computed: {
								selectedLabel() {
									return (0, w.X)(this.selectedTime)
								},
								selectedIcon() {
									return (0, pt.N)(this.selectedTime)
								}
							}
						}),
						At = Bt,
						lt = (0, _.Z)(At, n, t, !1, null, null, null),
						Ke = lt.exports
				},
				51798: function(m, a, e) {
					e.d(a, {
						Z: function() {
							return h
						}
					});
					var n = function() {
							var b = this,
								g = b._self._c;
							return g("img", {
								class: b.$style.component,
								attrs: {
									"data-cy": "avatar",
									alt: b.alt,
									src: b.avatarUrl,
									srcset: b.avatarSrcset,
									width: b.width,
									height: b.height
								},
								on: {
									error: b.onError,
									click: function(v) {
										return b.$emit("click", v)
									}
								}
							})
						},
						t = [],
						s = e(31152),
						i = e(4143),
						r = {
							name: "Avatar",
							props: {
								alt: {
									type: String,
									default: ""
								},
								src: {
									type: String,
									default: ""
								},
								width: {
									type: [Number, String],
									default: "50"
								},
								height: {
									type: [Number, String],
									default: "50"
								}
							},
							emits: ["click"],
							data() {
								return {
									failed: !1,
									failedSrcSet: !1,
									defaultAvatar: (0, s.n)("bundles/web/images/user-image.svg")
								}
							},
							computed: {
								avatarSrcset() {
									return this.failedSrcSet ? null : (0, i.b)(this.avatarUrl)
								},
								avatarUrl() {
									return this.failed || !this.src ? this.defaultAvatar : this.src
								}
							},
							watch: {
								src(_, b) {
									_ !== b && (this.failed = !1, this.failedSrcSet = !1)
								}
							},
							methods: {
								onError() {
									this.avatarSrcset ? this.failedSrcSet = !0 : this.failed = !0
								}
							}
						},
						o = r,
						u = {
							component: "avatar-component"
						},
						c = e(51900);

					function l(_) {
						this.$style = u.locals || u
					}
					var p = (0, c.Z)(o, n, t, !1, l, null, null),
						h = p.exports
				},
				31394: function(m, a, e) {
					e.d(a, {
						Z: function() {
							return l
						}
					});
					var n = function() {
							var h = this,
								_ = h._self._c;
							return _("div", {
								class: h.$style.component
							}, [_("div", {
								class: [h.$style.square, h.squareColor, {
									[h.$style.round]: h.size > 2
								}],
								style: h.squareStyle
							})])
						},
						t = [],
						s = {
							name: "PresenceSquare",
							props: {
								size: {
									type: Number,
									required: !1,
									default: 3
								},
								userPresence: {
									type: Object,
									required: !0
								}
							},
							computed: {
								squareColor() {
									var p, h;
									return (p = this.userPresence) != null && p.isPlaying ? this.$style.red : (h = this.userPresence) != null && h.isOnline ? this.$style.green : ""
								},
								squareStyle() {
									return `width: ${this.size}rem; height: ${this.size}rem;`
								}
							}
						},
						i = s,
						r = {
							component: "presence-square-component",
							square: "presence-square-square",
							round: "presence-square-round",
							red: "presence-square-red",
							green: "presence-square-green"
						},
						o = e(51900);

					function u(p) {
						this.$style = r.locals || r
					}
					var c = (0, o.Z)(i, n, t, !1, u, null, null),
						l = c.exports
				},
				85154: function(m, a, e) {
					e.d(a, {
						Z: function() {
							return h
						}
					});
					var n = function() {
							var b = this,
								g = b._self._c;
							return b.isLink ? g("a", {
								directives: [{
									name: "tooltip",
									rawName: "v-tooltip",
									value: b.fullTitle,
									expression: "fullTitle"
								}],
								class: b.$style.component,
								attrs: {
									href: b.url,
									target: b.target
								},
								domProps: {
									textContent: b._s(b.title)
								}
							}) : g("span", {
								directives: [{
									name: "tooltip",
									rawName: "v-tooltip",
									value: b.fullTitle,
									expression: "fullTitle"
								}],
								class: b.$style.component,
								domProps: {
									textContent: b._s(b.title)
								}
							})
						},
						t = [],
						s = e(99670),
						i = e(79883),
						r = {
							name: "UserChessTitle",
							directives: {
								Tooltip: i.ZP
							},
							props: {
								title: {
									type: String,
									required: !0
								},
								url: {
									type: String,
									required: !1
								},
								openNewTab: {
									type: Boolean,
									required: !1
								}
							},
							data() {
								return {
									fullTitle: s.rP[this.title]
								}
							},
							computed: {
								isLink() {
									return Boolean(this.url)
								},
								target() {
									return this.openNewTab ? "_blank" : null
								}
							}
						},
						o = r,
						u = {
							component: "user-chess-title-component"
						},
						c = e(51900);

					function l(_) {
						this.$style = u.locals || u
					}
					var p = (0, c.Z)(o, n, t, !1, l, null, null),
						h = p.exports
				},
				96302: function(m, a, e) {
					e.d(a, {
						Z: function() {
							return we
						}
					});
					var n = function() {
							var X = this,
								re = X._self._c;
							return X.showUserFlair ? re("a", {
								class: X.$style.component,
								attrs: {
									"aria-label": X.flairTooltip,
									href: X.flairHref
								},
								on: {
									click: function(ge) {
										return ge.stopPropagation(), ge.preventDefault(), X.handleFlairClick.apply(null, arguments)
									}
								}
							}, [re("flair", {
								directives: [{
									name: "tooltip",
									rawName: "v-tooltip",
									value: X.flairTooltip,
									expression: "flairTooltip"
								}],
								attrs: {
									code: X.code,
									size: X.size
								}
							})], 1) : X._e()
						},
						t = [],
						s = e(99670),
						i = function() {
							var X = this,
								re = X._self._c;
							return X.showTheNothingFlair || !X.isNothing ? re("span", {
								class: ["flair-component", `flair-${X.code}`, `flair-${X.size}`],
								on: {
									click: function(ge) {
										return X.$emit("click", ge)
									}
								}
							}) : X._e()
						},
						r = [],
						o = {
							name: "Flair",
							props: {
								available: {
									type: Boolean,
									default: !0
								},
								showTheNothingFlair: {
									type: Boolean,
									default: !1
								},
								code: {
									type: String,
									default: s.Wp.code
								},
								size: {
									type: String
								}
							},
							emits: ["click"],
							computed: {
								isNothing() {
									return this.code === s.Wp.code
								}
							}
						},
						u = o,
						c = e(51900),
						l = (0, c.Z)(u, i, r, !1, null, null, null),
						p = l.exports,
						h = e(79883),
						_ = e(90040),
						b = e(66103);
					const g = {
							BLOCK_USER: "web_member_callback_block_member",
							DELETE_NOTE: "web_user_callback_delete_comment",
							GET_AVAILABLE_FLAIR: "web_user_callback_get_available_flair",
							LOAD_NOTES: "web_user_callback_load_notes",
							MUTE_USER_TEMPORARY: "web_member_callback_mute_account",
							POST_NOTE: "web_user_callback_post_note",
							SET_FLAIR: "web_user_callback_set_flair",
							SET_FLAIR_STATUS: "web_user_callback_set_status",
							SETTINGS: "web_user_settings_edit",
							USER_URL: "web_member_view"
						},
						v = "#flair-modal",
						E = {
							blockUser: G => (0, _.b)(g.BLOCK_USER, {
								username: G
							}),
							communityGuidelines: () => (0, _.b)("web_policies_community"),
							deleteNote: G => (0, _.b)(g.DELETE_NOTE, {
								id: G
							}),
							disableAccount: G => (0, _.b)("web_member_callback_disable", {
								id: G
							}),
							enableAccount: G => (0, _.b)("web_member_enable", {
								id: G
							}),
							getFlair: G => (0, _.b)(g.GET_AVAILABLE_FLAIR, {
								username: G
							}),
							impersonateUser: G => (0, _.b)("web_user_home", {
								_impersonate: G
							}),
							loadNotes: (G, X, re) => (0, _.b)(g.LOAD_NOTES, {
								userId: G,
								itemsPerPage: X,
								page: re
							}),
							masterPlayerLink: G => (0, _.b)("web_master_player_view", {
								url: G
							}),
							muteUser: G => (0, _.b)("web_member_mute", {
								username: G
							}),
							muteUserTemporary: G => (0, _.b)(g.MUTE_USER_TEMPORARY, {
								user: G
							}),
							postNote: () => (0, _.b)(g.POST_NOTE),
							removeAvatar: G => (0, _.b)("web_member_callback_remove_avatar", {
								username: G
							}),
							removeBackground: G => (0, _.b)("web_user_callback_remove_user_custom_background", {
								user: G
							}),
							resetFlair: G => (0, _.b)("web_member_reset_flair", {
								username: G
							}),
							setCode: () => (0, _.b)(g.SET_FLAIR),
							setFlairStatus: () => (0, _.b)(g.SET_FLAIR_STATUS),
							settings: () => (0, _.b)(g.SETTINGS),
							stopImpersonateUser: (G, X) => (0, _.b)(G, X),
							unmuteUser: G => (0, _.b)("web_member_unmute", {
								username: G
							}),
							userUrl: G => (0, _.b)(g.USER_URL, {
								username: G
							})
						},
						y = {
							NOTES_GAMES_CONTAINER: "notes-games-container",
							PROFILE_ACTIONS: "profile-actions",
							PROFILE_NOTES_BTN: "profile-notes-btn",
							PROFILE_NOTES_BTN_OPENED: "profile-notes-btn-opened",
							PROFILE_NOTES_COLLAPSE: "profile-notes-collapse",
							PROFILE_NOTES_COLLAPSE_SHOW: "profile-notes-collapse-show",
							PROFILE_STREAM: "profile-stream",
							ROOT_PROFILE: "view-profile",
							STOP_IMPERSONATE: "stop-impersonate",
							USER_STATUS: "user-profile-status"
						},
						w = 50,
						P = {
							disableAccountConfirm: b.Z.trans("Are you sure you want to disable this account?"),
							editStatus: b.Z.trans("Edit status"),
							enableAccountConfirm: b.Z.trans("Are you sure you want to enable this account?"),
							enterStatus: b.Z.trans("Enter a status here"),
							impersonateConfirm: b.Z.trans("Are you sure you want to impersonate this user?"),
							muteError: b.Z.trans("Error occurred"),
							muteUserConfirm: b.Z.trans("Are you sure you want to mute this user?"),
							removeAboutConfirm: b.Z.trans("Are you sure you want to remove user About section?"),
							removeAvatarConfirm: b.Z.trans("Are you sure you want to remove this user's avatar?"),
							removeBackgroundConfirm: b.Z.trans("Are you sure you want to remove this user's background?"),
							removeFriendConfirm: G => b.Z.trans("Are you sure you want to remove %friend%?", {
								"%friend%": G
							}),
							reportSpamConfirm: b.Z.trans("Are you sure you want to report user for spamming?"),
							resetFlairConfirm: b.Z.trans("Are you sure you want to reset this user's flair?"),
							saveStatus: b.Z.trans("Save status"),
							statusTooLong: b.Z.trans("Your status must be %len% characters or less", {
								"%len%": w
							}),
							stopImpersonateConfirm: b.Z.trans("Are you sure you want to stop impersonating this user?"),
							unmuteUserConfirm: b.Z.trans("Are you sure you want to unmute this user?"),
							vulgarityMessage: b.Z.trans("Your post seems to not fit our <a href=%url%>Community Guidelines</a>. Repeated violations may result in your account being restricted. Thank you for helping Chess.com stay a fun and friendly place for all!", {
								"%url%": E.communityGuidelines()
							})
						},
						k = {
							ALLOW_GROUP_INVITES: "data-allow-group-invites",
							AVATAR: "data-avatar",
							CAN_EDIT_STATUS: "data-can-edit-status",
							CAN_RECEIVE_GIFT: "data-can-receive-gift",
							CAN_VIEW_NOTES: "data-can-view-notes",
							ENTITY_ID: "data-entity-id",
							FLAIR: "data-flair-profile",
							HAS_CLUBS: "data-has-clubs",
							HAS_FRIEND_REQUEST_FROM_USER: "data-has-friend-request-from-user",
							HAS_FRIEND_REQUEST_TO_USER: "data-has-friend-request-to-user",
							IS_AUTH_USER_BANNER_BY_VIEWED: "data-is-auth-user-banned-by-viewed",
							IS_BLOCKED: "data-is-blocked",
							IS_FOLLOWING: "data-is-following",
							IS_FRIEND: "data-is-friend",
							IS_MESSAGEABLE: "data-is-messageable",
							IS_OWN_PROFILE: "data-is-own-profile",
							IS_USER_ENABLED: "data-is-user-enabled",
							IS_VIEWER_BLOCKED: "data-is-viewer-blocked",
							MASTER_PLAYER_URL: "data-master-player-url",
							MUTE_TIME: "data-mute-time",
							NOTE_DELETE: "data-note-delete",
							NOTE_POST: "data-note-post",
							ROLES: "data-roles",
							STOP_IMPERSONATE_PARAMS: "data-stop-impersonate-params",
							STOP_IMPERSONATE_ROUTE: "data-stop-impersonate-route",
							STREAM_CHANNEL_NAME: "data-channel",
							STREAM_MUTED: "data-muted",
							USER: "data-user",
							USERNAME: "data-username",
							USER_ID: "data-user-id"
						},
						O = {
							FOLLOW_IN_PRIORITY_ROLES: {
								ROLE_ARTICLE_AUTHOR: !0,
								ROLE_NEWS_AUTHOR: !0,
								ROLE_STREAMER: !0,
								ROLE_VIDEO_EDITOR: !0
							},
							STATUS_SUCCESS: 200
						},
						T = {
							displayState: "DISPLAY_STATE",
							editingState: "EDITING_STATE",
							savingState: "SAVING_STATE"
						},
						C = (G, X) => {
							const re = [X["char-count"]],
								ge = maxLength - G.length;
							if (ge < 10) {
								const ve = Math.floor(ge / 2);
								re.push(X[`warning-${ve}`])
							}
							return re
						},
						D = () => document.querySelector(`[${attributes.FLAIR}]`),
						L = () => {
							const G = document.querySelector(`[${attributes.USERNAME}]`);
							return G ? G.getAttribute(attributes.USERNAME) : ""
						},
						x = G => {
							if (!G) return NOTHING_FLAIR;
							let X = JSON.parse(G.dataset.flairProfile);
							return (!X || !X.code) && (X = NOTHING_FLAIR), X
						},
						W = ({
							code: G,
							flairMembership: X,
							selfIsPremium: re
						}) => X >= s.p0.moderator ? s._j.about() : X === s.p0.cheater || X === s.p0.abuser ? E.communityGuidelines() : s.yc.includes(G) ? "" : re ? `${E.settings()}${v}` : s._j.membership("flair"),
						z = ({
							code: G,
							flairMembership: X
						}) => X >= s.p0.staff ? s.Iz.staff : X >= s.p0.moderator ? s.Iz.moderator : X < s.p0.basic ? s.Cz[X] : s.yc.includes(G) ? s.Cz[s.p0.unspecifiedClosed] : s.Iz.showYourFlair;
					var F = e(62426),
						V = e(84610),
						Z = {
							props: {
								membership: {
									type: Number
								},
								clickable: {
									type: Boolean,
									default: !0
								}
							},
							computed: {
								flairHref() {
									return this.clickable ? W({
										code: this.standardizedFlairCodeFromMixin,
										flairMembership: this.membership,
										selfIsPremium: (0, V.S_)("isPremium"),
										selfIsModerator: (0, V.S_)("isModerator")
									}) : null
								},
								flairTooltip() {
									return z({
										code: this.standardizedFlairCodeFromMixin,
										flairMembership: this.membership
									})
								},
								shouldSeeUpgradeModal() {
									return !(0, V.S_)("isPremium")
								},
								standardizedFlairCodeFromMixin() {
									return this.code || this.userFlair && this.userFlair.code || s.Wp.code
								}
							},
							methods: {
								handleFlairClick() {
									if (!!this.clickable) {
										if (this.shouldSeeUpgradeModal) {
											(0, F.l)({
												referral: "flair",
												startingSlide: "flair",
												title: this.$trans("Want Your Own Flair?")
											});
											return
										}
										this.flairHref.length && window.open(this.flairHref, "_blank")
									}
								}
							}
						},
						A = {
							name: "UserFlairIcon",
							components: {
								Flair: p
							},
							directives: {
								Tooltip: h.ZP
							},
							mixins: [Z],
							props: {
								code: {
									type: String
								},
								size: {
									type: String,
									default: ""
								}
							},
							computed: {
								showUserFlair() {
									return this.code && this.code !== s.Wp.code
								}
							}
						},
						S = A,
						j = {
							component: "user-flair-icon-component"
						};

					function J(G) {
						this.$style = j.locals || j
					}
					var _e = (0, c.Z)(S, n, t, !1, J, null, null),
						we = _e.exports
				},
				23886: function(m, a, e) {
					e.d(a, {
						Z: function() {
							return g
						}
					});
					var n = function() {
							var E = this,
								y = E._self._c;
							return y("div", {
								class: E.$style.component
							}, [E.title ? y("user-chess-title", {
								attrs: {
									"open-new-tab": E.openTitleOnNewTab,
									url: E.titleUrl,
									title: E.title
								}
							}) : E._e(), E._v(" "), y("user-username", {
								class: [E.$style.username, {
									[E.$style["not-clickable"]]: E.notClickable
								}],
								attrs: {
									"is-clickable": E.isUsernameClickable,
									"open-new-tab": E.openProfileOnNewTab,
									theme: E.usernameTheme,
									url: E.url,
									"data-test-element": "user-tagline-username",
									username: E.username
								}
							}), E._v(" "), E.rating ? y("span", {
								class: [E.$style.rating, E.$style[E.usernameTheme]]
							}, [E._v(`
    (` + E._s(E.rating) + `)
  `)]) : E._e(), E._v(" "), E.country ? y("country-flag", {
								attrs: {
									code: E.country.code,
									name: E.country.name
								}
							}) : E._e(), E._v(" "), E.flairCode || E.membership ? y("user-flair-icon", {
								attrs: {
									code: E.flairCode,
									clickable: E.isFlairClickable,
									membership: E.membership
								}
							}) : E._e(), E._v(" "), E._t("default")], 2)
						},
						t = [],
						s = e(43537),
						i = e(85154),
						r = e(96302),
						o = e(22301),
						u = e(99670),
						c = {
							name: "UserTagline",
							components: {
								CountryFlag: s.Z,
								UserChessTitle: i.Z,
								UserFlairIcon: r.Z,
								UserUsername: o.Z
							},
							props: {
								country: {
									type: Object,
									required: !1
								},
								flairCode: {
									type: String
								},
								isUsernameClickable: {
									type: Boolean,
									default: !0
								},
								isFlairClickable: {
									type: Boolean,
									default: !0
								},
								iconAnchorIsEnabled: {
									type: Boolean,
									default: !0
								},
								membership: {
									type: [Number, String],
									default: u.p0.basic
								},
								notClickable: {
									type: Boolean,
									default: !1
								},
								rating: {
									type: Number,
									required: !1
								},
								title: {
									type: String,
									required: !1
								},
								url: {
									type: String,
									required: !1
								},
								usernameTheme: {
									type: String,
									default: "blue"
								},
								titleUrl: {
									type: String,
									required: !1
								},
								username: {
									type: String,
									required: !0
								},
								openProfileOnNewTab: {
									type: Boolean,
									required: !1
								},
								openTitleOnNewTab: {
									type: Boolean,
									required: !1
								}
							}
						},
						l = c,
						p = {
							component: "user-tagline-component",
							username: "user-tagline-username",
							"not-clickable": "user-tagline-not-clickable",
							rating: "user-tagline-rating",
							white: "user-tagline-white"
						},
						h = e(51900);

					function _(v) {
						this.$style = p.locals || p
					}
					var b = (0, h.Z)(l, n, t, !1, _, null, null),
						g = b.exports
				},
				22301: function(m, a, e) {
					e.d(a, {
						Z: function() {
							return l
						}
					});
					var n = function() {
							var h = this,
								_ = h._self._c;
							return _(h.isClickable ? "a" : "span", {
								tag: "component",
								class: [h.$style.component, h.$style[h.theme], {
									[h.$style.link]: h.isClickable
								}],
								attrs: {
									href: h.isClickable ? h.url : null,
									target: h.getTargetIfClickable
								},
								domProps: {
									textContent: h._s(h.username)
								}
							})
						},
						t = [],
						s = {
							name: "UserUsername",
							props: {
								theme: {
									type: String,
									required: !0
								},
								isClickable: {
									type: Boolean,
									default: !0
								},
								url: {
									type: String,
									required: !1
								},
								username: {
									type: String,
									required: !0
								},
								openNewTab: {
									type: Boolean,
									required: !1
								}
							},
							computed: {
								getTargetIfClickable() {
									return this.openNewTab ? "_blank" : null
								},
								isLink() {
									return Boolean(this.url)
								}
							}
						},
						i = s,
						r = {
							component: "user-username-component",
							link: "user-username-link",
							gray: "user-username-gray",
							darkgray: "user-username-darkgray",
							blue: "user-username-blue",
							lightgray: "user-username-lightgray",
							current: "user-username-current",
							white: "user-username-white",
							bright: "user-username-bright",
							"bright-bold": "user-username-bright-bold",
							"blue-with-dark-mode": "user-username-blue-with-dark-mode",
							"blue-to-water": "user-username-blue-to-water"
						},
						o = e(51900);

					function u(p) {
						this.$style = r.locals || r
					}
					var c = (0, o.Z)(i, n, t, !1, u, null, null),
						l = c.exports
				},
				36755: function(m, a, e) {
					e.d(a, {
						Z: function() {
							return v
						}
					});
					var n = function() {
							var y = this,
								w = y._self._c,
								P = y._self._setupProxy;
							return w("div", {
								class: y.$style.icon
							}, [w("timer", {
								class: y.$style.timer
							})], 1)
						},
						t = [],
						s = function() {
							var y = this,
								w = y._self._c;
							return w("svg", {
								attrs: {
									xmlns: "http://www.w3.org/2000/svg",
									width: "20",
									height: "20",
									viewBox: "0 0 20 20"
								}
							}, [w("path", {
								attrs: {
									d: "M5.48,9a.93.93,0,0,0-.3.71v.58a.94.94,0,0,0,.3.71,1,1,0,0,0,.71.3h4.58a1,1,0,0,0,.71-.3.94.94,0,0,0,.29-.71V9.7A.92.92,0,0,0,11.48,9a1,1,0,0,0-.71-.27H6.19A1,1,0,0,0,5.48,9Z"
								}
							}), w("path", {
								attrs: {
									d: "M19.22,6.1a9.9,9.9,0,0,0-2.14-3.18A10.23,10.23,0,0,0,13.9.78,9.76,9.76,0,0,0,10,0,9.86,9.86,0,0,0,6.1.78,10,10,0,0,0,.78,6.1,9.81,9.81,0,0,0,0,10a9.81,9.81,0,0,0,.78,3.9A10,10,0,0,0,6.1,19.22,9.86,9.86,0,0,0,10,20a9.76,9.76,0,0,0,3.89-.78,10.23,10.23,0,0,0,3.18-2.14,9.9,9.9,0,0,0,2.14-3.18A9.81,9.81,0,0,0,20,10,9.81,9.81,0,0,0,19.22,6.1ZM17.07,13a7.65,7.65,0,0,1-1.65,2.42A7.81,7.81,0,0,1,13,17.06a7.46,7.46,0,0,1-3,.6,7.51,7.51,0,0,1-3-.6,7.74,7.74,0,0,1-2.43-1.65A8,8,0,0,1,2.94,13a7.46,7.46,0,0,1-.6-3,7.46,7.46,0,0,1,.6-3A8,8,0,0,1,4.58,4.59,7.74,7.74,0,0,1,7,2.94a7.51,7.51,0,0,1,3-.6,7.45,7.45,0,0,1,3,.6,7.74,7.74,0,0,1,2.43,1.65A7.65,7.65,0,0,1,17.07,7a7.46,7.46,0,0,1,.6,3A7.46,7.46,0,0,1,17.07,13Z"
								}
							})])
						},
						i = [],
						r = e(51900),
						o = {},
						u = (0, r.Z)(o, s, i, !1, null, null, null),
						c = u.exports,
						l = e(13920),
						p = (0, l.aZ)({
							name: "ClockIcon",
							components: {
								Timer: c
							}
						}),
						h = p,
						_ = {
							icon: "clock-icon-icon"
						};

					function b(E) {
						this.$style = _.locals || _
					}
					var g = (0, r.Z)(h, n, t, !1, b, null, null),
						v = g.exports
				},
				70202: function(m, a, e) {
					e.d(a, {
						Z: function() {
							return _
						}
					});
					var n = function() {
							var g = this,
								v = g._self._c,
								E = g._self._setupProxy;
							return v("span", {
								class: g.componentClasses,
								attrs: {
									"data-cy": "clock-time"
								}
							})
						},
						t = [],
						s = e(10273),
						i = e(45463),
						r = e(13920),
						o = (0, r.aZ)({
							name: "ClockTime",
							props: {
								board: {
									type: Object
								},
								clock: {
									type: [Number, String]
								},
								playerIndex: {
									type: Number,
									required: !0
								}
							},
							emits: ["clock-element-added", "clock-element-removed"],
							computed: {
								componentClasses() {
									return {
										[this.$style.monospace]: (0, i.kK)(this.clock) || (0, i.hj)(this.clock)
									}
								}
							},
							watch: {
								clock: "updateClock"
							},
							mounted() {
								this.updateClock(), this.board && this.$emit("clock-element-added", {
									id: this.board.id,
									type: this.board.type,
									element: this.$el,
									playerIndex: this.playerIndex
								})
							},
							beforeDestroy() {
								this.board && this.$emit("clock-element-removed", {
									id: this.board.id,
									type: this.board.type,
									element: this.$el,
									playerIndex: this.playerIndex
								})
							},
							methods: {
								updateClock() {
									((0, i.hj)(this.clock) || (0, i.HD)(this.clock)) && (this.$el.innerHTML = (0, i.hj)(this.clock) ? (0, s.D)(this.clock) : this.clock)
								}
							}
						}),
						u = o,
						c = {
							monospace: "clock-time-monospace"
						},
						l = e(51900);

					function p(b) {
						this.$style = c.locals || c
					}
					var h = (0, l.Z)(u, n, t, !1, p, null, null),
						_ = h.exports
				},
				27339: function(m, a, e) {
					e.d(a, {
						Z: function() {
							return p
						}
					});
					var n = function() {
							var _ = this,
								b = _._self._c,
								g = _._self._setupProxy;
							return b("div", {
								class: _.componentClasses
							}, [_._t("default")], 2)
						},
						t = [],
						s = e(13920),
						i = (0, s.aZ)({
							name: "Clock",
							props: {
								playerIndex: {
									type: Number,
									required: !0
								},
								playerToMove: {
									type: Number,
									required: !0
								},
								position: {
									type: String,
									required: !0
								},
								isTheatreMode: {
									type: Boolean,
									default: !1
								}
							},
							computed: {
								componentClasses() {
									return {
										[this.$style.component]: !0,
										[this.$style.theatre]: this.isTheatreMode,
										[this.$style[this.position]]: !0,
										[this.$style[this.playerIndex === 0 ? "white" : "black"]]: !0,
										"clock-player-turn": this.playerIndex === this.playerToMove
									}
								}
							}
						}),
						r = i,
						o = {
							component: "clock-component",
							theatre: "clock-theatre",
							top: "clock-top",
							bottom: "clock-bottom",
							white: "clock-white",
							black: "clock-black"
						},
						u = e(51900);

					function c(h) {
						this.$style = o.locals || o
					}
					var l = (0, u.Z)(r, n, t, !1, c, null, null),
						p = l.exports
				},
				38149: function(m, a, e) {
					e.d(a, {
						Z: function() {
							return p
						}
					});
					var n = function() {
							var _ = this,
								b = _._self._c,
								g = _._self._setupProxy;
							return b("underlined-tabs", {
								attrs: {
									"selected-tab": _.selectedTab,
									tabs: _.tabs
								},
								on: {
									"select-tab": function(v) {
										return _.$emit("select-tab", v)
									}
								}
							})
						},
						t = [],
						s = e(13920),
						i = e(49102),
						r = e(27713),
						o = (0, s.aZ)({
							name: "CustomGameTabs",
							components: {
								UnderlinedTabs: i.Z
							},
							props: {
								selectedTab: {
									type: String,
									required: !0
								}
							},
							emits: ["select-tab"],
							computed: {
								tabs() {
									return [{
										id: r.H5.customGameOptions,
										label: this.$trans("Create Game")
									}, {
										id: r.H5.openChallenges,
										label: this.$trans("Open Challenges")
									}]
								}
							}
						}),
						u = o,
						c = e(51900),
						l = (0, c.Z)(u, n, t, !1, null, null, null),
						p = l.exports
				},
				21573: function(m, a, e) {
					e.d(a, {
						Z: function() {
							return b
						}
					});
					var n = function() {
							var v = this,
								E = v._self._c,
								y = v._self._setupProxy;
							return E("div", {
								class: v.$style.component
							}, [E("img", {
								attrs: {
									"data-cy": "avatar",
									alt: v.alt,
									src: v.avatarSrc,
									width: v.width,
									height: v.width
								},
								on: {
									error: v.onError
								}
							}), v._v(" "), v.presenceData ? E("presence-square", {
								attrs: {
									size: v.presenceSize,
									"user-presence": v.presenceData
								}
							}) : v._e(), v._v(" "), v._t("default")], 2)
						},
						t = [],
						s = e(31394),
						i = e(31152),
						r = e(4143),
						o = e(13920),
						u = (0, o.aZ)({
							name: "PlayerAvatar",
							components: {
								PresenceSquare: s.Z
							},
							props: {
								alt: {
									type: String,
									default: ""
								},
								src: {
									type: String
								},
								width: {
									type: Number,
									default: 40
								},
								height: {
									type: Number,
									default: 40
								},
								presenceData: {
									type: Object
								},
								presenceSize: {
									type: Number,
									default: 1
								}
							},
							data() {
								return {
									failed: !1
								}
							},
							computed: {
								avatarSrc() {
									return !this.src || this.failed ? this.defaultSrc : (0, r.q)(this.src, 3) || this.src
								},
								defaultSrc() {
									return (0, i.n)("bundles/web/images/user-image.svg")
								}
							},
							watch: {
								src(g, v) {
									g !== v && (this.failed = !1)
								}
							},
							methods: {
								onError() {
									this.failed = !0
								}
							}
						}),
						c = u,
						l = {
							component: "player-avatar-component"
						},
						p = e(51900);

					function h(g) {
						this.$style = l.locals || l
					}
					var _ = (0, p.Z)(c, n, t, !1, h, null, null),
						b = _.exports
				},
				17494: function(m, a, e) {
					e.d(a, {
						Z: function() {
							return v
						}
					});
					var n = function() {
							var y = this,
								w = y._self._c,
								P = y._self._setupProxy;
							return w("div", {
								class: P.componentClasses
							}, [w("div", {
								class: P.$style.row
							}, [P.showTitle ? w(P.UserChessTitle, {
								class: P.$style.title,
								attrs: {
									"open-new-tab": "",
									url: P.titleUrl,
									title: y.title
								}
							}) : y._e(), y._v(" "), w(P.UserUsername, {
								class: P.$style.username,
								attrs: {
									theme: "dark",
									username: y.username
								}
							})], 1), y._v(" "), w("div", {
								class: P.$style.row
							}, [y.country ? w(P.CountryFlag, {
								attrs: {
									size: P.flagSize,
									code: y.country.code,
									name: y.country.name
								}
							}) : y._e(), y._v(" "), P.showFlair ? w(P.UserFlairIcon, {
								attrs: {
									code: y.flairCode,
									membership: y.membership
								}
							}) : y._e(), y._v(" "), y._t("default"), y._v(" "), P.showRating ? w("span", {
								class: P.$style.rating,
								domProps: {
									textContent: y._s(`(${y.rating})`)
								}
							}) : y._e()], 2)])
						},
						t = [],
						s = e(13920),
						i = e(43537),
						r = e(85154),
						o = e(96302),
						u = e(22301),
						c = e(6936),
						l = (0, s.aZ)({
							__name: "user-tagline-compact",
							props: {
								country: null,
								flairCode: null,
								isSidebar: {
									type: Boolean
								},
								isTheatre: {
									type: Boolean
								},
								membership: null,
								rating: null,
								title: null,
								username: null
							},
							setup(E) {
								const y = E,
									w = (0, s.fb)(),
									P = (0, s.Fl)(() => ({
										[w.sidebar]: Boolean(y.isSidebar),
										[w.theatre]: Boolean(y.isTheatre)
									})),
									k = c.Z.generate("web_member_titled_players"),
									O = (0, s.Fl)(() => y.title && y.isSidebar),
									T = (0, s.Fl)(() => (y.flairCode || y.membership) && y.isTheatre),
									C = (0, s.Fl)(() => y.rating && y.isSidebar),
									D = (0, s.Fl)(() => y.isTheatre ? "medium" : "small");
								return {
									__sfc: !0,
									props: y,
									$style: w,
									componentClasses: P,
									titleUrl: k,
									showTitle: O,
									showFlair: T,
									showRating: C,
									flagSize: D,
									CountryFlag: i.Z,
									UserChessTitle: r.Z,
									UserFlairIcon: o.Z,
									UserUsername: u.Z
								}
							}
						}),
						p = l,
						h = {
							row: "user-tagline-compact-row",
							title: "user-tagline-compact-title",
							rating: "user-tagline-compact-rating",
							username: "user-tagline-compact-username",
							sidebar: "user-tagline-compact-sidebar",
							theatre: "user-tagline-compact-theatre"
						},
						_ = e(51900);

					function b(E) {
						this.$style = h.locals || h
					}
					var g = (0, _.Z)(p, n, t, !1, b, null, null),
						v = g.exports
				},
				78331: function(m, a, e) {
					e.d(a, {
						Z: function() {
							return p
						}
					});
					var n = function() {
							var _ = this,
								b = _._self._c,
								g = _._self._setupProxy;
							return b("div", {
								class: _.$style.component
							}, [b("span", {
								class: _.$style.hidden,
								domProps: {
									textContent: _._s(`${_.text}${_.animatedText}`)
								}
							}), _._v(" "), b("span", {
								class: _.$style.visible,
								domProps: {
									textContent: _._s(_.visibleText)
								}
							})])
						},
						t = [],
						s = e(13920),
						i = (0, s.aZ)({
							name: "AnimatedText",
							props: {
								animatedText: {
									type: String,
									default: "..."
								},
								interval: {
									type: Number,
									default: 300
								},
								text: {
									type: String,
									required: !0
								}
							},
							data() {
								return {
									visibleText: this.text,
									currentOffset: 0,
									intervalHandler: null
								}
							},
							created() {
								this.intervalHandler = setInterval(this.animateText, this.interval)
							},
							beforeDestroy() {
								this.intervalHandler && clearInterval(this.intervalHandler)
							},
							methods: {
								animateText() {
									this.visibleText = `${this.text}${this.animatedText.substring(0,this.currentOffset)}`, this.currentOffset++, this.currentOffset > this.animatedText.length && (this.currentOffset = 0)
								}
							}
						}),
						r = i,
						o = {
							component: "animated-text-component",
							hidden: "animated-text-hidden",
							visible: "animated-text-visible"
						},
						u = e(51900);

					function c(h) {
						this.$style = o.locals || o
					}
					var l = (0, u.Z)(r, n, t, !1, c, null, null),
						p = l.exports
				},
				37467: function(m, a, e) {
					e.d(a, {
						Z: function() {
							return l
						}
					});
					var n = function() {
							var h = this,
								_ = h._self._c;
							return _("div", {
								class: h.componentClasses,
								attrs: {
									"data-cy": "badge"
								},
								domProps: {
									textContent: h._s(h.text)
								},
								on: {
									click: function(b) {
										return h.$emit("click", b)
									}
								}
							})
						},
						t = [],
						s = {
							name: "Badge",
							props: {
								text: [String, Number],
								highlight: Boolean
							},
							emits: ["click"],
							computed: {
								componentClasses() {
									return {
										[this.$style.component]: !0,
										[this.$style.highlight]: this.highlight,
										[this.$style.asterisk]: this.text === "*"
									}
								}
							}
						},
						i = s,
						r = {
							component: "badge-component",
							highlight: "badge-highlight",
							asterisk: "badge-asterisk"
						},
						o = e(51900);

					function u(p) {
						this.$style = r.locals || r
					}
					var c = (0, o.Z)(i, n, t, !1, u, null, null),
						l = c.exports
				},
				25150: function(m, a, e) {
					e.d(a, {
						Z: function() {
							return b
						}
					});
					var n = function() {
							var v = this,
								E = v._self._c,
								y = v._self._setupProxy;
							return v.confirmText ? E("div", {
								class: v.$style.component
							}, [E("v5-button", {
								directives: [{
									name: "click-spam",
									rawName: "v-click-spam"
								}],
								attrs: {
									disabled: v.disabled,
									"full-width": v.fullWidth,
									size: v.size,
									theme: v.theme
								},
								on: {
									click: v.onClickPlay
								}
							}, [v._t("default", function() {
								return [v._v(`
      ` + v._s(v.$trans("Play")) + `
    `)]
							})], 2), v._v(" "), v.isConfirmOpen ? E("confirm-tray", {
								class: v.$style.confirm,
								attrs: {
									"confirm-text": v.confirmText
								},
								on: {
									yes: v.onConfirm,
									no: v.onCancel
								}
							}) : v._e()], 1) : E("v5-button", {
								directives: [{
									name: "click-spam",
									rawName: "v-click-spam"
								}],
								attrs: {
									disabled: v.disabled,
									"full-width": v.fullWidth,
									size: v.size,
									theme: v.theme
								},
								on: {
									click: v.onClickPlay
								}
							}, [v._t("default", function() {
								return [v._v(`
    ` + v._s(v.$trans("Play")) + `
  `)]
							})], 2)
						},
						t = [],
						s = e(56279),
						i = e(59471),
						r = e(13209),
						o = e(13920),
						u = (0, o.aZ)({
							name: "PlayButton",
							directives: {
								clickSpam: r.Z
							},
							components: {
								V5Button: s.V5Button,
								ConfirmTray: i.default
							},
							props: {
								disabled: {
									type: Boolean,
									default: !1
								},
								fullWidth: {
									type: Boolean,
									default: !1
								},
								size: {
									type: String
								},
								theme: {
									type: String,
									default: "primary"
								},
								minutesUntilShutdown: {
									type: Number,
									default: 0
								},
								requireTournamentConfirmation: {
									type: Boolean,
									default: !1
								},
								requireShutdownConfirmation: {
									type: Boolean,
									default: !1
								}
							},
							emits: ["click-play"],
							data() {
								return {
									isConfirmOpen: !1
								}
							},
							computed: {
								confirmText() {
									return this.requireShutdownConfirmation ? this.$transChoice("{0} Server is restarting NOW. Any games ongoing when restarts happen are aborted. Are you sure you want to start game?|{1}Server is restarting in 1 minute. Any games ongoing when restarts happen are aborted. Are you sure you want to start game?|]1,Inf]Server is restarting in %minutes% minutes. Any games ongoing when restarts happen are aborted. Are you sure you want to start game?", this.minutesUntilShutdown, {
										"%minutes%": this.minutesUntilShutdown
									}) : this.requireTournamentConfirmation ? this.$trans("Seeking games outside of the tournament could interrupt ongoing tournament games. Are you sure?") : null
								}
							},
							methods: {
								onClickPlay() {
									this.confirmText ? this.isConfirmOpen = !0 : this.$emit("click-play")
								},
								onConfirm() {
									this.isConfirmOpen = !1, this.$emit("click-play")
								},
								onCancel() {
									this.isConfirmOpen = !1
								}
							}
						}),
						c = u,
						l = {
							component: "play-button-component",
							confirm: "play-button-confirm"
						},
						p = e(51900);

					function h(g) {
						this.$style = l.locals || l
					}
					var _ = (0, p.Z)(c, n, t, !1, h, null, null),
						b = _.exports
				},
				35709: function(m, a, e) {
					e.d(a, {
						Z: function() {
							return p
						}
					});
					var n = function() {
							var _ = this,
								b = _._self._c,
								g = _._self._setupProxy;
							return b("div", {
								class: [_.$style.component, _.$style[_.position]],
								on: {
									click: function(v) {
										v.stopPropagation()
									}
								}
							}, [b("span", {
								staticClass: "icon-font-chess x",
								class: _.$style.close,
								on: {
									click: function(v) {
										return _.$emit("close", v)
									}
								}
							}), _._v(" "), b("div", {
								class: _.$style.arrow
							}), _._v(" "), _.title ? b("strong", {
								domProps: {
									textContent: _._s(_.title)
								}
							}) : _._e(), _._v(" "), _.body ? b("p", {
								domProps: {
									textContent: _._s(_.body)
								}
							}) : _._e()])
						},
						t = [],
						s = e(13920),
						i = (0, s.aZ)({
							props: {
								body: {
									required: !1,
									type: String
								},
								position: {
									default: "left",
									type: String
								},
								title: {
									required: !1,
									type: String
								}
							},
							emits: ["close"]
						}),
						r = i,
						o = {
							component: "popup-component",
							left: "popup-left",
							up: "popup-up",
							close: "popup-close",
							arrow: "popup-arrow"
						},
						u = e(51900);

					function c(h) {
						this.$style = o.locals || o
					}
					var l = (0, u.Z)(r, n, t, !1, c, null, null),
						p = l.exports
				},
				48525: function(m, a, e) {
					e.d(a, {
						Z: function() {
							return _
						}
					});
					var n = function() {
							var g = this,
								v = g._self._c,
								E = g._self._setupProxy;
							return v("div", {
								class: g.$style.component
							}, [g.tabs.length && g.selectedTab ? v("underlined-tabs", {
								attrs: {
									"back-button": g.backButton,
									tabs: g.tabs,
									"selected-tab": g.selectedTab,
									"secondary-background": g.secondaryBackground
								},
								on: {
									"click-back": function(y) {
										return g.$emit("click-back")
									},
									"popout-tab": function(y) {
										return g.$emit("popout-tab", y)
									},
									"select-tab": function(y) {
										return g.$emit("select-tab", y)
									}
								}
							}) : g._e(), g._v(" "), v("tab-content", {
								attrs: {
									content: g.content,
									"data-tab-content": g.selectedTab
								}
							}), g._v(" "), g._t("default")], 2)
						},
						t = [],
						s = e(13920),
						i = e(55211),
						r = e(49102),
						o = (0, s.aZ)({
							name: "TabContainer",
							components: {
								TabContent: i.Z,
								UnderlinedTabs: r.Z
							},
							props: {
								backButton: {
									type: Boolean,
									default: !1
								},
								content: {
									type: [Object, Function],
									required: !0
								},
								selectedTab: {
									type: String,
									required: !1
								},
								tabs: {
									type: Array,
									default: () => []
								},
								secondaryBackground: {
									type: Boolean,
									default: !1
								}
							},
							emits: ["select-tab", "popout-tab", "click-back"]
						}),
						u = o,
						c = {
							component: "tab-container-component"
						},
						l = e(51900);

					function p(b) {
						this.$style = c.locals || c
					}
					var h = (0, l.Z)(u, n, t, !1, p, null, null),
						_ = h.exports
				},
				55211: function(m, a, e) {
					e.d(a, {
						Z: function() {
							return p
						}
					});
					var n = function() {
							var _ = this,
								b = _._self._c,
								g = _._self._setupProxy;
							return _.content ? b(_.content, _._g(_._b({
								tag: "component",
								class: _.$style.component,
								attrs: {
									role: "tabpanel"
								}
							}, "component", _.props, !1), _.events)) : _._e()
						},
						t = [],
						s = e(13920),
						i = (0, s.aZ)({
							name: "TabContent",
							props: {
								props: {
									type: Object,
									default: () => ({})
								},
								events: {
									type: Object,
									default: () => ({})
								},
								content: {
									type: [Object, Function],
									required: !1
								}
							}
						}),
						r = i,
						o = {
							component: "tab-content-component"
						},
						u = e(51900);

					function c(h) {
						this.$style = o.locals || o
					}
					var l = (0, u.Z)(r, n, t, !1, c, null, null),
						p = l.exports
				},
				32172: function(m, a, e) {
					e.d(a, {
						Z: function() {
							return _
						}
					});
					var n = function() {
							var g = this,
								v = g._self._c,
								E = g._self._setupProxy;
							return v("div", {
								class: g.$style.component,
								attrs: {
									role: "tablist"
								}
							}, g._l(g.tabs, function(y) {
								var w;
								return v("div", {
									key: y.id,
									class: g.getTabClasses(y),
									attrs: {
										"data-tab": y.id,
										role: "tab",
										tabindex: "0"
									},
									on: {
										click: function(P) {
											return g.onClickTab(y)
										}
									}
								}, [v("span", {
									staticClass: "icon-font-chess",
									class: [y.icon, g.$style.icon],
									attrs: {
										"aria-hidden": "true"
									}
								}), g._v(" "), v("span", {
									class: g.$style.label,
									domProps: {
										textContent: g._s(y.label)
									}
								}), g._v(" "), g.showClose(y) ? v("button", {
									class: g.$style.close,
									attrs: {
										type: "button",
										"aria-label": g.$trans("Close")
									},
									on: {
										click: function(P) {
											return P.stopPropagation(), g.onClickClose(y)
										}
									}
								}, [v("span", {
									staticClass: "icon-font-chess x"
								})]) : g._e(), g._v(" "), y.dailyGamesPopup ? v("popup", {
									class: g.$style["daily-games-popup"],
									attrs: {
										position: "left",
										title: g.$trans("New:"),
										body: g.$trans("You can now find your Daily games in the Games tab.")
									},
									on: {
										close: function(P) {
											return g.$emit("close-daiy-games-popup", P)
										}
									}
								}) : g._e(), g._v(" "), g.confirmCloseTab === y.id ? v("confirm-tray", {
									class: g.$style.confirm,
									attrs: {
										"confirm-text": (w = y.confirmClose) == null ? void 0 : w.content
									},
									on: {
										yes: function(P) {
											return g.onConfirmYes(y)
										},
										no: function(P) {
											return g.onConfirmNo()
										}
									}
								}) : g._e()], 1)
							}), 0)
						},
						t = [],
						s = e(59471),
						i = e(13920),
						r = e(35709),
						o = (0, i.aZ)({
							name: "Tabs",
							components: {
								ConfirmTray: s.default,
								Popup: r.Z
							},
							props: {
								selectedTab: {
									type: String,
									required: !0
								},
								tabs: {
									type: Array,
									required: !0
								}
							},
							emits: ["close-tab", "select-tab", "close-daiy-games-popup"],
							data() {
								return {
									confirmCloseTab: null
								}
							},
							methods: {
								getTabClasses(b) {
									return {
										[this.$style.tab]: !0,
										[this.$style.active]: this.selectedTab === b.id
									}
								},
								onClickTab(b) {
									this.$emit("select-tab", {
										tab: b
									})
								},
								onClickClose(b) {
									var g;
									if ((g = b.confirmClose) != null && g.active) {
										this.confirmCloseTab = b.id;
										return
									}
									this.$emit("close-tab", {
										tab: b
									})
								},
								onConfirmNo() {
									this.confirmCloseTab = null
								},
								onConfirmYes(b) {
									this.onConfirmNo(), this.$emit("close-tab", {
										tab: b
									})
								},
								showClose(b) {
									return Boolean(this.selectedTab === b.id && b.closable)
								}
							}
						}),
						u = o,
						c = {
							component: "tabs-component",
							tab: "tabs-tab",
							active: "tabs-active",
							icon: "tabs-icon",
							label: "tabs-label",
							close: "tabs-close",
							confirm: "tabs-confirm",
							"daily-games-popup": "tabs-daily-games-popup"
						},
						l = e(51900);

					function p(b) {
						this.$style = c.locals || c
					}
					var h = (0, l.Z)(u, n, t, !1, p, null, null),
						_ = h.exports
				},
				49102: function(m, a, e) {
					e.d(a, {
						Z: function() {
							return _
						}
					});
					var n = function() {
							var g = this,
								v = g._self._c,
								E = g._self._setupProxy;
							return v("div", {
								class: g.componentClasses,
								attrs: {
									role: "tablist"
								}
							}, [g.backButton ? v("button", {
								class: g.$style.back,
								attrs: {
									"data-cy": "arrow-back",
									type: "button",
									"aria-label": g.$trans("Back")
								},
								on: {
									click: function(y) {
										return g.$emit("click-back")
									}
								}
							}, [v("span", {
								staticClass: "icon-font-chess arrow-left",
								class: g.$style["back-icon"]
							})]) : g._e(), g._v(" "), g._l(g.tabs, function(y) {
								return v("button", {
									key: y.id,
									class: g.getTabClasses(y),
									attrs: {
										"data-tab": y.id,
										role: "tab"
									},
									on: {
										click: function(w) {
											return w.preventDefault(), g.onClickTab(y)
										}
									}
								}, [v("span", {
									class: g.$style.label,
									domProps: {
										textContent: g._s(y.label)
									}
								}), g._v(" "), g.selectedTab === y.id ? v("div", {
									class: g.$style.border
								}) : g._e(), g._v(" "), y.badge ? v("badge", {
									attrs: {
										text: y.badge,
										highlight: y.id === g.selectedTab
									}
								}) : g._e(), g._v(" "), y.popout ? v("span", {
									directives: [{
										name: "tooltip",
										rawName: "v-tooltip",
										value: {
											content: g.$trans("Open as floating window"),
											position: "right"
										},
										expression: "{ content: $trans('Open as floating window'), position: 'right' }"
									}],
									staticClass: "icon-font-chess square-out",
									class: g.$style.popout,
									on: {
										click: function(w) {
											return w.stopPropagation(), g.onClickPopout(y)
										}
									}
								}) : g._e()], 1)
							})], 2)
						},
						t = [],
						s = e(79883),
						i = e(13920),
						r = e(37467),
						o = (0, i.aZ)({
							name: "UnderlinedTabs",
							components: {
								Badge: r.Z
							},
							directives: {
								tooltip: s.ZP
							},
							props: {
								backButton: {
									type: Boolean,
									default: !1
								},
								tabs: {
									type: Array,
									required: !0
								},
								selectedTab: {
									type: String,
									required: !0
								},
								secondaryBackground: {
									type: Boolean,
									default: !1
								}
							},
							emits: ["select-tab", "popout-tab", "click-back"],
							computed: {
								componentClasses() {
									return {
										[this.$style.component]: !0,
										[this.$style["secondary-background"]]: this.secondaryBackground
									}
								}
							},
							methods: {
								getTabClasses(b) {
									return {
										[this.$style.active]: this.selectedTab === b.id,
										[this.$style.disabled]: Boolean(b.disabled),
										[this.$style.tab]: !0
									}
								},
								onClickTab(b) {
									b.disabled || this.$emit("select-tab", {
										tab: b
									})
								},
								onClickPopout(b) {
									!b.disabled && b.popout && this.$emit("popout-tab", {
										tab: b
									})
								}
							}
						}),
						u = o,
						c = {
							component: "underlined-tabs-component",
							"secondary-background": "underlined-tabs-secondary-background",
							tab: "underlined-tabs-tab",
							active: "underlined-tabs-active",
							label: "underlined-tabs-label",
							border: "underlined-tabs-border",
							back: "underlined-tabs-back",
							popout: "underlined-tabs-popout",
							"back-icon": "underlined-tabs-back-icon"
						},
						l = e(51900);

					function p(b) {
						this.$style = c.locals || c
					}
					var h = (0, l.Z)(u, n, t, !1, p, null, null),
						_ = h.exports
				},
				82525: function(m, a, e) {
					e.d(a, {
						Z: function() {
							return mn
						}
					});
					var n = function() {
							var I = this,
								De = I._self._c,
								wt = I._self._setupProxy;
							return De("create-game", {
								attrs: {
									"bughouse-pair-status": I.bughousePairStatus,
									"challenge-link": I.challengeLink,
									"current-user": I.currentUser,
									"default-opponent-options": I.defaultOpponentOptions,
									"game-type-options": I.gameTypeOptions,
									"initial-position": I.initialPosition,
									"is-allowing-takebacks": I.isAllowingTakebacks,
									"is-avoid-timeouts": I.isAvoidTimeouts,
									"is-challenge-link-copied": I.isChallengeLinkCopied,
									"is-challenge-link-disabled": I.isChallengeLinkDisabled,
									"is-creating-challenge": I.isCreatingChallenge,
									"is-guest": I.isGuest,
									"is-initial-position-valid": I.isInitialPositionValid,
									"is-logged-in": I.isLoggedIn,
									"is-premium-members-only": I.isPremiumMembersOnly,
									"is-rated": I.isRated,
									"is-recent-time-controls-pinned": I.isRecentTimeControlsPinned,
									"is-time-selector-open": I.isTimeSelectorOpen,
									"min-games-played": I.minGamesPlayed,
									"minutes-until-shutdown": I.minutesUntilShutdown,
									"move-speed": I.moveSpeed,
									"recent-time-controls": I.recentTimeControls,
									"require-shutdown-confirmation": I.requireShutdownConfirmation,
									"require-tournament-confirmation": I.requireTournamentConfirmation,
									"selected-color": I.selectedColor,
									"selected-custom-position-type": I.selectedCustomPositionType,
									"selected-game-type": I.selectedGameType,
									"selected-opponent": I.selectedOpponent,
									"selected-partner": I.selectedPartner,
									"selected-rating-range": I.selectedRatingRange,
									"selected-time": I.selectedTime,
									"sidebar-width": I.sidebarWidth,
									"starting-positions": I.startingPositions,
									"user-search": I.userSearch,
									view: I.view
								},
								on: {
									"click-cancel-bughouse-partnership": I.onClickCancelBughousePartnership,
									"click-play": I.onClickPlay,
									"click-recent-time-controls-pin": I.onClickRecentTimeControlsPin,
									"copy-link": I.onCopyLink,
									"focus-opponent-selector": I.onFocusOpponentSelector,
									"remove-selected-player": I.onRemoveSelectedPlayer,
									"search-user": I.onSearchUser,
									"select-color": I.onSelectColor,
									"select-custom-position-type": I.onSelectCustomPositionType,
									"select-game-type": I.onSelectGameType,
									"select-move-speed": I.onSelectMoveSpeed,
									"select-opponent": I.onSelectOpponent,
									"select-partner": I.onSelectPartner,
									"select-rating-range": I.onSelectRatingRange,
									"select-time": I.onSelectTime,
									"set-allow-takebacks": I.onSetAllowTakebacks,
									"set-avoid-timeouts": I.onSetAvoidTimeouts,
									"set-initial-position": I.onSetInitialPosition,
									"set-min-games-played": I.onSetMinGamesPlayed,
									"set-premium-members-only": I.onSetPremiumMembersOnly,
									"set-rated": I.onSetRated,
									"toggle-custom-game": I.onToggleCustomGame,
									"toggle-time-selector": I.onToggleTimeSelector
								}
							})
						},
						t = [],
						s = e(14647),
						i = e(15875),
						r = e(13920),
						o = function() {
							var I = this,
								De = I._self._c,
								wt = I._self._setupProxy;
							return De("div", {
								class: I.$style.component
							}, [I.isGameTypeSelectorVisible ? De("game-type-selector", {
								attrs: {
									"show-extra-options": "",
									"game-type-options": I.gameTypeOptions,
									"is-open": I.isGameTypeOpen,
									"selected-game-type": I.selectedGameType
								},
								on: {
									"click-game-type": I.onClickGameType,
									"select-game-type": I.onSelectGameType
								}
							}) : I._e(), I._v(" "), De("time-selector", {
								attrs: {
									"is-open": I.isTimeSelectorOpen,
									"is-guest": I.isGuest,
									"is-logged-in": I.isLoggedIn,
									"is-recent-time-controls-pinned": I.isRecentTimeControlsPinned,
									"selected-time": I.selectedTime,
									"recent-time-controls": I.recentTimeControls
								},
								on: {
									"click-time": function(se) {
										return I.$emit("toggle-time-selector")
									},
									"click-recent-time-controls-pin": I.onClickRecentTimeControlsPin,
									"select-time": I.onSelectTime
								}
							}), I._v(" "), I.isCustomGameLoaded ? De("custom-game-fields", {
								directives: [{
									name: "show",
									rawName: "v-show",
									value: I.isCustomGame,
									expression: "isCustomGame"
								}],
								attrs: {
									"bughouse-pair-status": I.bughousePairStatus,
									"current-user": I.currentUser,
									"default-opponent-options": I.defaultOpponentOptions,
									"initial-position": I.initialPosition,
									"is-allowing-takebacks": I.isAllowingTakebacks,
									"is-avoid-timeouts": I.isAvoidTimeouts,
									"is-guest": I.isGuest,
									"is-initial-position-valid": I.isInitialPositionValid,
									"is-play-clicked": I.isPlayClicked,
									"is-premium-members-only": I.isPremiumMembersOnly,
									"is-rated": I.isRated,
									"min-games-played": I.minGamesPlayed,
									"move-speed": I.moveSpeed,
									"selected-color": I.selectedColor,
									"selected-custom-position-type": I.selectedCustomPositionType,
									"selected-game-type": I.selectedGameType,
									"selected-opponent": I.selectedOpponent,
									"selected-partner": I.selectedPartner,
									"selected-rating-range": I.selectedRatingRange,
									"selected-time": I.selectedTime,
									"starting-positions": I.startingPositions,
									"user-search": I.userSearch,
									view: I.view
								},
								on: {
									"click-cancel-bughouse-partnership": function(se) {
										return I.$emit("click-cancel-bughouse-partnership", se)
									},
									"click-select-odds": function(se) {
										return I.$emit("click-select-odds", se)
									},
									"focus-opponent-selector": function(se) {
										return I.$emit("focus-opponent-selector", se)
									},
									"remove-selected-player": function(se) {
										return I.$emit("remove-selected-player", se)
									},
									"search-user": function(se) {
										return I.$emit("search-user", se)
									},
									"select-color": function(se) {
										return I.$emit("select-color", se)
									},
									"select-custom-position-type": function(se) {
										return I.$emit("select-custom-position-type", se)
									},
									"select-move-speed": function(se) {
										return I.$emit("select-move-speed", se)
									},
									"select-opponent": function(se) {
										return I.$emit("select-opponent", se)
									},
									"select-partner": function(se) {
										return I.$emit("select-partner", se)
									},
									"select-position-setup": function(se) {
										return I.$emit("select-position-setup", se)
									},
									"select-rating-range": function(se) {
										return I.$emit("select-rating-range", se)
									},
									"set-allow-takebacks": function(se) {
										return I.$emit("set-allow-takebacks", se)
									},
									"set-avoid-timeouts": function(se) {
										return I.$emit("set-avoid-timeouts", se)
									},
									"set-initial-position": function(se) {
										return I.$emit("set-initial-position", se)
									},
									"set-min-games-played": function(se) {
										return I.$emit("set-min-games-played", se)
									},
									"set-premium-members-only": function(se) {
										return I.$emit("set-premium-members-only", se)
									},
									"set-rated": function(se) {
										return I.$emit("set-rated", se)
									},
									"toggle-allowing-takebacks": function(se) {
										return I.$emit("toggle-allowing-takebacks", se)
									},
									"toggle-custom-game": function(se) {
										return I.$emit("toggle-custom-game")
									}
								}
							}) : I._e(), I._v(" "), I.isWaitingForPartner ? De("cancel-bughouse-partnership", {
								attrs: {
									"data-cy": "cancel-bughouse-partnership"
								},
								on: {
									click: function(se) {
										return I.$emit("click-cancel-bughouse-partnership")
									}
								}
							}) : De("play-button", {
								attrs: {
									"data-cy": "new-game-index-play",
									size: "large",
									"full-width": "",
									disabled: I.isCreatingChallenge,
									"require-tournament-confirmation": I.requireTournamentConfirmation,
									"require-shutdown-confirmation": I.requireShutdownConfirmation,
									"minutes-until-shutdown": I.minutesUntilShutdown
								},
								on: {
									"click-play": I.onClickPlay
								}
							}, [I._v(`
    ` + I._s(I.playLabel) + `
  `)]), I._v(" "), I.isChallengeLinkVisible ? De("challenge-link-button", {
								attrs: {
									theme: "basic",
									icon: "link",
									"challenge-link": I.challengeLink,
									label: I.$trans("Invite Link"),
									"is-copied": I.isChallengeLinkCopied,
									"is-disabled": I.isChallengeLinkDisabled
								},
								on: {
									"copy-link": function(se) {
										return I.$emit("copy-link", se)
									}
								}
							}) : I._e(), I._v(" "), I.isPlayVs ? I._e() : De("toggle-custom-game", {
								attrs: {
									"data-cy": "new-game-option-custom-game",
									label: I.$trans("Custom"),
									"is-open": I.isCustomGame
								},
								on: {
									click: I.onToggleCustomGame
								}
							})], 1)
						},
						u = [],
						c = e(69794),
						l = e(43460),
						p = e(74370),
						h = e(52597),
						_ = e(25150),
						b = e(71582),
						g = e(27713),
						v = e(34186),
						E = (0, r.aZ)({
							name: "CreateGame",
							components: {
								GameTypeSelector: p.Z,
								PlayButton: _.Z,
								TimeSelector: h.Z,
								ToggleCustomGame: l.Z,
								ChallengeLinkButton: c.Z,
								CustomGameFields: () => Promise.all([e.e(3081), e.e(6085)]).then(e.bind(e, 83081)),
								CancelBughousePartnership: () => e.e(7961).then(e.bind(e, 45830))
							},
							props: {
								bughousePairStatus: {
									type: String,
									required: !0
								},
								challengeLink: {
									type: String,
									default: null
								},
								currentUser: {
									type: Object,
									required: !0
								},
								defaultOpponentOptions: {
									type: Array,
									default: () => []
								},
								gameTypeOptions: {
									type: Array,
									required: !0
								},
								initialPosition: {
									type: String,
									default: ""
								},
								isAllowingTakebacks: {
									type: Boolean,
									required: !0
								},
								isAvoidTimeouts: {
									type: Boolean,
									required: !0
								},
								isChallengeLinkCopied: {
									type: Boolean,
									required: !0
								},
								isChallengeLinkDisabled: {
									type: Boolean,
									required: !0
								},
								isCreatingChallenge: {
									type: Boolean,
									required: !0
								},
								isGuest: {
									type: Boolean,
									required: !0
								},
								isInitialPositionValid: {
									type: Boolean,
									required: !0
								},
								isLoggedIn: {
									type: Boolean,
									required: !0
								},
								isPremiumMembersOnly: {
									type: Boolean,
									required: !0
								},
								isRated: {
									type: Boolean,
									required: !0
								},
								isRecentTimeControlsPinned: {
									type: Boolean,
									required: !0
								},
								isTimeSelectorOpen: {
									type: Boolean,
									required: !0
								},
								minGamesPlayed: {
									type: Number,
									required: !0
								},
								minutesUntilShutdown: {
									type: Number,
									default: 0
								},
								moveSpeed: {
									type: Number,
									required: !0
								},
								recentTimeControls: {
									type: Array,
									required: !0
								},
								requireShutdownConfirmation: {
									type: Boolean,
									required: !0
								},
								requireTournamentConfirmation: {
									type: Boolean,
									required: !0
								},
								selectedColor: {
									type: Number,
									required: !1
								},
								selectedCustomPositionType: {
									type: String,
									required: !0
								},
								selectedGameType: {
									type: String,
									required: !0
								},
								selectedOpponent: {
									type: Object,
									required: !1
								},
								selectedPartner: {
									type: Object,
									required: !1
								},
								selectedRatingRange: {
									type: Object,
									required: !0
								},
								selectedTime: {
									type: Object,
									required: !0
								},
								sidebarWidth: {
									type: Number,
									required: !0
								},
								startingPositions: {
									type: Array,
									required: !0
								},
								userSearch: {
									type: Object,
									required: !0
								},
								view: {
									type: String,
									required: !0
								}
							},
							emits: ["click-cancel-bughouse-partnership", "click-play", "click-recent-time-controls-pin", "click-select-odds", "copy-link", "focus-opponent-selector", "remove-selected-player", "search-user", "select-color", "select-custom-position-type", "select-game-type", "select-move-speed", "select-opponent", "select-partner", "select-position-setup", "select-rating-range", "select-time", "set-allow-takebacks", "set-avoid-timeouts", "set-initial-position", "set-min-games-played", "set-premium-members-only", "set-rated", "toggle-allowing-takebacks", "toggle-custom-game", "toggle-time-selector"],
							data() {
								return {
									isPlayClicked: !1,
									isGameTypeOpen: !1,
									isCustomPositionTypeOpen: !1,
									isCustomGameLoaded: !1
								}
							},
							computed: {
								isPlayVs() {
									return this.view === g.H5.playVs
								},
								isCustomGame() {
									return this.view === g.H5.customGameOptions || this.view === g.H5.playVs
								},
								isChallengeLinkVisible() {
									return this.isCustomGame && this.selectedGameType === "oddschess" ? this.selectedCustomPositionType !== v.Z.AutoBalance : this.isCustomGame
								},
								isSidebarNarrow() {
									return this.sidebarWidth < 450
								},
								isBughouse() {
									return this.selectedGameType === "bughouse"
								},
								isGameTypeSelectorVisible() {
									return this.isCustomGame || this.selectedGameType !== "chess"
								},
								isDaily() {
									return this.selectedTime.timeType === "daily"
								},
								isCustomPosition() {
									return this.selectedGameType === "oddschess"
								},
								isOpponentSelected() {
									var Q;
									return Boolean((Q = this.selectedOpponent) == null ? void 0 : Q.username)
								},
								isColorPickerVisible() {
									return this.isCustomPosition || this.isOpponentSelected || !this.isRated
								},
								isRatingRangeVisible() {
									return !this.isOpponentSelected && !this.isGuest && !this.isCustomPosition
								},
								isFenInputVisible() {
									return this.isCustomPosition && this.selectedCustomPositionType === v.Z.FEN
								},
								isOpponentValid() {
									return this.isDaily || !this.isCustomPosition || this.isOpponentSelected
								},
								isChallengeValid() {
									return this.isOpponentValid && this.isInitialPositionValid
								},
								isWaitingForPartner() {
									return this.bughousePairStatus === b.V.Sent
								},
								playLabel() {
									return this.selectedPartner && this.bughousePairStatus === b.V.Idle ? this.$trans("Partner") : this.$trans("Play")
								}
							},
							watch: {
								isCustomGame: {
									immediate: !0,
									handler() {
										this.isCustomGameLoaded = this.isCustomGame
									}
								}
							},
							methods: {
								onClickGameType() {
									this.isGameTypeOpen = !this.isGameTypeOpen
								},
								onSelectGameType(Q) {
									this.isGameTypeOpen = !1, this.$emit("select-game-type", Q)
								},
								onSelectTime(Q) {
									this.$emit("select-time", Q)
								},
								onClickCustomPositionType() {
									this.isCustomPositionTypeOpen = !this.isCustomPositionTypeOpen
								},
								onSelectCustomPositionType(Q) {
									this.isCustomPositionTypeOpen = !1, this.$emit("select-custom-position-type", Q)
								},
								onClickPlay() {
									this.isPlayClicked || (this.isPlayClicked = !0), this.isChallengeValid && this.$emit("click-play")
								},
								onClickRecentTimeControlsPin() {
									this.$emit("click-recent-time-controls-pin")
								},
								onToggleCustomGame() {
									this.isCustomGame || this.isCustomGameLoaded ? this.$emit("toggle-custom-game") : this.isCustomGameLoaded = !0
								}
							}
						}),
						y = E,
						w = {
							component: "create-game-component"
						},
						P = e(51900);

					function k(Q) {
						this.$style = w.locals || w
					}
					var O = (0, P.Z)(y, o, u, !1, k, null, null),
						T = O.exports,
						C = e(34169),
						D = e(42481),
						L = e(86351),
						x = e(55628),
						W = e(19097),
						z = e(69976),
						F = e(17771),
						V = e(82798),
						Z = e(5479),
						A = e(25981),
						S = e(56901),
						j = e(75170),
						J = e(89662),
						_e = e(92005),
						we = e(6936),
						G = e(59479);
					async function X() {
						if (G.m.recentOpponents.length && !G.m.shouldReloadRecentOpponents) return;
						const {
							data: Q
						} = await _e.Z.get(we.Z.generate("web_user_callback_recent_opponents"));
						Q && G.m.recentOpponents.reset(Q)
					}
					var re = e(62704);

					function ge(Q) {
						G.m.challengeOptions.isAvoidTimeouts = Q
					}
					var ve = e(22023);

					function We(Q) {
						G.m.challengeOptions.color = Q
					}
					var ie = e(135),
						qe = e(98589),
						K = e(72055);

					function U(Q) {
						G.m.challengeOptions.minGamesPlayed = Q
					}

					function N(Q) {
						G.m.challengeOptions.moveSpeed = Q
					}
					var q = e(93882),
						Y = e(63498);

					function ue(Q) {
						G.m.challengeOptions.isPremiumMembersOnly = Q
					}
					var fe = e(78599),
						Te = e(86629),
						Je = e(32362);

					function ae() {
						G.m.challengeOptions.isAllowingTakebacks = !G.m.challengeOptions.isAllowingTakebacks
					}

					function st() {
						G.m.challengeOptions.isRated = !G.m.challengeOptions.isRated
					}
					var Ze = e(37061);

					function at() {
						G.m.isRecentTimeControlsPinned = !G.m.isRecentTimeControlsPinned, G.m.isRecentTimeControlsPinned ? window.localStorage.setItem(Ze.c, "true") : window.localStorage.removeItem(Ze.c)
					}
					var Fe = e(68878),
						Ve = e(97734);

					function et() {
						return {
							...G.m.challengeOptions,
							color: (0, Ve.V)()
						}
					}
					var it = e(23518),
						Be = e(91717);

					function Ge() {
						return G.m.challengeOptions.minGamesPlayed
					}

					function pe() {
						return G.m.challengeOptions.moveSpeed
					}
					var Ee = e(29121);

					function _t() {
						return G.m.recentOpponents
					}
					var ot = e(22505);

					function gt() {
						if (!G.m.recentTimeControls) return [];
						if (!window.chesscom.features.includes("new_time_control_count_results")) return G.m.recentTimeControls;
						const Q = G.m.challengeOptions.timeControl;
						return G.m.recentTimeControls.filter(De => !(0, ot.F)(De, Q)).slice(0, 3)
					}

					function rt() {
						return G.m.bughousePartner
					}
					var pt = e(9616),
						Bt = e(46587),
						At = e(2418),
						lt = e(9353),
						Ke = e(40201),
						oe = e(46973);

					function R() {
						return G.m.challengeOptions.isAllowingTakebacks
					}

					function ee() {
						return G.m.challengeOptions.isAvoidTimeouts
					}
					var ye = e(67319),
						de = e(43355),
						ft = e(89235),
						ct = e(3527),
						cn = e.n(ct);

					function Ae() {
						const Q = G.m.challengeOptions.initialPosition,
							I = !Q,
							De = Boolean(Q && cn().isFenValid(Q));
						return G.m.customPositionType === v.Z.AutoBalance && I || De
					}

					function St() {
						return G.m.challengeOptions.isPremiumMembersOnly
					}
					var Jt = e(29543),
						un = e(31439),
						Yt = e(17726),
						ze = e(18139),
						bt = e(61674),
						It = e(74508),
						ut = e(76928),
						Oe = e(52512),
						Lt = e(87833),
						vt = e(35545),
						yt = (0, r.aZ)({
							name: "CreateGameController",
							components: {
								CreateGame: T
							},
							data() {
								return {
									isTimeSelectorOpen: !1
								}
							},
							computed: {
								currentUser() {
									return (0, It.S)()
								},
								isLoggedIn() {
									return (0, vt.j)()
								},
								sidebarWidth() {
									return (0, ze.V)()
								},
								bughousePairStatus() {
									return (0, F.z)()
								},
								colorOptions() {
									return [{
										label: (0, i.dW)("White"),
										value: 1
									}, {
										label: (0, i.dW)("Black"),
										value: 2
									}]
								},
								gameTypeOptions() {
									return (0, it.b)()
								},
								initialPosition() {
									return (0, Be.r)()
								},
								isAllowingTakebacks() {
									return R()
								},
								isAvoidTimeouts() {
									return ee()
								},
								isInitialPositionValid() {
									return Ae()
								},
								isPremiumMembersOnly() {
									return St()
								},
								isRated() {
									return (0, Jt.Y)()
								},
								isGuest() {
									return (0, Lt.n)()
								},
								isRecentTimeControlsVisible() {
									return this.view !== g.H5.playVs
								},
								isRecentTimeControlsPinned() {
									return this.isRecentTimeControlsVisible && (0, un.S)()
								},
								minGamesPlayed() {
									return Ge()
								},
								moveSpeed() {
									return pe()
								},
								selectedColor() {
									return (0, Ve.V)()
								},
								selectedGameType() {
									return (0, Bt.l)()
								},
								selectedOpponent() {
									return (0, At.e)()
								},
								selectedPartner() {
									return rt()
								},
								selectedRatingRange() {
									return (0, lt.E)()
								},
								selectedTime() {
									return (0, Ke.Q)()
								},
								userSearch() {
									return (0, ut.R)()
								},
								defaultOpponentOptions() {
									return _t()
								},
								selectedCustomPositionType() {
									return (0, pt.N)()
								},
								startingPositions() {
									return (0, oe.K)()
								},
								recentTimeControls() {
									return this.isRecentTimeControlsVisible ? gt() : []
								},
								view() {
									return (0, Ee.S)()
								},
								minutesUntilShutdown() {
									return (0, L.P)()
								},
								requireShutdownConfirmation() {
									return this.minutesUntilShutdown > 0 && this.selectedTime.baseTime * 60 * 2 > this.minutesUntilShutdown
								},
								requireTournamentConfirmation() {
									const Q = (0, C.t)();
									return Boolean(Q && ((0, V._)(Q) || (0, Z.q)(Q)))
								},
								isChallengeLinkCopied() {
									return (0, ye.K)()
								},
								isChallengeLinkDisabled() {
									return (0, de.K)()
								},
								challengeLink() {
									return (0, Fe._)()
								},
								isCreatingChallenge() {
									return (0, ft.j)()
								}
							},
							mounted() {
								(0, Ee.S)() === g.H5.customGameOptions && (0, Yt.i)(), this.isRecentTimeControlsPinned && (0, re.a)()
							},
							beforeDestroy() {
								(0, A.a)()
							},
							methods: {
								onClickCancelBughousePartnership() {
									!this.selectedPartner || (this.bughousePairStatus === b.V.Accepted ? (0, x.v)() : this.bughousePairStatus === b.V.Sent && (0, W.Q)(this.selectedPartner.username), (0, ve.B)(null))
								},
								onClickPlay() {
									if (!(0, vt.j)()) {
										(0, Je.f)({
											autoSeek: !0
										});
										return
									}
									if (!(0, Oe.J)()) {
										(0, D.L)();
										return
									}
									if ((0, Lt.n)() && this.selectedGameType !== "chess") {
										(0, s.Y)();
										return
									}
									if ((0, Ee.S)() === g.H5.default) {
										(0, J.r)();
										return
									}
									if ((0, Ee.S)() === g.H5.customGameOptions && this.selectedPartner && this.bughousePairStatus === b.V.Idle) {
										(0, z.p)(this.selectedPartner.username);
										return
									}(0, j.i)(et(), {
										ratingRange: !0
									})
								},
								onCopyLink() {
									(0, S.Q)({
										color: this.selectedColor,
										isRated: this.isRated,
										timeControl: this.selectedTime,
										gameType: this.selectedGameType,
										opponent: this.selectedOpponent,
										initialPosition: this.initialPosition
									})
								},
								onClickRecentTimeControlsPin() {
									at(), this.isRecentTimeControlsPinned && (this.isTimeSelectorOpen = !1)
								},
								onSelectColor({
									color: Q
								}) {
									We(Q)
								},
								onSelectGameType({
									gameType: Q
								}) {
									(0, qe.D)(Q.key)
								},
								onSelectMoveSpeed({
									moveSpeed: Q
								}) {
									N(Q)
								},
								onSelectRatingRange({
									ratingRange: Q
								}) {
									(0, fe.j)(Q)
								},
								onSelectTime({
									time: Q
								}) {
									(0, Te.Z)(Q), this.isTimeSelectorOpen = !1
								},
								onSetInitialPosition({
									initialPosition: Q
								}) {
									(0, K.m)(Q)
								},
								onSetAvoidTimeouts({
									isAvoidTimeouts: Q
								}) {
									ge(Q)
								},
								onSetPremiumMembersOnly({
									isPremiumMembersOnly: Q
								}) {
									ue(Q)
								},
								onSetMinGamesPlayed({
									minGamesPlayed: Q
								}) {
									U(Q)
								},
								onSetAllowTakebacks() {
									ae()
								},
								onSetRated() {
									st()
								},
								onRemoveSelectedPlayer() {
									(0, Y.Q)(null), (0, bt.q)()
								},
								onSearchUser({
									query: Q
								}) {
									(0, bt.q)(Q)
								},
								onSelectOpponent({
									user: Q
								}) {
									(0, Y.Q)(Q), (0, bt.q)()
								},
								onSelectCustomPositionType({
									customPositionType: Q
								}) {
									(0, ie.B)(Q)
								},
								onSelectPartner({
									user: Q
								}) {
									(0, ve.B)(Q), (0, bt.q)()
								},
								onToggleCustomGame() {
									if (!(0, vt.j)()) {
										(0, Je.f)();
										return
									}
									if ((0, Lt.n)()) {
										(0, s.Y)();
										return
									}(0, Ee.S)() === g.H5.customGameOptions ? (0, q.m)(g.H5.default) : ((0, q.m)(g.H5.customGameOptions), (0, Yt.i)())
								},
								async onToggleTimeSelector() {
									this.isTimeSelectorOpen || await (0, re.a)(), this.isTimeSelectorOpen = !this.isTimeSelectorOpen
								},
								onFocusOpponentSelector() {
									X()
								}
							}
						}),
						Se = yt,
						dn = (0, P.Z)(Se, n, t, !1, null, null, null),
						mn = dn.exports
				},
				83372: function(m) {
					m.exports = JSON.parse('{"name":"@chesscom/play-client","version":"33.1.0","commit":"7110d56cf2f4b3a0ce6ffdb61175a13326f259b9","scripts":{"install-package":"../../build/bin/build run install-client-packages","release":"../../build/bin/build release @chesscom/play-client"},"license":"UNLICENSED","repository":{"type":"git","url":"git+https://github.com/ChessCom/client-packages.git"},"publishConfig":{"registry":"https://npm.pkg.github.com/"},"files":["dist/*","release-history.md"],"metadata":{"entries":["play"],"links":[{"name":"Play","url":"https://www.chess.com/play/online"}],"featureFlags":[{"name":"client_play_beta","channel":"beta"}],"sourceCodeUrl":"https://github.com/ChessCom/chess/tree/develop/client/web/play","changelogUrl":"https://github.com/ChessCom/chess/blob/develop/client/web/play/release-history.md","description":"Play client","registryUrl":"https://github.com/ChessCom/client-packages/pkgs/npm/play-client","slackUrl":"https://chesscom.slack.com/archives/CP1C1D5TP","owners":["@yneves"],"pagesUsedOn":["/play/arena/*","/play/tournament/*","/play/match/*","/play/online","/play-create-club-tournament","/game/live/*","/game/daily/*","/game/*"]}}')
				}
			},
			Kn = {};

		function ne(m) {
			var a = Kn[m];
			if (a !== void 0) return a.exports;
			var e = Kn[m] = {
				id: m,
				loaded: !1,
				exports: {}
			};
			return Wn[m].call(e.exports, e, e.exports, ne), e.loaded = !0, e.exports
		}
		ne.m = Wn,
			function() {
				ne.amdO = {}
			}(),
			function() {
				var m = [];
				ne.O = function(a, e, n, t) {
					if (e) {
						t = t || 0;
						for (var s = m.length; s > 0 && m[s - 1][2] > t; s--) m[s] = m[s - 1];
						m[s] = [e, n, t];
						return
					}
					for (var i = 1 / 0, s = 0; s < m.length; s++) {
						for (var e = m[s][0], n = m[s][1], t = m[s][2], r = !0, o = 0; o < e.length; o++)(t & !1 || i >= t) && Object.keys(ne.O).every(function(_) {
							return ne.O[_](e[o])
						}) ? e.splice(o--, 1) : (r = !1, t < i && (i = t));
						if (r) {
							m.splice(s--, 1);
							var u = n();
							u !== void 0 && (a = u)
						}
					}
					return a
				}
			}(),
			function() {
				ne.n = function(m) {
					var a = m && m.__esModule ? function() {
						return m.default
					} : function() {
						return m
					};
					return ne.d(a, {
						a
					}), a
				}
			}(),
			function() {
				var m = Object.getPrototypeOf ? function(e) {
						return Object.getPrototypeOf(e)
					} : function(e) {
						return e.__proto__
					},
					a;
				ne.t = function(e, n) {
					if (n & 1 && (e = this(e)), n & 8 || typeof e == "object" && e && (n & 4 && e.__esModule || n & 16 && typeof e.then == "function")) return e;
					var t = Object.create(null);
					ne.r(t);
					var s = {};
					a = a || [null, m({}), m([]), m(m)];
					for (var i = n & 2 && e; typeof i == "object" && !~a.indexOf(i); i = m(i)) Object.getOwnPropertyNames(i).forEach(function(r) {
						s[r] = function() {
							return e[r]
						}
					});
					return s.default = function() {
						return e
					}, ne.d(t, s), t
				}
			}(),
			function() {
				ne.d = function(m, a) {
					for (var e in a) ne.o(a, e) && !ne.o(m, e) && Object.defineProperty(m, e, {
						enumerable: !0,
						get: a[e]
					})
				}
			}(),
			function() {
				ne.f = {}, ne.e = function(m) {
					return Promise.all(Object.keys(ne.f).reduce(function(a, e) {
						return ne.f[e](m, a), a
					}, []))
				}
			}(),
			function() {
				ne.u = function(m) {
					return "play-" + ({
						76: "play-rcn-game-client",
						319: "play-team-match-challenge-tab-controller",
						425: "play-tournament-rules-modal",
						465: "play-daily-challenge-chessboard-client",
						555: "play-open-games-tab-controller",
						603: "play-report-modal-controller",
						614: "gift-membership-modal",
						849: "play-live-challenge-client",
						1e3: "play-daily-games-tab-controller",
						1035: "play-live-arena-client",
						1595: "play-analysis-tab-controller",
						1744: "play-presence-client",
						1770: "play-arena-over-modal-controller",
						1881: "play-live-announce-client",
						2108: "play-trophy-modal-controller",
						2194: "play-live-chat-client",
						2210: "user-report-modal",
						2214: "play-custom-position-setup-controller",
						2284: "trophy-popover",
						2511: "play-outgoing-challenges-controller",
						2518: "open-games-watch-list",
						2566: "play-monitor-game-check-required-games",
						2685: "play-chat-live-guess-the-move-update",
						2766: "play-tournament-bye-modal-controller",
						2863: "play-game-over-modal-controller",
						2865: "play-email-invite-modal-controller",
						3094: "play-dgt-board-client",
						3117: "play-top-games-tab-controller",
						3379: "payment-method-paypal",
						3526: "play-live-game-tab-controller",
						3539: "report-modal",
						3563: "play-chat-live-game-over",
						3630: "play-focus-mode-controls-controller",
						3951: "play-top-players-tab-controller",
						4087: "play-daily-game-openings-controller",
						4241: "play-featured-tv-shows-controller",
						4296: "play-tournaments-modal-controller",
						4338: "play-daily-game-chat-controller",
						4397: "play-tournament-tab-controller",
						4551: "play-watch-tab-controller",
						4561: "play-challenge-club-modal",
						4644: "play-archive-tab-controller",
						4656: "play-chessboard-client",
						4670: "play-live-tournament-client",
						4715: "play-side-controls-controller",
						4755: "play-live-moderator-client",
						4821: "play-bughouse-game-tab-controller",
						4919: "play-daily-game-notes-controller",
						4956: "play-game-timeout-client",
						4966: "pubsub-client",
						5019: "play-streaming-players-client",
						5086: "game-browser-events-client",
						5172: "play-streaming-players-controller",
						5176: "play-new-game-chessboard-client",
						5354: "play-team-match-tab-controller",
						5435: "guest-modal",
						5544: "play-chat-rcn-game-over",
						5570: "play-rcn-game-tab-controller",
						5605: "play-network-stats-client",
						5726: "play-subscribe-to-rsocket-rcn-game-updates",
						5767: "play-leagues-client",
						5775: "play-live-game-chessboard-client",
						5874: "play-players-tab-controller",
						5904: "play-fair-play-modal-controller",
						5925: "live-cometd-client",
						5950: "play-challenge-link-modal-controller",
						5975: "monitor-browser-extensions",
						6005: "play-daily-game-tab-controller",
						6011: "play-play-friend-controller",
						6046: "play-chat-rcn-game-start",
						6085: "custom-game-fields",
						6272: "play-friends-tab-controller",
						6287: "play-arena-tab-controller",
						6505: "play-chat-console-message",
						6546: "play-live-events-client",
						6607: "play-handle-console-command",
						6649: "play-competitions-announcements-controller",
						6763: "play-chat-live-guess-the-move-results",
						7175: "play-analysis-chessboard-client",
						7238: "play-daily-seek-tab-controller",
						7287: "play-monitor-game-client",
						7362: "play-chat-live-game-rate-sport",
						7439: "play-play-vs-controller",
						7456: "play-chat-live-game-start",
						7534: "boot-diagram-viewer",
						7558: "play-rcn-game-chessboard-client",
						7631: "sentry-browser",
						7672: "play-rcn-game-notifications-client",
						7682: "play-user-popover-controller",
						7914: "play-live-team-match-client",
						7961: "cancel-bughouse-partnership",
						7999: "play-quick-chat-controller",
						8061: "play-streamers-tab-controller",
						8212: "play-live-examine-client",
						8275: "play-tournament-over-modal-controller",
						8317: "play-live-game-client",
						8367: "play-custom-position-select-odds-controller",
						8526: "play-quick-chat-icon",
						8564: "play-gift-membership-modal-controller",
						8578: "play-comments-controller",
						8661: "play-competitions-client",
						8851: "play-open-challenges-controller",
						9122: "play-settings-modal-controller",
						9202: "play-daily-game-chessboard-client",
						9271: "play-facebook-friends-modal-controller",
						9288: "floating-modals-controller",
						9359: "play-game-over-modal-next-controller",
						9361: "play-live-user-client",
						9430: "success-modal",
						9441: "play-games-tab-controller",
						9604: "play-custom-position-select-opening-controller",
						9681: "play-arena-challenge-tab-controller",
						9730: "play-incoming-challenges-controller",
						9754: "play-select-club-modal",
						9966: "play-monitor-chessboard-client"
					} [m] || m) + ".chunk.client." + {
						76: "433678a3",
						115: "d0c239c9",
						319: "1179bd23",
						425: "458f4643",
						465: "98a85f11",
						525: "fd992dad",
						555: "9db90feb",
						603: "b5ed0670",
						614: "e0e8548b",
						849: "4f15793e",
						868: "1d7ae104",
						929: "47ab7ba1",
						938: "3f14d29a",
						1e3: "05637d38",
						1010: "87a106ec",
						1035: "6cd568aa",
						1248: "baaadbdb",
						1595: "a2a9cc6a",
						1720: "c726fe0f",
						1744: "25e3803f",
						1770: "41833ecf",
						1881: "91e2bb87",
						2108: "d8fb8088",
						2155: "e6b8ad19",
						2194: "bda6b034",
						2210: "6544bc95",
						2214: "0d202ff2",
						2284: "14349eae",
						2503: "0563a27d",
						2511: "0c1b4073",
						2518: "e48dad8d",
						2538: "855ccbc2",
						2566: "69f6f363",
						2685: "7721b252",
						2766: "d68247df",
						2804: "24a57d6c",
						2863: "3e43ed80",
						2865: "c09d9823",
						2904: "f6a598c0",
						2957: "c4a5cf54",
						3081: "c93a8bbb",
						3094: "dacb6a28",
						3117: "0beedd90",
						3270: "7d7fddf3",
						3379: "04c9aa71",
						3516: "9636da29",
						3526: "392a263d",
						3539: "82ba157e",
						3563: "6ed12375",
						3630: "0dee9c55",
						3779: "ca5a2ef3",
						3790: "253465de",
						3798: "7de3b9c5",
						3900: "2a3a3087",
						3951: "f2d8763b",
						4087: "5dfc64f5",
						4241: "3ef3c04c",
						4296: "40c8f4d6",
						4338: "0ec3ebee",
						4397: "9e946ce5",
						4551: "861fcc0b",
						4561: "372d1039",
						4644: "58f1b9c3",
						4656: "194f54f5",
						4670: "3326c1f4",
						4715: "82daddbc",
						4755: "0b057765",
						4762: "b502204f",
						4821: "9b4c52d1",
						4851: "722cac9e",
						4919: "6415dbc7",
						4956: "9e3d126b",
						4966: "59b3f0bc",
						5019: "abcfbda8",
						5086: "043b8dd8",
						5172: "dc5a9eae",
						5176: "6a559bb1",
						5279: "23615282",
						5354: "931c0a4b",
						5435: "852b2415",
						5544: "9dd08c4a",
						5570: "be2ae632",
						5605: "fcaf181d",
						5726: "012be6ec",
						5767: "1e46db31",
						5775: "8024c6e8",
						5874: "b3f15c2d",
						5904: "14c794da",
						5925: "906d39ca",
						5950: "ad12d653",
						5975: "6d3e0570",
						6005: "2c0db855",
						6011: "d8583685",
						6046: "77184c64",
						6085: "0739c728",
						6272: "5109b66c",
						6287: "73950626",
						6437: "3ea945c7",
						6453: "e86866d4",
						6505: "a7f7c495",
						6546: "93d3d175",
						6607: "26d5bacf",
						6612: "c9a938a2",
						6649: "25750815",
						6763: "fd4ac572",
						6796: "743bf7da",
						7051: "bd814d22",
						7175: "effb9a19",
						7182: "81acb8da",
						7238: "83f2fdab",
						7287: "b30d2482",
						7362: "44112be5",
						7439: "db3b8bf7",
						7456: "1777091f",
						7534: "f6d13033",
						7558: "72527ac0",
						7622: "0c228a5a",
						7631: "95320123",
						7672: "60d02ae5",
						7682: "f48469e9",
						7914: "d6cda2a1",
						7947: "aa551b10",
						7952: "74d5219e",
						7953: "30b43f2f",
						7961: "e501f6ac",
						7999: "3c6dac0b",
						8061: "564a87d3",
						8212: "0a5d8f1d",
						8275: "dcddba47",
						8317: "56152ee7",
						8367: "6ef12300",
						8442: "0bca9176",
						8526: "3cc9cf44",
						8564: "1a2d3001",
						8578: "38ac382b",
						8655: "3ad6e336",
						8661: "f5c16951",
						8731: "66a1351a",
						8824: "c8aee451",
						8851: "ff160d32",
						9122: "ca31eb05",
						9194: "a3aef405",
						9202: "4068e050",
						9271: "2db29892",
						9288: "1dde1c0a",
						9359: "a2219da9",
						9361: "b692821b",
						9430: "e99006bd",
						9441: "278f17a1",
						9604: "5eafe300",
						9681: "f684a6e3",
						9730: "f450c3a2",
						9754: "ce2c9e3c",
						9966: "0f76ea99"
					} [m] + ".js"
				}
			}(),
			function() {
				ne.miniCssF = function(m) {
					if (m === 1216) return "play-vendors.client.f246765f.css";
					if (m === 7347) return "play.client.3daac0c4.css";
					if (m === 9359) return "play-play-game-over-modal-next-controller.chunk.client.b6793640.css";
					if (m === 2863) return "play-play-game-over-modal-controller.chunk.client.1de056cc.css";
					if (m === 9122) return "play-play-settings-modal-controller.chunk.client.db5157ce.css";
					if (m === 1035) return "play-play-live-arena-client.chunk.client.c0af764d.css";
					if (m === 7182) return "play-web.chunk.client.042d4122.css";
					if (m === 929) return "play-web.chunk.client.df9205b7.css";
					if (m === 7999) return "play-play-quick-chat-controller.chunk.client.eaad46ab.css";
					if (m === 7682) return "play-play-user-popover-controller.chunk.client.c9adafc4.css";
					if (m === 7051) return "play-web.chunk.client.9427d31f.css";
					if (m === 6287) return "play-play-arena-tab-controller.chunk.client.afa0ee8d.css";
					if (m === 9681) return "play-play-arena-challenge-tab-controller.chunk.client.2bd753a2.css";
					if (m === 5354) return "play-play-team-match-tab-controller.chunk.client.e9a05a7b.css";
					if (m === 319) return "play-play-team-match-challenge-tab-controller.chunk.client.c1517789.css";
					if (m === 4397) return "play-play-tournament-tab-controller.chunk.client.06714b2b.css";
					if (m === 1595) return "play-play-analysis-tab-controller.chunk.client.1a629380.css";
					if (m === 2957) return "play-web.chunk.client.98a8820c.css";
					if (m === 3526) return "play-play-live-game-tab-controller.chunk.client.438bc8b2.css";
					if (m === 6005) return "play-play-daily-game-tab-controller.chunk.client.3a937777.css";
					if (m === 7238) return "play-play-daily-seek-tab-controller.chunk.client.04af4ecf.css";
					if (m === 5570) return "play-play-rcn-game-tab-controller.chunk.client.7065571a.css";
					if (m === 9288) return "play-floating-modals-controller.chunk.client.db47ffc7.css";
					if (m === 3630) return "play-play-focus-mode-controls-controller.chunk.client.97d3b65d.css";
					if (m === 5435) return "play-guest-modal.chunk.client.17f84e82.css";
					if (m === 8851) return "play-play-open-challenges-controller.chunk.client.97f44faa.css";
					if (m === 6011) return "play-play-play-friend-controller.chunk.client.b8ee3f5e.css";
					if (m === 7439) return "play-play-play-vs-controller.chunk.client.5a8ba11c.css";
					if (m === 2511) return "play-play-outgoing-challenges-controller.chunk.client.c25ef9db.css";
					if (m === 2214) return "play-play-custom-position-setup-controller.chunk.client.852dedb6.css";
					if (m === 8367) return "play-play-custom-position-select-odds-controller.chunk.client.6798fa1d.css";
					if (m === 9604) return "play-play-custom-position-select-opening-controller.chunk.client.8bf82deb.css";
					if (m === 6649) return "play-play-competitions-announcements-controller.chunk.client.3d615f9c.css";
					if (m === 9730) return "play-play-incoming-challenges-controller.chunk.client.c1853c19.css";
					if (m === 4241) return "play-play-featured-tv-shows-controller.chunk.client.4cd68a84.css";
					if (m === 6085) return "play-custom-game-fields.chunk.client.11b927a2.css";
					if (m === 7961) return "play-cancel-bughouse-partnership.chunk.client.32a51201.css";
					if (m === 5904) return "play-play-fair-play-modal-controller.chunk.client.433dd059.css";
					if (m === 8731) return "play-web.chunk.client.a7272815.css";
					if (m === 4296) return "play-play-tournaments-modal-controller.chunk.client.1a17690e.css";
					if (m === 6612) return "play-web.chunk.client.b6facada.css";
					if (m === 4715) return "play-play-side-controls-controller.chunk.client.fd3efc20.css";
					if (m === 3270) return "play-web.chunk.client.0e57141e.css";
					if (m === 1770) return "play-play-arena-over-modal-controller.chunk.client.696aeda1.css";
					if (m === 2766) return "play-play-tournament-bye-modal-controller.chunk.client.22b44bf5.css";
					if (m === 8275) return "play-play-tournament-over-modal-controller.chunk.client.b6dbcfc5.css";
					if (m === 8578) return "play-play-comments-controller.chunk.client.6464d407.css";
					if (m === 8526) return "play-play-quick-chat-icon.chunk.client.eaad46ab.css";
					if (m === 8564) return "play-play-gift-membership-modal-controller.chunk.client.6ae3c404.css";
					if (m === 2108) return "play-play-trophy-modal-controller.chunk.client.ca0be924.css";
					if (m === 4561) return "play-play-challenge-club-modal.chunk.client.5c25f42b.css";
					if (m === 9754) return "play-play-select-club-modal.chunk.client.8b037653.css";
					if (m === 425) return "play-play-tournament-rules-modal.chunk.client.19f1041c.css";
					if (m === 2518) return "play-open-games-watch-list.chunk.client.4aecd06c.css";
					if (m === 6505) return "play-play-chat-console-message.chunk.client.2ce4dea5.css";
					if (m === 3563) return "play-play-chat-live-game-over.chunk.client.15651433.css";
					if (m === 7456) return "play-play-chat-live-game-start.chunk.client.ca56db23.css";
					if (m === 6763) return "play-play-chat-live-guess-the-move-results.chunk.client.4ae8a499.css";
					if (m === 2685) return "play-play-chat-live-guess-the-move-update.chunk.client.9df2f097.css";
					if (m === 7362) return "play-play-chat-live-game-rate-sport.chunk.client.1d853a31.css";
					if (m === 5544) return "play-play-chat-rcn-game-over.chunk.client.6c2ffe63.css";
					if (m === 6046) return "play-play-chat-rcn-game-start.chunk.client.b84d1190.css";
					if (m === 3539) return "play-report-modal.chunk.client.f75ff6cf.css";
					if (m === 9430) return "play-success-modal.chunk.client.b5a83148.css";
					if (m === 4644) return "play-play-archive-tab-controller.chunk.client.67f65a30.css";
					if (m === 1e3) return "play-play-daily-games-tab-controller.chunk.client.51e220bc.css";
					if (m === 555) return "play-play-open-games-tab-controller.chunk.client.84dda088.css";
					if (m === 3117) return "play-play-top-games-tab-controller.chunk.client.28b706e5.css";
					if (m === 4551) return "play-play-watch-tab-controller.chunk.client.393739b2.css";
					if (m === 6272) return "play-play-friends-tab-controller.chunk.client.5ae47162.css";
					if (m === 8061) return "play-play-streamers-tab-controller.chunk.client.5ae47162.css";
					if (m === 3951) return "play-play-top-players-tab-controller.chunk.client.be995fe9.css";
					if (m === 4821) return "play-play-bughouse-game-tab-controller.chunk.client.3e7f7068.css";
					if (m === 5172) return "play-play-streaming-players-controller.chunk.client.8a8b8ad0.css";
					if (m === 2503) return "play-web.chunk.client.6ab89648.css";
					if (m === 4338) return "play-play-daily-game-chat-controller.chunk.client.c0974749.css";
					if (m === 4919) return "play-play-daily-game-notes-controller.chunk.client.cef2e588.css";
					if (m === 4087) return "play-play-daily-game-openings-controller.chunk.client.f4f5af72.css";
					if (m === 5950) return "play-play-challenge-link-modal-controller.chunk.client.68bbd902.css";
					if (m === 2865) return "play-play-email-invite-modal-controller.chunk.client.86d6456e.css";
					if (m === 9271) return "play-play-facebook-friends-modal-controller.chunk.client.827ddd99.css";
					if (m === 3516) return "play-web.chunk.client.e3cdfca0.css";
					if (m === 614) return "play-gift-membership-modal.chunk.client.a60f4314.css";
					if (m === 7534) return "play-boot-diagram-viewer.chunk.client.0af4ccb4.css";
					if (m === 2284) return "play-trophy-popover.chunk.client.3ffaa8f7.css";
					if (m === 3379) return "play-payment-method-paypal.chunk.client.1d085552.css"
				}
			}(),
			function() {
				ne.g = function() {
					if (typeof globalThis == "object") return globalThis;
					try {
						return this || new Function("return this")()
					} catch {
						if (typeof window == "object") return window
					}
				}()
			}(),
			function() {
				ne.hmd = function(m) {
					return m = Object.create(m), m.children || (m.children = []), Object.defineProperty(m, "exports", {
						enumerable: !0,
						set: function() {
							throw new Error("ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: " + m.id)
						}
					}), m
				}
			}(),
			function() {
				ne.o = function(m, a) {
					return Object.prototype.hasOwnProperty.call(m, a)
				}
			}(),
			function() {
				var m = {},
					a = "client:";
				ne.l = function(e, n, t, s) {
					if (m[e]) {
						m[e].push(n);
						return
					}
					var i, r;
					if (t !== void 0)
						for (var o = document.getElementsByTagName("script"), u = 0; u < o.length; u++) {
							var c = o[u];
							if (c.getAttribute("src") == e || c.getAttribute("data-webpack") == a + t) {
								i = c;
								break
							}
						}
					i || (r = !0, i = document.createElement("script"), i.charset = "utf-8", i.timeout = 120, ne.nc && i.setAttribute("nonce", ne.nc), i.setAttribute("data-webpack", a + t), i.src = e), m[e] = [n];
					var l = function(h, _) {
							i.onerror = i.onload = null, clearTimeout(p);
							var b = m[e];
							if (delete m[e], i.parentNode && i.parentNode.removeChild(i), b && b.forEach(function(g) {
									return g(_)
								}), h) return h(_)
						},
						p = setTimeout(l.bind(null, void 0, {
							type: "timeout",
							target: i
						}), 12e4);
					i.onerror = l.bind(null, i.onerror), i.onload = l.bind(null, i.onload), r && document.head.appendChild(i)
				}
			}(),
			function() {
				ne.r = function(m) {
					typeof Symbol < "u" && Symbol.toStringTag && Object.defineProperty(m, Symbol.toStringTag, {
						value: "Module"
					}), Object.defineProperty(m, "__esModule", {
						value: !0
					})
				}
			}(),
			function() {
				ne.p = "/bundles/app/js/"
			}(),
			function() {
				if (typeof ne < "u") {
					var m = ne.u,
						a = ne.e,
						e = new Map,
						n = new Map;
					ne.u = function(t) {
						var s = m(t);
						return s + (e.has(t) ? "?" + e.get(t) : "")
					}, ne.e = function(t) {
						var s = a(t);
						return s.catch(function(i) {
							var r = n.has(t) ? n.get(t) : 2;
							if (r < 1) {
								var o = m(t);
								throw i.message = "Loading chunk " + t + ` failed after 2 retries.
(` + o + ")", i.request = o, i
							}
							return new Promise(function(u) {
								setTimeout(function() {
									var c = 2 - r + 1,
										l = "&retry-attempt=" + c,
										p = "cache-bust=true" + l;
									e.set(t, p), n.set(t, r - 1), u(ne.e(t))
								}, 0)
							})
						})
					}
				}
			}(),
			function() {
				var m = function(t, s, i, r) {
						var o = document.createElement("link");
						o.rel = "stylesheet", o.type = "text/css";
						var u = function(c) {
							if (o.onerror = o.onload = null, c.type === "load") i();
							else {
								var l = c && (c.type === "load" ? "missing" : c.type),
									p = c && c.target && c.target.href || s,
									h = new Error("Loading CSS chunk " + t + ` failed.
(` + p + ")");
								h.code = "CSS_CHUNK_LOAD_FAILED", h.type = l, h.request = p, o.parentNode.removeChild(o), r(h)
							}
						};
						return o.onerror = o.onload = u, o.href = s, document.head.appendChild(o), o
					},
					a = function(t, s) {
						for (var i = document.getElementsByTagName("link"), r = 0; r < i.length; r++) {
							var o = i[r],
								u = o.getAttribute("data-href") || o.getAttribute("href");
							if (o.rel === "stylesheet" && (u === t || u === s)) return o
						}
						for (var c = document.getElementsByTagName("style"), r = 0; r < c.length; r++) {
							var o = c[r],
								u = o.getAttribute("data-href");
							if (u === t || u === s) return o
						}
					},
					e = function(t) {
						return new Promise(function(s, i) {
							var r = ne.miniCssF(t),
								o = window.__CHESSCOM_RTL__,
								u = "/bundles/app/css/" + r;
							if (a(r, u)) return s();
							o && (u = u.replace(/\.css/i, ".rtl.css")), m(t, u, s, i)
						})
					},
					n = {
						7347: 0
					};
				ne.f.miniCss = function(t, s) {
					var i = {
						319: 1,
						425: 1,
						555: 1,
						614: 1,
						929: 1,
						1e3: 1,
						1035: 1,
						1595: 1,
						1770: 1,
						2108: 1,
						2214: 1,
						2284: 1,
						2503: 1,
						2511: 1,
						2518: 1,
						2685: 1,
						2766: 1,
						2863: 1,
						2865: 1,
						2957: 1,
						3117: 1,
						3270: 1,
						3379: 1,
						3516: 1,
						3526: 1,
						3539: 1,
						3563: 1,
						3630: 1,
						3951: 1,
						4087: 1,
						4241: 1,
						4296: 1,
						4338: 1,
						4397: 1,
						4551: 1,
						4561: 1,
						4644: 1,
						4715: 1,
						4821: 1,
						4919: 1,
						5172: 1,
						5354: 1,
						5435: 1,
						5544: 1,
						5570: 1,
						5904: 1,
						5950: 1,
						6005: 1,
						6011: 1,
						6046: 1,
						6085: 1,
						6272: 1,
						6287: 1,
						6505: 1,
						6612: 1,
						6649: 1,
						6763: 1,
						7051: 1,
						7182: 1,
						7238: 1,
						7362: 1,
						7439: 1,
						7456: 1,
						7534: 1,
						7682: 1,
						7961: 1,
						7999: 1,
						8061: 1,
						8275: 1,
						8367: 1,
						8526: 1,
						8564: 1,
						8578: 1,
						8731: 1,
						8851: 1,
						9122: 1,
						9271: 1,
						9288: 1,
						9359: 1,
						9430: 1,
						9604: 1,
						9681: 1,
						9730: 1,
						9754: 1
					};
					n[t] ? s.push(n[t]) : n[t] !== 0 && i[t] && s.push(n[t] = e(t).then(function() {
						n[t] = 0
					}, function(r) {
						throw delete n[t], r
					}))
				}
			}(),
			function() {
				var m = {
					7347: 0
				};
				ne.f.j = function(n, t) {
					var s = ne.o(m, n) ? m[n] : void 0;
					if (s !== 0)
						if (s) t.push(s[2]);
						else if (/^6(085|14)$/.test(n)) m[n] = 0;
					else {
						var i = new Promise(function(c, l) {
							s = m[n] = [c, l]
						});
						t.push(s[2] = i);
						var r = ne.p + ne.u(n),
							o = new Error,
							u = function(c) {
								if (ne.o(m, n) && (s = m[n], s !== 0 && (m[n] = void 0), s)) {
									var l = c && (c.type === "load" ? "missing" : c.type),
										p = c && c.target && c.target.src;
									o.message = "Loading chunk " + n + ` failed.
(` + l + ": " + p + ")", o.name = "ChunkLoadError", o.type = l, o.request = p, s[1](o)
								}
							};
						ne.l(r, u, "chunk-" + n, n)
					}
				}, ne.O.j = function(n) {
					return m[n] === 0
				};
				var a = function(n, t) {
						var s = t[0],
							i = t[1],
							r = t[2],
							o, u, c = 0;
						if (s.some(function(p) {
								return m[p] !== 0
							})) {
							for (o in i) ne.o(i, o) && (ne.m[o] = i[o]);
							if (r) var l = r(ne)
						}
						for (n && n(t); c < s.length; c++) u = s[c], ne.o(m, u) && m[u] && m[u][0](), m[u] = 0;
						return ne.O(l)
					},
					e = (typeof self < "u" ? self : this).wpJsonpChessCom_play = (typeof self < "u" ? self : this).wpJsonpChessCom_play || [];
				e.forEach(a.bind(null, 0)), e.push = a.bind(null, e.push.bind(e))
			}();
		var jn = ne.O(void 0, [1216], function() {
			return ne(9664)
		});
		jn = ne.O(jn)
