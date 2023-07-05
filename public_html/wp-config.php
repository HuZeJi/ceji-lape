<?php
define( 'WP_CACHE', true );
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the web site, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * Localized language
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'u622292974_UnNiX' );

/** Database username */
define( 'DB_USER', 'u622292974_0mfUL' );

/** Database password */
define( 'DB_PASSWORD', 'nGr4EwYPQd' );

/** Database hostname */
define( 'DB_HOST', '127.0.0.1' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',          'x%ohY*=0/{j^2KF3r:WmOr(E)%btT$eZpeM{To`%G?^/y7&Gr@98Qp^CIb*$g.CC' );
define( 'SECURE_AUTH_KEY',   '8uc Kb~ZM%OlV^!x]K2/L)$[E]<1^=Mr%n }Z;@nlXE#A#c%>]p?;1&)N^6>$ynZ' );
define( 'LOGGED_IN_KEY',     '6rPZq_Yu{(DE~A|oZLk#Jk+X&<iI+Y*`A)6A?cz;)#btPzS_Mz-1*Yg5-1EBaU[W' );
define( 'NONCE_KEY',         'tji5a#shlH>Y)tx3Xt<K** agpiccnO7VQ;ghzw9PJ_g--(f]x&mleL~M{+s+!2t' );
define( 'AUTH_SALT',         'Y>Wq^!rYOi[3T!P!hr;~_T0Y)UJ`}Wydghz58;<eqe,^?mNSE4JSjSE1,9F;Rf[e' );
define( 'SECURE_AUTH_SALT',  'b=yU|1d|p{lGR7GqYxm6=:&t< q)4zBDmIAqKt7c;mEB)P mC&q0H~{S1k!Stf2(' );
define( 'LOGGED_IN_SALT',    '`JxlCLKcazb8SaUp}G58J+kp!/?U@Z<:4f=QLMg7UZmK|5p]6t:zzwRE@;q%iE1N' );
define( 'NONCE_SALT',        'VaSyOVFWm)cJ.vUxs nFXeKnzKCaS0-5kmZVrXr2m}$F/Xl/nk#wT0-/B?sPT@q3' );
define( 'WP_CACHE_KEY_SALT', 'NbJ=xPCqiVMuOo#beYPPxp2/.yV#+D.80e%BVU,ELHi#k!-8ZW02N[K5DW[ui<?2' );


/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/support/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );


/* Add any custom values between this line and the "stop editing" line. */



define( 'FS_METHOD', 'direct' );
define( 'WP_AUTO_UPDATE_CORE', 'minor' );
/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
