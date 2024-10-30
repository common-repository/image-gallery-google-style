=== Image Gallery Google Style ===
Contributors: bigflannel
Donate link: https://www.paypal.me/bigflannel
Tags: image gallery, gallery, simple, elegant, responsive, easy to use, image grid, large image panel, responsive layout, responsive images,  retina enabled, google image style
Requires at least: 3.5.0
Tested up to: 6.2.2
Stable tag: trunk
License: GPLv2 or later
License URI: http://www.gnu.org/licenses/gpl-2.0.html

Transform your regular WordPress galleries into elegant grids of thumbnails that open to display a larger image with previous and next buttons.

== Description ==

Transform your regular WordPress galleries into elegant grids of thumbnails. Click on any thumbnail to open a panel and display a bigger image with its title and caption and previous and next buttons. Easy to use (just edit a gallery and check a box), matches any theme, clean standards compliant code, responsive, supports high resolution screens, no image cropping.

Supported in Classic Editor, either using the plugin, or using the Classic Editor block in Gutenberg. Do NOT set thumbnails to crop in WordPress Admin / Settings / Media.

== Installation ==

= For an automatic installation through WordPress =

* Go to the 'Add New' plugins screen in your WordPress admin area
* Search for 'Image Gallery Google Style'
* Click 'Install Now' and activate the plugin
* Edit an existing gallery, or create a new one, and check 'Image Gallery Google Style' in the gallery options

= For a manual installation via FTP =

* Upload the folder you download to the directory `/wp-content/plugins/`
* Activate the plugin through the 'Plugins' screen in your WordPress admin area
* Edit an existing gallery, or create a new one, and check 'Image Gallery Google Style' in the gallery options

== Screenshots ==

1. Check 'Image Gallery Google Style' when editing a gallery to see it display as an elegant grid of thumbnails.
2. An Image Gallery Google Style grid of thumbnails.
3. The larger image displayed when a thumbnail is clicked on.

== Changelog ==

= 0.42 =
* bug fix where content panel loaded in final grid instance, not clicked instance

= 0.41 =
* grid layout achieved using flexbox css (no js)
* lower CLS score, faster load
* removed console.log messages from last update

= 0.40 =
* amended grid to align based on large image width and height not thumbnail (in case thumbs are cropped)
* added some reset css based on problem with twenty seventeen theme

= 0.39 =
amending release notes and version

= 0.38 =
amending release notes and version

= 0.37 =
added width and height to all thumbnail images to reduce CLS (cuumulative layout shift)

= 0.36 =
* updated info regards plugin upgrade

= 0.35 =
* amended js to make prev and next transition smoother
* stopped a 'bump' happening in the image below the panel as the panel image changes

= 0.34 =
* added prev and next
* added icons to iggs-control in iggs.thumbGridAddPanel
* amended close code and put in function iggs.thumbGridAddPanel
* added iggs.previousPanelImage, iggs.nextPanelImage, and iggs.changePanelImage
* added Pan Controls using http://hammerjs.github.io, iggs.lookForSwipe
* added a class to all thumbnail links used to open the panel to better target them in js
* targeted a.iggs-grid-thumb-link for thumbgrid click events only

= 0.33 =
* added max-width: 100%; to .iggs-grid, CSS reset
* added imagesloaded.js after allowing panel to open on small screens, left-panel drops below right panel and the panel height needs to be checked after the image has loaded

= 0.32 =
* fixed enabling image gallery google style, test for $attr['imagegallerygooglestyle'] == 'true' not $attr['imagegallerygooglestyle'] == true in class-image-gallery-google-style-paid-public.php
* amended tested up too version 4.9

= 0.31 =
* removed title tag from img tags of thumbnails in gallery

= 0.30 =
* added max-width: 100% !important to .iggs-grid-thumb, CSS reset
* amended enqueued js to load in footer
* amended default behaviour of plugin to open panel at all screen widths, previously thumbnail linked to attachment page on screens less than 480px wide

= 0.29 =
* amended grid CSS, added !important to margins and padding of grid ul, li, and thumb img

= 0.28 =
* added css to reset .iggs-thumbgrid ul
* amended readme

= 0.27 =
* readme amendments as plugin goes live in WordPress
* added credits from readme to license.txt

= 0.26 =
* further amendments regards name from google-image-style-gallery to image-gallery-google-style

= 0.25 =
* changed name from google-image-style-gallery to image-gallery-google-style

= 0.24 =
* initial version

= 0.23 =
* pre-release version

= 0.22 =

= 0.21 =
* readme amendments
* stopped image-gallery-google-style-admin.js being enqueued
* cleaned up js, commented out console.log statements

= 0.20 =
* initial release

== Upgrade Notice ==

= 0.41 =
Major upgrade, grid layout through flexbox css not js, faster loading.

== Author ==

* [Image Gallery Plugin Home Page](https://imagegallerygooglestyle.com/)
