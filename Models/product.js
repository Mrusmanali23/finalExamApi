const { NotExtended } = require("http-errors");
var mongoose=require("mongoose");


var productSchema=mongoose.Schema({
    Name: String,
    price:Number,
    Detail:String,
    Category:{
        type:String,
        default:"None"

    },
    Image:{
        type:String,
        default:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAATUAAACjCAMAAADciXncAAACClBMVEX3fkkAf2H0rijg9+UATD8AAAD5fUdJOBX0f0tIKBr2rib5uDj5iFP6fElIKhz6fEYDfmEATz8DSz8AgWC68evysCf1rSr2f0cJQTgAgV6FSzoATjz7fEisuLD3fUu/lTeWVj4AJSELODEFJBsJQjgHFxTsgFPYdEwIKiMAOjEJSDr6hE3xgE7l+uv3g0Xh8efN3M8AalIJHhkAERnvtkOkXkRiPCxqPysAMScAGiAAX0gAd14ALSkADg+19Oy+7+yBlJMANCApIQ3hpTwdGhr1k2eEiYRRWVa5x72HTjRBRkMABgBhb2QAAA6fq6CTmZaeei1fSxndeE0AFwCpy8dga2wAR0WDSUQAISTec0WVVESPVjnBZkG4a0bZhWD/gl0cAACBaGBmTTqJRS9wMyqCfW2nubs6Fw9mXliydFZyZVXU3dgqJBwyHBWvY0Tzgl2LbVOUk5WMYVB0hXpjPzW7u7qkik2JZzJoXDhKIR4xHACNc0pWOxU2ODjm8OCzmDyNbSMiAAA0RkJsTh1HQERhLBh8aDj0//9DOic1FRklHSXJnDUoAABhSitaR0GQbDiupZ/AnU7esUB3T0VPLRJPLjdSNB5HIg2WdyRCORVrNTR1WRtyTy3Nq0LPfU3utGikeEUgLhSTtq8kKyqv3tNVdGyQpKafwbcAYUNsmpEeIBQDSFG9hysACzTqX9X4AAAgAElEQVR4nO2dj18TV7rwE8kMgWaYmQw4hMQBQhKSTIgmAolJICAoorXGFKxr0Xpvu/XtW4G71S7Vq3u9urXdsl1XttVa93r3FZbuevv+j/d5zswk8yuQH7D3874fHhX5kTznnO95znOe55wzB8dsR1fHgTQiXR2zjo5THln2HEjdIntOdTi6PCztoA+kXnHQrKfL0SGzCfeB1C8JVkZbY9wszdDWv3bf24eX/GNK2bOKsBIDtgYj1EE7DqReoTVq7gNq9QvtPqDWuBxQa0YOqDUjB9SakQNqzcgBtWbkgFoz0iQ1N8uKui/hK1F071GVGIaWKl9IDCPhP3avtDskmpVptvo1K4lS7VfbS3PU3Owvrgzo5MpAhBX3yFpp0Z1cqqp+H/8kWUnas7HALF0xVH5Mblh1c9TY5FXKKNfAHPaKmvTBmEn7quMDUdz9rXVJ0tNnVH7dw+7+LlMdm6KWyPzTEaP884cJ1rEn9sBI5Y9+adL+4/vJPdBMhB7+6LRB98fvZFYaVtIUtQi1ODIy0qbJyMhXJ25EWPeeUKPFMnW6qpsINd6476ml/iq1baz7MaqvYSUNU2PcATYB1AzNGpm48QEr0nsxipKBX5ipHaUy0l5QEwMiTS9R7+i1H20DahLjTjYy3TRDTYpcs1Bb/F+fDO+Nw2ZXr1lsbe5/Xy3vQY/APCOufmKk1tZ2bO6frkZEtpFuaZiam6E9X1JHjxqb1TbyKTUvOZimGmMUT8fNr9rM2s9QK3thxwwbuT5nqfrIO9SSvL/URKA2To1Y2nWMGoAh2lRbjBWSlmfN1EbagNpeGLKbXqXmRszK25BaQ+Fm49QkhzxO/YaUZrBzaiAp7YmtLc+a+2Sk7cieUKMdKjWjY2u7QA27G4psGqZGByTPM8ps5UBt8V/G3A6ppRCeBs8jem5sWiy57djbn61EEmyLvQIpQQSoWdSfWfxsKbmvI1QSac9zG2ptIxeoV0xrBiE6AgEpcmPCSq1t5BZVZlsNPyQmEKHOWqm1jTykVhvpkSaoLfX98oIdtV9RwwzN0q1YGy2xS5+dvmAdoW1ti1RZklqNdd0r86ffseuTs1SkEd2NRx7sFeqMTcFIrSy76YbmIpNIbCI5T31qq32RirANjSI7kW9TR+20t52lVhtJqxq3teRYDWpnLnw2FnHQLbTMzUpsH3XMrlkjRy58ttKqqUkwj9lSG3nnV+83Mt00TI2xoYaeAv59dZbyQC7aQmAlicy8HTVMgUaoG55W51GkZlaN2o+C9ozsqNstN0fN2q5j4dMjI/tFbeRM+J2REapjP6ihGYfPYNIm1x+k7xk1al+pURf2kxp15P9HapAaXGjbN2oQQh8Z2U9qdM3Z4Bh1aw+o0btQa16zqt/Wrx2hPt9HW5Mk1iEmaFtqn+4FNZERPYSaebZRR6jcQocwdCLAem7bj1CVWt2m3JituR0sPXAdR+iIKcL+dC9GKORT8+cINaP2vaAmOcRAJHOOahsxdwqh1rZv1GhHgqaXvvg1UBs5dsE4kI5R1IWWIw/wmWtPkJpJO1CjjnxFdclNa8YOT0p9v/6CwvF+wUwNWrR/1CQ3G7mz8QVSO0LW9hSTwI/HqC/uft4qteQHN0fbkdo7xAkQ7cTszlD/Sn0a7mrFr0kSXf5u9C4F+k7rzHmEUAPt+0hNZIfvzWDPQO8fGWk79vYRNLO3zyC1l/3n72Ne0sI85x6+CNqPQaiOTgD0IjD4CKWVSputUaMdzMqTfor6jUJt5MzbaM74Eaj924PNc/tGjXGzKw+ezlKkHUcQ1QVlggOA1JvRZerfV0FP87bGjpVK32jUoIh3RpSwAIq4O0pRz1uJPMQk09f/crZia8ScRy7gp0co7Kwv9yujklj2Sv/a15/94aFqa3pqVP/a767hUm8Ls8FH64++/uQPcxq1Ixq1zylq5uJvT7W0vCbJdzba//mT3779lZUaNXPydqQBXY1Qc0PkcXvj3r+ufEkdPUN9TKiNVKmVSlSZTTBs89Q8N0bvPb52Y/YrMkKN1PofUJ6WVqEkT9fG119co87aUrv4u0aGfyPURDzDO/rdr1ci1yhKtbWREY3a8oPS8auMu5W9g0j76L0HSwnUbrS1M9Q3pScTwy2tSrLlizOPHw+vfkJRFmrfrD++Xt6nESpKYuTezMX+ATry77PX//ibYyRkR3bHjp35fceD0rfvB1pYOKTp4Uf9a6UVtnx9mTpy9BhM023YpHeOHfv8+nJp7Q8rrayAi+zVB6Uf1obZJer69U8/PXqB5IUXqM+PHXvn978Dz/Bqv6gxyaW1/i/W56VkIrE6jmckwNZGjpHTEqfeLz14kqFbOfxDL5VKT0pjrLS6eqoDdR5p+w0OH5gHToEn/5eBhs9j6OruYAegSx4ssYmE59TvUemZkd8ANZDM6u2Ze4+v7hc12gGT3LfrGQlyK+nK+Pj4l6c/P3Pmj8/Gb9/+Uu7rv/hv43Lz1ESH/GH/47WnAzIrson58fHM+IUzoB2K+XFe/mjm3tO+VtZy3fRHG/dKYMmSBDkCaH/2R9D+y3Go+4DcMdr+dGDfbE3uW3/UvpGRIKdLirJEQ9ZIUTc8nmRSTnZsfD1zx0PTzR3IgoRHdv+40f6of14OJCQJNXoyoH3ck5Th0xuj7Rt3WskNRE/H6HKpNJZkk25JllAlaJ/3eCRZTnSNvljv26/Ig4HJ+9nd0XHZzTAiTUcSgavz831jblZimAREVKNdTR9jA2ruRMcodXG9z806AgGI5d3Synxf34pDcrvZ1Rcb1OgNTwt5aHIVKvik/0qSkQIS40hI8lhf3/xSwu2mpeFH6y82PtonakzCc2Ojq2v0jlsMiCIugLBk8Uh0SIkAzBPURntCbHJzDyZfNnJv9PtHM7dlOinS0BiRFkVaplmJDjiGX/ZTG12JplQTocXhi+vfrxGLYh1u0cGgbuh66GacJ66Pdsluej9WwBkx0j5zu2u0I2F8rcgE3IGltafU+sVfuJt0bDRQW3rZ/6d7MA4DommupB0rEAxuPGskEDWLCCr+9Gi9L2BqJwPzxJX+l9TGXc/+UHOwS2s/X+ka7UqYRorEiOzYzw++719bops8WAT1YGCq+eS70TseCzWRhSn0+/U/l5tSrRYw0P/yk3vrP5pPVUAu4/lx494fNu5FHHU7gIao0WOlB1c7rNQYKenObFy8glNUk9k71EMCNNe+A+9loeaQuzaevdf/YKmFCFoen2m/1j7zo3kkSOCfO0af/2n94jBd9wmZRqixiffWXw6PzzyLGKmJENuu3tl4Du5hAPQ0GYoG5MxGe+Q5UKPN1CSY5DrGSj+0ckIGZquuU3c3xmWzHdNS5MXM+JX+x0usI1FnAQ2tgMt3RtsTmZl2EzUahmWkY+POtUf9fbQYaC5goyV5efR3HkLNUpfyxfWPIMAeayVbw7F/d7TDYYr5AMCrtf4rK6UHKzRjMfJalW1khCa6Nm54+tYvmvyLJDIsTN595Xv/8ZEsMs1Si7Rv3IbQpivBuE2VZ1celMYg3eprPjmgsYIQ9T0zx3xsIoB+ZwlKgNxnH6iJgOVHzAGGjd+XEiw79kNpBZLvO556u8tSEQmiiz75Rxj/jNkeWBw/kW/XGwmpzOoB/Irnzsx35uiFdjsy4NOg8AFxX2yNXnrQ/2ESpukl4/cZeG9f/6NhiL5vNEsNnDJMoSvyR+vfli3BC7Bsj0SezdxpIaOCLHRJBmrm6AUSnN9tdH1QBlOUmXon0YZsDQd/Eux5yagdOEEvPkskOiDoEZs900zDFPqK+bD/z8NWal2jNyLolJo/Ly1DFlpmfpy5FzGpgLwDFH8QebbxEVCrs1tqUpMcLC2yLN46wMIf/CD2rf95OLkEY5F8W5Icynl2cGuJGxsdnuT4xotIEo9iud0SGWWiQzlND7G+FKiiTkqYQSgXY2jCJCGFjoAlrw0nA0kGhdSPhgxhFXNQyEtIeE3KhJkPwn08FQogGfPpULcDKi7hO0VNvQfAy3Lffzwq68YCaZyEZpaUujburLJiAI9rQiQFJaBOOoA5CmPprJrUkvLwUnl4uFyOVASii7vXyitrf7kCPzDKJ9/O3F6N3H767amIBAkxE4D6yDIkrrLskWUJvuHWxZCMO+khb6sqLyeu3Rjtuha5Unq88sqkvLwCScPqKciBT+G1LaCXJupBNd7j8oFsXj5m5VevsOq6upfbZ76/Vs48vfeJWfnw+6XSldVIx392nEJdMqk7apeV63QCjoCbsU68NagtHQ8GsyDRwYqc3KCyBfgTDMYMks2eWPv5/ODg5XfDN5fvdjz/MpOZn5/PZDIfZTLf4a0+42Uop1qAJNIr6RC8r1DVnR1snzlPlBdisaBRe7hUOp4dTKfDs8sdz5+PZzKQd8+j9vHnHc+7OjIWX3Wl0BvUKx8cPPFy/Xw0ms3GCorSShOyhfP9aycGh4bS4WWse0arewa0d3V0fDcfYZOMOcWr6deu5Hw+AYR8IOL8enSQg//U7zid+Je8xJd70O/3+Zwcl+ecXD6fTxHJDbpCXpBQtk/UU3OLTF8KFTgruuGd384EQRMncLoiffgiJ196kOOcPviTz1eUp/hCPI7aL0XHTDs88njex/mqykHyL9cvcU7U7BMM4hQurb/MC1h5KKla91AMlV+6dOnyClAzGXNNauzY34Q8h0LoYAu5N6Npzpfn4EtgwznVZsMHQg0qwGErfeR7+LNclPe6eJBQhnHoR6go9aVILRXBN+Xz7TMFDlvLATjt2wK+SuBLP+SU0khHOpWm57J+F4jf29snW6nlSb3UigjO1Mv1XtIlCFPTjm3L+0L9L1O+vJMD3dA1PuXHQjzmcnn9PO/KjkGGZ1rXr0mNGchB3xplaLSd45wWAesDQylAmcYfAjWX1wsN88bH5YDOyEUHnUmZdHDC7OgbQQNmFGhy0Gd5vb+A0Fxe6BNT6ArUzIry7aNhwUa1kxNypRIPzEwFh0JAzOXiXcEB1hIX7EjNVIzv0s9/4W2KBmrcxH+25/M+CzWeUHO5ujyMgZpopgY9fXn9cQqGik3DfMujYUuZgj9IVLv8IXNyKXdYqDkHZ77N22ETfPn2jSEnZ/5ZLOQi1PjYPMyi9Y5QyYZa/s3JvE3BUKSQOxnzmW3NmSvwLkKNX/YY1kIk2UINhv7J/5PnBLuW+bwvQibV8DKVGu+6BH1ioWa2+9TX03bjBLGFXvh9FhtXqHnRu8iWMK42tfmcWRE0zGxOWpMF8NNWK/Fr1FyzEclIbdyEn0Pt6K5tG5bPm1sMDs8f5BW/dmnZTK2Ls/SgjQ61YJ8TfKzPTJlQA7fsB+/SgK3Npyy+gcx1ds0Ca/PB9GkeoWq7wB4mjMskjIUaDBSoPoxTW/XgpE2GD1/F1RHKX5o1BfxIzWSzYMuCrR1DZ8H385afZZURCuC6PHTd1BzzKaeta25A/DGXKhNlVreQIbIWao2LEOpVZgO/a8JEzdPF2fqwBpQ7oyGvn8xkrpsJVvoHUhP8MdXWXOFhPTVHADxPS6pRe0yj5g2bqS0LrVLjNGroXei6qaG/btXW4hVqg1cNGTnjaZkaJ8AYUqmlh42VT9ysEcI0oH7Iq1GbaIhafk+pBdzVkiWg1qJqqFpUpebyDpqoRVqkxhmplRui1mLDMFLERmGkW1gxLMPSnuUWbQ0GYBRTHuKvB5f22Nbg3WmIOlTvUg44TFKbGvjrVrFBKgfUYPp2BccMi8tJz3LLtiakiXYMPQZNJ1sitZKMupX7nGG/UnOXKz0cMAdstal1tU4tGyeWBnFPcEAf80jiHlBzAjUv5h5+b8G0eRVJt0yNQ2qk7q7BJcvKeE1qHqBmG+A0INk4dFUw6Hf5Y/OybhcGqN1slZpTCMd5L1/odflh/BvrHhkULBlSQ8ohiCPUonEexv/Vfyy1aBwixULB7/VDWmKglnjTmmYcoWEYoP5oEKgFx4zpO1BztjJQcDkCqHld6ZCf9xYaoCa3Ooag3lH0OwVcmgjdNizmsJF0q9o5Zxh9ZhSn6di8sU3lQcE286tTIFsT8mF0amkcLNkxqX5bu+lsqb/w3WkyEQTBOYS+l3Uli4HIUIvUILODdvH8YMwPfWK8aIguR1ujBsoJNR4nHD424GiAGmadrbWsSi2+rF84EJmWqQG2CYUa2JppgY0eLjh9dTk2+9fgd6vUzJa8M7VNZ8vUcAwRal7XrOHE3h5S6+VhUhg3HHunh4NcK9MBOsVUWhmh8KF33vKUU01qEaDWipk7CTWXamv8hOG5FCaSbUkzSl6hFkJqXRZq1mVGm/rVcEEwPztTaX+FWka/K7kztcSQs56MimxRYDk2lQQrxzk0iOE7FdGv5bLlQqu2JuTTmE5FQxAbeJfxHIJSALZvKV5j7FXfrez1ZNMpxY2ZfsoJqcHKbNA7bnnCsratDdZFTdmyEJx2627oG5AafPROmKi1amvQLoVaL0bwNyNGan5B2Hkmw+pyXC52+qyfszYT4jWNGoa6HZbzwLWo0ZFBG3W24vNxTptKCgZqx8v6A7swhhogZNtsoMZr1Phww9TIvlU2N/3xrSHLphIMbmV7TaW2bHlYqFVqHEwZKX/OJoERKiMU2Z0oG5bAh2MtBtAceB6er01tl6gJ25ZPp8Kpd7deU+a1e6Dm01O76al3LZcuF+rza0J+6Oz2fd7uZ3pql18ZtluWeuunxuk+6r4JY0hna7SBWs76BovO/FAunRpKnevemjDv/KCtZcFdKpGH61yk3tmALmd9u2TA6MwEIUd9XOzu3sz5iN3pf+iDecgFmWIQ9ywGr+oeTJECS6G6cKXi8eksNRTP4da1wXVyTrAGsLUhXNDlw+VAdXWAlVb8TuumU/WtHO5TAzDlz+ZkcTNnHNGc08cHcZELZwMvT0Xq9mvDsd2oYUyUj28enZycLBa/SRlnUUJtSEdtxUgtvjMwARvmHxrKAq9cKuefoFK4tV8tglBzadRwMUdPLbcDNY50bi6UC8KfbC6am+su/jZniO+Aml+lBrkuP2F5nG9HajvHa9CudzcXHz7cAmqT3VTKsL+EuVxqCIyBj+JGFV9YEfXUrnp3HqGczxenXHmMswXiO3PRXk4fdXMCr7M1w2IO7R7L7RShY4/wuTjvj6P4Q9RWd/F+SjDYmhDXUQsPmw8t1aQGnoersc2mSZ76qVjsXqAWABr8Z7A2bGsu6q9SG9PlchKz4tqRGgCKBUEfHrbB2CqfB+sIp3T14Zx81EWokZ65Khmp2e9GK++EZvnBxLK5GBocf26qCN1+Tre2LCjUeI0aWnK91EI7UEMvIOSpBTI4F6CzwNoWqLyuvwi1rGZrXrIsWdXOrNidfNDeiXuUQxA8cCR4xmM4eHDFFwo79SMUPY9qa/7CSiXBph2i/OFO1ECJP6e4tDSgo25hG7pfx4zUlG1DZbl4cKl+aq4dUjmfkCfQYB7o7gZsSA2wKWNI0ErmgRrvV6jF5vWP27Bjlo19A7U8xVsCLoHrzem/JFs5PFDD1aixJKPs5kg07WZxU7LWCM3DO1PvQsyRJn+oW6QNk8Wo7vUC2XpXqYH2q+anAWpSu7oTNTyVQb2enOzGImGQnscx2r2tWJsttd4+XeQh0mO52rYA74zyPkueIwgpfUJRpQbYggNJ9TijJBJqnD014iXR0tLKBJrToHUXB42FZXsN1IzQalODMVR7DoXvA7TuBWQFZU5OoZnP3V8cqrwDP0FqLoUaLuZWC6AdA7WpQYPjcZ/Pumsh5MN6ewj1araGlpxklHgNqTkyNalBd+f4IPizLJk+qSnSgG7wL0N6d6RutnoJNZjJzOfam6Pm5N6dmtzanPtJxda9WXwNGItnOT21eMzv1ah5v9NTk+ZrUxN8uTS2zuJUuRSld9mxXphDNWp9yQCjUmPdEm7l1rA1LhX0xnn44+fjOerv0OMKtbMpfYWq1MiqzVjd1MZ4e2Z4+IYTpk8Dqa2FW90KtuLDxbP432bloICgjCGvOkL9LsPlafR8qjY1Ie132uQlEH3E9baWxU0JdYT2ZmRGfRhPpMmmpGU24HCRFUZ5NDetTJ98/NxUN6k//LsV8hmpDXkr1LzB+bqpDfA+2+UfcjBzGtzB1mLx4fbDhSI6tuLmaYS3MKSbRmHS06hBDfw3dCmwm/4wZdVckbR16YbMpGk9aiFKtsbJHIqLOdqvCRDdDvm25fgaoe7zcal0Pqy6tOj0VJHMA9CAubghhYeALq1Sg2TQG8sE6twPpd/P2ccdaGnxRZgyu2/dn9o8ehbmgYfFrU2cDiBW1Kd/vlgIV5FVaoYzZnTfDraWittAg4EbD+nfY6AW6pK1p4jwxu0um2MDghOSdJg6ERqm7UNDBFoRKl68z/sMAT1HNsCU2QCohTL1npyn53Pmg3Ba8YJ/DiYCiHGK9xc2p+DTueIc+LTuyamsPp3jfEGkRmyN5/lZ/QKbnLE5I6jp560+j8Nj5pTRzw7Fq9S8yx4t9aAl2n6LGgZoNJqKavnn9K8mVadc3DRlg1VqYUIt/kxuhJqtcLmzQGgborXuxam/FqHQ4q23lbCNE6obGILTl41XqOHJnOr0zexILZwTzIdAYHDlhvLGVe20amu8Sk2rOI3U7LHFFqfV7DM7pM6eBJrPaZxz4e0TVVtzeS0Xv9WgxpAHAqy+ARxq7j6UVASHttDd/RqgzW5NzaFv64YE3snpwnchGldHKMze/hP6Myby+A65dVh/jFXZKOMgk88blHPq8ZUh5WDRucoJNrQ12419zGYenvaDQO4JE8EkRmnQlFlMQTmDbvg7oRyMgRnH63V11HOmSMJnsjN4jNq8qAVYcrNAqntuu/vWIpmCNrdeny2CdyjO+fWL9ThfDXmVjAqzUaCm6xapo/byFxfVOxkuT/KqLGUJuclCcZWatuQRcNOecI2ESsidXvRn+RBPKRMBxB3F2bwlC4F353XUXPyy+ZF1O2oM3neSsRyzJSeOUxNFtKut4vbCT3PQU2d/er1ZVJ2afnXGRM3lv6w7Y0Z77KnhaoQQzxmCAPLYS9S6fcIZqE2UtVQRGuKZqLXZIkwfOZvLpqgpNDSI0ia3wrgCZVYt4NZ7lZrLfO63hq2p1Mxlqhk7lvcTtX0LSp17vXC8iNnBx2gMumOdmFHh7K1S8/oHlxgdtWX7YJCscpJVieq3uHwwbJ1xOSO148PatgSOUPPDCdV3Oc8tbKYovU8T8pZZj1MW7zVqvDccYXenBrbm8DzP532mugo+hLa1sIUd9XoRCl3cXpgglgYzgVMwjlBw61Vb8/IFHTUWj+XZtsoHAQWatE4Pn85CFGjuQhO1E6+0XzPHSGwiXWvFQ3DmFosTU8qqAwzPcMquHkgtXaEGPW8592dHDZ+9lDuMFSWPIAG04l83Fzf/qmQhMIduUVvgUye3KOLBjVVQZm8lXgNqK9WS6chN+1Y5nblp9Kbk4Ds+hpbKpv3K/GY2fGgXoaYcaU4v0er+uESLuFFkL9CIc0o6gF2NC9C2O8nqBpg2Qv3hch22BtREz12seUUh2YZHS1uErKB46xaZNKduFaktUoPNlMVZw9fEo2rUsmOsjlq6RqNSaaVUjuy9peLpWN5ml1eh5tJRG1wSA1Vq0drUhKEtNV8ntbZf1sEtjyo1r//EcB3U8FYfz0mnnhqJOd79uLt7FvPdYhhNHII1tDSQszmbIIXj9NRcQd1NXXRkyLZReYFS1t3wcUpf7lx0h/WkVBqzW41a9GqFGiuWszWoYVI1vVWBlsMzkbZBikA2JSrULr+qY4QitdU3xpgS4qYUhGULc2RJbW6hu7g91z0BGQIuEfl10W21hvkJ/QiN9VVDRbpsT80ZD6kdBe5sKEiebjJEUjWpBVfcGrUAUqv1DI7gDKurkN33c77aq3A6apANXr5a10ksml4Nm6hxvvg2ppqkp+5vTUKUtvmaGN5fpwWbR3mQmt7WenXU2HLUtk35tDJkuPw0Fc+TXWz7x3gINS+hpswGwTG3Yg4iUBuOOe23QxHHLSWPIuPDJsdXX8YbqBXqoiY6JE/aacZG/QR2dX8B17ofFhc2ERoSPF3DbpzkIIZCDWbv3oyuULQGS1Wdzih2v49LxYZc5tTQLGANemqhPoeyUoRXXNluthKbFfLpokKNjI/a2vmsLsr1F8y/eK1GRiVFTNQ4IXt/m8yWUz9NUQjt7HYRTW3q3VpFm6iNywZq5qdk8bAKBZEHxNETtRdEjNSqkUcooybYjCjRtputgo/E6Ory86J/x8N5gl9PjQ+O1UWNlvBAsJ6aLzcHaToWOLU4Vdz6pjg3RebR7XM1zwYYqBlSYHo4ZrY1sorpEvKpaDbHGSeiGtSyer8WH1evMEFqtputnNMn+Ddx7xbbENvJlKtP7JI1D54PfijvTg3CNalspCYIEGP89Ramu+BKt2aLi0rM9pqCfKDGYyoGarz+ZA4D1Kx1FYYgIEynMExzcjW8eVVgDOlszfvMo6PmskMhpM7dKiqx2vaQ3bONOmrOeKxia7joWRc1mnWXC0ZqEFODByWpyNbiZvHWIlra5Gtqh4NHuWiVGhj6zeoNQYzNGMLF6fhQKk9yUXJQaudDJiZqHR7lZD5SWzGd1eHIIZ7Y2QVc5QBwC5TTV+ucpA01L/jkOnb2RCi6nDVM3sL0T5OQOt0HX9a9sFCcmiNrBj9ROzwNJVSpYTqqW8xxsFfj+sMHOHg4GJs2m6C1tceVJ3bVEYqWrG3tsWPmLWo81xF+XUk+Z/M7+TSSlKhPURJqPN9rXmCzo+ZmRBhDRmr+KeIRcN6EGeAh8XA/UTuOI2UeUqm5+Inq/WNks7VKDXo+Fp67T4Wc5ieO66bmmvWoy61AbSBnfC0Yln+uWFSp7TYTEGrZXl1GxVuWJe2p0RIeWDDMobj/Cfb98OzU1P054t4wY6+bml9/MgfGkGEVKjOrobcAAAovSURBVB/e7n69sJXmdjvGpGtZSKWmjFBXWFtgs6EmOKdPa4bW3f16erdzefBj9dlTNTfQe5edqcV9nOHgkxOXvNEpnD6v5CRgaZaVar1w5CCGi6x54HR3QrfAZqDG+bIfby0s3N/6mFyk0iC1Xgu1wLyZWm4Rl7eUmGOLbD/saNJWarOROqm5DLaGC3W4tAZGtrlAyiez546hqOJRNVvzXq4+xCmPGRJXLt29dX/z48kFjAfqHKK4iaynlq4sSzoC8+ZtwwkSJJHDFd2bKecu0JDaUEiXh+JZbHpXaiJY+Qpv7HRwPinI1YvFqdPE5LZ3mgiU1/f2VqlB4dGrlduukwN/M1Qy3b2wvfD37tO1j8xYW4bPA1bXPPgTw+qF9IxE95mopRYn1Yyge3LO9iysue7Kdqi628J7+TqpkdnbuEXo86VgbEJ8i6vHU+d2eZYYDDUYquahUHR2pXI+Ruz7m97UhNh291R3cXtoNyPQU4saqV1eqlDDZ88NkpvSmE2ejtfhAqrUwsoeFR8u10ONdozljNRICJX6priIO5/FxaFd3baJmt+VHXNrq1T0/N90oz8v+Kbnpv7+cLp2qm5HTWmXNkIHKwm2JH9ppnaLDE5ANzVdZwlhV8XW8HnKy8P1UcNDP/o5FPNE3NXDrKp41u+ssZ6np5bVUYPZIPZhhRqTSenzUGhkPpfL11rdsRXlIEZ1Dq2c+6ElyUyNu99NRmhxatpX3/NVnJna1d2pYbw4kDJHnCTCzlHF4jaVq2euI2Oour6GS0WV/fGMYe2XXEbW6HOwCjVes7XCgHYyT5KfmxT5QlPoVoqL03ihz+6lCDpqJITmzQ8722ZUIt4qZ6MORql/Njxt2YaxE86ntksZoS5v6MekqO7Gipl8S09Yo3rUzleo8cF59cIQUfLcMOn25bOLCwvbm/46n6bzcfmwy1ul5uKzuOihu72yBjXJfGeVUlVMfcwn/2s1y5c2Uot3ydo9ZuR+tLoaUFt92mBrfFB7sBapWarizE1Px3c50l4VoJbmtRMLivYBonpHagztsKemZtV1Fa4eZtIiDxA8VaRS62hgtrSXfNhAzX8po97oQ0ueZUtVfHgeum4XYKIGPjk4L+5KTYKSa9y+RG5MrOspXz01L16EwlOegPprlzwd1n2GhgSfsFYuKYlq1Do8AY3arOXV+Ej27mt2muAxN16bDXAH3HsJH3beZYTSkig/a/VuF86pWkNQtTUvVQkV8ahUy7ameJ6osqTDe5eV++IhkLZsG5LdB6HO7sa646aEQi1EJgNXaFx263+TfS1qrd6+BJU0UONdkJaIjGLlnps7PQ9QlyjPpVeo4VmMpEat1kZG/ZVPDSo3O2pxDb8M1JjdqOHWe4sFV6llVVsLl2GAEmqJN61OBk7yXHqVmhfSd1GjVms7tAHtUZchGvRf94j6X2RfI8rdgxtx8mGXYYS6Lg+71culIum657Oa7VI9j2Zr2kIU9HjNTeT6Rd0OdalJvMsP3oWxo+YwUmv5RpwqtaxGbUlmFVuLDO01NS+k7+LeU4tq1PA2MUk/GhVqjP56NCkgtXojjlN5Lh2pFXhlusuuBKBkhmHwOefdnmyrp1141WcU7yLAo0uDS2q+xg5Ptzr8tY09oOYlSw+u8CsGCFWsTbG1DpnFW+I1STpqHF9ppOSUmhsEB9VLc2NXJDd2ieQYzvrqSS92UK5R47P4NINyZslNGsUElnpbtTXBH/OqlkwuYeVdg0s0nXCQS/bx7wduVu5wdHgY5VJ+5dJ8Vmz9HiGgpgydmGrtEComkwxe5i6+KuRbu/dRIE8b8bxGjff7C2OyiOKQl+It2xpZUMW5JujHccK7CivJZCBQIcSyaGvLfe+916eT995r1coFdYvKy4fCvHLVYBxKUfUHBfuLcevWzhFqwCuIK0Y8/1/+eJdW+YzddmgjwinUQLtCzcvzsfG+9/5kANS37Pj66Xq/Tn7uf1po9bZMlZqrdyIaVnzqpZNPVf2/jtufgKpXNdmUIHcAB8PpNN4X4Pdfatea8KSO5dpdJK48xRAMh6NIzcXH/txvINS//vRrR/tbnT2dFYFPZ1q924XzKU/sxcLxeGyCPADrvfmWWsDP8V2X53YSPG8K1uB1+YMTcQAXwmXqUPtbat1Lud1V7Cy+WC9kn/5o+hJfgBJCLr73ESg+VEXUeeitdqB2qOdQReDT9ZZvKfGBNfj92XAcZrhQGH0bf3z0MCml82e+xYwKqIUu8fFoGjJrf2iigDn2ybdI5Tt7/tIqNVxQ5f3xdNQLHjM0Ae3wQp8c6jykFws1+Hl/y7eUCEgtfZlki+AggJ7r+PrhQyq1VtvlC/W6oFkuxWOCdq/3/Chp1uGeJy3bGm7lxCfwpAXMM6GhoTj2Sc+h3aj19Idan4eCrgly/BvL5nuDEIj2H+7EYjpLLVMTYiEwApefD5EUNwjUjs+o1NZ2eh6wPsnGQxOKZnAD/gL45fBoz+GdqUHbfq4eZjI7OE5ZLzIe91bvVec47Uc4D8WD4Ef9PE/+gesplDo1ajX2VTiuqqGqWbB8H8dQbxxDDkUzD71z+WeF2lsvbY+/afXSV75SC3OpQ/FgCJ9qxd+lgb8NxAXjZDdqUHR/Ia+KqouURtb3fT7l97kI5vIE7TexkIefhHicBO06ufykRynlh//iUopu5Z1k0Q6VV3RXCyCaDb+ChQjkOtAocjkrMWav///2q7b22JvXlHMaFFIv0O0TKr90RjMHQdc9yiOVTl/aTxSrynH+P99/SOfYDvcctlLr6Zx5cvHevXaQkyhv3rwJhyeOT4AcV+SEIpcrUigE8dfuhECwh3KpfDAUig0eP3+eenNSlUejnZ3YYZ2jaxeJcr120HzeqPyETnkhi7/TJxTqxd+ek0ul8oO9vYXLoP2cpvzFmuLXeg7PPIK63zNrr1RdUX9Z0z8IygvkFwaF4nEvn8th3U94Q4XL5/Xan+AMvSO1w4dhmu3pecsiowaZMco6EQj2fi6VSmt//vbuyfYH/TOjo9W392hG3glVeOtQQ+rXNfX9/T+UHjxuv3vyYml9Rq++U1HecwhqvmvdTforde8vlR6sPWq/e/fbEtRd9/aezkO6EWpHDaD2ALrD6uvAQA53qp8ZYpZODT/5TwmWKiGfUhSqAs09KKhSGaL4uVqUou+wVpJZt/J6VFjRjcpQufJTzQB6FJep9joRrcZao2rUHaumfecwqXsP6eGeTrXa+E/5fEdqPTgf4CgmtVKU91TaW32ZXlGPVo3q6yrY1RYcqjTxMKmHUpSuqwzSQ/xIjwZXL9CJBFFPp/oFfq1z1kpLe/S92tl5WPd2qI9ad6ymrjnKV4reQ4e12pL5safSihrUDmQ3OaDWjBxQa0YOqDUjB9SakQNqzcgBtWbkgFozckCtGVGp9Rw+3Hkg9Qvkhu2OF29hjvI/XZX/dwRTYRyhB9KotDtm21+0H0gj8qJ99r8BfifV1katMA8AAAAASUVORK5CYII="

    }


});

var Product=mongoose.model("product",productSchema);
module.exports=Product;

