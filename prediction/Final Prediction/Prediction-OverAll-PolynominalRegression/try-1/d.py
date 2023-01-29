
# primary
maindata.sort_values('Location')
xs = maindata['PrimaryGirls']
ys = maindata['PrimaryBoys']
plt.scatter(xs, ys, cmap='Copper')
plt.show()

# upper
xs = maindata[maindata['UpperGirls'] < 90]["UpperGirls"]
ys = maindata[maindata['UpperBoys'] < 90]['UpperBoys']
for i, j in zip(xs, ys):
    plt.scatter(xs, ys, cmap='Copper')
plt.show()

    # second
xs = maindata[maindata['SecondGirls'] < 90]["SecondGirls"]
ys = maindata[maindata['SecondBoys'] < 90]['SecondBoys']
for i, j in zip(xs, ys):
    plt.scatter(xs, ys, cmap='Copper')
plt.show()
