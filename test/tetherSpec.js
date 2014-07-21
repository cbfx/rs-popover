describe('rs.popover.tether', function () {
  var $window, tether, element, target, attachment;

  beforeEach(module('rs.popover'));

  beforeEach(inject(function (_$window_, _tether_) {
    $window = angular.element(_$window_);
    tether = _tether_;

    attachment = tether.attach(element, target);
    spyOn(attachment, 'position');
  }));

  describe('attach', function () {
    it('triggers reposition when scroll occurs', function () {
      $window.triggerHandler('scroll');

      expect(attachment.position).toHaveBeenCalled();
    });

    it('triggers reposition when window resizes', function () {
      $window.triggerHandler('resize');

      expect(attachment.position).toHaveBeenCalled();
    });
  });

  describe('detach', function () {
    it('does not trigger reposition after being detached', function () {
      tether.detach(element);

      $window.triggerHandler('scroll');

      expect(attachment.position).not.toHaveBeenCalled();
    });
  });
});
