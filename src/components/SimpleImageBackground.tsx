import React from 'react'
import { View, Text, ImageBackground, StyleSheet } from "react-native"

function SimpleImageBackground() {
  return (
    <View>
      <ImageBackground
        source={{ uri: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAH8AvgMBEQACEQEDEQH/xAAcAAACAwEBAQEAAAAAAAAAAAACBAEDBQYABwj/xAA7EAACAQMDAgQDBgUCBgMAAAABAgMABBESITEFURMiQWEGcYEUIzKRocEVQrHh8ILRQ1JicrLxFiQz/8QAGwEAAgMBAQEAAAAAAAAAAAAAAQIAAwQFBgf/xAA1EQACAgEDAgQDBgUFAQAAAAAAAQIRAwQSITFBBRNRYXGB8BQikaGxwSQy0eHxBiMzNEIV/9oADAMBAAIRAxEAPwD5Qkmk+1d+zE0XpIG30n6U1iOIxgFcjI9qcQAgHepRD3lxxUIWRqG2ogGo4Y/DdmbDKRj35qf+kTsyCwAwKcUqJ9aISNZPrioQi4kk8LDOSrbHevPeKYtOpqcX9/0NeDd3XBnhU8TcEqO22a5vY02b8fTYPBS6WNriMqSde2PnisTzy3ODdfXuLfNG98DWUXVHlt7yRwlrEdEGooPNy2xzt+9YvE808MVPGur6/D+o6SZm9S+G7ey6y9rZH7SmjWqE+SPPAkYenPA3rRi1ksmDfP7rvn1+SFa9DI61B1CK7SO9uftjBQEdJiyqvYA7itemyYpQ3QW35U/jwQmK2E9v4jSIgzlzI4BPP4RW3LPNk2xjFy+Tq3+lCJxiNz2z2cEM0V1GzyvoRB5NI9djzvzWSOae54mqS+uvYnUz1iAuw7ykHjxG/l/LtXewadYsH2jIm2ldfH8fz/Azznue1Ghdx28vTwkAR7mMgGTfMi+2+M8VxNRr8mbK1/LjfKXHD+NWXQx7eox8PC3lnFzcMFntyrqSfIMbiudqt8Vth0f4libTMq5Se76hPoiabDlgVUkkE7Ensa3RlGGNbnQbHLEXsEMtj9hJkly4YgeUc8/3qpSw+asrnSXHH9APpwV9MTTJPBdNLEQQyhhpB5ycHHtTaja6cOUTlmBjNexMp4Ag7VCF8cjA8mmTEaLshvXBpxehBBHrmoCwk1Z2OKZAHGhK2RvJA+iN8fgPyznGPXvn2rnZtbHHqY42a8emc8TmRswyDzvXTsw20A6n0ohTBB0880k8amqbdezoZOuhJMbQNG0Q1s2z714nLazScenPB0U3XIZs4r2a2jtvupDhGDEac98+gqyGPJHd5nCScvehdy7Gs0d301LeOOVEjHn8RRjUcnIOeRt7c1iwqGfJyufT6/H4DSrqX9OvBPFcSSSIrsViCxJpwp/FvzuM+25q3xLQy0uWMYx+67abd/X60LDIpRNm16/Db2kdsbMG4YhE8LGGTfzb8Yxx77Vys+hnKe9ypdfn6fXzHUqRldQt77q/U36lAxS1iHhBTJpZcDUT+vPJFasM4aXFHE1zL24fPb66gck1aEbGK0MhKyQqkMgPjyEksp32HtvXd1en1eDDjXNu+OFFNevx4oojOEpMU67rfqCyS6kkBwUKYCAH9f7Vh01OCi+nryy23QlK0kpaK2dgXHnKnSD+XFdfWaxZFsS4T+N8fX7lWPE195m3ZSMkLePDawxrgKyPgD/Sdz9M/KuFm0qlUozu+v8AfhF92V3Ikv5lRbaMFBpZlQAnG+CT2quCWHmT/ELHOl2YlUXTszvIcHU2W22A+VUarJVRXQU6pbVY7KRxjxBg+3yrjPI3NIauDHvLSCRlk0M0bD8OcaWrbizSgmhfgfOdPavptGWwgpopAbDCUyQtlqoaIpYFGn3okCUYxRAbEyo/wncK/iF9LaPvDpGDkbZ9u1ef8Rj/ABarudXSy/h232sywCmkbkAYzXooKlRyG7ZPr3BpwWEEIIbAOO+9LKKkqZN1FbE55quGnxQVRihnOT7ggkKQM707xRlJTfVcfj/gik6aCDsIjHk6TwM7DvSS0mOWoWd9Vx9fAKyNRcR/ofUB0u88aS1iuUYYKP8At/6rP4n4b9vxKCm4yTtNfV9A4svluzSs+pWslzNd3MYiYhjoXLFiduT2z+lcLXeAamTjHFK1054qv61+LLo6iFcoyftMyJLHHK6RSvrZAeT6V6eGjxVBzinKKq6/EyucuSbH7Mt0hvo5Ht8+ZUOCf1FHVw1M8LWmkoz7N89+ezJBxUvvdBx5bSTqDNa2qGJVKRGVdRO4wW7n+3avOa/QeRot+ef+43br17pe3c1YsrnOl0NPpFkZbzwbeOIyyHLPoGE/vXlNRlqFyfC9+prUTb6/0e26h0y1t4YHe4Nz9yFI1EAHUTnkEAfpVGg1E8c5OT4r8x5LgwYIPsdvKNBEhzGFPI7/AFztW2V5Zxv4/X6lRV0rq4s7jwxZxz28ExEjl8E5Hp6fynFX6rSLJy3TaCdt5ZbMSwk+HIuQM7gkcH33rzjxyjOvQftwZV5GkaBi04Y4GIU1HGDyM1t0/F7q+YtI+X4xwBX1Kjn2Gq7b0wAgnrUIEBUIGqluKILLEjNMBs2ZIyfhqRfUpIP0f3+f+c+e8Rf8UvkdTR/9d/My4/wKTvkV6KPKOQ+p5gi8UxCtmJ4ogB05o0QnTTUAe6f04XSuzzLGqnG/J+lczxHxCejrbDdfvSLsWJT6sOWyS28Ny+dR3yvp3rny8Q1GuXlYYuL7tcr8aLlijjtydi0miMq0wKqfQc108/iGLTrZe6S/X39CiGGeTnog0ntofJMhSU4wSRgZ965ePxXJOdyrby/n2+SNEtPx90dcWa2bPoj8bnZzgd9qu0ms1/2nbn/40utdfTkoyYobXt6i0bA4MbL/AKax+IeZ4hnvDFyiuPr66GjCo4IVN8s0rDqFxZuHt5lYsoww3G49a89n0kJcTXQ1KXdHUWnxXYWlt4l7bt40aELoAyeON+4Fc9eG5ZSqD4HUl3MP+JJ1bqL3cmuAtllA2GDt+fvXoMelxQwNJ3JKq969f29DPKU7KPh/pNnIzjqMkFuqsruGOAoByAB9ay6qeZr/AG4t/VWyxNXyzdaZEvLhLK7aeO4lC26KvlyByduOa5kobYrdDouWMq9TJu/iLqjyvJYWFq8erScO7NkZ3JBAPHarY6fAlWWTv69SNcnFaK+knMJC1CFirnajQGy1UX+ajQGyzSo4oi2EuR6bUUQ2gA/Q1BPIYbsBjyt9f874rzPiX/afyOzov+AwYiTCh9NIr0mJ3BM48+JNHiO9XJC2e0UaBYQSmBYQT2qA3F1sZYpVMJ85OBsD/Ws+p02DUQrOrivj+1BjklF3E154Y7axxOzLezZLSHBUd9hyfevIPdrdVKGi/khSq3278vhL068G+M1jgnk79zI6rYoiKbN2umEYErqmVQnLHH0/oar8rPgX8RDZubrnrVF0MkMnEXdGTCim4TWPCjIAfn8PqakpcNosNuG0TqEdwpd0dRmNJGYKigjfJ3OxzVT1k8UVB8x9r6/D+pU4/e3GemhRIiKrxqTpfOCQOK6mly7YODhy+b7/AAX7CTTck7GrJHjg1xyw6JGAUMwGD6k/LO9c3I4yfKfBdfYdt+mdSup//rRC4iLaRKcFDvjPsM1PNxxX3uH6dwmzdhYZGhaCHXbp4eYwFA75Od+abw+MsuWDi3y7+uO3f2K8zUYNy6F3TYzaxDqEtt4qrHnUSBkggYwPT3IzWvV6bFqtVHT4JqLb56vt6Pi+OidFEck8eJzmunwNduv9KmsXAt3jnWL7tGXbI4AIzis7/wBLatZkt6cW+WutfB1+pP8A6GJwbrk5FQyrgE9yfUnua9rg0WDBeyPX6o5c8851uZzuiqqNZ4JRoAQXFGiWFpNSgWEBRogQ9wahDdRW/hEYRC3O/hg4ypOxry3iHOqZ3NH/AMCMC3Q+EoIOQMfrXpNJTwxZxc/GRlwjHrWopsIR+1EXcEI/aoCwhH7UyQu5kiLOxpgWMTO87BnOcKF+grHpNBh0rk8a5k22+/P7Fk80ppKXYZsEnhSWWKfwFK/z5CyjfIPcfnWHxjU6OChj1OPena7Nx6c+qfwLdNDJJt43X7jovisS/a7W2kh1anZ4wRKTnfJ4wCMCuFqtNoc0POw7t0lSSkvuV0VP1p3b57GvHLMpbZdvbrYhd9Stupwzgrp8JTiFc4YZ9Dj/ADFYtGs2ngsapxu3fDfav8V8y6cLlu7mLBNbo5KQ4fGPMcrjfPG+eN60SlPduh934f3LNvFPkd/haxwCWC6icNxGG8x34xxxSeZz7L5f3oF2dFZ2cou0W7SQxaFWSG0U/dnGwI49CdqqxaqWBXhdS7N9/XkMsanGpFstqsck4lWMsSfDEmVzg9s84966GCeXd52mul16Pr17evovyM8lBpY8r+kWQX/8PUROiTo65ZAw8p/WtuHwp6mPm24Svr6+/avkVZdWsT2/zIyXUyOzkfiJNemilGKS7HKbbdnhH7U1gOd0Vko3We0VKJYaxZNQFhGLFElkCOoCwhHRoVyOgWBf4XGpC5EqoSW/6SNx9efpXkNXK9RL4npNKqwpexhQgFW0gDDelek8Nd6dHD1vGZlgTNbzJYapRFLPDzUJYQQUQWGIlPrRBZIhqWwXyWzomiCGYsUzqTUPKO/0+teH8WzSnqbnjUJdLu3Xy79/VdDtaSCjDiVoG6s7m9t3lZfJEwjRQcKgxsdiM+u9c6GOEZ1iTd83XVfH6+RpVVcmkKQdN+xTQ3MsilmDMmY9QJ9RgHJ+uBV+rjkxTlhkqa9xMc45FuQ7Y9Dtri3luI9cyK3kCgqW755xiq8GTdqI4ZurX1X9+BcmRxi2kMx2VjAYyDLP/wAyk+H9M7nI4rs4PA9TO/Nko+lcv9kY5+IRVbVf5HQdO6/H0+1VYbHVMXJfLkAj0IO5z+lTL/piOTK28n3aVcW7/Lj/AACPibUf5eTJ6jMt7fS3SQrD4hyUVsgGvR6PB9mwRw7r2+1GDLk8ybnVC4j33rTddCoIR0LIXQrEpJliZxjhX0/saqzRyyVY5KL903+jQ0ZRXVHLeHQNNk+HUJZITFQFhFATkCiiWTo9qagWHHHqYDHJAqN0mwLl0bkhCWsALOPv0bAiB5Pofpt+VeJyu8jfueqxcQSMG2iZGdH1ZBB3r0fhMv8AacTieJKsiYwI66pzS1Yx60SBiMVAMMRCpYthiIVLAEqqPQ0LIPwrALGSJixkLArgDA7/AKV5zxHwvNq9X5jrYotLruuuPbrfy9zfg1McWNRV3a+H1Qt0kfw2Ys6idMnCt6A/vzVeDw7V6nQT02VvHyq/dcdn3+kNl1OKGaOSHP1+ppdQvY5JIWt03ibUjHjJG4I+dHwjwOWnwzjqXe9NNe3PR9eV1+Qup1u6aePtz/lFEF3LFDNFpQrKCCQukg99q3S8D0vnY82NbXB/Jr0a9/8ANlK1mXY4y5v8hfwyTk12DKEItqgAhFQsgQiHapYQxHQsgQiqbkQ5fwzSGiyQlQlhaPaoSyRHRQLJ8OnBYxZws04Kx+IV8wXBPHyrHr8rxadyTNOjgsmZRZreBO0MkBtp/DXz4EEnPGATIOM/1rxl3zf1+B6f2Rx1rcXEPXbiymiLEyMuQcAYPOP2Fd3wrK45NvqcnxHHcN3obojPavRnB3BCI1AWGIjUIWBNqgAhHmpZA1j9s0LIWCIj0xUtECEZPNDcQIRGpuAEI6m4gQjzS2EMRGpZAxFQsNBCKhZKDEVCw0EIqFho5fwaO4tZ7waKYrJEW9GwEiKpZAhEDtijZC5Y1QKXYKpJZyWwdA3P9D+VcTxbLajiOt4Zj65DMsLPVcTTanLTwa2XJIOXU53P6etcSV9DsKuon1W2Nt1uK6hBKaUkO54Kjv8AOtOmyeVkT9DNnx+Zja9To1iDAMu4IyCPWvWqd8o8s1TosWH2o2AsEFCyBiH2oWAMQ+1DcQNYqlhC8KhuDQQhqbibQhDU3E2sMRUNwdoQioOQaDENDcGgxD7UNwaDEPtQciBCH2obiUGLf2obg0zirTqvSrwZt76Fv+ljpP5GqI6rE/8A0ap4MkeqNGO2aUfdKX76Bq/pV3mr1KtkvQMWExJAickemk5HzqedFdWDyp+hJspFBYxsAPUimWaD6MDxTXY8tsSQFXUWIAA3z+VVZ9R5WNzH0+DzcigeFvO4fxbfyOujSDtp+oHY15bNqJZZubPTYsEccFFES2Fw0qtb2yq5AAyygY5A5+Xyqve+rLNq7HO/FM8tm9l9qiTBiKgLvsPcZxyKug9zK5raaHwr1ODqEQswMTRDAGRuo425/SvQaPUqUNr6o8/rdM4zc10Z0q2p7Vs8ww7SwWh7VPMDsCFoe1DzCbAvsp7Ud5NhItj2obybWSLc9qm8O0IW57VN5KCFue1TeSghbntS7ibWGLf2obg7Sxbf2obw7QxB7UHIZRLVgHal3sbaixYB2pHIbaF4I9BU3DbT4KbW2uuppO2MKMspwAT6fXNeXeSUcbidXeP21qD1B5BMyRqCR4Z0bjseffOaV55QhSJu5D6feXsU0k79Z6gXR/xPKSc7d8+mBTz1E+KSBuaGJfijqsj+IvVbhJlRU8khVWI7qDjn1/2po5MiqugHNvqI3HXb9o5VvZvtiSOX1ynlt+MccmrZZZ5I02CMtrtFdz8UXkqoiww/dr+NQdRHvvz9PX1qvyU+rLXnm+410XrHUFlW4MSPHgjQ4PHp6b/T9KrnGMeLItRKIfV789VXwrqG1t3hOtHQNhhwy7Z34O/Y0+K13ss+0KfUUEc/RvEOo210pZSyMdQG4xnttTebJZKjxRROUZqmaVh8ZdZ6foW7tlubePIbUPvD2ywPf2rfj1slxdmWWng+h2X/AMx6MbVbiNbiRT6CPgd6uevhdc2U/ZmdB0C96Z1qUp0+5jn0DU6DZlGOSO1W/aYuNoKwPdTG7i2FvE0k+ERV1MT6Dff9DTfaY3SD9klViiT2TwiVbmLw2OA2rk0/nLoVvTySsaFsPSn3ieWT9nFTeTyyRbDtQ3k2Bi3HahvJ5YYth2obxvLDFv7UN4fLDFsO1DzBljDFuKG8PlhC3obxljJW31EgDJ7Cg5h8qz8xJdSB+CWbcjG1cd4jXtZavVJGlZmJDHIpXgRNrAS/IwNb4Hpmp5PsDaxd5nmnKxhiWOwFWxhwHaTL4kasPxkcafSio8h28iqJcNINKvrY47Zz6U+0ekbVtclLUQxxuNYy2TkjAz+VUSxPdZU48iqxXCYYh1GnIOM5znG3506iuhFE3OoNPHbWwkn+0Oqhfvxk40gj+uB8qoX3pNsjQM9lM/T4L3QuJ4mJjB1YwcAntnOabbtA4urFba7vbmeK1iTWePBVBuOwouEeoKNPoHxBe/D/AFZ7uBokk0lGEwBBHGNIxg5/aik4rgaLcTu7n4/t+odEvobqOG3uvBDI6Trp5AwQeOeN+TTYZTv75de5GHHFeXXwzbPb38JnDn+ddBZ5FCrzyASfpWnzak3QHC4pehr/AA7N13omnps3Q7uZI5pAbmNQEkU8Hc7bgH1FWxzpctlU8MnSRv2fWb268VV6HdI0bY+8dUDDuCcf4aZaiNWyr7PPsPwX0ryoj2rRBuWZtl+e39KPnwrqRaed0OF2VsZjwTsdTY/8aV6iAy08+wN1eC2j1eH4vlyRGwP9zSy1EUTyZegg/wAQgx5isLvBQ8qAQ3oPWs0ta74iHyq7CEnxJ1dY0CdNQMB5mZSdXyGdqolrMr7B2SXYCz6r1+80+VITzkjAwAT6n2orPlkMoSfYOe+63aO0Ml3rYKsm8StyoI37ZrPl1eWEtvUOySMb7b1aWabxr25BLZJTy5P02+lJ5mWfNkSkz4xFDPnMUUuoEY0oc7V1q4LB236NfPZfahEsUTOVWSeZIQwx6FyM0roJQ9i8eBLNbIfw7TowJB3wQSD9KPABmz6Q06TO1yikLlApJ1HIyM42wCT9KNWwOkuQv4NexxK8gGGOnOSdR5IG2T9Kaq4YN18osi6LOd5G0jHJRx/VajRExhOlxRxhWlYPuMjgjGCd8VKsN0aEHS7Kd1+0XRV0U+H5kUA++/8An0orC1zRW8sLqyyOK3uYo4baZWZMM5R1bJUYH0wO9SOFS5JOaXBSLCBoCgulGHIcqmdQwoRcDtg/nUSi/QDaortum2l31CGz/iYSaXJLysIxGVPqx4O3oaP3UMk/Q6J/gjpFrCbrqnxF03Qxwc3COxPzDc+9SM4t9COLQgH+EuluTYSeLMUIaXLuO+y8c49TTJOwW6HmhNpHDdytBJJKA4WOOU7crldxnH60Y4912mLPK49Gh206qIrgzxdMnnnLZDzBYtx7jJIz8qtWktKrKvtTT5ao1bjrV7cyWbyLo8E+I6i6kcO3Yg7EVI6F92Geuh2RaPiHqfjJINKBV3WJdAdiACSM4+QxtVkdFFLl2VT1rfRCrXt9JIJGuLtmHDNJk1ojhilRnlnbd/uzQTrvUxB4PjzAZ/GX8w9s1W9JjcrHWrklQUfVb4spkvrjK8Ff370stFBqvr9Qx1s0+v1+A9J1e+aBUhv7uIhApfQpZiByfLyap+wr1Lvt3sLwXXUxOry9XmkCjyq2EGe5wN/rn/ZJaFVwx467nlDUHVp4LkyXqrcgDShVVOAd+Tg81U9A+qZatdC+UPQ/ElmNRCRxjP4XgX9nqt6TJH/yWrUYpc2fAbL4imgwDZ28/cywhid/cGldsZOjbteq9O6jFHDedLsVjWTGNAQZ087KMD/elcZeoykiOoJ0y2YfZ5LJfI3kF1wT3O57HFWRfHuVO93sISX1iuAl3NJ6todyNWBn+UD6/pTRlJE2xl/M6Bn6jaGcz2cd2G2Hm2GMfL9/pUam+rAowj0FoepXEYKrE8mW1apd2+WdVPFMWW1jjdUup9GqIKFXACxx4PzyDTeVudsXe48IGO4uCHXzAv8AiPib/oBTxxoRyf0ibeB1bMSiPPJDNk/rVkcPAs8lu2XCxMmNcuP+1f8AenjpoiPOxmwsorO5imQapI/wl8H9qfyI1QnnS7G2Cl0um4jhYc//AIrtTQwRXYSWaXqSkECHKxRAjjy/2q5RS7FLnL1G45dIAztTKIjdl6XDcEZ+a0dpWFrLjPhIPmoNHaSwQUb/AIY+iipRLCURDOUapRLDUH01gdsVKIWi2dsbNv6kUOCFkcLofMU/1b0AjdvJCredI223I9P0pJJjxa7jBlUsfDSLAH8x4pNr7j7lYjKkzuSFX/SKZKPcFt9D5GoTGAg29q5lHX3Gx0+VBAh0AMGzxR2i7ha9m1udIA3PAAqyMBHIUkLNyeTv/n0ptiIp0WxoGGG3HNWxgityLVjQcKBTOKAnYRA7CqWh0wQBq4poIEmNIdq0xRRIuQ06RWy5eaItjdu2nORRFYwZjjYD6UUgMgSH1AphSyOQ42OB86gGhmOTI5JPJ3qMUPxPKMEkemahA92wFGM+gNQBfD4mgMr70rIXKznAkOWHfegQYWRcboPyoDF0IjfBaNcHjaldhRLpEoOV2P8AyihbGFzjP3bDH5UQH//Z" }}
        style={styles.background}
        resizeMode="cover"
      />
      <Text style={styles.text}>Hello, world!</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center',
    width: "100%",
    height: 200
  },
  text: {
    color: 'white',
    fontSize: 42,
    lineHeight: 84,
    fontWeight: 'bold',
    textAlign: 'center',
  },
})

export default SimpleImageBackground