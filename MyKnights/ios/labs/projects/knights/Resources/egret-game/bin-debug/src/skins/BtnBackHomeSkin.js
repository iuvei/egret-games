var skins;
(function (skins) {
    var BtnBackHomeSkin = (function (_super) {
        __extends(BtnBackHomeSkin, _super);
        function BtnBackHomeSkin() {
            _super.call(this);
            this.__s = egret.gui.setProperties;
            this.elementsContent = [];
            this.__4_i();
            this.__5_i();
            this.__6_i();
            this.states = [
                new egret.gui.State("up", [
                    new egret.gui.AddItems("__5", "", "last", "")
                ]),
                new egret.gui.State("down", [
                    new egret.gui.AddItems("__4", "", "last", "")
                ]),
                new egret.gui.State("disabled", [
                    new egret.gui.AddItems("__6", "", "last", "")
                ])
            ];
        }
        var __egretProto__ = BtnBackHomeSkin.prototype;
        __egretProto__.__4_i = function () {
            var t = new egret.gui.UIAsset();
            this.__4 = t;
            this.__s(t, ["source", "x", "y"], ["back_btn_sel_png", 0, 0]);
            return t;
        };
        __egretProto__.__5_i = function () {
            var t = new egret.gui.UIAsset();
            this.__5 = t;
            this.__s(t, ["source", "x", "y"], ["back_btn_nor_png", 0, 0]);
            return t;
        };
        __egretProto__.__6_i = function () {
            var t = new egret.gui.UIAsset();
            this.__6 = t;
            this.__s(t, ["source", "x", "y"], ["back_btn_nor_png", 0, 0]);
            return t;
        };
        return BtnBackHomeSkin;
    })(egret.gui.Skin);
    skins.BtnBackHomeSkin = BtnBackHomeSkin;
    BtnBackHomeSkin.prototype.__class__ = "skins.BtnBackHomeSkin";
})(skins || (skins = {}));
