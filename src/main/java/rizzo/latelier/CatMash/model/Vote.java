package rizzo.latelier.CatMash.model;

/**
 * For now the id will refer to the user IP TODO User management username/pwd
 * 
 */
public class Vote {
    private String catId1;
    private String catId2;
    private boolean isFirstCatChosen;

    public String getCatId1() {
        return catId1;
    }

    public void setCatId1(String catId1) {
        this.catId1 = catId1;
    }

    public String getCatId2() {
        return catId2;
    }

    public void setCatId2(String catId2) {
        this.catId2 = catId2;
    }

    public boolean isFirstCatChosen() {
        return isFirstCatChosen;
    }

    public void setFirstCatChosen(boolean isFirstCatChosen) {
        this.isFirstCatChosen = isFirstCatChosen;
    }

    public String getCatWinner() {
        if (isFirstCatChosen) {
            return this.catId1;
        } else {
            return this.catId2;
        }
    }

    public String getCatLoser() {
        if (isFirstCatChosen) {
            return this.catId2;
        } else {
            return this.catId1;
        }
    }

}
