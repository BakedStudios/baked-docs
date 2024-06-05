---
sidebar_position: 1
---

# Authoring the Open Color IO Configuration

>This article will show you how to set (and forget, hopefully) the OCIO config file for a new project.

## Establishing the Color Workflow

The first thing to do in setting up the OCIO is to open up the render_template.nk script for the project and properly setting up the color worklow as you would any other show within the [group node here](/baked-docs/docs/project_setup/render_template/#color).

It's important that you use OCIO nodes. Like OCIO Color Transform instead of just a color space transform node.

## Testing the Color Workflow

You can use the ref read in the color group node to test the color workflow and make sure it's all set. You can read in the plate at the root node graph in the script.

## Converting to an OCIO Config

The OCIO template file we have lists a bunch of preset color spaces. Setting up a transform and full color workflow looks something like this:

```
- !<Look>
  name: Shot
  process_space: ACEScg
  transform: !<GroupTransform>
    children:
      - !<ColorSpaceTransform> {src: ACEScg, dst: Log3G10 REDWideGamutRGB}  # Convert linear to REDLog3G10
      - !<FileTransform> {src: "$SHOT_CUBE", interpolation: linear}  # Apply the shot-specific look cube or neutral if no cube
      - !<FileTransform> {src: "RWG_Log3G10_to_REC709_BT1886_with_LOW_CONTRAST_and_R_3_Soft_size_33.cube", interpolation: linear}  # Convert REDLog3G10 to Rec.709
```

:::info
This code block can be found by searching "Shot" in the default ocio config in `admin/resources/ocio/default_config.ocio`
:::

9/10 times, you're just adjusting the "children" denoting the type of transform it is, the source and the interpolation.

The `$SHOT_CUBE` token allows for specific cdl ids to switch out depending on the shot context.

## Testing the OCIO Config

When you're all set, you can test the OCIO by looking at your viewer in a nuke script in that project and shot environment. You can also reach out to a coordinator and ask them to generate a v000.
