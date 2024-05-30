---
title: Exploring 'knobChanged'
authors: ["cameron"]
tags: [nuke, scripting]
---

> A foray into the knobChanged function in Nuke.

## Intro

So you're trying to update the value of one knob when the value of another changes. This functionality in Nuke is enabled by the knobChanged knobs that are hidden, but included, in most nodes. If you want to attach a script to a knobChanged knob, and also keep it when you save and reopen your Nuke script later, this guide's for you.

<!--truncate-->

## Part 1: KnobChanged

Nodes in Nuke obviously have a variety of controls, but some are visible and some not. One hidden control is known as "knobChanged." Typically, this control starts empty, but you can attach a script or code to it. The attached code will execute whenever a designated knob—or even all knobs—undergo changes.

Here's an example script you can attach to a `knobChanged` knob in your selected node:
```
sel = nuke.selectedNode()
sel.knob('knobChanged').setValue('print("Knob has changed!")')
```

Where `sel = nuke.selectedNode()`: selects the currently active node in Nuke and stores it in the variable `sel` - and `sel.knob('knobChanged').setValue('print("Knob has been changed!")')` accesses the 'knobChanged' attribute of the selected node and sets its value to execute the print statement whenever a knob changes.

This is a simple set up, but it creates a lot of potential. Accessing the hidden knob allows the automation of triggers when all sorts of user interactions happen on the selected node.

If you get the idea, feel free to move on, if you want to read more about knobChanged:

further reading:
- https://benmcewan.com/blog/2018/04/09/using-knobchanged-to-toggle-knob-states-on-gizmos/
- https://splitthediff.com/knob-changed

## Part 2: Nuke Python Callbacks

### What is a Callback?

In Python, a callback is essentially a function that you can pass as an argument to another function. This allows the code to be more dynamic and be executed when a specific event occurs. In Nuke, a callback is often used to trigger specific Python scripts when certain actions or events take place, like when a node is created or modified.

### Why Use Callbacks in Nuke?

1. **Workflow Automation**: You can automate repetitive tasks, like setting default values for nodes or auto-connecting nodes together.
2. **User Alerts**: You can set up alerts to notify you of certain changes or requirements, like warning you if a node's settings surpass a particular threshold.
3. **Quality Control**: Automate checks for naming conventions or specific settings that need to be maintained across a project.

## Part 3: Built in Artist-Friendly Callback Knobs

One of the challenges in Nuke is assigning a script like the one above to a knob 'permanently' so it stays with the script. Often, if you use the script editor, for example, to assign something to a knob, it'll only be included in that session. Unfortunately, Nuke scripts don't let you hardcode python directly into them, you have to either keep a .py script with your script or you have to find another way. Enter Nuke Python callback knobs.

For the intro gif, here's the script that makes that work, let's use it as an example.
```
# The function that you want added to the knob
def kc_func():
    n = nuke.thisNode()
    k = nuke.thisKnob()
    if k.name() in ( "nameScheme_project", 'nameScheme_sequence', 'nameScheme_shot', 'nameScheme_task', 'nameScheme_BKD', 'nameScheme_version'):
        new_value = nuke.tcl('value nameScheme_string')
        n.knob('nameScheme_preview').setValue(new_value)
        return f"Changed nameScheme_preview to {new_value}"

# Find the node by name and set the knobChanged
node = nuke.toNode("BKD_Renderer1")
if node:
    node.knob('knobChanged').setValue('kc_func()')
```

This slighly more complex python script updates the knob `nameScheme_preview` when a set of other knobs on the node are updated. While this script essentially listens for any changes to those knobs, it still **needs to be run in the first place**, specifically the function in the script needs to be added to the knobChanged knob in the BKD_Renderer1 node. If the purpose is to avoid using a python button for example to trigger your changes, we'll want to have the python script run when the Nuke script is opened. This is made easy with the callback knob included in Project Settings / Python/ `nuke.addOnScriptLoad()`. This is a really user-friendly interface with a field where you can simply copy and paste the script you'd like to have run on script load.

So that's kind of it for this example. It's small it scope, but can pack a punch if extrapolated to other circumstances.

Here's more about the Artist friendly callback knobs in nuke:
https://www.youtube.com/watch?v=CBaU5ZvZlXI
