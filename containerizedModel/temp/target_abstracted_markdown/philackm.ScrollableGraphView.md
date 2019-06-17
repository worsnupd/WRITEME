# ScrollableGraphView

## Announcements

### @abstr_number - @abstr_number - @abstr_number - Version @abstr_number :

Version @abstr_number was released which adds multiple plots, dynamic reloading of values, more reference line customisation options and various bug fixes. 

You can see the major changes in the API here.

The public interface is incompatible with previous versions. If you prefer to keep using the older version, make sure to specify version @abstr_number in your podfile or downloaded the classes from a pre-v @abstr_number release.

## About

@abstr_image 

An adaptive scrollable graph view for iOS to visualise simple discrete datasets. Written in Swift. Originally written for a small personal project.

The main goal of the this graph component is to visualise simple discrete datasets and allow the the user to scroll through the graph.

@abstr_image 

### Contribution

All pull requests are welcome. There is a list of features people would like on the issues page, ranging from simple changes to quite complex. Feel free to jump on in.

## Sponsors

Development of this component has been sponsored by **Anomaly**. Check them out @abstr_hyperlink .

## Contents

  * Features
  * Basic Usage
  * Customisation
  * Customisation Examples
  * Improvements
  * Other



## Features

| Feature List | |--------| | Initialisation animations and range adaption animations.   
  
@abstr_image | | Multiple plots and dynamic reloading of the values.   
  
@abstr_image | | Range adaption when scrolling through the graph. The range of the y-axis will automatically adapt to to the min and max of the visible points.   
  
@abstr_image | | Smooth scrolling around the graph.   
  
@abstr_image | | Handles as many points as you can throw at it.   
  
@abstr_image | | Many customisation options. (Check the customisation section)   
  
@abstr_image |

## Usage

### Adding the ScrollableGraphView to your project:

Add the `ScrollableGraphView` class to your project. There are two ways to add the ScrollableGraphView to your project.

#### Manually

Add all of the files in the Classes directory to your project in Xcode to your project in Xcode.

#### CocoaPods

Add `pod 'ScrollableGraphView'` to your Podfile and then make sure to `import ScrollableGraphView` in your code.

#### Carthage

Add `github "philackm/ScrollableGraphView" ~> @abstr_number . @abstr_number . @abstr_number` to your Cartfile and then make sure to link the frameworks and `import ScrollableGraphView` in your code.

### Creating a graph and providing it with data.

@abstr_number . Create a ScrollableGraphView instance. The graph requires a data source, which is an object that conforms to the `ScrollableGraphViewDataSource` protocol.
    
    
     @abstr_code_section
    

@abstr_number . Ensure the dataSource object conforms to the `ScrollableGraphViewDataSource` protocol and implements the following three methods like so:
    
    
     @abstr_code_section
    

@abstr_number . Finally, add the ScrollableGraphView to the view hierarchy.
    
    
     @abstr_code_section
    

This will create a graph that looks something like:

@abstr_image 

### Interface Builder support

There is now support for Interface Builder (from CocoaPod version @abstr_number . @abstr_number . @abstr_number ). See the example project in the folder: graphview_example_ib

### Things you _could_ use it for:

  * ✔ Study applications to show time studied/etc
  * ✔ Weather applications
  * ✔ Prototyping
  * ✔ _Simple_ data visualisation



### Things you **shouldn't/cannot** use it for:

  * ✘ Rigorous statistical software
  * ✘ Important & complex data visualisation
  * ✘ Graphing continuous mathematical functions



## Customisation

The entire graph is composed by initially creating an empty `ScrollableGraphView` object and progressively adding whatever plots and reference lines you require. 

Create a plot using the any of the `LinePlot`, `DotPlot`, `BarPlot` constructors. Create reference lines using the `ReferenceLines()` constructor. Before adding the `ScrollableGraphView` object to the view hierarchy, add the plots and reference lines to the graph using the `addPlot` and `addReferenceLines` methods. You can add multiple plots (examples are shown below). Each plot _must_ have the same number of data points.

In the case of interface builder, graph customisation is performed via the properties pane, whilst plots and reference lines customisation is done in the corresponding view controller. See the example project in the folder: graphview_example_ib

## Graph Customisation

These settings can be set directly on the `ScrollableGraphView` object before adding it to the view hierarchy.

#### Adapting & Animations

| Property | Description | |---------------------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------| | **shouldAdaptRange** : Bool | Whether or not the y-axis' range should adapt to the points that are visible on screen. This means if there are only @abstr_number points visible on screen at any given time, the maximum on the y-axis will be the maximum of those @abstr_number points. This is updated automatically as the user scrolls along the graph. @abstr_image | | **shouldAnimateOnAdapt** : Bool | If `shouldAdaptRange` is set to true then this specifies whether or not the points on the graph should animate to their new positions. Default is set to `true`. Looks very janky if set to `false`. | | **shouldAnimateOnStartup** : Bool | Whether or not the graph should animate to their positions when the graph is first displayed. |

#### Spacing

@abstr_image 

| Property | Description | |-----------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------| | **topMargin** : CGFloat | How far the "maximum" reference line is from the top of the view's frame. In points. | | **bottomMargin** : CGFloat | How far the "minimum" reference line is from the bottom of the view's frame. In points. | | **leftmostPointPadding** : CGFloat | How far the first point on the graph should be placed from the left hand side of the view. | | **rightmostPointPadding** : CGFloat | How far the final point on the graph should be placed from the right hand side of the view. | | **dataPointSpacing** : CGFloat | How much space should be between each data point. | | **direction** : ScrollableGraphViewDirection | Which way the user is expected to scroll from. Possible values: 

  * `ScrollableGraphViewDirection.leftToRight`
  * `ScrollableGraphViewDirection.rightToLeft`

For example, if it is set to `.rightToLeft`, the graph will start on the "right hand side" of the graph and the user will have to scroll towards the left. | 

#### Graph Range

| Property | Description | |--------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------| | **rangeMin** : Double | The minimum value for the y-axis. This is ignored when `shouldAdaptRange` = `true` | | **rangeMax** : Double | The maximum value for the y-axis. This is ignored when `shouldAdaptRange` = `true` | | **shouldRangeAlwaysStartAtZero** : Bool | Forces the graph's minimum to always be zero. Used in conjunction with `shouldAdaptRange`, if you want to force the minimum to stay at @abstr_number rather than the detected minimum. |

## Plot Customisation

For all plots you can specify animation related information for when the plot first appears and during adaptions.

#### Animation

| Property | Description | |---------------------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------| | **animationDuration** : Double | How long the animation should take. Affects both the startup animation and the animation when the range of the y-axis adapts to onscreen points. | | **adaptAnimationType** : ScrollableGraphViewAnimationType | The animation style. Possible values: 

  * `ScrollableGraphViewAnimationType.easeOut`
  * `ScrollableGraphViewAnimationType.elastic`
  * `ScrollableGraphViewAnimationType.custom`

| | **customAnimationEasingFunction** : ((t: Double) -> Double)? | If `adaptAnimationType` is set to `.custom`, then this is the easing function you would like applied for the animation. | 

### LinePlot

Line plot specific customisation options. These options are available on any `LinePlot` object.

#### Line Styles

| Property | Description | |-----------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------| | **lineWidth** : CGFloat | Specifies how thick the graph of the line is. In points. | | **lineColor** : UIColor | The color of the graph line. UIColor. | | **lineStyle** : ScrollableGraphViewLineStyle | Whether or not the line should be rendered using bezier curves are straight lines. Possible values: 

  * `ScrollableGraphViewLineStyle.straight`
  * `ScrollableGraphViewLineStyle.smooth`

| | **lineJoin** | How each segment in the line should connect. Takes any of the Core Animation LineJoin values. | | **lineCap** | The line caps. Takes any of the Core Animation LineCap values. | 

#### Fill Styles

| Property | Description | |------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------| | **shouldFill** : Bool | Specifies whether or not the plotted graph should be filled with a colour or gradient. | | **fillType** : ScrollableGraphViewFillType | Specifies whether to fill the graph with a solid colour or gradient. Possible values: 

  * `ScrollableGraphViewFillType.solid`
  * `ScrollableGraphViewFillType.gradient`

| | **fillColor** : UIColor | If `fillType` is set to `.solid` then this colour will be used to fill the graph. | | **fillGradientStartColor** : UIColor | If `fillType` is set to `.gradient` then this will be the starting colour for the gradient. | | **fillGradientEndColor** : UIColor | If `fillType` is set to `.gradient`, then this will be the ending colour for the gradient. | | **fillGradientType** :ScrollableGraphViewGradientType | If `fillType` is set to `.gradient`, then this defines whether the gradient is rendered as a linear gradient or radial gradient. Possible values: 

  * `ScrollableGraphViewGradientType.linear`
  * `ScrollableGraphViewGradientType.radial`

| 

### DotPlot

Dot plot specific customisation options. These options are available on any `DotPlot` object.

| Property | Description | |-----------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------| | **dataPointType** : ScrollableGraphViewDataPointType | The shape to draw for each data point. Possible values: 

  * `ScrollableGraphViewDataPointType.circle`
  * `ScrollableGraphViewDataPointType.square`
  * `ScrollableGraphViewDataPointType.custom`

| | **dataPointSize** : CGFloat | The size of the shape to draw for each data point. | | **dataPointFillColor** : UIColor | The colour with which to fill the shape. | | **customDataPointPath** : ((centre: CGPoint) -> UIBezierPath)? | If `dataPointType` is set to `.custom` then you,can provide a closure to create any kind of shape you would like to be displayed instead of just a circle or square. The closure takes a `CGPoint` which is the centre of the shape and it should return a complete `UIBezierPath`. | 

### BarPlot

Bar plot specific customisation options. These options are available on any `BarPlot` object.

| Property | Description| |---------------------------------------|------------| | **barWidth** : CGFloat | The width of an individual bar on the graph.| | **barColor** : UIColor | The actual colour of the bar.| | **barLineWidth** : CGFloat | The width of the outline of the bar.| | **barLineColor** : UIColor | The colour of the bar outline.| | **shouldRoundBarCorners** : Bool | Whether or not to use rounded corners for the bars.|

## Reference Line Customisation

These options are set on the `ReferenceLines` object before adding it to the graph view.

### Reference Lines

| Property | Description| |-----------------------------------------------------------------|------------| | **shouldShowReferenceLines** : Bool | Whether or not to show the y-axis reference lines and labels.| | **positionType** : ReferenceLinePositioningType | Whether the reference lines should be placed relatively, (for example at @abstr_number %, @abstr_number %, @abstr_number %, @abstr_number %, @abstr_number % and @abstr_number % of the max y-axis value), or absolutely at specific values on the y-axis. Possible values: 

  * `ReferenceLinePositioningType.relative`
  * `ReferenceLinePositioningType.absolute`

| | **relativePositions** : [Double] | An array of positions where the reference lines should be placed. Used if `positionType == .relative`. For example, assigning a value of [ @abstr_number , @abstr_number . @abstr_number , @abstr_number ] will add @abstr_number reference lines to the graph, one at the bottom of the y-axis ( @abstr_number %), one in the middle of the y-axis ( @abstr_number %) and one at the top ( @abstr_number %). All values in the array should be between @abstr_number and @abstr_number . | | **absolutePositions** : [Double] | An array of absolute positions where the reference lines should be placed. Used if `positionType == .absolute`. For example, assigning a value of [ @abstr_number , @abstr_number ] will add @abstr_number reference lines to the graph, one at the value of @abstr_number on the y-axis, one at the value of @abstr_number on the y-axis. | | **includeMinMax** : Bool | Whether or not you want to render the minimum and maximum reference line. If this is true, the min and max reference lines are always rendered. Set this to false if you want to specify only one, or neither, with `relativePositions` or `absolutePositions`. | | **referenceLineColor** : UIColor | The colour for the reference lines.| | **referenceLineThickness** : CGFloat | The thickness of the reference lines.| | **referenceLinePosition** : ScrollableGraphViewReferenceLinePosition | Where the labels should be displayed on the reference lines. Possible values: 

  * `ScrollableGraphViewReferenceLinePosition.left`
  * `ScrollableGraphViewReferenceLinePosition.right`
  * `ScrollableGraphViewReferenceLinePosition.both`

| | **shouldAddLabelsToIntermediateReferenceLines** : Bool | Whether or not to add labels to the intermediate (between min and max) reference lines.| | **shouldAddUnitsToIntermediateReferenceLineLabels** : Bool | Whether or not to add units specified by the `referenceLineUnits` variable to the labels on the intermediate reference lines.| 

### Reference Line Labels (y-axis)

| Property | Description | |-------------------------------------------------------|-----------------------------------------------------------------------------------------| | **referenceLineLabelFont** : UIFont | The font to be used for the reference line labels. | | **referenceLineLabelColor** : UIColor | The colour of the reference line labels. | | **shouldShowReferenceLineUnits** : Bool | Whether or not to show the units on the reference lines. | | **referenceLineUnits** : String? | The units that the y-axis is in. This string is used for labels on the reference lines. | | **referenceLineNumberOfDecimalPlaces** : Int | The number of decimal places that should be shown on the reference line labels. | | **referenceLineNumberStyle** : NSNumberFormatterStyle | The number style that should be shown on the reference line labels. |

### Data Point Labels (x-axis)

| Property | Description | |-----------------------------------------|-------------------------------------------------------------------------------------| | **shouldShowLabels** : Bool | Whether or not to show the labels on the x-axis for each point. | | **dataPointLabelTopMargin** : CGFloat | How far from the "minimum" reference line the data point labels should be rendered. | | **dataPointLabelBottomMargin** : CGFloat | How far from the bottom of the view the data point labels should be rendered. | | **dataPointLabelFont** : UIFont? | The font for the data point labels. | | **dataPointLabelColor** : UIColor | The colour for the data point labels. | | **dataPointLabelsSparsity** : Int | Used to force the graph to show every n-th dataPoint label |

## Customisation Examples

All of these examples can be seen in action in the example project: graphview_example_code 

Open the project in Xcode and hit run.

_Note: Examples here use a "colorFromHex" extension for UIColor._

### Default

@abstr_image @abstr_code_section 

### Bar Dark (Bar layer thanks to @abstr_hyperlink )

@abstr_image @abstr_code_section 

### Smooth Dark

@abstr_image @abstr_code_section 

### Dot

@abstr_image @abstr_code_section 

### Pink

@abstr_image @abstr_code_section 

### Multiple Plots v @abstr_number

@abstr_image @abstr_code_section 

### Multiple Plots v @abstr_number

It is possible to combine multiple plots to get different looks. We use the the dot plot to add markers to the line plot in this case:

@abstr_image 

@abstr_code_section 

## Known Issues

  * Some aspects of the graph cannot be customised _after_ it has been added to the view hierarchy.
  * Reloading the graph with a different number of data items is currently not supported.
  * Performance in the simulator is not great.



If you find any bugs please create an issue on Github.

## Other

@abstr_hyperlink for interesting updates (read: gifs) about other things that I make.